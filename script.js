/*******************************************************
 * script.js
 * Shows 12 blasts with local MP4 videos + expandable
 * "Full Details" sections for all data from your Excel.
 ******************************************************/

/**
 * Each object in blastsData:
 * - Basic info displayed on the card.
 * - videoPath points to your local /media folder.
 * - fullDetails is the entire text from the spreadsheet.
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
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 5 — Excellent fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong> 
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
        <strong>Key Parameters:</strong> The observed burden, spacing, and stemming heights align closely with the blast design parameters. Powder factor and explosive density appear adequate for achieving the desired fragmentation and muck pile formation.<br/>
        <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with only minor deviations in edge spacing.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Good 
        Muck Pile Formation: Consistent and well-distributed 
        Execution of Design: Precise with minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Adjust burden or stemming heights slightly to address the oversized boulders near the edges. Optimize spacing along boundaries for improved edge fragmentation. 
        Environmental Impact: Consider additional dust suppression measures for faster dissipation. 
        Execution Consistency: Further refine initiation synchronization to eliminate minor timing irregularities.<br/>
        <strong>Drill Hole Alignment:</strong> Drill hole alignment appears consistent, closely matching the planned 4.6 m burden and 5.3 m spacing. Minor deviations in spacing are visible along the edges. Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones were identified, suggesting proper energy confinement and effective explosive placement.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 4 — Good fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong> 
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
        Muck Pile Formation: Consistent and well-distributed 
        Execution of Design: Precise with minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Adjust burden or explosive distribution along the left boundary to address localized oversized boulders. 
        Environmental Impact: Consider additional dust suppression measures to minimize dense cloud formation. 
        Execution Consistency: Fine-tune initiation synchronization to eliminate minor delays in the central rows.<br/>
        <strong>Drill Hole Alignment:</strong> Drill rows and spacing are consistent with the planned 4.6 m burden and 5.3 m spacing. Slight deviations are visible near the outer edges but are within acceptable limits. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones were observed, indicating thorough detonation and energy transmission.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 4 — Good fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> 111<br/>
        <strong>Total Charge (kg):</strong> 29,200<br/>
        <strong>Drilled Yield (tonnes):</strong> 90,212<br/>
        <strong>Estimated Total Tonnage (t):</strong> 90,212<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a linear pattern from left to right as planned. Synchronization is well-maintained, with no visible skipped detonations or delays. 
        Delays and Skipped Detonations: No delays or skipped detonations were observed, indicating precise execution of the electronic firing system.<br/>
        <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and uniform, with medium-sized fragments visible throughout the muck pile. Oversized boulders are minimal and localized near the boundaries, suggesting optimal energy utilization across the blast zone.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile has a consistent, rounded shape with moderate elevation in the center. Spread is even, with no excessive throw or uneven distribution, confirming effective energy confinement and release.<br/>
        <strong>Dust/Smoke Observations:</strong> A dense dust cloud forms immediately post-blast, dissipating within 8–10 seconds. The stemming heights (3.5 m and 4.5 m) appear effective in controlling dust generation.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris was observed, ensuring safety for nearby structures and personnel. No visible impacts on geofences, dams, or surrounding infrastructure.<br/>
        <strong>Key Parameters:</strong> Observed burden, spacing, stemming height, and powder factor align closely with the blast design parameters. Explosive density is optimized for achieving the desired fragmentation and muck pile characteristics.<br/>
        <strong>Checklist Compliance:</strong> The execution adheres to the design checklist, with minor deviations in alignment at the boundaries.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Excellent 
        Muck Pile Formation: Consistent and well-distributed 
        Execution of Design: Precise<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Slightly adjust burden or stemming heights near the edges to reduce localized oversized boulders. 
        Environmental Impact: Enhance dust suppression measures to further reduce the density of post-blast dust clouds. 
        Execution Consistency: Refine alignment near the boundaries to optimize energy distribution.<br/>
        <strong>Drill Hole Alignment:</strong> Drill rows and spacing are consistent with the planned 4.6 m burden and 5.3 m spacing. Minor deviations along the edges do not significantly affect the blast outcome. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones are detected, indicating complete detonation of charges and efficient energy transmission.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 3 — Moderate fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong> 
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
      fullDetails: `
        <strong>Number of Holes:</strong> [blank]<br/>
        <strong>Total Charge (kg):</strong> 164,500<br/>
        <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
        <strong>Estimated Total Tonnage (t):</strong> 561,000<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> 13.8<br/>
        <strong>Propagation Direction:</strong> The blast propagation follows the planned direction, with a wave-like pattern observed from left to right. Synchronization is mostly maintained; however, slight timing irregularities were noted in the third and fourth sequences. 
        Delays and Skipped Detonations: No skipped detonations were observed, but minor delays occurred near the central section, possibly due to variations in initiation timing or electronic firing system adjustments.<br/>
        <strong>Fragmentation Quality:</strong> The fragmentation is mixed, with a significant proportion of fine particles in the upper layers and medium-sized fragments across the muck pile. A few oversized boulders are visible near the western edge, indicating potential inefficiencies in the burden-to-spacing ratio.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile is well-distributed with a consistent shape and moderate height, peaking slightly toward the center. Uneven spread is observed on the right-hand side, likely due to localized variations in stemming or explosive distribution.<br/>
        <strong>Dust/Smoke Observations:</strong> The blast generates a dense initial dust cloud, dissipating within 12–15 seconds. This aligns with stemming heights (3.5 m and 4.5 m).<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris was observed, indicating controlled energy release. No visible impact on geofences, nearby structures, or slopes, demonstrating compliance with safety standards.<br/>
        <strong>Key Parameters:</strong> Observed burden and spacing are consistent with the planned design, and stemming height appears adequate for dust suppression and energy confinement. The powder factor aligns well with the fragmentation outcomes, although localized adjustments could improve efficiency.<br/>
        <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with minor deviations in timing and fragmentation consistency.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Moderate 
        Muck Pile Formation: Consistent with slight variability 
        Execution of Design: Minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Fine-tune burden and spacing to improve fragmentation uniformity, particularly at the boundaries. Adjust powder factor or explosive placement to address oversized boulders. 
        Environmental Impact: Enhance stemming heights marginally to further reduce dust clouds and improve energy confinement. 
        Execution Consistency: Synchronize initiation timing to eliminate delays in the central sequences. Conduct pre-blast reviews to identify potential boundary inefficiencies.<br/>
        <strong>Drill Hole Alignment:</strong> Drill hole alignment is consistent with the planned geometry, adhering closely to the 4.6 m burden and 5.3 m spacing. 
        Bootlegs and Unfragmented Zones: Bootlegs are minimal, but a small unfragmented zone is visible along the extreme eastern boundary, suggesting insufficient energy transmission in this area.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 3 — Moderate fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
      `
    },
    {
      blastID: "352_137",
      totalScore: 23,
      projectName: "C1_352_137",
      planTitle: "Drill & Blast Plan",
      date: "2024-04-22",
      designer: "(Drawn by) Vanessa Montoya",
      purpose: "Production Blast Design",
      videoPath: "media/352_137_Short.mp4",
      fullDetails: `
        <strong>Number of Holes:</strong> 766 total<br/>
        <strong>Total Charge (kg):</strong> 282,020<br/>
        <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
        <strong>Estimated Total Tonnage (t):</strong> 815,819<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a diagonal pattern from the bottom-left to the top-right as planned. Synchronization is consistent, with only minor timing irregularities near the central section. 
        Delays and Skipped Detonations: Delays were minimal, and no skipped detonations were observed. The initiation sequence aligns well with the electronic firing system.<br/>
        <strong>Fragmentation Quality:</strong> The fragmentation is primarily uniform, with fine and medium-sized particles dominating the muck pile. A few oversized boulders are visible near the boundaries, indicating potential inefficiencies in explosive energy distribution.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile is well-distributed, with a rounded shape and moderate height. No excessive throw was observed, and the spread is consistent, confirming effective energy utilization.<br/>
        <strong>Dust/Smoke Observations:</strong> The dust cloud is moderately dense and dissipates within 8–10 seconds. Stemming heights (3.5 m and 4.5 m) appear effective in controlling dust dispersion.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris was observed, indicating controlled energy release. No visible impacts on geofences, slopes, or nearby structures were detected.<br/>
        <strong>Key Parameters:</strong> Observed burden, spacing, and stemming heights align well with the blast design parameters. Powder factor and explosive density appear optimized for the intended fragmentation and muck pile outcomes.<br/>
        <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with only minor deviations in timing and edge alignment.<br/>
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
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 3 — Moderate fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> [blank]<br/>
        <strong>Total Charge (kg):</strong> [blank]<br/>
        <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
        <strong>Estimated Total Tonnage (t):</strong> [blank]<br/>
        <strong>Depth Tolerance (m):</strong> [blank]<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a wave-like pattern from the bottom-left to the top-right, consistent with the planned direction. Synchronization is maintained with minor timing irregularities near the central section. 
        Delays and Skipped Detonations: No skipped detonations were observed. Minor delays in the middle rows do not significantly impact the overall blast execution.<br/>
        <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and uniform, with medium-sized fragments present throughout the muck pile. Oversized boulders are minimal and localized near the edges, indicating effective energy distribution in the central zone.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile forms a consistent, rounded shape with slight elevation in the center. Spread is even, with no excessive throw or uneven distribution, confirming effective energy confinement and utilization.<br/>
        <strong>Dust/Smoke Observations:</strong> The blast produces a dense dust cloud, dissipating within 10–12 seconds. This aligns with stemming heights of 3.5 m and 4.5 m, which appear effective in controlling dust.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris observed, ensuring safety for personnel and infrastructure. No visible impacts on geofences, dams, or surrounding infrastructure detected.<br/>
        <strong>Key Parameters:</strong> Observed burden, spacing, stemming height, and powder factor closely match the design parameters. Explosive density and firing sequence are well-optimized for achieving the desired fragmentation and muck pile characteristics.<br/>
        <strong>Checklist Compliance:</strong> The execution adheres to the design checklist, with minor deviations near the edges and mid-section timing.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Excellent 
        Muck Pile Formation: Consistent and well-distributed 
        Execution of Design: Precise with minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Slightly adjust burden or stemming heights near the boundaries to address localized oversized boulders. 
        Environmental Impact: Enhance dust suppression measures to further reduce the density and dissipation time of the dust cloud. 
        Execution Consistency: Fine-tune initiation synchronization to eliminate minor timing irregularities in the middle rows.<br/>
        <strong>Drill Hole Alignment:</strong> Drill rows and spacing align well with the planned 4.6 m burden and 5.3 m spacing. Minor deviations along the boundaries are visible but do not significantly impact the outcome. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones are detected, indicating complete detonation of charges.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 2 — Moderate: insufficient data<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> 203 Production + 3 BMM + 1 BMM<br/>
        <strong>Total Charge (kg):</strong> 79,600<br/>
        <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
        <strong>Estimated Total Tonnage (t):</strong> [blank]<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a linear pattern from left to right as planned. Synchronization is maintained across the majority of the sequence, with a slight delay observed in the far-right section. 
        Delays and Skipped Detonations: No skipped detonations were observed. A minor delay in the initiation sequence was detected in the final row, possibly due to local timing issues in the electronic initiation system.<br/>
        <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and uniform, with a small proportion of medium-sized fragments. Oversized boulders are minimal, primarily concentrated along the central region. No significant unbroken sections were visible, indicating effective energy utilization.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile is evenly distributed, with a well-rounded shape and moderate height peaking near the center. No excessive throw or uneven distribution was noted, confirming a balanced explosive energy release.<br/>
        <strong>Dust/Smoke Observations:</strong> A moderately dense dust cloud formed immediately after the blast, dissipating within 8–10 seconds. The stemming heights (3.5 m and 4.5 m) appear effective in controlling dust.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris was observed, and no hazards to surrounding structures or slopes were noted. The blast had no visible impacts on geofences, dams, or nearby infrastructure.<br/>
        <strong>Key Parameters:</strong> The burden, spacing, and stemming heights observed in the blast align well with the provided design parameters. The powder factor appears optimized for the desired fragmentation and muck pile outcomes.<br/>
        <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with minor deviations in timing and edge spacing.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Excellent 
        Muck Pile Formation: Consistent and well-distributed 
        Execution of Design: Precise with minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Address the localized presence of oversized boulders in the central region through slight adjustments to burden or explosive distribution. 
        Environmental Impact: Enhance stemming heights marginally in specific areas to further reduce dust density. 
        Execution Consistency: Refine electronic initiation settings to eliminate minor timing delays in the final rows.<br/>
        <strong>Drill Hole Alignment:</strong> Drill holes were uniformly aligned, adhering to the planned 4.6 m burden and 5.3 m spacing. Minor inconsistencies were detected along the edges, likely due to field adjustments. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones were identified, suggesting complete detonation of charges.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 3 — Moderate fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 4 — Good: only minor variations<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> 632 + 7 BMM<br/>
        <strong>Total Charge (kg):</strong> 176,022<br/>
        <strong>Drilled Yield (tonnes):</strong> 75.8<br/>
        <strong>Estimated Total Tonnage (t):</strong> 643,052<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a wave-like pattern from the bottom-left to the top-right, consistent with the planned direction. Synchronization is well-maintained, with no visible irregularities or skipped detonations. 
        Delays and Skipped Detonations: The sequence exhibits no delays or skipped detonations, indicating reliable electronic initiation and proper energy release.<br/>
        <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and well-distributed, with medium-sized fragments present throughout the muck pile. Oversized boulders are minimal, located near the outer boundaries, suggesting effective energy distribution across the central area.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile has a consistent, rounded shape with slight elevation at the center. No excessive throw or uneven distribution is observed, confirming effective explosive energy confinement and utilization.<br/>
        <strong>Dust/Smoke Observations:</strong> The blast produces a dense dust cloud, dissipating within 8–10 seconds. This correlates well with the stemming heights of 3.5 m and 4.5 m.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris observed, ensuring safety for nearby infrastructure and personnel. No visible impacts on geofences, dams, or surrounding structures were detected, indicating adherence to safety protocols.<br/>
        <strong>Key Parameters:</strong> Observed burden, spacing, stemming height, and powder factor align well with the planned design parameters. Explosive density is optimized for achieving the desired fragmentation and muck pile characteristics.<br/>
        <strong>Checklist Compliance:</strong> The execution aligns closely with the design checklist, with minor deviations near the boundaries.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Excellent 
        Muck Pile Formation: Consistent and evenly distributed 
        Execution of Design: Precise<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Consider adjustments to burden or stemming near the edges to reduce localized oversized boulders. 
        Environmental Impact: Implement additional dust suppression measures to further minimize the density of post-blast dust clouds. 
        Execution Consistency: Refine alignment at the edges to ensure uniform energy distribution and minimize minor deviations.<br/>
        <strong>Drill Hole Alignment:</strong> Drill hole alignment is consistent and adheres to the planned 4.6 m burden and 5.3 m spacing. Minor deviations in alignment are observed along the edges, likely due to field adjustments. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones are detected, indicating proper detonation of charges and complete fragmentation.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 2 — Moderate: insufficient data<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong> 
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
      fullDetails: `
        <strong>Number of Holes:</strong> 367<br/>
        <strong>Total Charge (kg):</strong> 85,000<br/>
        <strong>Drilled Yield (tonnes):</strong> 80<br/>
        <strong>Estimated Total Tonnage (t):</strong> 352,000<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> 12.4<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in the planned direction, with some observable delays in the central row. Most detonations maintain synchronization with the planned sequence, though minor irregularities in timing are evident. 
        Delays and Skipped Detonations: A slight delay was observed in the central blast sequence, but no skipped detonations were evident. Overall, the initiation timing aligns with expectations for an electronic firing system.<br/>
        <strong>Fragmentation Quality:</strong> The rock sizes are predominantly mixed, with fine particles in the upper layers and larger fragments at the base. Oversized boulders are minimal, though a few unbroken sections are visible at the edges, indicating slight inefficiencies in energy distribution.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile has a moderately consistent spread, with a peak height approximately mid-field. Slightly excessive throw observed on the right-hand side, suggesting variability in stemming or burden adjustment.<br/>
        <strong>Dust/Smoke Observations:</strong> The dust cloud is dense immediately after detonation, dissipating within 10 seconds. This aligns with stemming heights of 3.5 m and 4.5 m, though stemming could be optimized further to reduce dust.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris observed, indicating effective energy confinement. No impacts on geofences or nearby structures were detected, demonstrating adherence to safety protocols.<br/>
        <strong>Key Parameters:</strong> The observed burden and spacing align closely with design specifications (4.6 m burden, 5.3 m spacing). Stemming height appears consistent but could benefit from marginal increases for enhanced energy confinement.<br/>
        <strong>Checklist Compliance:</strong> Execution aligns with the design checklist, though minor deviations in timing and throw warrant closer inspection.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Moderate 
        Muck Pile Formation: Consistent with slight variability 
        Execution of Design: Moderate deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Optimize burden and powder factor to reduce unbroken sections and ensure finer fragmentation. Adjust stemming heights slightly for better energy confinement. 
        Environmental Impact: Implement dust suppression techniques to mitigate dense clouds post-blast. Monitor throw to minimize excessive lateral dispersion. 
        Execution Consistency: Enhance synchronization to minimize delays in central sequences. Conduct a review of initiation patterns for field alignment with design.<br/>
        <strong>Drill Hole Alignment:</strong> Drill rows appear uniformly spaced, closely matching the planned 4.6 m burden and 5.3 m spacing. Minor deviations are visible on the extreme left, possibly due to field adjustments. 
        Bootlegs and Unfragmented Zones: No visible bootlegs were noted. Some unfragmented zones are observed along the outer edge, likely due to reduced energy confinement or stemming height variations.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 3 — Moderate fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 2 — Moderate: insufficient data<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> 792 + 58 BM<br/>
        <strong>Total Charge (kg):</strong> 358,507<br/>
        <strong>Drilled Yield (tonnes):</strong> 90,987<br/>
        <strong>Estimated Total Tonnage (t):</strong> [blank]<br/>
        <strong>Depth Tolerance (m):</strong> 0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> 8.2<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a diagonal pattern from the bottom-left to the top-right, consistent with the planned design. Synchronization is well-maintained, with no visible skipped detonations or delays. 
        Delays and Skipped Detonations: There are no significant delays or skipped detonations, indicating precise execution of the electronic initiation system.<br/>
        <strong>Fragmentation Quality:</strong> Fragmentation is predominantly fine and uniform, with medium-sized fragments present throughout the muck pile. Oversized boulders are minimal and mostly localized at the far edges, suggesting effective energy distribution across the central area.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile forms a consistent, rounded shape with slight elevation at the center. Spread is even, with no excessive throw or uneven distribution, confirming effective explosive energy utilization.<br/>
        <strong>Dust/Smoke Observations:</strong> The dust cloud is moderately dense and dissipates within 8–10 seconds. Stemming heights of 3.5 m and 4.5 m appear effective in controlling dust dispersion.<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris observed, ensuring safety. No visible impacts on geofences, dams, or surrounding structures detected.<br/>
        <strong>Key Parameters:</strong> The burden, spacing, stemming height, and powder factor observed in the blast align closely with the design parameters. Explosive density is well-optimized for achieving the desired fragmentation and muck pile characteristics.<br/>
        <strong>Checklist Compliance:</strong> The execution adheres to the design checklist, with minor deviations in alignment near the edges.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Excellent 
        Muck Pile Formation: Consistent and evenly distributed 
        Execution of Design: Precise<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Slightly adjust burden or stemming heights near the far edges to address localized oversized boulders. 
        Environmental Impact: Enhance dust suppression measures to further minimize the density of post-blast dust clouds. 
        Execution Consistency: Refine alignment precision at the edges to optimize energy transfer across the entire blast area.<br/>
        <strong>Drill Hole Alignment:</strong> Drill hole alignment is uniform, adhering closely to the planned 4.6 m burden and 5.3 m spacing. Minor deviations are observed along the edges, likely due to field adjustments. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or unfragmented zones are detected, indicating thorough detonation and effective energy transfer.<br/>
        <strong>Synchronization_Score:</strong> 2 — Poor: significant delays or issues; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 2 — Moderate: insufficient data<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 5 — Excellent/Consistent muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 5 — Excellent: minimal debris, no visible impacts<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong>
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
      fullDetails: `
        <strong>Number of Holes:</strong> 212 + 8 BMM<br/>
        <strong>Total Charge (kg):</strong> 58,918<br/>
        <strong>Drilled Yield (tonnes):</strong> [blank]<br/>
        <strong>Estimated Total Tonnage (t):</strong> 177,078<br/>
        <strong>Depth Tolerance (m):</strong> ±0.2<br/>
        <strong>Predicted Max PPV @ Dam (mm/s):</strong> [blank]<br/>
        <strong>Propagation Direction:</strong> The explosions propagate in a wave-like pattern from the bottom-left corner to the top-right corner, as per the planned design. Synchronization is mostly consistent, though slight irregularities are observed in the middle rows. 
        Delays and Skipped Detonations: Delays are minimal, and no skipped detonations were observed, indicating reliable execution of the electronic firing system.<br/>
        <strong>Fragmentation Quality:</strong> Predominantly fine and medium-sized fragments, with a few oversized boulders near the outer edges. The fragmentation is uniform across the central muck pile, with localized poor fragmentation near the eastern boundary.<br/>
        <strong>Muck Pile Formation:</strong> The muck pile is well-formed with a rounded, slightly elevated center. There is no significant excessive throw, but minor unevenness is observed near the edges, likely due to stemming inconsistencies.<br/>
        <strong>Dust/Smoke Observations:</strong> The dust cloud is dense immediately after detonation, dissipating within 10–12 seconds. This aligns with stemming heights (3.5 m and 4.5 m).<br/>
        <strong>Potential Hazards:</strong> Minimal flying debris was observed, indicating well-confined energy release. No impacts on geofences, slopes, or nearby structures were detected, suggesting adherence to safety standards.<br/>
        <strong>Key Parameters:</strong> The burden, spacing, stemming height, and powder factor observed in the blast align well with the design parameters. Explosive density and initiation sequence are optimized for effective fragmentation and muck pile formation.<br/>
        <strong>Checklist Compliance:</strong> Execution adheres to the design checklist, with minor deviations in timing and edge fragmentation.<br/>
        <strong>Overall Blast Rating:</strong> 6. Qualitative Blast Rating 
        Uniformity of Fragmentation: Good 
        Muck Pile Formation: Consistent with slight variability 
        Execution of Design: Precise with minor deviations<br/>
        <strong>Suggestions for Improvement:</strong> 7. Suggestions for Improvement 
        Fragmentation: Adjust burden and stemming heights near the eastern boundary to enhance uniform fragmentation and address oversized boulders. 
        Environmental Impact: Explore additional dust suppression measures to reduce the density of post-blast dust clouds. 
        Execution Consistency: Refine initiation synchronization to eliminate minor irregularities in the middle rows.<br/>
        <strong>Drill Hole Alignment:</strong> Drill rows and spacing align closely with the planned 4.6 m burden and 5.3 m spacing. Minor deviations were observed at the eastern edge, likely a result of field adjustments. 
        Bootlegs and Unfragmented Zones: No visible bootlegs or significant unfragmented zones were detected, confirming effective detonation of the charges.<br/>
        <strong>Synchronization_Score:</strong> 5 — Excellent: no delays or skipped detonations reported; plus consistent propagation<br/>
        <strong>Synchronization_Reason:</strong> <br/>
        <strong>Fragmentation_Score:</strong> 1 — Poor fragmentation<br/>
        <strong>Fragmentation_Reason:</strong> <br/>
        <strong>MuckPile_Score:</strong> 2 — Poor/Uneven muck pile<br/>
        <strong>MuckPile_Reason:</strong> <br/>
        <strong>Environmental_Score:</strong> 2 — Moderate: insufficient data<br/>
        <strong>Environmental_Reason:</strong> <br/>
        <strong>Checklist_Score:</strong> 5 — Fully adheres to the design checklist<br/>
        <strong>Checklist_Reason:</strong> 
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

    // Basic info
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `
      <strong>Date:</strong> ${blast.date || "[blank]"}<br/>
      <strong>Score:</strong> ${blast.totalScore}<br/>
      <strong>Designer:</strong> ${blast.designer}<br/>
      <strong>Project:</strong> ${blast.projectName}<br/>
      <strong>Purpose:</strong> ${blast.purpose}
    `;

    // Full details (hidden by default)
    const fullDetails = document.createElement("div");
    fullDetails.classList.add("full-details");
    fullDetails.innerHTML = blast.fullDetails; // Insert all Excel text

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle-details-btn");
    toggleBtn.textContent = "View Full Details";

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
    cardContent.appendChild(info);
    cardContent.appendChild(toggleBtn);
    cardContent.appendChild(fullDetails);

    // Put it all together
    card.appendChild(videoThumb);
    card.appendChild(cardContent);

    videoCardsContainer.appendChild(card);
  });
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
});