const examData = [
    {
        id: 1,
        topic: "Battery / Intent via Substantial Certainty (Garratt v. Dailey)",
        fp: "Questions 1–2 are based on the following fact situation:\nNeighbor was preparing to sit down in an outdoor lawn chair. Prankster, knowing that Neighbor had bad eyesight and had begun her sitting motion, quietly pulled the chair back two feet to play a joke. Prankster did not desire for Neighbor to get hurt, but knew that with the chair removed, Neighbor was virtually certain to impact the ground. Neighbor fell heavily onto the concrete patio, fracturing her tailbone.",
        q: "In an action by Neighbor against Prankster for Battery, Neighbor will:",
        opts: [
            "Lose, because Prankster acted with a humorous playful motive rather than a specific malicious intent to inflict bodily harm.",
            "Lose, because Prankster never made direct physical bodily contact with Neighbor's person during the removal of the chair.",
            "Prevail, because an actor satisfies the intent requirement for battery by acting with substantial certainty that contact will result.",
            "Prevail under strict liability, because pulling chairs from beneath elderly individuals constitutes an ultrahazardous dangerous activity."
        ],
        ans: 2,
        exp: "Under Garratt v. Dailey, the intent element for battery (and other intentional torts) is satisfied if the actor either acts with the purposeful desire to cause harmful or offensive contact, OR acts with knowledge to a 'substantial certainty' that such contact will result from their conduct."
    },
    {
        id: 2,
        topic: "Battery / Indirect Force and Causing the Contact",
        fp: "Questions 1–2 are based on the following fact situation:\nNeighbor was preparing to sit down in an outdoor lawn chair. Prankster, knowing that Neighbor had bad eyesight and had begun her sitting motion, quietly pulled the chair back two feet to play a joke. Prankster did not desire for Neighbor to get hurt, but knew that with the chair removed, Neighbor was virtually certain to impact the ground. Neighbor fell heavily onto the concrete patio, fracturing her tailbone.",
        q: "If Prankster argues that he cannot be liable for battery because the ground—rather than Prankster's hands—inflicted the physical impact, this defense will:",
        opts: [
            "Fail, because battery encompasses intentionally setting in motion a force that indirectly causes harmful contact with the plaintiff's person.",
            "Succeed, because battery strictly requires a direct physical application of force transmitted directly from the defendant's body.",
            "Succeed, because gravity and the hard concrete surface acted as an independent superseding natural force breaking liability.",
            "Fail only if Neighbor proves that Prankster owned or maintained the underlying real estate where the fall occurred."
        ],
        ans: 0,
        exp: "Battery does not require direct body-to-body contact between the plaintiff and defendant. It is sufficient if the defendant intentionally sets in motion a sequence of physical events or forces (like pulling a chair so gravity causes impact with the floor, digging a pit, or poisoning food) that results in harmful or offensive contact."
    },
    {
        id: 3,
        topic: "Consent / Fraud in the Inducement vs. Fraud in the Factum",
        q: "Defendant fraudulently told Plaintiff that he was a licensed physical therapist and that a specialized deep muscular pelvic massage was necessary to treat her lower back pain. In reality, Defendant had no medical training and performed the intimate touching solely for his own sexual gratification. Plaintiff consented to the physical touch based on the deception. In Plaintiff's civil action for Battery against Defendant:",
        opts: [
            "Defendant is not liable, unless Plaintiff can establish permanent physical musculoskeletal injury resulting from the massage.",
            "Defendant is not liable for Battery, because Plaintiff voluntarily consented to the exact physical contact that was performed.",
            "Defendant is liable for Negligent Misrepresentation only, because fraud in the inducement cannot support an intentional tort of battery.",
            "Defendant is liable for Battery, because fraud that goes to the essential character and nature of the touching completely vitiates consent."
        ],
        ans: 3,
        exp: "Consent is invalid if obtained by fraud. While fraud as to a collateral matter (fraud in the inducement, like paying with counterfeit money) may not invalidate consent for battery, fraud that goes to the very nature and essential character of the contact itself (fraud in the factum / essential nature of the touching) completely vitiates consent, rendering the contact an actionable Battery."
    },
    {
        id: 4,
        topic: "Negligence / Industry Custom vs. Standard of Care (The T.J. Hooper Rule)",
        q: "Tugboat Co. operated commercial cargo tugs in coastal shipping lanes. A sudden oceanic storm sank Tugboat's cargo barge. Had Tugboat been equipped with a working radio receiver, it would have received weather warnings in time to seek safe harbor. Tugboat Co. proved that 95% of commercial tugboats in the region did not carry radios and that industry custom was to navigate without them. Under the rule of The T.J. Hooper:",
        opts: [
            "Tugboat Co. is completely exonerated from negligence, because adhering to prevailing universal industry custom establishes reasonable care as a matter of law.",
            "Tugboat Co. can still be found negligent, because compliance with industry custom is evidentiary but never conclusive of reasonable care.",
            "Tugboat Co. is strictly liable, because commercial maritime shipping constitutes an abnormally dangerous ultrahazardous undertaking.",
            "Tugboat Co. is liable only if the United States Coast Guard had enacted a mandatory statutory regulation requiring two-way radios."
        ],
        ans: 1,
        exp: "Under The T.J. Hooper (Judge Learned Hand), adherence to industry custom is relevant evidence of reasonable care, but is NOT conclusive. An entire industry or profession may lag behind reasonable safety precautions; the court and jury determine the ultimate legal standard of ordinary reasonable care."
    },
    {
        id: 5,
        topic: "Negligence Per Se / Excused Statutory Violations (Greater Emergency Hazard)",
        q: "A state traffic statute required all motor vehicles to drive strictly on the right side of the roadway. Driver was driving lawfully on the right side when two young children suddenly ran into her lane chasing a ball. To avoid striking the children, Driver swerved across the double yellow line onto the left side of the road, colliding with oncoming Motorist. In Motorist's negligence per se action against Driver:",
        opts: [
            "Driver is strictly liable, because statutory traffic safety rules are absolute and do not recognize common law emergency excuses.",
            "Driver is liable under Negligence Per Se, but damages are reduced by fifty percent under statutory comparative fault principles.",
            "Driver is not liable under Negligence Per Se, because violating the statute was excused since compliance would have involved a greater danger to life.",
            "Driver is excused only if the children's parents were formally joined as co-defendants under the doctrine of parental liability."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 288A (and Tedla v. Ellman), a statutory violation is excused—and Negligence Per Se does not apply—when the actor is confronted by an emergency not of their own making, or where compliance with the statute would involve a greater risk of harm to the actor or third persons than violation."
    },
    {
        id: 6,
        topic: "Strict Liability / Abnormally Dangerous Activities & Scope of the Risk (Foster v. Preston Mill)",
        q: "Blasting Corp. conducted lawful quarry dynamiting with utmost care. Ground vibrations from the blasting operations, which caused zero structural or physical damage to nearby buildings, caused Mother Mink on a specialized commercial fur farm two miles away to become terrified and kill her newborn kittens. Mink Farmer sued Blasting Corp. under strict liability. Under the rule of Foster v. Preston Mill:",
        opts: [
            "Blasting Corp. is strictly liable, because commercial dynamiting carries absolute liability for all economic and property losses caused by ground vibrations.",
            "Blasting Corp. is liable under the doctrine of private nuisance, because ground vibrations interfere with agricultural livestock breeding.",
            "Blasting Corp. is strictly liable only if Mink Farmer had provided prior written notice of the location of the commercial breeding pens.",
            "Blasting Corp. is not strictly liable, because the harm resulted from the extraordinary uncharacteristic sensitivity of minks rather than the normal inherent blast risk."
        ],
        ans: 3,
        exp: "Under Foster v. Preston Mill Co. and Restatement (Second) of Torts § 519(2), strict liability for an abnormally dangerous activity is limited to the kind of harm the possibility of which makes the activity abnormally dangerous (e.g., structural collapse, flying debris, fire). Strict liability does NOT extend to harms caused by the extraordinary, idiosyncratic sensitivity of the plaintiff's livestock or business."
    },
    {
        id: 7,
        topic: "Strict Products Liability / Government Contractor Defense (Boyle v. United Technologies)",
        q: "Helicopter Corp. manufactured a military transport helicopter pursuant to precise, detailed design and performance specifications mandated by the United States Department of Defense. The escape hatch design met all military specifications, and Helicopter Corp. warned the military of all known design risks. A military pilot was injured when the escape hatch jammed during a water landing. In the pilot's strict products liability design defect suit, Helicopter Corp.'s best defense is:",
        opts: [
            "The Feres Doctrine, which grants private corporate defense manufacturers absolute sovereign constitutional immunity from all civil lawsuits.",
            "Lack of privity of contract, because military personnel do not purchase military aircraft directly in the commercial consumer market.",
            "The Government Contractor Defense, because the manufacturer complies with reasonably precise government specifications and warned of known risks.",
            "Primary assumption of risk, because military service members assume all inherent mechanical risks of combat equipment as a matter of law."
        ],
        ans: 2,
        exp: "Under Boyle v. United Technologies Corp., government military contractors are immune from state tort products liability for design defects if: (1) the United States approved reasonably precise specifications; (2) the equipment conformed to those specifications; and (3) the contractor warned the government about dangers in the use of the equipment known to the contractor but not to the government."
    },
    {
        id: 8,
        topic: "Defamation / The Single Publication Rule in Digital Media",
        q: "Magazine published an allegedly defamatory article on its commercial website on January 1, 2024. Under the applicable state statute of limitations, defamation actions must be filed within one year of publication. Plaintiff discovered the article and filed a defamation lawsuit on June 1, 2025. Plaintiff argued that each time a new web user clicked on and viewed the webpage in 2025, a new publication occurred. Under the Single Publication Rule:",
        opts: [
            "Plaintiff's lawsuit is timely, because every independent digital download or view of an internet webpage constitutes an independent, actionable republication.",
            "Plaintiff's lawsuit is barred by the statute of limitations, because posting an article on a website constitutes a single aggregate publication occurring on the date of initial upload.",
            "Plaintiff's lawsuit is timely, provided the article remained accessible to the general public continuously on the internet without password protection.",
            "Plaintiff's lawsuit is barred only if Magazine proves it sold more than 10,000 paid subscriptions to the online article in 2024."
        ],
        ans: 1,
        exp: "Under the Uniform Single Publication Act (Cal. Civ. Code § 3425.3 / Firth v. State of New York), an online publication on a website is treated as a single publication that triggers the statute of limitations on the date it is first made available to the public. Subsequent hits, views, or downloads by users do not constitute new publications or reset the limitations clock."
    },
    {
        id: 9,
        topic: "Damages / Constitutional Due Process Limits on Punitive Damages (State Farm v. Campbell)",
        q: "In an insurance bad-faith fraud action, the jury awarded Plaintiff $100,000 in actual compensatory damages and $15,000,000 in punitive damages (a 150-to-1 ratio) to punish Insurer for nationwide corporate misconduct unrelated to Plaintiff's claim. On appeal, Insurer challenged the punitive damage award under the Fourteenth Amendment Due Process Clause. Under State Farm v. Campbell:",
        opts: [
            "The punitive award must be reduced automatically to exactly equal the compensatory damage award (a 1-to-1 ratio) under federal statutory rules.",
            "The punitive award is constitutionally valid, because states possess plenary discretion to set punitive damages necessary to deter massive corporate fraud.",
            "The punitive award is unconstitutionally excessive, because punitive damages rarely exceed a single-digit ratio to compensatory damages and cannot punish for out-of-state conduct.",
            "The punitive award is unconstitutional only if Insurer can demonstrate that the trial judge harbored actual subjective bias against the insurance company."
        ],
        ans: 2,
        exp: "Under State Farm Mut. Auto. Ins. Co. v. Campbell (and BMW v. Gore), the U.S. Supreme Court held that punitive damage awards must satisfy procedural and substantive due process: (1) courts consider the degree of reprehensibility; (2) few awards exceeding a single-digit ratio (e.g., 9-to-1) will satisfy due process; and (3) punitive damages cannot be used to punish a defendant for out-of-state conduct or dissimilar third-party harm."
    },
    {
        id: 10,
        topic: "Negligence / Landowner Off-Premises Liability for Artificial Activities",
        q: "Baseball Club operated an outdoor commercial baseball stadium. The outfield fence was built only 10 feet high, positioned 50 feet from a busy public four-lane highway. During daily games, dozens of foul balls and home runs flew over the fence into highway traffic. One baseball crashed through Motorist's windshield, causing a severe collision. In Motorist's negligence action against Baseball Club:",
        opts: [
            "Baseball Club is shielded from liability under the sports stadium limited-duty rule (the 'Baseball Rule') applicable to spectators.",
            "Baseball Club is liable, because a landowner who conducts an artificial activity on land owes a duty of reasonable care to prevent physical hazards to travelers on adjacent public roads.",
            "Baseball Club is not liable, because motorists driving on public highways adjacent to sports complexes assume the risk of flying athletic balls.",
            "Baseball Club is strictly liable under the doctrine of Rylands v. Fletcher for accumulating dangerous athletic projectiles on real property."
        ],
        ans: 1,
        exp: "While the 'Baseball Rule' limits a stadium's duty to spectators who choose to attend games inside the park, a landowner conducting activities on land owes a standard duty of reasonable care to travelers on adjacent public highways to prevent artificial conditions or activities from projecting physical hazards into public traffic."
    },
    {
        id: 11,
        topic: "Conversion / Refusal of Demand by Bailee",
        q: "Owner left an antique diamond ring with Jeweler for an appraisal. Three weeks later, Owner returned with the claim receipt, paid the appraisal fee, and demanded the return of the ring. Jeweler, believing he could sell the ring for a high commission, refused to return the ring and locked it in the store safe. Owner sued Jeweler for Conversion. Jeweler's refusal constitutes:",
        opts: [
            "Trespass to Chattels only, because Jeweler came into initial possession of the ring lawfully with Owner's express consent.",
            "A pure breach of bailment contract, completely barring all independent tort causes of action under the economic loss rule.",
            "Actionable conversion only if Jeweler actually completed a third-party commercial sale of the ring to a retail buyer.",
            "Actionable Conversion as a matter of law, because an unqualified refusal by a bailee to surrender chattel upon proper lawful demand constitutes conversion."
        ],
        ans: 3,
        exp: "Where a defendant originally acquired possession of chattel lawfully (as a bailee or borrower), conversion occurs the moment the owner makes a valid, unconditional demand for its return and the defendant refuses or delays returning the chattel without lawful justification."
    },
    {
        id: 12,
        topic: "False Imprisonment / Failure to Provide Egress Under Legal Duty",
        q: "Passenger boarded Ferryboat for a 20-minute water crossing across a bay. Upon reaching the destination dock, Captain anchored the boat 20 feet from the pier and refused to lower the passenger gangway for four hours solely because Captain was engaged in an argument with dockworkers. Passenger was uninjured but trapped aboard. In Passenger's suit for False Imprisonment, Captain is:",
        opts: [
            "Not liable, because Captain never physically touched, threatened, or locked Passenger inside a designated room on the vessel.",
            "Liable for False Imprisonment, because failing to provide a promised, obligated means of egress when under a legal duty to do so constitutes actionable confinement.",
            "Not liable, because Passenger entered the ferryboat voluntarily and assumed all risks of maritime operational transit delays.",
            "Liable only under admiralty breach of contract, because common carriers are immune from intentional torts under maritime law."
        ],
        ans: 1,
        exp: "False Imprisonment can be committed by omission where the defendant owes an existing affirmative legal or contractual duty to provide the plaintiff with a means of leaving or egress (such as a common carrier, jailer, or elevator operator) and refuses to do so, effectively trapping the plaintiff within bounded limits."
    },
    {
        id: 13,
        topic: "Negligence / Strict Liability for Non-Delegable Duty of Inherently Dangerous Work",
        q: "Landowner hired Independent Contractor Demolition to demolish a 10-story concrete building in a crowded urban downtown district using heavy wrecking balls. Demolition dropped a concrete slab onto Pedestrian on the public sidewalk due to improper barricades. Landowner argued Demolition was an independent contractor. In Pedestrian's suit against Landowner:",
        opts: [
            "Landowner is immune from liability, because employers are never responsible for the operational negligence of independent demolition contractors.",
            "Landowner is liable only if Pedestrian proves Landowner maintained direct on-site architectural supervision of the demolition crew.",
            "Landowner is vicariously liable, because urban high-rise structural demolition is an inherently dangerous activity carrying a non-delegable duty of safety.",
            "Landowner is strictly liable under the doctrine of enterprise liability governing commercial urban real estate ownership."
        ],
        ans: 2,
        exp: "An exception to the independent contractor non-liability rule exists for 'Inherently Dangerous Work' (work that involves a special, recognizable danger to others unless special precautions are taken, like urban high-rise building demolition). The employer remains vicariously liable for the contractor's failure to take necessary safety precautions."
    },
    {
        id: 14,
        topic: "Defamation / Defamation of a Corporation (Business Entity Standing)",
        q: "Broadcaster published a false investigative report claiming that Bakery Corp. used spoiled, expired milk in all of its commercially distributed baby food products. Bakery Corp.'s commercial sales plummeted by $500,000. Bakery Corp. sued Broadcaster for Defamation. Broadcaster moved to dismiss, arguing that corporations lack feelings and cannot be defamed. The court should:",
        opts: [
            "Grant the motion, because common law defamation is a personal tort protecting human dignity that cannot be asserted by business corporations.",
            "Grant the motion, because corporations are restricted exclusively to statutory unfair business competition and antitrust claims.",
            "Deny the motion only if Bakery Corp. can prove that Broadcaster published the report with subjective personal hatred against corporate officers.",
            "Deny the motion, because a corporation can maintain a defamation action for false statements that prejudice its business reputation and financial standing."
        ],
        ans: 3,
        exp: "A corporation or business entity can maintain an action for Defamation if the defamatory matter tends to prejudice it in the conduct of its business, trade, or profession, or to deter third persons from dealing with it, resulting in financial injury to the corporate reputation."
    },
    {
        id: 15,
        topic: "Negligence / Landlord Liability for Hidden Latent Defects at Lease Inception",
        q: "Landlord leased a residential house to Tenant. At the time of signing the lease, Landlord knew that an internal attic floorboard above the bedroom was rotted through and ready to collapse, but said nothing because it was hidden beneath carpeting. Two weeks after moving in, Tenant stepped onto the attic board, which collapsed, fracturing Tenant's leg. Tenant sued Landlord for negligence. Result?",
        opts: [
            "Landlord wins, because the execution of a residential lease transfers exclusive possession and control, relieving the lessor of all premises liability.",
            "Tenant wins, because a lessor owes a duty to disclose known, concealed latent dangerous conditions existing on the premises at the time the lease is executed.",
            "Landlord wins under the doctrine of caveat lessee, which imposes an absolute duty upon residential tenants to inspect premises prior to occupancy.",
            "Tenant wins under strict products liability, because leased residential dwellings are classified as manufactured commercial consumer goods."
        ],
        ans: 1,
        exp: "Under common law and modern landlord-tenant tort rules, a landlord is liable for injuries resulting from a dangerous condition on leased premises if: (1) the condition existed at the time the lease was made; (2) the condition is latent (concealed); and (3) the landlord knew or had reason to know of the condition and failed to disclose it to the tenant."
    },
    {
        id: 16,
        topic: "Trespass to Land / Subterranean & Overhanging Invasions",
        q: "Developer constructed a commercial building on his own lot. As part of the foundation support, Developer drilled and installed 20-foot long steel ground-anchor rods 40 feet beneath the surface of Neighbor's adjoining land without Neighbor's permission. The subterranean rods caused zero physical surface subsidence or interference with Neighbor's current surface use. Neighbor sued Developer for Trespass to Land. Result?",
        opts: [
            "Developer wins, because modern property law restricts actionable trespass strictly to the usable surface boundary of real property.",
            "Neighbor wins, because trespass to land protects a landowner's subsurface rights against unauthorized intentional physical subterranean intrusions.",
            "Developer wins, because Neighbor failed to plead and prove measurable physical damage or diminution of property value.",
            "Neighbor wins only if Neighbor can prove that the subsurface rods interfered with an active subterranean mining or water extraction operation."
        ],
        ans: 1,
        exp: "Trespass to Land extends vertically both into the reasonable airspace above and the subterranean soil beneath the land. Intentionally causing physical structures or rods to enter the subsurface soil of adjoining property without consent constitutes an actionable Trespass to Land, even without proof of actual surface damage."
    },
    {
        id: 17,
        topic: "Strict Products Liability / Commercial Sellers of Reconditioned / Rebuilt Used Goods",
        q: "Machinery Corp. bought used, worn industrial metal lathes, completely disassembled them, rebuilt the drive systems with new motors, and sold the rebuilt lathes as 'certified reconditioned' machines. A refurbished lathe suffered a catastrophic motor flywheel failure due to an internal design defect in the rebuilt drive system, severing Machinist's hand. In Machinist's strict products liability suit, Machinery Corp. is:",
        opts: [
            "Not subject to strict products liability, because second-hand and used equipment dealers are categorically exempt from strict tort liability.",
            "Liable only if Machinist can establish that Machinery Corp. was in direct contractual privity with Machinist's corporate employer.",
            "Subject to strict products liability, because a commercial dealer who rebuilds, reconditions, and markets used goods is treated as a manufacturer/seller.",
            "Not liable, because purchasers of reconditioned industrial machinery assume all inherent mechanical risks of equipment operation."
        ],
        ans: 2,
        exp: "While ordinary 'as-is' sellers of used goods are generally not strictly liable, commercial enterprises that rebuild, reconstruct, or heavily recondition used products and place them back into the stream of commerce are held to the standard of manufacturers/commercial sellers and are subject to strict products liability."
    },
    {
        id: 18,
        topic: "Privacy / Commercial Appropriation - Incidental Use & Transformative Work Defense",
        q: "Author wrote an unauthorized, highly acclaimed historical biography of Famous Singer. The book cover featured a truthful photograph of Famous Singer performing on stage. Famous Singer sued Author for Commercial Misappropriation of Name and Likeness. Under California law (Comedy III Productions v. Gary Saderup):",
        opts: [
            "Famous Singer prevails, because using a celebrity's photograph on commercial merchandise sold for profit is actionable misappropriation per se.",
            "Famous Singer prevails, because unauthorized biographies require prior express written consent from the living celebrity subject.",
            "Author prevails only if Author donates at least fifty percent of the book's retail sales royalties to a designated charitable trust.",
            "Author prevails, because using a celebrity's name and likeness in an expressive, biographical historical book is protected under the First Amendment."
        ],
        ans: 3,
        exp: "Under the First Amendment (and the Transformative Use doctrine / Comedy III Productions), the right of publicity does not bar the use of a celebrity's name or likeness in historical biographies, news reporting, docudramas, or expressive creative works of public interest. The commercial sale of the book does not negate First Amendment protection."
    },
    {
        id: 19,
        topic: "Joint Tortfeasors / Modern Effect of Release on Co-Tortfeasors",
        q: "Plaintiff was injured in a three-car collision caused by the joint negligence of Driver A and Driver B. Prior to filing suit, Plaintiff executed a written document releasing Driver A from all liability in exchange for $25,000. The document contained no reservation of rights. Plaintiff then filed a negligence suit against Driver B for the remaining damages. Under modern statutory and common law rules:",
        opts: [
            "The release of Driver A operates as an absolute, automatic discharge of all joint tortfeasors (Driver B) as a matter of common law.",
            "The release of Driver A does NOT discharge Driver B from liability, but reduces the claim against Driver B by the amount paid ($25,000).",
            "Driver B is completely discharged unless Plaintiff obtained Driver B's advance written consent to the settlement agreement.",
            "Driver B is liable for the full $100,000 without receiving any financial credit for the $25,000 settlement payment made by Driver A."
        ],
        ans: 1,
        exp: "Under modern law (California Code of Civil Procedure § 877 and Restatement (Third) of Torts), a release given in good faith to one joint tortfeasor does NOT discharge any other tortfeasor from liability unless its terms expressly so provide; instead, it reduces the claims against the remaining tortfeasors by the dollar amount of the settlement."
    },
    {
        id: 20,
        topic: "Negligence / Landowner Duty to Protect Firefighters from Concealed Non-Obvious Traps",
        q: "Chemical Factory secretly and unlawfully stored 500 gallons of shock-sensitive explosive nitroglycerin inside an unlabeled wooden shed marked 'GARDEN TOOLS ONLY.' A small electrical fire started in the yard. Firefighter entered the shed to grab a water hose and was severely injured when the shock-sensitive chemicals detonated. Factory asserted the Firefighter's Rule. Factory's defense will:",
        opts: [
            "Succeed, because professional first responders assume all risks of chemical explosions when responding to emergency commercial alarms.",
            "Fail, because the Firefighter's Rule does not shield landowners who maintain hidden, concealed, non-obvious ultra-hazardous traps on premises.",
            "Succeed, because the Firefighter's Rule provides absolute, unqualified tort immunity to all commercial property owners.",
            "Fail only if Firefighter was a direct full-time employee of the municipal department rather than a voluntary reserve responder."
        ],
        ans: 1,
        exp: "An established exception to the Firefighter's Rule holds that a landowner remains liable if they fail to warn professional emergency responders of hidden, concealed, non-obvious dangerous traps or hazards on the premises known to the owner and of which the firefighter has no reason to be aware (such as hidden explosives in a shed marked tools)."
    },
    {
        id: 21,
        topic: "Battery / Non-Consensual Medical Procedure during Authorized Treatment",
        q: "Patient authorized Orthopedic Surgeon to perform surgery on Patient's left knee. While Patient was under general anesthesia, Surgeon noticed that Patient's right knee had a torn ligament that could easily be repaired while the patient was already sedated. The right knee condition was not an immediate life-threatening emergency. Surgeon repaired both knees flawlessly. In Patient's suit for Battery regarding the right knee:",
        opts: [
            "Surgeon will prevail, because surgeons have implied common law authority to correct all discovered pathological conditions during authorized surgery.",
            "Patient will lose, because the surgery was successful, caused no physical harm, and conferred a substantial medical benefit on Patient.",
            "Patient will prevail, because performing an unauthorized surgical procedure on a different body part constitutes Battery regardless of therapeutic benefit.",
            "Surgeon will prevail under the emergency rescue doctrine, because maintaining anesthesia for a future second surgery created unnecessary medical risk."
        ],
        ans: 2,
        exp: "Performing a surgical operation on a different part of the patient's body than that consented to constitutes an actionable Battery, even if the surgery was performed with extraordinary skill, caused no harm, and provided great therapeutic benefit to the patient, unless an immediate life-threatening emergency existed."
    },
    {
        id: 22,
        topic: "Strict Products Liability / Raw Materials / Bulk Supplier Doctrine",
        q: "Sand Corp. mined and sold standard, non-defective commercial raw silica sand in 50-ton rail cars to Glass Factory. Sand Corp. provided standard industrial material safety data sheets. Glass Factory processed the sand into consumer glass bottles using an unshielded crushing process that exposed factory workers to silica dust. Worker sued Sand Corp. under strict products liability for failure to warn. Sand Corp. is:",
        opts: [
            "Strictly liable, because all commercial suppliers of raw materials in the chain of manufacturing distribution bear non-delegable product safety duties.",
            "Not liable under the Raw Materials / Bulk Supplier Doctrine, because suppliers of non-defective raw bulk commodities are not liable for downstream processing designs.",
            "Liable under the consumer expectation test, because raw silica sand dust creates inherent respiratory risks to industrial workers.",
            "Not liable only if Sand Corp. held a valid federal commercial mining certificate issued by the United States Bureau of Mines."
        ],
        ans: 1,
        exp: "Under the Raw Materials / Bulk Supplier Doctrine (Restatement (Third) of Torts: Products Liability § 5), a supplier of a raw material or bulk component (like sand, gravel, or steel) that is not itself defective is not liable for injuries resulting from the integration of the raw material into a finished product, unless the supplier substantially participated in the design of the finished product."
    },
    {
        id: 23,
        topic: "Assault / Awareness of Threat at the Time of the Act",
        q: "Defendant walked up behind Victim while Victim was asleep on a park bench, pointed a loaded revolver at Victim's head, and whispered: 'I should kill you right now.' Victim remained completely sound asleep throughout the incident and never woke up. Two hours later, a bystander showed Victim a video of the incident, causing Victim severe terror. In Victim's civil suit for Assault against Defendant:",
        opts: [
            "Victim will prevail, because learning of a past imminent deadly peril that actually occurred satisfies reasonable apprehension of harm.",
            "Victim will prevail for nominal damages, because pointing a loaded firearm at a human being constitutes an intentional assault per se.",
            "Victim will lose, because the tort of assault strictly requires that the plaintiff experience immediate apprehension of harm at the time the act occurs.",
            "Victim will lose only if Defendant proved that the firearm safety mechanism was engaged during the entire park bench incident."
        ],
        ans: 2,
        exp: "Assault requires that the plaintiff be aware of the threatening conduct and experience apprehension of immediate harmful or offensive contact AT THE TIME the conduct occurs. If the plaintiff is unaware of the threat at the time (e.g., asleep, unconscious, or looking away), there is no actionable assault, even if the plaintiff becomes terrified upon learning of it later."
    },
    {
        id: 24,
        topic: "Economic Torts / Civil Conspiracy Elements",
        q: "Executive and Accountant agreed to an unlawful plan to falsify financial statements to induce Investor to purchase worthless corporate stock. Accountant prepared the fraudulent balance sheet, and Executive presented it to Investor. Investor relied on the statements and lost $500,000. Investor sued Accountant for Fraud and Civil Conspiracy. Accountant argued he never spoke directly to Investor. Accountant is:",
        opts: [
            "Not liable for fraud, because intentional misrepresentation strictly requires direct verbal or written communication between the defendant and plaintiff.",
            "Jointly and severally liable for all damages under Civil Conspiracy, because co-conspirators are liable for all tortious acts committed in furtherance of the common scheme.",
            "Liable only for proportional contribution based on the equitable percentage of time Accountant spent drafting the spreadsheet.",
            "Shielded from liability under the professional auditor liability shield of Restatement (Second) of Torts § 552."
        ],
        ans: 1,
        exp: "Civil Conspiracy is not an independent tort, but a mechanism of vicarious joint liability. Where two or more persons agree to accomplish an unlawful objective (or a lawful objective by unlawful means), and an overt tortious act is committed in furtherance of the conspiracy resulting in damage, EACH conspirator is jointly and severally liable for all torts committed by co-conspirators."
    },
    {
        id: 25,
        topic: "Negligence / Failure to Use Safety Devices Supplied by Employer (Secondary Assumption of Risk)",
        q: "Roofer was hired by Construction Co. to shingle a steep, wet roof. Construction Co. supplied standard OSHA-approved safety harnesses, anchor lines, and warning barricades, and instructed Roofer to wear the harness. Roofer chose not to wear the harness because it was uncomfortable. Roofer slipped on the wet shingles, fell, and broke his leg. In California (a pure comparative fault jurisdiction), Roofer's claim against Construction Co.:",
        opts: [
            "Is completely barred under Primary Assumption of Risk, because falling off roofs is an inherent risk of commercial roofing employment.",
            "Is completely barred under traditional contributory negligence for violating explicit corporate safety guidelines.",
            "Entitles Roofer to 100% full damages under the strict worker protection provisions of industrial safety statutes.",
            "Is governed by Secondary Assumption of Risk / Comparative Fault, reducing Roofer's damage recovery by his percentage of fault but not barring the claim."
        ],
        ans: 3,
        exp: "Under California law (Knight v. Jewett), where the defendant owes a duty of care (e.g., an employer/contractor duty to provide safe premises/equipment), but the plaintiff unreasonably encounters a known risk (Secondary Assumption of Risk, like refusing to wear an available safety harness), the defense is merged into Pure Comparative Fault, reducing the plaintiff's recovery proportionally rather than completely barring it."
    }
];