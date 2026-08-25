const examData = [
    {
        id: 1,
        topic: "Battery / Informed Consent vs. Total Lack of Consent",
        fp: "Surgeon obtained Patient's express written consent to perform a laparoscopic appendectomy. While Patient was under general anesthesia, Surgeon decided to perform an unconsented cosmetic tummy tuck procedure that was neither an emergency nor discussed prior to surgery. The procedure was performed with flawless surgical precision.",
        q: "In an action by Patient against Surgeon, Patient will most likely recover under:",
        opts: [
            "Medical negligence, because Surgeon breached the professional standard of disclosure for elective procedures.",
            "Battery, because performing a completely unauthorized, non-emergency procedure is an intentional offensive contact.",
            "Breach of fiduciary duty only, because the cosmetic surgery was executed without anatomical harm or infection.",
            "No tort theory, because Patient signed a general surgical consent form authorizing necessary abdominal care."
        ],
        ans: 1,
        exp: "Under Cobbs v. Grant and general tort principles, when a physician performs a treatment completely different from that consented to or where there is a total lack of consent for a distinct procedure, the claim lies in intentional Battery, not mere professional negligence/informed consent."
    },
    {
        id: 2,
        topic: "Assault / Imminence & Words Qualifying Gestures",
        q: "Defendant rushed toward Plaintiff on a crowded sidewalk with a raised baseball bat, yelling, 'If there weren't two police officers standing right behind you, I would smash your jaw!' Plaintiff was startled and stepped back, fearing Defendant might strike anyway. If Plaintiff sues Defendant for Assault:",
        opts: [
            "Plaintiff will lose, because Defendant's conditional words negated the immediate threat of physical contact.",
            "Plaintiff will prevail, because raising a deadly weapon in an aggressive posture constitutes assault per se.",
            "Plaintiff will prevail, because Plaintiff subjectively experienced apprehension of an offensive touching.",
            "Plaintiff will lose, because assault requires that the defendant possess the actual present ability to hit."
        ],
        ans: 0,
        exp: "Under Tuberville v. Savage, words can negate what would otherwise appear to be an assault. Because Defendant's explicit conditional statement showed that no battery would occur due to the presence of police officers, the required element of imminent apprehension was negated."
    },
    {
        id: 3,
        topic: "False Imprisonment / Boundary Fixation via Environmental Peril",
        q: "Boat Captain transported Passenger to an uninhabited rocky island surrounded by freezing, shark-infested waters. Following an argument, Captain sailed away with all communication gear, leaving Passenger on the island for 12 hours before a naval vessel rescued him unharmed. In Passenger's suit for False Imprisonment:",
        opts: [
            "Captain will prevail, because an open, unfenced outdoor island cannot constitute a bounded area.",
            "Passenger will lose, because Passenger was neither physically bound, locked in a room, nor battered.",
            "Passenger will prevail, because leaving a person where escape involves unreasonable hazard constitutes confinement.",
            "Captain will prevail, because Passenger voluntarily boarded the vessel and assumed maritime transit risks."
        ],
        ans: 2,
        exp: "False Imprisonment does not require four physical walls. Confinement to a bounded area is established where the defendant removes the plaintiff's means of departure and the only available routes of egress present an unreasonable risk of physical harm or death."
    },
    {
        id: 4,
        topic: "IIED / Third-Party Distress & Presence Requirement",
        fp: "Son was viciously beaten by Attacker in an alley while Mother was sitting in her living room two miles away. Attacker called Mother immediately after the beating, describing the assault in graphic detail to torment her. Mother suffered severe emotional distress resulting in clinical depression and hospitalization.",
        q: "If Mother sues Attacker for Intentional Infliction of Emotional Distress (IIED):",
        opts: [
            "Mother will lose, because recovery for third-party IIED generally requires contemporaneous physical presence at the scene.",
            "Mother will prevail, because Attacker acted with intentional malice directly toward a close family relative.",
            "Mother will prevail under transferred intent, because the intent to commit battery against Son transfers to Mother.",
            "Mother will lose, because emotional distress claims require contemporaneous physical bodily impact."
        ],
        ans: 0,
        exp: "Under Restatement (Second) of Torts § 46(2), when conduct is directed at a third person, an actor is liable for IIED to a close family member ONLY if that family member was present at the scene at the time of the outrageous conduct. Transferred intent does not apply to IIED."
    },
    {
        id: 5,
        topic: "Trespass to Land / Overhanging Trees & Nuisance Distinction",
        q: "Neighbor planted an aggressive bamboo grove near the boundary line. Over three years, the subterranean rhizome roots crossed the boundary beneath Homeowner's lawn, breaking sprinkler lines, while the bamboo stalks grew 15 feet over Homeowner's roof. Homeowner sued for intentional Trespass to Land. Result?",
        opts: [
            "Homeowner will lose, because encroaching trees and roots sound exclusively in private nuisance, not trespass.",
            "Homeowner will prevail only if Homeowner gave 30 days' advance statutory notice to trim the branches.",
            "Homeowner will prevail, because unauthorized physical intrusions into airspace and subsurface constitute trespass.",
            "Homeowner will lose, because living biological plants are classified as non-actionable natural conditions."
        ],
        ans: 2,
        exp: "In California and modern property tort law, intentional or permitted physical intrusions into another's surface, subsurface soil (roots), or immediate reaches of airspace (overhanging branches) that cause damage constitute an actionable physical invasion supporting Trespass to Land."
    },
    {
        id: 6,
        topic: "Conversion / Document Merged with Intangible Property",
        q: "Debtor paid off a promissory note in full and demanded the return of the original executed note. Creditor refused, intentionally altered the loan balance on the face of the document, and sold the note to an innocent third-party collection agency. Debtor sued Creditor for Conversion. Creditor argues promissory notes are intangible debt rights. Result?",
        opts: [
            "Creditor wins, because conversion is limited strictly to tangible personal property like vehicles and equipment.",
            "Debtor wins, because intangible property rights merged into a physical commercial document are subject to conversion.",
            "Debtor loses, because the Uniform Commercial Code provides the exclusive remedies for negotiable instrument disputes.",
            "Creditor wins, because Debtor suffered no immediate physical property damage to the paper document itself."
        ],
        ans: 1,
        exp: "Under common law and California tort doctrine, when an intangible legal right is merged into a physical document or commercial instrument (such as a promissory note, stock certificate, or deed), the document and underlying right are fully subject to Conversion."
    },
    {
        id: 7,
        topic: "Self-Defense / Defense of Property vs. Life in Dwelling",
        q: "Homeowner was asleep in her bedroom when Intruder shattered the back patio glass door and stepped inside holding a crowbar. Homeowner, fearing for her life, grabbed a handgun from her nightstand, shouted a warning, and shot Intruder in the shoulder when Intruder raised the crowbar and took two steps toward her. Intruder sued Homeowner for Battery. Result?",
        opts: [
            "Homeowner is privileged, because an occupant may use deadly force when reasonably fearing imminent death or serious harm.",
            "Homeowner is liable, because the common law mandates physical retreat from bedrooms before deploying firearms.",
            "Homeowner is liable, because Katko v. Briney bars all deadly force deployed in defense of residential buildings.",
            "Homeowner is privileged only if Intruder had already struck a physical blow against an occupant inside."
        ],
        ans: 0,
        exp: "Under the Castle Doctrine and self-defense rules, a homeowner is privileged to use proportional deadly force inside her dwelling when she reasonably believes that an intruder intends an unlawful violent entry and poses an imminent threat of death or serious bodily injury."
    },
    {
        id: 8,
        topic: "Negligence / Standard of Care for Physical Disabilities",
        q: "Blind Pedestrian was walking with a standard white cane along a busy sidewalk using ordinary care. Pedestrian turned to enter a store, and his cane lightly tapped Customer's leg. Startled, Customer tripped over a curb and sprained an ankle. In Customer's negligence action against Pedestrian:",
        opts: [
            "Pedestrian is held to the standard of care of an ordinary reasonable person with normal visual sight.",
            "Pedestrian is strictly liable, because using walking canes in public thoroughfares is an ultrahazardous activity.",
            "Pedestrian is judged by the standard of a reasonably prudent person with the same physical disability (blindness).",
            "Pedestrian is completely immune from civil liability under federal disability accessibility safe-harbor statutes."
        ],
        ans: 2,
        exp: "Unlike mental disabilities (which are disregarded for adults in negligence), physical disabilities ARE taken into account. An actor with a physical disability is held to the standard of care of a reasonably prudent person with a like physical disability under like circumstances."
    },
    {
        id: 9,
        topic: "Negligence Per Se / Excuse Due to Incapacity or Confusion",
        q: "A city traffic ordinance prohibited crossing the street outside marked crosswalks. Elderly Pedestrian suffered a sudden, severe dizzy spell while on the sidewalk and stumbled into the roadway to avoid falling onto concrete steps, where she was struck by Speeding Motorist. Motorist raised Pedestrian's statutory violation as contributory negligence per se. Result?",
        opts: [
            "Pedestrian is contributorily negligent per se, because safety statutes admit no judicial or emergency exceptions.",
            "Pedestrian's violation is excused because sudden physical incapacity or emergency prevents compliance with the statute.",
            "Pedestrian is strictly liable for creating a vehicular roadway obstruction under municipal public safety codes.",
            "Motorist is relieved of all duty of care the moment Pedestrian steps outside the marked pedestrian crosswalk."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 288A, a violation of a safety statute is excused, and Negligence Per Se does not apply, where the actor's compliance is impossible due to sudden physical incapacity, emergency, or where compliance involves greater danger."
    },
    {
        id: 10,
        topic: "Res Ipsa Loquitur / Plaintiff's Voluntary Contribution",
        q: "Shopper entered a furniture store and sat on a display wooden rocking chair. The chair instantly collapsed into splinters, severely injuring Shopper. Store proved that Shopper weighed 450 pounds and had bounced vigorously on the chair twice before it collapsed. In Shopper's res ipsa loquitur claim against Store:",
        opts: [
            "Shopper will lose, because res ipsa loquitur requires that the accident not be due to any voluntary action of the plaintiff.",
            "Shopper will prevail automatically, because commercial retailers are absolute insurers of all showroom displays.",
            "The burden shifts to Store to prove that the manufacturer utilized defective lumber during chair assembly.",
            "Shopper will prevail under enterprise liability principles governing commercial retail furniture dealers."
        ],
        ans: 0,
        exp: "A core element of Res Ipsa Loquitur is that the injury-causing event must NOT have been due to any voluntary action or contribution on the part of the plaintiff. Where the plaintiff's own abnormal conduct (bouncing) may have caused the collapse, res ipsa loquitur fails."
    },
    {
        id: 11,
        topic: "Causation / Concurrent Independent Sufficient Causes (Substantial Factor)",
        q: "Alpha and Beta, acting independently on separate properties, negligently started two brush fires. The fires merged into a single massive conflagration that incinerated Homeowner's cabin. Expert testimony proved that either fire alone was sufficient to destroy the cabin at the exact same moment. In Homeowner's suit against Alpha:",
        opts: [
            "Alpha is not liable, because Homeowner cannot prove that 'but for' Alpha's fire the cabin would have survived.",
            "Alpha is liable, because under the substantial factor test, concurrent independent sufficient causes are held liable.",
            "Alpha is dismissed, and Homeowner must sue both defendants under alternative liability (Summers v. Tice).",
            "Alpha is liable only for 50% of the damages under comparative fault environmental apportionment rules."
        ],
        ans: 1,
        exp: "Where two or more independent negligent acts combine, and each force alone would have been sufficient to cause the indivisible harm at the same time, the traditional 'but-for' test fails. Courts apply the 'Substantial Factor' test, holding both tortfeasors liable."
    },
    {
        id: 12,
        topic: "Proximate Cause / Eggshell Skull vs. Unforeseeable Type of Harm",
        q: "Driver negligently tapped Pedestrian's bumper at 3 mph, causing minor vehicle scratches. Because Pedestrian suffered from a rare, latent bone disease ('brittle bone disease') unknown to Driver, the minor physical jar fractured Pedestrian's pelvis, resulting in $150,000 in medical bills. In Pedestrian's negligence suit against Driver:",
        opts: [
            "Driver is liable for the full extent of the pelvic injuries under the Eggshell Skull / Thin-Skull Plaintiff rule.",
            "Driver is not liable for the pelvic fractures, because a pelvic break is an unforeseeable consequence of a 3 mph tap.",
            "Driver is liable only for the nominal vehicle repair costs under the foreseeability limitation of Wagon Mound.",
            "Pedestrian's recovery is reduced by 90% because having a rare bone disease constitutes comparative fault."
        ],
        ans: 0,
        exp: "Under the 'Eggshell Skull' (Thin-Skull Plaintiff) rule, once the plaintiff establishes that the defendant breached a duty causing foreseeable physical impact, the defendant takes the plaintiff as found and is liable for the full extent of physical injuries, even if unexpectedly severe."
    },
    {
        id: 13,
        topic: "Landowner Duty / Rowland v. Christian Factors in California",
        q: "Tenant leased an apartment with a cracked exterior wooden balcony. Landlord had inspected the balcony and knew the support joists were rotted, but failed to warn Tenant or repair it. Tenant stepped onto the balcony, which collapsed. In California under Rowland v. Christian, Landlord's liability is determined by:",
        opts: [
            "The historical common law entrant status of Tenant as a residential lessee taking property caveat emptor.",
            "Strict liability under the non-delegable duty of multi-unit residential structural integrity.",
            "Balancing factors including foreseeability of harm, degree of certainty of injury, moral blame, and burden of prevention.",
            "Whether Tenant was in exclusive contractual privity with the licensed structural engineering contractor."
        ],
        ans: 2,
        exp: "Under Rowland v. Christian, California evaluates landowner liability by balancing public policy factors: foreseeability of harm to plaintiff, degree of certainty of injury, closeness of connection between conduct and injury, moral blame, policy of preventing future harm, and burden on defendant."
    },
    {
        id: 14,
        topic: "NIED / Direct Victim Doctrine (Marlene F. v. Affiliated Psychiatric)",
        q: "Mother enrolled herself and her young Son in family psychotherapy with Therapist to resolve behavioral issues. During the course of treatment, Therapist committed acts of sexual abuse against Son. Mother discovered the abuse months later and suffered severe psychiatric depression. In Mother's NIED suit against Therapist under California law:",
        opts: [
            "Mother cannot recover, because Mother was not present at the scene to witness the abuse contemporaneously.",
            "Mother can recover as a Direct Victim, because Therapist owed an independent duty of care directly to Mother in joint family treatment.",
            "Mother cannot recover, because NIED requires physical impact or positioning within the physical zone of danger.",
            "Mother can recover only if Son was permanently incapacitated as a result of the psychological trauma."
        ],
        ans: 1,
        exp: "Under Marlene F. v. Affiliated Psychiatric Medical Clinic, when a healthcare provider enters a direct professional relationship with a parent to treat a family unit, the therapist owes a direct duty of care to the parent. Breach causing emotional harm permits Direct Victim NIED recovery without satisfying bystander rules."
    },
    {
        id: 15,
        topic: "Strict Products Liability / Manufacturing Defect vs. Design Defect",
        q: "Automaker manufactured 100,000 sedans. On one specific vehicle, an automated welding robot ran out of solder, leaving a steering knuckle joint unbonded, which failed on the highway, injuring Buyer. The blueprints and remaining 99,999 sedans were engineered flawlessly. Buyer sues Automaker. What defect theory applies?",
        opts: [
            "Design defect under the Risk-Utility test, because the assembly line lacked secondary optical inspection sensors.",
            "Manufacturing defect, because the specific unit departed from its intended design specifications despite all care.",
            "Failure to warn, because Automaker omitted a steering knuckle maintenance manual warning.",
            "Breach of express warranty only, because strict products liability applies exclusively to entire defective product lines."
        ],
        ans: 1,
        exp: "A manufacturing defect exists when a specific product unit departs from its intended design specifications when leaving the manufacturer's custody, rendering it different and more dangerous than other typical units of the same product line, imposing strict liability regardless of care."
    },
    {
        id: 16,
        topic: "Strict Products Liability / Learned Intermediary Doctrine",
        q: "PharmaCo manufactured a prescription blood pressure drug, providing comprehensive warnings of rare kidney failure risks in package literature delivered to prescribing physicians. Doctor prescribed the drug to Patient without disclosing the kidney risk. Patient developed kidney failure and sued PharmaCo for failure to warn. PharmaCo's best defense is:",
        opts: [
            "The Learned Intermediary Doctrine, because PharmaCo discharged its duty by warning the prescribing physician.",
            "Federal preemption under the Food, Drug, and Cosmetic Act barring all state pharmaceutical tort actions.",
            "The Consumer Expectation test, because ordinary patients do not expect prescription drugs to be 100% risk-free.",
            "Lack of vertical privity between the manufacturing pharmaceutical laboratory and retail patient."
        ],
        ans: 0,
        exp: "Under the Learned Intermediary Doctrine, a prescription drug manufacturer discharges its duty to warn by providing adequate, comprehensive warnings to the prescribing physician (the learned intermediary), who assumes the professional duty to evaluate risks and advise the patient."
    },
    {
        id: 17,
        topic: "Strict Liability / Abnormally Dangerous Activities & Location Factor",
        q: "Mining Co. operated a commercial toxic cyanide heap-leach gold processing facility in an isolated, unpopulated desert basin 50 miles from any city or aquifer. Despite state-of-the-art double-lined containment basins and utmost care, an unprecedented 500-year earthquake cracked the liners, contaminating a private deep mineral well. In Well Owner's strict liability suit:",
        opts: [
            "Mining Co. is strictly liable per se, because chemical cyanide leaching is an ultrahazardous activity regardless of location.",
            "Mining Co. is not strictly liable, because the appropriateness of the remote desert location balances against ultrahazardous classification.",
            "Mining Co. is completely immune from civil liability under federal mineral development statutory safe harbors.",
            "Well Owner's claim is barred under the doctrine of primary assumption of risk for drilling private water wells."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 520, whether an activity is abnormally dangerous depends on balancing six factors, including the 'inappropriateness of the activity to the place where it is carried on.' Conducting activities in remote, unpopulated desert locations weighs against strict liability classification."
    },
    {
        id: 18,
        topic: "Vicarious Liability / Respondeat Superior Scope & Dual Purpose Trips",
        q: "Salesman was driving to a client sales meeting during work hours. On the way, Salesman stopped at a dry cleaner located directly along his direct driving route to pick up personal shirts. While pulling out of the dry cleaner driveway back onto the street toward the client, Salesman negligently struck Pedestrian. In Pedestrian's suit against Employer:",
        opts: [
            "Employer is not liable, because any personal errand constitutes an immediate frolic abandoning employment.",
            "Employer is strictly liable under statutory motor vehicle enterprise ownership allocation laws.",
            "Employer is vicariously liable, because a minor detour or dual-purpose errand remains within the scope of employment.",
            "Employer is liable only if Employer mandated that Salesman wear professionally dry-cleaned clothing."
        ],
        ans: 2,
        exp: "Under the 'detour' doctrine of respondeat superior, an employee combining personal business with company travel along a direct route (a dual-purpose trip or minor detour) remains within the scope of employment, rendering the employer vicariously liable for negligent driving."
    },
    {
        id: 19,
        topic: "Defamation / Slander Per Se vs. Slander Per Quod",
        q: "Speaker falsely stated at a neighborhood barbecue: 'Accountant was arrested and convicted of felony grand theft embezzlement last year.' Accountant proved the statement was completely fabricated, but offered zero proof of actual out-of-pocket financial loss. In Accountant's slander suit against Speaker:",
        opts: [
            "Accountant will lose, because oral slander universally requires pleading and proof of actual special pecuniary damages.",
            "Accountant will prevail without proving special damages, because falsely imputing a crime of moral turpitude is slander per se.",
            "Accountant will lose, because statements made at private social gatherings are protected by an absolute social privilege.",
            "Accountant will prevail only under false light invasion of privacy requiring constitutional actual malice proof."
        ],
        ans: 1,
        exp: "Slander Per Se allows recovery of presumed general damages without pleading or proving special (pecuniary) damages when the spoken words falsely impute: (1) a serious crime of moral turpitude, (2) unfitness in business/profession, (3) a loathsome disease, or (4) serious sexual misconduct."
    },
    {
        id: 20,
        topic: "Privacy / False Light Invasion of Privacy & Actual Malice",
        q: "Tabloid published a feature story on teenage street gang violence. The article featured a large, unedited photograph of Student, an honor student with zero criminal history, walking past a graffiti wall beneath the headline: 'Youth Gang Members on the Rise.' Tabloid knew Student was not in a gang, but used the photo for visual impact. Student sued for False Light. Result?",
        opts: [
            "Student will lose, because photographs taken on public sidewalks are protected by absolute First Amendment immunity.",
            "Student will lose, because the tort of false light applies exclusively to commercial merchandise advertising.",
            "Student will prevail, because Tabloid publicized highly offensive false portrayals with constitutional actual malice.",
            "Student will prevail only under commercial misappropriation, limiting recovery to photographic modeling fees."
        ],
        ans: 2,
        exp: "False Light Invasion of Privacy requires: (1) widespread publicity, (2) placing plaintiff in a false light before the public, (3) that is highly offensive to a reasonable person, and (4) published with constitutional Actual Malice (knowledge of falsity or reckless disregard)."
    },
    {
        id: 21,
        topic: "Economic Torts / Intentional Interference with Contract & At-Will Exception",
        q: "Executive worked under an employment contract terminable 'at-will' by either party upon two weeks' notice. Competitor Beta offered Executive a higher salary, inducing Executive to give two weeks' notice and switch jobs. Employer sued Competitor Beta for Intentional Interference with Contractual Relations. Competitor Beta will:",
        opts: [
            "Prevail, because the privilege of commercial competition protects inducing the termination of an at-will contract without wrongful means.",
            "Lose, because intentionally inducing any employee to leave an existing employer is tortious interference per se.",
            "Lose, unless Competitor Beta gave advance written notice of recruitment to the original corporate employer.",
            "Prevail only if Competitor Beta paid an economic placement buyout fee to the original corporate employer."
        ],
        ans: 0,
        exp: "Where an underlying contract is terminable 'at-will', the privilege of commercial competition protects rivals who induce termination of the relationship, provided the competitor did not employ independently wrongful means (such as fraud, defamation, or physical coercion)."
    },
    {
        id: 22,
        topic: "Nuisance / Coming to the Nuisance & Injunction Indemnity (Spur Industries)",
        q: "Lumber Mill operated a lawful, well-managed commercial saw mill in an isolated forest. Ten years later, Developer purchased cheap surrounding land and built 500 residential homes. Residents suffered deafening noise and wood dust. In a public nuisance action by Developer against Lumber Mill under Spur Industries v. Del Webb:",
        opts: [
            "The court must deny all relief, because 'coming to the nuisance' operates as an absolute total defense.",
            "The court will grant an injunction shutting down the mill, but equitably require Developer to indemnify the mill for relocation costs.",
            "The court will order the demolition of the 500 residential homes under structural zoning preemption rules.",
            "Lumber Mill is strictly liable for all residential property depreciation under statutory agricultural nuisance codes."
        ],
        ans: 1,
        exp: "Under Spur Industries v. Del E. Webb Development Co., where a lawful business becomes a nuisance because a developer 'came to the nuisance' by building homes adjacent to it, the court may enjoin the operation to protect the public, but equitably require the developer to indemnify the defendant for the costs of moving or shutting down."
    },
    {
        id: 23,
        topic: "Joint Tortfeasors / Proposition 51 (Civil Code § 1431.2) Economic Damages",
        q: "Plaintiff suffered $100,000 in economic damages (medical bills) and $400,000 in non-economic damages (pain and suffering) in a traffic collision caused by Driver A (80% at fault) and Driver B (20% at fault). Driver A is completely bankrupt and uninsured. Under California Proposition 51, how much can Plaintiff collect from Driver B?",
        opts: [
            "$180,000, consisting of 100% of economic damages ($100,000) plus Driver B's 20% share of non-economic damages ($80,000).",
            "$100,000, representing Driver B's 20% proportional share of the total $500,000 aggregate judgment.",
            "$500,000, because joint and several liability applies to all damages under traditional California common law.",
            "$80,000, because Proposition 51 limits several liability exclusively to non-economic damages."
        ],
        ans: 0,
        exp: "Under California Civil Code § 1431.2 (Proposition 51), liability for economic damages remains joint and several (100% of $100,000 = $100,000), while liability for non-economic damages is several only, limited strictly to the defendant's percentage of fault (20% of $400,000 = $80,000). Total recoverable from Driver B = $180,000."
    },
    {
        id: 24,
        topic: "Negligence / Firefighter's Rule Statutory Exception for Intentional Acts",
        q: "Arsonist intentionally set fire to a commercial building. Firefighter entered the structure to search for trapped occupants and was severely burned when an interior wall collapsed. Firefighter sued Arsonist for personal injuries. Arsonist asserted the Firefighter's Rule. Result?",
        opts: [
            "Arsonist wins, because first responders assume all inherent structural risks of combating fires.",
            "Firefighter is barred from all recovery under primary assumption of risk for emergency firefighting duties.",
            "Arsonist is liable only for economic medical expenses under statutory workers' compensation schedules.",
            "Firefighter wins, because the Firefighter's Rule does not protect an intentional tortfeasor who commits felonious arson."
        ],
        ans: 3,
        exp: "The Firefighter's Rule shields individuals whose ordinary negligence necessitated the responder's presence. It does NOT protect intentional tortfeasors, criminals, or arsonists who intentionally cause fires or felonious hazards resulting in injury to emergency responders."
    },
    {
        id: 25,
        topic: "Assault / Apparent Present Ability with Unloaded Gun",
        q: "Defendant confronted Victim in an alley, pointed an antique revolver at Victim's face from three feet away, cocked the hammer, and said: 'Give me your watch or I'll shoot.' Defendant had no bullets in the gun. Victim believed the gun was loaded and was terrified. In Victim's civil action for Assault against Defendant:",
        opts: [
            "Defendant will prevail, because an unloaded firearm lacks the actual physical capability to inflict battery.",
            "Victim will prevail, because assault requires only that the defendant create an apparent, reasonable apprehension of imminent battery.",
            "Defendant will prevail, because conditional robbery demands negate the imminence required for intentional assault.",
            "Victim will prevail only under conversion for the unlawful exercise of dominion over the watch."
        ],
        ans: 1,
        exp: "Assault requires an intentional act causing reasonable apprehension of immediate harmful or offensive contact. Apparent present ability is sufficient; actual physical capability is not required. Pointing an unloaded firearm (which the victim reasonably believes to be loaded) satisfies Assault."
    }
];