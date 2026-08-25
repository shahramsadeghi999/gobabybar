const examData = [
    {
        id: 1,
        topic: "Nuisance / Indemnified / Compensated Injunction (Spur v. Del Webb)",
        fp: "Questions 1–2 are based on the following fact situation:\nFeedlot Corp. established a lawful, well-managed commercial cattle feedlot in an isolated rural desert area. Ten years later, Developer purchased adjacent cheap desert land and built an extensive residential retirement community. The thousands of new residents suffered unbearable odors and flies from the feedlot. Developer sued Feedlot Corp. to permanently enjoin all operations as a public and private nuisance.",
        q: "Under the landmark equitable doctrine of Spur Industries v. Del E. Webb Development Co., the court should:",
        opts: [
            "Grant the permanent injunction unconditionally without compensation, because public health concerns extinguish all private agricultural property interests.",
            "Grant the injunction shutting down the feedlot, but require Developer to indemnify Feedlot Corp. for its reasonable relocation and closure costs.",
            "Deny the injunction completely, because the doctrine of 'coming to the nuisance' operates as an absolute total bar to all equitable relief.",
            "Dismiss the action with prejudice, because residential developers lack legal standing to assert public nuisance claims on behalf of homeowners."
        ],
        ans: 1,
        exp: "Under Spur Industries, Inc. v. Del E. Webb Development Co., where a commercial operation becomes a nuisance solely because a residential developer 'came to the nuisance' and brought the public into the area, a court may grant an injunction to protect public health but equitably require the developer to indemnify the defendant for the reasonable cost of moving or shutting down."
    },
    {
        id: 2,
        topic: "Nuisance / Public vs. Private Standing of Individual Homeowners",
        fp: "Questions 1–2 are based on the following fact situation:\nFeedlot Corp. established a lawful, well-managed commercial cattle feedlot in an isolated rural desert area. Ten years later, Developer purchased adjacent cheap desert land and built an extensive residential retirement community. The thousands of new residents suffered unbearable odors and flies from the feedlot. Developer sued Feedlot Corp. to permanently enjoin all operations as a public and private nuisance.",
        q: "If an individual Homeowner who purchased a home in the development sues Feedlot Corp. for private nuisance damages for loss of property enjoyment, Homeowner's claim will:",
        opts: [
            "Fail, because purchasing a residential home with constructive knowledge of an existing feedlot constitutes an absolute assumption of the risk.",
            "Succeed, because 'coming to the nuisance' is merely one non-dispositive factor in balancing equities and does not bar an innocent resident's damages.",
            "Fail, because private nuisance actions cannot be maintained against lawful agricultural activities that predate residential subdivision zoning.",
            "Succeed only if Homeowner proves Feedlot Corp. expanded its herd volume after Homeowner took physical title and possession of the residence."
        ],
        ans: 1,
        exp: "In modern tort law, 'coming to the nuisance' (purchasing property with knowledge of an existing nuisance) is a relevant factor considered by the court in determining reasonableness, but it is NOT an absolute defense that bars an individual homeowner from recovering damages for substantial and unreasonable interference with the use and enjoyment of their land."
    },
    {
        id: 3,
        topic: "Battery / Non-Consensual Treatment Overriding Express Religious Directives",
        q: "Patient, a competent adult Jehovah's Witness, carried a valid, signed medical alert card explicitly stating: 'NO BLOOD TRANSFUSIONS UNDER ANY CIRCUMSTANCES DUE TO RELIGIOUS BELIEFS.' Patient was rendered unconscious in a traffic collision and rushed to Hospital. Surgeon, knowing of the card and Patient's religious objection, administered a life-saving blood transfusion to prevent fatal blood loss. Patient survived and sued Surgeon for Battery. Result?",
        opts: [
            "Surgeon wins, because consent is implied as a matter of law for all life-saving medical emergency interventions performed on unconscious individuals.",
            "Surgeon wins, because the state's compelling interest in preserving human life automatically overrides non-consensual medical directives in emergencies.",
            "Patient wins, because administering medical treatment in direct violation of a competent patient's known, unambiguous refusal constitutes Battery.",
            "Patient wins only if Patient can demonstrate permanent physical organ damage resulting directly from the biological blood transfusion."
        ],
        ans: 2,
        exp: "A competent adult has an absolute common law and constitutional right to refuse medical treatment. When a physician has actual knowledge of a patient's express, unambiguous refusal of a specific procedure (such as a blood transfusion card), administering that procedure against the patient's known command constitutes an intentional Battery, even if the procedure saves the patient's life."
    },
    {
        id: 4,
        topic: "Defamation / Compelled Self-Defamation in Wrongful Employment Termination",
        q: "Employer falsely and maliciously accused Cashier of stealing $500 from the company safe and fired her. When Cashier applied for new accounting jobs, prospective employers asked why she was terminated from her prior job. To be candid, Cashier was forced to repeat Employer's false theft accusation, causing prospective employers to reject her. Cashier sued Employer for Defamation. Under the Compelled Self-Defamation doctrine:",
        opts: [
            "Employer is not liable, because the publication element of defamation strictly requires direct spoken or written communication by defendant to a third party.",
            "Employer is liable for publication, because it was foreseeable to Employer that Cashier would be under strong compulsion to disclose the stated reason.",
            "Employer is immune from liability under the absolute common law managerial employment reference privilege governing workplace terminations.",
            "Cashier's claim is completely barred, because repeating the statement constituted voluntary assumption of the risk of reputational injury."
        ],
        ans: 1,
        exp: "Under the doctrine of Compelled Self-Defamation (recognized in California in McKinney v. County of Santa Clara), the publication requirement is satisfied if the originator of the defamatory statement had reason to know that the defamed person would be under a strong practical compulsion to disclose the defamatory statement to a third party (such as a prospective employer during a job interview)."
    },
    {
        id: 5,
        topic: "Strict Products Liability / Complex Technical Designs (Soule v. General Motors)",
        q: "Driver was injured in a front-wheel collision when the vehicle's wheel assembly collapsed rearward into the floorboard. In Driver's strict products liability design defect suit under California law (Soule v. General Motors Corp.), Driver requested a jury instruction on the Consumer Expectation Test. General Motors objected, arguing the complex automotive collision physics required the Risk-Benefit test. The trial court should:",
        opts: [
            "Grant a directed verdict for General Motors, because complex vehicle crashworthiness claims cannot be maintained under strict products liability.",
            "Refuse both instructions and submit the case to the jury under a simple common law gross negligence standard of automotive manufacturing.",
            "Grant the Consumer Expectation instruction, because consumers have an absolute right to expect their motor vehicles will not collapse in traffic accidents.",
            "Refuse the Consumer Expectation instruction, because the mechanical collision performance of complex frame assemblies is beyond ordinary consumer experience."
        ],
        ans: 3,
        exp: "Under Soule v. General Motors Corp. (8 Cal.4th 548), the Consumer Expectation Test is reserved ONLY for cases where the everyday experience of the product's users permits a conclusion that the design violated minimum safety assumptions. Where the technical mechanics of the product's behavior in a complex collision involve specialized engineering and expert crash physics beyond ordinary consumer experience, the Consumer Expectation test is inapplicable, and the case MUST be tried under the Risk-Benefit / Risk-Utility test."
    },
    {
        id: 6,
        topic: "Vicarious Liability / The Privette Doctrine (Hiring Entity Immunity to Contractor Employees)",
        q: "Landowner hired Independent Contractor Roofing to repair a commercial roof. Roofing's employee, Roofer, fell through an unguarded, open skylight on the roof that Roofing knew about, suffering severe injuries. Roofer collected workers' compensation benefits from Roofing and then sued Landowner in tort for failing to provide safety barricades. Under California law (Privette v. Superior Court):",
        opts: [
            "Landowner is strictly liable under the Peculiar Risk Doctrine for hiring an independent contractor to perform inherently dangerous elevated work.",
            "Landowner is not liable, because a hiring entity delegates workplace safety duties to the independent contractor and is not liable to the contractor's employees.",
            "Landowner is vicariously liable under the non-delegable duty doctrine governing commercial premises maintenance open to invitees.",
            "Landowner is liable only for economic damages under California Proposition 51 proportional fault allocation rules."
        ],
        ans: 1,
        exp: "Under the landmark Privette Doctrine (Privette v. Superior Court, 5 Cal.4th 689 / Hooker v. Department of Transportation), when an independent contractor is hired, the hiring entity delegates all workplace safety responsibilities to the contractor. The hiring entity is NOT liable in tort for injuries sustained by the contractor's own employees (who are covered by workers' compensation), unless the hiring entity affirmatively contributed to the injury by retaining control and actively exercising it."
    },
    {
        id: 7,
        topic: "Negligence / Commercial Sports Instructors Increasing Inherent Risks (Galardi)",
        q: "Student enrolled in an intermediate horseback jumping class. Commercial Riding Instructor directed Student to jump an unstable 5-foot double obstacle in heavy mud that exceeded the horse's technical capability and was unsafe for intermediate riders. The horse tripped and crushed Student's leg. In Student's negligence suit, Instructor asserted Primary Assumption of Risk. Under California law (Galardi v. Seahorse Riding Club):",
        opts: [
            "Instructor is immune under Primary Assumption of Risk, because falling and horse trips are inherent risks of equestrian jumping sports.",
            "Instructor is liable, because a sports instructor owes an affirmative duty of care not to increase the risks inherent in the sport beyond its normal range.",
            "Instructor is strictly liable under commercial bailment rules for leasing unpredictable domestic animals to amateur recreational riders.",
            "Student's claim is barred, because intermediate equestrian participants assume all risks of jumping obstacles selected by licensed trainers."
        ],
        ans: 1,
        exp: "Under Galardi v. Seahorse Riding Club (16 Cal.App.4th 817) and Knight v. Jewett, although participants assume inherent risks of sports, coaches, commercial guides, and instructors owe a distinct duty of care NOT to increase the risks inherent in the sport beyond those that are natural and ordinary (e.g., forcing a student onto jumps that are recklessly beyond their skill level)."
    },
    {
        id: 8,
        topic: "Defamation / California Anti-SLAPP Statute Burden Shifting (Cal. CCP § 425.16)",
        q: "Citizen spoke at an open, televised City Council public meeting, stating that Developer's proposed commercial rezoning project would contaminate municipal groundwater. Developer filed a $10,000,000 Defamation lawsuit against Citizen. Citizen filed a Special Motion to Strike under California's Anti-SLAPP Statute (Cal. CCP § 425.16). In ruling on the motion:",
        opts: [
            "The court must deny the motion automatically, because constitutional free speech claims must be adjudicated exclusively by a trial jury.",
            "The court will grant the motion only if Citizen proves by clear and convincing evidence that the groundwater statements were 100% scientifically accurate.",
            "The court will grant the motion and dismiss the suit, unless Developer establishes a probability of prevailing on the merits with admissible evidence.",
            "Developer is entitled to an automatic award of statutory attorney fees for opposing an unverified procedural motion to strike."
        ],
        ans: 2,
        exp: "Under California's Anti-SLAPP statute (Cal. Code of Civ. Proc. § 425.16), a two-prong test applies: (1) defendant must show the challenged claim arises from protected speech in connection with a public issue or official proceeding; once shown, (2) the burden shifts to plaintiff to demonstrate a 'probability of prevailing' with legally sufficient evidence. If plaintiff fails, the court strikes the complaint and awards attorney fees to defendant."
    },
    {
        id: 9,
        topic: "Joint Tortfeasors / Sliding-Scale / Mary Carter Settlements (Tech-Bilt)",
        q: "Plaintiff sued Manufacturer and Distributor for a $1,000,000 injury. Prior to trial, Plaintiff entered a 'sliding-scale' settlement with Distributor, whereby Distributor paid $0 upfront, guaranteed a $200,000 recovery, and agreed that Distributor's liability would decrease dollar-for-dollar based on the amount Plaintiff collected from Manufacturer at trial. Under California law (Tech-Bilt v. Woodward-Clyde):",
        opts: [
            "The sliding-scale settlement is illegal per se under California public policy and results in the mandatory dismissal of Plaintiff's entire lawsuit.",
            "The settlement must be evaluated by the court to determine whether it is within the 'reasonable range' (ballpark) of the settling party's proportional fault.",
            "The non-settling Manufacturer is automatically released from all civil liability as a matter of common law joint tortfeasor discharge.",
            "Manufacturer is bound by the terms of the settlement and is precluded from seeking jury allocation of comparative fault at trial."
        ],
        ans: 1,
        exp: "Under California Code of Civil Procedure § 877.6 and Tech-Bilt, Inc. v. Woodward-Clyde & Associates (38 Cal.3d 488), sliding-scale / 'Mary Carter' settlement agreements are scrutinized by the trial court to ensure they are made in 'good faith.' The court must determine whether the settlement figure is in the 'ballpark' of the settling defendant's proportional share of comparative liability."
    },
    {
        id: 10,
        topic: "Conversion / Intangible Digital Property & Domain Names (Kremen v. Cohen)",
        q: "Owner registered a valuable commercial internet domain name ('sex.com'). Hacker sent a forged letter on fake letterhead to Registrar, fraudulently claiming Owner had surrendered the domain. Without verifying the signature, Registrar transferred the domain name to Hacker, who made millions in advertising revenue before fleeing. Owner sued Registrar for Conversion of the domain name. Under California law (Kremen v. Cohen):",
        opts: [
            "Registrar is not liable for Conversion, because the common law tort of conversion applies strictly and exclusively to tangible, physical chattels.",
            "Registrar is immune under the federal Communications Decency Act of 1996 (47 U.S.C. § 230) for domain registry administrative processing.",
            "Owner's claim is strictly limited to breach of the domain registration service contract against the offshore domain registrar.",
            "Registrar is liable for Conversion, because intangible property rights (like domain names) merged in a document or electronic system are subject to conversion."
        ],
        ans: 3,
        exp: "Under Kremen v. Cohen (337 F.3d 1024, 9th Cir. applying California law), California applies the tort of Conversion to intangible property rights (such as internet domain names, patent rights, stock certificates, and digital accounts) where there is an established property right capable of precise definition and exclusive control."
    },
    {
        id: 11,
        topic: "Landowner Duty / Natural Hazards & Lateral Support (Sprecher v. Adamson Companies)",
        q: "Landowner owned a large parcel of natural, undeveloped hillside land above Malibu. Because of natural, unassisted geological heavy rains, a massive natural landslide began shifting on Landowner's property toward Neighbor's oceanfront home below. Landowner knew of the active slide for months, but took no corrective measures because the landslide was 100% natural. The slide crushed Neighbor's house. Under California law (Sprecher v. Adamson):",
        opts: [
            "Landowner is immune from all liability, because common law landowners owe zero legal duties to protect adjoining owners from purely natural conditions.",
            "Landowner is strictly liable under the absolute common law right of subterranean lateral and subjacent structural support.",
            "Landowner is liable in negligence, because California has repudiated the natural condition immunity, imposing a duty of reasonable care for natural hazards.",
            "Neighbor's claim is barred by the doctrine of coming to the nuisance, because hillside terrain carries natural landslide propensities."
        ],
        ans: 2,
        exp: "In Sprecher v. Adamson Companies (30 Cal.3d 358), California abolished the historical common law immunity for 'natural conditions' of land. A possessor of land owes a duty of ordinary reasonable care to manage natural conditions on their property (including natural landslides and trees) to prevent unreasonable risks of harm to persons outside the land."
    },
    {
        id: 12,
        topic: "False Imprisonment / Excessive Force in Merchant's Detention",
        q: "Shop Guard had reasonable grounds to believe Shopper had concealed an unpaid $10 lipstick in her purse. Guard grabbed Shopper by the hair, dragged her 100 feet across the crowded sales floor while screaming obscenities at her, threw her onto a concrete floor in a back storage closet, and handcuffed her to a pipe for 10 minutes. Shopper was carrying the stolen lipstick. In Shopper's suit for Battery and False Imprisonment:",
        opts: [
            "Shopkeeper's Privilege succeeds completely, because catching an actual guilty shoplifter provides an absolute complete defense to all intentional torts.",
            "Guard is protected under the common law privilege of citizen's arrest, because an actual misdemeanor theft occurred in Guard's presence.",
            "Shopper is restricted to nominal damages of $1.00 because the recovery of stolen merchant inventory extinguishes compensatory liability.",
            "Shopkeeper's Privilege fails, because detaining a suspected shoplifter using excessive physical force or an unreasonable manner forfeits the privilege."
        ],
        ans: 3,
        exp: "The Shopkeeper's Privilege (Cal. Penal Code § 490.5 / Restatement (Second) of Torts § 120A) requires that the detention be: (1) on reasonable grounds; (2) for a reasonable period of time; and (3) in a REASONABLE MANNER with reasonable, non-excessive force. Using unreasonable physical violence (dragging by hair) or public humiliation forfeits the privilege, rendering the merchant liable for Battery and False Imprisonment."
    },
    {
        id: 13,
        topic: "Strict Products Liability / Post-Market Safety Feasibility (Ault v. Harvester)",
        q: "Machinist was injured when an unshielded wood planer ejected a wood knot. In a strict products liability design defect action against Manufacturer, Machinist offered expert testimony that a retractable polycarbonate safety guard was technologically and economically feasible when the planer was built. Manufacturer argued the planer was state-of-the-art. Under California's Risk-Benefit balancing test:",
        opts: [
            "Manufacturer prevails as a matter of law, because complying with the prevailing commercial 'state-of-the-art' provides an absolute defense.",
            "Machinist can prevail, because proving the technical and financial feasibility of a safer alternative design demonstrates a design defect.",
            "Machinist must prove that Manufacturer acted with conscious, reckless indifference to the physical safety of industrial consumers.",
            "Manufacturer is immune from liability, because commercial industrial machinery operators assume all risks of high-speed ejection hazards."
        ],
        ans: 1,
        exp: "Under California's Risk-Benefit test (Barker v. Lull / Grimshaw v. Ford Motor Co.), the feasibility, mechanical availability, and adverse economic consequences of a safer alternative design are central factors. If the plaintiff proves a safer alternative design was mechanically feasible and cost-effective, the product's design is deemed defective regardless of general industry custom."
    },
    {
        id: 14,
        topic: "Negligence / Loss of Chance Causation in California",
        q: "Oncologist negligently failed to biopsy Patient's breast tumor. Due to the 1-year delay, the cancer metastasized. Undisputed expert testimony proved that timely diagnosis would have given Patient a 45% chance of long-term survival, but the delay reduced her chance to 15% (a 30% lost chance). In Patient's medical malpractice suit in California (Dumas v. Cooney):",
        opts: [
            "Patient recovers 30% of the total wrongful death value under statutory proportional loss of chance recovery rules.",
            "Patient recovers full 100% damages, because medical delays resulting in physical metastasis create a conclusive presumption of causation.",
            "Patient cannot recover under traditional proximate cause, because California has rejected the proportional 'loss of chance' doctrine for failures to establish >50% but-for causation.",
            "Patient's claim is governed by pure comparative fault allocation between the underlying oncology biology and physician neglect."
        ],
        ans: 2,
        exp: "In Dumas v. Cooney (235 Cal.App.3d 1593) and subsequent precedents, California REJECTED the proportional 'loss of chance' doctrine in medical malpractice. A plaintiff must still satisfy the traditional 'reasonable medical probability' standard (>50% chance of survival but for the negligence). Because the patient's initial chance was under 50% (45%), traditional but-for causation cannot be established."
    },
    {
        id: 15,
        topic: "Economic Torts / Preemption of Common Law Claims by CUTSA",
        q: "Tech Startup sued Former Employee for stealing corporate customer lists and software source code. In its complaint, Tech Startup asserted a statutory claim under the California Uniform Trade Secrets Act (CUTSA) along with common law tort claims for Conversion, Intentional Interference with Prospective Economic Advantage, and Breach of Fiduciary Duty based on the exact same nucleus of stolen data. Under California law:",
        opts: [
            "Tech Startup is entitled to pursue both the statutory CUTSA remedies and all common law tort remedies simultaneously to a cumulative double judgment.",
            "The statutory CUTSA claim is dismissed, because common law intentional property torts supersede subsequent statutory trade secret codifications.",
            "The common law claims are permitted only if Tech Startup waives all rights to recover statutory exemplary damages under CUTSA.",
            "The common law tort claims are preempted by CUTSA to the extent they are based on the same factual nucleus as the trade secret misappropriation."
        ],
        ans: 3,
        exp: "Under California law (Silvaco Data Systems v. Intel Corp. / K.C. Multimedia, Inc. v. Bank of America), the California Uniform Trade Secrets Act (CUTSA) PREEMPTS and displaces common law tort claims (such as conversion, unfair competition, and intentional interference) that are based on the identical factual nucleus of trade secret misappropriation."
    },
    {
        id: 16,
        topic: "Trespass to Land / Artificial Weather Modification (Cloud Seeding)",
        q: "Ski Resort hired Cloud Seeder to inject silver iodide into passing rain clouds above Ski Resort's property to generate snow. The cloud seeding generated a catastrophic, localized 10-inch torrential downpour that overwhelmed the watershed, causing a flash flood that destroyed Downstream Farmer's orchard. In Downstream Farmer's tort action against Ski Resort:",
        opts: [
            "Ski Resort is completely immune from all civil liability under the natural atmospheric weather modification public utility privilege.",
            "Ski Resort is liable in negligence/trespass, because intentionally diverting or artificially accelerating atmospheric waters that flood lower lands is tortious.",
            "Ski Resort is not liable, because clouds and rain are natural atmospheric phenomena classified as common law Acts of God.",
            "Ski Resort is strictly liable only if Farmer held a certified riparian water extraction permit issued by the state water board."
        ],
        ans: 1,
        exp: "While landowners have rights to develop property, artificially modifying weather or cloud seeding that causes unnatural, concentrated, destructive volumes of water to invade and flood downstream property constitutes an actionable Trespass to Land and Negligence (analogous to artificially altering surface water drainage)."
    },
    {
        id: 17,
        topic: "Negligence / Duty to Prevent Suicide of Institutional Inmate (De Montis)",
        q: "Inmate was booked into County Jail. During the intake psychiatric screening, Jail Psychiatrist noted Inmate had made multiple active suicide attempts, was actively psychotic, and mandated continuous 15-minute suicide watch. Jail Guards placed Inmate in an unmonitored cell containing exposed overhead pipes and bedsheets. Inmate committed suicide. In the wrongful death action against County:",
        opts: [
            "County is not liable, because suicide is an intentional, voluntary act of the decedent that acts as a superseding cause cutting off proximate liability.",
            "County is completely immune from all civil liability under the mandatory penal incarceration sovereign immunity doctrine.",
            "County is liable in negligence, because a custodial institution that takes a person into custody with knowledge of suicidal peril owes a duty to prevent self-harm.",
            "County is liable only if the jail guards acted with specific criminal malice and premeditated homicidal intent."
        ],
        ans: 2,
        exp: "While suicide is traditionally an independent superseding cause, an established exception applies where the defendant has a special custodial relationship with the decedent (such as a jail, prison, or psychiatric hospital) and has specific knowledge that the person is likely to self-harm. In such cases, the duty of custody encompasses protecting the inmate from their own foreseeable self-destructive acts."
    },
    {
        id: 18,
        topic: "Strict Liability / Livestock Trespass in 'Open Range' vs. 'Fencing Out' Jurisdictions",
        q: "Cattle Rancher owned 200 steers in a traditional common law 'Fencing In' jurisdiction. The steers pushed through a weak boundary fence, wandered onto Neighbor's cultivated wheat field, and ate $20,000 worth of grain. Neighbor had not built an outer fence around his wheat field. In Neighbor's strict liability suit against Rancher for livestock trespass:",
        opts: [
            "Neighbor loses, because agricultural property owners in all rural jurisdictions bear an absolute legal duty to 'fence out' wandering cattle.",
            "Rancher is liable only if Neighbor proves Rancher intentionally drove the steers onto the cultivated wheat field.",
            "Rancher is immune from liability under the statutory California Right to Farm Act for ordinary livestock grazing.",
            "Rancher is strictly liable for the trespass of his livestock, because common law jurisdictions require livestock owners to fence in their animals."
        ],
        ans: 3,
        exp: "At common law (the 'Fencing In' rule), an owner of domestic livestock (cattle, horses, sheep) is STRICTLY LIABLE for the physical trespass of their animals onto the land of another, including damage to crops and soil, without requiring proof of negligence or intentional driving."
    },
    {
        id: 19,
        topic: "IIED / Employer Retaliation & Racial Harassment (Alcorn v. Anbro Engineering)",
        q: "Supervisor became enraged when African-American Employee stood up for legal union rights. Supervisor shouted vicious, degrading racial slurs at Employee, slammed a desk, and immediately fired Employee in front of all coworkers to humiliate him. Employee suffered acute shock, insomnia, and nausea. In Employee's suit for IIED under California law (Alcorn v. Anbro Engineering):",
        opts: [
            "Employer will prevail, because verbal racial epithets and job termination are classified as ordinary workplace indignities that are non-actionable in tort.",
            "Employer will prevail, because the California Workers' Compensation Act provides the exclusive remedy for all emotional injuries occurring in the workplace.",
            "Employee will prevail, because an employer's abuse of a position of power through vicious racial slurs and pretextual firing constitutes extreme and outrageous conduct.",
            "Employee will prevail only if Employee can prove that the verbal confrontation took place in an outdoor public forum."
        ],
        ans: 2,
        exp: "Under Alcorn v. Anbro Engineering, Inc. (2 Cal.3d 493), the California Supreme Court held that where an employer abuses a position of power and authority over a subordinate employee by using egregious racial epithets and humiliating wrongful termination, the conduct exceeds all bounds of decency and is actionable as Intentional Infliction of Emotional Distress (IIED)."
    },
    {
        id: 20,
        topic: "Negligence / Affirmative Duty to Control Dangerous Child with Firearms",
        q: "Father stored a loaded .357 Magnum revolver in an unlocked desk drawer in his home office, fully aware that his 15-year-old Son had severe, violent behavioral disorders, had made threats against classmates, and had repeatedly played with the gun. Son took the gun from the drawer, brought it to a park, and shot Passerby. In Passerby's negligence lawsuit against Father:",
        opts: [
            "Father is not liable, because a parent is never civilly liable for the independent, intentional, criminal shooting rampages of a teenager.",
            "Father is directly liable for his own independent negligence in failing to securely store a deadly firearm in a household with a troubled minor.",
            "Father is vicariously liable under the doctrine of absolute parental respondeat superior for all domestic household weapons.",
            "Father is immune from liability unless Passerby proves Father provided Son with written tactical instructions on how to aim the revolver."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 308 (and California firearm storage negligence rules), an adult who leaves a loaded, deadly firearm accessible to a minor whom they know or should know is troubled, irresponsible, or dangerous is directly liable in ordinary negligence for creating an unreasonable risk of foreseeable shooting harm."
    },
    {
        id: 21,
        topic: "Privacy / Commercial Appropriation - Look-Alikes & Voice-Alikes (Midler v. Ford)",
        q: "Automaker wanted Famous Singer to sing in a national television commercial. Famous Singer refused. Automaker hired a professional voice-impressionist, instructed her to imitate Famous Singer's iconic, distinctive voice as closely as possible, and aired the commercial. Viewers believed Famous Singer was singing. In Famous Singer's suit under California law (Midler v. Ford Motor Co.):",
        opts: [
            "Automaker wins, because common law commercial misappropriation protects actual recorded voice masters and photographs, but excludes live vocal imitations.",
            "Automaker wins under the First Amendment parody defense, because vocal impressions in commercial advertisements are protected artistic performances.",
            "Famous Singer wins, because when a distinctive voice of a professional singer is deliberately imitated to sell a commercial product, the tortfeasor misappropriates her identity.",
            "Famous Singer wins only if she registered her vocal frequency patterns as a federally protected trademark under the Lanham Act."
        ],
        ans: 2,
        exp: "Under Midler v. Ford Motor Co. (849 F.2d 460, 9th Cir. applying California law), when a distinctive voice of a professional singer is widely known and is deliberately imitated in a commercial advertisement to sell products, the sellers have appropriated what is not theirs and are liable for Common Law Commercial Misappropriation of Identity."
    },
    {
        id: 22,
        topic: "Strict Products Liability / Post-Market Safety Warnings to Downstream Users",
        q: "Manufacturer produced a heavy industrial meat-cutting bandsaw. Five years after initial manufacture, Manufacturer learned through international safety reports that bandsaw blade guards were prone to snapping under high RPMs, causing severe blade ejections. Manufacturer had registered owner lists, but issued no recall or safety warnings. Owner's Employee was injured when the guard snapped. Manufacturer is:",
        opts: [
            "Not liable, because a product's safety design is evaluated strictly and frozen as of the date of original factory departure.",
            "Liable, because commercial manufacturers owe a continuing post-sale duty of reasonable care to warn foreseeable users of newly discovered product hazards.",
            "Not liable, because the five-year duration of safe commercial operation creates an irrebuttable presumption of non-defectiveness.",
            "Liable under res ipsa loquitur, because industrial meat bandsaws do not break blades in the absence of negligent factory casting."
        ],
        ans: 1,
        exp: "Under modern products liability rules (Restatement (Third) of Torts: Products Liability § 10 / California law), a manufacturer is liable for failure to provide a reasonable post-sale warning if: (1) the seller knows or should know that the product poses a substantial risk of harm; (2) users can be identified and warned; and (3) the risk of harm is sufficiently great to justify the burden of warning."
    },
    {
        id: 23,
        topic: "Defamation / Defamation of a Deceased Person (Post-Mortem Defamation)",
        q: "Tabloid published a front-page article falsely stating that Decedent, a beloved philanthropist who had died two weeks earlier, had been a secret drug kingpin. Decedent's surviving Adult Son suffered severe emotional distress and public embarrassment. Son sued Tabloid for Defamation for tarnishing the family name. Son's defamation action will:",
        opts: [
            "Succeed, because direct surviving heirs have standing to maintain survival defamation actions within one year of the decedent's death.",
            "Succeed, because falsely imputing felony crimes of moral turpitude constitutes libel per se surviving into probate administration.",
            "Fail only if Tabloid publishes a full, prominent retraction in the next weekly published issue under California Civil Code § 48a.",
            "Fail, because common law defamation is a personal tort that terminates upon the death of the defamed individual, and cannot be brought on behalf of a deceased person."
        ],
        ans: 3,
        exp: "At common law and under California law, a deceased person CANNOT be defamed. Defamation is a personal cause of action that protects the living reputation of a living individual; it terminates upon death, and surviving family members have no independent cause of action for defamation of their deceased relative unless the publication explicitly defames the living survivors directly."
    },
    {
        id: 24,
        topic: "Battery / Transferred Intent Between Different Torts (Assault to Battery)",
        q: "Defendant intended solely to scare Neighbor by firing a bullet into the ground two feet from Neighbor's shoes. The bullet struck a hidden buried boulder in the grass, ricocheted 90 degrees, and struck Bystander standing 30 feet away in the arm. Bystander sued Defendant for Battery. In Bystander's battery action:",
        opts: [
            "Defendant is not liable for Battery, because Defendant intended only an assault (fright) and never intended harmful physical contact with anyone.",
            "Defendant is liable for Battery under transferred intent, because an intent to commit an assault transfers to a completed battery on an unintended third party.",
            "Defendant is liable exclusively in ordinary negligence, because bullet ricochets are classified as unforeseeable physical intervening anomalies.",
            "Defendant is not liable, because the buried subterranean boulder acted as an independent superseding geological cause."
        ],
        ans: 1,
        exp: "Under the doctrine of Transferred Intent, intent transfers not only from person to person, but also from TORT TO TORT (between the five traditional intentional torts: assault, battery, false imprisonment, trespass to land, and trespass to chattels). An intent to commit an Assault (scaring Neighbor) transfers directly to create liability for a completed Battery on an unintended third party (Bystander)."
    },
    {
        id: 25,
        topic: "Negligence / Duty of Commercial Rescuers to Provide Non-Negligent Aid (The Maritime Good Samaritan Rule)",
        q: "Towing Co. operated a commercial maritime vessel-towing business for profit. Boater's engine failed on the ocean, and Boater was drifting toward rocks. Towing Co. arrived and agreed to tow Boater for $500. In connecting the tow line, Towing Co. committed gross negligence by knotting a frayed, rotted line to an unapproved cleat, causing the line to snap and strike Boater. Towing Co. asserted the statutory Good Samaritan defense. Towing Co. is:",
        opts: [
            "Immune from all liability, because maritime rescue operations are protected by absolute admiralty Good Samaritan immunity.",
            "Immune from ordinary negligence, because Good Samaritan statutes shield all emergency sea rescues in the absence of intentional assault.",
            "Liable for negligence, because Good Samaritan statutory immunity does NOT protect professional, commercial rescue operations conducted for business compensation.",
            "Liable only if Boater can prove that the vessel operator held a master captain's license issued by the United States Coast Guard."
        ],
        ans: 2,
        exp: "Standard Good Samaritan statutes and maritime rescue principles shield VOLUNTEERS who render gratuitous emergency aid without expectation of financial reward. They do NOT protect commercial entities, paid maritime salvage companies, or professional operators who render services for business compensation in the ordinary course of commercial enterprise."
    }
];