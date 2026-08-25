const examData = [
    {
        id: 1,
        topic: "Tort Reform / MICRA Collateral Source Rule Modifications (Cal. Civ. Code § 3333.1)",
        fp: "Patient sued Surgeon for medical negligence in California, proving $100,000 in necessary hospital expenses. Prior to trial, Patient's independent private health insurer paid $80,000 directly to the hospital. At trial, Surgeon moved under California Civil Code § 3333.1 (MICRA) to introduce evidence of the $80,000 insurance payment to the jury.",
        q: "In ruling on Surgeon's motion under California MICRA statutes, the trial court should:",
        opts: [
            "Deny the motion, because the common-law Collateral Source Rule strictly bars all evidence of third-party insurance payments in all California personal injury actions.",
            "Grant the motion, because MICRA permits healthcare provider defendants to introduce evidence of collateral source health insurance benefits to the jury.",
            "Grant the motion only if Surgeon was employed by a public county hospital entitled to sovereign municipal tort claims immunities.",
            "Deny the motion, but reduce the final post-verdict judgment by $80,000 as a mandatory ministerial post-trial judicial offset."
        ],
        ans: 1,
        exp: "Under California Civil Code § 3333.1 (a key provision of MICRA), an exception to the traditional Collateral Source Rule allows a defendant healthcare provider in a professional negligence action to introduce evidence of amounts paid to the plaintiff by health insurance, disability insurance, or workers' compensation."
    },
    {
        id: 2,
        topic: "Defamation / Absolute Litigation Privilege for Pre-Litigation Demand Letters (Cal. Civ. Code § 47(b))",
        fp: "Attorney represented Client in an impending commercial trade secret dispute against Competitor. Prior to filing a formal civil complaint in court, Attorney sent a formal settlement demand letter exclusively to Competitor's general counsel, stating: 'Your executive Vice President is an unindicted felon who stole our source code.' Competitor's Vice President sued Attorney for Libel Per Se. Attorney asserted California Civil Code § 47(b).",
        q: "Attorney's defense of Absolute Litigation Privilege will:",
        opts: [
            "Fail, because the litigation privilege applies strictly to statements uttered in open court before a presiding judge.",
            "Fail, because accusing a corporate officer of an unindicted felony constitutes actionable libel per se defeating conditional privileges.",
            "Succeed, because pre-litigation demand letters sent in serious, good-faith contemplation of imminent litigation to interested parties are protected by absolute privilege (Silberg v. Anderson).",
            "Succeed only if Attorney filed the underlying trade secret complaint with the court clerk within 24 hours of mailing the letter."
        ],
        ans: 2,
        exp: "Under California Civil Code § 47(b) and Silberg v. Anderson, the Absolute Litigation Privilege applies to communications: (1) made in judicial or quasi-judicial proceedings; (2) by litigants or other participants; (3) to achieve the objects of the litigation; and (4) that have some connection or logical relation to the action. It explicitly extends to pre-litigation demand letters sent in serious, good-faith contemplation of imminent litigation."
    },
    {
        id: 3,
        topic: "Negligence / Landowner Natural Hazardous Conditions Outside Urban Zones",
        fp: "Rancher owned 10,000 acres of uncultivated, wild, undeveloped mountainous rural land adjacent to an unpaved county road. During a severe storm, an ancient, naturally growing pine tree was struck by lightning and fell across the rural road. Two hours later, Motorist collided with the tree in the dark. Motorist sued Rancher for negligence in failing to inspect and clear natural wilderness trees.",
        q: "In Motorist's negligence action against Rancher:",
        opts: [
            "Rancher is liable, because California has completely abolished all landowner distinctions between natural and artificial conditions (Sprecher v. Adamson).",
            "Rancher is not liable, because a rural landowner owes no duty of affirmative inspection regarding natural vegetation in unpopulated wilderness areas where the burden is unreasonable.",
            "Rancher is strictly liable under the doctrine of Rylands v. Fletcher for accumulating wild timber adjacent to public thoroughfares.",
            "Motorist is entitled to a directed verdict under res ipsa loquitur, because lightning-struck trees do not obstruct roads absent landowner neglect."
        ],
        ans: 1,
        exp: "While Sprecher v. Adamson abolished rigid categorical immunity for natural conditions in California, liability turns on ordinary negligence factors. For rural, uncultivated, wild wilderness land, a landowner owes no burdensome duty to inspect natural vegetation along rural roadways, because the burden of inspecting vast tracts of natural wilderness is unreasonable."
    },
    {
        id: 4,
        topic: "Economic Torts / Abuse of Process for Improper Collateral Coercion",
        fp: "Plaintiff lawfully filed a valid $5,000 breach of contract lawsuit against Defendant supported by undisputed probable cause. However, after the lawsuit was filed, Plaintiff scheduled 20 successive daily depositions of Defendant in remote counties and served subpoenas on Defendant's elderly parents solely to coerce Defendant into surrendering an unrelated family heirloom. Defendant sued Plaintiff for Abuse of Process.",
        q: "In Defendant's action for Abuse of Process against Plaintiff:",
        opts: [
            "Defendant will lose, because the original breach of contract complaint was initiated with valid, undisputed probable cause.",
            "Defendant will prevail, because using properly issued discovery process for an improper, ulterior collateral objective constitutes abuse of process.",
            "Defendant will lose, because discovery scheduling disputes are protected by absolute litigation privilege under California Civil Code § 47(b).",
            "Defendant is restricted exclusively to an action for malicious prosecution following a favorable termination of the contract lawsuit."
        ],
        ans: 1,
        exp: "Abuse of Process requires: (1) an ulterior, improper collateral purpose, and (2) a willful act in the use of process not proper in the regular conduct of the proceeding. Unlike Malicious Prosecution (which requires lack of probable cause at inception), Abuse of Process occurs when a validly initiated lawsuit is weaponized through perversions of process (like oppressive depositions) to extort a collateral advantage."
    },
    {
        id: 5,
        topic: "Negligence / Seatbelt Defense Biomechanical Allocation in California (Truman v. Vargas)",
        fp: "Driver was broadsided in an intersection by Negligent Trucker. Driver suffered $300,000 in total physical injuries. Driver was not wearing an available, functional three-point safety seatbelt in violation of state safety statutes. Expert biomechanical testimony proved that wearing the seatbelt would have prevented $100,000 of the injuries, but the remaining $200,000 in injuries would have occurred even if Driver had been securely belted. In California (Truman v. Vargas / Housley v. Godinez):",
        opts: [
            "Driver collects $0, because violating mandatory statutory seatbelt laws constitutes contributory negligence per se barring all recovery.",
            "Driver collects the full $300,000, because evidence of seatbelt non-use is categorically inadmissible in California civil tort actions.",
            "Driver collects $200,000, because failure to wear a seatbelt reduces damage recovery strictly by the amount of injury the seatbelt would have prevented.",
            "Driver's total damage award is reduced by exactly fifty percent as a statutory mandatory penalty for comparative fault."
        ],
        ans: 2,
        exp: "In California (Truman v. Vargas / Housley v. Godinez), failure to wear a seatbelt does not bar the plaintiff's cause of action, but is admissible as comparative fault / failure to mitigate damages to reduce the plaintiff's recovery strictly by the proportion of injuries that wearing the seatbelt would have avoided ($300,000 - $100,000 = $200,000)."
    },
    {
        id: 6,
        topic: "Negligence / Commercial Social Host Exception for Intoxicated Minors (Cal. Civ. Code § 1714(d))",
        fp: "Adult Social Host hosted a residential graduation party and knowingly furnished 6 shots of tequila to 17-year-old High School Minor, who was visibly and obviously intoxicated. Host watched Minor stumble to his car and drive away. Five minutes later, Minor ran a red light and struck Pedestrian. In Pedestrian's personal injury negligence lawsuit against Social Host under California Civil Code § 1714:",
        opts: [
            "Host is completely immune from civil liability under California's broad statutory social host alcohol immunity provisions.",
            "Host is liable in negligence, because California Civil Code § 1714(d) creates an explicit statutory exception for furnishing alcohol to an obviously intoxicated minor.",
            "Host is strictly liable under commercial Dram Shop doctrines for maintaining licensed residential commercial entertainment premises.",
            "Pedestrian's claim is completely barred under primary assumption of risk for walking near suburban residential roadways."
        ],
        ans: 1,
        exp: "While California Civil Code § 1714(b)-(c) provides sweeping immunity to social hosts who serve alcohol to adults, California Civil Code § 1714(d) explicitly carves out an exception: a parent, guardian, or other adult who knowingly furnishes alcoholic beverages at their residence to an obviously intoxicated MINOR is directly liable in tort for resulting injuries."
    },
    {
        id: 7,
        topic: "Tort Defenses / Express Exculpatory Agreements & Public Interest Standard (Tunkl)",
        fp: "Patient was admitted to Hospital for emergency, life-saving cardiac surgery. Prior to surgery, Hospital required Patient to sign a boilerplate admission agreement containing an exculpatory clause stating: 'Patient releases Hospital and its medical staff from any and all liability for future negligence, medical malpractice, and operational errors.' Surgeon committed ordinary negligence during surgery, injuring Patient. Under California law (Tunkl v. Regents of University of California):",
        opts: [
            "The exculpatory clause is valid and enforceable, because competent adult patients possess an absolute constitutional freedom of contract.",
            "The exculpatory clause is void and unenforceable as against public policy, because hospital healthcare involves essential public services and unequal bargaining power.",
            "The exculpatory clause is enforceable to bar non-economic pain and suffering damages, but invalid as to economic medical expenses.",
            "Hospital is protected from liability only if Patient's primary health insurance carrier countersigned the exculpatory release."
        ],
        ans: 1,
        exp: "Under Tunkl v. Regents of the University of California (60 Cal.2d 92), an exculpatory contract releasing a party from liability for its own negligence is VOID against public policy if it involves the public interest (such as essential medical and hospital services, common carriers, or utilities where there is decisive bargaining disparity and an adhesion contract)."
    },
    {
        id: 8,
        topic: "Defamation / Defamation of a Corporation & Business Standing",
        fp: "Blogger published a false online investigative report claiming that Software Corp.'s commercial accounting software contained a deliberate backdoor algorithm that stole user banking credentials and transmitted them to offshore cybercriminals. Software Corp.'s commercial sales dropped by $1,000,000. Software Corp. sued Blogger for Defamation. Blogger moved to dismiss, arguing corporations lack personal feelings and cannot be defamed.",
        q: "In ruling on Blogger's motion to dismiss, the court should:",
        opts: [
            "Grant the motion, because common-law defamation is a personal dignitary tort that protects natural human beings exclusively.",
            "Grant the motion, because business entities are restricted exclusively to statutory unfair competition and antitrust claims.",
            "Deny the motion, because a corporation can maintain an action for defamation for false statements that prejudice its business reputation and financial standing.",
            "Deny the motion only if Software Corp. proves Blogger acted with subjective hatred against corporate executive officers."
        ],
        ans: 2,
        exp: "A corporation or business entity can maintain an action for Defamation if the defamatory matter tends to prejudice it in the conduct of its business, trade, or profession, or to deter third persons from dealing with it, resulting in financial injury to the corporate reputation."
    },
    {
        id: 9,
        topic: "Negligence / Commercial Sports Instructors & Prohibition Against Increasing Inherent Risks (Galardi)",
        fp: "Amateur Skier enrolled in an intermediate ski jumping lesson. Commercial Ski Instructor commanded Skier to attempt a 40-foot advanced jump off an icy, unmaintained ramp that exceeded Skier's technical capability and was unsafe for intermediate students. Skier crashed and fractured a pelvis. In Skier's negligence suit against Instructor under California law (Galardi v. Seahorse Riding Club):",
        opts: [
            "Instructor is completely immune under Primary Assumption of the Risk, because falling and crashing are inherent risks of ski jumping.",
            "Instructor is strictly liable under commercial enterprise rules for leasing recreational sporting facilities to amateur students.",
            "Skier's claim is completely barred under secondary implied assumption of risk for enrolling in extreme downhill winter sports.",
            "Instructor is liable in negligence, because a sports instructor owes an affirmative duty not to increase the risks inherent in the sport beyond its normal range."
        ],
        ans: 3,
        exp: "Under California law (Galardi v. Seahorse Riding Club / Knight v. Jewett), while participants assume the inherent risks of sports, coaches, commercial guides, and instructors owe a distinct duty of care NOT to increase the risks inherent in the sport beyond those that are natural and ordinary (e.g., forcing a student onto jumps that are recklessly beyond their skill level)."
    },
    {
        id: 10,
        topic: "Strict Products Liability / Subsequent Remedial Measures Admissibility in Strict Liability (Ault)",
        fp: "Worker was injured when an industrial metal punch press crushed his hand because it lacked a dual-palm safety interlock shield. Worker sued Manufacturer under strict products liability for design defect. At trial, Worker offered evidence that one year after the accident, Manufacturer modified the design of all newly manufactured presses by adding the dual-palm safety shield. Under California law (Ault v. International Harvester Co.):",
        opts: [
            "The evidence of post-accident design changes is admissible in strict products liability actions to demonstrate design defect and feasibility.",
            "The evidence is categorically inadmissible under state evidentiary rules to prevent deterring manufacturers from making post-accident safety repairs.",
            "The evidence is admissible only if Worker proves Manufacturer intentionally destroyed pre-accident engineering blueprints.",
            "The evidence is inadmissible unless Manufacturer asserts the affirmative defense of comparative employee negligence."
        ],
        ans: 0,
        exp: "Under California law (Ault v. International Harvester Co., 13 Cal.3d 113), the statutory exclusion of subsequent remedial measures applies to negligence actions, but does NOT apply to strict products liability cases; post-accident design changes are admissible to prove design defect or feasibility."
    },
    {
        id: 11,
        topic: "Negligence / Duty to Prevent Suicide in Special Custodial Relationships",
        fp: "Patient was admitted to an inpatient psychiatric hospital following an acute suicide attempt. The intake psychiatrist noted Patient was actively suicidal and ordered continuous 15-minute room monitoring. Hospital staff left Patient unmonitored in a private room for four hours with exposed ceiling pipes and bedsheets. Patient committed suicide. In the wrongful death suit against Hospital:",
        opts: [
            "Hospital is not liable, because intentional suicide is an independent voluntary act that operates as a superseding cause as a matter of law.",
            "Hospital is liable in negligence, because a custodial psychiatric facility with knowledge of suicidal intent owes an affirmative duty to prevent self-harm.",
            "Hospital is completely immune from civil liability under statutory medical psychiatric crisis intervention safe harbors.",
            "Patient's estate is restricted exclusively to an intentional tort action for civil aiding and abetting against the floor nurses."
        ],
        ans: 1,
        exp: "While suicide is traditionally an independent superseding cause, an established exception applies where the defendant has a special custodial relationship with the decedent (such as a psychiatric hospital, jail, or prison) and has specific knowledge that the person is likely to self-harm. The duty of custody encompasses protecting the patient from their own foreseeable self-destructive acts."
    },
    {
        id: 12,
        topic: "Economic Torts / Preemption of Common Law Claims by CUTSA (Silvaco)",
        fp: "Tech Startup sued Former Employee for stealing corporate customer contact lists and software algorithms. In its complaint, Tech Startup asserted a statutory claim under the California Uniform Trade Secrets Act (CUTSA) alongside common-law tort claims for Conversion, Breach of Fiduciary Duty, and Intentional Interference with Prospective Advantage based on the exact same nucleus of stolen data.",
        q: "Under California law governing trade secret preemption (Silvaco Data Systems v. Intel Corp.):",
        opts: [
            "Tech Startup is entitled to pursue both statutory CUTSA claims and all common-law tort claims simultaneously to a cumulative double recovery.",
            "The statutory CUTSA claim is dismissed, because common-law intentional property torts supersede subsequent statutory trade secret enactments.",
            "The common-law tort claims are preempted by CUTSA to the extent they are based on the same factual nucleus of trade secret misappropriation.",
            "The common-law claims are permitted only if Tech Startup waives all rights to recover statutory exemplary damages under CUTSA."
        ],
        ans: 2,
        exp: "Under California law (Silvaco Data Systems v. Intel Corp. / K.C. Multimedia, Inc. v. Bank of America), the California Uniform Trade Secrets Act (CUTSA) PREEMPTS and displaces common-law tort claims (such as conversion, unfair competition, and intentional interference) that are based on the identical factual nucleus of trade secret misappropriation."
    },
    {
        id: 13,
        topic: "Privacy / False Light Actual Malice Standard for Matters of Public Concern",
        fp: "Newspaper published an investigative article on international political money laundering. On the front page directly beneath the headline 'Corrupt Financiers Indicted,' Newspaper published a large photograph of Banker, an honest commercial banker with zero criminal connections. Newspaper knew Banker was innocent, but used the photo for dramatic visual effect. Banker sued Newspaper for False Light Invasion of Privacy.",
        q: "In Banker's False Light action against Newspaper under California law:",
        opts: [
            "Banker will lose, because photographs taken on public streets outside commercial banks are protected by absolute First Amendment immunity.",
            "Banker will prevail, because Newspaper publicized highly offensive false portrayals of Banker with constitutional actual malice.",
            "Banker will lose, because the tort of false light applies exclusively to commercial merchandise advertising endorsements.",
            "Banker is restricted to an action for commercial misappropriation, limiting recovery to standard commercial modeling fees."
        ],
        ans: 1,
        exp: "False Light Invasion of Privacy requires: (1) widespread publicity, (2) placing plaintiff in a false light before the public, (3) that is highly offensive to a reasonable person, and (4) published with constitutional Actual Malice (knowledge of falsity or reckless disregard for truth)."
    },
    {
        id: 14,
        topic: "Strict Products Liability / Learned Intermediary Doctrine & Direct-to-Consumer Advertising Exception",
        fp: "PharmaCo manufactured a prescription weight-loss drug and marketed it aggressively directly to consumers through nationwide television commercials, urging patients to 'ask your doctor for PharmaCo.' The commercials omitted warnings of known, severe cardiac valve damage. Patient saw the commercial, demanded the prescription from Doctor, took the drug, and suffered heart valve failure. In Patient's strict products liability suit, PharmaCo asserted the Learned Intermediary Doctrine.",
        q: "In evaluating PharmaCo's defense under modern products liability law (Perez v. Wyeth Laboratories):",
        opts: [
            "PharmaCo is protected by the Learned Intermediary Doctrine, because warning the prescribing physician discharges all manufacturer duties.",
            "PharmaCo is strictly liable under absolute enterprise liability for all adverse pharmaceutical cardiac valve failures.",
            "The Learned Intermediary Doctrine does not shield a manufacturer that engages in direct-to-consumer advertising without adequate consumer warnings.",
            "Patient's claim is completely preempted by the federal Food, Drug, and Cosmetic Act governing FDA broadcast approvals."
        ],
        ans: 2,
        exp: "Under modern products liability doctrine (Perez v. Wyeth Laboratories / Restatement (Third) of Torts: Products Liability § 6), an established exception to the Learned Intermediary Doctrine holds that when a drug manufacturer engages in Direct-to-Consumer (DTC) advertising, it owes a direct duty to warn consumers of known material side effects and cannot hide behind the prescribing physician."
    },
    {
        id: 15,
        topic: "Negligence / Collateral Source Rule in California Tort Law (Helfend)",
        fp: "Pedestrian was struck by Negligent Driver, incurring $60,000 in necessary emergency hospital expenses. Pedestrian's private health insurance policy paid the entire $60,000 hospital bill directly to the medical providers. At trial against Driver, Driver moved to introduce evidence of the $60,000 insurance payment to reduce the damage verdict to $0. Under California's Collateral Source Rule (Helfend v. Southern California Rapid Transit District):",
        opts: [
            "The motion is denied, because compensation received from an independent collateral source cannot be introduced into evidence or reduce tortfeasor liability.",
            "The motion is granted, because modern comparative fault principles prohibit double recovery for medical expenses covered by health insurance.",
            "The motion is granted only if Driver was insured under a municipal or governmental liability insurance policy.",
            "The motion is denied, but the trial judge must automatically deduct the insurance payment from the final jury verdict post-trial."
        ],
        ans: 0,
        exp: "Under the Collateral Source Rule (Helfend v. Southern California Rapid Transit District, 2 Cal.3d 1), payments made to or on behalf of an injured plaintiff by an independent source (like private health insurance) are not credited against the tortfeasor's liability and cannot be introduced into evidence."
    },
    {
        id: 16,
        topic: "Joint Tortfeasors / Good-Faith Settlement Barring Equitable Indemnity (Tech-Bilt)",
        fp: "Plaintiff sued Co-Defendant A and Co-Defendant B for a $1,000,000 injury. Prior to trial, Plaintiff entered into a settlement with Co-Defendant A for $300,000, which the trial court confirmed was made in 'good faith' under California Code of Civil Procedure § 877.6 (Tech-Bilt). At trial, the jury found Co-Defendant B 100% at fault and entered judgment for $700,000. Co-Defendant B filed a cross-complaint against Co-Defendant A for Equitable Indemnity.",
        q: "In evaluating Co-Defendant B's cross-complaint against settling Co-Defendant A under California law:",
        opts: [
            "Co-Defendant B is entitled to 50% pro-rata equitable indemnity from Co-Defendant A under California joint tortfeasor contribution statutes.",
            "A confirmed good-faith settlement under CCP § 877.6 completely discharges the settling tortfeasor from all cross-claims for equitable indemnity and contribution.",
            "Co-Defendant A must pay 100% of Co-Defendant B's judgment under the doctrine of total equitable indemnification.",
            "Co-Defendant B's cross-complaint is permitted, provided Co-Defendant B was found liable solely under strict products liability."
        ],
        ans: 1,
        exp: "Under California Code of Civil Procedure § 877.6 and Tech-Bilt, Inc. v. Woodward-Clyde & Associates, a judicial determination that a settlement was made in 'good faith' BARS and completely discharges the settling tortfeasor from all claims for equitable comparative contribution or indemnity by remaining non-settling co-defendants."
    },
    {
        id: 17,
        topic: "Intentional Torts / Fraud in the Factum Vitiating Medical Consent",
        fp: "Fake Doctor wore a physician's white coat in a hospital, falsely told Patient he was a licensed neurologist, and stated that an intimate spinal sensory test was medically necessary. Patient consented to the physical touching based on the belief that Fake Doctor was a licensed medical practitioner performing legitimate medical diagnostics. In truth, Fake Doctor had no medical license and performed the touching solely for personal sexual gratification. Patient sued Fake Doctor for Battery.",
        q: "In Patient's civil action for Battery against Fake Doctor:",
        opts: [
            "Fake Doctor is not liable for Battery, because Patient voluntarily consented to the exact physical contact that was performed.",
            "Patient is restricted to an action for negligent misrepresentation, because fraud in the inducement cannot support an intentional battery.",
            "Fake Doctor is not liable, unless Patient can prove permanent physical tissue laceration resulting from the examination.",
            "Patient will prevail, because fraud going to the essential character and nature of the touching (fraud in the factum) completely vitiates consent."
        ],
        ans: 3,
        exp: "Consent is invalid if obtained by fraud. While fraud as to a collateral matter (e.g., paying with counterfeit money) does not invalidate consent for battery, fraud that goes to the very nature, essential character, and professional reality of the contact itself (fraud in the factum / essential nature of the touching) completely destroys consent, making the touching an actionable Battery."
    },
    {
        id: 18,
        topic: "Negligence / Affirmative Duty of Voluntary Rescuers Not to Worsen Peril (Zelenko)",
        fp: "Customer collapsed from a heat stroke inside Store. Store Manager took charge of Customer, carried Customer into an isolated back storage room, and assured bystanders: 'I am taking care of him and calling an ambulance.' Store Manager forgot to call 911, locked the storage room, and left Customer alone for four hours where third parties and paramedics could not render aid. Customer died. In the wrongful death action against Store:",
        opts: [
            "Store is liable in negligence, because a voluntary rescuer who takes charge of a helpless person owes a duty of reasonable care not to worsen their position or isolate them from other aid.",
            "Store is not liable, because common law imposes zero affirmative legal duty upon commercial shopkeepers to rescue stricken patrons.",
            "Store is completely shielded from civil liability under statutory emergency Good Samaritan healthcare immunities.",
            "Store is liable only under the intentional tort of false imprisonment for locking Customer inside the storage room."
        ],
        ans: 0,
        exp: "Under Restatement (Second) of Torts § 324 and Zelenko v. Gimbel Bros., although there is generally no duty to rescue, one who voluntarily takes custody of a helpless person owes a duty of reasonable care, and is liable if they worsen the person's position or isolate them from potential third-party assistance."
    },
    {
        id: 19,
        topic: "Strict Liability / Abnormally Dangerous Activities & Fireworks Storage in Suburbs",
        fp: "Pyrotechnics Manufacturer stored 10,000 pounds of commercial high-grade fireworks explosives in a warehouse inside a densely populated residential suburb. Despite state-of-the-art climate-controlled storage bunkers and utmost care, an unpreventable seismic tremor ruptured an electrical conduit, igniting an immense explosion that destroyed 20 surrounding homes. Manufacturer proved it exercised utmost care. In homeowners' strict liability suit:",
        opts: [
            "Manufacturer is not liable, because the seismic tremor was an Act of God superseding cause that extinguished all tort liability.",
            "Manufacturer is strictly liable, because storing massive volumes of high explosives in a residential suburb is an abnormally dangerous activity.",
            "Manufacturer is liable only if homeowners prove Manufacturer violated municipal building codes.",
            "Homeowners are completely barred from recovery under the doctrine of primary assumption of risk for living near industrial zones."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts §§ 519–520, the storage of massive quantities of high explosives in a densely populated residential area is an Abnormally Dangerous Activity that imposes strict liability for resulting explosions, regardless of the exercise of utmost care or natural triggers."
    },
    {
        id: 20,
        topic: "Negligence / Firefighter's Rule Exception for Independent Intentional Criminal Acts (Cal. Civ. Code § 1714.9)",
        fp: "Police Officer pulled over Speeding Motorist on a highway shoulder for ordinary speeding. While Officer stood at the driver's window writing a ticket, Motorist intentionally accelerated, put the car in reverse, and backed over Officer's leg to escape arrest, crushing bones. In Officer's personal injury lawsuit against Motorist under California Civil Code § 1714.9:",
        opts: [
            "Motorist is completely immune under the Firefighter's Rule, because roadside vehicular hazards are inherent risks of police enforcement.",
            "Officer's claim is completely barred under primary assumption of risk for conducting traffic enforcement stops on active highway shoulders.",
            "Officer can recover, because the Firefighter's Rule does not protect an actor whose intentional tortious conduct occurs after knowing of the officer's presence.",
            "Motorist is liable only for economic medical expenses under statutory workers' compensation schedules."
        ],
        ans: 2,
        exp: "Under California Civil Code § 1714.9, the Firefighter's Rule does NOT bar recovery where the conduct causing the injury occurs AFTER the person knows or should know of the presence of the peace officer or firefighter, and involves a subsequent intentional, willful, or negligent act."
    },
    {
        id: 21,
        topic: "Strict Products Liability / Bystander Recovery for Design Defect (Elmore v. American Motors)",
        fp: "Automaker manufactured a sports car with a defectively designed drive shaft that disconnected at high speeds, gouged into the asphalt, and flipped the vehicle across a pedestrian sidewalk, crushing Pedestrian. Pedestrian sued Automaker under strict products liability for design defect. Automaker argued Pedestrian was a bystander who never purchased or used the vehicle. Under California law (Elmore v. American Motors Corp.):",
        opts: [
            "Pedestrian is restricted to an action in ordinary negligence, because strict products liability requires vertical privity of contract with the purchaser.",
            "Pedestrian can recover under strict products liability, because strict products liability extends to foreseeable bystanders injured by defective products.",
            "Pedestrian cannot recover against Automaker unless Pedestrian proves that the driver was completely free from contributory fault.",
            "Pedestrian is restricted to express warranty remedies under Article 2 of the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under Elmore v. American Motors Corp. (70 Cal.2d 578), California established that strict products liability extends to foreseeable bystanders who are injured by defective products, as bystanders have no opportunity to inspect or choose the product."
    },
    {
        id: 22,
        topic: "Negligence / Loss of Chance Doctrine in Traditional Proximate Cause",
        fp: "Patient visited Physician with crushing chest pain. Physician negligently failed to order an EKG, misdiagnosing the condition as heartburn. Patient suffered a fatal heart attack 24 hours later. Expert oncology/cardiology testimony established that with timely diagnosis, Patient had a 40% chance of survival, which dropped to 0% due to the delay. In a traditional common-law proximate cause jurisdiction:",
        opts: [
            "Patient's estate recovers full damages, because any medical malpractice resulting in adverse health events creates a presumption of causation.",
            "Patient's estate recovers 40% of full damages under pure comparative fault allocation between underlying disease and medical delay.",
            "Patient's estate loses under traditional but-for causation, because the estate cannot prove by a preponderance (>50%) that but for the delay Patient would have survived.",
            "Patient's estate is entitled to a directed verdict under the substantial factor test of concurrent causes."
        ],
        ans: 2,
        exp: "Under traditional common law proximate causation ('all-or-nothing' rule), a plaintiff must prove by a preponderance (>50%) that the defendant's negligence caused the harm. Where the initial chance of survival was 40%, the plaintiff cannot prove that but for the doctor's error the patient more likely than not would have survived."
    },
    {
        id: 23,
        topic: "Vicarious Liability / Respondeat Superior 'Frolic vs. Detour' Scope",
        fp: "Delivery Driver was driving Employer's delivery truck along an assigned 10-mile delivery route. Driver deviated 4 blocks off the route to purchase a coffee at a drive-through. While turning out of the coffee shop, Driver negligently struck Pedestrian. Pedestrian sued Employer under respondeat superior. In evaluating Employer's liability:",
        opts: [
            "Employer is not vicariously liable, because any unauthorized deviation from an assigned route constitutes a 'frolic' abandoning business.",
            "Employer is vicariously liable, because a minor 4-block deviation for personal comfort is a 'detour' remaining within the scope of employment.",
            "Employer is not vicariously liable, because employers are immune from torts committed while employees operate vehicles off main roads.",
            "Employer is strictly liable under commercial motor vehicle enterprise ownership allocation statutes."
        ],
        ans: 1,
        exp: "Under respondeat superior, an employer is vicariously liable for torts committed within the scope of employment. A minor, slight deviation for personal convenience (a 'detour', such as driving 4 blocks for coffee) remains within the scope, whereas a substantial departure (a 'frolic') falls outside."
    },
    {
        id: 24,
        topic: "Privacy / Public Disclosure of Private Facts & Public Official Newsworthiness",
        fp: "An elected Mayor was hospitalized for emergency surgery following a private, non-public fentanyl overdose in his home. Daily News obtained verified medical confirmation and published a front-page article detailing Mayor's drug overdose and hospitalization. Mayor sued Daily News for Public Disclosure of Private Facts.",
        q: "In Mayor's action against Daily News under California privacy law:",
        opts: [
            "Mayor will prevail, because medical records and drug treatments are confidential private facts highly offensive to a reasonable person.",
            "Daily News will prevail, because the physical fitness and substance abuse of an elected public official is a matter of legitimate public concern (newsworthy).",
            "Daily News will prevail under the absolute commercial speech doctrine applicable to print newspapers.",
            "Mayor will prevail, unless Daily News obtained written consent from the attending physician prior to publication."
        ],
        ans: 1,
        exp: "The tort of Public Disclosure of Private Facts requires that the publicized private facts NOT be of legitimate public concern (newsworthy). The health, substance abuse, and qualifications of elected public officials are protected as newsworthy matters of legitimate public interest."
    },
    {
        id: 25,
        topic: "Joint Tortfeasors / Proposition 51 Non-Economic Several Share Allocation",
        fp: "Pedestrian was injured in a collision caused by Driver A (80% at fault) and Driver B (20% at fault). Pedestrian suffered $100,000 in economic damages (hospital bills) and $500,000 in non-economic damages (pain and suffering). Driver A is completely insolvent and uninsured. Under California Civil Code § 1431.2 (Proposition 51), what is the maximum total amount Pedestrian can collect from Driver B?",
        opts: [
            "$200,000, consisting of 100% of economic damages ($100,000) plus Driver B's 20% several share of non-economic damages ($100,000).",
            "$600,000, because joint and several liability applies to all damages under traditional California common law.",
            "$120,000, representing Driver B's 20% proportional share of the total $600,000 aggregate personal injury judgment.",
            "$100,000, because Proposition 51 completely abolishes all joint liability for economic damages when a co-defendant is insolvent."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1431.2 (Proposition 51), liability for economic damages remains joint and several (allowing collection of 100% of the $100,000 from Driver B), while liability for non-economic damages is several only, limited strictly to Driver B's 20% allocated fault (20% of $500,000 = $100,000). Total recoverable from Driver B = $100,000 + $100,000 = $200,000."
    }
];