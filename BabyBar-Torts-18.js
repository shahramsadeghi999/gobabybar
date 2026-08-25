const examData = [
    {
        id: 1,
        topic: "Defamation / California Anti-SLAPP Special Motion to Strike (Cal. CCP § 425.16)",
        fp: "During an open, televised City Council public zoning hearing, Environmentalist stated that Developer's planned luxury housing subdivision would unlawfully leach carcinogenic benzene into the municipal drinking aquifer. Developer immediately filed a $15,000,000 Defamation action against Environmentalist. Environmentalist filed a Special Motion to Strike under California Code of Civil Procedure § 425.16 (Anti-SLAPP statute).",
        q: "In adjudicating Environmentalist's Anti-SLAPP motion, the trial court should:",
        opts: [
            "Deny the motion automatically, because constitutional free speech defenses must be submitted directly to a jury.",
            "Grant the motion and dismiss the action, unless Developer establishes a probability of prevailing on the merits with admissible evidence.",
            "Deny the motion, because public environmental health disputes are not matters of public interest under California procedural law.",
            "Grant the motion only if Environmentalist proves by clear and convincing evidence that benzene was physically present in the soil."
        ],
        ans: 1,
        exp: "Under California Code of Civil Procedure § 425.16 (Anti-SLAPP), a two-step framework applies: (1) defendant must show the challenged lawsuit arises from protected speech in connection with a public issue or official proceeding; once shown, (2) the burden shifts to plaintiff to demonstrate a 'probability of prevailing' on the claim with legally sufficient evidence. Failing that, the court strikes the complaint."
    },
    {
        id: 2,
        topic: "Strict Products Liability / Component Parts Doctrine & Substantial Integration",
        fp: "Valve Co. manufactured standard, non-defective commercial pressure-relief valves according to general engineering specifications. Crane Corp. designed an experimental mobile hydraulic crane. Crane Corp. specifically hired Valve Co. engineers to actively assist in designing the integrated hydraulic system. Valve Co. engineers helped integrate the valves into a configuration they knew omitted necessary secondary emergency shut-off bypasses. A valve ruptured under high pressure, severely injuring Operator.",
        q: "If Operator asserts a strict products liability design defect claim against Valve Co.:",
        opts: [
            "Valve Co. is completely shielded by the Component Parts Doctrine, because the valve itself was non-defective when sold.",
            "Valve Co. is not liable, because industrial equipment operators assume all inherent mechanical hydraulic risks.",
            "Valve Co. is strictly liable, because a component maker who substantially participates in integrating its part into a defective design is liable.",
            "Valve Co. is liable only under the express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 2,
        exp: "Under the Component Parts Doctrine (Restatement (Third) of Torts: Products Liability § 5 / Jimenez v. Superior Court), while a maker of a non-defective component is generally not liable for finished product defects, an exception applies where the component maker SUBSTANTIALLY PARTICIPATES in integrating the component into the design of the finished product and that integration causes the product to be defective."
    },
    {
        id: 3,
        topic: "Vicarious Liability / Respondeat Superior 'Required Vehicle' Exception",
        fp: "Employer required Field Inspector to bring her personal vehicle to the office daily so it would be available for unannounced, on-call site inspections throughout the workweek, though Employer paid no commute stipend. While driving directly from her home to the office on a Tuesday morning during her ordinary morning commute, Inspector negligently struck Pedestrian. Pedestrian sued Employer under respondeat superior.",
        q: "In Pedestrian's action against Employer under California law (Hinman v. Westinghouse / Huntsinger):",
        opts: [
            "Employer is vicariously liable under the 'Required Vehicle' exception to the Going-and-Coming rule.",
            "Employer is not liable, because the Going-and-Coming rule categorically excludes all morning residential commutes.",
            "Employer is not liable, because Inspector was operating her private vehicle without active mileage reimbursement.",
            "Employer is strictly liable under commercial motor vehicle enterprise ownership allocation statutes."
        ],
        ans: 0,
        exp: "Under California respondeat superior law (Hinman v. Westinghouse / Huntsinger v. Glass Containers Corp.), the 'Required Vehicle' exception provides that when an employer requires an employee to make a personal vehicle available for work during the day, the commute to and from work is deemed within the scope of employment, holding the employer vicariously liable for commuting accidents."
    },
    {
        id: 4,
        topic: "Negligence / Sudden Emergency Doctrine Inapplicability to Prior Neglect",
        fp: "Driver was speeding at 65 mph in a 35 mph commercial zone while actively typing a text message on his mobile phone. Suddenly, Child darted out from between parked cars 20 feet ahead. In an emergency effort to avoid Child, Driver swerved onto the sidewalk and struck Pedestrian. Driver argued the Sudden Emergency Doctrine shielded him from negligence liability.",
        q: "Driver's reliance on the Sudden Emergency Doctrine will:",
        opts: [
            "Succeed, because an actor confronted with imminent peril to human life is not judged by calm deliberate standards.",
            "Succeed, provided Driver honestly selected the course of action resulting in the least catastrophic physical harm.",
            "Fail, because the Sudden Emergency Doctrine applies exclusively to sworn professional first responders like paramedics.",
            "Fail, because the Sudden Emergency Doctrine does not protect an actor whose own prior negligent conduct created the emergency."
        ],
        ans: 3,
        exp: "Under the Sudden Emergency Doctrine (Restatement (Third) of Torts § 15 / Leo v. Dunham), an actor confronted with sudden emergency peril not of their own making is judged by how a reasonable person would act under emergency circumstances. However, the doctrine is INAPPLICABLE if the emergency was created in whole or in part by the actor's own prior negligent conduct (speeding and texting)."
    },
    {
        id: 5,
        topic: "Nuisance / Permanent vs. Continuing Nuisance & Statute of Limitations",
        fp: "Chemical Plant completed construction of a massive, permanent underground concrete holding tank in 2018. That same year, the tank began leaking toxic solvents that permanently saturated Neighbor's subterranean soil, reducing the property value by $400,000. The leak was completely unrepairable and permanent without demolishing the entire plant. Under the applicable state statute of limitations, property tort actions must be brought within 3 years. Neighbor filed a private nuisance suit in 2026. Chemical Plant asserted the statute of limitations.",
        q: "In evaluating Chemical Plant's statute of limitations defense under California nuisance law (Mangini v. Aerojet-General):",
        opts: [
            "The claim is timely, because all environmental chemical contaminations are classified as continuing nuisances as a matter of law.",
            "Neighbor is entitled to an automatic permanent injunction under the public trust doctrine regardless of limitations periods.",
            "The claim is barred by the statute of limitations, because a permanent, non-abatable nuisance triggers the limitations clock at the time of construction/initial damage.",
            "The claim is timely, provided Neighbor did not sell or transfer title to the real property between 2018 and 2026."
        ],
        ans: 2,
        exp: "Under California law (Mangini v. Aerojet-General Corp. / Spaulding v. Cameron), if a nuisance is 'permanent' (cannot be practically or economically abated, with damages occurring once and for all), the plaintiff must bring the action within the statutory limitations period from the time the permanent nuisance was created and caused harm. Only 'continuing' (abatable) nuisances allow recovery for successive damages within the limitation period preceding suit."
    },
    {
        id: 6,
        topic: "Battery / High-Contact Sports & Intentional Rule Violations (Avila v. Citrus)",
        fp: "During a competitive collegiate baseball game, Pitcher became enraged after Batter hit a home run. When the next batter, Plaintiff, stepped into the batter's box, Pitcher deliberately threw a 95 mph fastball directly at Plaintiff's head ('headhunting'), intentionally violating baseball rules and fracturing Plaintiff's cheekbone. In Plaintiff's civil action for Battery against Pitcher under California law (Avila v. Citrus Community College):",
        opts: [
            "Plaintiff will prevail, because intentionally throwing at a batter's head to inflict physical injury is not an inherent risk of the sport.",
            "Pitcher will prevail under Primary Assumption of the Risk, because being struck by thrown balls is an inherent risk of baseball.",
            "Pitcher will prevail, because athletic participants consent to all intentional and reckless physical impacts occurring on playing fields.",
            "Plaintiff is restricted exclusively to athletic conference administrative arbitration under collegiate sports governance rules."
        ],
        ans: 0,
        exp: "Under California law (Avila v. Citrus Community College District / Knight v. Jewett), while participants assume the inherent risks of a sport (including being hit by wild pitches), Primary Assumption of the Risk does NOT shield a player who intentionally injures another player or engages in reckless conduct that is totally outside the range of the ordinary activity involved in the sport (such as intentional headhunting)."
    },
    {
        id: 7,
        topic: "False Imprisonment / Law Enforcement Arrest Under Facially Invalid Warrant",
        fp: "Magistrate mistakenly signed an arrest warrant that failed to name or describe any person and omitted the statutory judicial court seal (rendering it facially void and invalid as a matter of law). Police Officer, noticing that the warrant had no name or seal, nevertheless arrested Citizen on the street and locked Citizen in jail for 24 hours. Citizen was completely innocent. Citizen sued Officer for False Imprisonment.",
        q: "In Citizen's False Imprisonment action against Police Officer:",
        opts: [
            "Officer is privileged, because sworn police officers enjoy absolute qualified immunity for executing judicial arrest warrants.",
            "Officer is liable for False Imprisonment, because the privilege to arrest under a warrant applies only to warrants regular and valid on their face.",
            "Citizen must prove Officer acted with constitutional actual malice and personal ill will to overcome warrant privileges.",
            "Officer is privileged, provided Officer held an honest, subjective, good-faith belief that Citizen had committed a misdemeanor."
        ],
        ans: 1,
        exp: "A police officer who arrests an individual pursuant to a warrant is privileged against False Imprisonment ONLY if the warrant is 'fair and valid on its face' (issued by a court of competent jurisdiction with no facial, obvious structural invalidity). Executing an arrest under a warrant that is obviously void and invalid on its face forfeits the privilege."
    },
    {
        id: 8,
        topic: "Trespass to Land / Independent Contractor Blasting Fly-Rock Strict Liability",
        fp: "Landowner hired Independent Contractor Blasting to excavate a swimming pool on Landowner's residential lot. Blasting used commercial dynamite with utmost care. A detonation propelled a 50-pound boulder through the roof of Neighbor's house 300 feet away. Landowner argued Blasting was an independent contractor and Landowner exercised zero operational control over detonations. Neighbor sued Landowner for Trespass to Land.",
        q: "In Neighbor's action against Landowner:",
        opts: [
            "Landowner is immune from liability, because employers are never liable for the physical trespasses of independent contractors.",
            "Neighbor's claim is completely barred under the doctrine of secondary implied assumption of risk for living near construction sites.",
            "Neighbor is restricted exclusively to an action for private nuisance, capping recovery at property rental depreciation.",
            "Landowner is vicariously liable in trespass, because hiring a contractor to perform an inherently dangerous activity carries non-delegable liability."
        ],
        ans: 3,
        exp: "Under established tort principles (Restatement (Second) of Torts § 427A), one who employs an independent contractor to do work which the employer knows or has reason to know will involve an inherently dangerous activity (like commercial blasting) is subject to liability for physical trespass caused by the contractor's projection of debris onto another's land."
    },
    {
        id: 9,
        topic: "IIED / Non-Family Bystander with Physical Bodily Harm (Restatement § 46(2)(b))",
        fp: "Defendant carried out a premeditated, brutal physical assault with a lead pipe against Coworker inside an office breakroom to intimidate staff. Bystander (an unrelated coworker who had no family relationship to Coworker) was present in the room and witnessed the horrific beating. Bystander suffered severe emotional shock resulting in an acute cardiac arrest and bodily injury. In Bystander's action against Defendant for IIED under Restatement (Second) of Torts § 46(2)(b):",
        opts: [
            "Bystander cannot recover, because recovery for third-party IIED strictly requires an immediate close familial blood relationship.",
            "Defendant is protected by the exclusive remedy provisions of the California Workers' Compensation Act for workplace altercations.",
            "Bystander can recover, because an unrelated bystander present at the scene may recover for IIED if the distress results in bodily harm.",
            "Bystander is restricted to an action for intentional battery under the transferred intent doctrine."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 46(2)(b), where outrageous conduct is directed at a third person, the actor is liable for IIED to an UNRELATED third person who is present at the time IF that distress results in actual physical bodily harm (such as a heart attack or miscarriage)."
    },
    {
        id: 10,
        topic: "Conversion / Stolen Cashier's Checks & Forged Indorsements",
        fp: "Thief stole an authentic, signed $50,000 cashier's check payable to Corporation from Corporation's mail drop. Thief forged Corporation's corporate indorsement on the back, presented the check to Depositary Bank, and Bank credited the funds to Thief's personal account and released the cash. Corporation sued Depositary Bank for Conversion. Bank argued bank checks are intangible instruments governed exclusively by contract.",
        q: "In Corporation's tort action against Depositary Bank under UCC § 3-420 and California conversion law:",
        opts: [
            "Bank is not liable for conversion, because commercial bank checks represent intangible contractual debts, not personal chattels.",
            "Corporation will prevail, because taking or paying an instrument bearing a forged indorsement constitutes actionable conversion.",
            "Corporation is restricted exclusively to an equitable action for unjust enrichment against the thief.",
            "Bank is protected by the commercial bona fide purchaser for value defense governing negotiable instruments."
        ],
        ans: 1,
        exp: "Under Uniform Commercial Code § 3-420 and established California conversion law, the law of conversion applies to instruments. An instrument is converted when it is paid or taken for collection on a forged indorsement, making the depositary bank liable in conversion to the true payee for the face amount."
    },
    {
        id: 11,
        topic: "Negligence / Rescue Doctrine & Imperiled Original Negligent Actor",
        fp: "Driver was speeding at 90 mph while intoxicated, lost control on a curve, and crashed into a frozen river. Driver was trapped inside the rapidly sinking car, screaming for help. Rescuer jumped into the freezing river, shattered the car window, pulled Driver to safety, and suffered severe frostbite resulting in the amputation of two toes. Rescuer sued Driver for negligence. Driver argued he owed no duty to protect others from rescuing him.",
        q: "Under the Rescue Doctrine ('danger invites rescue'), Rescuer will:",
        opts: [
            "Prevail, because an actor whose negligence imperils themselves owes a duty of reasonable care to foreseeable rescuers.",
            "Lose, because Rescuer voluntarily assumed the risk of extreme cold-water injuries by choosing to jump into the river.",
            "Lose, because the Rescue Doctrine applies exclusively where a defendant's negligence imperils an innocent third party.",
            "Prevail only if Rescuer held active professional credentials as a certified municipal lifeguard or EMT."
        ],
        ans: 0,
        exp: "Under Wagner v. International Railway Co. and modern tort law, 'danger invites rescue.' A tortfeasor who negligently creates a situation of peril—even if the peril is exclusively to the tortfeasor themselves—is liable in negligence to a foreseeable rescuer who is injured while attempting a non-reckless rescue."
    },
    {
        id: 12,
        topic: "Strict Products Liability / Post-Sale Failure to Recall vs. Duty to Warn",
        fp: "Auto Corp. manufactured a commercial delivery van in 2021 that complied with all safety standards. In 2024, telemetry data revealed that van brake lines degraded and ruptured after 50,000 miles. Auto Corp. had registered customer lists, but issued zero warnings to owners and initiated no safety recall. In 2026, Owner's van reached 52,000 miles, the brakes failed, and Owner was injured in a collision. In Owner's strict products liability lawsuit against Auto Corp.:",
        opts: [
            "Auto Corp. is not liable, because a product's safety is judged strictly and exclusively at the time it leaves the factory.",
            "Auto Corp. is immune from liability unless the National Highway Traffic Safety Administration (NHTSA) ordered a mandatory recall.",
            "Owner's claim is completely barred under the economic loss rule for vehicle mechanical degradation.",
            "Auto Corp. is liable, because commercial manufacturers owe a continuing post-sale duty of reasonable care to warn of newly discovered hazards."
        ],
        ans: 3,
        exp: "Under Restatement (Third) of Torts: Products Liability § 10 and California law, a commercial seller/manufacturer owes an affirmative post-sale duty to warn purchasers of substantial product hazards discovered post-sale when users can be identified and warned and the risk justifies the burden."
    },
    {
        id: 13,
        topic: "Landowner Duty / Commercial Ingress/Egress Hazards on Adjacent Approaches",
        fp: "Tavern operated a commercial drinking establishment situated on a high-speed rural highway. Tavern provided customer parking exclusively in a dirt lot located across the 55-mph unlit four-lane highway, with no crosswalk, lighting, or warning signs, and directed all patrons to park across the road. Customer was struck by a speeding vehicle while crossing the highway to enter the tavern. Customer sued Tavern for negligence.",
        q: "In Customer's negligence action against Tavern under California law (Annocki v. Peterson Enterprises):",
        opts: [
            "Tavern is immune from liability, because a commercial landowner's premises liability terminates at the legal property boundary line.",
            "Tavern is liable, because commercial proprietors owe a duty to provide safe ingress and egress for invitees crossing known adjacent approaches.",
            "Tavern is not liable, because traffic safety on public highways is the exclusive non-delegable duty of state highway authorities.",
            "Customer's claim is completely barred under primary assumption of risk for jaywalking across a public highway."
        ],
        ans: 1,
        exp: "Under California law (Annocki v. Peterson Enterprises / Schwartz v. Helms Bakery), a commercial landowner's duty of reasonable care to invitees encompasses providing safe ingress and egress, and extends to taking reasonable precautions regarding known, foreseeable traffic hazards on immediate approaches and crossings directly created or utilized by the business."
    },
    {
        id: 14,
        topic: "NIED / Direct Victim Pre-Existing Duty - Mortuary Handling of Remains",
        fp: "Mortuary entered into a contract with Surviving Spouse to provide a dignified cremation and return the cremated ashes in an urn. Mortuary employees negligently lost Decedent's body, cremated an unknown stranger, and delivered the wrong ashes to Spouse. One year later, Mortuary discovered the error and informed Spouse, who suffered severe psychiatric shock and clinical depression. In Spouse's NIED action against Mortuary under California law (Christensen):",
        opts: [
            "Spouse cannot recover, because Spouse was not present at the crematory to witness the mishandling contemporaneously.",
            "Spouse is restricted exclusively to breach of contract damages, capping recovery at the funeral service contract price.",
            "Spouse can recover for NIED as a Direct Victim, because mortuaries owe a direct professional duty of care to surviving close family members.",
            "Spouse cannot recover without proving physical impact or bodily anatomical injury resulting directly from the ashes."
        ],
        ans: 2,
        exp: "Under California law (Christensen v. Superior Court, 54 Cal.3d 868), mortuaries, crematories, and funeral homes owe an independent, direct duty of care to the close surviving family members for whose benefit services are rendered. Negligent mishandling or loss of human remains permits Direct Victim NIED recovery without requiring contemporaneous observation or physical impact."
    },
    {
        id: 15,
        topic: "Joint Tortfeasors / Equitable Indemnity in Strict Products Liability Chain",
        fp: "Consumer was injured by a defectively designed power drill manufactured by ToolCo and sold by Retailer. Retailer played zero role in the design or manufacture of the drill and committed no active negligence. Consumer sued ToolCo and Retailer under strict products liability, obtaining a joint $500,000 judgment. Consumer collected the full $500,000 from Retailer. Retailer filed a cross-complaint against ToolCo for Total Equitable Indemnity.",
        q: "In Retailer's cross-complaint against ToolCo under California law:",
        opts: [
            "Retailer is entitled to 100% Total Equitable Indemnity from ToolCo, shifting the entire financial loss to the upstream manufacturer.",
            "Retailer is entitled only to a 50% pro-rata contribution share under California Code of Civil Procedure § 875.",
            "Retailer recovers nothing, because commercial entities in the chain of distribution bear non-delegable enterprise liabilities.",
            "Retailer is barred from indemnity unless Retailer obtained a written commercial indemnity contract prior to retail distribution."
        ],
        ans: 0,
        exp: "In strict products liability (American Motorcycle Ass'n v. Superior Court / Safeway Stores v. Nest-Kart), an innocent retailer who is held strictly liable solely as a marketing conduit without active fault is entitled to TOTAL EQUITABLE INDEMNITY against the upstream manufacturer who created the defective design."
    },
    {
        id: 16,
        topic: "Strict Liability / Abnormally Dangerous Activities & Idiosyncratic Sensitivity",
        fp: "Blasting Corp. conducted commercial quarry dynamiting with utmost care. Ground vibrations from the blasting operations, which caused zero structural damage to nearby residential homes, caused Mother Chinchilla on a specialized commercial fur breeding farm two miles away to become terrified and kill her newborn offspring. Chinchilla Farmer sued Blasting Corp. under strict liability. Under Foster v. Preston Mill Co.:",
        opts: [
            "Blasting Corp. is strictly liable, because commercial dynamiting carries absolute liability for all agricultural livestock losses.",
            "Blasting Corp. is liable under private nuisance, because ground vibrations interfere with agricultural livestock breeding.",
            "Blasting Corp. is strictly liable only if Farmer provided prior written notice of the location of the commercial breeding pens.",
            "Blasting Corp. is not strictly liable, because the harm resulted from the extraordinary idiosyncratic sensitivity of chinchillas rather than the normal blast risk."
        ],
        ans: 3,
        exp: "Under Foster v. Preston Mill Co. and Restatement (Second) of Torts § 519(2), strict liability for an abnormally dangerous activity is limited to the kind of harm the possibility of which makes the activity abnormally dangerous. It does NOT extend to harms caused by the extraordinary, idiosyncratic hypersensitivity of the plaintiff's livestock."
    },
    {
        id: 17,
        topic: "Privacy / Right of Publicity & Transformative Use Defense (Comedy III)",
        fp: "Video Game Publisher developed an expressive action-adventure video game. The game featured an animated avatar that depicted Famous Athlete's exact visual appearance, tattoos, and signature athletic moves in a realistic, literal recreation of professional sports games without obtaining Athlete's consent. Athlete sued Publisher for Commercial Misappropriation under California Civil Code § 3344. Publisher asserted the First Amendment Transformative Use defense.",
        q: "In evaluating Publisher's Transformative Use defense under California law (Comedy III / Keller v. EA):",
        opts: [
            "Publisher wins, because all creative software video games are protected by absolute First Amendment commercial fair use.",
            "Athlete loses, because statutory right of publicity claims apply exclusively to physical print garments and billboards.",
            "Athlete will prevail, because a literal realistic recreation of an athlete in the exact profession for which they are known is not transformative.",
            "Publisher wins only if Publisher donated at least fifty percent of retail game proceeds to a designated athletic foundation."
        ],
        ans: 2,
        exp: "Under California law (Comedy III Productions v. Gary Saderup / Keller v. Electronic Arts), the Transformative Use defense does NOT protect a commercial video game publisher where the celebrity's likeness is literally recreated in the very setting and profession from which the celebrity gained fame without adding significant creative transformative elements."
    },
    {
        id: 18,
        topic: "Economic Torts / Slander of Title & Absolute Litigation Privilege for Lis Pendens",
        fp: "Buyer entered into a valid contract to purchase Blackacre from Seller. Seller wrongfully refused to close. Buyer filed a specific performance lawsuit against Seller and recorded a formal Notice of Lis Pendens in the county land records. As a direct result, Seller's attempt to sell Blackacre to another party was blocked. Seller sued Buyer for Slander of Title. Buyer raised the Litigation Privilege (Cal. Civ. Code § 47(b)).",
        q: "In Seller's Slander of Title action against Buyer:",
        opts: [
            "Buyer's defense fails, because recording encumbrances against real property title is subject to strict civil liability.",
            "Buyer is protected by the Absolute Litigation Privilege, because recording a lis pendens in connection with a lawsuit is an integral judicial publication.",
            "Buyer's defense fails, because the litigation privilege protects oral courtroom testimony but excludes recorded public county filings.",
            "Buyer is privileged only if Buyer posted a cash surety bond with the county recorder prior to recordation."
        ],
        ans: 1,
        exp: "Under California Civil Code § 47(b) and established case law (Albertson v. Raboff), the recordation of a Notice of Lis Pendens is an integral publication authorized by law in the course of a judicial proceeding and is protected by the ABSOLUTE Litigation Privilege, completely barring an action for Slander of Title."
    },
    {
        id: 19,
        topic: "Negligence / Traditional Causation Threshold in Diagnostic Medical Malpractice",
        fp: "Patient presented to Oncologist with a breast nodule. Oncologist negligently failed to order a biopsy, misdiagnosing the nodule as benign. Due to the 1-year delay, the cancer metastasized. Undisputed expert testimony proved that with a timely biopsy, Patient had a 45% chance of long-term survival, which fell to 10% due to the delay (a 35% lost chance). Patient sued Oncologist for wrongful death.",
        q: "In a traditional common-law causation jurisdiction (and California under Dumas v. Cooney):",
        opts: [
            "Patient cannot recover, because Patient cannot prove by a preponderance of the evidence that 'but for' the delay Patient more likely than not (>50%) would have survived.",
            "Patient recovers 35% of total wrongful death damages under proportional loss of chance allocation rules.",
            "Patient recovers 100% full damages, because diagnostic medical delays create a conclusive presumption of causation.",
            "Patient's claim is governed by pure comparative fault allocation between underlying tumor biology and physician neglect."
        ],
        ans: 0,
        exp: "Under traditional common law proximate causation and California law (Dumas v. Cooney), the plaintiff must establish causation by a preponderance of the evidence (>50% probability that but for the negligence the harm would not have occurred). Because Patient's initial survival probability was under 50% (45%), traditional but-for causation cannot be proven."
    },
    {
        id: 20,
        topic: "Medical Malpractice / Informed Consent & Objective Reasonable Patient Standard",
        fp: "Surgeon performed an elective spinal fusion procedure on Patient without disclosing that the surgery carried an inherent, unavoidable 4% risk of permanent vocal cord paralysis. The vocal cord was paralyzed during non-negligent surgery. At trial, Patient testified that she subjectively would have declined surgery had she known. However, undisputed medical evidence proved that an objective, reasonable person in Patient's position would have proceeded with the surgery regardless. Under California law (Cobbs v. Grant):",
        opts: [
            "Patient will prevail for Battery, because failing to disclose a material risk vitiates all surgical consent.",
            "Patient will prevail in negligence, because a physician must disclose all known risks exceeding a one percent threshold.",
            "Surgeon is strictly liable under the statutory warranty of medical therapeutic efficacy running to surgical patients.",
            "Patient will lose, because lack of informed consent requires proving that an objective reasonable person in patient's position would have declined."
        ],
        ans: 3,
        exp: "Under California law (Cobbs v. Grant, 8 Cal.3d 229), a medical malpractice claim for lack of informed consent requires proving causation under an OBJECTIVE standard: the plaintiff must prove that an ordinarily prudent person in the patient's position would have declined the treatment had the material risk been disclosed."
    },
    {
        id: 21,
        topic: "Res Ipsa Loquitur / Chain Reaction Collisions & Multi-Vehicle Pileups",
        fp: "In dense, sudden highway fog, a 12-car chain-reaction pileup occurred involving Drivers 1 through 12. Passenger in Car 6 was injured when Car 6 was struck from the front and rear simultaneously. Passenger could not determine which driver struck whom first or who committed what driving error. Passenger sued all 12 drivers under Res Ipsa Loquitur.",
        q: "In Passenger's negligence suit against all 12 drivers, the application of res ipsa loquitur will:",
        opts: [
            "Succeed under Ybarra v. Spangard, shifting the burden of proof to all 12 drivers to exculpate themselves.",
            "Fail, because res ipsa loquitur cannot be invoked where multiple independent actors each controlled separate instrumentalities that could have caused the accident.",
            "Succeed, because multi-vehicle chain reaction pileups do not ordinarily occur absent driver negligence.",
            "Fail only if the highway patrol accident reconstruction report concludes that the fog was an extraordinary Act of God."
        ],
        ans: 1,
        exp: "Res Ipsa Loquitur requires that the instrumentality causing injury be within the EXCLUSIVE control of the defendant. In a multi-vehicle pileup involving multiple independent drivers, the plaintiff cannot establish exclusive control in any single defendant (or a cohesive medical team as in Ybarra), barring the application of res ipsa loquitur."
    },
    {
        id: 22,
        topic: "Strict Products Liability / The Economic Loss Rule (Seely v. White Motor Co.)",
        fp: "Trucker purchased a commercial semi-truck from Manufacturer. Because of a defectively manufactured engine block casting, the engine block cracked while parked overnight at a truck stop. The engine was completely ruined ($25,000 to replace), but the truck never crashed, caused zero physical bodily injury to any person, and damaged no other separate property. Trucker sued Manufacturer in Strict Products Liability.",
        q: "Under California law (Seely v. White Motor Co.):",
        opts: [
            "Trucker cannot recover in strict products liability, because the Economic Loss Rule restricts purely economic damage to the product itself to contract/warranty law.",
            "Trucker recovers full replacement damages in strict products liability, because selling a product with a defective engine is actionable in tort per se.",
            "Trucker recovers under strict products liability only if Manufacturer was in direct vertical privity of contract with the end user.",
            "Trucker is entitled to treble punitive damages under the statutory provisions of the California Commercial Uniform Sales Code."
        ],
        ans: 0,
        exp: "Under Seely v. White Motor Co. (63 Cal.2d 9), the Economic Loss Rule provides that strict products liability in tort does NOT apply where a defective product causes purely economic loss (damage to the product itself) without causing personal physical injury or damage to other separate property."
    },
    {
        id: 23,
        topic: "Defamation / Qualified Common Interest Privilege Forfeiture via Recklessness",
        fp: "Company Director received an anonymous, unverified rumor claiming Chief Financial Officer had embezzled funds. Without checking accounting records, conducting an audit, or interviewing the CFO, Director published a memorandum to the Board of Directors stating as a fact that the CFO had stolen $100,000. In truth, no funds were missing. CFO sued Director for Defamation. Director asserted the Qualified Common-Interest Privilege.",
        q: "In CFO's defamation action against Director:",
        opts: [
            "Director is protected by an absolute managerial privilege that cannot be overcome by recklessness.",
            "CFO is restricted to nominal damages of $1.00 unless CFO proves out-of-pocket medical psychiatric expenses.",
            "Director's qualified privilege is forfeited, because publishing an unverified rumor with reckless disregard for truth constitutes malice.",
            "Director is immune under First Amendment commercial speech doctrines governing corporate boardrooms."
        ],
        ans: 2,
        exp: "While communications between corporate directors regarding company finances enjoy a Qualified Common-Interest Privilege, the privilege is FORFEITED if the plaintiff proves the speaker acted with actual malice (publishing with knowledge of falsity or reckless disregard for whether the statement was false)."
    },
    {
        id: 24,
        topic: "Joint Tortfeasors / Proposition 51 (Civil Code § 1431.2) - Intentional vs. Negligent Co-Defendants",
        fp: "Pedestrian was injured in an altercation caused by Assailant (who intentionally struck Pedestrian, 80% at fault) and Security Guard (who was negligent in monitoring the venue, 20% at fault). Pedestrian suffered $100,000 in economic damages and $500,000 in non-economic damages. Assailant is completely bankrupt and insolvent. In Pedestrian's enforcement of the judgment against solvent Security Guard under California Proposition 51:",
        opts: [
            "$600,000, because California joint and several liability applies unconditionally to all components of a personal injury judgment.",
            "$120,000, because pure comparative fault restricts a joint tortfeasor's liability strictly to their exact 20% allocation of total fault.",
            "$100,000, because Proposition 51 completely abolishes all joint liability for economic damages when a co-defendant is insolvent.",
            "$200,000, consisting of 100% of economic damages ($100,000) plus Security Guard's 20% several share of non-economic damages ($100,000)."
        ],
        ans: 3,
        exp: "Under California Civil Code § 1431.2 (Proposition 51 / Thomas v. Duggins Construction Co.), a negligent defendant (Security Guard) is entitled to the protections of Proposition 51 even when a co-defendant acted intentionally. Liability for economic damages remains joint and several ($100,000), while liability for non-economic damages is several only, limited strictly to Security Guard's 20% allocated fault (20% of $500,000 = $100,000). Total recoverable from Security Guard = $200,000."
    },
    {
        id: 25,
        topic: "Negligence / Firefighter's Rule Statutory Exception for Subsequent Concealed Hazards (Cal. Civ. Code § 1714.9)",
        fp: "Chemical Factory caught fire due to ordinary kitchen negligence. Firefighter arrived on the scene. While Firefighter was preparing water hoses in the yard, Plant Manager intentionally failed to warn Firefighter that an unlabeled wooden garden shed contained 500 gallons of shock-sensitive explosive nitroglycerin. The shed exploded, injuring Firefighter. Factory asserted the Firefighter's Rule under California law.",
        q: "In Firefighter's personal injury action against Chemical Factory under California Civil Code § 1714.9:",
        opts: [
            "Firefighter will prevail, because the Firefighter's Rule does not shield landowners who fail to warn of hidden, concealed, non-obvious ultra-hazardous traps after knowing of the responder's presence.",
            "Chemical Factory is completely immune under the Firefighter's Rule, because chemical explosions are inherent risks of industrial firefighting.",
            "Firefighter's claim is completely barred under the doctrine of primary assumption of risk for entering commercial industrial chemical premises.",
            "Chemical Factory is liable only if Firefighter was a full-time municipal employee rather than a volunteer reserve responder."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1714.9 and common law exceptions to the Firefighter's Rule, the rule does NOT shield a property owner who fails to warn emergency responders of hidden, concealed, non-obvious dangerous traps or hazards on the premises known to the owner and of which the responder has no reason to be aware, especially where conduct occurs after knowing of the responder's presence."
    }
];