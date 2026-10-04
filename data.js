// ============================================================
//  EDIT THIS FILE TO UPDATE THE WEBSITE
//  News: add a new block at the TOP of NEWS (newest first).
//  Papers: add a new block at the TOP of PUBLICATIONS.
//  media: an .mp4 (plays as video) or an image (.jpg/.png).
//  Your name in authors is bolded automatically.
// ============================================================

const NEWS = [
  { date: "20/02/2026", text: "Skullptor paper got accepted to <strong>CVPR 2026</strong>. Skullptor reconstructs high-fidelity 3D heads in seconds by predicting view-consistent normals from a sparse set of input images and camera poses. More details from <a href='https://ubisoft-laforge.github.io/character/skullptor/'>Here</a>" },
  { date: "06/07/2025", text: "A new <a href='https://www.ubisoft.com/en-us/studio/laforge/news/5hypnC0mKU3LY4t4eHxnjR/mosar-gnration-davatars-de-personnage-fiables-partir-dun-simple-portrait-photo'>blog</a> post on Ubisoft website, showcasing our work on the paper <a href='https://ubisoft-laforge.github.io/character/mosar/'>MoSAR</a>, a technique used by artists to streamline their workflow." },
  { date: "25/06/2025", text: "SEREP paper got accepted to <strong>ICCV 2025</strong>. We introduce a novel learning-based method for monocular facial expression capture and retargeting. More details from <a href='https://ubisoft-laforge.github.io/character/serep/'>Here</a>" },
  { date: "20/05/2025", text: "One paper accepted to 'AI for Creative Visual Content Generation Editing and Understanding' (CVEU), <strong>CVPR 2025</strong>. We propose a texture generator model giving artists control over shape, skin tone and fine details. More details from <a href='https://ubisoft-laforge.github.io/character/GeoAwareTextures3D/index.html'>Here</a>" },
  { date: "09/03/2024", text: "We released <strong>FFHQ-UV-Intrinsics</strong> dataset that contains intrinsics texture maps for 10K subjects at HD resolution. Download it from <a href='https://github.com/ubisoft/ubisoft-laforge-FFHQ-UV-Intrinsics'>here</a>" },
  { date: "01/03/2024", text: "Mosar paper got accepted to <strong>CVPR 2024</strong>. MoSAR turns a portrait image into a relightable 3D avatar. More details from <a href='https://ubisoft-laforge.github.io/character/mosar/'>Here</a>" },
  { date: "05/04/2023", text: "We published a technical paper showcasing our FaceLab solution, which was used by artists to capture 3D facial performance for the 2019 film <a href='https://www.imdb.com/title/tt5697572/'>Cats</a>." },
  { date: "01/02/2023", text: "S2F2 paper got accepted to <strong>FG2023</strong>. S2F2 is a robust self-supervised model that estimate 3D shape and reflectance from a monocular image. More details from <a href='https://youtu.be/DiHpZjx1sxc'>Here</a>" },
  { date: "18/05/2022", text: "DeepNextFace is a 3D face reconstruction library from a single monocular RGB image via deep convolutional neural networks and differentiable ray tracing. Check it from <a href='https://github.com/abdallahdib/DeepNextFace'>https://github.com/abdallahdib/DeepNextFace</a>" },
  { date: "21/04/2022", text: "NextFace is a lightweight open source library, written in pytorch, for high fidelity face reconstruction. Check it from <a href='https://github.com/abdallahdib/NextFace'>https://github.com/abdallahdib/NextFace</a>" },
  { date: "11/10/2021", text: "Our paper on self-supervised monocular 3D face reconstruction got accepted to <strong>ICCV 2021</strong>. More details from <a href='https://www.youtube.com/watch?v=VVr_bbXEjxE'>Here</a>" },
  { date: "09/03/2021", text: "Our paper on monocular 3D face reconstruction got accepted to <strong>EuroGraphics 2021</strong>. We achieve realistic 3D face reconstruction from a single image. More details from <a href='https://github.com/abdallahdib/NextFace'>Here</a>" },
];

const PUBLICATIONS = [
  {
    title: "KM-Speaker: Keypoint-Based Style Control for High-Quality Speech-Driven 3D Facial Animation and Dialogue Localization",
    authors: "Arthur Josi, Emeline Got, Abdallah Dib, Luiz Gustavo Hafemann, Rafael M. O. Cruz",
    venue: "SIGGRAPH ASIA 2026",
    media: "https://abdallahdib.github.io/images/kmspeaker.mp4",
    links: {"Paper": "https://arxiv.org/abs/2606.28568", "Project": "https://ubisoft-laforge.github.io/character/kmspeaker/"}
  },
  {
    title: "Skullptor: High Fidelity 3D Head Reconstruction in Seconds with Multi-View Normal Prediction",
    authors: "Noé Artru, Rukhshanda Hussain, Emeline Got, Alexandre Messier, David Lindell, Abdallah Dib",
    venue: "IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR 2026)",
    media: "https://abdallahdib.github.io/images/skullptor.mp4",
    links: {"Paper": "https://arxiv.org/abs/2602.21100", "Project": "https://ubisoft-laforge.github.io/character/skullptor/"}
  },
  {
    title: "SEREP: Semantic Facial Expression Representation for Robust In-the-Wild Capture and Retargeting",
    authors: "Arthur Josi, Luiz Gustavo Hafemann, Abdallah Dib, Emeline Got, Rafael MO Cruz, Marc-Andre Carbonneau",
    venue: "International Conference on Computer Vision (ICCV 2025)",
    media: "https://abdallahdib.github.io/images/serep.mp4",
    links: {"Paper": "https://arxiv.org/pdf/2412.14371", "Project": "https://ubisoft-laforge.github.io/character/serep/"}
  },
  {
    title: "Geometry-Aware Texture Generation for 3D Head Modeling with Artist-driven Control",
    authors: "Amin Fadaeinejad, Abdallah Dib, Luiz Gustavo Hafemann, Emeline Got, Trevor Anderson, Amaury Depierre, Nikolaus F. Troje, Marcus A Brubaker, Marc-Andre Carbonneau",
    venue: "AI for Creative Visual Content Generation Editing and Understanding (CVEU), CVPR 2025",
    media: "https://abdallahdib.github.io/images/geomAware_Fadaeinejad_small.jpg",
    links: {"Paper": "https://arxiv.org/pdf/2505.04387", "Project": "https://ubisoft-laforge.github.io/character/GeoAwareTextures3D/index.html"}
  },
  {
    title: "MoSAR: Monocular Semi-Supervised Model for Avatar Reconstruction using Differentiable Shading",
    authors: "Abdallah Dib, Luiz Gustavo Hafemann, Emeline Got, Trevor Anderson, Amin Fadaeinejad, Rafael M. O. Cruz, Marc-Andre Carbonneau",
    venue: "IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR 2024)",
    media: "https://abdallahdib.github.io/images/mosar.mp4",
    links: {"Paper": "https://arxiv.org/abs/2312.13091", "Project": "https://ubisoft-laforge.github.io/character/mosar/", "Dataset": "https://github.com/ubisoft/ubisoft-laforge-FFHQ-UV-Intrinsics"}
  },
  {
    title: "S2F2: Self-Supervised High Fidelity Face Reconstruction From Monocular Image",
    authors: "Abdallah Dib, Cedric Thebault, Junghyun Ahn, Philippe-Henri Gosselin, Louis Chevallier",
    venue: "International Conference on Automatic Face and Gesture Recognition FG 2023",
    media: "https://abdallahdib.github.io/images/s2f2.mp4",
    links: {"Paper": "https://arxiv.org/abs/2203.07732", "Video": "https://youtu.be/DiHpZjx1sxc"}
  },
  {
    title: "Practical Face Reconstruction via Differentiable Ray Tracing",
    authors: "Abdallah Dib, Gaurav Bharaj, Junghyun Ahn, Cédric Thébault, Philippe-Henri Gosselin, Marco Romeo, Louis Chevallier",
    venue: "Computer Graphics Forum, Eurographics' 2021",
    media: "https://abdallahdib.github.io/images/practical.mp4",
    links: {"Paper": "https://arxiv.org/abs/2101.05356", "Video": "https://youtu.be/bPFp0oZ9plg", "Code": "https://github.com/abdallahdib/NextFace"}
  },
  {
    title: "Towards High Fidelity Monocular Face Reconstruction with Rich Reflectance using Self-supervised Learning and Ray Tracing",
    authors: "Abdallah Dib, Cedric Thebault, Junghyun Ahn, Philippe-Henri Gosselin, Christian Theobalt, Louis Chevallier",
    venue: "International Conference on Computer Vision (ICCV 2021)",
    media: "https://abdallahdib.github.io/images/towards.mp4",
    links: {"Paper": "https://arxiv.org/abs/2103.15432", "Video": "https://www.youtube.com/watch?v=VVr_bbXEjxE", "Code": "https://github.com/abdallahdib/DeepNextFace"}
  },
  {
    title: "PhotoApp: Photorealistic Appearance Editing of Head Portraits",
    authors: "Mallikarjun B R, Ayush Tewari, Abdallah Dib, Tim Weyrich, Bernd Bickel, Hans-Peter Seidel, Hanspeter Pfister, Wojciech Matusik, Louis Chevallier, Mohamed Elgharib, Christian Theobalt",
    venue: "ACM Transactions on Graphics (SIGGRAPH Asia 2021)",
    media: "https://abdallahdib.github.io/images/malikarjun2021photoapp_small.jpg",
    links: {"Paper": "https://arxiv.org/abs/2103.07658", "Project": "http://gvv.mpi-inf.mpg.de/projects/PhotoApp/"}
  },
];

const PROJECTS = [
  {
    title: "MoSAR",
    text: "Turns a single portrait photo into a fully relightable, detailed 3D avatar, streamlining character creation for artists. Featured on the Ubisoft blog.",
    media: "https://abdallahdib.github.io/images/mosar-laforge_small.mp4",
    links: {"Blog": "https://www.ubisoft.com/en-us/studio/laforge/news/5hypnC0mKU3LY4t4eHxnjR/mosar-gnration-davatars-de-personnage-fiables-partir-dun-simple-portrait-photo", "Project": "https://ubisoft-laforge.github.io/character/mosar/"}
  },
  {
    title: "FaceLab",
    text: "Facial performance capture from single-camera footage, used by MPC artists on 260+ shots of the 2019 film <i>Cats</i>.",
    media: "https://abdallahdib.github.io/images/universal_facelab_demo_small.mp4",
    links: {"Paper": "https://dl.acm.org/doi/pdf/10.1145/3403736.3403938"}
  },
  {
    title: "NextFace",
    text: "Open-source PyTorch library for high-fidelity 3D face reconstruction: geometry, PBR materials, camera and illumination. 770+ stars.",
    media: "https://abdallahdib.github.io/images/nextFace_small.jpg",
    links: {"GitHub": "https://github.com/abdallahdib/NextFace"}
  },
  {
    title: "FFHQ-UV-Intrinsics",
    text: "Dataset of intrinsic maps (diffuse, specular, AO, translucency, normals) for 10,000 subjects.",
    media: "https://abdallahdib.github.io/images/ffhq.jpg",
    links: {"GitHub": "https://github.com/ubisoft/ubisoft-laforge-FFHQ-UV-Intrinsics"}
  },
];
