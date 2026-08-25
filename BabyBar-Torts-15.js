const examData = [
    {
        id: 1,
        topic: "Battery / Non-Consensual Physician Extension in Emergency Absence",
        fp: "Patient consented to a right knee arthroscopic meniscus repair under general anesthesia. During surgery, Orthopedic Surgeon observed that Patient's left knee suffered from an asymptomatic torn cruciate ligament that could be repaired conveniently while Patient was sedated, saving Patient a second future anesthesia charge. The left knee posed zero immediate life or health emergency. Surgeon performed the left knee ligament repair with extraordinary skill. Patient experienced zero surgical infection or anatomical defect.",
        q: "In Patient's action against Orthopedic Surgeon for Battery concerning the left knee:",
        opts: [
            "Patient will lose, because the surgery conferred a substantial clinical benefit without measurable tissue harm.",
            "Surgeon will prevail, because general operative consent grants surgeons discretion to remedy discovered pathologies.",
            "Patient will prevail, because operating on an unauthorized body part without life-threatening emergency constitutes battery.",
            "Patient is restricted to an action for professional medical negligence, limiting damages to actual economic out-of-pocket costs."
        ],
        ans: 2,
        exp: "Under common law battery doctrine and California law (Cobbs v. Grant), performing a surgical operation on a different part of the body than that consented to is an intentional Battery, even if performed with utmost skill and therapeutic benefit, absent an immediate life-threatening emergency."
    },
    {
        id: 2,
        topic: "Assault / Apparent Present Ability & Objective Apprehension",
        fp: "Actor approached Victim on an unlit sidewalk, pointed an unloaded, replica blank-firing revolver at Victim's face from three feet away, and snarled: 'Hand over your briefcase or I will blow your head off.' In truth, the gun lacked a firing pin and could not discharge any projectile. Victim believed the gun was authentic and loaded, and experienced acute terror.",
        q: "If Victim sues Actor for Assault, Victim will most likely:",
        opts: [
            "Lose, because an inoperable replica gun lacks the actual physical mechanical capacity to inflict an immediate battery.",
            "Prevail, because assault requires only that the defendant create an apparent, reasonable apprehension of imminent battery.",
            "Lose, because conditional demands accompanied by extortionate words negate the required immediacy of assault.",
            "Prevail only under conversion, capping recovery at the fair market replacement value of the physical briefcase."
        ],
        ans: 1,
        exp: "Assault requires an intentional act creating reasonable apprehension of immediate harmful or offensive contact. Apparent present ability is sufficient; actual physical capability is not required. Pointing an inoperable or replica firearm (which the victim reasonably believes to be loaded and operational) satisfies Assault."
    },
    {
        id: 3,
        topic: "False Imprisonment / Boundary Fixation via Remote Hostile Environment",
        fp: "Guide escorted Hiker to a barren, high-altitude alpine plateau 20 miles from the nearest road in sub-freezing temperatures. Following a fee dispute, Guide confiscated Hiker's heavy winter parka, satellite communicator, and snowshoes, locked them in a motorized snowmobile, and drove away. Hiker stood uninjured in the open snow for 10 hours before being spotted by an avalanche patrol helicopter.",
        q: "In Hiker's suit against Guide for False Imprisonment:",
        opts: [
            "Guide will prevail, because an open, unfenced outdoor mountain expanse lacks four physical walls and cannot constitute a bounded area.",
            "Hiker will lose, because Hiker was neither physically bound, locked in a room, nor subjected to immediate physical battery.",
            "Guide will prevail, because Hiker voluntarily embarked upon the alpine expedition and assumed all outdoor transit risks.",
            "Hiker will prevail, because removing essential survival gear where physical egress presents unreasonable peril constitutes confinement."
        ],
        ans: 3,
        exp: "False Imprisonment does not require four physical walls. Confinement to a bounded area is established where the defendant removes the plaintiff's essential means of travel or survival in a hostile environment where walking away presents an unreasonable risk of physical harm or death."
    },
    {
        id: 4,
        topic: "IIED / Outrageous Exploitation of Known Psychological Vulnerabilities",
        fp: "Landlord knew Tenant suffered from clinically diagnosed, severe post-traumatic stress disorder triggered by loud emergency sirens. To coerce Tenant into abandoning a rent-controlled apartment, Landlord mounted a commercial 125-decibel air-raid horn directly against Tenant's bedroom drywall and triggered it remotely at 3:00 AM every night for two weeks. Tenant suffered an acute psychiatric breakdown requiring inpatient hospitalization.",
        q: "In Tenant's action against Landlord for Intentional Infliction of Emotional Distress (IIED):",
        opts: [
            "Tenant will prevail, because deliberately weaponizing a known psychiatric vulnerability to harass an occupant is extreme and outrageous.",
            "Landlord will prevail, because residential noise disputes between landlords and tenants are governed exclusively by statutory habitability codes.",
            "Landlord will prevail, because the tort of IIED strictly requires contemporaneous physical battery or physical impact.",
            "Tenant will prevail only if Tenant suffered permanent anatomical physical structural damage to the auditory eardrum membrane."
        ],
        ans: 0,
        exp: "Conduct that might otherwise be considered mere indignity or harassment becomes Extreme and Outrageous when the actor has knowledge of the plaintiff's peculiar susceptibility or mental vulnerability and proceeds to exploit it intentionally."
    },
    {
        id: 5,
        topic: "Trespass to Land / Subterranean Grout & Concrete Slurry Invasions",
        fp: "Contractor was excavating a foundation on Parcel A. To prevent soil collapse, Contractor injected high-pressure chemical grout and liquid concrete into the earth. The pressurized concrete expanded 20 feet beneath the surface across the vertical property line into Neighbor's Parcel B, hardening into an underground barrier that blocked Neighbor's planned deep geothermal heating well. Neighbor sued Contractor for Trespass to Land.",
        q: "In Neighbor's trespass action against Contractor:",
        opts: [
            "Contractor will prevail, because subterranean intrusions are privileged if reasonably necessary for surface development.",
            "Neighbor will prevail, because intentionally projecting physical foreign substances across subsurface boundary lines is trespass.",
            "Neighbor will lose, because trespass to land requires physical intrusion upon the observable surface soil of real property.",
            "Contractor will prevail, because the injection was executed without specific subjective intent to damage Neighbor's parcel."
        ],
        ans: 1,
        exp: "Trespass to Land extends vertically below the surface to the subterranean depths. Intentionally causing physical foreign substances (such as pressurized liquid concrete, grout, or chemicals) to enter and cross the subterranean property boundaries of another constitutes an actionable physical invasion."
    },
    {
        id: 6,
        topic: "Conversion / Unauthorized Alteration and Sale of Commercial Paper",
        fp: "Client delivered a $25,000 promissory note payable to 'Escrow Holdings Inc.' to Broker to hold in trust. Broker chemically altered the payee line to read 'Broker Operating Account,' deposited the note, and used the proceeds to pay personal gambling debts. Client sued Broker for Conversion. Broker argued commercial paper represents intangible contract rights not subject to conversion.",
        q: "In Client's action for Conversion against Broker:",
        opts: [
            "Broker wins, because commercial promissory notes represent intangible debt rights governed exclusively by UCC Article 3.",
            "Client is restricted exclusively to an equitable action for an accounting and constructive trust under commercial banking law.",
            "Client will prevail, because commercial paper and negotiable instruments are documents merged with intangible rights subject to conversion.",
            "Broker wins, because conversion strictly requires the unauthorized taking of tangible macroscopic physical goods."
        ],
        ans: 2,
        exp: "Under common law and modern conversion principles, negotiable instruments, checks, promissory notes, and stock certificates are tangible representations of intangible rights and are fully subject to the tort of Conversion."
    },
    {
        id: 7,
        topic: "Self-Defense / Defense of Property vs. Life in Residential Dwelling",
        fp: "Homeowner was sleeping inside her ground-floor suburban bedroom when Intruder smashed the patio glass door with an iron crowbar, climbed into the bedroom, and raised the crowbar while taking two steps toward Homeowner. Fearing for her life, Homeowner retrieved a pistol from her nightstand and shot Intruder in the shoulder. Intruder sued Homeowner for Battery.",
        q: "In Intruder's battery action against Homeowner, Homeowner's defense of self-defense will:",
        opts: [
            "Fail, because the common law mandates that a homeowner exhaust all safe physical avenues of retreat from a bedroom.",
            "Fail, because Katko v. Briney completely prohibits the deployment of deadly force in defense of residential buildings.",
            "Succeed, because an occupant is privileged to use proportional deadly force when reasonably fearing imminent death or serious harm.",
            "Succeed only if Intruder had already struck a physical blow against an occupant inside the bedroom."
        ],
        ans: 2,
        exp: "Under the Castle Doctrine and self-defense principles, an occupant is privileged to use proportional deadly force inside her dwelling when she reasonably believes that an intruder has unlawfully and violently entered and poses an imminent threat of death or serious bodily injury. There is no duty to retreat inside one's home."
    },
    {
        id: 8,
        topic: "Defense of Others / Modern Reasonable Mistake Majority Rule",
        fp: "Undercover Police Officer in street clothes tackled Suspect on a sidewalk to execute an arrest warrant. Suspect shouted: 'Help, I am being mugged!' Good Samaritan turned the corner, saw an unidentified man in civilian clothes pinning the screaming suspect with a raised weapon, and reasonably believed an armed robbery was underway. Samaritan struck Officer with a heavy umbrella to protect Suspect. Officer sued Samaritan for Battery.",
        q: "Under the modern majority rule governing Defense of Others (Restatement (Second) of Torts § 76):",
        opts: [
            "Samaritan is liable under the traditional 'alter-ego' rule, because Suspect had no legal privilege to resist lawful arrest.",
            "Samaritan is strictly liable, because striking an active law enforcement officer executing official duties is a tort per se.",
            "Samaritan is liable only if Officer was wearing a visible laminated departmental badge on his civilian shirt pocket.",
            "Samaritan is privileged, because an intervenor is protected when acting upon an honest, reasonable mistake of fact."
        ],
        ans: 3,
        exp: "Under the modern majority rule for Defense of Others (Restatement (Second) of Torts § 76), an actor is privileged to use reasonable force to defend a third person if the actor REASONABLY BELIEVES that the third person is in imminent danger of unlawful attack, even if that belief is based on an honest, reasonable mistake of fact."
    },
    {
        id: 9,
        topic: "Public Necessity / Complete Privilege for Destroying Infested Crops",
        fp: "A catastrophic agricultural infestation of invasive fruit flies was detected exclusively within Farmer's 100-acre commercial citrus orchard, threatening to devastate the state's $10 billion citrus economy within weeks. To prevent statewide disaster, State Agricultural Officers entered without consent and burned the entire 100-acre citrus crop. Farmer sued Officers for Trespass and Conversion.",
        q: "In Farmer's tort action against State Agricultural Officers under Public Necessity:",
        opts: [
            "Officers are completely immune from tort liability, because public necessity is an absolute complete defense.",
            "Farmer is entitled to actual compensatory damages under the incomplete privilege rule of Vincent v. Lake Erie.",
            "Officers are personally liable for conversion unless they obtained an emergency judicial search warrant prior to burning.",
            "Farmer is entitled to statutory treble damages under state inverse condemnation civil rights enactments."
        ],
        ans: 0,
        exp: "Under the doctrine of Public Necessity (Surocco v. Geary), when private property is destroyed or damaged to prevent an imminent public disaster or catastrophe (such as stopping an epidemic, fire, or invasive crop blight), the privilege is ABSOLUTE and COMPLETE, precluding all tort liability for compensatory damages."
    },
    {
        id: 10,
        topic: "Negligence / Learned Hand Formula (B < PL) Analysis",
        fp: "Barge Co. left an unmanned cargo barge moored at a crowded commercial pier for 24 hours during a busy maritime workday. The cost of hiring a bargee to monitor lines was $60 per day (Burden). The risk of mooring lines snapping and colliding with other vessels was moderate (Probability = 5%), and the foreseeable gravity of collision harm was catastrophic (Loss = $600,000). A line snapped, and the drifting barge sank Tugboat. Under United States v. Carroll Towing:",
        opts: [
            "Barge Co. is strictly liable as an absolute commercial insurer of all maritime navigational hazards.",
            "Barge Co. is negligent, because the burden of precaution (B) was substantially less than the gravity multiplied by probability (PL).",
            "Barge Co. is not liable, because the probability of the line snapping (5%) was statistically insignificant as a matter of law.",
            "Barge Co. is relieved of liability if industry custom in that harbor was to leave daytime barges unattended."
        ],
        ans: 1,
        exp: "Under the Learned Hand formula for negligence (B < PL, from United States v. Carroll Towing Co.), an actor is negligent if the Burden of adequate precautions (B = $60) is less than the Probability of injury (P = 0.05) multiplied by the magnitude of the foreseeable Loss (L = $600,000; PL = $30,000)."
    },
    {
        id: 11,
        topic: "Negligence Per Se / Licensing Statutes Exception",
        fp: "Driver was operating a motor vehicle with utmost reasonable care and skill at the posted speed limit. Driver's state motor vehicle operator's license had expired three days earlier, violating the state vehicle licensing code. Driver was broadsided by Speeding Motorist, and Motorist sued Driver asserting Negligence Per Se based on driving without a valid license.",
        q: "Motorist's negligence per se claim against Driver will:",
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
        topic: "Res Ipsa Loquitur / Exclusive Control in Multiple Independent Hotel Guests",
        fp: "Pedestrian was walking past a 300-room luxury hotel on a crowded public sidewalk when a heavy glass flowerpot fell from an upper floor and struck Pedestrian. All upper-floor hotel rooms had openable exterior windows and were fully occupied by independent, private hotel guests. Pedestrian sued Hotel under Res Ipsa Loquitur. Hotel moved for a directed verdict.",
        q: "In ruling on Hotel's motion for directed verdict, the court should:",
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
        topic: "Causation / Traditional Loss of Chance Causation Threshold",
        fp: "Patient visited Physician exhibiting atypical chest pain. Physician negligently failed to order an angiogram, misdiagnosing the condition as acid reflux. Patient suffered a fatal cardiac arrest 48 hours later. Undisputed expert testimony proved that with a timely angiogram, Patient had a 35% chance of survival, which fell to 0% due to the delay.",
        q: "In a traditional common law proximate causation jurisdiction (as distinct from pure proportional loss-of-chance jurisdictions):",
        opts: [
            "Patient's estate recovers 35% of total wrongful death damages under proportional loss of chance allocation rules.",
            "Patient's estate loses, because the estate cannot prove it was more likely than not (>50%) that negligence caused the death.",
            "Patient's estate recovers full damages under res ipsa loquitur, because fatal heart attacks are preventable with care.",
            "Patient's estate is entitled to a directed verdict under the substantial factor test of concurrent causes."
        ],
        ans: 1,
        exp: "In traditional common law jurisdictions (and California under Dumas v. Cooney), the 'Loss of Chance' doctrine is rejected in wrongful death cases. The plaintiff must satisfy the traditional 'more likely than not' (>50%) standard of causation. Since the decedent had only a 35% initial chance of survival, 'but-for' causation cannot be proven."
    },
    {
        id: 14,
        topic: "Proximate Cause / Organic Brain Trauma Inducing Uncontrollable Delirium Suicide",
        fp: "Trucker negligently rear-ended Driver, causing a severe skull fracture and organic traumatic brain damage. The organic brain injury caused an uncontrollable delirium and organic psychosis that completely destroyed Driver's capacity for rational reasoning. Six months later, Driver committed suicide. In the wrongful death action against Trucker, Trucker argued suicide is a superseding cause.",
        q: "In Driver's estate's wrongful death action against Trucker:",
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
        topic: "Landowner Duty / California Unitary Duty Standard (Rowland v. Christian)",
        fp: "Homeowner invited Social Guest to a party. Homeowner knew that a porcelain water faucet handle in the guest bathroom had a concealed, microscopic crack that would shatter and lacerate a user's hand upon turning, but forgot to warn Guest. The handle shattered in Guest's hand, severing a tendon. In California under Rowland v. Christian:",
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
        topic: "NIED / California Bystander Contemporaneous Sensory Awareness (Thing v. La Chusa)",
        fp: "Mother was inside her kitchen when she heard a loud screech of tires and a metallic crunch on the street outside. Mother immediately ran out the front door 15 seconds later and saw her Daughter lying severely injured on the pavement having just been struck by a speeding motorist. Mother suffered acute, clinically documented psychiatric shock. Under California law (Thing v. La Chusa):",
        opts: [
            "Mother cannot recover for NIED, because Mother was not contemporaneously aware that the collision was injuring Daughter at the moment of impact.",
            "Mother can recover for NIED, because hearing the metallic crunch satisfied the auditory perception requirement of sensory awareness.",
            "Mother can recover for NIED, because arriving at the scene within 15 seconds is sufficiently contemporaneous under Dillon v. Legg.",
            "Mother cannot recover for NIED unless Mother was also positioned within the physical zone of danger of vehicular impact."
        ],
        ans: 0,
        exp: "Under Thing v. La Chusa (48 Cal.3d 644), bystander NIED in California strictly requires that the plaintiff: (1) be closely related to the victim, (2) be present at the scene and CONTEMPORANEOUSLY AWARE that the event is causing injury to the victim at the time it occurs, and (3) suffer severe emotional distress. Hearing a crash and running out seconds later bars recovery."
    },
    {
        id: 17,
        topic: "Strict Products Liability / Component Part Maker & Non-Defective Raw Materials",
        fp: "Glass Co. manufactured flat, non-defective commercial tempered glass panels according to standard industry dimensions and sold 500 panels to Table Corp. Table Corp. incorporated the glass into an outdoor patio table using an unstable, defectively designed frame that placed uneven torsional stress on the glass, causing a panel to shatter and injure Consumer. Glass Co. had no role in designing the table. In Consumer's strict products liability suit against Glass Co.:",
        opts: [
            "Glass Co. is strictly liable, because all commercial component suppliers in the chain of distribution are strictly liable for finished failures.",
            "Glass Co. is not strictly liable under the Component Parts Doctrine, because the raw glass panel was not defective when it left Glass Co.'s custody.",
            "Glass Co. is liable under the consumer expectation test, because ordinary consumers do not expect tempered patio table glass to shatter under torsion.",
            "Glass Co. is strictly liable under the statutory express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under the Component Parts Doctrine (Restatement (Third) of Torts: Products Liability § 5 / Jimenez v. Superior Court), a component part manufacturer is NOT strictly liable for defects in a finished integrated product if the component itself was non-defective when supplied and the component maker did not participate in integrating it into the defective finished design."
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
        topic: "Strict Liability / Abnormally Dangerous Activities & Location Factor",
        fp: "Refinery Co. stored 1,000,000 gallons of volatile, unrefined crude oil in massive industrial storage tanks in an earthquake-prone suburban zone. An unexpected minor seismic tremor, which caused zero damage to ordinary residential buildings, caused an oil tank weld to rupture, spilling oil into Neighbor's lake and destroying $500,000 in aquatic infrastructure. Refinery Co. proved it exercised utmost care in welding.",
        q: "In Neighbor's strict liability suit against Refinery Co.:",
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
        fp: "City hired Independent Contractor Paving to repave a four-lane municipal boulevard. Paving's employees failed to place warning cones or safety barriers around an open 6-foot excavation trench in the middle of the road. Motorist drove into the trench at night, suffering severe injuries. In Motorist's tort suit against City:",
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
        fp: "Architect voluntarily gave multiple televised press conferences and published newspaper editorials aggressively advocating for the approval of a controversial municipal nuclear waste storage facility. Local Blogger published an article falsely claiming Architect had received a $500,000 cash bribe from a foreign construction syndicate.",
        q: "In Architect's defamation action against Blogger:",
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
        fp: "Apparel Corp. manufactured 50,000 t-shirts featuring the iconic face and name of Famous Actor who died three years earlier, selling them nationwide for profit without obtaining consent from Actor's Estate. In a civil action brought by Actor's Estate against Apparel Corp. under California Civil Code § 3344.1:",
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
        fp: "Seller induced Buyer to purchase a commercial bakery by intentionally showing Buyer fabricated tax returns demonstrating $200,000 in annual net profits. Buyer signed a purchase contract containing a standard integration clause stating: 'This Agreement supersedes all prior representations; Buyer relies solely on Buyer's own inspection.' Buyer discovered the fraud and sued Seller for Deceit.",
        q: "In Buyer's action for intentional deceit against Seller:",
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
        fp: "Pedestrian was struck in an intersection by Driver A (70% at fault) and Driver B (30% at fault). Pedestrian suffered $50,000 in economic medical damages and $200,000 in non-economic pain and suffering damages. Driver A is completely insolvent and uninsured. In Pedestrian's enforcement of the judgment against solvent Driver B under California Civil Code § 1431.2 (Proposition 51):",
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
        fp: "Police Officer pulled over Speeding Motorist on a dark highway shoulder. As Officer was standing beside Motorist's driver window writing a citation, Motorist dropped a cigarette, panicked, stepped on the accelerator, and backed up over Officer's foot, fracturing bones. In Officer's personal injury lawsuit against Motorist under California Civil Code § 1714.9:",
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