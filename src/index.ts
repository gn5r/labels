import type { Label } from "types";
import { existsSync, mkdirSync, promises } from "fs";

const labels: Label[] = [
  {
    name: "bug",
    description: "Something isn't working",
    color: "d73a4a",
  },
  {
    name: "dependencies",
    description: "Pull requests that update a dependency file",
    color: "0366d6",
  },
  {
    name: "duplicate",
    description: "This issue or pull request already exists",
    color: "cfd3d7",
  },
  {
    name: "wontfix",
    description: "This will not be worked on",
    color: "ffffff",
  },
  {
    name: "fix",
    description: "A bug fix",
    color: "d73a4a",
  },
  {
    name: "feature",
    description: "A new feature",
    color: "a2eeef",
  },
];

const targetDir = "dist";
if (!existsSync(targetDir)) mkdirSync(targetDir, 0o755);
promises
  .writeFile(`${targetDir}/label.json`, JSON.stringify(labels, null, 2))
  .then(() => console.log("create json file"))
  .catch((err) => console.error("failed to create json file:", err));
