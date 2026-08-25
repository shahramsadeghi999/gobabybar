const examData = [
    {
        id: 1,
        topic: "Strict Products Liability / Enhanced Injury & Crashworthiness Doctrine",
        fp: "Questions 1–2 are based on the following fact situation:\nDriver was operating a compact sedan at 45 mph when another motorist negligently ran a stop sign, causing a severe broadside collision. Although the initial impact caused only minor bruises, the sedan's driver-side seatbelt assembly spontaneously unlatched due to an internal design defect. Driver was thrown violently against the steering column, suffering severe traumatic brain injury. Undisputed biomechanical testimony proved that had the seatbelt remained latched, Driver would have walked away with zero head injury.",
        q: "In Driver's strict products liability design defect action against Automaker under the 'Crashworthiness' (Second Collision) doctrine:",
        opts: [
            "Automaker is completely relieved of liability, because the other motorist's failure to yield was the original proximate cause.",
            "Automaker is liable only in ordinary negligence, because strict products liability applies exclusively to defects causing the crash.",
            "Driver's recovery is barred under primary assumption of risk for operating motor vehicles on public multi-lane thoroughfares.",
            "Automaker is strictly liable for the enhanced brain injury, because manufacturers must design vehicles to survive crashes."
        ],
        ans: 3,
        exp: "Under the Crashworthiness / Second Collision doctrine (Larsen v. General Motors), a manufacturer is strictly liable for design defects that fail to protect occupants in foreseeable crashes, causing enhanced injuries, even if the defect did not cause the initial accident."
    },
    {
        id: 2,
        topic: "Joint Tortfeasors / Comparative Fault Allocation in Crashworthiness Cases",
        fp: "Questions 1–2 are based on the following fact situation:\nDriver was operating a compact sedan at 45 mph when another motorist negligently ran a stop sign, causing a severe broadside collision. Although the initial impact caused only minor bruises, the sedan's driver-side seatbelt assembly spontaneously unlatched due to an internal design defect. Driver was thrown violently against the steering column, suffering severe traumatic brain injury. Undisputed biomechanical testimony proved that had the seatbelt remained latched, Driver would have walked away with zero head injury.",
        q: "If the jury finds Other Motorist 60% at fault for causing the initial crash and Automaker 40% at fault for the defective seatbelt design, under California's Proposition 51:",
        opts: [
            "Automaker is jointly and severally liable for 100% of economic damages, and severally liable for 40% of non-economic damages.",
            "Automaker is liable strictly and exclusively for 40% of all economic damages under pure comparative fault allocation rules.",
            "Other Motorist must pay 100% of the entire judgment, because original joint tortfeasors bear complete indemnification liability.",
            "Automaker is completely discharged from non-economic damages under statutory motor vehicle crashworthiness preemption rules."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1431.2 (Proposition 51), liability for economic damages remains joint and several (Driver can collect 100% from Automaker), whereas liability for non-economic damages is several only, limited strictly to Automaker's 40% allocated fault."
    },
    {
        id: 3,
        topic: "Strict Products Liability / Foreseeable Alteration vs. Substantial Modification Defense",
        q: "Manufacturer produced a commercial industrial meat grinder with an easily detachable plastic safety lid. Meat Plant employees routinely removed the lid to speed up carcass feeding, a practice well-documented in industry trade journals and known to Manufacturer. Worker was operating the grinder without the lid when his arm was drawn into the grinding auger. Manufacturer raised the defense of product alteration. Under California law (Ceja v. J.R. Wood):",
        opts: [
            "Manufacturer is completely exonerated, because any post-sale removal of a safety guard constitutes substantial modification.",
            "Manufacturer remains strictly liable, because post-sale alterations that are reasonably foreseeable do not cut off liability.",
            "Manufacturer is liable only if Worker was in direct contractual privity with the retail dealer who sold the machinery.",
            "Worker's claim is completely barred under the doctrine of primary assumption of risk for operating food machinery."
        ],
        ans: 1,
        exp: "Under California strict products liability law (Barker v. Lull / Ceja v. J.R. Wood), a post-sale modification defeats strict liability ONLY if the alteration was unforeseeable. Where removal of a safety device is reasonably foreseeable, the manufacturer remains strictly liable."
    },
    {
        id: 4,
        topic: "Strict Products Liability / Failure to Warn & The Heeding Presumption",
        q: "Chemical Co. packaged a highly toxic commercial degreaser without including any warning that skin contact caused immediate systemic liver toxicity. Mechanic used the solvent with bare hands and suffered permanent acute liver failure. At trial, Chemical Co. argued that Mechanic failed to prove that he would have read or obeyed a warning label had one been printed. Under the 'Heeding Presumption' recognized in products liability:",
        opts: [
            "The plaintiff bears an affirmative burden to introduce behavioral testimony proving he always obeys printed product warnings.",
            "Chemical Co. is entitled to a directed verdict, because proximate cause in failure-to-warn cases cannot rest upon obedience.",
            "The law presumes that had an adequate warning been provided, the user would have read and heeded it, shifting the burden.",
            "Mechanic's claim is converted automatically into an action for strict deceit under the Consumers Legal Remedies Act."
        ],
        ans: 2,
        exp: "In strict products liability failure-to-warn cases, the 'Heeding Presumption' provides that where a warning is inadequate or absent, the law presumes that had an adequate warning been given, the consumer would have read and heeded it, shifting the rebuttal burden to the defendant."
    },
    {
        id: 5,
        topic: "Strict Liability / Escape of Wild Animals Due to Third-Party Vandalism",
        q: "Owner kept a 500-pound wild African lion on his private estate in a secure, reinforced steel cage meeting all state zoological containment standards. At midnight, an unknown third-party vandal cut the lock with an acetylene torch and opened the cage door to steal property. The lion walked out into the neighborhood and severely mauled Pedestrian on the public sidewalk. In Pedestrian's strict liability suit against Owner:",
        opts: [
            "Owner is completely relieved of liability, because the criminal act of the third-party vandal was an independent superseding cause.",
            "Owner is liable only if Pedestrian proves Owner was actively negligent in failing to maintain armed 24-hour security guards.",
            "Owner is immune from liability under the common law doctrine of private residential zoological licensing.",
            "Owner is strictly liable, because keepers of wild animals are subject to absolute liability for species dangers despite vandalism."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 510, the possessor of a wild animal is strictly liable for harm done by the animal resulting from its dangerous propensities, even if the escape was brought about by the unexpectable or intentional act of a third person."
    },
    {
        id: 6,
        topic: "Strict Liability / Abnormally Dangerous Activities & Derailment of Toxic Rail Shipments",
        q: "Chemical Corp. manufactured 30,000 gallons of deadly liquid chlorine gas and shipped it in pressurized rail tanker cars across a major metropolitan railroad corridor. Train derailed at 40 mph due to an unexpected track metal fatigue crack, releasing toxic chlorine vapor that blinded 50 residents. Chemical Corp. argued common carrier transport of essential commodities cannot be strictly liable. In residents' strict liability action:",
        opts: [
            "Chemical Corp. is strictly liable, because shipping massive quantities of lethal toxic gas through cities is ultrahazardous.",
            "Chemical Corp. is not liable under strict liability, because rail transit of hazardous materials is a common commercial usage.",
            "Chemical Corp. is immune under the federal Interstate Commerce Commission Termination Act, which preempts state tort claims.",
            "Chemical Corp. is liable only if the railroad company had formally declared bankruptcy prior to the hazardous derailment."
        ],
        ans: 0,
        exp: "Bulk transportation and storage of ultra-hazardous, highly toxic, volatile chemicals through densely populated metropolitan areas constitutes an Abnormally Dangerous Activity subjecting the enterprise to strict liability for escape of the toxic substance."
    },
    {
        id: 7,
        topic: "Strict Liability / Non-Natural Accumulation of Subterranean Waters (Rylands v. Fletcher)",
        q: "Mining Corp. constructed a massive 100-million-gallon artificial water reservoir on its land above an abandoned coal mine network to wash gravel. The reservoir bottom gave way into hidden subterranean vertical shafts, flooding Neighbor's operating active coal mine on adjoining lower land. Mining Corp. exercised utmost non-negligent care in building the reservoir. Under the rule of Rylands v. Fletcher:",
        opts: [
            "Mining Corp. is not liable, because water is a natural substance classified as a common law Act of God excusing liability.",
            "Mining Corp. is strictly liable, because one who brings an artificial, non-natural accumulation of water onto land is liable if it escapes.",
            "Mining Corp. is liable only if Neighbor proves Mining Corp. had actual geological knowledge of the hidden vertical shafts.",
            "Mining Corp. is immune from liability under the statutory California Surface Water Common Enemy doctrine."
        ],
        ans: 1,
        exp: "Under Rylands v. Fletcher, a landowner who brings onto land an artificial, non-natural accumulation of a substance likely to do mischief if it escapes is STRICTLY LIABLE for all natural consequences of its escape, regardless of the absence of negligence."
    },
    {
        id: 8,
        topic: "Negligence / Medical Malpractice & Pharmacist Generic Substitution Duties",
        q: "Physician prescribed Brand-Name Anticonvulsant Drug to Patient suffering from severe epilepsy, writing 'DISPENSE AS WRITTEN / DO NOT SUBSTITUTE.' Pharmacist negligently overlooked the notation and substituted a cheaper generic formulation that had an erratic bioavailability absorption rate in severe epileptics. Patient suffered a major seizure while driving, causing a crash. In Patient's suit against Pharmacist:",
        opts: [
            "Pharmacist is completely shielded from civil liability under statutory generic substitution safe-harbor pharmaceutical laws.",
            "Pharmacist is not liable, because prescribing physicians bear sole exclusive legal responsibility for adverse reactions.",
            "Pharmacist is liable in professional negligence, because pharmacists breach their standard of care by violating non-substitution orders.",
            "Patient's claim is completely barred under the doctrine of secondary implied assumption of risk for driving with epilepsy."
        ],
        ans: 2,
        exp: "Violating a clear medical and statutory command ('Dispense as Written') by substituting an unauthorized generic formulation that predictably alters therapeutic drug levels breaches the pharmacist's professional standard of care."
    },
    {
        id: 9,
        topic: "Negligence / Negligent Entrustment of Commercial Power Tools to Unqualified Workers",
        q: "General Contractor handed a high-powered, industrial pneumatic powder-actuated concrete nail gun to Day Laborer, knowing Laborer had zero training, could not read safety warnings, and had never operated powder-actuated tools. While attempting to clear a jam, Laborer discharged a 3-inch steel stud through a drywall partition into Electrician's shoulder. In Electrician's negligence lawsuit against General Contractor:",
        opts: [
            "General Contractor is immune from liability under the independent contractor Privette doctrine governing construction injuries.",
            "General Contractor is directly liable for Negligent Entrustment for supplying a dangerous tool to a known untrained worker.",
            "General Contractor is not liable, because Day Laborer's operational firing error was an independent superseding cause.",
            "Electrician is restricted exclusively to statutory workers' compensation death and disability benefit schedules."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 390, one who supplies a chattel for the use of another whom the supplier knows or has reason to know to be incompetent or untrained is directly liable for physical harm caused by the incompetent user."
    },
    {
        id: 10,
        topic: "Negligence / Heightened Standard of Care for Common Carriers (Cal. Civ. Code § 2100)",
        q: "Bus Co. operated a commercial public transit bus. While driving in light rain at the posted speed limit, Bus Driver tapped the brakes on a known slick bridge deck, causing the bus to skid sideways and jar Passenger, dislocating Passenger's shoulder. In Passenger's negligence suit under California Civil Code § 2100, the jury should be instructed that Bus Co.:",
        opts: [
            "Is held to an ordinary reasonable person standard of care identical to drivers of private passenger passenger vehicles.",
            "Is strictly liable as an absolute insurer of passenger physical safety during commercial passenger transit.",
            "Must use the utmost care and diligence of very cautious persons, and is responsible for any slight negligence.",
            "Is immune from liability unless Passenger establishes gross criminal recklessness on the part of the bus operator."
        ],
        ans: 2,
        exp: "Under California Civil Code § 2100, common carriers of passengers for reward must use the 'utmost care and diligence of very cautious persons,' and are liable for injuries caused by even 'slight negligence' regarding passenger carriage."
    },
    {
        id: 11,
        topic: "Landowner Duty / Open and Obvious Hazards with Coerced Invitee Encounter",
        q: "Hospital maintained its only public emergency room pedestrian entrance across an icy exterior concrete ramp. Although the thick ice was completely open, obvious, and visible in broad daylight, Patient (suffering from severe abdominal pain) had no alternative entrance into the building. Patient carefully attempted to walk across the ice, slipped, and broke his hip. In Patient's premises liability suit against Hospital:",
        opts: [
            "Hospital is completely immune from liability, because open and obvious physical hazards extinguish all premises duties of care.",
            "Patient is barred from all recovery under the doctrine of primary assumption of risk for walking on visible icy ramps.",
            "Hospital is strictly liable under commercial premises safety rules for failing to maintain heated exterior hospital entranceways.",
            "Hospital is liable, because a landowner remains liable for open and obvious hazards where the invitee has practical necessity to encounter the danger."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 343A, an open and obvious danger does NOT relieve the landowner of duty where the possessor should anticipate the harm despite such knowledge—especially where the invitee has no reasonable alternative and is practically coerced to encounter the hazard to access the building."
    },
    {
        id: 12,
        topic: "Negligence / Landowner Negligent Security & Prior Similar Incidents (Ann M. v. Pacific Plaza)",
        q: "Shopper was assaulted and robbed at 2:00 PM inside an outdoor shopping mall common walkway. In the preceding three years, Mall had zero reported violent physical assaults on premises, having experienced only minor daytime shoplifting incidents. Shopper sued Mall Owner for negligence in failing to deploy armed security guards. Under California law (Ann M. v. Pacific Plaza Shopping Center):",
        opts: [
            "Mall Owner is directly liable, because commercial retail mall owners owe an absolute non-delegable duty to guarantee customer safety from crimes.",
            "Mall Owner is not liable, because imposing a duty to hire security guards requires a high degree of foreseeability shown by prior similar violent crimes on premises.",
            "Mall Owner is strictly liable under enterprise liability principles for all violent felonies occurring inside commercial shopping centers.",
            "Shopper is entitled to a directed verdict under res ipsa loquitur, because violent physical muggings do not occur absent premises neglect."
        ],
        ans: 1,
        exp: "Under Ann M. v. Pacific Plaza Shopping Center (6 Cal.4th 666), a commercial landowner's duty to take burdensome security measures (such as hiring security guards) requires a HIGH degree of foreseeability, which can rarely be established in the absence of prior similar violent criminal incidents on the premises."
    },
    {
        id: 13,
        topic: "Negligence / Primary vs. Secondary Assumption of Risk in Commercial Bungee Jumping",
        q: "Participant paid $100 to jump from a 200-foot tower operated by Commercial Bungee Co., signing an express acknowledgment of the inherent risks of jumping. Unknown to Participant, Bungee Co.'s operator committed active negligence by improperly measuring the bungee cord length, using a cord that was 20 feet too long for Participant's body weight. Participant impacted the ground, suffering paralysis. In Participant's negligence suit:",
        opts: [
            "Bungee Co. is completely immune under Primary Assumption of Risk, because hitting the ground is an inherent risk of commercial bungee jumping.",
            "Bungee Co. is strictly liable, because commercial bungee jumping is classified as an abnormally dangerous ultrahazardous activity.",
            "Bungee Co. is liable, because commercial operators owe a duty not to increase the inherent risks of the sport through improper equipment measurement.",
            "Participant's recovery is completely barred under the doctrine of secondary implied assumption of risk for engaging in extreme sports."
        ],
        ans: 2,
        exp: "Under Knight v. Jewett, Primary Assumption of Risk bars claims for risks INHERENT in the sport. However, an extreme sport facility operator owes a duty of reasonable care NOT to increase the risks inherent in the sport beyond those that are ordinary (e.g., improperly measuring cord length is operational negligence that creates liability)."
    },
    {
        id: 14,
        topic: "Strict Products Liability / The Economic Loss Rule (Seely v. White Motor Co.)",
        q: "Trucker purchased a commercial heavy-duty semi-truck from Manufacturer. Because of a defectively manufactured transmission gear, the transmission suddenly seized while parked at a loading dock. The transmission was completely ruined ($15,000 to replace), but the truck never crashed, caused zero physical injury to any person, and damaged no other separate property. Trucker sued Manufacturer in Strict Products Liability. Under California law (Seely v. White Motor Co.):",
        opts: [
            "Trucker cannot recover in strict products liability, because the Economic Loss Rule restricts purely economic damage to the product itself to contract/warranty law.",
            "Trucker recovers full replacement damages in strict products liability, because selling a product with a defective transmission is actionable in tort per se.",
            "Trucker recovers under strict products liability only if Manufacturer was in direct vertical privity of contract with the commercial end user.",
            "Trucker is entitled to treble punitive damages under the statutory provisions of the California Commercial Uniform Sales Code."
        ],
        ans: 0,
        exp: "Under Seely v. White Motor Co. (63 Cal.2d 9), the Economic Loss Rule provides that strict products liability in tort does NOT apply where a defective product causes purely economic loss (damage to the product itself) without causing personal physical injury or damage to other separate property."
    },
    {
        id: 15,
        topic: "Strict Products Liability / Definition of Commercial Seller vs. Casual Private Seller",
        q: "Accountant sold her 10-year-old personal used car to Neighbor for $3,000. Unknown to Accountant, the car's steering tie rod had developed a microscopic metal fatigue fracture. On Neighbor's first drive, the tie rod snapped, causing the car to veer off the road and injure Neighbor. Neighbor sued Accountant under Strict Products Liability. Accountant is:",
        opts: [
            "Strictly liable, because any seller who places an unreasonably dangerous defective product into the stream of commerce is strictly liable.",
            "Strictly liable under the implied warranty of merchantability under Article 2 of the Uniform Commercial Code.",
            "Not strictly liable, because strict products liability applies exclusively to commercial sellers engaged in the regular business of selling such products.",
            "Liable under res ipsa loquitur, because steering tie rods do not snap on private passenger automobiles absent mechanical neglect."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 402A(1)(a), Strict Products Liability applies ONLY to a seller who is 'engaged in the business of selling such a product.' An isolated, casual, non-commercial sale by a private individual is NOT subject to strict products liability in tort."
    },
    {
        id: 16,
        topic: "Negligence / Medical Malpractice & National Specialist Standard of Care",
        q: "Board-Certified Radiologist practicing in a small rural clinic misread Patient's chest CT scan, failing to diagnose an obvious 3-centimeter malignant lung mass that certified radiologists nationwide routinely identify. Radiologist proved that general family practice doctors in that rural county commonly missed such scans. In Patient's medical malpractice suit, the legal standard of care applicable to Radiologist is:",
        opts: [
            "The standard of professional care exercised by medical practitioners in the same local rural geographic community (the strict locality rule).",
            "The degree of skill, knowledge, and care ordinarily exercised by certified radiology specialists in good standing nationwide.",
            "An objective reasonable person standard without regard to specialized board certifications or radiological training.",
            "Strict liability, because interpreting radiological imaging involving ionizing radiation constitutes an ultrahazardous medical practice."
        ],
        ans: 1,
        exp: "Medical specialists who hold themselves out as board-certified specialists are held to a NATIONAL specialist standard of care—the skill, care, and learning ordinarily possessed and exercised by certified specialists in the same field nationwide—rather than a local geographic rule."
    },
    {
        id: 17,
        topic: "Negligence / Landowner Attractive Nuisance & Utility vs. Risk Balancing",
        q: "Excavation Co. dug a 20-foot-deep vertical construction trench in an unfenced suburban lot located across the street from an elementary school. Excavation Co. knew that dozens of young children played in the lot daily after school. Excavation Co. left the trench completely uncovered and unbarricaded overnight because installing a $50 plywood cover was inconvenient. A 6-year-old child fell into the trench and was injured. Excavation Co. is:",
        opts: [
            "Not liable, because a trespassing child takes real property in the condition in which it is found under common law trespass rules.",
            "Immune from liability under the statutory California recreational trail immunity provisions of Civil Code § 846.",
            "Strictly liable under public nuisance for creating subterranean excavations within municipal educational school zones.",
            "Liable under Attractive Nuisance, because the utility of eliminating the hazard ($50 cover) was slight compared to the foreseeable risk to children."
        ],
        ans: 3,
        exp: "Under the Attractive Nuisance Doctrine (Restatement (Second) of Torts § 339), a possessor of land is liable for harm to trespassing children caused by an artificial condition if the utility of maintaining the condition and the burden of eliminating the danger are slight compared with the risk to children."
    },
    {
        id: 18,
        topic: "Strict Products Liability / Prescription Drugs & Restatement (Third) § 6(b) Super-Design Defect Standard",
        q: "Pharma Corp. manufactured an FDA-approved prescription medication for high blood pressure. In a strict products liability design defect suit by Patient who suffered a stroke, Pharma Corp. proved that for a significant, identifiable class of hypertensive patients, the drug was the ONLY effective medication that reduced blood pressure without fatal allergic reactions. Under Restatement (Third) of Torts: Products Liability § 6(b):",
        opts: [
            "The drug is defectively designed per se under the consumer expectation test if it causes a stroke in any patient taking the prescribed dosage.",
            "Pharma Corp. is held strictly liable under absolute enterprise liability for all adverse neurological pharmaceutical side effects.",
            "The drug is not defectively designed if reasonable healthcare providers would prescribe it for any class of patients with knowledge of its risks and benefits.",
            "Patient is entitled to a directed verdict unless Pharma Corp. can prove that all prescribing physicians signed advance commercial indemnity waivers."
        ],
        ans: 2,
        exp: "Under Restatement (Third) of Torts: Products Liability § 6(b), a prescription drug is defectively designed ONLY if the foreseeable risks of harm are sufficiently great in relation to its foreseeable therapeutic benefits that reasonable healthcare providers would not prescribe the drug for ANY class of patients."
    },
    {
        id: 19,
        topic: "Negligence / Firefighter's Rule & Independent Third-Party Vehicle Collisions on Scene",
        q: "Homeowner negligently dropped a candle, setting her living room on fire. Police Officer responded to the emergency, parked her patrol cruiser at the curb outside the house, and was directing traffic away from the fire trucks. Drunk Driver sped down the street, ignored police barricades, and struck Police Officer. Police Officer sued Drunk Driver for negligence. Drunk Driver raised the Firefighter's Rule. Result?",
        opts: [
            "Drunk Driver wins, because the Firefighter's Rule bars all on-duty emergency first responders from recovering for traffic collisions on public streets.",
            "Police Officer wins, because the Firefighter's Rule does not protect an independent third-party tortfeasor whose negligence was not the cause of the original emergency.",
            "Drunk Driver wins, because directing traffic around emergency scenes is an inherent professional risk assumed by sworn police officers.",
            "Police Officer wins only if Officer was physically operating an active emergency siren at the exact moment of the physical vehicular impact."
        ],
        ans: 1,
        exp: "The Firefighter's Rule bars an action against the person whose original negligence created the emergency (Homeowner). It does NOT bar an action against an independent, separate third-party tortfeasor (Drunk Driver) whose separate negligent act on the scene causes injury."
    },
    {
        id: 20,
        topic: "Strict Liability / Abnormally Dangerous Activities & Fireworks Displays in Urban Centers",
        q: "Pyrotechnics Co. conducted a major commercial municipal 4th of July fireworks display in a downtown waterfront park. Despite state-of-the-art electronic firing computers and utmost non-negligent care, a freak microburst wind gust blew a burning mortar shell 500 feet off course into Spectator's yard, igniting Spectator's roof. In Spectator's strict liability action against Pyrotechnics Co.:",
        opts: [
            "Pyrotechnics Co. is not liable, because the sudden microburst wind gust was an extraordinary Act of God that completely severed proximate causation.",
            "Pyrotechnics Co. is liable only if Spectator proves Pyrotechnics Co. violated a mandatory municipal fireworks safety ordinance.",
            "Spectator's claim is completely barred under primary assumption of risk for residing within one mile of an authorized municipal fireworks zone.",
            "Pyrotechnics Co. is strictly liable, because conducting high-explosive fireworks displays in urban areas constitutes an abnormally dangerous activity."
        ],
        ans: 3,
        exp: "Conducting public fireworks displays in close proximity to urban residential structures involves a high risk of serious harm that cannot be eliminated by the exercise of utmost care, and is classified as an Abnormally Dangerous Activity subjecting the operator to strict liability."
    },
    {
        id: 21,
        topic: "Negligence / Affirmative Duty of Voluntary Rescuers to Not Prevent Third-Party Aid (Soldano v. O'Daniels)",
        q: "A violent patron threatened to shoot Victim inside a bar. Good Samaritan ran across the street into Hotel lobby, informed Hotel Bartender of the active deadly threat, and requested permission to use the lobby telephone to dial 911 emergency dispatch. Bartender refused to allow Samaritan to touch the phone and refused to dial 911 himself. Victim was shot. In the wrongful death suit against Hotel (Soldano v. O'Daniels):",
        opts: [
            "Hotel is liable in negligence, because a commercial business open to the public may not interfere with a third party's reasonable attempt to summon emergency police aid.",
            "Hotel is not liable, because common law imposes zero affirmative legal duty upon private commercial property owners to render emergency aid to strangers.",
            "Hotel is completely immune from civil liability under the statutory emergency commercial telephone privacy acts.",
            "Victim's estate is restricted exclusively to an intentional tort action for civil aiding and abetting against Hotel Bartender."
        ],
        ans: 0,
        exp: "Under Soldano v. O'Daniels (141 Cal.App.3d 443), while there is generally no duty to rescue, a commercial business open to the public owes a duty of reasonable care NOT to actively prevent or interfere with a third party's reasonable attempt to summon emergency assistance."
    },
    {
        id: 22,
        topic: "Strict Products Liability / Obvious Inherent Product Dangers vs. Feasible Safety Guards",
        q: "Worker operated an industrial power table saw with an exposed, unshielded circular steel blade. Manufacturer omitted an automatic blade-stopping safety sensor (which cost $25 and stopped the blade instantly upon touching human skin without diminishing saw utility). Worker's hand slipped on wet wood, severing two fingers. Manufacturer argued that the spinning blade was an open and obvious danger. Under California law:",
        opts: [
            "Manufacturer is not liable as a matter of law, because open and obvious machine hazards completely eliminate strict products liability design duties.",
            "Manufacturer is strictly liable under the Risk-Benefit test, because the obviousness of a danger does not insulate a design where a feasible safety device was omitted.",
            "Worker's claim is completely barred under traditional common law contributory negligence for operating power tools with wet hands.",
            "Manufacturer is liable only under the express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "In California, the fact that a product's danger is 'open and obvious' does NOT insulate the manufacturer from design defect liability under the Risk-Benefit test if an inexpensive, feasible alternative safety device was available to eliminate the danger without impairing utility."
    },
    {
        id: 23,
        topic: "Negligence / Seatbelt Defense Biomechanical Apportionment in California",
        q: "Driver was operating her car lawfully when she was broadsided by Negligent Trucker. Driver was not wearing an available, operational three-point seatbelt. Total proven personal injury damages equaled $200,000. Undisputed expert biomechanical testimony proved that wearing the seatbelt would have prevented exactly $80,000 of the injuries (the remaining $120,000 would have occurred regardless). In California (Truman v. Vargas):",
        opts: [
            "Driver collects $0, because failing to wear a mandatory statutory seatbelt operates as an absolute total bar under contributory negligence per se.",
            "Driver collects the full $200,000, because evidence of seatbelt non-use is categorically inadmissible in California civil tort trials.",
            "Driver collects $120,000, because the failure to wear a seatbelt reduces damage recovery strictly by the amount of injury the seatbelt would have prevented.",
            "Driver collects $100,000 under a statutory mandatory fifty percent comparative fault reduction penalty."
        ],
        ans: 2,
        exp: "In California (Truman v. Vargas / Housley v. Godinez), failure to wear a seatbelt is admissible as comparative fault / failure to mitigate damages to reduce the plaintiff's award strictly by the proportion of injuries that wearing the seatbelt would have avoided ($200,000 - $80,000 = $120,000)."
    },
    {
        id: 24,
        topic: "Strict Liability / Domestic Livestock Trespass on Public Highways vs. Private Land",
        q: "Horse Owner kept a stallion inside a well-fenced pasture. A severe windstorm blew a tree onto the fence, allowing the horse to wander onto an adjacent public state highway. Motorist collided with the horse at night. Motorist sued Horse Owner in Strict Liability for livestock trespass. Under established common law rules:",
        opts: [
            "Horse Owner is strictly liable, because common law strict livestock trespass applies unconditionally to all public and private geographical locations.",
            "Horse Owner is immune from all liability under the statutory California Open Range Livestock Grazing Act.",
            "Motorist's claim is completely barred under the doctrine of primary assumption of risk for night highway driving in rural areas.",
            "Horse Owner is judged under a Negligence standard, because strict liability for livestock trespass applies to invasions of private land, not highway collisions."
        ],
        ans: 3,
        exp: "Strict liability for livestock trespass applies to the invasion of PRIVATE REAL PROPERTY. When domestic animals escape onto a PUBLIC HIGHWAY and collide with motor vehicles, liability is governed strictly by the principles of ordinary NEGLIGENCE."
    },
    {
        id: 25,
        topic: "Negligence / Strict Liability Intervening Gross Negligence in Product Design",
        q: "Auto Corp. designed a vehicle with a defectively weak roof that collapsed in rollover crashes. While driving, Motorist was struck by Drunk Trucker driving 100 mph on the wrong side of the highway (gross negligence), causing a violent rollover where the roof collapsed, paralyzing Motorist. Auto Corp. argued Trucker's gross negligence was a superseding cause. Auto Corp.'s argument will:",
        opts: [
            "Succeed, because gross criminal vehicular negligence operates as an automatic superseding cause breaking all product liability causation chains.",
            "Fail, because the foreseeable scope of risk of a defective roof is protection against rollover crashes, regardless of how the crash was initiated.",
            "Succeed under the doctrine of extraordinary intervening force under Restatement (Second) of Torts § 447.",
            "Fail only if Motorist proves that Auto Corp. executives had actual knowledge of Drunk Trucker's prior driving record."
        ],
        ans: 1,
        exp: "In strict products liability crashworthiness cases, the manufacturer's duty is to design a vehicle that protects occupants in foreseeable rollover collisions. The fact that the initial collision was triggered by gross negligence does NOT act as a superseding cause, because the exact risk against which the product was designed to protect occurred."
    }
];