const examData = [
    {
        id: 1,
        topic: "Res Ipsa Loquitur / Multiple Defendants Burden Shifting",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient underwent lumbar spinal surgery at Medical Center. Surgeon, Anesthesiologist, and Surgical Nurse were present in the operating room. Patient was unconscious throughout the operation. Upon awakening, Patient suffered severe traumatic nerve damage to his right shoulder, an area entirely unrelated to the surgery. Patient sued Surgeon, Anesthesiologist, Surgical Nurse, and Medical Center under res ipsa loquitur.",
        q: "In a jurisdiction following the landmark doctrine of Ybarra v. Spangard, Patient will:",
        opts: [
            "Not prevail against any defendant, because Patient cannot identify the specific instrumentality that caused trauma.",
            "Prevail against all defendants, shifting the burden of initial proof to each defendant to explain their conduct.",
            "Prevail solely against Medical Center under respondeat superior, dismissing all individual medical professionals.",
            "Not prevail, unless Patient presents direct eyewitness testimony establishing that gross surgical negligence occurred."
        ],
        ans: 1,
        exp: "Under Ybarra v. Spangard, where an unconscious surgical patient receives unusual injuries to an unrelated part of the body, res ipsa loquitur applies to all medical personnel who had custody and control, shifting the burden of proof to each defendant to exculpate themselves."
    },
    {
        id: 2,
        topic: "Vicarious Liability / Captain of the Ship Limits",
        fp: "Questions 1–2 are based on the following fact situation:\nPatient underwent lumbar spinal surgery at Medical Center. Surgeon, Anesthesiologist, and Surgical Nurse were present in the operating room. Patient was unconscious throughout the operation. Upon awakening, Patient suffered severe traumatic nerve damage to his right shoulder, an area entirely unrelated to the surgery. Patient sued Surgeon, Anesthesiologist, Surgical Nurse, and Medical Center under res ipsa loquitur.",
        q: "If Surgeon establishes that Surgical Nurse was employed solely by Medical Center and followed standard positioning protocols while Surgeon was scrubbing, Surgeon will:",
        opts: [
            "Remain automatically vicariously liable for all operating room errors under the 'Captain of the Ship' doctrine.",
            "Be held strictly liable as the attending lead physician regardless of independent employer relationships.",
            "Not be vicariously liable for Nurse's routine preparatory acts where Surgeon exercised no direct supervisory control.",
            "Be conclusively presumed liable under res ipsa loquitur without any legal opportunity to introduce rebuttal evidence."
        ],
        ans: 2,
        exp: "Modern tort law limits the 'Captain of the Ship' doctrine: an attending surgeon is not vicariously liable for routine administrative or preparatory acts performed by hospital-employed staff unless the surgeon exercised direct physical supervision and control over the specific act."
    },
    {
        id: 3,
        topic: "NIED / California Direct Victim Doctrine",
        fp: "Questions 3–4 are based on the following fact situation:\nTherapist provided joint family counseling to Mother and Son to address adolescent behavioral problems. During individual sessions with Son, Therapist committed intentional unlawful physical abuse. Mother discovered the abuse six months later and suffered severe psychiatric trauma requiring hospitalization. Mother sued Therapist for Negligent Infliction of Emotional Distress (NIED).",
        q: "Under California's 'Direct Victim' NIED doctrine (Marlene F. v. Affiliated Psychiatric Medical Clinic), Mother will:",
        opts: [
            "Prevail, because Therapist owed an independent duty of care to Mother arising directly from the therapy relationship.",
            "Not prevail, because Mother was not physically present to witness the injury-producing event contemporaneously.",
            "Not prevail, because Mother was never placed within the physical zone of danger of immediate physical impact.",
            "Prevail, because healthcare professionals are held to strict tort liability for all professional misconduct in treatment."
        ],
        ans: 0,
        exp: "Under Marlene F. v. Affiliated Psychiatric Medical Clinic, when a healthcare professional enters a direct professional relationship with a parent to treat a family unit, the professional owes a direct duty of care to the parent. Breach causing severe emotional harm allows direct NIED recovery without satisfying bystander rules."
    },
    {
        id: 4,
        topic: "IIED / Transferred Intent Boundaries",
        fp: "Questions 3–4 are based on the following fact situation:\nTherapist provided joint family counseling to Mother and Son to address adolescent behavioral problems. During individual sessions with Son, Therapist committed intentional unlawful physical abuse. Mother discovered the abuse six months later and suffered severe psychiatric trauma requiring hospitalization. Mother sued Therapist for Intentional Infliction of Emotional Distress (NIED).",
        q: "If Mother also sues Therapist for Intentional Infliction of Emotional Distress (IIED) regarding the abuse of Son, Mother's claim will:",
        opts: [
            "Prevail under traditional transferred intent, because intent to commit an intentional tort transfers automatically to relatives.",
            "Prevail under strict liability, because intentional abuse of minors creates an irrebuttable presumption of liability to parents.",
            "Fail, because parents cannot maintain intentional emotional distress claims where the child survives the physical tort.",
            "Fail under third-party IIED rules unless Therapist knew Mother was present or acted with reckless disregard toward her."
        ],
        ans: 3,
        exp: "Traditional transferred intent does NOT apply to IIED. To recover for IIED directed at a third party, a plaintiff must generally be present at the time and the defendant must know of her presence, or the defendant must act with reckless disregard of a high probability of causing severe emotional distress to a known relative."
    },
    {
        id: 5,
        topic: "Defamation / Libel Per Quod & Special Damages",
        q: "Newspaper printed a false news notice stating: 'Attorney completed a commercial property purchase of 100 Main Street yesterday.' Attorney sued Newspaper for defamation, claiming the article implied to local residents who knew 100 Main Street was an active illegal casino that Attorney was engaged in organized crime. Attorney proved no out-of-pocket pecuniary loss. What is the result?",
        opts: [
            "Attorney wins, because false published written statements implying criminal association constitute libel per se.",
            "Attorney loses, because the statement is libel per quod requiring extrinsic facts, which mandates proof of special damages.",
            "Attorney wins, because commercial print publishers are strictly liable for publishing factually false real estate notices.",
            "Attorney loses, because real estate purchase transactions are matters of public record entitled to an absolute privilege."
        ],
        ans: 1,
        exp: "When a statement is innocent on its face and becomes defamatory only by reference to extrinsic facts, it is defamation per quod. In California and the majority of jurisdictions, libel per quod requires pleading and proof of special (pecuniary) damages to be actionable."
    },
    {
        id: 6,
        topic: "Strict Products Liability / Component Parts Doctrine",
        q: "Valve Co. manufactured standard, non-defective industrial pressure valves and sold 100 units to Crane Corp. Crane Corp. incorporated the valves into heavy mobile cranes without installing required secondary pressure-relief bypass systems, creating an unreasonable risk of explosion. An operator was injured when a valve ruptured under extreme pressure. Is Valve Co. strictly liable?",
        opts: [
            "Yes, because all commercial component manufacturers in the stream of commerce are strictly liable for finished failures.",
            "Yes, because a valve rupturing under pressure constitutes an irrebuttable manufacturing defect under consumer expectation.",
            "No, because a supplier of a non-defective component is not liable unless it participated in integrating the component.",
            "No, because industrial heavy crane operators assume all inherent mechanical risks of hydraulic machinery operation."
        ],
        ans: 2,
        exp: "Under the Component Parts Doctrine, a manufacturer of a non-defective component part is not strictly liable for defects in the integrated finished product unless the component itself was defective or the component maker substantially participated in integrating the part into the finished design."
    },
    {
        id: 7,
        topic: "Public Nuisance / Private Action Special Injury Rule",
        q: "Chemical Plant unlawfully discharged pollutants into a public navigable bay, causing an environmental closure. Commercial Crabber, holding a state commercial license, lost $50,000 in seasonal catch income. Swimmer was deprived of swimming at the public beach. Commercial Crabber sued Chemical Plant for private damages under public nuisance. Chemical Plant moved to dismiss. Result?",
        opts: [
            "Motion denied, because Crabber suffered special pecuniary harm different in kind from the general public's loss of use.",
            "Motion granted, because public nuisance actions can be maintained exclusively by public prosecutors and district attorneys.",
            "Motion granted, because Swimmer and Crabber both suffered damages arising out of the identical water pollution discharge.",
            "Motion denied, because public nuisance creates strict liability for all commercial entities operating adjacent to waterways."
        ],
        ans: 0,
        exp: "A private plaintiff may bring an individual tort action for public nuisance only if they suffered 'special damages'—injury of a different KIND, not merely degree, from that suffered by the general public (such as commercial livelihood disruption versus recreational loss)."
    },
    {
        id: 8,
        topic: "Strict Products Liability / Sophisticated User Defense",
        q: "Chemical Corp. manufactured industrial concentrated solvents and sold them in bulk to Tech Factory. Containers displayed standard hazard icons. Solvents were formulated for and handled exclusively by Tech Factory's certified chemical engineers who were fully trained in chemical handling. Factory Employee suffered respiratory injury due to factory ventilation failure and sued Chemical Corp. for failure to warn. Chemical Corp.'s best defense is:",
        opts: [
            "Lack of vertical privity of contract between the upstream chemical supplier and downstream factory floor employee.",
            "Contributory negligence of the employee in failing to demand personal protective equipment prior to entering room.",
            "Sovereign industrial immunity applicable to chemical suppliers complying with baseline federal packaging standards.",
            "The Sophisticated User Defense, because a supplier has no duty to warn purchasers whose workforce knows the risks."
        ],
        ans: 3,
        exp: "Under the Sophisticated User / Sophisticated Purchaser defense, a manufacturer is not strictly liable for failure to warn where the purchaser or users possess sophisticated professional knowledge of the product's hazards and are in the best position to train employees."
    },
    {
        id: 9,
        topic: "Privacy / False Light Actual Malice Standard",
        q: "Tabloid published a feature story exposing corrupt money laundering in the international art trade. On the cover page beneath the headline 'Crooked Dealers,' Tabloid published a large photograph of Gallery Owner, an honest merchant with no ties to crime. Tabloid knew Gallery Owner was clean but used the photo for visual impact. Gallery Owner sued for False Light Invasion of Privacy. Will Gallery Owner prevail?",
        opts: [
            "No, because Gallery Owner failed to plead and prove out-of-pocket financial loss resulting directly from publication.",
            "Yes, because Tabloid placed Gallery Owner before the public in a highly offensive false light with actual malice.",
            "No, because photographs taken from public sidewalks outside commercial art galleries are protected by absolute immunity.",
            "Yes, but recovery is strictly limited to nominal damages under commercial misappropriation rather than false light."
        ],
        ans: 1,
        exp: "False Light Invasion of Privacy requires: (1) publicity placing plaintiff in a false light before the public; (2) the false light is highly offensive to a reasonable person; and (3) defendant acted with constitutional actual malice (knowledge of falsity or reckless disregard)."
    },
    {
        id: 10,
        topic: "Economic Torts / Interference with Prospective Economic Advantage",
        q: "Contractor was negotiating a lucrative commercial construction contract with Developer, with agreement imminent. Rival, intending solely to ruin Contractor, falsely and maliciously told Developer that Contractor's engineering license had been suspended for fraud. Developer immediately cancelled negotiations. Contractor sued Rival. Contractor will prevail for:",
        opts: [
            "Breach of the implied covenant of good faith and fair dealing, because rivals owe reciprocal duties of fair dealing.",
            "Negligent Interference with Contractual Relations, because Developer and Contractor had not yet executed a writing.",
            "Intentional Interference with Prospective Economic Advantage, due to intentional disruption via independently wrongful acts.",
            "No cause of action, because prospective business negotiations are subject to the absolute privilege of competition."
        ],
        ans: 2,
        exp: "Intentional Interference with Prospective Economic Advantage requires: (1) an economic relationship with probable future economic benefit; (2) defendant's knowledge; (3) intentional acts that are 'independently wrongful' (e.g., defamation); (4) actual disruption; and (5) economic harm."
    },
    {
        id: 11,
        topic: "Defamation / Absolute Judicial Proceedings Privilege",
        q: "Witness was testifying under oath during a civil contract trial. Under cross-examination, Witness intentionally, falsely, and maliciously stated that Defendant had previously served five years in federal prison for armed robbery. Defendant sued Witness for slander per se. Witness moved to dismiss based on privilege. The court should:",
        opts: [
            "Grant the motion, because statements made by witnesses in judicial proceedings are protected by an absolute privilege.",
            "Deny the motion, because an absolute privilege is defeated upon proof that the speaker acted with malice and hatred.",
            "Deny the motion, because imputing a felony crime of moral turpitude constitutes actionable slander per se without defenses.",
            "Grant the motion only if Witness files a formal written retraction within thirty days of the conclusion of the trial."
        ],
        ans: 0,
        exp: "Statements made by judges, attorneys, parties, and witnesses in the course of judicial proceedings and having some relation to the litigation are protected by an ABSOLUTE privilege that cannot be overcome by malice or ill will."
    },
    {
        id: 12,
        topic: "Conversion / Substantial Unauthorized Deviation",
        q: "Owner left his collector car with Valet to park in an adjacent lot 50 yards away. Valet instead drove the car on a 100-mile highway joyride. While lawfully stopped at a red light on the joyride, the car was rear-ended by an uninsured drunk driver and totaled. Owner sued Valet for Conversion. Will Owner recover the full market value of the vehicle?",
        opts: [
            "No, because the drunk driver's negligent collision was an independent intervening superseding cause excusing Valet.",
            "No, because Valet came into lawful possession initially, limiting Owner's recovery to temporary rental value.",
            "Yes, but only if Owner proves Valet operated the vehicle in a reckless or grossly negligent manner during joyride.",
            "Yes, because Valet's major unauthorized deviation constituted substantial dominion, imposing forced-sale liability."
        ],
        ans: 3,
        exp: "Conversion is an intentional exercise of substantial dominion or control over chattel that severely interferes with owner rights. A major unauthorized deviation (100 miles vs 50 yards) constitutes conversion as a matter of law, forcing the converter to pay full market value."
    },
    {
        id: 13,
        topic: "Negligence / Landowner Duty to Anticipated Trespassers",
        q: "Rancher discovered that local hikers frequently walked across a corner of his rural acreage near a collapsed, unsealed 80-foot deep vertical mine shaft. Rancher did not post warnings or cover the opening. Hiker walked along the path at dusk, fell into the shaft, and was severely injured. Is Rancher liable to Hiker?",
        opts: [
            "No, because landowners owe no legal duty of care to trespassers other than refraining from willful and wanton traps.",
            "Yes, because landowners owe known or anticipated trespassers a duty to warn of highly dangerous hidden artificial conditions.",
            "Yes, under strict premises liability, because unsealed vertical mine shafts constitute ultrahazardous dangerous activities.",
            "No, because open mine shafts located on rural land are classified as natural geological hazards under premises law."
        ],
        ans: 1,
        exp: "Landowners owe known or anticipated trespassers a duty to warn of or make safe artificial conditions that involve a risk of death or serious bodily harm, known to the landowner, and unlikely to be discovered by trespassers."
    },
    {
        id: 14,
        topic: "Negligence / Firefighter's Rule Independent Acts Exception",
        q: "Police Officer pulled over Speeding Driver on a highway shoulder. While Officer was writing a ticket at Driver's window, Drunk Motorist drifted onto the shoulder and struck Officer. Officer sued Speeding Driver for negligence in creating the roadside traffic stop. Speeding Driver raised the Firefighter's Rule. Speeding Driver's defense will:",
        opts: [
            "Succeed, because the Firefighter's Rule bars first responders from recovering for injuries sustained during on-duty enforcement.",
            "Fail, because police officers are completely exempt from common law assumption of risk doctrines under federal laws.",
            "Succeed, because police officers assume all risks of highway traffic hazards when conducting enforcement stops.",
            "Fail, because the Firefighter's Rule only protects individuals whose negligence necessitated presence, not third parties."
        ],
        ans: 0,
        exp: "The Firefighter's Rule bars recovery against the person whose original negligence caused the officer to respond (Speeding Driver). Officer may sue the independent third party (Drunk Motorist), but Speeding Driver is shielded from liability."
    },
    {
        id: 15,
        topic: "Consent / Exceeding Scope of Medical Consent",
        q: "Patient signed a formal consent form authorizing Surgeon to perform an elective laparoscopic appendectomy. During the operation, Surgeon noticed non-threatening, benign uterine cysts that posed no immediate health hazard. Surgeon excised the cysts without complication. Patient sued Surgeon for Battery. Will Patient prevail?",
        opts: [
            "No, because general surgical consent forms confer broad discretion upon surgeons to remedy any discovered abnormality.",
            "No, because Patient experienced beneficial therapeutic treatment and suffered no measurable physical injury or loss.",
            "Yes, because operating on body organs beyond the scope of express consent is battery absent life-threatening emergency.",
            "Yes, but recovery is strictly limited to nominal damages under professional medical negligence rather than battery."
        ],
        ans: 2,
        exp: "Performing a surgical procedure substantially different from or beyond the scope of that consented to constitutes Battery, unless an unanticipated life-threatening emergency arises making it impracticable to obtain consent."
    },
    {
        id: 16,
        topic: "Strict Products Liability / Learned Intermediary Doctrine",
        q: "Drug Co. manufactured a prescription antibiotic and provided complete, accurate warnings of potential kidney damage to prescribing Physicians via packaging literature, but provided no direct consumer warnings. Patient took the prescribed drug and developed kidney failure. Patient sued Drug Co. under strict products liability. Result?",
        opts: [
            "Drug Co. is strictly liable, because modern consumer protection statutes require warnings directly to the end user.",
            "Drug Co. is liable under the consumer expectation test because ordinary consumers do not expect kidney failure.",
            "Drug Co. is not liable only if Patient executed a formal informed consent waiver at the dispensing retail pharmacy.",
            "Drug Co. is not liable, because under the Learned Intermediary Doctrine, the duty is satisfied by warning doctors."
        ],
        ans: 3,
        exp: "Under the Learned Intermediary Doctrine, a manufacturer of prescription drugs discharges its duty to warn by providing adequate warnings to the prescribing physician, who evaluates the patient's individual medical risks."
    },
    {
        id: 17,
        topic: "Negligence / Loss of Chance Doctrine",
        q: "Patient visited Physician with chest pain. Physician negligently failed to order an EKG, misdiagnosing the condition as heartburn. Patient suffered a heart attack 24 hours later. Expert testimony established that with timely diagnosis, Patient had a 40% chance of recovery, which dropped to 0% due to the delay. In a traditional proximate cause jurisdiction:",
        opts: [
            "Patient wins full damages, because any medical malpractice resulting in adverse health events creates causation.",
            "Patient loses under traditional but-for causation, because Patient cannot prove it was more likely than not (>50%) fatal.",
            "Patient recovers 40% of full damages under pure comparative fault allocation between disease and medical delay.",
            "Patient loses, because heart attacks are classified as naturally occurring biological events cutting off liability."
        ],
        ans: 1,
        exp: "Under traditional common law proximate causation ('all-or-nothing' rule), a plaintiff must prove by a preponderance (>50%) that the defendant's negligence caused the harm. Where the initial chance of survival was 40%, the plaintiff cannot prove that but for the doctor's error the patient more likely than not would have survived."
    },
    {
        id: 18,
        topic: "Defamation / Qualified Common Interest Privilege",
        q: "Former Employer wrote a candid reference letter to Prospective Employer regarding Employee, stating: 'Employee was repeatedly reprimanded for sloppy bookkeeping.' Employer honestly believed the statement based on internal audit reports. The reports were later proven erroneous. Employee sued Employer for defamation. Result?",
        opts: [
            "Employer is protected by a qualified privilege for communications on common business interest, not lost absent malice.",
            "Employer is liable for defamation per se, because statements adversely affecting one's profession carry strict liability.",
            "Employer is protected by an absolute privilege identical to judicial and legislative proceeding communications.",
            "Employer is liable, because qualified privileges apply exclusively to public figures and media defendants."
        ],
        ans: 0,
        exp: "A qualified privilege protects statements made in good faith on a subject in which the speaker and recipient have a shared legitimate interest (such as employment references). The privilege is lost only if plaintiff proves actual malice."
    },
    {
        id: 19,
        topic: "Privacy / Public Disclosure of Private Facts Newsworthiness",
        q: "A prominent politician was hospitalized for emergency surgery following a drug overdose. Daily News obtained verified medical confirmation and published a front-page article detailing the overdose and hospitalization. Politician sued Daily News for Public Disclosure of Private Facts. Result?",
        opts: [
            "Politician wins, because medical records are confidential and disclosure is highly offensive to a reasonable person.",
            "Daily News wins under the absolute commercial speech doctrine applicable to print newspapers.",
            "Daily News wins, because the physical fitness and substance abuse of an elected public official is newsworthy.",
            "Politician wins, unless Daily News obtained written consent from the attending physician prior to publication."
        ],
        ans: 2,
        exp: "The tort of Public Disclosure of Private Facts requires that the publicized private facts NOT be of legitimate public concern (newsworthy). The health and qualifications of elected public officials are protected as newsworthy matters of public interest."
    },
    {
        id: 20,
        topic: "Vicarious Liability / Frolic vs. Detour Scope",
        q: "Delivery Driver was driving Employer's delivery truck along an assigned 10-mile delivery route. Driver deviated 3 blocks off the route to purchase a coffee at a drive-through. While turning out of the coffee shop, Driver negligently struck Pedestrian. Pedestrian sued Employer under respondeat superior. Employer is:",
        opts: [
            "Not vicariously liable, because any unauthorized deviation from an assigned route constitutes a 'frolic' abandoning business.",
            "Not vicariously liable, because employers are immune from torts committed while employees operate vehicles off main roads.",
            "Vicariously liable under strict parental-style liability for providing employees with heavy commercial vehicles.",
            "Vicariously liable, because a minor 3-block deviation for personal comfort is a 'detour' remaining within job scope."
        ],
        ans: 3,
        exp: "Under respondeat superior, an employer is vicariously liable for torts committed within the scope of employment. A minor, slight deviation for personal convenience (a 'detour') remains within the scope, whereas a substantial departure (a 'frolic') falls outside."
    },
    {
        id: 21,
        topic: "Negligence / Landowner Invitee Slip-and-Fall Notice",
        q: "Customer was shopping in Supermarket. Another customer dropped a jar of mayonnaise in the aisle. Thirty seconds later, before store employees had any opportunity to discover or clean the spill, Customer slipped on the mayonnaise and broke his hip. Customer sued Supermarket for negligence. Customer will:",
        opts: [
            "Prevail under res ipsa loquitur, because commercial store aisles do not become slippery absent management negligence.",
            "Lose, because Supermarket had neither actual knowledge nor constructive notice of the hazard with time to remedy it.",
            "Prevail, because commercial business owners are held strictly liable for all foreign substance slip-and-fall injuries.",
            "Lose, because commercial retail shoppers assume the risk of transient spills under general premises doctrines."
        ],
        ans: 1,
        exp: "A business landowner owes invitees a duty of reasonable care to inspect and make safe, but is not an insurer of safety. To establish breach for a slip-and-fall, plaintiff must prove the owner had actual knowledge or constructive notice with time to remedy."
    },
    {
        id: 22,
        topic: "Negligence / Strict Liability for Abnormally Dangerous Activity Factors",
        q: "Chemical Co. stored 50,000 gallons of highly toxic, water-soluble fumigation gas in large tanks inside a densely populated residential suburb. Despite state-of-the-art tanks and utmost care, an unpreventable seismic tremor ruptured a valve, releasing gas and injuring neighbors. Chemical Co. is:",
        opts: [
            "Strictly liable, because storing massive quantities of toxic gas in a suburb constitutes an abnormally dangerous activity.",
            "Not liable, because the seismic tremor was an Act of God superseding cause that completely extinguished all tort liability.",
            "Not liable, because Chemical Co. exercised utmost reasonable care and utilized modern state-of-the-art storage technology.",
            "Liable under negligence per se for violating common law industrial zoning recommendations."
        ],
        ans: 0,
        exp: "Under Restatement (Second) of Torts §§ 519–520, storing massive quantities of highly toxic gas in a densely populated suburb is an ultrahazardous activity that imposes strict liability regardless of utmost care."
    },
    {
        id: 23,
        topic: "IIED / Special Sensitivity Known to Defendant",
        q: "Neighbor knew that Homeowner had an extreme, pathological, clinically diagnosed phobia of dead birds. To torment Homeowner over a property line dispute, Neighbor wrapped three dead crows in a gift box and mailed them to Homeowner's doorstep. Homeowner opened the box, suffered a severe panic attack, and required emergency psychiatric hospitalization. Homeowner sued Neighbor for IIED. Result?",
        opts: [
            "Neighbor wins, because mailing dead birds is not extreme and outrageous judged by an average member of the community.",
            "Neighbor wins, because the tort of IIED strictly requires physical impact or battery at the time of emotional trauma.",
            "Homeowner wins, because conduct becomes extreme and outrageous when intentionally targeting a known special vulnerability.",
            "Homeowner wins, but recovery is capped at nominal statutory damages under common law trespass to chattels."
        ],
        ans: 2,
        exp: "Conduct that might otherwise not be considered extreme and outrageous may become so if the defendant proceeds with knowledge of the plaintiff's particular sensitivity or psychological susceptibility."
    },
    {
        id: 24,
        topic: "Joint Tortfeasors / Comparative Fault Allocation & Joint Liability",
        q: "In a jurisdiction retaining traditional joint and several liability with pure comparative fault, Pedestrian was injured in a collision caused by Driver A (80% at fault) and Driver B (20% at fault). Pedestrian suffered $100,000 in damages and was 0% at fault. Driver A is completely insolvent and uninsured. How much can Pedestrian collect from Driver B?",
        opts: [
            "$20,000, because pure comparative fault restricts a joint tortfeasor's liability strictly to allocated fault percentage.",
            "$50,000, representing an equal pro-rata contribution share between adjudicated co-defendants.",
            "$0, because insolvency of the primary tortfeasor bars recovery against secondary minor contributors.",
            "$100,000, because under joint and several liability, an innocent plaintiff may collect full judgment from any liable tortfeasor."
        ],
        ans: 3,
        exp: "Under traditional joint and several liability, each tortfeasor whose negligence was a proximate cause of an indivisible injury is liable to the innocent plaintiff for the entire amount of damages ($100,000)."
    },
    {
        id: 25,
        topic: "Strict Products Liability / Design Defect Risk-Utility Test",
        q: "Auto Corp. designed a compact car with the fuel tank positioned behind the rear axle. In low-speed rear-end collisions, the tank ruptured, causing fires. At trial for design defect, Plaintiff proved that Auto Corp. could have positioned the tank safely forward of the axle for an added cost of $15 per vehicle without reducing utility. Under the Risk-Utility balancing test, Auto Corp. is:",
        opts: [
            "Not liable, because the car complied with minimum federal motor vehicle safety regulations in effect at manufacture.",
            "Strictly liable, because the feasibility and low cost of an alternative design outweighed the safety risks of the design.",
            "Not liable, unless Plaintiff proves that Auto Corp.'s executive engineers acted with intentional reckless disregard for life.",
            "Strictly liable under res ipsa loquitur, because motor vehicles do not catch fire in rear collisions absent negligence."
        ],
        ans: 1,
        exp: "Under the Risk-Utility test (Barker v. Lull Engineering), a product design is defective if the gravity and probability of danger inherent in the design outweigh the feasibility, cost, and adverse consequences of an available alternative safer design."
    }
];