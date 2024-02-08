export enum ReleaseType {
  Album = "Full-length Album",
  Single = "Single",
  Remix = "Remix",
}

export interface Release {
  name: string;
  cover: string;
  type: ReleaseType;
  date: string;
  tracklist: string[];
  hideDate?: boolean;
}

const RELEASES: Release[] = [
  {
    name: "Data Renaissance",
    cover: "./images/releases/datarenaissance.jpg",
    type: ReleaseType.Album,
    date: "03/06/2022",
    tracklist: [
      "Segmentation Fault",
      "Interrupt Handler",
      "Decompilation",
      "Readonly",
      "Cryptographic Memory",
      "Object Resurrection",
      "Multithreading",
      "Oracle Machine",
      "Data Renaissance",
      "Inline Assembly"
    ],
  },
  {
    name: "Segmentation Fault",
    cover: "./images/releases/segmentation.jpg",
    type: ReleaseType.Single,
    date: "07/07/2021",
    tracklist: ["Interrupt Handler"],
  },
  {
    name: "Interrupt Handler",
    cover: "./images/releases/interrupt.jpg",
    hideDate: true,
    type: ReleaseType.Single,
    date: "28/05/2021",
    tracklist: ["Interrupt Handler"],
  },
  /*  {
    name: "???????? (WIP)",
    hideDate: true,
    cover: "",
    type: ReleaseType.Album,
    date: "XX/XX/2021",
    tracklist: ["Interrupt Handler", "Segmentation Fault"],
  }, */
  {
    name: "Compiler Optimization Techniques",
    cover: "./images/releases/cot.jpeg",
    type: ReleaseType.Album,
    date: "02/11/2018",
    tracklist: [
      "Cluster",
      "Fragmentation",
      "Superscalar",
      "Binary Space",
      "Sentinel Node",
    ],
  },
  {
    name: "Brute Force",
    cover: "./images/releases/bruteforce.jpeg",
    type: ReleaseType.Album,
    date: "01/04/2016",
    tracklist: [
      "Boot",
      "Floating Point",
      "Pointers",
      "Brute Force",
      "Userspace",
      "Shellcode",
      "Hex",
      "Deadlock feat. Igorrr",
      "Rootkit",
      "Trojans (Hard Mode)",
    ],
  },
  {
    name: "Octopus 4",
    cover: "./images/releases/octopus.jpeg",
    type: ReleaseType.Album,
    date: "02/06/2014",
    tracklist: [
      "AutoRun",
      "Discovery",
      "_MOS (feat. Mike Malyan)",
      "will_smith",
      "ピタゴラスPYTHAGORAS",
      "Synthesiz3r",
      "Damage Points",
      "Void",
      "Loading",
      "Un Dernier Combat",
      "Recovery Fail!",
      "Octopus4",
    ],
  },
  {
    name: "Polymorphic Code",
    cover: "./images/releases/polymorphic.jpeg",
    type: ReleaseType.Album,
    date: "19/12/2012",
    tracklist: [
      "Handshake",
      "Bouncing Dot",
      "Trojans",
      "Access Granted",
      "Logic Bomb",
      "Warp Gate Exploit",
      "Null",
      "Panic",
    ],
  },
];

export default RELEASES;
