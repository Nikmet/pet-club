import { existsSync, renameSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const ffmpegBin = "ffmpeg";

const run = (args) => {
  const result = spawnSync(ffmpegBin, ["-loglevel", "error", ...args], {
    stdio: "inherit",
    cwd: root
  });

  if (result.status !== 0) {
    throw new Error(`ffmpeg command failed: ${args.join(" ")}`);
  }
};

const replaceFile = (src, tmp, args) => {
  const input = join(root, src);
  if (!existsSync(input)) return;
  run(["-y", "-i", src, ...args, tmp]);
  renameSync(join(root, tmp), input);
};

const shouldSkip = (relativePath, maxSizeBytes) => {
  const absolutePath = join(root, relativePath);
  if (!existsSync(absolutePath)) return false;
  return statSync(absolutePath).size <= maxSizeBytes;
};

const optimizeImages = () => {
  if (!shouldSkip("public/hero.jpg", 220_000)) {
    replaceFile("public/hero.jpg", "public/hero.tmp.jpg", ["-frames:v", "1", "-q:v", "5", "-update", "1"]);
  }

  if (!shouldSkip("public/hero2.jpg", 150_000)) {
    replaceFile("public/hero2.jpg", "public/hero2.tmp.jpg", ["-frames:v", "1", "-q:v", "5", "-update", "1"]);
  }

  if (!shouldSkip("public/about.jpg", 220_000)) {
    replaceFile("public/about.jpg", "public/about.tmp.jpg", ["-frames:v", "1", "-q:v", "5", "-update", "1"]);
  }

  if (!shouldSkip("public/avatar.png", 70_000)) {
    replaceFile("public/avatar.png", "public/avatar.tmp.png", [
      "-vf",
      "scale=160:-2:flags=lanczos",
      "-compression_level",
      "9",
      "-update",
      "1"
    ]);
  }
};

const optimizeVideos = () => {
  const ids = ["g1", "g2", "g3", "g4", "g5", "g6", "g7"];

  ids.forEach((id) => {
    const source = `public/gallery/${id}.mp4`;
    if (!existsSync(join(root, source))) return;

    const tmp = `public/gallery/${id}.tmp.mp4`;
    const poster = `public/gallery/${id}-poster.jpg`;

    if (!shouldSkip(source, id === "g2" ? 2_000_000 : 1_200_000)) {
      run([
        "-y",
        "-i",
        source,
        "-vf",
        "scale='if(gt(iw,540),540,iw)':-2:flags=lanczos,fps=24",
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        "29",
        "-an",
        "-movflags",
        "+faststart",
        tmp
      ]);

      renameSync(join(root, tmp), join(root, source));
    }

    if (!existsSync(join(root, poster))) {
      run(["-y", "-ss", "00:00:00.7", "-i", source, "-frames:v", "1", "-q:v", "4", "-update", "1", poster]);
    }
  });
};

try {
  optimizeImages();
  optimizeVideos();
  console.log("Media assets have been optimized.");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
