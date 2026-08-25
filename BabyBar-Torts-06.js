const examData = [
    {
        id: 1,
        topic: "Joint Tortfeasors / California Proposition 51 (Civil Code § 1431.2)",
        fp: "Questions 1–2 are based on the following fact situation:\nPlaintiff suffered catastrophic physical injuries in a multiple-vehicle collision caused by the joint negligence of Trucker (80% at fault) and Motorist (20% at fault). Plaintiff proved $100,000 in economic damages (medical bills and lost earnings) and $500,000 in non-economic damages (pain, suffering, and emotional distress). Trucker is completely bankrupt and has zero insurance or assets.",
        q: "Under California Civil Code § 1431.2 (Proposition 51), what is the maximum total financial amount Plaintiff can legally collect from Motorist?",
        opts: [
            "$200,000, consisting of 100% of economic damages ($100,000) plus Motorist's 20% proportional share of non-economic damages ($100,000).",
            "$600,000, because California joint and several liability applies unconditionally to all components of a personal injury judgment.",
            "$120,000, because pure comparative fault restricts a joint tortfeasor's liability strictly to their exact 20% allocation of total fault.",
            "$100,000, because Proposition 51 completely abolishes all joint liability for economic damages when a co-defendant is insolvent."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1431.2 (Proposition 51), liability for economic damages remains joint and several (allowing Plaintiff to collect 100% of the $100,000 from Motorist), but liability for non-economic damages (pain and suffering) is several only, allocated strictly according to each defendant's percentage of fault (20% of $500,000 = $100,000). Total recoverable from Motorist = $200,000."
    },
    {
        id: 2,
        topic: "Joint Tortfeasors / Proposition 51 & Intentional Tortfeasor Exception",
        fp: "Questions 1–2 are based on the following fact situation:\nPlaintiff suffered catastrophic physical injuries in a multiple-vehicle collision caused by the joint negligence of Trucker (80% at fault) and Motorist (20% at fault). Plaintiff proved $100,000 in economic damages (medical bills and lost earnings) and $500,000 in non-economic damages (pain, suffering, and emotional distress). Trucker is completely bankrupt and has zero insurance or assets.",
        q: "If the jury had found that Trucker acted intentionally by ramming Plaintiff in a road-rage assault while Motorist acted with ordinary negligence, Motorist's liability for non-economic damages would be:",
        opts: [
            "Converted to 100% joint and several liability ($500,000) because intentional torts extinguish all statutory protections for co-defendants.",
            "Still restricted strictly to Motorist's 20% several share ($100,000) under California Civil Code § 1431.2.",
            "Completely extinguished, because an intentional criminal act acts as a superseding cause eliminating all negligent co-defendant liability.",
            "Increased to fifty percent under the equitable joint enterprise allocation rules governing civil highway assault cases."
        ],
        ans: 1,
        exp: "Under California law (Thomas v. Duggins Construction Co. / B.B. v. County of Los Angeles), an intentional tortfeasor cannot use Proposition 51 to reduce their own non-economic liability, but a NEGLIGENT defendant (Motorist) remains entitled to the protection of § 1431.2, limiting Motorist's non-economic damage exposure strictly to Motorist's proportional percentage of fault (20% )."
    },
    {
        id: 3,
        topic: "Strict Products Liability / Barker v. Lull Design Defect Burden Shifting",
        q: "Operator was injured when a commercial loader machine tipped over sideways on a standard construction slope. In Operator's strict products liability design defect lawsuit against Manufacturer under California law (Barker v. Lull Engineering Co.), once Operator proves that the loader's design was a proximate cause of the tipping injury:",
        opts: [
            "The burden remains on Operator to prove that the product failed to perform as safely as an ordinary consumer would expect under consumer expectation rules.",
            "Operator is entitled to a directed verdict on strict liability without regard to engineering feasibility or alternative mechanical designs.",
            "The burden shifts to Manufacturer to prove that the benefits of the design outweighed the inherent risk of danger under the Risk-Utility test.",
            "The burden shifts to Operator to establish that Manufacturer was actively negligent in drafting the original mechanical blueprint specifications."
        ],
        ans: 2,
        exp: "Under California's seminal design defect doctrine (Barker v. Lull Engineering Co., 20 Cal.3d 413), under the Risk-Benefit / Risk-Utility prong, once the plaintiff establishes a prima facie case that the product's design proximately caused the injury, the burden of proof SHIFTS to the defendant manufacturer to prove, in light of relevant factors (feasibility, cost, adverse consequences), that the benefits of the challenged design outweigh the risk of danger inherent in such design."
    },
    {
        id: 4,
        topic: "Privacy / Intrusion Upon Seclusion in Semi-Public Workplaces (Sanders v. ABC)",
        q: "Employee worked in a large commercial telemarketing room divided into 50 open cubicles where coworkers could overhear phone calls, but which was closed to the general public. Reporter posed as an employee, covertly wore a hidden camera and microphone, and secretly videotaped private conversations with Employee regarding personal finances and published them on national television. In Employee's suit for Intrusion Upon Seclusion under California law (Sanders v. ABC):",
        opts: [
            "Employee loses, because news gathering in commercial offices is protected by absolute First Amendment investigative press privileges.",
            "Employee can prevail only if Employee can prove that Reporter committed a simultaneous physical common law trespass to real property.",
            "Employee loses, because an employee has zero legally recognized expectation of privacy in an open-plan workplace where coworkers can overhear conversations.",
            "Employee can prevail, because an employee has a reasonable expectation of privacy against covert electronic recording by journalists even in a semi-public workplace."
        ],
        ans: 3,
        exp: "Under Sanders v. American Broadcasting Companies (20 Cal.4th 907), privacy is not an 'all-or-nothing' concept. In a workplace office or cubicle not open to the general public, an employee may have a reasonable expectation of visual and auditory privacy against covert electronic video/audio recording by journalists, even though the employee had no expectation of complete privacy from coworkers."
    },
    {
        id: 5,
        topic: "Negligence / California Social Host & Dram Shop Immunity (Cal. Civ. Code § 1714)",
        q: "Host served 8 alcoholic drinks to Adult Guest at a private residential party. Guest became visibly and obviously intoxicated. Host watched Guest stumble to his car and drive away. Guest ran a red light and struck Pedestrian. In Pedestrian's negligence suit against Host under California Civil Code § 1714 and Business & Professions Code § 25602:",
        opts: [
            "Host is immune from civil tort liability, because California law provides broad immunity to social hosts, declaring the consumption of alcohol to be the proximate cause of injuries.",
            "Host is directly liable in negligence, because a social host owes a common law duty of reasonable care to prevent visibly intoxicated guests from driving.",
            "Host is strictly liable under the statutory Dram Shop doctrine for furnishing intoxicating beverages to an obviously impaired motor vehicle operator.",
            "Host is liable only if Pedestrian proves Host charged an entry fee or sold alcohol for commercial consideration at the residential party."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1714(b)-(c) and Business & Professions Code § 25602, California provides sweeping statutory immunity to social hosts and commercial vendors: the furnishing of alcoholic beverages is NOT the proximate cause of injuries resulting from intoxication; the consumption is. The sole statutory exception applies to furnishing alcohol to an obviously intoxicated MINOR (Cal. Civ. Code § 1714(d))."
    },
    {
        id: 6,
        topic: "Trespass to Land / Navigable Airspace vs. Immediate Reaches (United States v. Causby)",
        q: "Drone Operator repeatedly flew a commercial surveillance drone at an altitude of 25 feet directly above Homeowner's private suburban backyard, making loud buzzing noises and peering into patio windows. The FAA designates 'navigable public airspace' as beginning at 500 feet. Homeowner sued Drone Operator for Trespass to Land. Drone Operator argued flight in the air cannot constitute trespass. Result?",
        opts: [
            "Drone Operator wins, because common law trespass strictly requires physical tactile contact with the surface soil of the real property.",
            "Homeowner wins, because flights within the immediate reaches of the land that invade the airspace below navigable limits constitute actionable trespass (United States v. Causby).",
            "Drone Operator wins under federal preemption, because the FAA possesses exclusive plenary authority over all airspace down to the blade of grass.",
            "Homeowner wins under the tort of conversion, because Drone Operator exercised substantial unlawful dominion over Homeowner's atmospheric gases."
        ],
        ans: 1,
        exp: "Under United States v. Causby and Restatement (Second) of Torts § 159(2), flight by aircraft (or drones) in the airspace above the land of another constitutes a Trespass to Land if: (a) it enters into the immediate reaches of the airspace next to the land; and (b) it interferes substantially with the landowner's actual use and enjoyment."
    },
    {
        id: 7,
        topic: "Economic Torts / Malicious Prosecution vs. Abuse of Process Distinction",
        q: "Creditor lawfully filed a valid debt collection lawsuit against Debtor, supported by undisputed probable cause. However, after the summons was served, Creditor maliciously scheduled 15 consecutive daily depositions in remote counties solely to coerce Debtor into signing a separate real estate transfer completely unrelated to the debt. Debtor sued Creditor for Malicious Prosecution and Abuse of Process. Debtor will prevail for:",
        opts: [
            "Malicious Prosecution only, because scheduling oppressive depositions establishes lack of probable cause and legal malice at the inception of the action.",
            "Both torts, because any misuse of discovery during civil litigation converts a lawful complaint into an actionable malicious prosecution retroactively.",
            "Abuse of Process only, because the original lawsuit was supported by probable cause, but Creditor misused subsequent legal process for an improper collateral purpose.",
            "Neither tort, because discovery scheduling disputes are protected by absolute litigation privilege under California Civil Code § 47(b)."
        ],
        ans: 2,
        exp: "Malicious Prosecution requires establishing that the proceeding was initiated WITHOUT probable cause. If the initial suit was validly filed with probable cause, malicious prosecution is barred. In contrast, Abuse of Process occurs when a party uses a properly issued judicial process (like depositions or subpoenas) for an improper, ulterior collateral objective not intended by law."
    },
    {
        id: 8,
        topic: "Negligence / Firefighter's Rule Statutory Exception (Cal. Civ. Code § 1714.9)",
        q: "Firefighter arrived at a residential kitchen grease fire caused by Homeowner's ordinary kitchen negligence. While Firefighter was spraying foam on the stove inside the kitchen, Homeowner intentionally shoved Firefighter out of the way to grab a jewelry box, knocking Firefighter into burning grease and causing severe burns. Under California Civil Code § 1714.9, Firefighter's personal injury claim against Homeowner is:",
        opts: [
            "Completely barred by the Firefighter's Rule, because professional emergency first responders assume all risks of physical altercations on fire scenes.",
            "Permitted only if Firefighter establishes that Homeowner acted with the specific premeditated criminal intent to commit second-degree murder.",
            "Barred under the doctrine of primary assumption of risk governing all emergency structural building operations.",
            "Not barred by the Firefighter's Rule, because the rule does not protect an actor whose intentional or independent tortious conduct occurs after the firefighter arrives at the scene."
        ],
        ans: 3,
        exp: "Under California Civil Code § 1714.9, an exception to the Firefighter's Rule explicitly allows a firefighter or police officer to recover where the conduct causing the injury occurs AFTER the person knows or should know of the presence of the firefighter/officer, and involves willful acts or independent subsequent tortious conduct."
    },
    {
        id: 9,
        topic: "Negligence / Res Ipsa Loquitur Failure in Multi-Vehicle Chain Collisions",
        q: "In heavy dense fog on a highway, a 10-car chain-reaction pileup occurred involving Drivers 1 through 10. Passenger in Car 5 was severely injured when Car 5 was struck from the front and rear simultaneously. Passenger could not determine which driver struck whom first or who committed what driving error. Passenger sued all 10 drivers under Res Ipsa Loquitur. Passenger's res ipsa claim will:",
        opts: [
            "Succeed under the doctrine of Ybarra v. Spangard, shifting the burden of proof to all 10 drivers to exculpate themselves or face joint liability.",
            "Fail, because res ipsa loquitur cannot be invoked where multiple independent actors each controlled separate instrumentalities that could have caused the accident.",
            "Succeed, because multi-vehicle chain reaction pileups do not ordinarily occur on public highways in the absence of actionable driver negligence.",
            "Fail only if the highway patrol accident reconstruction report concludes that the dense fog constituted an extraordinary Act of God."
        ],
        ans: 1,
        exp: "Res ipsa loquitur requires that the instrumentality causing the injury be in the EXCLUSIVE control of the defendant. In a multi-vehicle pileup involving multiple independent drivers, the plaintiff cannot establish exclusive control in any single defendant (or a cohesive medical team as in Ybarra), meaning res ipsa loquitur cannot be used against the aggregate group."
    },
    {
        id: 10,
        topic: "Strict Liability / Wild Animals in Public Municipal Educational Zoos",
        q: "City operated a municipal public zoological garden. Bear was housed in a standard, secure, double-fenced concrete enclosure. An earthquake cracked the outer cage, and Bear escaped, injuring Visitor on the zoo sidewalk before handlers could tranquilize it. City exercised utmost reasonable care in cage inspection and maintenance. In Visitor's tort suit against City:",
        opts: [
            "City is strictly liable, because possessors of wild animals (ferae naturae) are subject to absolute strict liability regardless of public educational purpose.",
            "City is completely immune from all civil liability under the recreational trail immunity provisions of the California Government Tort Claims Act.",
            "City is judged under a Negligence standard, because public entities operating educational municipal zoos are exempt from strict liability for wild animals.",
            "City is strictly liable under the doctrine of res ipsa loquitur because dangerous wild bears do not escape absent supervisory operational neglect."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 517 (and modern California law), while private owners of wild animals are strictly liable, public entities or institutions (like authorized public zoos or educational facilities) that maintain wild animals pursuant to a public duty or statutory authorization are held to a standard of REASONABLE CARE (negligence), not strict liability."
    },
    {
        id: 11,
        topic: "Economic Torts / Fiduciary & Professional Advisor Justification Privilege",
        q: "Client was bound by an executory commercial lease to pay $10,000 monthly for warehouse space. Attorney, after reviewing Client's financial collapse, advised Client in good faith that it was in Client's best economic interest to breach the lease and negotiate a debt settlement. Client breached. Landlord sued Attorney for Intentional Interference with Contractual Relations. Attorney will:",
        opts: [
            "Be held liable, because intentionally advising a party to repudiate an existing valid contract is an independently actionable business tort per se.",
            "Be held liable, because the privilege of professional advice extends exclusively to certified public accountants and registered investment advisors.",
            "Prevail only if Attorney proves that Landlord was guilty of contemporaneous commercial lease code violations.",
            "Prevail, because an attorney or professional advisor acting in good faith within the scope of a professional relationship is privileged to advise a client to breach."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 772, an attorney, accountant, or professional advisor is protected by a qualified privilege of advice: one who gives honest, good-faith advice to a client within the scope of a professional request does not commit intentional interference with contract, even if the advice directly causes the client to breach."
    },
    {
        id: 12,
        topic: "Defamation / Slander of Title & Absolute Lis Pendens Privilege",
        q: "Buyer and Seller entered a contract for the purchase of Blackacre. Seller improperly refused to close. Buyer filed a lawful specific performance lawsuit against Seller and recorded a formal Notice of Lis Pendens in the county land registry. As a direct result, Seller's attempt to sell Blackacre to another party was blocked. Seller sued Buyer for Slander of Title. Buyer's defense of privilege will:",
        opts: [
            "Fail, because publishing clouding encumbrances against real property title is subject to strict civil liability under slander of title doctrines.",
            "Fail, because the litigation privilege protects in-court oral testimony but categorically excludes recorded public county real estate filings.",
            "Succeed, because recording a notice of lis pendens in connection with a pending civil lawsuit is protected by the absolute litigation privilege (Cal. Civ. Code § 47(b)).",
            "Succeed only if Buyer posted a $100,000 cash surety bond with the county clerk prior to the recordation of the lis pendens."
        ],
        ans: 2,
        exp: "Under California Civil Code § 47(b) and established case law (Albertson v. Raboff), the recordation of a Notice of Lis Pendens is an integral publication in the course of a judicial proceeding and is protected by the ABSOLUTE Litigation Privilege, completely barring an action for Slander of Title."
    },
    {
        id: 13,
        topic: "NIED / Pre-existing Contractual Relationship Direct Victim (Molien v. Kaiser)",
        q: "Physician negligently misdiagnosed Wife as having an advanced, contagious venereal disease and instructed Wife to tell Husband so he could be tested. In reality, Physician's laboratory test was erroneous. When Wife informed Husband, the accusation caused severe emotional distress, suspicion of infidelity, and the permanent breakup of the marriage. Under California law (Molien v. Kaiser Foundation Hospitals), Husband:",
        opts: [
            "Can recover for NIED as a 'Direct Victim,' because Physician's negligent advice was directed at Husband through a foreseeable pre-existing relationship.",
            "Cannot recover for NIED, because Husband was never placed within the physical zone of danger of physical impact from the misdiagnosis.",
            "Cannot recover for NIED, because healthcare professionals owe duties of care strictly and exclusively to the individual patient tested.",
            "Can recover only under intentional fraud and deceit for the publication of an erroneous medical diagnostic laboratory report."
        ],
        ans: 0,
        exp: "Under Molien v. Kaiser Foundation Hospitals (27 Cal.3d 916), California established the 'Direct Victim' theory of NIED: where a physician negligently diagnoses a communicable disease and instructs the patient to warn her spouse, the physician owes a direct duty of care to the spouse as a direct victim, permitting recovery without physical injury or zone-of-danger presence."
    },
    {
        id: 14,
        topic: "Landowner Duty / California Recreational Use Immunity (Cal. Civ. Code § 846)",
        q: "Rancher owned 5,000 acres of scenic mountain land. Rancher permitted the general public to enter the land for free recreational hiking and camping. While hiking on an unpaved trail, Hiker stepped into an uninspected, natural subterranean animal burrow, breaking his ankle. Under California Civil Code § 846 (Recreational Use Immunity), Rancher is:",
        opts: [
            "Liable in ordinary negligence, because a landowner owes permissive recreational licensees a duty to inspect trails for hidden defects.",
            "Immune from negligence liability, because landowners who permit free public recreational access owe no duty to keep premises safe or warn of hazards.",
            "Strictly liable under public premises doctrines for maintaining public recreational hiking trails on private open-space land.",
            "Immune only if Rancher filed a formal recreational dedication easement with the county board of supervisors."
        ],
        ans: 1,
        exp: "Under California Civil Code § 846, private property owners who allow the public to enter their land for recreational purposes without charging a fee or consideration owe NO duty of care to keep the premises safe or warn of hazardous conditions, and are immune from negligence lawsuits (liability attaches only for willful or malicious failure to guard/warn)."
    },
    {
        id: 15,
        topic: "Vicarious Liability / Respondeat Superior 'Special Errand' Exception",
        q: "Accountant was driving home from her regular office job at 6:00 PM along her standard commuting route. While driving, Employer called Accountant and directed her to immediately detour to the airport post office to mail an urgent tax filing. While turning toward the airport, Accountant negligently struck Pedestrian. In Pedestrian's suit against Employer:",
        opts: [
            "Employer is not liable, because the Going-and-Coming rule categorically shields employers from employee commuting collisions.",
            "Employer is vicariously liable under the 'Special Errand' exception to the Going-and-Coming rule.",
            "Employer is not liable, because Accountant was operating her own private vehicle and was not on corporate premises.",
            "Employer is strictly liable under statutory workers' compensation provisions for all commercial highway transportation."
        ],
        ans: 1,
        exp: "While the 'Going-and-Coming Rule' generally excludes employee commutes from respondeat superior liability, the 'Special Errand Exception' applies when an employee is performing a special errand, mission, or task for the employer's benefit during the commute. The employee remains within the scope of employment during the entire special errand."
    },
    {
        id: 16,
        topic: "Negligence / Pharmacist Duty to Warn of Fatal Drug-Drug Interactions",
        q: "Patient presented two valid prescriptions to Pharmacist from two different doctors: Drug A and Drug B. Pharmacist's commercial computer system flagged a severe, well-documented, potentially fatal chemical interaction between the two drugs. Pharmacist ignored the alert, filled both prescriptions without warning Patient or contacting the doctors, and Patient suffered cardiac arrest. In Patient's suit against Pharmacist:",
        opts: [
            "Pharmacist is completely shielded from liability under the Learned Intermediary Doctrine, which places the sole duty to warn upon prescribing doctors.",
            "Pharmacist is strictly liable under strict products liability for dispensing an unreasonably dangerous pharmaceutical chemical combination.",
            "Pharmacist is liable in negligence, because pharmacists owe an independent duty of care to intercept and warn of clear, fatal drug-drug interactions.",
            "Pharmacist is not liable, because filling a facially valid, licensed physician prescription is protected by qualified professional immunity."
        ],
        ans: 2,
        exp: "While the Learned Intermediary Doctrine shields drug manufacturers, pharmacists owe an independent professional duty of care to patients. Where a pharmacist has actual notice of a clear, potentially lethal contraindication or drug-drug interaction on the face of the prescriptions, the pharmacist is negligent for failing to warn or consult the prescribing physician."
    },
    {
        id: 17,
        topic: "IIED / Debt Collection Outrageousness Standards",
        q: "Creditor called Debtor (a known heart patient) at 3:30 AM every night for two weeks, screaming obscenities, falsely threatening to send armed gang members to Debtor's house to drag him to prison, and stating: 'You will leave this house in a body bag unless you pay $500.' Debtor suffered a severe stress-induced heart attack. In Debtor's suit for IIED:",
        opts: [
            "Creditor will prevail, because commercial creditors enjoy broad constitutional privileges to demand payment of legitimate delinquent debts.",
            "Debtor will prevail, because Creditor engaged in extreme and outrageous conduct that exceeds all possible bounds of decency in a civilized community.",
            "Creditor will prevail, because the intentional tort of IIED requires contemporaneous physical battery or physical impact.",
            "Debtor will prevail only under the statutory provisions of the Federal Fair Debt Collection Practices Act, which preempts state common law torts."
        ],
        ans: 1,
        exp: "While creditors have a right to demand payment, using extreme, harassing, highly abusive tactics—such as 3:30 AM threatening calls and threats of physical violence—constitutes Extreme and Outrageous conduct supporting common law Intentional Infliction of Emotional Distress (IIED)."
    },
    {
        id: 18,
        topic: "Trespass to Chattels vs. Conversion in Digital Systems (Intel v. Hamidi)",
        q: "Former Employee sent six mass unsolicited email broadcasts criticizing corporate management to 30,000 current employee inboxes over a two-year period. The emails caused zero physical damage, slowdown, crash, or loss of memory functionality to Employer's computer servers, though employees spent time reading them. Employer sued Former Employee for Trespass to Chattels under California law (Intel Corp. v. Hamidi). Result?",
        opts: [
            "Employer wins, because any unauthorized transmission of digital electronic signals across a private computer network constitutes trespass per se.",
            "Employer wins under conversion, requiring Former Employee to pay the full fair market replacement value of the central corporate email server.",
            "Employer wins, because employee distraction and lost work productivity satisfy the common law damage requirement for trespass to chattels.",
            "Employer loses, because electronic trespass to digital chattels requires physical damage, dispossession, or functional impairment of the hardware system."
        ],
        ans: 3,
        exp: "Under Intel Corp. v. Hamidi (30 Cal.4th 1342), California held that Trespass to Chattels does NOT encompass the unauthorized sending of electronic communications (like bulk emails) across a computer system in the absence of actual physical damage, functional disruption, or impairment to the hardware/machinery itself (lost employee productivity alone does not suffice)."
    },
    {
        id: 19,
        topic: "Strict Products Liability / Assumption of Risk as Pure Comparative Fault (Daly v. General Motors)",
        q: "Driver was operating a car with a defectively designed door latch that flew open in collisions. Driver discovered the defect when the door popped open while parked, but chose to drive at 80 mph without wearing a seatbelt while intoxicated. In a rollover crash, the door flew open and Driver was ejected. In Driver's strict products liability suit under California law (Daly v. General Motors Corp.):",
        opts: [
            "Driver's claim is completely barred under traditional assumption of risk, which operates as an absolute total defense in strict liability.",
            "Driver's recovery is reduced under Pure Comparative Fault principles according to Driver's percentage of fault, but is not completely barred.",
            "Manufacturer is held 100% strictly liable without any reduction, because consumer comparative fault is inapplicable in strict products liability.",
            "Driver's claim is completely barred under the doctrine of primary assumption of risk for operating motor vehicles while intoxicated."
        ],
        ans: 1,
        exp: "Under Daly v. General Motors Corp. (20 Cal.3d 725), California applied Pure Comparative Fault to Strict Products Liability. A plaintiff's comparative negligence (including secondary assumption of risk, intoxication, or failure to wear a seatbelt) reduces their damage recovery proportionally, but does NOT completely bar the strict liability cause of action."
    },
    {
        id: 20,
        topic: "Negligence / Affirmative Duty of Voluntary Rescuers (Zelenko v. Gimbel Bros.)",
        q: "Customer collapsed from a stroke inside Department Store. Store Manager took charge of Customer, carried Customer into an isolated back storage room, and promised to call an ambulance. Store Manager forgot to call the ambulance and left Customer alone for four hours in the locked room where other shoppers or doctors could not render aid. Customer died. In the wrongful death suit against Store:",
        opts: [
            "Store is not liable, because common law imposing zero affirmative duty to rescue protects commercial store managers from medical liabilities.",
            "Store is completely shielded from civil liability under the statutory emergency roadside Good Samaritan immunity statutes.",
            "Store is liable in negligence, because a voluntary rescuer who takes charge of a helpless person owes a duty of reasonable care not to worsen their position or isolate them from other aid.",
            "Store is liable only under the intentional tort of false imprisonment for secluding Customer inside the back storage room."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 324 and Zelenko v. Gimbel Bros., although there is generally no duty to rescue, one who voluntarily takes custody of a helpless person owes a duty of reasonable care, and is liable if they worsen the person's position or isolate them from potential third-party assistance."
    },
    {
        id: 21,
        topic: "Defamation / Libel Per Se in Professional Competence vs. Single Mistake Rule",
        q: "Newspaper published an editorial stating: 'Chief Mechanical Engineer at Aero Corp. made an honest calculation error in designing the wing flap on the prototype plane.' Engineer proved the statement was false, but showed zero out-of-pocket financial loss. In Engineer's defamation action under the 'Single Mistake Rule':",
        opts: [
            "Engineer recovers presumed general damages automatically, because any false published statement regarding a person's profession constitutes libel per se.",
            "Engineer's claim is completely barred under the absolute First Amendment opinion privilege applicable to newspaper editorial pages.",
            "Engineer is entitled to a mandatory directed verdict for punitive damages under statutory trade disparagement rules.",
            "Engineer cannot recover without proving special damages, because falsely charging a professional with a single isolated mistake does not impute general professional incompetence."
        ],
        ans: 3,
        exp: "Under the 'Single Mistake Rule' recognized in defamation law, a statement that charges a professional with making a single, isolated mistake or error in judgment is NOT libel per se (it does not impute general unfitness, ignorance, or incompetence in their profession), and thus requires pleading and proof of special pecuniary damages."
    },
    {
        id: 22,
        topic: "False Imprisonment / Police Officer Arrest under Facially Valid Warrant",
        q: "Police Officer arrested Citizen pursuant to a formal judicial arrest warrant valid and regular on its face, issued by a magistrate. Citizen proved that the prosecuting complainant had procured the warrant through perjury and that Citizen was innocent. Citizen sued Police Officer for False Imprisonment. Police Officer is:",
        opts: [
            "Liable for False Imprisonment, because arresting an innocent citizen constitutes unlawful non-consensual physical confinement per se.",
            "Privileged, because a police officer who executes an arrest warrant valid on its face is immune from civil liability for false imprisonment.",
            "Liable for Malicious Prosecution, because executing a fraudulent warrant creates an irrebuttable presumption of officer malice.",
            "Privileged only if Police Officer conducted an independent forensic investigation verifying the underlying criminal allegations prior to arrest."
        ],
        ans: 1,
        exp: "A police officer who arrests a person pursuant to a judicial warrant that is 'fair and valid on its face' (issued by a court of competent jurisdiction with no facial invalidity) is privileged against civil claims for False Imprisonment, even if the warrant was obtained through fraud by the complainant."
    },
    {
        id: 23,
        topic: "Battery / Consent Induced by Material Mistake Known to Actor",
        q: "Defendant paid Prostitute with a crisp counterfeit $100 bill to engage in consensual sexual relations. Prostitute consented to the physical contact based on the belief that the bill was genuine legal tender. Upon discovering the bill was counterfeit, Prostitute sued Defendant for Battery. Result?",
        opts: [
            "Defendant is liable for Battery, because any fraudulent misrepresentation completely destroys legal consent in all intentional tort contexts.",
            "Defendant is liable under strict products liability for placing counterfeit negotiable commercial instruments into circulation.",
            "Defendant is not liable for Battery, because fraud as to a collateral matter (payment) does not vitiate consent to the physical touching itself.",
            "Defendant is not liable only if Defendant possessed a good-faith subjective belief that the $100 bill was genuine currency."
        ],
        ans: 2,
        exp: "Under established common law (Restatement (Second) of Torts § 892B), fraud as to a collateral matter (such as payment with counterfeit money or misrepresenting wealth) does NOT invalidate consent for the purpose of an intentional tort of Battery, because the plaintiff understood and consented to the exact physical contact that occurred (though it supports an action for Fraud/Deceit)."
    },
    {
        id: 24,
        topic: "Strict Products Liability / Federal Implied Conflict Preemption (Geier v. Honda)",
        q: "Auto Corp. manufactured a car that complied with Federal Motor Vehicle Safety Standard 208, which deliberately gave manufacturers a phased choice between installing airbags or automatic seatbelts. Auto Corp. chose automatic seatbelts. Driver was injured in a collision and sued Auto Corp. under state strict products liability for design defect for omitting an airbag. Under Geier v. American Honda Motor Co.:",
        opts: [
            "Driver's state lawsuit is not preempted, because federal motor safety regulations establish only minimum baselines that state tort law can freely increase.",
            "Auto Corp. is strictly liable as a matter of law for failing to adopt the safest available alternative mechanical design.",
            "Driver's claim is preempted only if Auto Corp. held an express statutory patent license issued by the federal Department of Transportation.",
            "Driver's state tort lawsuit is preempted by federal law, because imposing state tort liability would conflict with the federal regulatory policy of manufacturer choice."
        ],
        ans: 3,
        exp: "Under Geier v. American Honda Motor Co. (529 U.S. 861), where federal safety regulations deliberately grant manufacturers a choice between safety alternatives (airbags vs. seatbelts) to foster technological development, state common law tort lawsuits alleging design defect for choosing one approved option are preempted under implied conflict preemption."
    },
    {
        id: 25,
        topic: "Nuisance / Stray Voltage & Electromagnetic Sensitivity",
        q: "Power Co. operated high-voltage electrical transmission lines along a public utility easement. A specialized scientific laboratory moved into an adjacent building and claimed that ambient electromagnetic fields from the power lines disrupted ultra-sensitive microscopic quantum computer sensors. The electromagnetic fields were completely imperceptible to humans and ordinary businesses. In Laboratory's private nuisance suit:",
        opts: [
            "Power Co. is strictly liable, because transmitting high-voltage electrical energy constitutes an ultrahazardous dangerous activity.",
            "Laboratory is entitled to an automatic permanent injunction under the constitutional property protections of the Fifth Amendment.",
            "Power Co. is not liable, because nuisance liability is judged by the standard of an ordinary person in the community, not the extraordinary hypersensitivity of a specialized business.",
            "Power Co. is liable in negligence per se for emitting non-ionizing electromagnetic radiation across commercial property boundaries."
        ],
        ans: 2,
        exp: "Private nuisance requires a substantial and unreasonable interference with the use and enjoyment of land. Interference is judged by the standard of an ordinary, normal person in the community. Where the interference exists solely because of the plaintiff's unique, extraordinary, specialized hypersensitivity (like quantum sensors), a private nuisance action will not lie."
    }
];