const examData = [
    {
        id: 1,
        topic: "Defamation / Constitutional Actual Malice in Fabricated Direct Quotations (Masson)",
        fp: "Journalist conducted a taped audio interview with Psychoanalyst, a public figure. During the interview, Psychoanalyst stated: 'I took an intellectual approach to clinical supervision.' When publishing the profile in a national magazine, Journalist enclosed words in quotation marks falsely stating Psychoanalyst said: 'I was an intellectual gigolo who seduced my students.' Journalist admitted altering the words, knowing Psychoanalyst never used the word 'gigolo.' Psychoanalyst sued for Defamation.",
        q: "Under the First Amendment doctrine of Masson v. New Yorker Magazine, Psychoanalyst can establish Constitutional Actual Malice if:",
        opts: [
            "Any alteration of direct quotation marks occurred, because quotation marks create an irrebuttable presumption of malice.",
            "Journalist harbored common-law ill will, personal spite, and professional jealousy toward Psychoanalyst.",
            "The alteration resulted in a material change in the meaning conveyed by the statement.",
            "The national magazine failed to retract the quotation within 20 days under California Civil Code § 48a."
        ],
        ans: 2,
        exp: "Under Masson v. New Yorker Magazine, Inc. (501 U.S. 496), the deliberate alteration of the words contained within quotation marks does NOT constitute constitutional actual malice unless the alteration results in a MATERIAL CHANGE in the meaning conveyed by the statement that makes it defamatory."
    },
    {
        id: 2,
        topic: "Vicarious Liability / Borrowed Servant Doctrine & Right of Authoritative Control",
        fp: "Crane Co. leased a heavy hydraulic crane along with its regular certified operator, Crane Operator, to General Contractor for a commercial skyscraper construction project. Under the lease contract, General Contractor had exclusive authority to direct every lift, determine swing paths, and control minute-by-minute crane operations on the site. Due to Operator's negligent swing directed by Contractor's foreman, a steel girder struck Passerby.",
        q: "Under the Borrowed Servant Doctrine, which entity is vicariously liable for Operator's negligence?",
        opts: [
            "Crane Co. exclusively, because general employers cannot delegate respondeat superior liability to third-party lessees.",
            "General Contractor, because General Contractor possessed the authoritative right of detailed operational control over the work.",
            "Neither entity, because heavy equipment operators are classified as independent professional contractors.",
            "Both entities strictly and equally under mandatory fifty-percent statutory joint enterprise allocation rules."
        ],
        ans: 1,
        exp: "Under the Borrowed Servant / Dual Employment Doctrine (Kowalski v. Shell Oil / Marsh v. Tilley Steel), when a general employer leases an employee to a borrowing employer, liability shifts to the borrowing employer if the borrowing employer possesses the authoritative right to direct and supervise the detailed manner and method of the specific performance."
    },
    {
        id: 3,
        topic: "Battery / Emergency Consent Overriding Relative's Objection for Incompetent Adult",
        fp: "Adult Patient suffered massive head trauma in a car accident and was rushed into an emergency room unconscious and bleeding fatally from an intracranial hematoma. Immediate surgery was vital to prevent death within minutes. Patient had never executed an advance healthcare directive. Patient's adult Brother, who held no power of attorney, stood in the hallway screaming: 'Do not touch him, my religion forbids all surgery!' Surgeon operated, saving Patient's life. Brother sued Surgeon for Battery on Patient's behalf.",
        q: "In an action against Surgeon for Battery on behalf of Patient:",
        opts: [
            "Surgeon is privileged under the emergency medical doctrine, because an informal relative cannot veto life-saving emergency care for an unconscious adult with no known prior refusal.",
            "Surgeon is liable for Battery, because an immediate family member's contemporaneous verbal refusal terminates implied emergency consent.",
            "Surgeon is liable for Battery, but recovery is capped at nominal damages under California medical injury tort reform statutes.",
            "Surgeon is immune from liability only if Surgeon obtained telephonic authorization from a probate court referee."
        ],
        ans: 0,
        exp: "In medical emergencies where an adult patient is unconscious and immediate intervention is necessary to preserve life, consent is implied by law. A relative who holds no legal guardianship or durable power of attorney cannot veto life-saving emergency treatment unless the physician has notice that the patient personally held prior express religious objections."
    },
    {
        id: 4,
        topic: "Negligence / Loss of Chance in Medical Diagnostic Omission (Dumas v. Cooney)",
        fp: "Physician negligently misread Patient's chest radiograph, failing to diagnose early-stage lung cancer. When correctly diagnosed 18 months later, the cancer had metastasized. Undisputed expert oncology testimony established that timely diagnosis would have provided Patient with a 40% chance of 5-year survival, but the delay reduced that chance to 10% (a 30% lost chance). In Patient's medical negligence action under California law (Dumas v. Cooney):",
        opts: [
            "Patient recovers 30% of total wrongful death damages under the proportional loss of chance allocation doctrine.",
            "Patient recovers 100% full damages, because delayed diagnostic oncology creates a conclusive presumption of causation.",
            "Patient's claim is governed by pure comparative fault allocation between underlying cancer biology and physician error.",
            "Patient cannot recover, because California requires proof to a reasonable medical probability that but for the negligence Patient more likely than not (>50%) would have survived."
        ],
        ans: 3,
        exp: "In Dumas v. Cooney (235 Cal.App.3d 1593) and subsequent California Supreme Court decisions, California rejected the proportional 'loss of chance' doctrine. A plaintiff must establish traditional proximate causation by proving a 'reasonable medical probability' (>50% chance) that the defendant's omission caused the death/injury."
    },
    {
        id: 5,
        topic: "Strict Products Liability / Substantial Post-Sale Alteration & Foreseeability Limits",
        fp: "Machinery Corp. manufactured a commercial punch press equipped with a permanently integrated dual-palm safety trigger requiring both hands on the console to cycle the press. Buyer completely rewired the electrical circuitry, sawed off the secondary palm trigger, and installed a foot pedal to double production speed. Five years later, Worker accidentally stepped on the foot pedal while clearing a jam, crushing a hand. In Worker's strict products liability suit against Machinery Corp.:",
        opts: [
            "Machinery Corp. is strictly liable under the consumer expectation test, because punch presses should not crush hands.",
            "Machinery Corp. is not liable, because sawing off safety controls and rewiring circuitry constitutes a substantial, unforeseeable alteration.",
            "Machinery Corp. is strictly liable, because commercial machine makers must engineer presses that cannot be modified.",
            "Machinery Corp. is liable only under the express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under California law and Restatement (Third) of Torts: Products Liability § 2, a manufacturer is not strictly liable for design defect where the product has undergone a substantial, material alteration or modification after leaving the manufacturer's control, and that alteration was not reasonably foreseeable."
    },
    {
        id: 6,
        topic: "Nuisance / California Right to Farm Act & Changed Conditions (Cal. Civ. Code § 3482.5)",
        fp: "Dairy Farm operated a lawful, continuous commercial dairy in an agricultural county for 15 years without complaint. City expanded its municipal borders, and Developer built a luxury residential subdivision directly adjacent to the dairy. Homeowners sued Dairy Farm for Private Nuisance based on manure odors and flies. Dairy Farm proved its operations complied with all agricultural customs and had not changed in 15 years. Under California Civil Code § 3482.5 (Right to Farm Act):",
        opts: [
            "Homeowners prevail, because residential zoning expansions automatically terminate prior agricultural operating rights.",
            "Dairy Farm is protected from nuisance liability, because an agricultural operation operating over 3 years without change is not a nuisance due to changed locality conditions.",
            "The court must issue an injunction shutting down Dairy Farm, but require Homeowners to pay full commercial relocation indemnity (Spur).",
            "Dairy Farm is strictly liable under the doctrine of Rylands v. Fletcher for the non-natural accumulation of biological manure."
        ],
        ans: 1,
        exp: "Under California Civil Code § 3482.5 (California's Right to Farm Act), no agricultural activity or commercial farming operation conducted in accordance with accepted customs that has been in operation for more than three years shall be or become a nuisance due to any changed condition in the locality."
    },
    {
        id: 7,
        topic: "False Imprisonment / Confinement via Threats of Immediate Physical Harm to Family",
        fp: "Extortionist approached Executive on a downtown sidewalk, pointed to a live surveillance video on a tablet showing an armed gunman holding Executive's 6-year-old Child at gunpoint inside a van around the corner, and stated: 'If you take one step away from this park bench before 5:00 PM, my partner will shoot your child.' Executive remained on the park bench for three hours in terror. In Executive's suit for False Imprisonment:",
        opts: [
            "Extortionist will prevail, because an open park bench in an outdoor park has unrestricted physical avenues of foot egress.",
            "Executive will prevail, because confinement can be accomplished by submission to explicit threats of immediate deadly force against close family members.",
            "Extortionist will prevail, because the tort of false imprisonment requires physical locking of doors or immediate direct battery against the plaintiff.",
            "Executive is restricted exclusively to an action for intentional infliction of emotional distress."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 40A, confinement for False Imprisonment may be brought about by submission to a threat of immediate physical force directed against the plaintiff, the plaintiff's property, OR members of the plaintiff's immediate family."
    },
    {
        id: 8,
        topic: "IIED / Extreme and Outrageous Harassment by Commercial Creditors",
        fp: "Auto Lender sought to repossess Debtor's car following one missed $200 payment. Knowing Debtor was an observant Orthodox rabbi, Lender sent agents to Debtor's synagogue during Yom Kippur holy services to loudly scream anti-Semitic slurs, throw pork products onto the altar, and shout that Debtor was a thief in front of the entire congregation. Debtor suffered an acute cardiac crisis and severe psychiatric trauma.",
        q: "In Debtor's action against Auto Lender for Intentional Infliction of Emotional Distress (IIED):",
        opts: [
            "Lender will prevail, because commercial creditors enjoy broad constitutional privileges to demand payment of legitimate delinquent debts.",
            "Debtor will lose, because the exclusive remedies for repossession disputes are governed by Uniform Commercial Code Article 9.",
            "Debtor will prevail, because deliberately desecrating a religious service with egregious slurs to collect a debt is extreme and outrageous conduct.",
            "Debtor will prevail only if Debtor proves Lender committed a simultaneous physical battery against Debtor's person."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 46 and California law, while creditors have a right to collect debts, resorting to egregious, highly abusive, public religious desecration and harassment exceeds all possible bounds of decency tolerated in a civilized community, supporting IIED."
    },
    {
        id: 9,
        topic: "Strict Liability / Abnormally Dangerous Activities & Third-Party Unforeseeable Tampering",
        fp: "Chemical Co. stored 20,000 gallons of ultra-toxic fumigation gas in state-of-the-art welded pressure tanks inside a secure industrial facility. International Terrorists detonated military-grade armor-piercing plastic explosives against the tank walls to deliberately release the poison cloud over an adjacent city. In a strict liability action by injured residents against Chemical Co. under Restatement (Second) of Torts § 522:",
        opts: [
            "Chemical Co. is not strictly liable, because the intentional, unforeseeable criminal act of third-party terrorists was a superseding cause.",
            "Chemical Co. is strictly liable, because commercial enterprises that store ultrahazardous chemicals bear absolute non-delegable risk allocation.",
            "Chemical Co. is liable only if residents prove Chemical Co. failed to maintain armed surface-to-air anti-missile defense batteries.",
            "Residents are restricted exclusively to statutory claims under the federal Comprehensive Environmental Response Act (CERCLA)."
        ],
        ans: 0,
        exp: "Under modern strict liability principles (Restatement (Third) of Torts: Physical & Emotional Harm § 24 cmt. d / California law), strict liability for an abnormally dangerous activity does NOT apply when the harm is brought about by the unexpectable, intentional, criminal intervention of a third party (such as a terrorist bombing) that the defendant had no reason to anticipate."
    },
    {
        id: 10,
        topic: "Conversion / Digital Cryptocurrency Smart Contract Exploit & Bailee Duty",
        fp: "Cryptocurrency Exchange held 500 Ethereum tokens in a digital custodial wallet for Client. Exchange's chief technology officer discovered a software loophole in the platform's smart contract, exploited the code without Client's knowledge, and transferred Client's tokens into an untraceable offshore private blockchain mixer for personal gain. Client sued Exchange for Conversion. Exchange argued blockchain smart contracts are non-tangible software algorithms.",
        q: "In Client's action for Conversion against Cryptocurrency Exchange:",
        opts: [
            "Exchange will prevail, because conversion is strictly limited to tangible macroscopic physical chattels.",
            "Client is restricted exclusively to an equitable action for constructive trust and unjust enrichment.",
            "Client will prevail, because cryptocurrency assets merged into unique cryptographic digital ledgers are subject to conversion.",
            "Exchange will prevail under the commercial bona fide purchaser for value defense governing digital assets."
        ],
        ans: 2,
        exp: "Under modern conversion doctrine (Kremen v. Cohen) and California law, intangible property rights (such as digital tokens, cryptocurrency balances, and electronic accounts) that are capable of precise definition and exclusive control are personal property fully subject to the tort of Conversion."
    },
    {
        id: 11,
        topic: "Negligence / Primary Assumption of Risk & Inherent Risks in Extreme Sports",
        fp: "Skier hired Mountain Guide for a backcountry extreme heli-skiing excursion on unpatrolled wilderness slopes. Guide checked official avalanche forecasts, tested snowpack stability, selected a moderate route, and carried emergency beacons. While descending, a naturally occurring, unpreventable subsurface slab avalanche released, sweeping Skier into trees and fracturing Skier's leg. Skier sued Guide for negligence. Under California law (Knight v. Jewett):",
        opts: [
            "Guide is protected under Primary Assumption of the Risk, because naturally occurring avalanches are inherent risks of backcountry wilderness skiing that Guide did not increase.",
            "Guide is strictly liable under commercial bailment rules for leasing hazardous alpine recreation services.",
            "Guide is liable in negligence, because professional mountain guides owe an absolute non-delegable warranty of safety to commercial clients.",
            "Skier's claim is governed by pure comparative fault, reducing Skier's recovery in proportion to Skier's percentage of fault."
        ],
        ans: 0,
        exp: "Under California's Primary Assumption of the Risk doctrine (Knight v. Jewett), a defendant owes no legal duty to protect a participant from risks inherent in an active sport or wilderness recreation, provided the defendant did not increase the inherent risks beyond those naturally present in the sport."
    },
    {
        id: 12,
        topic: "Landowner Duty / Open & Obvious Hazard with Foreseeable Visual Distraction",
        fp: "Retail Store maintained an open 6-inch raised concrete electrical junction box painted matte black directly in the main checkout aisle. Flashing neon video advertisement screens displaying sales discounts hung from the ceiling directly above the junction box. Customer, watching the flashing video screens, tripped over the junction box and fractured a shoulder. Store defended on grounds the box was open and obvious.",
        q: "In Customer's premises liability action against Retail Store under California law:",
        opts: [
            "Store is completely immune, because open and obvious physical hazards relieve commercial landowners of all duties of care.",
            "Customer is barred from recovery under primary assumption of risk for walking inside commercial retail shopping aisles.",
            "Store is liable, because a landowner remains liable for obvious hazards where the owner should anticipate that invitees will be distracted by displays.",
            "Store is strictly liable under commercial premises safety rules for maintaining electrical boxes inside retail stores."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 343A and California premises liability law, an open and obvious condition does NOT relieve a possessor of land of duty if the possessor should anticipate the harm—such as when the landowner has reason to expect that the invitee's attention may be distracted by overhead visual marketing displays."
    },
    {
        id: 13,
        topic: "Negligence Per Se / Universal Industry Non-Compliance vs. Statutory Command",
        fp: "A state maritime safety statute required all commercial fishing vessels to carry an automated emergency satellite beacon. Vessel Owner failed to install the beacon. The vessel sank in a storm, and Crew Member was lost at sea. Vessel Owner proved that 95% of commercial fishing boats in the harbor routinely ignored the statute and that industry custom was to sail without beacons. In the wrongful death suit against Vessel Owner:",
        opts: [
            "Vessel Owner is completely exonerated, because complying with universal local industry custom establishes ordinary reasonable care.",
            "Vessel Owner is liable under Negligence Per Se, because custom cannot override an unambiguous statutory safety command.",
            "Vessel Owner is strictly liable under the doctrine of Rylands v. Fletcher for launching vessels on navigable public waters.",
            "Crew Member's claim is barred under primary assumption of risk for accepting commercial maritime employment."
        ],
        ans: 1,
        exp: "Under The T.J. Hooper and Negligence Per Se doctrine, adherence to an industry custom of non-compliance or universal neglect is NO DEFENSE to the violation of an unambiguous public safety statute enacted to prevent the specific harm that occurred."
    },
    {
        id: 14,
        topic: "Res Ipsa Loquitur / Latent Metallurgical Manufacturing Defect (Ybarra Limits)",
        fp: "During an orthopedic hip replacement surgery, Surgeon used a brand-new surgical steel bone chisel straight from the manufacturer's sealed sterile packaging. While Surgeon applied light, standard manual pressure with a rubber mallet, the chisel spontaneously snapped in half due to an undetectable internal microscopic metallurgical air bubble formed at the factory, lacerating Patient's femoral artery. Patient sued Surgeon under Res Ipsa Loquitur.",
        q: "In Patient's malpractice action against Surgeon:",
        opts: [
            "Res ipsa loquitur applies automatically under Ybarra v. Spangard to shift the burden of proof to Surgeon.",
            "Surgeon is strictly liable as an absolute commercial distributor of all surgical steel instruments used during operations.",
            "Res ipsa loquitur does not apply against Surgeon, because the failure was caused by a latent manufacturing defect outside Surgeon's control.",
            "Patient is entitled to a directed verdict under the doctrine of non-delegable operating room safety duties."
        ],
        ans: 2,
        exp: "Res Ipsa Loquitur requires that the accident be of a kind that ordinarily does not occur in the absence of NEGLIGENCE BY THE DEFENDANT. Where an instrument fails due to a latent internal manufacturing flaw undetectable upon reasonable visual inspection, the surgeon was not negligent, and res ipsa loquitur is inapplicable against the surgeon."
    },
    {
        id: 15,
        topic: "Strict Products Liability / Raw Bulk Commodity Exemption (Bulk Supplier Doctrine)",
        fp: "Sand Corp. mined and sold standard, non-defective commercial raw silica sand in 100-ton rail cars to Foundry. Foundry used the raw sand to make industrial molds using an unventilated high-pressure casting process that generated fine silica dust, causing Worker to develop silicosis. Sand Corp. provided standard industrial safety data sheets to Foundry. In Worker's strict products liability design defect suit against Sand Corp.:",
        opts: [
            "Sand Corp. is not strictly liable under the Raw Materials / Bulk Supplier Doctrine, because the raw sand was non-defective when supplied.",
            "Sand Corp. is strictly liable, because all commercial raw material suppliers in the stream of commerce bear non-delegable product safety duties.",
            "Sand Corp. is liable under the consumer expectation test, because industrial workers do not expect raw silica sand to cause lung disease.",
            "Sand Corp. is strictly liable under the statutory express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 0,
        exp: "Under the Raw Materials / Bulk Supplier Doctrine (Restatement (Third) of Torts: Products Liability § 5), a commercial supplier of a raw commodity or bulk material (like sand, gravel, or timber) that is not itself defective is NOT strictly liable for injuries resulting from the downstream manufacturing process designed by the purchaser."
    },
    {
        id: 16,
        topic: "Defamation / Libel Per Quod & Pleading Special Damages in California",
        fp: "Newspaper printed a brief social notice stating: 'Doctor gave birth to a healthy baby girl yesterday at City Hospital.' The statement was innocent on its face. However, members of Doctor's private conservative church knew from extrinsic facts that Doctor had been married for only four months, leading them to believe Doctor had engaged in premarital sex. Doctor suffered hurt feelings and social snubbing, but lost zero employment income or out-of-pocket money. Doctor sued Newspaper for Libel.",
        q: "In Doctor's libel action against Newspaper under California Civil Code § 45a:",
        opts: [
            "Doctor will prevail, because any written statement published in a newspaper constitutes libel per se allowing presumed general damages.",
            "Doctor will lose, because the statement is libel per quod requiring extrinsic facts, which mandates pleading and proof of actual special damages.",
            "Newspaper is strictly liable, because commercial print publishers warrant the absolute factual truth of all birth announcements.",
            "Doctor will prevail under false light invasion of privacy without demonstrating actual out-of-pocket financial loss."
        ],
        ans: 1,
        exp: "Under California Civil Code § 45a, if a published statement is innocent on its face and defamatory only by reference to extrinsic facts (Libel Per Quod), the plaintiff CANNOT recover unless they plead and prove special damages (actual out-of-pocket pecuniary losses). Hurt feelings or social snubbing alone do not suffice."
    },
    {
        id: 17,
        topic: "Privacy / Right of Publicity Statutory Exemption for Historical Biography (Cal. Civ. Code § 3344.1)",
        fp: "Biographer wrote an in-depth, unauthorized historical biographical book regarding the life of Famous Politician who died five years earlier. The front book cover prominently displayed an authentic, truthful photograph of Politician giving a historic speech. Politician's Estate sued Biographer for Commercial Misappropriation under California Civil Code § 3344.1. Result?",
        opts: [
            "Estate will prevail, because using a deceased personality's photographic likeness on commercial merchandise sold for profit is actionable per se.",
            "Biographer will prevail, because California Civil Code § 3344.1 explicitly exempts expressive, historical, and biographical books from right of publicity claims.",
            "Estate will prevail, because unauthorized post-mortem biographies require prior express written consent from surviving heirs.",
            "Biographer will prevail only if Biographer remitted at least fifty percent of book royalties to Politician's surviving heirs."
        ],
        ans: 1,
        exp: "Under California Civil Code § 3344.1(a)(2) and First Amendment principles, the statutory Right of Publicity does NOT apply to the use of a deceased personality's name, voice, signature, photograph, or likeness in connection with any news, public affairs, sports broadcast, or biographical/historical book."
    },
    {
        id: 18,
        topic: "Economic Torts / Intentional Interference with Prospective Advantage (Independently Wrongful Act)",
        fp: "Bakery A and Bakery B were competing to secure an exclusive multi-year contract to supply bread to a major supermarket chain, with Bakery A's contract signing imminent. To secure the contract, Bakery B bribed the supermarket's purchasing director with $50,000 in cash (a criminal commercial bribery misdemeanor). The supermarket awarded the contract to Bakery B. Bakery A sued Bakery B for Intentional Interference with Prospective Economic Advantage.",
        q: "In Bakery A's action against Bakery B under California law (Korea Supply Co. v. Lockheed Martin):",
        opts: [
            "Bakery A will lose, because the privilege of commercial competition protects aggressive pricing and vendor negotiations.",
            "Bakery A will prevail, because Bakery B intentionally disrupted the prospective relationship through independently wrongful conduct (commercial bribery).",
            "Bakery A will lose, because prospective business negotiations do not create legally enforceable property rights.",
            "Bakery A is restricted exclusively to an action for breach of the implied covenant of good faith and fair dealing."
        ],
        ans: 1,
        exp: "Under California law (Korea Supply Co. v. Lockheed Martin Corp. / Della Penna), Intentional Interference with Prospective Economic Advantage requires that the defendant's conduct be 'independently wrongful'—proscribed by some constitutional, statutory, regulatory, or other legal standard (such as criminal commercial bribery) beyond the interference itself."
    },
    {
        id: 19,
        topic: "Joint Tortfeasors / Proposition 51 Several Liability for Negligent Co-Defendant with Intentional Assailant",
        fp: "Bar Patron was assaulted in a commercial nightclub parking lot by Assailant (who committed intentional battery, 80% at fault) and Nightclub (which was negligent in failing to provide parking lot security guards despite prior assaults, 20% at fault). Patron proved $50,000 in economic damages and $300,000 in non-economic pain and suffering damages. Assailant is completely insolvent. Under California Civil Code § 1431.2 (Proposition 51):",
        opts: [
            "Nightclub is liable for $350,000, because California joint and several liability applies to all damages when an intentional tortfeasor is joined.",
            "Nightclub is liable for $70,000, representing 20% of the total aggregate personal injury judgment ($350,000 x 20%).",
            "Nightclub is liable for $110,000, consisting of 100% of economic damages ($50,000) plus Nightclub's 20% several share of non-economic damages ($60,000).",
            "Nightclub is completely discharged from non-economic damages under statutory commercial premises security safe harbors."
        ],
        ans: 2,
        exp: "Under California Civil Code § 1431.2 (Proposition 51 / Thomas v. Duggins Construction Co.), a negligent defendant's liability for economic damages remains joint and several (100% of $50,000 = $50,000), while liability for non-economic damages is several only, limited strictly to its percentage of fault (20% of $300,000 = $60,000). Total recoverable from Nightclub = $110,000."
    },
    {
        id: 20,
        topic: "NIED / Direct Victim Status via Contractual Undertaking (Molien / Burgess)",
        fp: "Diagnostic Laboratory contracted with Pregnant Patient to perform genetic chromosomal testing on an amniocentesis sample to detect Down syndrome. Laboratory technicians negligently contaminated the sample, misread the test as completely normal, and assured Patient her fetus was healthy. Patient gave birth to a child with severe genetic anomalies and suffered severe emotional distress. In Patient's NIED action against Laboratory under California law:",
        opts: [
            "Patient can recover as a Direct Victim, because Laboratory breached an independent duty of care assumed directly to Patient under contract.",
            "Patient cannot recover, because Patient was not present at the laboratory to witness the sample contamination contemporaneously.",
            "Patient is restricted exclusively to an action for breach of contract, capping recovery at the laboratory testing fee.",
            "Patient cannot recover without proving physical impact or bodily injury resulting directly from the diagnostic report."
        ],
        ans: 0,
        exp: "Under California law (Molien v. Kaiser / Burgess v. Superior Court), where a defendant enters a direct contractual relationship or professional undertaking to perform specialized diagnostic healthcare services for a patient, breach causing severe emotional distress permits Direct Victim NIED recovery without physical impact or bystander observation."
    },
    {
        id: 21,
        topic: "Assault / Physical Blocking of Egress with Threatening Weapon",
        fp: "Defendant cornered Victim in an unlit dead-end alley, pulled a 10-inch machete, blocked the only exit from two feet away, and shouted: 'If you try to squeeze past me in the next five minutes, I will chop your arm off.' Victim experienced acute terror and froze. In Victim's civil action against Defendant for Assault:",
        opts: [
            "Defendant will prevail, because the spoken words threatened conditional conduct in the future rather than present battery.",
            "Victim will prevail, because holding a deadly weapon while physically blocking the only means of egress creates reasonable apprehension of immediate battery.",
            "Defendant will prevail, because words alone without an active physical striking motion cannot constitute assault.",
            "Victim will prevail only under false imprisonment, capping damages at nominal statutory confinement penalties."
        ],
        ans: 1,
        exp: "Assault is established when an actor intentionally causes reasonable apprehension of immediate harmful or offensive contact. Where a defendant brandishes a deadly weapon and physically blocks the only avenue of escape while issuing a threatening conditional demand, the overt physical act creates immediate apprehension of battery."
    },
    {
        id: 22,
        topic: "Trespass to Land / Microscopic Nanoparticle Invasions & Actual Physical Damage (Wilson v. Interlake Steel)",
        fp: "Factory emitted microscopic, invisible industrial chemical airborne fumes that drifted across the property line over Neighbor's residential yard. The fumes produced a faint odor for two hours, but caused zero physical damage to the soil, vegetation, structures, or health of any person. Neighbor sued Factory for intentional Trespass to Land.",
        q: "In Neighbor's trespass action against Factory under California law (Wilson v. Interlake Steel):",
        opts: [
            "Neighbor will prevail, because any unauthorized physical invasion of molecules across a boundary constitutes trespass per se.",
            "Factory is strictly liable under the doctrine of Rylands v. Fletcher for emitting non-natural gaseous molecules into the air.",
            "Neighbor will lose, because an intangible or microscopic airborne invasion does not constitute a trespass unless it causes actual physical damage to the property.",
            "Neighbor is entitled to an automatic permanent injunction under the California Environmental Quality Act."
        ],
        ans: 2,
        exp: "Under California law (Wilson v. Interlake Steel Co., 32 Cal.3d 229), while macroscopic physical entry constitutes trespass per se without damage, an airborne, invisible, or microscopic invasion (such as noise, vibrations, or non-damaging particulate gases) is actionable as Trespass to Land ONLY if the plaintiff proves actual physical damage to the property (otherwise the remedy sounds exclusively in Nuisance)."
    },
    {
        id: 23,
        topic: "Vicarious Liability / Respondeat Superior for Intentional Torts of Security Bouncers",
        fp: "Nightclub hired Bouncer to check IDs and maintain order, instructing Bouncer in writing to use 'courtesy and never use physical force.' Customer got into a verbal dispute with Bouncer regarding an expired ID. Enraged, Bouncer punched Customer in the jaw, shattering teeth. Customer sued Nightclub under respondeat superior. Nightclub argued Bouncer violated explicit written corporate safety rules.",
        q: "In Customer's action against Nightclub under California respondeat superior law (Mary M. v. City of Los Angeles):",
        opts: [
            "Nightclub is not liable, because an employee's deliberate violation of express written safety instructions terminates agency.",
            "Nightclub is not liable, because employers are categorically immune from intentional assault torts committed by employees.",
            "Nightclub is vicariously liable, because Bouncer's tortious use of force was engendered by and arose out of the performance of his assigned duties.",
            "Nightclub is strictly liable under commercial retail enterprise liability as an absolute guarantor of customer physical safety."
        ],
        ans: 2,
        exp: "Under California law (Mary M. v. City of Los Angeles, 54 Cal.3d 202 / Lisa M. v. Henry Mayo), an employer is vicariously liable for the intentional torts of an employee if the tort was engendered by or arose out of the employment duties (such as maintaining order and checking IDs at a door), even if the employee violated express instructions."
    },
    {
        id: 24,
        topic: "Strict Liability / Domestic Animals with Known Vicious Propensities & Provocation Defense",
        fp: "Dog Owner kept a domestic mastiff known to be vicious toward strangers. Trespassing Neighbor climbed a 6-foot locked chain-link fence into Dog Owner's private backyard, approached the leashed dog, and intentionally struck the dog in the face with a heavy wooden 2x4 board. The enraged dog broke its steel chain and bit Neighbor's arm. Neighbor sued Dog Owner in Strict Liability.",
        q: "In Neighbor's strict liability suit against Dog Owner:",
        opts: [
            "Dog Owner is held 100% strictly liable without defense, because keeping a known vicious animal carries absolute strict liability.",
            "Dog Owner is not strictly liable, because intentionally provoking a domestic animal by striking it operates as a complete defense.",
            "Neighbor is entitled to a directed verdict under the mandatory provisions of California Civil Code § 3342.",
            "Dog Owner is liable only for economic damages under California Proposition 51 proportional fault allocation rules."
        ],
        ans: 1,
        exp: "Under common law strict liability for dangerous animals (Restatement (Second) of Torts § 515) and California law, while contributory negligence is not a defense, the plaintiff's intentional and unreasonable PROVOCATION of the animal (such as physically striking it with a board) constitutes assumption of risk / intentional provocation that bars or reduces strict liability."
    },
    {
        id: 25,
        topic: "Joint Tortfeasors / Proposition 51 (Civil Code § 1431.2) - Intentional Assault vs. Negligent Security",
        fp: "Mall Shopper was assaulted in a commercial mall common corridor by Mugger (who intentionally stabbed Shopper, 80% at fault) and Mall Owner (which negligently failed to repair corridor lighting, 20% at fault). Shopper suffered $100,000 in economic damages and $500,000 in non-economic damages. Mugger is completely insolvent and bankrupt. Under California Civil Code § 1431.2 (Proposition 51):",
        opts: [
            "Mall Owner is liable for $200,000, consisting of 100% of economic damages ($100,000) plus Mall Owner's 20% several share of non-economic damages ($100,000).",
            "$600,000, because California joint and several liability applies unconditionally to all components of a personal injury judgment.",
            "$120,000, because pure comparative fault restricts a joint tortfeasor's liability strictly to their exact 20% allocation of total fault.",
            "$100,000, because Proposition 51 completely abolishes all joint liability for economic damages when a co-defendant is insolvent."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1431.2 (Proposition 51 / Thomas v. Duggins Construction Co.), a negligent defendant (Mall Owner) is entitled to the protections of Proposition 51 even when a co-defendant acted intentionally. Liability for economic damages remains joint and several ($100,000), while liability for non-economic damages is several only, limited strictly to Mall Owner's 20% allocated fault (20% of $500,000 = $100,000). Total recoverable from Mall Owner = $200,000."
    }
];