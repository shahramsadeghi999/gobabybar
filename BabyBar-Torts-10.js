const examData = [
    {
        id: 1,
        topic: "Battery / Non-Consensual Physician Substitution ('Ghost Surgery')",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient specifically retained Chief Surgeon, a renowned specialist, to perform a complex elective spinal fusion surgery after executing a consent form naming Chief Surgeon exclusively. After Patient was placed under general anesthesia, Chief Surgeon left the hospital to attend a golf tournament and directed Surgical Associate to perform the entire operation. Surgical Associate performed the surgery with flawless technical skill, causing zero medical complications or physical defects.",
        q: "In Patient's civil tort action against Surgical Associate under the doctrine of Perna v. Pirozzi, Patient will:",
        opts: [
            "Lose, because Surgical Associate performed the surgery with utmost technical skill and caused no physical bodily harm.",
            "Lose, because general hospital admission consent forms authorize attending surgeons to delegate procedures to associates.",
            "Prevail for Battery, because an operation performed by a substituted surgeon without patient consent is battery.",
            "Prevail only under professional medical malpractice upon proving measurable out-of-pocket financial loss."
        ],
        ans: 2,
        exp: "Under Perna v. Pirozzi and California law, when a patient consents to surgery by a specific physician, an operation performed by a substituted 'ghost surgeon' without the patient's knowledge or consent constitutes an intentional Battery as a matter of law."
    },
    {
        id: 2,
        topic: "Battery / Measure of Damages in Non-Consensual Ghost Surgery",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient specifically retained Chief Surgeon, a renowned specialist, to perform a complex elective spinal fusion surgery after executing a consent form naming Chief Surgeon exclusively. After Patient was placed under general anesthesia, Chief Surgeon left the hospital to attend a golf tournament and directed Surgical Associate to perform the entire operation. Surgical Associate performed the surgery with flawless technical skill, causing zero medical complications or physical defects.",
        q: "If Patient sues Chief Surgeon for intentional deceit and battery, what damages is Patient legally entitled to recover?",
        opts: [
            "Strictly nominal damages capped at $1.00, because the surgery successfully cured Patient's underlying condition.",
            "Restitution of surgical fees paid, nominal damages for battery, and compensation for mental anguish and dignitary harm.",
            "Zero damages, because the doctrine of avoidable consequences requires Patient to offset health improvements against harm.",
            "Treble statutory damages under the California Consumers Legal Remedies Act for fraudulent medical advertising."
        ],
        ans: 1,
        exp: "In a ghost surgery battery action, even where no physical injury occurred, the patient is entitled to recover nominal damages for the unpermitted physical invasion, compensatory damages for mental anguish and dignitary offense, and full restitution of professional fees."
    },
    {
        id: 3,
        topic: "False Imprisonment / De Facto Confinement via Withholding Essential Property",
        q: "Driver drove Passenger to an isolated desert location 25 miles from the nearest town in 105-degree heat. After an argument, Driver stepped out of the vehicle, took the car keys, cellular phone, and water bottles from Passenger's bag, locked the car, and drove away in a companion's truck, leaving Passenger stranded. Passenger was uninjured but forced to wait 6 hours until a ranger passed. In Passenger's suit for False Imprisonment:",
        opts: [
            "Driver will prevail, because Passenger was situated in an open, unfenced desert expanse with unrestricted physical egress.",
            "Driver will prevail, because the tort of false imprisonment requires physical locking of four walls or threats of battery.",
            "Passenger will prevail only under trespass to chattels for the temporary unauthorized taking of the cellular phone.",
            "Passenger will prevail, because taking essential property in a remote hostile environment creates de facto complete confinement."
        ],
        ans: 3,
        exp: "False Imprisonment can be accomplished without physical walls or locks where the defendant removes the plaintiff's essential means of travel or survival (such as car keys or water) in a remote, dangerous environment where walking away presents an unreasonable hazard."
    },
    {
        id: 4,
        topic: "Trespass to Land / Subsurface Hydraulic Fracturing Migrations (Fracking)",
        q: "Gas Corp. owned mineral rights on Blackacre. To extract natural gas, Gas Corp. conducted hydraulic fracturing (fracking) operations 8,000 feet beneath the surface. The high-pressure fracking fluids and proppant sand crossed the vertical subterranean boundary line 8,000 feet deep into Neighbor's adjoining Whiteacre parcel, draining $500,000 in natural gas reserves. In Neighbor's suit for Trespass to Land and Conversion against Gas Corp.:",
        opts: [
            "Gas Corp. is liable for Trespass to Land, because intentionally projecting pressurized fluids across subsurface boundaries is tortious.",
            "Gas Corp. is completely shielded from liability under the traditional 'Rule of Capture' governing hydrocarbon reservoirs.",
            "Gas Corp. is not liable, because subsurface property rights terminate at 500 feet beneath the ground under mining statutes.",
            "Neighbor's claim is completely preempted by the federal Energy Policy Act of 2005 governing hydraulic fracturing."
        ],
        ans: 0,
        exp: "Intentionally causing physical fluids, proppants, and fractures to cross subterranean property lines onto an adjoining owner's land constitutes an actionable physical invasion supporting Trespass to Land."
    },
    {
        id: 5,
        topic: "Strict Products Liability / The 'Malfunction Theory' of Circumstantial Defect (Cassisi)",
        q: "Buyer purchased a brand-new clothes dryer from Retailer. On the third day of normal residential use, while drying a single towel, the dryer spontaneously erupted into flames, completely destroying Buyer's laundry room. Because the fire consumed the entire dryer, expert engineers could not identify the specific electrical wire that shorted out. In Buyer's strict products liability lawsuit against Manufacturer (Cassisi v. Maytag Co.):",
        opts: [
            "Buyer's claim is barred as a matter of law, because strict products liability requires direct expert proof of the specific component.",
            "Buyer can establish a defect under the 'Malfunction Theory' through circumstantial evidence of normal use and failure.",
            "Manufacturer is entitled to a directed verdict under the economic loss rule for accidental thermal appliance destruction.",
            "Buyer is restricted exclusively to an action for breach of the implied warranty of fitness under the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under the 'Malfunction Theory' (Restatement (Third) of Torts: Products Liability § 3 / Cassisi v. Maytag Co.), a plaintiff may prove a product defect circumstantially if the incident was of a kind that ordinarily occurs as a result of product defect and was not solely the result of other causes."
    },
    {
        id: 6,
        topic: "Strict Products Liability / Duty to Warn Idiosyncratic Allergic Reactions in Population Subgroups",
        q: "Cosmetics Co. manufactured a hair dye containing a chemical compound that was completely harmless to 99.9% of the population, but predictably caused severe, permanent blindness in an identifiable subgroup of approximately 1 in 10,000 consumers with a specific genetic enzyme trait. Cosmetics Co. included zero warnings on the packaging. Consumer, who possessed the genetic trait, used the dye and was blinded. In Consumer's strict products liability failure-to-warn suit:",
        opts: [
            "Cosmetics Co. is not liable, because a manufacturer owes no legal duty to warn of risks that affect under one percent of users.",
            "Consumer's claim is completely barred under the doctrine of primary assumption of risk for using chemical hair agents.",
            "Cosmetics Co. is strictly liable for failure to warn, because a manufacturer must warn of known risks to an identifiable subgroup.",
            "Cosmetics Co. is liable only if Consumer can prove that Cosmetics Co. executives possessed actual subjective malice."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 402A cmt. j, a manufacturer is strictly liable for failure to warn of an allergic or idiosyncratic reaction if the product contains an ingredient to which an identifiable, appreciable number of people are allergic, and the danger is not generally known."
    },
    {
        id: 7,
        topic: "Negligence / California Toxic Exposure Substantial Factor Standard (Rutherford)",
        q: "Worker developed mesothelioma after working for 30 years in shipyards where he was exposed to airborne asbestos fibers from products manufactured by 20 different companies. Medical science established that all inhaled asbestos fibers cumulatively contributed to the cellular DNA damage causing cancer, but it was scientifically impossible to prove which specific manufacturer's fiber triggered the final malignancy. In Worker's suit under California law (Rutherford v. Owens-Illinois):",
        opts: [
            "Worker's lawsuit fails against all defendants, because Worker cannot prove which asbestos fiber was the 'but-for' cause.",
            "Worker must join 100% of all global asbestos manufacturers under the mandatory market share rules of Sindell v. Abbott Labs.",
            "Worker is restricted exclusively to workers' compensation statutory death and disability benefits against the shipyard.",
            "Worker establishes causation by proving the defendant's product was a substantial factor contributing to aggregate risk."
        ],
        ans: 3,
        exp: "In Rutherford v. Owens-Illinois, Inc. (16 Cal.4th 953), California held that in asbestos cancer cases where individual fiber causation is unprovable, the plaintiff satisfies causation by showing the defendant's product was a 'substantial factor' contributing to the aggregate dose and resulting biological risk."
    },
    {
        id: 8,
        topic: "Landowner Duty / The 'Mode of Operation' Rule in Self-Service Retail Stores",
        q: "Customer was shopping in the self-service produce section of Grocery Store, where customers routinely bagged their own slippery grapes from open bins. Customer slipped on a loose grape and broke her hip. Customer could not prove how long the grape had been on the floor before the fall. In a jurisdiction following the 'Mode of Operation' rule (and California retail slip-and-fall standards):",
        opts: [
            "Customer can establish premises liability without proving notice, because the mode of operation created continuous hazard.",
            "Customer loses as a matter of law, because premises liability strictly requires proof that the grape was on the floor for a long time.",
            "Grocery Store is strictly liable as an absolute commercial insurer of all floor safety conditions within retail establishments.",
            "Customer's claim is completely barred under the doctrine of secondary implied assumption of risk for walking in produce aisles."
        ],
        ans: 0,
        exp: "Under the 'Mode of Operation' rule, a customer in a self-service retail store is NOT required to prove that the merchant had actual or constructive notice of the specific dropped item if the merchant's chosen method of business operation inherently creates a continuous, foreseeable risk of spillage."
    },
    {
        id: 9,
        topic: "Negligence / Standard of Care for Cognitively Impaired / Mentally Disabled Adults",
        q: "Adult Driver, who had an IQ of 65 and severe chronic cognitive impairment, was operating a motor vehicle at 50 mph on a rainy highway. Because of his impaired cognitive reflexes and delayed mental processing speed, Driver failed to brake for stopped traffic and rear-ended Victim. In Victim's negligence lawsuit against Driver, Driver's mental disability:",
        opts: [
            "Lowers the applicable standard of care to that of an ordinary person with like mental capacity, intelligence, and experience.",
            "Is completely disregarded, because adult tortfeasors with mental or cognitive disabilities are held to reasonable person standards.",
            "Completely shields Driver from all civil tort liability under the common law doctrine of non compos mentis insanity immunity.",
            "Shifts legal tort liability automatically to Driver's legal guardian under the doctrine of absolute conservator vicarious liability."
        ],
        ans: 1,
        exp: "Under Restatement (Third) of Torts § 11(c) and Williams v. Kearbey, an adult defendant's mental illness or cognitive impairment is NOT taken into account in determining whether conduct is negligent; adult defendants are held strictly to the objective standard of a reasonable person of ordinary prudence."
    },
    {
        id: 10,
        topic: "Defense of Others / The Modern Reasonable Mistake Rule vs. Traditional Alter-Ego Rule",
        q: "Plainclothes Police Officer tackled Suspect to the ground on a sidewalk to execute a lawful arrest warrant. Good Samaritan walked around the corner, saw an unidentified man in street clothes wrestling Suspect to the ground with a raised knife, and reasonably and honestly believed Suspect was being murdered. Samaritan struck Officer with a heavy wooden board to protect Suspect. In Officer's battery suit against Samaritan:",
        opts: [
            "Samaritan is liable for battery under the traditional 'alter-ego' rule, because Suspect had no legal privilege to resist lawful arrest.",
            "Samaritan is strictly liable, because striking a sworn law enforcement officer carrying out official duties is a tort per se.",
            "Samaritan is privileged under the modern majority rule, because Samaritan made a reasonable, honest mistake in defense of another.",
            "Samaritan is privileged only if Suspect verbally shouted a specific request for third-party rescue assistance prior to the blow."
        ],
        ans: 2,
        exp: "Under the modern majority rule for Defense of Others (Restatement (Second) of Torts § 76), an actor is privileged to use reasonable force to defend a third person if the actor REASONABLY BELIEVES that the third person is in imminent danger of unlawful attack, even if that belief is based on an honest, reasonable mistake of fact."
    },
    {
        id: 11,
        topic: "Public Necessity / Municipal Firebreak Demolition and Eminent Domain Immunity",
        q: "A massive, uncontrolled urban conflagration was sweeping through a city, threatening to consume 5,000 homes. To save the city, Mayor ordered the Fire Department to dynamite Homeowner's expensive mansion to create a firebreak. The firebreak successfully halted the fire and saved thousands of structures. Homeowner sued Mayor and City for Trespass to Land and Conversion. Under the doctrine of Public Necessity (Surocco v. Geary):",
        opts: [
            "City is liable for the full fair market value of the mansion under the incomplete privilege doctrine of private necessity (Vincent v. Lake Erie).",
            "Homeowner is entitled to treble punitive damages under state statutory civil rights acts for the unauthorized demolition of residential real estate.",
            "Mayor and City are completely immune from all tort damages, because public necessity is an absolute privilege protecting property destruction.",
            "Mayor is personally liable for conversion unless Mayor obtained an emergency judicial search and seizure warrant prior to demolition."
        ],
        ans: 2,
        exp: "Under the doctrine of Public Necessity (Surocco v. Geary, 3 Cal. 69), when an actor destroys or damages private property to prevent an imminent public disaster or catastrophe, the privilege is ABSOLUTE and COMPLETE, and the actor is not liable for compensatory damages in tort."
    },
    {
        id: 12,
        topic: "Negligence / Proximate Cause - Thin Skull Rule vs. Unforeseeable Type of Harm (Wagon Mound)",
        q: "Factory negligently spilled a small puddle of non-flammable oil into a marine harbor. Tanker Captain threw a red-hot metal rivet into the harbor, which landed on a floating piece of cotton waste in the oil, miraculously igniting a chemical fire that destroyed Harbor's wooden dock. Undisputed scientific testimony proved that nobody could have reasonably foreseen that oil floating on cold sea water could ever be ignited. In Harbor's negligence suit against Factory (Wagon Mound No. 1):",
        opts: [
            "Factory is liable under the direct causation test of Polemis, because the fire was a direct, unbroken physical consequence of the oil discharge.",
            "Factory is not liable, because proximate causation requires that the general type of harm (fire) be a foreseeable consequence of the spill.",
            "Factory is strictly liable under the doctrine of Rylands v. Fletcher for discharging non-natural industrial oils into navigable waters.",
            "Harbor's claim is completely barred under the doctrine of primary assumption of risk for constructing wooden piers in commercial harbors."
        ],
        ans: 1,
        exp: "Under Overseas Tankship (UK) Ltd. v. Morts Dock & Engineering Co. (The Wagon Mound No. 1) and Restatement (Third) of Torts § 29, an actor's liability is limited to physical harms resulting from risks that made the conduct tortious (foreseeable TYPE of harm). Unforeseeable types of harm fall outside the scope of liability."
    },
    {
        id: 13,
        topic: "Negligence / Social Host Furnishing Car Keys to Known Intoxicated Driver",
        q: "Host hosted a residential dinner party. Guest became heavily intoxicated. When Guest prepared to leave, Host handed Guest the keys to Guest's own car, walked Guest to the driver's seat, and said: 'Drive safe.' Guest drove through an intersection at 80 mph, striking Pedestrian. In Pedestrian's negligence suit against Host in California under Civil Code § 1714:",
        opts: [
            "Host is directly liable for negligent entrustment, because handing car keys to an intoxicated adult is an independent actionable tort.",
            "Host is strictly liable under the statutory Dram Shop doctrine for aiding and abetting an impaired motor vehicle transit operation.",
            "Host is immune from civil liability under California Civil Code § 1714 social host immunity for returning a vehicle to its rightful owner.",
            "Host is liable only if Pedestrian proves Host charged an admission fee or commercial cover charge for dinner at the residence."
        ],
        ans: 2,
        exp: "Under California Civil Code § 1714 and established case law (Blake v. Moore), returning an intoxicated owner's own car keys does NOT constitute actionable Negligent Entrustment (the owner has a legal right to their own property), and social host immunity broadly shields hosts from guest vehicular crashes."
    },
    {
        id: 14,
        topic: "Landowner Duty / Landlord Duty to Protect Tenants Against Crime in Common Areas (Kline)",
        q: "Tenant leased an apartment in an urban residential complex. Over a six-month period, five tenants were assaulted and robbed at gunpoint in the unlocked, unlit common entrance lobby. Landlord knew of all five armed robberies, but refused to repair the broken front security door lock or replace burned-out lobby light bulbs. Intruder walked through the broken door and robbed Tenant at gunpoint in the lobby. In Tenant's suit against Landlord (Kline v. 1500 Mass. Ave.):",
        opts: [
            "Landlord is completely shielded from liability, because the intentional violent armed robbery was an independent superseding criminal cause.",
            "Tenant's claim is completely barred under the doctrine of secondary implied assumption of risk for leasing urban residential rental units.",
            "Landlord is strictly liable under the statutory warranty of habitability for all violent criminal acts committed on leased premises.",
            "Landlord is liable in negligence, because residential landlords owe a duty of reasonable care to maintain common areas against crime."
        ],
        ans: 3,
        exp: "Under Kline v. 1500 Massachusetts Ave. Apartment Corp. and California premises law, a residential landlord who retains control over common areas owes a duty of reasonable care to take protective measures against foreseeable criminal acts of third parties, especially where prior violent crimes put the landlord on notice."
    },
    {
        id: 15,
        topic: "Strict Products Liability / Design Defect & Open Machinery (Micallef v. Miehle Co.)",
        q: "Machinist operated a high-speed commercial printing press. In order to chase ink hickeys (a customary task), operators were required to hand-scrape rollers while moving at high RPMs. Manufacturer knew of the practice, but omitted a $30 automatic electronic interlock safety shield that would have eliminated the danger without impairing press operation. Machinist's hand was crushed. Manufacturer argued the danger was open and obvious. Under Micallef v. Miehle Co.:",
        opts: [
            "Machinist can prevail, because the open and obvious nature of a machine danger does not bar design defect liability if a safety device was omitted.",
            "Manufacturer prevails as a matter of law, because the patent and obvious danger of a moving printing roller completely negates all design duties.",
            "Machinist's claim is completely barred under the doctrine of primary assumption of risk for commercial industrial printing employment.",
            "Manufacturer is liable only under the express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 0,
        exp: "Under Micallef v. Miehle Co. (39 N.Y.2d 376) and modern California products liability law, the fact that a machine danger is open and obvious does NOT automatically relieve the manufacturer of design defect liability if the manufacturer could have feasibly eliminated the danger with a reasonable alternative safety device."
    },
    {
        id: 16,
        topic: "Strict Liability / Abnormally Dangerous Activity & Bulk Gasoline Tanker Transport",
        q: "Petroleum Co. operated a 10,000-gallon articulated gasoline tanker truck through a crowded downtown metropolitan retail shopping corridor at noon. Despite non-negligent, careful driving by the driver, a localized sinkhole collapsed under the street, causing the tanker to flip, rupture, and ignite an immense fireball that destroyed 10 storefronts. In storefront owners' strict liability lawsuit against Petroleum Co. (Siegler v. Kuhlman):",
        opts: [
            "Petroleum Co. is completely relieved of liability, because the street sinkhole collapse operated as an extraordinary Act of God superseding cause.",
            "Petroleum Co. is strictly liable, because transporting massive bulk volumes of volatile gasoline on public roads is an abnormally dangerous activity.",
            "Petroleum Co. is not liable, because the transport of gasoline is an ordinary matter of common commercial usage in modern vehicular society.",
            "Storefront owners are restricted exclusively to statutory environmental claims under the federal Comprehensive Environmental Response Act (CERCLA)."
        ],
        ans: 1,
        exp: "Under Siegler v. Kuhlman (81 Wash. 2d 748) and Restatement (Second) of Torts § 519, hauling massive bulk quantities of highly volatile and explosive materials (such as 10,000 gallons of gasoline) on public highways in urban areas involves high risk of catastrophic harm and is an Abnormally Dangerous Activity."
    },
    {
        id: 17,
        topic: "Defamation / Slander Per Se of Independent Contractor / Trade Incompetence",
        q: "Architect worked as a self-employed independent consulting building designer. Competitor verbally stated to a group of commercial real estate developers: 'Architect is completely unqualified, has zero structural engineering skills, and constantly designs buildings that collapse.' Architect proved the statements were completely false, but showed zero out-of-pocket financial loss. In Architect's slander suit against Competitor:",
        opts: [
            "Architect will lose, because spoken defamation (slander) strictly and universally requires proof of actual special pecuniary financial loss.",
            "Architect will lose, because the slander per se professional category applies exclusively to licensed medical physicians and attorneys.",
            "Architect will prevail without proving special damages, because false spoken words imputing incompetence in trade constitute slander per se.",
            "Competitor is completely protected under the absolute commercial competition privilege governing trade negotiations."
        ],
        ans: 2,
        exp: "Under common law and California Civil Code § 46, Slander Per Se allows recovery of presumed general damages without pleading or proving special damages when the spoken statement directly injures the plaintiff in respect to their office, profession, trade, or business by imputing general incompetence."
    },
    {
        id: 18,
        topic: "Privacy / Intrusion Upon Seclusion via Advanced Thermal Infrared Surveillance",
        q: "Investigator used a specialized, military-grade thermal infrared imaging scanner from a public street sidewalk to peer through the closed wooden exterior walls of Homeowner's private bedroom, recording detailed thermal imaging of Homeowner's intimate, private bodily activities without physical trespass. Homeowner discovered the recording and sued Investigator for Intrusion Upon Seclusion. Result?",
        opts: [
            "Investigator wins, because standing on a public street sidewalk looking across public airspace is protected by absolute First Amendment immunity.",
            "Investigator wins, because the tort of intrusion upon seclusion strictly requires a simultaneous physical common law trespass to real property.",
            "Homeowner is restricted exclusively to statutory eavesdropping remedies under the California Wiretap and Privacy Act.",
            "Homeowner wins, because non-physical technological surveillance into private intimate zones that is highly offensive is an actionable intrusion."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 652B and California privacy law, Intrusion Upon Seclusion does NOT require a physical trespass; it encompasses intentional non-physical technological intrusions that invade a sphere where plaintiff has a reasonable expectation of privacy in a manner highly offensive to a reasonable person."
    },
    {
        id: 19,
        topic: "Negligence / Medical Emergency Roadside Good Samaritan Statutory Immunity Limits",
        q: "Surgeon stopped at a highway crash to render emergency first aid to an injured motorist. While applying a splint, Surgeon committed simple ordinary negligence, worsening a fracture. The state has a typical Good Samaritan statute (Cal. Health & Safety Code § 1799.102). Motorist sued Surgeon for medical malpractice. Result?",
        opts: [
            "Surgeon is immune from liability, because Good Samaritan statutes shield licensed physicians rendering gratuitous roadside aid from ordinary negligence.",
            "Surgeon is liable under standard medical malpractice rules, because licensed physicians owe an unyielding national specialist standard of care at all times.",
            "Surgeon is strictly liable, because voluntary rescuers who touch bodily fractures are held to an absolute guarantee of non-injurious medical outcomes.",
            "Motorist is entitled to a directed verdict under res ipsa loquitur, because properly applied roadside splints do not worsen fractures absent malpractice."
        ],
        ans: 0,
        exp: "Under standard Good Samaritan statutes (including California Health & Safety Code § 1799.102), medical professionals and citizens who in good faith render emergency medical care at the scene of an emergency outside of a medical clinic are IMMUNE from civil liability for ordinary negligence."
    },
    {
        id: 20,
        topic: "Conversion / Pledgee Unauthorized Transfer of Stock Pledged as Collateral",
        q: "Debtor pledged 1,000 shares of stock to Lender as collateral for a 1-year loan. Prior to loan maturity and while Debtor was completely current on all payments, Lender secretly transferred the pledged stock to a third party to satisfy Lender's own unrelated corporate debts. Debtor repaid the loan in full on maturity and demanded the stock. In Debtor's suit against Lender for Conversion:",
        opts: [
            "Lender is not liable for conversion, because corporate stock shares are fungible commercial instruments that can be replaced with equivalent market shares.",
            "Lender is liable for Conversion, because unauthorized disposition or sale of pledged collateral by a bailee/pledgee constitutes conversion.",
            "Lender is liable exclusively under breach of the security contract under Article 9 of the Uniform Commercial Code, precluding all tort claims.",
            "Debtor's recovery is strictly limited to nominal statutory damages of $1.00 because Debtor suffered no lost investment dividends during the loan term."
        ],
        ans: 1,
        exp: "Under established conversion law (Restatement (Second) of Torts § 223), an unauthorized transfer, re-pledge, or sale of collateral by a pledgee/bailee before the debtor's default constitutes an actionable Conversion as a matter of law, forcing the converter to pay full fair market value."
    },
    {
        id: 21,
        topic: "Negligence / Landowner Invitee Slip-and-Fall & Constructive Notice Time Rules",
        q: "Customer was shopping in Supermarket. Customer slipped on a puddle of dark, dirty, gritty melted ice cream in the dairy aisle that contained multiple grocery cart tire tracks and footprint impressions running through it. Store manager testified that store sweep logs had not been signed or inspected for four hours. In Customer's premises negligence lawsuit against Supermarket (Ortega v. Kmart Corp.):",
        opts: [
            "Customer loses as a matter of law, because premises liability strictly requires direct eyewitness testimony identifying the exact second the ice cream dropped.",
            "Supermarket is strictly liable as an absolute commercial insurer of all floor cleanliness under municipal public health retail licensing codes.",
            "Customer can establish constructive notice through circumstantial physical evidence showing the hazard existed for a sufficient duration.",
            "Customer's claim is completely barred under the doctrine of secondary implied assumption of risk for shopping in self-service grocery dairy aisles."
        ],
        ans: 2,
        exp: "Under Ortega v. Kmart Corp. (26 Cal.4th 1200), a plaintiff in a premises slip-and-fall action can establish constructive notice through circumstantial evidence—such as the condition of the substance (dirty, tracked through) or failure to inspect for an extended period—permitting the jury to infer sufficient duration."
    },
    {
        id: 22,
        topic: "Strict Products Liability / Component Part Manufacturers & Non-Defective Raw Glass",
        q: "Glass Co. manufactured flat, non-defective commercial tempered glass panes according to standard industry dimensions and sold 500 panes to Table Corp. Table Corp. incorporated the glass into an outdoor patio table using an unstable, defectively designed frame that placed uneven torsional stress on the glass, causing a pane to shatter and injure Consumer. Glass Co. had no role in designing the table. In Consumer's strict products liability suit:",
        opts: [
            "Glass Co. is strictly liable, because all commercial component suppliers in the chain of distribution are strictly liable for finished product failures.",
            "Glass Co. is liable under the consumer expectation test, because ordinary consumers do not expect tempered patio table glass to shatter under torsion.",
            "Glass Co. is strictly liable under the statutory express warranty provisions of Article 2 of the Uniform Commercial Code.",
            "Glass Co. is not strictly liable under the Component Parts Doctrine, because the raw glass pane was not defective when it left Glass Co.'s custody."
        ],
        ans: 3,
        exp: "Under the Component Parts Doctrine (Restatement (Third) of Torts: Products Liability § 5 / Jimenez v. Superior Court), a component part manufacturer is NOT strictly liable for defects in a finished integrated product if the component itself was non-defective when supplied and the component maker did not participate in integrating it into the defective design."
    },
    {
        id: 23,
        topic: "Assault / Imminence & Threat of Future Harm Coupled with Weapon Display",
        q: "Defendant confronted Victim in a restaurant, pointed a large hunting knife at Victim's face from two inches away, and snarled: 'If you don't pay me the $500 you owe me by tomorrow at 5:00 PM, I will slit your throat with this knife.' Victim felt terrified. In Victim's civil tort action against Defendant for Assault:",
        opts: [
            "Victim will prevail, because pointing a deadly weapon at a victim's face creates reasonable apprehension of immediate bodily contact despite future words.",
            "Defendant will prevail, because explicit threats of future harm (tomorrow at 5:00 PM) negate the required imminence of assault as a matter of law.",
            "Defendant will prevail, because words alone accompanied by conditional payment demands cannot constitute an actionable assault.",
            "Victim will prevail exclusively under the tort of intentional infliction of emotional distress for verbal harassment in public restaurants."
        ],
        ans: 0,
        exp: "Where defendant's words threatening future harm are accompanied by an overt physical act demonstrating immediate capability of violence (holding a knife two inches from the victim's face), the physical act creates reasonable apprehension of immediate battery, satisfying Assault."
    },
    {
        id: 24,
        topic: "Negligence / Sudden Emergency Doctrine in Motor Vehicle Operations",
        q: "Driver was operating her vehicle with ordinary care at 45 mph on a rural highway. Suddenly, a 500-pound wild deer leaped out of dense brush directly in front of Driver's bumper. Confronted with immediate sudden peril, Driver instinctively swerved into the oncoming lane and sideswiped Motorist. Driver raised the Emergency Doctrine. In Motorist's negligence suit against Driver:",
        opts: [
            "Driver is strictly liable, because crossing the center dividing line of a highway constitutes negligence per se that admits no emergency excuses.",
            "Driver is judged by how a reasonable person would react when confronted with sudden emergency peril not created by the driver's own neglect.",
            "Driver is completely immune from civil liability under the statutory wildlife collision governmental immunity acts.",
            "Motorist is entitled to a directed verdict under res ipsa loquitur, because rural highway collisions do not occur absent driver operational neglect."
        ],
        ans: 1,
        exp: "Under the Sudden Emergency Doctrine (Restatement (Third) of Torts § 15 / Leo v. Dunham), an actor who is confronted with a sudden, unexpected emergency peril not of their own making is judged by whether their reaction was reasonable under the emergency circumstances."
    },
    {
        id: 25,
        topic: "Strict Liability / Assumption of Risk Defense to Abnormally Dangerous Activities",
        q: "Toxic Corp. conducted highly dangerous commercial fumigation of a grain warehouse using lethal cyanide gas, posting skull-and-crossbones warning signs at all exits. Employee of an independent pest control company, fully certified in fumigation risks, deliberately climbed through a marked warning barrier into the fumigation chamber without wearing his required gas mask to retrieve his personal sunglasses, suffering severe lung injury. In Employee's strict liability suit:",
        opts: [
            "Toxic Corp. is held 100% strictly liable without defense, because common law strict liability completely bars all affirmative defenses.",
            "Employee is entitled to a directed verdict, because commercial cyanide fumigation carries non-delegable absolute public enterprise liability.",
            "Toxic Corp. is not liable, because Employee knowingly and unreasonably subjected himself to the known danger (Secondary Assumption of Risk).",
            "Toxic Corp. is liable only for economic damages under California Proposition 51 proportional fault allocation rules."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 523, the plaintiff's ASSUMPTION OF THE RISK (knowingly, voluntarily, and unreasonably encountering the specific known danger of an ultrahazardous activity) operates as an affirmative defense reducing or barring recovery under comparative fault."
    }
];