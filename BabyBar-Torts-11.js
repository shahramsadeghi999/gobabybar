const examData = [
    {
        id: 1,
        topic: "Battery / Non-Consensual Organ Donation & Substituted Consent",
        fp: "Patient was admitted to Hospital for an emergency surgical repair of a perforated bowel. While Patient was under general anesthesia, Surgeon noticed that Patient was an ideal genetic match for Recipient, who was dying in an adjacent room from acute kidney failure. Believing it was an ethical emergency and that Patient had a healthy spare kidney, Surgeon removed one of Patient's kidneys and transplanted it into Recipient. The surgery was technically flawless, and Patient suffered no clinical bowel complications.",
        q: "In Patient's civil action against Surgeon for Battery, Patient will:",
        opts: [
            "Lose, because emergency medical doctrine authorizes surgeons to balance competing lives in surgical crises.",
            "Prevail, because removing an organ without express patient consent constitutes an actionable battery per se.",
            "Lose, because Patient suffered no measurable reduction in normal life expectancy with one functioning kidney.",
            "Prevail only under professional negligence upon establishing deviation from hospital administrative protocols."
        ],
        ans: 1,
        exp: "A surgical operation performed on an unconscious patient that exceeds or completely departs from the authorized procedure constitutes an intentional Battery, regardless of whether it saved another person's life or caused zero physical complications to the donor."
    },
    {
        id: 2,
        topic: "Assault / Imminence & Third-Party Intermediaries",
        q: "Defendant called Messenger into his private office, showed Messenger a loaded revolver, and said: 'Go find Victim and tell him that I will shoot him in the head the minute he steps out of his front door tomorrow morning.' Messenger immediately went to Victim and delivered the exact message. Victim suffered severe terror. In Victim's civil action for Assault against Defendant:",
        opts: [
            "Victim will lose, because the threat lacked the immediacy required for assault and was conveyed via an intermediary.",
            "Victim will prevail, because displaying a deadly weapon to an agent creates vicarious reasonable apprehension.",
            "Victim will prevail, because threats to murder a specific individual constitute an assault as a matter of law.",
            "Victim will lose only if Defendant proved that the firearm was unloaded when shown to Messenger."
        ],
        ans: 0,
        exp: "Assault requires an intentional act causing reasonable apprehension of IMMINENT harmful or offensive contact. Threats of future harm (e.g., tomorrow morning) conveyed through an intermediary lack the requisite imminence of an immediate physical battery."
    },
    {
        id: 3,
        topic: "False Imprisonment / Economic Coercion vs. Physical Restraint",
        q: "Employer suspected Cashier of stealing $1,000. Employer told Cashier: 'If you leave this breakroom before signing a confession, I will immediately report you to state regulators, revoke your professional license, and notify all local banks.' The breakroom door remained unlocked. Cashier remained in the room for five hours out of fear of professional ruin. In Cashier's suit for False Imprisonment:",
        opts: [
            "Cashier will prevail, because threatening professional livelihood constitutes coercive constructive confinement.",
            "Employer will prevail under the Shopkeeper's Privilege, because five hours is reasonable for financial audits.",
            "Employer will prevail, because threats of future legal or economic consequences do not constitute false imprisonment.",
            "Cashier will prevail only if Employer had no reasonable factual basis to suspect Cashier of the theft."
        ],
        ans: 2,
        exp: "False Imprisonment requires an intentional physical confinement within fixed boundaries without a reasonable means of escape. Moral pressure, threats of future economic injury, or threats of future legal proceedings do not constitute actionable confinement."
    },
    {
        id: 4,
        topic: "IIED / Outrageousness & Public Humiliation of Vulnerable Target",
        q: "Store Manager knew that Employee stuttered severely and suffered from severe social anxiety. At a mandatory all-hands company meeting, Manager projected a magnified video of Employee stuttering, played loud circus music, and forced Employee to stand on a chair while Manager mocked his speech for 20 minutes to entertain staff. Employee suffered acute vomiting, panic attacks, and clinical depression. In Employee's suit for IIED:",
        opts: [
            "Manager will prevail, because internal corporate staff meetings are protected by qualified managerial privilege.",
            "Employee will lose, because IIED in the workplace is barred by the exclusive remedy of workers' compensation.",
            "Manager will prevail, because verbal teasing and mockery are classified as non-actionable common indignities.",
            "Employee will prevail, because deliberately exploiting a known vulnerability to humiliate a target is extreme and outrageous."
        ],
        ans: 3,
        exp: "Conduct that might otherwise be considered mere insults or indignities becomes Extreme and Outrageous when the actor abuses a position of authority and deliberately targets or exploits a known physical, mental, or psychological vulnerability."
    },
    {
        id: 5,
        topic: "Trespass to Land / Subterranean Encroachment via Underground Slurry Walls",
        q: "Contractor was excavating a foundation on Lot A. To prevent soil collapse, Contractor injected chemical grout and high-pressure liquid concrete that hardened into an underground slurry wall. Unknown to Neighbor, the concrete expanded 15 feet beneath the surface across the vertical property line into Neighbor's Lot B, interfering with Neighbor's planned geothermal well. In Neighbor's suit for Trespass to Land:",
        opts: [
            "Neighbor will prevail, because projecting physical subterranean concrete across vertical boundary lines is a trespass.",
            "Contractor will prevail, because subsurface intrusions are privileged if reasonably necessary for surface development.",
            "Neighbor will lose, because trespass to land requires physical intrusion upon the usable surface soil of real property.",
            "Contractor will prevail, because the injection was performed without specific intent to harm Neighbor's parcel."
        ],
        ans: 0,
        exp: "Trespass to Land extends below the surface to the subterranean depths. Intentionally projecting physical foreign substances (such as pressurized liquid concrete or grout) across vertical subterranean property boundaries constitutes an actionable physical invasion."
    },
    {
        id: 6,
        topic: "Conversion / Unauthorized Alteration of Negotiable Instruments",
        q: "Client gave Attorney a signed check payable to 'State Tax Board' for $5,000 to settle a tax debt. Attorney chemically altered the payee line to read 'Attorney Trust Account,' deposited the funds, and used the money to pay unrelated office rent. When Client discovered the theft, Client sued Attorney for Conversion. Attorney argued checks are intangible contract rights. Result?",
        opts: [
            "Attorney is not liable for conversion, because bank checks represent intangible debt rights governed by UCC Article 3.",
            "Client will prevail, because negotiable instruments and commercial paper are chattels subject to the tort of conversion.",
            "Client is restricted exclusively to an action for breach of fiduciary duty and accounting under commercial banking law.",
            "Attorney is liable only if Client suffered permanent out-of-pocket tax penalties from the delayed tax payment."
        ],
        ans: 1,
        exp: "Under common law and modern conversion principles, negotiable instruments, checks, promissory notes, and stock certificates are tangible representations of intangible rights and are fully subject to the tort of Conversion."
    },
    {
        id: 7,
        topic: "Self-Defense / Duty to Retreat with Non-Deadly Force",
        q: "Shopper and Pedestrian had a verbal dispute on a public sidewalk. Pedestrian raised his fists and lunged forward to tackle Shopper. Shopper had an open, completely safe avenue of retreat behind him. Instead of retreating, Shopper stood his ground and struck Pedestrian with an umbrella using reasonable, non-deadly force, knocking Pedestrian down. In Pedestrian's battery action against Shopper:",
        opts: [
            "Shopper is liable for battery, because an actor must exhaust all safe avenues of physical retreat before using force.",
            "Pedestrian will prevail, because words and aggressive gestures never justify physical battery in public forums.",
            "Shopper is privileged, because an actor is never required to retreat before using reasonable non-deadly force in self-defense.",
            "Shopper is privileged only if the altercation occurred within the curtilage of Shopper's private residential dwelling."
        ],
        ans: 2,
        exp: "An actor is privileged to use reasonable NON-DEADLY force in self-defense against imminent unlawful force. There is NO duty to retreat before using non-deadly force, even if a completely safe avenue of retreat is readily available."
    },
    {
        id: 8,
        topic: "Defense of Others / Reasonable Mistake Majority Rule",
        q: "Security Guard in civilian clothing was lawfully restraining Thief on a store floor. Good Samaritan turned the corner, saw an unidentified man pinning a screaming teenager to the ground with a raised fist, and reasonably believed an unlawful violent mugging was underway. Samaritan struck Guard with a briefcase to protect the teenager. In Guard's battery suit against Samaritan:",
        opts: [
            "Samaritan is liable under the traditional 'alter-ego' rule, because Thief had no legal right to resist lawful restraint.",
            "Samaritan is strictly liable, because striking a private security officer performing store duties is tortious per se.",
            "Samaritan is liable only if Guard had prominently displayed a laminated security badge on his civilian shirt pocket.",
            "Samaritan is privileged under the modern rule, because Samaritan acted upon a reasonable, honest mistake of fact."
        ],
        ans: 3,
        exp: "Under the modern majority rule (Restatement (Second) of Torts § 76), an actor is privileged to use reasonable force to defend a third person if the actor REASONABLY BELIEVES the third person is being subjected to unlawful force, even if that belief is based on an honest mistake of fact."
    },
    {
        id: 9,
        topic: "Public Necessity / Complete Privilege for Private Property Destruction",
        q: "A runaway, highly contagious toxic bioweapon container was leaking in a private warehouse. To contain the spread and save a metropolitan city of 2 million people, Federal Health Officials detonated an incendiary thermal charge that vaporized the warehouse and destroyed $20,000,000 in private commercial inventory. Warehouse Owner sued Officials for Conversion and Trespass. Officials raised Public Necessity. Result?",
        opts: [
            "Officials are completely immune from tort liability, because public necessity is an absolute complete defense.",
            "Warehouse Owner is entitled to actual compensatory damages under the incomplete privilege rule of Vincent v. Lake Erie.",
            "Officials are personally liable unless they obtained an emergency judicial search warrant prior to the thermal detonation.",
            "Warehouse Owner recovers full market value under statutory inverse condemnation enterprise liability."
        ],
        ans: 0,
        exp: "Under the doctrine of Public Necessity (Surocco v. Geary), when private property is destroyed or damaged by public officials or private individuals to prevent an imminent public disaster or catastrophe, the privilege is ABSOLUTE and COMPLETE, precluding all tort liability for compensatory damages."
    },
    {
        id: 10,
        topic: "Negligence / Hand Formula (B < PL) Analysis",
        q: "Barge Co. left a cargo barge unattended at a crowded commercial pier for 24 hours during a busy maritime workday. The cost of hiring a bargee to monitor the lines was $50 per day. The risk of lines breaking and colliding with other vessels was moderate (P = 5%), and the foreseeable gravity of collision harm was catastrophic (L = $500,000). A line snapped, and the drifting barge sank Tugboat. Under the Learned Hand formula (United States v. Carroll Towing):",
        opts: [
            "Barge Co. is strictly liable as an absolute commercial insurer of all maritime navigational hazards.",
            "Barge Co. is negligent, because the burden of precaution (B) was substantially less than the gravity multiplied by probability (PL).",
            "Barge Co. is not liable, because the probability of the line breaking (5%) was statistically insignificant as a matter of law.",
            "Barge Co. is relieved of liability if industry custom in that harbor was to leave daytime barges unattended."
        ],
        ans: 1,
        exp: "Under the Learned Hand formula for negligence (B < PL, from United States v. Carroll Towing Co.), an actor is negligent if the Burden of adequate precautions (B = $50) is less than the Probability of injury (P = 0.05) multiplied by the magnitude of the foreseeable Loss (L = $500,000; PL = $25,000)."
    },
    {
        id: 11,
        topic: "Negligence Per Se / Licensing Statutes Exception",
        q: "Driver was operating a motor vehicle with utmost reasonable care and skill at the posted speed limit. Driver's state motor vehicle operator's license had expired three days earlier, violating the state vehicle licensing code. Driver was broadsided by Speeding Motorist, and Motorist sued Driver asserting Negligence Per Se based on driving without a valid license. Motorist's negligence per se claim will:",
        opts: [
            "Succeed, because violating a mandatory motor vehicle code establishes negligence per se conclusively.",
            "Succeed, because driving on public roadways without a state license constitutes a continuing civil trespass.",
            "Fail, because administrative licensing statutes are designed for revenue and recordkeeping, not standards of driving care.",
            "Fail only if Driver renewed the expired license within thirty days of the intersection collision."
        ],
        ans: 2,
        exp: "Negligence Per Se applies only to safety statutes designed to protect against specific hazards. Pure administrative licensing statutes (such as driving without an active license or practicing without a renewed certificate) do not establish a standard of physical care; failure to have a license is not evidence of negligence."
    },
    {
        id: 12,
        topic: "Res Ipsa Loquitur / Exclusive Control & Multiple Explanations",
        q: "Pedestrian was walking past a hotel on a crowded public sidewalk when a heavy glass flowerpot fell from an upper floor and struck Pedestrian. All 200 upper-floor hotel rooms had openable exterior windows and were fully occupied by independent, private hotel guests. Pedestrian sued Hotel under Res Ipsa Loquitur. Hotel moved for a directed verdict. The court should:",
        opts: [
            "Grant the motion, because the flowerpot could have been dropped from a guest's private room outside Hotel's exclusive control.",
            "Deny the motion under Ybarra v. Spangard, shifting the burden to Hotel to identify which guest dropped the object.",
            "Deny the motion, because commercial hotel operators are strictly liable for all objects falling from commercial facades.",
            "Grant the motion only if Hotel proved that the window ledges were inspected by municipal building code inspectors."
        ],
        ans: 0,
        exp: "Under Larson v. St. Francis Hotel, Res Ipsa Loquitur requires that the instrumentality causing injury be within the DEFENDANT'S EXCLUSIVE CONTROL. Where an object falls from a hotel where independent guests have control over windows and furnishings, exclusive control in the hotel cannot be established."
    },
    {
        id: 13,
        topic: "Causation / Loss of Chance Doctrine in Traditional Jurisdictions",
        q: "Patient visited Physician with chest pain. Physician negligently failed to order an angiogram, misdiagnosing the condition as acid reflux. Patient suffered a fatal cardiac arrest 48 hours later. Undisputed expert testimony proved that with a timely angiogram, Patient had a 35% chance of survival, which fell to 0% due to the delay. In a traditional common law causation jurisdiction:",
        opts: [
            "Patient's estate recovers 35% of total damages under proportional loss of chance allocation rules.",
            "Patient's estate loses, because estate cannot prove it was more likely than not (>50%) that negligence caused the death.",
            "Patient's estate recovers full damages under res ipsa loquitur, because fatal heart attacks are preventable with care.",
            "Patient's estate is entitled to a directed verdict under the substantial factor test of concurrent causes."
        ],
        ans: 1,
        exp: "In traditional common law jurisdictions (and California under Dumas v. Cooney), the 'Loss of Chance' doctrine is rejected in wrongful death cases. The plaintiff must satisfy the traditional 'more likely than not' (>50%) standard of causation. Since the decedent had only a 35% initial chance of survival, 'but-for' causation cannot be proven."
    },
    {
        id: 14,
        topic: "Proximate Cause / Intervening Suicide Triggered by Physical Brain Trauma",
        q: "Trucker negligently rear-ended Driver, causing a severe skull fracture and organic traumatic brain damage. The organic brain damage caused an uncontrollable, organic organic psychosis that destroyed Driver's capacity for rational reasoning. Six months later, Driver committed suicide. In the wrongful death action against Trucker, Trucker argued suicide is a superseding cause. Result?",
        opts: [
            "Trucker is liable, because suicide resulting from an organic, uncontrollable delirium caused by physical brain trauma is not superseding.",
            "Trucker is not liable, because common law treats intentional suicide as an absolute superseding cause cutting off liability.",
            "Trucker is liable only for pre-death medical expenses under survival statutes, but not wrongful death damages.",
            "Trucker is relieved of liability under the doctrine of avoidable consequences governing emotional mental illness."
        ],
        ans: 0,
        exp: "While suicide is traditionally an independent superseding cause, an established exception applies where the defendant's tortious physical injury causes organic brain damage, delirium, or an uncontrollable impulse that prevents the decedent from controlling their conduct or understanding the nature of the act."
    },
    {
        id: 15,
        topic: "Landowner Duty / Rowland v. Christian Unitary Duty Standard",
        q: "Homeowner invited Guest to a party. Homeowner knew that a porcelain water faucet handle in the guest bathroom had a concealed, microscopic crack that would shatter and lacerate a user's hand upon turning, but forgot to warn Guest. The handle shattered in Guest's hand, severing a tendon. In California under Rowland v. Christian:",
        opts: [
            "Homeowner is immune, because social guests enter residential premises under the common law licensee rule.",
            "Homeowner is strictly liable under the statutory warranty of residential habitability running to social guests.",
            "Guest must prove that Homeowner acted with intentional malice or reckless disregard for invited social entrants.",
            "Homeowner is liable in negligence, because landowners owe a unitary duty of reasonable care to all entrants under the circumstances."
        ],
        ans: 3,
        exp: "In Rowland v. Christian (69 Cal.2d 108), California abolished the rigid common law entrant classifications (invitee, licensee, trespasser), replacing them with a single unitary standard of ordinary REASONABLE CARE under the circumstances (considering foreseeability of harm, closeness of connection, and moral blame)."
    },
    {
        id: 16,
        topic: "Negligent Infliction of Emotional Distress / Thing v. La Chusa Strict Criteria",
        q: "Mother was standing inside her kitchen when she heard a loud screech of tires and a metallic crash on the street outside. Mother immediately ran out the front door 15 seconds later and saw her Daughter lying severely injured on the pavement having just been struck by a negligent motorist. Mother suffered acute, clinically diagnosed psychiatric shock. Under California law (Thing v. La Chusa):",
        opts: [
            "Mother cannot recover for NIED, because Mother was not contemporaneously aware that the collision was injuring Daughter at the moment of impact.",
            "Mother can recover for NIED, because hearing the metallic crash satisfied the auditory perception requirement of sensory awareness.",
            "Mother can recover for NIED, because arriving at the scene within 15 seconds is sufficiently contemporaneous under Dillon v. Legg.",
            "Mother cannot recover for NIED unless Mother was also positioned within the physical zone of danger of vehicular impact."
        ],
        ans: 0,
        exp: "Under Thing v. La Chusa (48 Cal.3d 644), bystander NIED in California strictly requires that the plaintiff: (1) be closely related to the victim; (2) be present at the scene and CONTEMPORANEOUSLY AWARE that the event is causing injury to the victim at the time it occurs; and (3) suffer severe emotional distress. Hearing a crash from inside a house and running out seconds later bars recovery."
    },
    {
        id: 17,
        topic: "Strict Products Liability / Component Part Manufacturers & Non-Defective Raw Glass",
        q: "Glass Co. manufactured flat, non-defective commercial tempered glass panels according to standard industry dimensions and sold 500 panels to Table Corp. Table Corp. incorporated the glass into an outdoor patio table using an unstable, defectively designed frame that placed uneven torsional stress on the glass, causing a panel to shatter and injure Consumer. Glass Co. had no role in designing the table. In Consumer's strict products liability suit:",
        opts: [
            "Glass Co. is strictly liable, because all commercial component suppliers in the chain of distribution are strictly liable for finished product failures.",
            "Glass Co. is not strictly liable under the Component Parts Doctrine, because the raw glass panel was not defective when it left Glass Co.'s custody.",
            "Glass Co. is liable under the consumer expectation test, because ordinary consumers do not expect tempered patio table glass to shatter under torsion.",
            "Glass Co. is strictly liable under the statutory express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under the Component Parts Doctrine (Restatement (Third) of Torts: Products Liability § 5 / Jimenez v. Superior Court), a component part manufacturer is NOT strictly liable for defects in a finished integrated product if the component itself was non-defective when supplied and the component maker did not substantially participate in integrating the part into the defective finished design."
    },
    {
        id: 18,
        topic: "Strict Products Liability / Feasible Alternative Design (Risk-Utility Test)",
        q: "Machinist operated an industrial circular table saw. The saw was manufactured without an automatic flesh-sensing electronic braking mechanism that cost $35 to install and would have stopped the blade instantly upon contact with human tissue without impairing saw function. Machinist's hand slipped, amputating three fingers. In Machinist's strict products liability suit under California's Risk-Utility test (Barker v. Lull):",
        opts: [
            "Machinist will lose, because the rotating steel circular blade was an open and obvious danger relieving manufacturer of duty.",
            "Manufacturer is strictly liable, because the availability of a feasible, cost-effective safer alternative design outweighs the risk.",
            "Machinist must prove that Manufacturer acted with conscious, reckless indifference to the physical safety of industrial consumers.",
            "Manufacturer is immune from liability if the table saw fully complied with baseline federal OSHA manufacturing regulations."
        ],
        ans: 1,
        exp: "Under California's Risk-Benefit / Risk-Utility test (Barker v. Lull Engineering Co.), a product design is defective if the gravity and probability of the danger inherent in the design outweigh the feasibility, cost, and adverse consequences of an available alternative safer design."
    },
    {
        id: 19,
        topic: "Strict Liability / Abnormally Dangerous Activities & Escape of Stored Flammable Liquids",
        q: "Refinery Co. stored 1,000,000 gallons of volatile, unrefined crude oil in massive industrial storage tanks in an earthquake-prone suburban zone. An unexpected minor seismic tremor, which caused zero damage to ordinary residential buildings, caused an oil tank weld to rupture, spilling oil into Neighbor's lake and destroying $500,000 in aquatic infrastructure. Refinery Co. proved it exercised utmost care in welding. Result?",
        opts: [
            "Refinery Co. is not liable, because seismic earth tremors are classified as common law Acts of God excusing all tort liabilities.",
            "Refinery Co. is liable only if Neighbor proves Refinery Co. violated a mandatory municipal industrial zoning environmental code.",
            "Refinery Co. is strictly liable, because storing massive volumes of volatile oil in an urban seismic zone is abnormally dangerous.",
            "Neighbor's claim is completely barred under the doctrine of primary assumption of risk for owning land near oil refineries."
        ],
        ans: 2,
        exp: "Under Rylands v. Fletcher and Restatement (Second) of Torts §§ 519–520, the storage of massive quantities of highly flammable, volatile, or toxic liquids in inappropriate or populated locations involves a high risk of catastrophic harm that cannot be eliminated by utmost care, constituting an Abnormally Dangerous Activity subject to Strict Liability."
    },
    {
        id: 20,
        topic: "Vicarious Liability / Independent Contractor Non-Delegable Duty in Highway Construction",
        q: "City hired Independent Contractor Paving to repave a four-lane municipal boulevard. Paving's employees failed to place warning cones or safety barriers around an open 6-foot excavation trench in the middle of the road. Motorist drove into the trench at night, suffering severe injuries. In Motorist's tort suit against City:",
        opts: [
            "City is immune from liability, because municipal governments are never liable for the operational negligence of independent contractors.",
            "Motorist's recovery is barred under primary assumption of risk for operating motor vehicles on active highway construction zones.",
            "City is strictly liable under the statutory California Tort Claims Act for all traffic accidents occurring on public streets.",
            "City is vicariously liable, because municipalities owe a non-delegable duty to maintain public highways in a reasonably safe condition."
        ],
        ans: 3,
        exp: "Under established tort law and California Government Code provisions, a public entity or municipality owes a NON-DELEGABLE duty to keep public thoroughfares and highways reasonably safe for travel. Hiring an independent contractor to perform road repairs does not insulate the city from vicarious liability for the contractor's failure to post safety barricades."
    },
    {
        id: 21,
        topic: "Defamation / Limited-Purpose Public Figure Actual Malice Standard",
        q: "Architect voluntarily gave multiple televised press conferences and published newspaper editorials aggressively advocating for the approval of a controversial municipal nuclear waste storage facility. Local Blogger published an article falsely claiming Architect had received a $500,000 cash bribe from a foreign construction syndicate. In Architect's defamation action against Blogger:",
        opts: [
            "Architect must prove constitutional actual malice by clear and convincing evidence, because Architect is a limited-purpose public figure.",
            "Architect needs to prove only simple negligence, because Architect is a private professional who holds no elected public office.",
            "Blogger is protected by absolute First Amendment immunity governing public discussions of municipal energy infrastructure.",
            "Architect is entitled to presumed general damages under slander per se without introducing evidence of constitutional fault."
        ],
        ans: 0,
        exp: "Under Gertz v. Robert Welch, Inc., an individual who voluntarily injects themselves into the forefront of a particular public controversy to influence its outcome is a 'limited-purpose public figure.' To recover for defamatory statements concerning that controversy, they must prove constitutional Actual Malice (knowledge of falsity or reckless disregard) by clear and convincing evidence."
    },
    {
        id: 22,
        topic: "Privacy / Commercial Misappropriation - Right of Publicity Post-Mortem Survival",
        q: "Apparel Corp. manufactured 50,000 t-shirts featuring the iconic face and name of Famous Actor who died three years earlier, selling them nationwide for profit without obtaining consent from Actor's Estate. In a civil action brought by Actor's Estate against Apparel Corp. under California Civil Code § 3344.1:",
        opts: [
            "Estate will lose, because the right of publicity is a personal dignitary tort that terminates automatically upon the death of the celebrity.",
            "Estate will prevail, because California statutory law explicitly recognizes that the Right of Publicity survives death as a transferable property right.",
            "Apparel Corp. is completely protected under the absolute First Amendment commercial fair use doctrine for expressive consumer garments.",
            "Estate is restricted to an action for common law conversion requiring Apparel Corp. to surrender the physical cotton t-shirts."
        ],
        ans: 1,
        exp: "Under California Civil Code § 3344.1 (the Astaire Celebrity Image Protection Act), the Right of Publicity for a deceased personality is a descendible, transferable PROPERTY RIGHT that survives death for a statutory period (70 years in California), prohibiting unauthorized commercial exploitation of the deceased celebrity's name, voice, signature, photograph, or likeness."
    },
    {
        id: 23,
        topic: "Economic Torts / Fraudulent Inducement & Integration Clause Inapplicability",
        q: "Seller induced Buyer to purchase a commercial bakery by intentionally showing Buyer fabricated tax returns demonstrating $200,000 in annual net profits. Buyer signed a purchase contract containing a standard integration clause stating: 'This Agreement supersedes all prior representations; Buyer relies solely on Buyer's own inspection.' Buyer discovered the fraud and sued Seller for Deceit. Result?",
        opts: [
            "Seller prevails, because an express integration clause in a commercial contract completely bars all prior parol tort representations.",
            "Buyer's claim is completely barred under the doctrine of caveat emptor applicable to commercial business sales transactions.",
            "Buyer will prevail, because a general integration clause does not immunize a party from an action for intentional fraudulent inducement.",
            "Buyer is restricted exclusively to an action for rescission under Article 2 of the Uniform Commercial Code, precluding damages."
        ],
        ans: 2,
        exp: "Under established contract and tort law (Riverisland Cold Storage v. Fresno-Madera Production Credit Ass'n), an integration clause or merger clause in a contract does NOT shield a party from tort liability for Fraud / Intentional Deceit; parol evidence and external misrepresentations are admissible to establish fraudulent inducement."
    },
    {
        id: 24,
        topic: "Joint Tortfeasors / Proposition 51 (Civil Code § 1431.2) Several Liability",
        q: "Pedestrian was struck in an intersection by Driver A (70% at fault) and Driver B (30% at fault). Pedestrian suffered $50,000 in economic medical damages and $200,000 in non-economic pain and suffering damages. Driver A is completely insolvent and uninsured. In Pedestrian's enforcement of the judgment against solvent Driver B under California Civil Code § 1431.2 (Proposition 51):",
        opts: [
            "Driver B is liable for $75,000, representing 30% of the total aggregate personal injury judgment ($250,000 x 30%).",
            "Driver B is liable for $250,000, because joint and several liability applies to all damages under traditional California common law.",
            "Driver B is liable for $50,000, because Proposition 51 abolishes all several liability for non-economic damages against minor joint tortfeasors.",
            "Driver B is liable for $110,000, consisting of 100% of economic damages ($50,000) plus Driver B's 30% several share of non-economic damages ($60,000)."
        ],
        ans: 3,
        exp: "Under California Civil Code § 1431.2 (Proposition 51), liability for economic damages remains joint and several (allowing collection of 100% of the $50,000 from Driver B), while liability for non-economic damages is several only, limited strictly to Driver B's 30% allocated fault (30% of $200,000 = $60,000). Total recoverable from Driver B = $50,000 + $60,000 = $110,000."
    },
    {
        id: 25,
        topic: "Negligence / Firefighter's Rule Exception for Subsequent Negligent Acts",
        q: "Police Officer pulled over Speeding Motorist on a dark highway shoulder. As Officer was standing beside Motorist's driver window writing a citation, Motorist dropped a cigarette, panicked, stepped on the accelerator, and backed up over Officer's foot, fracturing bones. In Officer's personal injury lawsuit against Motorist under California Civil Code § 1714.9:",
        opts: [
            "Officer can recover, because the Firefighter's Rule does not bar claims where the tortfeasor's negligent act occurs after knowing of the officer's presence.",
            "Motorist is completely immune under the Firefighter's Rule, because traffic hazards during roadside enforcement are inherent risks of police work.",
            "Officer's claim is completely barred under the doctrine of primary assumption of risk for standing on active highway shoulders.",
            "Motorist is liable only if Officer proves Motorist acted with premeditated criminal malice and intentional vehicular assault."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1714.9, the Firefighter's Rule does NOT bar recovery where the conduct causing the injury occurs AFTER the person knows or should know of the presence of the peace officer or firefighter, and involves a subsequent negligent or willful act."
    }
];