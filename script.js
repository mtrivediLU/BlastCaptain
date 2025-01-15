/*******************************************************
 * script.js
 * Shows blasts with local MP4 videos + expandable
 * "Full Details" sections for all data from your Excel.
 * Includes a Confidence Meter radar chart for Judging Criteria.
 ******************************************************/

/**
 * Each object in blastsData:
 * - Basic info displayed on the card.
 * - videoPath points to your local /media folder.
 * - fullDetails is the entire text from the spreadsheet.
 * - scoringFactors is an object containing scores for each criterion.
 * - scoringReasons is an object containing reasons for each score.
 */
const blastsData = [
  {
    blastID: "364_303",
    totalScore: 25,
    projectName: "C1_364_303",
    planTitle: "Drill & Blast Plan",
    date: "2024-03-10",
    designer: "(Drawn by) Cody Gollan",
    purpose: "Production Blast",
    videoPath: "media/364_303_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 5,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported",
      "Fragmentation": "Excellent fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Number of Holes:</strong> 185<br/>
      <strong>Total Charge (kg):</strong> 12,550<br/>
      <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
      <strong>Estimated Total Tonnage (t):</strong> 50,400<br/>
      <strong>Depth Tolerance (m):</strong> ±0.2<br/>
      <strong>Predicted Max PPV @ Dam (mm/s):</strong> 9.7<br/>
      <strong>Propagation Direction:</strong> The explosions propagate in a diagonal sequence from the bottom-left to the top-right, aligning with the planned direction. Synchronization is maintained, with no visible irregularities or skipped detonations. 
      Delays and Skipped Detonations: The sequence exhibits no delays or skipped detonations, indicating a reliable electronic initiation system.<br/>
      <strong>Fragmentation Quality:</strong> Fragmentation is excellent, with predominantly fine and medium-sized particles distributed throughout the muck pile. A minimal presence of oversized boulders is observed near the edges, suggesting optimal energy distribution.<br/>
      <strong>Muck Pile Formation:</strong> The muck pile forms a consistent, rounded shape with a slight elevation at the center. The spread is even, with no excessive throw or uneven distribution, confirming effective energy utilization.<br/>
      <strong>Dust/Smoke Observations:</strong> The dust cloud is moderately dense and dissipates within 6–8 seconds, consistent with stemming heights of 3.5 m and 4.5 m.<br/>
      <strong>Potential Hazards:</strong> Minimal flying debris is observed, ensuring a safe blast environment. No visible impacts on geofences, slopes, or nearby structures are detected.<br/>
      <strong>Key Parameters:</strong> The observed burden, spacing, stemming height, and powder factor align closely with the blast design parameters. The explosive density and firing sequence are optimized for achieving the desired fragmentation and muck pile characteristics.<br/>
      <strong>Checklist Compliance:</strong> The execution adheres to the design checklist, with only minor deviations in edge alignment.<br/>
      <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
      Uniformity of Fragmentation: Excellent 
      Muck Pile Formation: Consistent and evenly distributed 
      Execution of Design: Precise<br/>
      <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
      Fragmentation: Adjust burden or stemming heights slightly near the edges to address localized oversized boulders. 
      Environmental Impact: Enhance dust suppression measures to minimize the density of the dust cloud. 
      Execution Consistency: Maintain edge alignment precision to further optimize energy distribution.<br/>
      <strong>Drill Hole Alignment:</strong> Drill hole alignment is uniform and adheres to the planned 4.6 m burden and 5.3 m spacing. Minor deviations are visible along the boundaries but do not significantly affect the blast outcome. Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones are detected, indicating thorough detonation and effective fragmentation.<br/>
    `
  },
  {
    blastID: "352_131",
    totalScore: 24,
    projectName: "C1_352_131A",
    planTitle: "Drill & Blast Plan",
    date: "2024-03-13",
    designer: "(Drawn by) Abdoul Kabore",
    purpose: "Production Blast (Split from C1_352_131)",
    videoPath: "media/352_131_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 4,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Good fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Number of Holes:</strong> 481 + 8 BMM<br/>
      <strong>Total Charge (kg):</strong> 191,500<br/>
      <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
      <strong>Estimated Total Tonnage (t):</strong> 540,000<br/>
      <strong>Depth Tolerance (m):</strong> ±0.2<br/>
      <strong>Predicted Max PPV @ Dam (mm/s):</strong> 12.3<br/>
      <strong>Propagation Direction:</strong> The explosions propagate as planned in a diagonal pattern, moving from the bottom-left to the top-right. Synchronization is consistent, though minor timing irregularities are visible near the midpoint of the sequence. 
      Delays and Skipped Detonations: Delays were minimal and did not significantly impact the overall execution. There were no skipped detonations, suggesting reliable initiation.<br/>
      <strong>Fragmentation Quality:</strong> Predominantly fine and medium-sized fragments, indicating effective energy distribution. Some oversized boulders are observed near the eastern edge, likely due to insufficient confinement. Large unbroken sections are absent, showing good blast efficiency.<br/>
      <strong>Muck Pile Formation:</strong> The muck pile is well-formed with a consistent spread, slightly higher in the central region. No excessive throw or uneven distribution was observed, indicating balanced energy utilization.<br/>
      <strong>Dust/Smoke Observations:</strong> The dust cloud was moderately dense, dispersing within 10–12 seconds. This aligns with stemming heights of 3.5 m and 4.5 m.<br/>
      <strong>Potential Hazards:</strong> Minimal flying debris observed, indicating well-controlled energy release. No visible impacts on nearby geofences or infrastructure, ensuring adherence to safety standards.<br/>
      <strong>Key Parameters:</strong> The observed burden, spacing, stemming height, and powder factor align closely with the blast design parameters. The powder factor and explosive density appear adequate for achieving the desired fragmentation and muck pile formation.<br/>
      <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with only minor deviations in edge spacing.<br/>
      <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
      Uniformity of Fragmentation: Good 
      Muck Pile Formation: Consistent and well-distributed 
      Execution of Design: Precise with minor deviations<br/>
      <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
      Fragmentation: Fine-tune burden and spacing to improve fragmentation uniformity, particularly at the boundaries. Adjust powder factor or explosive placement to address oversized boulders. 
      Environmental Impact: Consider additional dust suppression measures for faster dissipation. 
      Execution Consistency: Further refine initiation synchronization to eliminate minor timing irregularities.<br/>
      <strong>Drill Hole Alignment:</strong> Drill hole alignment appears consistent, closely matching the planned 4.6 m burden and 5.3 m spacing. Minor deviations in spacing are visible along the edges. Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones were identified, suggesting proper energy confinement and effective explosive placement.<br/>
    `
  },
  {
    blastID: "352_312",
    totalScore: 24,
    projectName: "C1_352_312",
    planTitle: "Drill & Blast Plan",
    date: "2024-04-19",
    designer: "(Drawn by) Vanessa Montoya",
    purpose: "Production Blast",
    videoPath: "media/352_312_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 4,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported",
      "Fragmentation": "Good fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Number of Holes:</strong> 352 + 2 BMM<br/>
      <strong>Total Charge (kg):</strong> 66,345.20<br/>
      <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
      <strong>Estimated Total Tonnage (t):</strong> 279,323.60<br/>
      <strong>Depth Tolerance (m):</strong> -0.2<br/>
      <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
      <strong>Propagation Direction:</strong> The explosions propagate in a linear sequence from left to right, following the planned direction. Synchronization is mostly maintained, though minor timing irregularities were observed in the second sequence. 
      Delays and Skipped Detonations: A slight delay occurred in the central portion of the blast. However, no skipped detonations were observed, indicating a successful detonation sequence.<br/>
      <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and well-distributed, with medium-sized fragments visible throughout the muck pile. Oversized boulders are minimal and localized at the left boundary.<br/>
      <strong>Muck Pile Formation:</strong> The muck pile forms a consistent shape, slightly higher in the center, with good spread toward the edges. There is no significant excessive throw or uneven distribution, confirming effective explosive energy utilization.<br/>
      <strong>Dust/Smoke Observations:</strong> A dense dust cloud forms immediately post-blast, dissipating within 8–10 seconds. This aligns with the 3.5 m and 4.5 m stemming heights, which appear effective in controlling dust.<br/>
      <strong>Potential Hazards:</strong> Minimal flying debris was noted, ensuring safety. No visible impacts on geofences, nearby structures, or slopes were detected.<br/>
      <strong>Key Parameters:</strong> Observed burden, spacing, stemming height, and powder factor align with the provided design parameters. Explosive density appears optimal for achieving the desired fragmentation and muck pile characteristics.<br/>
      <strong>Checklist Compliance:</strong> The blast adheres to the design checklist, with minor deviations in timing and edge alignment.<br/>
      <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
      Uniformity of Fragmentation: Excellent 
      Muck Pile Formation: Consistent and evenly spread 
      Execution of Design: Precise with minor deviations<br/>
      <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
      Fragmentation: Adjust the burden or explosive distribution near the boundaries to reduce oversized boulders. 
      Environmental Impact: Slightly increase stemming heights in specific areas to further minimize dust density. 
      Execution Consistency: Fine-tune the electronic initiation system to eliminate minor timing irregularities in the central sequences.<br/>
      <strong>Drill Hole Alignment:</strong> Drill holes are uniformly aligned, adhering closely to the planned 4.6 m burden and 5.3 m spacing. Slight deviations are noted along the eastern edge. 
      Bootlegs and Unfragmented Zones: Bootlegs are minimal, with no significant unfragmented zones detected. This indicates thorough energy confinement and proper explosive placement.<br/>
    `
  },
  {
    blastID: "340_102",
    totalScore: 23,
    projectName: "C1_340_102",
    planTitle: "Drill & Blast Plan",
    date: "2024-03-16",
    designer: "(Drawn by) Abdoul Kabore",
    purpose: "Production Blast Design",
    videoPath: "media/340_102_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 3,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Moderate fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 340_102<br/>
      <strong>Total Score:</strong> 23<br/>
      <strong>Project Name:</strong> C1_340_102<br/>
      <strong>Date:</strong> 2024-03-16<br/>
      <strong>Designer:</strong> (Drawn by) Abdoul Kabore<br/>
      <strong>Number of Holes:</strong> 111<br/>
      <strong>Total Charge (kg):</strong> 29,200<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 3<br/>
      <strong>Fragmentation_Reason:</strong> Moderate fragmentation<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_121",
    totalScore: 23,
    projectName: "C1_352_121",
    planTitle: "Drill & Blast Plan",
    date: "2024-01-11",
    designer: "(Drawn by) Cody Gollan",
    purpose: "Production Blast Design",
    videoPath: "media/352_121_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 3,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported",
      "Fragmentation": "Moderate fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_121<br/>
      <strong>Total Score:</strong> 23<br/>
      <strong>Project Name:</strong> C1_352_121<br/>
      <strong>Date:</strong> 2024-01-11<br/>
      <strong>Designer:</strong> (Drawn by) Cody Gollan<br/>
      <strong>Number of Holes:</strong> [blank]<br/>
      <strong>Total Charge (kg):</strong> 164,500<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported<br/>
      <strong>Fragmentation_Score:</strong> 3<br/>
      <strong>Fragmentation_Reason:</strong> Moderate fragmentation<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_137",
    totalScore: 23,
    projectName: "C1_352_137",
    planTitle: "Drill & Blast Plan",
    date: "2024-04-22",
    designer: "(Drawn by) Vanessa Montoya B.",
    purpose: "Production Blast Design",
    videoPath: "media/352_137_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 3,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Moderate fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_137<br/>
      <strong>Total Score:</strong> 23<br/>
      <strong>Project Name:</strong> C1_352_137<br/>
      <strong>Date:</strong> 2024-04-22<br/>
      <strong>Designer:</strong> (Drawn by) Vanessa Montoya B.<br/>
      <strong>Number of Holes:</strong> 766 total<br/>
      <strong>Total Charge (kg):</strong> 282,020<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 3<br/>
      <strong>Fragmentation_Reason:</strong> Moderate fragmentation<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_103",
    totalScore: 22,
    projectName: "[blank]",
    planTitle: "[blank]",
    date: "[blank]",
    designer: "[blank]",
    purpose: "[blank]",
    videoPath: "media/352_103_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 2,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Moderate: insufficient data",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_103<br/>
      <strong>Total Score:</strong> 22<br/>
      <strong>Project Name:</strong> [blank]<br/>
      <strong>Date:</strong> [blank]<br/>
      <strong>Designer:</strong> [blank]<br/>
      <strong>Number of Holes:</strong> [blank]<br/>
      <strong>Total Charge (kg):</strong> [blank]<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 2<br/>
      <strong>Fragmentation_Reason:</strong> Moderate: insufficient data<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_132",
    totalScore: 22,
    projectName: "C1_352_132",
    planTitle: "Drill & Blast Plan",
    date: "2024-03-09",
    designer: "(Drawn by) Cody Gollan",
    purpose: "Production Blast Design",
    videoPath: "media/352_132_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 3,
      "Muck Pile": 4,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported",
      "Fragmentation": "Moderate fragmentation",
      "Muck Pile": "Good: only minor variations",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_132<br/>
      <strong>Total Score:</strong> 22<br/>
      <strong>Project Name:</strong> C1_352_132<br/>
      <strong>Date:</strong> 2024-03-09<br/>
      <strong>Designer:</strong> (Drawn by) Cody Gollan<br/>
      <strong>Number of Holes:</strong> 203 Production + 3 BMM + 1 BMM<br/>
      <strong>Total Charge (kg):</strong> 79,600<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported<br/>
      <strong>Fragmentation_Score:</strong> 3<br/>
      <strong>Fragmentation_Reason:</strong> Moderate fragmentation<br/>
      <strong>MuckPile_Score:</strong> 4<br/>
      <strong>MuckPile_Reason:</strong> Good: only minor variations<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "364_105",
    totalScore: 22,
    projectName: "C1_364_105",
    planTitle: "Drill & Blast Plan (Pattern Layout)",
    date: "2023-11-30",
    designer: "(Drawn by) Vanessa Montoya",
    purpose: "Production Blast Design",
    videoPath: "media/364_105_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 2,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Moderate: insufficient data",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 364_105<br/>
      <strong>Total Score:</strong> 22<br/>
      <strong>Project Name:</strong> C1_364_105<br/>
      <strong>Date:</strong> 2023-11-30<br/>
      <strong>Designer:</strong> (Drawn by) Vanessa Montoya<br/>
      <strong>Number of Holes:</strong> 632 + 7 BMM<br/>
      <strong>Total Charge (kg):</strong> 176,022<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 2<br/>
      <strong>Fragmentation_Reason:</strong> Moderate: insufficient data<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_108",
    totalScore: 20,
    projectName: "C1_352_108",
    planTitle: "Drill & Blast Plan",
    date: "2024-02-26",
    designer: "(Drawn by) Tebatso Mothupi",
    purpose: "Production Blast",
    videoPath: "media/352_108_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 3,
      "Muck Pile": 5,
      "Environmental": 2,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported",
      "Fragmentation": "Moderate fragmentation",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Moderate: insufficient data",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_108<br/>
      <strong>Total Score:</strong> 20<br/>
      <strong>Project Name:</strong> C1_352_108<br/>
      <strong>Date:</strong> 2024-02-26<br/>
      <strong>Designer:</strong> (Drawn by) Tebatso Mothupi<br/>
      <strong>Number of Holes:</strong> 367<br/>
      <strong>Total Charge (kg):</strong> 85,000<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported<br/>
      <strong>Fragmentation_Score:</strong> 3<br/>
      <strong>Fragmentation_Reason:</strong> Moderate fragmentation<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 2<br/>
      <strong>Environmental_Reason:</strong> Moderate: insufficient data<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "328_109",
    totalScore: 19,
    projectName: "C1_328_109",
    planTitle: "Drill & Blast Plan",
    date: "2024-10-04",
    designer: "Cody Gollan",
    purpose: "Production Blast Design",
    videoPath: "media/328_109_Short.mp4",
    scoringFactors: {
      "Synchronization": 2,
      "Fragmentation": 2,
      "Muck Pile": 5,
      "Environmental": 5,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Poor: significant delays or issues; plus consistent propagation",
      "Fragmentation": "Moderate: insufficient data",
      "Muck Pile": "Excellent/Consistent muck pile",
      "Environmental": "Excellent: minimal debris, no visible impacts",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 328_109<br/>
      <strong>Total Score:</strong> 19<br/>
      <strong>Project Name:</strong> C1_328_109<br/>
      <strong>Date:</strong> 2024-10-04<br/>
      <strong>Designer:</strong> Cody Gollan<br/>
      <strong>Number of Holes:</strong> 792 + 58 BM<br/>
      <strong>Total Charge (kg):</strong> 358,507<br/>
      <strong>Synchronization_Score:</strong> 2<br/>
      <strong>Synchronization_Reason:</strong> Poor: significant delays or issues; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 2<br/>
      <strong>Fragmentation_Reason:</strong> Moderate: insufficient data<br/>
      <strong>MuckPile_Score:</strong> 5<br/>
      <strong>MuckPile_Reason:</strong> Excellent/Consistent muck pile<br/>
      <strong>Environmental_Score:</strong> 5<br/>
      <strong>Environmental_Reason:</strong> Excellent: minimal debris, no visible impacts<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  },
  {
    blastID: "352_138",
    totalScore: 15,
    projectName: "C1_352_138",
    planTitle: "Drill & Blast Plan (Pattern Layout)",
    date: "2024-04-16",
    designer: "(Drawn by) Vanessa Montoya B.",
    purpose: "Production Blast Design",
    videoPath: "media/352_138_Short.mp4",
    scoringFactors: {
      "Synchronization": 5,
      "Fragmentation": 1,
      "Muck Pile": 2,
      "Environmental": 2,
      "Checklist": 5
    },
    scoringReasons: {
      "Synchronization": "Excellent: no delays or skipped detonations reported; plus consistent propagation",
      "Fragmentation": "Poor fragmentation",
      "Muck Pile": "Poor/Uneven muck pile",
      "Environmental": "Moderate: insufficient data",
      "Checklist": "Fully adheres to the design checklist"
    },
    fullDetails: `
      <strong>Blast ID:</strong> 352_138<br/>
      <strong>Total Score:</strong> 15<br/>
      <strong>Project Name:</strong> C1_352_138<br/>
      <strong>Date:</strong> 2024-04-16<br/>
      <strong>Designer:</strong> (Drawn by) Vanessa Montoya B.<br/>
      <strong>Number of Holes:</strong> 212 + 8 BMM<br/>
      <strong>Total Charge (kg):</strong> 58,918<br/>
      <strong>Synchronization_Score:</strong> 5<br/>
      <strong>Synchronization_Reason:</strong> Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
      <strong>Fragmentation_Score:</strong> 1<br/>
      <strong>Fragmentation_Reason:</strong> Poor fragmentation<br/>
      <strong>MuckPile_Score:</strong> 2<br/>
      <strong>MuckPile_Reason:</strong> Poor/Uneven muck pile<br/>
      <strong>Environmental_Score:</strong> 2<br/>
      <strong>Environmental_Reason:</strong> Moderate: insufficient data<br/>
      <strong>Checklist_Score:</strong> 5<br/>
      <strong>Checklist_Reason:</strong> Fully adheres to the design checklist<br/>
    `
  }
  ];
  
  /** 
   * We only need the first 12 (or all if exactly 12). 
   * This is also where you'd slice() if you had more than 12.
   */
  let filteredData = [...blastsData]; // For search/sort
  
  // Grab container references
  const videoCardsContainer = document.getElementById("videoCardsContainer");
  const confidenceChartCanvas = document.getElementById("confidenceChart"); // Confidence Meter Canvas
  
  // If you have a search input with id="searchInput" and a sort dropdown with id="sortSelect",
  // we’ll listen to them. If not, remove or adapt these lines:
  const searchInput = document.getElementById("searchInput");    // Might be null if not in HTML
  const sortSelect = document.getElementById("sortSelect");      // Might be null if not in HTML
  
  /*******************************************************
   * renderBlasts(data):
   * 1) Clears the container.
   * 2) Determines the highest Score for highlighting.
   * 3) Builds each card.
   *******************************************************/
  function renderBlasts(data) {
    // Clear existing
    videoCardsContainer.innerHTML = "";
  
    // Find maximum score
    const maxScore = Math.max(...data.map((blast) => blast.totalScore));
  
    // Build each card
    data.forEach((blast) => {
      // Card container
      const card = document.createElement("div");
      card.classList.add("video-card");
  
      // Highlight if totalScore == maxScore
      if (blast.totalScore === maxScore) {
        card.classList.add("highlight");
      }
  
      // Video thumbnail container
      const videoThumb = document.createElement("div");
      videoThumb.classList.add("video-thumbnail");
  
      // Video element
      const videoEl = document.createElement("video");
      videoEl.src = blast.videoPath;
      videoEl.controls = true;
      videoEl.preload = "metadata";
      videoEl.width = 320;
  
      videoThumb.appendChild(videoEl);
  
      // Card content container
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      // Title: Blast ID
      const blastId = document.createElement("h3");
      blastId.textContent = `Blast ID: ${blast.blastID}`;
  
      // Total Score
      const totalScore = document.createElement("div");
      totalScore.classList.add("total-score");
      totalScore.textContent = `Total Score: ${blast.totalScore}`;
  
      // Scoring Factors
      const scoringFactors = document.createElement("div");
      scoringFactors.classList.add("scoring-factors");
      scoringFactors.innerHTML = `<h4>Scoring Factors:</h4>`;
      const scoringList = document.createElement("ul");
      for (const [factor, score] of Object.entries(blast.scoringFactors)) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span class="score">${score}/5</span>${factor}
          <button class="expand-reason-btn">View Reason</button>
          <div class="reason-details">${blast.scoringReasons[factor]}</div>
        `;
        scoringList.appendChild(listItem);
  
        // Add event listener for the expand button
        const expandBtn = listItem.querySelector(".expand-reason-btn");
        const reasonDetails = listItem.querySelector(".reason-details");
  
        expandBtn.addEventListener("click", () => {
          if (listItem.classList.contains("active")) {
            listItem.classList.remove("active");
            expandBtn.textContent = "View Reason";
          } else {
            listItem.classList.add("active");
            expandBtn.textContent = "Hide Reason";
          }
        });
      }
      scoringFactors.appendChild(scoringList);
  
      // Toggle button for full details
      const toggleBtn = document.createElement("button");
      toggleBtn.classList.add("toggle-details-btn");
      toggleBtn.textContent = "View Full Details";
  
      // Full details (hidden by default)
      const fullDetails = document.createElement("div");
      fullDetails.classList.add("full-details");
      fullDetails.innerHTML = blast.fullDetails; // Insert all Excel text
  
      // Event: toggle the display
      toggleBtn.addEventListener("click", () => {
        if (fullDetails.style.display === "block") {
          fullDetails.style.display = "none";
          toggleBtn.textContent = "View Full Details";
        } else {
          fullDetails.style.display = "block";
          fullDetails.classList.add("fade-in");
          toggleBtn.textContent = "Hide Details";
        }
      });
  
      // Assemble content
      cardContent.appendChild(blastId);
      cardContent.appendChild(totalScore);
      cardContent.appendChild(scoringFactors);
      cardContent.appendChild(toggleBtn);
      cardContent.appendChild(fullDetails);
  
      // Put it all together
      card.appendChild(videoThumb);
      card.appendChild(cardContent);
  
      videoCardsContainer.appendChild(card);
    });
  }
  
  /*******************************************************
   * initializeConfidenceMeter():
   * Initializes the Confidence Meter radar chart.
   *******************************************************/
  function initializeConfidenceMeter() {
    if (!confidenceChartCanvas) return; // Exit if the canvas doesn't exist
  
    const ctx = confidenceChartCanvas.getContext('2d');
    window.confidenceChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Synchronization',
          'Fragmentation',
          'Muck Pile',
          'Environmental',
          'Checklist'
        ],
        datasets: [{
          label: 'Confidence Level',
          data: calculateConfidenceLevels(),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: {
              stepSize: 1
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed.r}/5`;
              }
            }
          }
        }
      }
    });
  }
  
  /*******************************************************
   * calculateConfidenceLevels():
   * Calculates average scores for each Judging Criterion based on filteredData.
   *******************************************************/
  function calculateConfidenceLevels() {
    const criteria = [
      'Synchronization',
      'Fragmentation',
      'Muck Pile',
      'Environmental',
      'Checklist'
    ];
  
    const sums = {
      'Synchronization': 0,
      'Fragmentation': 0,
      'Muck Pile': 0,
      'Environmental': 0,
      'Checklist': 0
    };
  
    const counts = {
      'Synchronization': 0,
      'Fragmentation': 0,
      'Muck Pile': 0,
      'Environmental': 0,
      'Checklist': 0
    };
  
    filteredData.forEach(blast => {
      for (const [factor, score] of Object.entries(blast.scoringFactors)) {
        if (sums.hasOwnProperty(factor)) {
          sums[factor] += score;
          counts[factor] += 1;
        }
      }
    });
  
    const averages = criteria.map(factor => {
      if (counts[factor] === 0) return 0;
      return (sums[factor] / counts[factor]).toFixed(1);
    });
  
    return averages;
  }
  
  /*******************************************************
   * updateConfidenceMeter():
   * Updates the Confidence Meter based on current filtered data.
   *******************************************************/
  function updateConfidenceMeter() {
    if (!window.confidenceChart) return;
  
    window.confidenceChart.data.datasets[0].data = calculateConfidenceLevels();
    window.confidenceChart.update();
  }
  
  /*******************************************************
   * handleSearch():
   * Filters blasts by user input (case-insensitive).
   *******************************************************/
  function handleSearch() {
    const term = searchInput.value.toLowerCase();
    filteredData = blastsData.filter((blast) => {
      const idMatch = blast.blastID.toLowerCase().includes(term);
      const designerMatch = blast.designer.toLowerCase().includes(term);
      return idMatch || designerMatch;
    });
    renderBlasts(filteredData);
    updateConfidenceMeter(); // Update Confidence Meter based on filtered data
  }
  
  /*******************************************************
   * handleSort():
   * Sort blasts by Score ascending/descending, or Date ascending/descending.
   *******************************************************/
  function handleSort() {
    const sortValue = sortSelect.value;
  
    // Re-filter using search term
    const term = searchInput.value.toLowerCase();
    filteredData = blastsData.filter((blast) => {
      const idMatch = blast.blastID.toLowerCase().includes(term);
      const designerMatch = blast.designer.toLowerCase().includes(term);
      return idMatch || designerMatch;
    });
  
    switch (sortValue) {
      case "scoreAsc":
        filteredData.sort((a, b) => a.totalScore - b.totalScore);
        break;
      case "scoreDesc":
        filteredData.sort((a, b) => b.totalScore - a.totalScore);
        break;
      case "dateAsc":
        // Convert string to Date, then sort ascending
        filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "dateDesc":
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      // default => no sort
    }
  
    renderBlasts(filteredData);
    updateConfidenceMeter(); // Update Confidence Meter based on sorted data
  }
  
  /*******************************************************
   * INITIALIZE
   * If you have searchInput and sortSelect in HTML, we 
   * attach events. If not, remove these lines.
   *******************************************************/
  window.addEventListener("DOMContentLoaded", () => {
    // If these exist, set up listeners
    if (searchInput) {
      searchInput.addEventListener("input", handleSearch);
    }
    if (sortSelect) {
      sortSelect.addEventListener("change", handleSort);
    }
  
    // Render the initial cards
    renderBlasts(blastsData);
  
    // Initialize the Confidence Meter
    initializeConfidenceMeter();
  });
