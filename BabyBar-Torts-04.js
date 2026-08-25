const examData = [
    {
        id: 1,
        topic: "Negligence / Affirmative Duty to Protect (Tarasoff v. Regents)",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient was receiving outpatient psychotherapy from Psychiatrist. During a private therapy session, Patient explicitly stated that he intended to murder Victim, his former girlfriend, as soon as she returned to campus from summer break. Psychiatrist determined that Patient presented a grave and credible threat of violence. Psychiatrist notified campus police, but did not warn Victim or Victim's parents. Two weeks later, Patient shot and severely injured Victim.",
        q: "In a civil tort action by Victim against Psychiatrist under the doctrine of Tarasoff v. Regents of the University of California, Victim will:",
        opts: [
            "Lose, because doctor-patient medical confidentiality privileges categorically supersede common law affirmative duties.",
            "Prevail, because a therapist owes a duty of reasonable care to protect a foreseeable, readily identifiable victim from threats.",
            "Lose, because Psychiatrist fully discharged all legal duties by reporting the dangerous patient statements to police.",
            "Prevail under strict liability, because psychiatrists are held to an absolute warranty of public safety regarding outpatients."
        ],
        ans: 1,
        exp: "Under Tarasoff v. Regents of the University of California, when a psychotherapist determines that a patient presents a serious danger of violence to a reasonably identifiable victim, the therapist bears an affirmative legal duty to exercise reasonable care to protect the intended victim."
    },
    {
        id: 2,
        topic: "Negligence / Tarasoff Limits to Unidentifiable Victims",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient was receiving outpatient psychotherapy from Psychiatrist. During a private therapy session, Patient explicitly stated that he intended to murder Victim, his former girlfriend, as soon as she returned to campus from summer break. Psychiatrist determined that Patient presented a grave and credible threat of violence. Psychiatrist notified campus police, but did not warn Victim or Victim's parents. Two weeks later, Patient shot and severely injured Victim.",
        q: "If Patient had instead stated during therapy: 'I am so furious at the world that I am going to buy a gun and shoot the first person I see downtown tomorrow,' Psychiatrist's duty to non-identifiable bystanders would be:",
        opts: [
            "Absolute, requiring Psychiatrist to issue public press warnings through local emergency broadcast media.",
            "Satisfied exclusively by obtaining an immediate mandatory judicial civil commitment order from a judge.",
            "Non-existent, because the Tarasoff duty to warn does not extend to the general public without an identifiable target.",
            "Governed by pure comparative fault allocation between the psychotherapist and local municipal law enforcement."
        ],
        ans: 2,
        exp: "Under Tarasoff and Thompson v. County of Alameda, a therapist has no affirmative common law duty to warn the public at large when a patient makes generalized, non-specific threats of violence. The duty to warn arises only when there is a 'readily identifiable' victim."
    },
    {
        id: 3,
        topic: "Negligence / Parental Liability for Torts of Minor Children",
        q: "Parent knew that their 9-year-old child had a violent habit of shooting metal ball bearings from a high-powered slingshot at neighborhood pets and pedestrians, having received multiple complaints. Parent took no steps to confiscate the slingshot or supervise Child. Child shot Neighbor in the eye from the front porch, causing blindness. In Neighbor's tort suit against Parent, Neighbor will:",
        opts: [
            "Prevail, because parents owe a duty of reasonable care to control minor children when on notice of dangerous propensities.",
            "Lose, because parents are never vicariously liable at common law for the intentional or negligent torts of minor children.",
            "Lose, because parents enjoy absolute parental immunity against third-party personal injury lawsuits regarding supervision.",
            "Prevail under strict parental liability, because high-powered slingshots are classified as ultrahazardous instrumentalities."
        ],
        ans: 0,
        exp: "While parents are not automatically vicariously liable for their children's torts at common law, parents are directly liable for their own independent negligence if they know or have reason to know of the child's dangerous propensities and fail to exercise reasonable care to control or disarm the child."
    },
    {
        id: 4,
        topic: "Medical Malpractice / Informed Consent & Material Risk Standard (Cobbs v. Grant)",
        q: "Surgeon performed an elective stomach ulcer surgery on Patient without disclosing that the procedure carried an inherent, unavoidable 5% risk of spleen injury. The spleen was inadvertently lacerated during non-negligent surgery, requiring spleen removal. Patient proved that a reasonable person in Patient's position would have declined the surgery had the risk been disclosed. Under California law (Cobbs v. Grant), Patient will:",
        opts: [
            "Prevail under intentional battery, because failing to disclose a known material risk vitiates all subjective surgical consent.",
            "Lose, because a 5% statistical probability of complication is deemed de minimis and immaterial as a matter of law.",
            "Lose, because Surgeon performed the surgical incision with utmost skill without committing active operational negligence.",
            "Prevail under professional negligence, because physicians must disclose all material risks a reasonable person would deem significant."
        ],
        ans: 3,
        exp: "Under Cobbs v. Grant, a physician owes a duty to disclose all 'material' risks inherent in a proposed procedure. Failure to disclose is pleaded under negligence (lack of informed consent), not battery, unless the doctor performed a completely unauthorized procedure."
    },
    {
        id: 5,
        topic: "Strict Products Liability / Post-Sale Duty to Warn",
        q: "Automaker manufactured a commercial delivery van in 2020 that complied with all safety regulations. In 2023, Automaker discovered through field telemetry that van fuel lines degraded and caught fire after 30,000 miles of driving. Automaker made no effort to notify registered owners or issue a recall warning. In 2025, Owner's van reached 32,000 miles, caught fire, and burned Owner. In Owner's strict products liability suit, Automaker is:",
        opts: [
            "Not liable, because a product's safety is judged strictly and exclusively at the precise time the product leaves factory custody.",
            "Liable, because a commercial manufacturer bears a continuing duty to warn foreseeable users of substantial hazards discovered post-sale.",
            "Not liable, unless the National Highway Traffic Safety Administration (NHTSA) had issued a mandatory federal recall order.",
            "Liable under res ipsa loquitur, because commercial delivery vans do not catch fire after 30,000 miles absent assembly neglect."
        ],
        ans: 1,
        exp: "Under modern strict products liability law (Restatement (Third) of Torts: Products Liability § 10), a manufacturer has an affirmative post-sale duty to provide reasonable warnings to purchasers when the manufacturer knows or should know that the product poses a substantial risk of harm discovered after original sale."
    },
    {
        id: 6,
        topic: "Damages / Wrongful Death vs. Survival Actions",
        q: "Driver negligently struck Pedestrian, causing catastrophic internal injuries. Pedestrian survived in excruciating pain in the intensive care unit for three weeks, incurring $100,000 in hospital bills and $20,000 in lost wages, before succumbing to the injuries. Pedestrian's surviving Wife, as personal representative and sole heir, filed suit against Driver asserting both a Survival Action and a Wrongful Death claim. Under modern tort statutes:",
        opts: [
            "Wife is legally required to elect between the Survival Action and Wrongful Death claim prior to trial to prevent double recovery.",
            "Wife recovers all pre-death pain and suffering of the decedent under Wrongful Death, but cannot recover medical expenses.",
            "Wife recovers the decedent's pre-death hospital bills and lost wages under Survival, and financial support under Wrongful Death.",
            "Wife's claims are completely barred if Pedestrian died without executing a valid last will and testament prior to death."
        ],
        ans: 2,
        exp: "A Survival Action allows recovery of economic losses sustained by the decedent prior to death (medical expenses, lost wages). A Wrongful Death Action compensates surviving beneficiaries for their own personal economic losses (loss of financial support, loss of household services)."
    },
    {
        id: 7,
        topic: "Economic Torts / Injurious Falsehood (Trade Libel / Product Disparagement)",
        q: "Software Developer published an online blog post falsely claiming that Competitor's accounting software contained hidden spyware designed to steal user bank credentials. Developer knew the claim was completely fabricated. As a direct result, 50 corporate clients cancelled their subscriptions with Competitor, causing $200,000 in lost profits. Competitor sued Developer for Trade Libel / Injurious Falsehood. Competitor will:",
        opts: [
            "Prevail, because Developer published a false disparaging statement regarding product quality with malice, causing pecuniary loss.",
            "Lose, because internet product comparison reviews are protected by an absolute First Amendment commercial speech privilege.",
            "Lose, unless Competitor can prove that Developer committed a contemporaneous physical trespass to digital chattel.",
            "Prevail for defamation per se, entitling Competitor to presumed general reputational damages without proving lost sales."
        ],
        ans: 0,
        exp: "Injurious Falsehood (Trade Libel) requires: (1) publication of a false statement disparaging the quality or title of plaintiff's property or business; (2) made with malice (knowing falsity or reckless disregard); and (3) causing specific pecuniary loss (special damages)."
    },
    {
        id: 8,
        topic: "Nuisance / Spite Fences and Aesthetic Obstructions",
        q: "Homeowner and Neighbor had a bitter property dispute. Solely to torment Neighbor and block Neighbor's picturesque ocean view, Homeowner erected a 25-foot tall, hideous, unpainted wooden fence right along the boundary line. The fence served no useful agricultural or domestic purpose. Neighbor sued Homeowner for Private Nuisance under California's Spite Fence Statute (Cal. Civ. Code § 841.4). Result?",
        opts: [
            "Homeowner wins, because a landowner has an absolute property right to build any structure on their land regardless of motive.",
            "Homeowner wins, because common law nuisance categorically refuses to recognize aesthetic harms or blockage of light and view.",
            "Neighbor wins only if Neighbor proves that the wooden fence decreased the market value of Homeowner's own property.",
            "Neighbor wins, because an excessively tall fence erected maliciously to annoy a neighbor constitutes an actionable private nuisance."
        ],
        ans: 3,
        exp: "Under California Civil Code § 841.4, any fence or structure in the nature of a fence unnecessarily exceeding 10 feet in height, maliciously erected or maintained for the purpose of annoying an owner or occupant of adjoining property, is deemed a private nuisance."
    },
    {
        id: 9,
        topic: "Joint Tortfeasors / Concert of Action & Drag Racing",
        q: "Driver A and Driver B agreed to an impromptu, illegal drag race on a public city street at 90 mph. During the race, Driver A's car spun out and struck Pedestrian on the sidewalk. Driver B's car never made physical contact with Pedestrian and stopped safely 50 yards away. Pedestrian sued Driver B for negligence. Driver B argued he did not strike Pedestrian. Driver B is:",
        opts: [
            "Not liable, because Driver B's vehicle never made physical impact and was not the 'but-for' mechanical cause of the collision.",
            "Jointly and severally liable with Driver A under Concert of Action, because participating in an illegal race constitutes mutual encouragement.",
            "Liable only if Pedestrian proves Driver B was the leader or instigator of the illegal street drag race.",
            "Relieved of liability under the doctrine of independent intervening negligence committed by Driver A."
        ],
        ans: 1,
        exp: "Under Concert of Action (Restatement (Second) of Torts § 876), those who participate in a common plan or substantially encourage another's tortious conduct (such as illegal street drag racing) are jointly and severally liable for all resulting harm, even without physical contact."
    },
    {
        id: 10,
        topic: "Negligence / Governmental Immunity vs. Proprietary Functions",
        q: "City operated a municipal water utility that sold water to commercial and residential customers for a fee. Because City utility employees neglected routine pipe inspections for five years, a water main ruptured under high pressure, flooding Store's basement and destroying $100,000 in inventory. Store sued City for negligence. City asserted sovereign immunity. The court should:",
        opts: [
            "Grant sovereign immunity, because municipal governments enjoy absolute constitutional immunity from civil property damage suits.",
            "Grant immunity, because decisions regarding municipal maintenance schedules represent protected legislative discretionary policy.",
            "Deny immunity, because operating a commercial fee-generating water utility is a proprietary municipal function.",
            "Deny immunity only if Store proves that City utility maintenance employees acted with gross criminal recklessness."
        ],
        ans: 2,
        exp: "Public entities enjoy immunity for 'discretionary governmental' policy functions, but are liable in ordinary tort for 'proprietary / operational' functions (activities traditionally performed by private commercial enterprises, like operating a fee-charging water utility)."
    },
    {
        id: 11,
        topic: "Negligence / Primary Assumption of Risk in Sports (Knight v. Jewett)",
        q: "Plaintiff and Defendant participated in an informal, co-ed touch football game. During a pass play, Defendant aggressively jumped for the ball, knocked Plaintiff over, and accidentally stepped on Plaintiff's hand, fracturing three fingers. Defendant did not intentionally strike Plaintiff or engage in reckless conduct outside the normal range of the sport. Under California law (Knight v. Jewett):",
        opts: [
            "Defendant is liable under ordinary negligence, because touch football rules prohibit aggressive physical jumping and bodily collisions.",
            "Defendant is not liable under Primary Assumption of Risk, because coparticipants owe no duty against inherent sport risks.",
            "Plaintiff recovers 50% of damages under pure comparative fault allocation of recreational sports injuries.",
            "Defendant is strictly liable for sports injuries occurring on non-regulated, private municipal park fields."
        ],
        ans: 1,
        exp: "Under Knight v. Jewett, Primary Assumption of Risk completely bars a negligence claim by a sports participant against a coparticipant for injuries resulting from risks inherent in the sport, provided defendant did not intentionally injure plaintiff or engage in reckless conduct outside the normal range of the sport."
    },
    {
        id: 12,
        topic: "Strict Products Liability / Subsequent Remedial Measures Rule in Products Cases",
        q: "Worker was injured when a punch press crushed his hand. Worker sued Manufacturer in strict products liability, alleging the press was defectively designed because it lacked dual-button safety hand controls. At trial, Worker sought to introduce evidence that one year after the accident, Manufacturer added dual-button hand controls to all newly manufactured presses. Under California law (Ault v. International Harvester):",
        opts: [
            "The evidence is categorically inadmissible under evidentiary rules to prevent deterring post-accident safety repairs.",
            "The evidence is admissible in strict products liability to demonstrate the feasibility of a safer alternative design.",
            "The evidence is admissible only if Worker proves Manufacturer destroyed all pre-accident engineering blueprints.",
            "The evidence is inadmissible unless Manufacturer asserts the affirmative defense of comparative user negligence."
        ],
        ans: 1,
        exp: "Under California law (Ault v. International Harvester Co.), the statutory exclusion of subsequent remedial measures applies to negligence actions, but does NOT apply to strict products liability cases; post-accident design changes are admissible to prove design defect or feasibility."
    },
    {
        id: 13,
        topic: "Negligence / Negligent Entrustment Elements",
        q: "Car Owner knew that Friend had two recent convictions for drunk driving and had had his driver's license revoked. Nevertheless, Owner handed Friend the keys to Owner's high-powered sports car to take a weekend trip. While intoxicated, Friend drove through a red light and struck Pedestrian. In Pedestrian's suit against Car Owner:",
        opts: [
            "Car Owner is not liable, because an automobile owner is never liable for torts committed by permissive drivers without owner present.",
            "Car Owner is liable under respondeat superior, because lending a vehicle creates an irrebuttable commercial agency relationship.",
            "Car Owner is directly liable for Negligent Entrustment for supplying a dangerous chattel to a known reckless driver.",
            "Car Owner is not liable, because Friend's voluntary intoxication was an independent superseding criminal act."
        ],
        ans: 2,
        exp: "Negligent Entrustment occurs when the owner of a chattel entrusts it to a person whom the owner knows or has reason to know is incompetent, reckless, or inexperienced, creating an unreasonable risk of harm to third parties."
    },
    {
        id: 14,
        topic: "Defamation / Republication Rule",
        q: "Blogger saw a rumor on an anonymous online forum falsely stating that City Police Chief was taking bribes from local drug dealers. Blogger re-posted the exact rumor on his own website with the heading: 'Passing this along—is Chief corrupt?' Police Chief sued Blogger for defamation. Blogger argued he was merely repeating what someone else had written. Blogger is:",
        opts: [
            "Not liable, because repeating a third-party statement in the form of a question negates defamatory intent as a matter of law.",
            "Not liable under the common carrier distributor exemption applicable to personal digital weblogs.",
            "Liable only if Police Chief can prove Blogger was the original author who drafted the underlying forum rumor.",
            "Liable as a republisher, because one who repeats defamatory statements is subject to liability as if originally publishing it."
        ],
        ans: 3,
        exp: "Under the common law Republication Rule, one who repeats or republishes a defamatory matter is subject to liability as if he had originally published it, subject to constitutional actual malice standards for public officials."
    },
    {
        id: 15,
        topic: "Strict Liability / Domestic Animals with Known Vicious Propensities",
        q: "Owner kept a domestic Golden Retriever that had twice previously attacked and severely bitten delivery carriers without provocation, facts well known to Owner. One afternoon, while leashed on Owner's porch, the dog lunged and bit Mail Carrier on the leg. In Mail Carrier's civil tort suit against Owner:",
        opts: [
            "Owner is strictly liable, because the owner of a domestic animal known to possess vicious propensities is strictly liable.",
            "Owner is liable only if Mail Carrier demonstrates that Owner was actively negligent in securing the leash on the porch.",
            "Owner is not liable, because domestic dogs are classified as mansuetae naturae entitled to an absolute 'one-free-bite' privilege.",
            "Owner is strictly liable only if the municipal city council had formally designated the dog as a vicious canine breed."
        ],
        ans: 0,
        exp: "Under the common law 'Scienter' rule and California Civil Code § 3342, an owner of a domestic animal who knows or has reason to know of the animal's dangerous or vicious propensities abnormal to its class is held strictly liable for all harm resulting from that propensity."
    },
    {
        id: 16,
        topic: "Battery / Unintended Contact in Intentional Offensive Touching",
        q: "Defendant walked up to Colleague at work and intentionally pushed Colleague's shoulder with moderate force to express displeasure. Because of a rare inner ear equilibrium disorder unknown to Defendant, Colleague lost balance, fell backward against a metal file cabinet, and suffered a severe skull fracture. In Colleague's suit for Battery, Defendant is:",
        opts: [
            "Liable only for nominal damages, because a reasonable person would not have suffered physical bone fractures from a light push.",
            "Liable for the entire extent of the skull fracture damages under the intentional tort Eggshell Skull doctrine.",
            "Not liable for battery, because Defendant lacked the specific subjective intent to inflict severe physical bodily injury.",
            "Liable under ordinary negligence only, because the severity of the injury was completely unforeseeable."
        ],
        ans: 1,
        exp: "For intentional torts like Battery, the defendant is liable for all resulting physical consequences, even if unexpectedly severe or unforeseeable (the Eggshell Skull rule). The defendant intended an offensive contact, which makes him liable for all damages flowing from the completed battery."
    },
    {
        id: 17,
        topic: "Negligence / Landowner Duty to Protect Persons Outside the Premises",
        q: "Homeowner maintained a large, decaying oak tree in her front yard adjacent to a busy municipal street. The tree trunk was visibly rotted and leaning toward the roadway for two years. During a mild breeze, the tree collapsed onto the street, crushing Driver's car. Homeowner argued landowners owe no duty of care regarding trees on private property. Homeowner is:",
        opts: [
            "Not liable, because trees and vegetation are classified as natural conditions for which landowners owe zero legal duty.",
            "Not liable, unless the municipal street department had served Homeowner with a formal certified notice of tree abatement.",
            "Liable in negligence, because urban landowners owe a duty of reasonable care regarding trees to protect travelers on adjacent roads.",
            "Strictly liable under public nuisance for placing biological obstructions into navigable public vehicular thoroughfares."
        ],
        ans: 2,
        exp: "Under modern law and California precedents, in urban and suburban areas, a possessor of land owes a duty of reasonable care to prevent unreasonable risks of harm to travelers on adjacent public highways from decaying trees."
    },
    {
        id: 18,
        topic: "Economic Torts / Fraudulent Concealment Duty to Disclose",
        q: "Seller sold a commercial building to Buyer. Seller knew that the foundation had a massive subterranean structural sinkhole covered with fresh concrete that could not be discovered by an ordinary visual inspection. Seller said nothing and answered no questions about the foundation. Six months after closing, the building collapsed into the sinkhole. Buyer sued Seller for Fraud / Deceit. Result?",
        opts: [
            "Seller wins under the traditional doctrine of caveat emptor (buyer beware) applicable to arms-length transactions.",
            "Seller wins, because silence or non-disclosure can never constitute actionable fraud in the absence of spoken misrepresentation.",
            "Buyer wins under strict products liability for placing defective structural building materials into commercial trade.",
            "Buyer wins, because a seller has an affirmative duty to disclose concealed, latent material facts not discoverable by buyer."
        ],
        ans: 3,
        exp: "A party to a business transaction is liable for Fraudulent Concealment if they fail to disclose a latent material fact not readily observable or discoverable by the other party, where the seller knows the buyer is acting under a mistaken belief."
    },
    {
        id: 19,
        topic: "Defamation / Opinion vs. Fact (Ollman v. Evans Test)",
        q: "Movie Critic published a review in a newspaper stating: 'Director's new movie is the most incompetent, unwatchable piece of garbage ever filmed; Director has zero artistic talent.' Director sued Critic for defamation, claiming the review destroyed his professional reputation. Director's defamation suit will:",
        opts: [
            "Fail, because subjective artistic aesthetic critiques are protected statements of opinion that cannot be proven true or false.",
            "Succeed, because statements that damage an individual's professional trade or artistic profession constitute slander per se.",
            "Succeed, provided Director proves that Critic harbored personal hatred and ill will toward Director.",
            "Fail only if Critic can prove by clear and convincing evidence that a majority of moviegoers agreed with the review."
        ],
        ans: 0,
        exp: "Under the First Amendment and Ollman v. Evans, statements of pure opinion or rhetorical hyperbole that cannot be objectively proven true or false are not actionable as defamation. Statements regarding the aesthetic artistic quality of a film are protected subjective opinions."
    },
    {
        id: 20,
        topic: "Negligence / Seatbelt Defense and Mitigation of Damages in California",
        q: "Driver was negligently rear-ended at an intersection by Trucker. Driver suffered $100,000 in injuries. Driver was not wearing an available, functional safety seatbelt in violation of state mandatory seatbelt laws. Expert biomechanical testimony proved that wearing the seatbelt would have prevented $40,000 of the injuries. In California (Housley v. Godinez):",
        opts: [
            "Driver is completely barred from all recovery under the statutory doctrine of comparative negligence per se.",
            "The failure to wear a seatbelt is categorically inadmissible to affect liability or damage recoveries in vehicle accidents.",
            "Driver's failure to wear a seatbelt reduces damage recovery by the $40,000 in injuries that the seatbelt would have prevented.",
            "Driver's total damage recovery is reduced by exactly fifty percent as a statutory penalty for violating safety laws."
        ],
        ans: 2,
        exp: "In California (Truman v. Vargas / Housley v. Godinez), failure to wear a seatbelt does not bar the plaintiff's cause of action, but is admissible as comparative fault / failure to mitigate damages to reduce recovery by the amount of injury the seatbelt would have prevented."
    },
    {
        id: 21,
        topic: "Strict Products Liability / Destruction of Evidence & Spoliation",
        q: "Worker was injured when an industrial pressure valve manufactured by Machine Corp. exploded. Before Worker could file suit, Worker's employer accidentally threw the shattered valve fragments into an industrial smelter, completely destroying the product. In Worker's strict products liability design defect suit against Machine Corp., Worker:",
        opts: [
            "Is automatically barred from all tort recovery as a matter of law because physical production of the failed unit is mandatory.",
            "Can still establish a design defect claim through circumstantial evidence and blueprints showing all identical valves were defective.",
            "Can maintain a separate, independent intentional tort cause of action against Machine Corp. for third-party spoliation.",
            "Is restricted to an action for breach of the implied warranty of fitness under the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "In a design defect case, destruction of the specific product unit that failed does NOT automatically defeat the plaintiff's lawsuit, because design defects affect the entire product line and can be proven through exemplar units, blueprints, and engineering specifications."
    },
    {
        id: 22,
        topic: "False Imprisonment / Consciousness of Confinement Exception",
        q: "Babysitter locked 2-year-old Infant inside a comfortable nursery room for 6 hours while Babysitter went shopping. Infant slept soundly for the entire 6 hours, suffered zero physical discomfort or bodily injury, and had no awareness of being locked inside. Infant's Guardian sued Babysitter for False Imprisonment. Result?",
        opts: [
            "Babysitter is liable for False Imprisonment, because non-consensual physical confinement of any human being is tortious per se.",
            "Babysitter is liable for nominal damages of $10,000 under the statutory child safety false imprisonment doctrine.",
            "Babysitter is not liable for False Imprisonment, because the tort requires consciousness of confinement or actual physical harm.",
            "Babysitter is not liable only if Babysitter returned before the parents arrived home."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 35, False Imprisonment requires that the plaintiff either be conscious of the confinement at the time it occurs OR be physically harmed by the confinement. Since the infant was unaware and unharmed, the claim fails."
    },
    {
        id: 23,
        topic: "Negligence / Collateral Source Rule in California Tort Law",
        q: "Pedestrian was struck by Negligent Driver, incurring $50,000 in necessary emergency medical hospital expenses. Pedestrian's private health insurance company paid the entire $50,000 bill directly to Hospital. At trial against Driver, Driver moved to introduce evidence of the insurance payment to reduce the damage verdict to $0. Under California's Collateral Source Rule:",
        opts: [
            "The motion is granted, because modern tort reform prohibits double recovery for medical expenses paid by health insurance.",
            "The motion is granted only if Driver was insured under a municipal or governmental liability insurance policy.",
            "The motion is denied, but the trial judge must automatically deduct the insurance payment from the final jury verdict post-trial.",
            "The motion is denied, because compensation received from an independent collateral source cannot reduce tortfeasor liability."
        ],
        ans: 3,
        exp: "Under the Collateral Source Rule (Helfend v. Southern California Rapid Transit District), payments made to or on behalf of an injured plaintiff by an independent source (like private health insurance) are not credited against the tortfeasor's liability and cannot be introduced into evidence."
    },
    {
        id: 24,
        topic: "Joint Tortfeasors / Contribution Prohibition for Intentional Tortfeasors",
        q: "Burglar A and Burglar B intentionally conspired to break into Merchant's warehouse and smash displays, causing $100,000 in property damage. Merchant sued Burglar A and collected the full $100,000 judgment from Burglar A. Burglar A then filed a contribution action against Burglar B to recover $50,000. Under common law and California Code of Civil Procedure § 875(d):",
        opts: [
            "Burglar A recovers nothing, because intentional wrongdoers are legally barred from seeking equitable contribution from co-tortfeasors.",
            "Burglar A recovers $50,000, because joint tortfeasors are entitled to equal pro-rata contribution regardless of the nature of the tort.",
            "Burglar A recovers $100,000 under complete equitable indemnification from the co-conspirator.",
            "Burglar A recovers $50,000 only if Burglar B had been criminally convicted of the underlying burglary."
        ],
        ans: 0,
        exp: "Under California Code of Civil Procedure § 875(d) and established common law, there is NO right of contribution in favor of any tortfeasor who has intentionally caused the injury. Intentional tortfeasors cannot use the courts to balance liabilities among co-wrongdoers."
    },
    {
        id: 25,
        topic: "Strict Products Liability / Failure to Warn of Unavoidably Unsafe Products (Comment k)",
        q: "Vaccine Corp. developed a vital childhood rabies vaccine. The vaccine was properly prepared and accompanied by comprehensive warnings of unavoidable, rare neurological side effects (occurring in 1 in 100,000 patients). Child received the vaccine and suffered the rare neurological complication. In Child's strict products liability suit under Restatement (Second) of Torts § 402A Comment k:",
        opts: [
            "Vaccine Corp. is strictly liable under the consumer expectation test, because ordinary consumers do not expect neurological injury.",
            "Vaccine Corp. is not strictly liable, because useful drugs with unavoidable risks are not defective if properly prepared and warned.",
            "Vaccine Corp. is strictly liable under absolute enterprise liability for all pediatric pharmaceutical injuries.",
            "Vaccine Corp. is not liable only if Child's parents signed a formal statutory pre-treatment arbitration waiver."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 402A Comment k, products such as prescription drugs and vaccines which, in the present state of human knowledge, are incapable of being made completely safe for their intended use, are NOT defective or unreasonably dangerous provided they are properly prepared and accompanied by adequate warnings."
    }
];