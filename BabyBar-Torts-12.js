const examData = [
    {
        id: 1,
        topic: "Negligence / Superseding Cause & Third-Party Crime",
        fp: "Transit Corp. operated an urban commuter bus line. While driving on a poorly lit schedule route, Driver noticed a passenger, Paul, was intoxicated and falling asleep. Rather than stopping at Paul's designated well-lit terminal stop, Driver forced Paul off the bus at 2:00 AM into an abandoned, high-crime industrial rail yard known for frequent violent armed robberies. While attempting to locate a street exit, Paul was attacked and stabbed by a mugger.",
        q: "If Paul asserts a negligence claim against Transit Corp. for his injuries, Paul will most likely:",
        opts: [
            "Lose, because intentional criminal conduct by a third party operates as an absolute superseding cause.",
            "Lose, because Paul's voluntary intoxication constituted primary implied assumption of the risk.",
            "Prevail, because the third-party criminal assault was within the foreseeable scope of the risk created by Driver's breach.",
            "Prevail, because common carriers are held strictly liable for all physical injuries suffered by ticketed passengers."
        ],
        ans: 2,
        exp: "While criminal acts of third parties often sever causation, an intervening intentional or criminal act is NOT a superseding cause if the defendant's original negligence created or increased the foreseeable risk of that very criminal occurrence. Common carriers owe a heightened duty of utmost care to their passengers."
    },
    {
        id: 2,
        topic: "Trespass to Chattels vs. Conversion / Substantial Deprivation",
        fp: "Alan, an architect, left his professional laptop computer containing unbacked-up project blueprints on a table at a cafe. Brenda, mistakenly believing the computer belonged to her colleague, took the laptop home. Upon realizing her mistake two hours later, Brenda immediately drove back to the cafe to return it. However, while in Brenda's car, an errant golf ball shattered the car window and smashed the laptop screen, corrupting the hard drive and destroying the unrecovered files entirely.",
        q: "If Alan asserts an intentional tort claim against Brenda, Alan will most likely recover under:",
        opts: [
            "Trespass to chattels only, because Brenda made an honest, good-faith mistake regarding ownership.",
            "Conversion, because the resulting total destruction of the chattel warrants requiring Brenda to pay its full pre-accident fair market value.",
            "Negligence only, because Brenda lacked the subjective malicious intent required for intentional tort liability.",
            "Neither conversion nor trespass to chattels, because the flying golf ball was an unforeseeable Act of God."
        ],
        ans: 1,
        exp: "Conversion is an intentional exercise of dominion or control over a chattel which so seriously interferes with the right of another to control it that the actor may justly be required to pay its full value. Good-faith mistake is no defense to the initial intentional taking; where the chattel is subsequently destroyed during unauthorized possession, conversion applies."
    },
    {
        id: 3,
        topic: "Strict Products Liability / Component Part Manufacturer Defense",
        fp: "SensorCo manufactured standard, non-defective commercial pressure gauges according to general industrial trade specifications. TruckCo purchased several of these gauges and incorporated them into specialized cryogenic chemical tanker trucks. TruckCo negligently engineered the pressure-relief routing system, causing the tanker to explode under normal operations. ChemTrans, the tanker buyer, sued SensorCo in strict products liability.",
        q: "SensorCo's strongest defense to ChemTrans's strict products liability claim is that:",
        opts: [
            "SensorCo did not participate in the design or integration of the completed chemical tanker assembly system.",
            "ChemTrans lacked privity of contract with the component part manufacturer SensorCo.",
            "Commercial purchasers of heavy industrial equipment are barred from recovering purely economic property losses.",
            "SensorCo complied fully with all prevailing customary manufacturing standards across the gauge industry."
        ],
        ans: 0,
        exp: "Under the component parts doctrine, the manufacturer of an unintegrated, non-defective component part is not strictly liable for design defects in the integrated finished product unless the component maker substantially participated in the design/integration of the final product or the component itself was inherently defective."
    },
    {
        id: 4,
        topic: "Battery / Transferred Intent Across Intentional Torts",
        fp: "Gail was furious with Henry. Intending solely to frighten Henry and cause him apprehension, Gail hurled a heavy brass candlestick directly toward Henry's head while Henry was looking the other way. Henry never saw the object coming. The candlestick grazed Henry's shoulder without him noticing, but caromed off the wall and struck Irene, a sleeping guest, in the eye.",
        q: "If Irene brings a tort action against Gail for her eye injury, Irene will prevail on a theory of:",
        opts: [
            "Assault, because Gail intended to commit an assault against Henry.",
            "Battery, because Gail's intent to commit assault against Henry transfers to battery against Irene.",
            "Negligence per se, because intentional tort rules do not apply to sleeping third parties.",
            "Intentional Infliction of Emotional Distress, because striking a sleeping guest constitutes extreme and outrageous conduct."
        ],
        ans: 1,
        exp: "Under the doctrine of transferred intent, intent transfers not only from person to person (Henry to Irene) but also from tort to tort among the five classic intentional torts (battery, assault, false imprisonment, trespass to land, trespass to chattels). Gail's intent to commit an assault against Henry transferred to satisfy the intent element for a battery against Irene."
    },
    {
        id: 5,
        topic: "Landowner Duty / Open and Obvious Hazards & Distraction",
        fp: "Grocer operated a large supermarket. Directly in front of the main entrance display, Grocer maintained an exposed 4-inch raised metal drainage pipe painted bright yellow. Bright blinking electronic sales banners hung directly above the pipe. Customer, whose attention was captured by the blinking sales display, tripped over the yellow pipe and fractured her hip. Customer sued Grocer for negligence.",
        q: "Grocer defends on the ground that the pipe was an open and obvious condition. Will Grocer prevail on this defense?",
        opts: [
            "Yes, because landowners owe no duty of care regarding hazardous conditions that are clearly painted and visible.",
            "Yes, because invitees are legally deemed to assume the risk of physical impediments painted bright yellow.",
            "No, because a landowner remains liable for known or obvious hazards if the landowner should foresee that invitees will be distracted.",
            "No, because commercial property owners are strictly liable for all trip-and-fall injuries occurring on retail sales floors."
        ],
        ans: 2,
        exp: "Under modern premises liability rules (Restatement 2d/3d of Torts), an open and obvious condition does not automatically relieve a possessor of land of liability if the possessor should reasonably anticipate the harm—such as when the landowner has reason to expect that the invitee's attention may be distracted by visual merchandising displays."
    },
    {
        id: 6,
        topic: "Strict Liability / Abnormally Dangerous Activities & Scope of Risk",
        fp: "BlasterCo engaged in commercial dynamite blasting to excavate a subterranean railway tunnel. During a controlled detonation conducted with utmost reasonable care, the seismic shockwave traveled through bedrock. Ten miles away, the vibration startled a prize-winning show mink owned by Farmer, causing the mother mink to kill her newborn kits. Blasting was an abnormally dangerous activity in the region.",
        q: "If Farmer asserts a strict liability claim against BlasterCo for the loss of the mink kits, Farmer will:",
        opts: [
            "Prevail, because commercial dynamite blasting is an ultrahazardous abnormally dangerous activity.",
            "Prevail, because seismic shockwave vibrations constitute a constructive physical trespass to land.",
            "Not prevail, because the destruction of mink kits by frightened mother animals is outside the scope of the extraordinary risk that makes blasting strictly liable.",
            "Not prevail, because strict liability requires a direct showing of physical fly-rock debris crossing boundary lines."
        ],
        ans: 2,
        exp: "Strict liability for abnormally dangerous activities is limited to the kind of harm the possibility of which makes the activity abnormally dangerous (e.g., blast concussion, flying rock, structural collapse). Harm resulting from the idiosyncratic nervous reactions of delicate animals (like minks killing their young due to subterranean vibration) falls outside the foreseeable scope of that risk (Foster v. Preston Mill Co.)."
    },
    {
        id: 7,
        topic: "Joint and Several Liability / Divisible Harm vs. Indivisible Injury",
        fp: "Driver 1 negligently broadsided Passenger's sedan, breaking Passenger's collarbone. Thirty seconds later, while Passenger remained seated in the disabled vehicle awaiting aid, Driver 2 negligently crashed into the rear of the sedan, causing Passenger to suffer a severe spinal cord severance that resulted in permanent quadriplegia.",
        q: "In an action by Passenger against Driver 1 and Driver 2, which of the following best describes Driver 1's potential liability?",
        opts: [
            "Driver 1 is liable only for the broken collarbone because Driver 2's subsequent impact was an independent tortious act.",
            "Driver 1 is jointly and severally liable for both the broken collarbone and the spinal cord injury because leaving Passenger disabled in the roadway created a foreseeable risk of subsequent collisions.",
            "Driver 1 is relieved of all liability because Driver 2's subsequent severe collision operated as a superseding cause.",
            "Driver 1 and Driver 2 must each pay exactly 50% of all cumulative damages regardless of fault apportionment."
        ],
        ans: 1,
        exp: "An original tortfeasor whose negligence leaves a victim helpless in a roadway remains proximately liable for subsequent injuries caused by normal intervening roadway hazards, including successive collisions by other negligent drivers. Because the resulting physical condition became inextricably combined or foreseeable, the original tortfeasor faces joint liability."
    },
    {
        id: 8,
        topic: "Res Ipsa Loquitur / Multiple Defendants & Exclusive Control",
        fp: "Patient underwent routine laparoscopic appendectomy surgery under general anesthesia at Hospital. Upon regaining consciousness post-operation, Patient experienced severe, permanent numbness and paralysis in his right arm, distant from the surgical field, caused by traumatic nerve compression occurring while Patient was unconscious on the operating table. Patient sued Surgeon, Anesthesiologist, and Hospital.",
        q: "If Patient invokes the doctrine of res ipsa loquitur against all defendants, the court should:",
        opts: [
            "Deny the doctrine, because Patient cannot pinpoint which specific healthcare provider exercised exclusive physical control over the arm at the precise moment of nerve injury.",
            "Deny the doctrine, because medical malpractice claims strictly require expert testimony proving specific manual breach of care.",
            "Grant the application of the doctrine, shifting the burden of initial explanation to all defendants who had control over Patient's unconscious body during surgery.",
            "Grant the doctrine only against Hospital under strict enterprise liability principles."
        ],
        ans: 2,
        exp: "Under the landmark California rule of Ybarra v. Spangard, where an unconscious surgical patient receives unusual injuries to an uninjured body part while under the collective care of multiple medical practitioners, res ipsa loquitur applies against all participating defendants, requiring each to explain their conduct."
    },
    {
        id: 9,
        topic: "False Imprisonment / Reasonable Means of Escape",
        fp: "Professor locked the only standard entrance door to a ground-floor seminar room, announcing that students could not leave until they finished a pop quiz. The room featured three large, unobstructed open French windows leading onto a flat, grassy ground-level courtyard 18 inches below. Student remained seated for one hour feeling intimidated, and later sued Professor for false imprisonment.",
        q: "Student's claim for false imprisonment will most likely:",
        opts: [
            "Prevail, because Professor intentionally engaged in an unlawful restraint of Student's personal liberty.",
            "Prevail, because locking the primary entrance door constitutes confinement per se.",
            "Fail, because the open ground-floor windows provided a readily known, safe, and reasonable means of escape.",
            "Fail, because false imprisonment requires proof of severe, clinically diagnosable psychological trauma."
        ],
        ans: 2,
        exp: "False imprisonment requires an intentional, unprivileged confinement of another to a bounded area where no reasonable means of escape is known to the plaintiff. An exit is reasonable if it poses no material danger of physical harm, humiliation, or damage to clothing (e.g., stepping 18 inches out an open ground-floor window onto a flat lawn)."
    },
    {
        id: 10,
        topic: "Defamation / Qualified Privilege & Malice",
        fp: "Employer received an inquiry from Recruiter regarding former employee Frank. Employer stated in good faith: 'Frank was let go because internal audits indicated missing funds on his shift.' Employer honestly believed the statement based on an audit report prepared by accounting staff. In truth, the audit report contained an arithmetic error, and Frank had never taken funds. Frank sued Employer for slander.",
        q: "Employer's best defense against Frank's defamation suit is:",
        opts: [
            "Absolute judicial privilege protecting all employment-related communications.",
            "Qualified privilege for communications made in good faith on a matter of common commercial interest.",
            "Truth, because Employer honestly believed the audit report at the time of publication.",
            "The First Amendment actual malice standard governing private figures on private matters."
        ],
        ans: 1,
        exp: "An employer providing a reference or evaluation to a prospective employer enjoys a qualified (conditional) common-interest privilege. The privilege protects honest, non-reckless false statements unless the defendant published with common-law malice (spite/ill will) or knew the statement was false or acted with reckless disregard for its truth."
    },
    {
        id: 11,
        topic: "Negligent Infliction of Emotional Distress / Direct Victim vs. Bystander",
        fp: "Obstetrician negligently misread ultrasound telemetry during Labor's delivery, erroneously informing Mother that her newborn infant had died during childbirth. In fact, the child was born healthy in an adjoining nursery room. Upon hearing the news, Mother suffered severe emotional shock and was hospitalized for cardiac arrest. Mother sued Obstetrician for NIED.",
        q: "Obstetrician argues Mother cannot recover because Mother was never in physical danger and the infant suffered no actual physical harm. Mother will:",
        opts: [
            "Lose, because NIED categorically requires physical injury to the primary third-party relative.",
            "Lose, because bystander emotional distress recovery is strictly barred without contemporaneous sensory observation of death.",
            "Prevail, because Obstetrician breached a pre-existing direct professional duty running specifically to Mother as a direct victim.",
            "Prevail, because medical professionals are strictly liable for erroneous verbal diagnoses."
        ],
        ans: 2,
        exp: "Under California law (Burgess v. Superior Court / Molien), when a physician undertakes the medical care of a mother during delivery, a direct physician-patient relationship exists. Mother is a 'direct victim' (not merely a bystander), and breach of that direct professional duty causing severe emotional distress allows recovery without requiring physical impact or injury to the child."
    },
    {
        id: 12,
        topic: "Strict Products Liability / Design Defect & Consumer Expectations vs. Risk-Utility",
        fp: "AutoCorp manufactured a convertible sports car. During an unforeseen rollover collision at moderate speeds, the windshield pillars collapsed inward, crushing Driver's skull. Driver sued AutoCorp under strict products liability. AutoCorp introduced undisputed evidence that no alternative roof design existed at that production price point and that the vehicle complied with all federal rollover regulations.",
        q: "Under California strict products liability law, Driver can establish a design defect by proving that:",
        opts: [
            "AutoCorp failed to exercise ordinary reasonable care in selecting manufacturing metals for the pillars.",
            "The car failed to perform as safely as an ordinary consumer would expect when used in an intended or reasonably foreseeable manner.",
            "Federal statutory motor vehicle safety standards preempt all state common-law strict products liability claims.",
            "The convertible design was an abnormally dangerous ultrahazardous consumer product."
        ],
        ans: 1,
        exp: "Under California's dual-prong design defect test (Barker v. Lull Engineering), a plaintiff can prove a design defect under either (1) the Consumer Expectations Test (product failed to perform as safely as an ordinary consumer would expect under intended/foreseeable use) OR (2) the Risk-Benefit/Utility Test. Meeting federal regulatory minimums does not preclude a finding of defect under the consumer expectations prong."
    },
    {
        id: 13,
        topic: "Vicarious Liability / Independent Contractor Non-Delegable Duty",
        fp: "Commercial Landlord owned an 8-story office building. Landlord hired Independent Elevator Service Co., an independent contractor, to inspect and maintain the passenger elevators. Due to Elevator Co.'s negligent failure to grease the safety cables, an elevator car plummeted two floors, injuring Tenant. Tenant sued Landlord.",
        q: "If Landlord defends on the ground that Elevator Co. was an independent contractor, Tenant will:",
        opts: [
            "Lose, because principals are never vicariously liable for the collateral torts of independent contractors.",
            "Lose, provided Landlord exercised due diligence and reasonable care in vetting and selecting Elevator Co.",
            "Prevail, because a commercial landlord owes invitees a non-delegable duty to maintain common areas and mechanical safety systems.",
            "Prevail, because operating a mechanical passenger elevator is an abnormally dangerous ultrahazardous activity."
        ],
        ans: 2,
        exp: "While employers are generally not liable for the torts of independent contractors, an exception applies for 'non-delegable duties.' A commercial landowner owes tenants and invitees a non-delegable duty to keep premises common areas, structural elements, and elevator systems in a reasonably safe condition; the landlord remains vicariously liable for the contractor's negligence."
    },
    {
        id: 14,
        topic: "Intentional Infliction of Emotional Distress / Debt Collection Abuse",
        fp: "Collector sought to recover a $300 disputed credit card debt from Debtor. Knowing that Debtor was suffering from a high-risk pregnancy and under strict medical bedrest, Collector called Debtor 15 times a day, screaming profanities, threatening to have her unborn child placed in state foster care, and falsely telling her that police were en route to arrest her. Debtor suffered severe emotional shock and a stress-induced miscarriage.",
        q: "If Debtor sues Collector for Intentional Infliction of Emotional Distress (IIED), Debtor will most likely:",
        opts: [
            "Prevail, because Collector engaged in extreme and outrageous conduct exploiting a known physical or emotional vulnerability.",
            "Lose, because verbal harassment regarding legitimate delinquent financial debts is protected commercial speech.",
            "Prevail only if Debtor can demonstrate that Collector physically trespassed onto her residential property.",
            "Lose, because IIED requires proof of an underlying physical assault or battery."
        ],
        ans: 0,
        exp: "IIED requires: (1) extreme and outrageous conduct (transcending all bounds of decency tolerated in civilized society), (2) intent or recklessness, (3) causation, and (4) severe emotional distress. Conduct that might otherwise be mere insult becomes extreme and outrageous when the defendant has knowledge of the plaintiff's peculiar susceptibility/vulnerability (such as pregnancy) and proceeds to exploit it."
    },
    {
        id: 15,
        topic: "Negligence / Firefighter's Rule Exception",
        fp: "Homeowner negligently dropped a lit match on a carpet, causing a residential fire. Firefighter responded to the emergency call. While extinguishing the blaze inside the living room, Firefighter was severely burned when Homeowner's illegally hidden, unpermitted stash of commercial fireworks exploded without warning in the closet.",
        q: "If Firefighter sues Homeowner for personal injuries resulting from the fireworks explosion, Homeowner's best defense is the Firefighter's Rule. Will this defense succeed?",
        opts: [
            "Yes, because public emergency responders assume all risks of injury occurring on premises during active emergencies.",
            "No, because the Firefighter's Rule does not bar recovery for independent, hidden, or undisclosed risks not inherent in the initial fire.",
            "Yes, because residential property owners owe no duty of care to public safety licensees.",
            "No, because the Firefighter's Rule has been completely abolished in modern comparative fault jurisdictions."
        ],
        ans: 1,
        exp: "The Firefighter's Rule bars professional rescuers from suing for injuries caused by the negligence that necessitated their presence (the lit match fire). However, an exception applies where the injury is caused by an independent, hidden, or undisclosed risk (an illegal concealed stash of commercial fireworks) that the firefighter could not reasonably anticipate as inherent in ordinary firefighting duties."
    },
    {
        id: 16,
        topic: "Invasion of Privacy / Public Disclosure of Private Facts",
        fp: "Ten years ago, Accountant was acquitted of embezzlement charges in a publicized trial and has since lived an unblemished private life. Blogger, harboring personal spite against Accountant, obtained Accountant's confidential, sealed medical records and published Accountant's HIV-positive medical diagnosis and private psychological therapy notes on a public website.",
        q: "If Accountant sues Blogger for invasion of privacy, Accountant's most viable cause of action is:",
        opts: [
            "Intrusion upon seclusion only, because the published medical notes were factually true.",
            "Defamation per se, because publicizing sensitive disease diagnoses is actionable without proof of damages.",
            "Public disclosure of private facts, because publishing non-newsworthy, highly offensive private medical records violates privacy.",
            "False light invasion of privacy, because the publication placed Accountant in a negative public perspective."
        ],
        ans: 2,
        exp: "The tort of Public Disclosure of Private Facts requires: (1) public disclosure of private information, (2) the matter publicized would be highly offensive to a reasonable person, and (3) the matter is not of legitimate public concern (not newsworthy). Intimate medical diagnoses and psychotherapy notes are non-newsworthy private facts."
    },
    {
        id: 17,
        topic: "Conversion / Innocent Purchaser of Stolen Goods",
        fp: "Thief stole an authentic antique painting worth $50,000 from Gallery. Thief sold the painting to Buyer, an art dealer who purchased the piece in good faith for $40,000 after checking commercial databases and finding no reported theft. Six months later, Gallery discovered the location of the painting and demanded its return. Buyer refused, asserting bona fide purchaser status.",
        q: "If Gallery sues Buyer for conversion, Gallery will:",
        opts: [
            "Lose, because a bona fide purchaser for value who takes without notice acquires superior title.",
            "Lose, provided Buyer tenders the painting back within a reasonable commercial cure window.",
            "Prevail, because a purchaser of stolen property obtains void title and is liable for conversion upon refusal to return.",
            "Prevail only if Gallery demonstrates that Buyer was grossly negligent in verifying the painting's provenance."
        ],
        ans: 2,
        exp: "A thief holds void title and cannot convey good title to anyone, even an innocent bona fide purchaser for value. An innocent purchaser who acquires stolen goods from a thief and refuses to return them to the true owner upon demand is guilty of conversion."
    },
    {
        id: 18,
        topic: "Negligence / Loss of Chance Doctrine",
        fp: "Patient visited Physician exhibiting atypical chest pain. Physician negligently failed to perform an EKG. Had the EKG been performed, Patient would have had a 40% probability of surviving an impending heart attack. Because no treatment was initiated, Patient suffered a fatal heart attack. Patient's estate sued Physician for wrongful death.",
        q: "Under traditional common-law 'all-or-nothing' proximate causation rules (as distinct from pure loss-of-chance jurisdictions), the estate's claim will:",
        opts: [
            "Fail, because the estate cannot prove by a preponderance of the evidence that 'but for' the negligence, Patient more likely than not would have survived.",
            "Succeed, because medical practitioners are strictly liable for diagnostic omissions occurring in emergency contexts.",
            "Succeed for exactly 40% of full wrongful death damages under alternative causation principles.",
            "Fail, because wrongful death actions cannot be premised upon omissions to perform diagnostic testing."
        ],
        ans: 0,
        exp: "Under traditional common law proximate causation ('but for' / preponderance standard), the plaintiff must prove that defendant's negligence was more likely than not (>50% probability) the cause of death. Where the patient had only a 40% chance of survival to begin with, the traditional rule denies recovery because death was more than 50% likely even with proper care."
    },
    {
        id: 19,
        topic: "Trespass to Land / Subterranean & Airborne Intrusions",
        fp: "Mining Co. held mineral rights to an adjacent parcel. While drilling horizontally 500 feet below the surface of Owner's residential land, Mining Co.'s drill bit passed through Owner's subterranean bedrock without causing any surface tremors, subsidence, or physical damage to Owner's home. Owner sued Mining Co. for intentional trespass to land.",
        q: "Will Owner prevail in an action for trespass to land?",
        opts: [
            "No, because actionable trespass to land requires physical entry onto the observable surface estate.",
            "No, unless Owner proves substantial, permanent diminution in the fair market value of the residential home.",
            "Yes, because unauthorized physical entry below the surface of real property constitutes trespass to land regardless of damage.",
            "Yes, but only if Owner previously posted explicit written subsurface boundary notices."
        ],
        ans: 2,
        exp: "At common law, the possessor of real property owns not only the surface but also the subterranean space beneath the land to a reasonable depth (cujus est solum, ejus est usque ad coelum et ad inferos). An unauthorized physical intrusion beneath the soil (e.g., horizontal drilling or subterranean shafts) constitutes trespass to land, allowing recovery of at least nominal damages without proof of physical injury."
    },
    {
        id: 20,
        topic: "Vicarious Liability / Frolic vs. Detour",
        fp: "Courier was employed by DeliveryCo to deliver packages throughout a metropolitan downtown zone. While on his route, Courier drove two blocks out of his direct path to buy a coffee at a drive-through window. While pulling out of the coffee shop driveway to return to his assigned delivery route, Courier negligently struck Pedestrian. Pedestrian sued DeliveryCo.",
        q: "DeliveryCo's liability under respondeat superior depends primarily on whether Courier's coffee excursion was:",
        opts: [
            "An intentional tort rather than an act of ordinary negligence.",
            "A minor detour within the scope of employment rather than a substantial departure (frolic).",
            "Expressly authorized in writing by DeliveryCo's employee handbook.",
            "Conducted using a commercial delivery vehicle owned and insured by DeliveryCo."
        ],
        ans: 1,
        exp: "Under respondeat superior, an employer is vicariously liable for the torts of an employee committed within the scope of employment. A slight deviation for personal comfort (a detour, such as driving two blocks for coffee) remains within the scope of employment, whereas a major personal departure (a frolic) abandons employment."
    },
    {
        id: 21,
        topic: "Assumption of Risk / Primary vs. Secondary (Recreational Activities)",
        fp: "Skier purchased a lift ticket at Ski Resort. While skiing down an intermediate run marked with standard trail flags, Skier struck a concealed tree stump buried beneath fresh snow and broke his leg. Skier sued Ski Resort for negligence. Ski Resort proved that buried obstacles and snow conditions are inherent risks of downhill skiing.",
        q: "Under California's Primary Assumption of the Risk doctrine (Knight v. Jewett), Ski Resort:",
        opts: [
            "Owes no duty of care to protect participants from risks inherent in the sport, provided it did not increase those risks.",
            "Is strictly liable for all hazardous obstacles maintained on commercial recreational downhill slopes.",
            "Is liable under comparative negligence principles, reducing Skier's recovery in proportion to Skier's fault.",
            "Owes a heightened common-carrier duty of safety to all ticketed ski resort patrons."
        ],
        ans: 0,
        exp: "Under California's Primary Assumption of the Risk doctrine, a defendant owes no legal duty to eliminate or protect a participant from risks inherent in an active sport or recreational activity. The defendant only has a duty not to increase the inherent risks beyond those naturally present in the sport."
    },
    {
        id: 22,
        topic: "Products Liability / Warning Defect & Learned Intermediary Doctrine",
        fp: "PharmaCo manufactured an FDA-approved prescription cardiac medication. PharmaCo's package insert fully warned prescribing physicians of a rare risk of kidney failure. Doctor prescribed the medication to Patient without reading the package insert or warning Patient of the risk. Patient suffered kidney failure and sued PharmaCo in strict liability for failure to warn.",
        q: "PharmaCo's strongest defense is:",
        opts: [
            "The Learned Intermediary Doctrine, because PharmaCo adequately warned the prescribing physician.",
            "Federal preemption, because FDA approval grants absolute immunity against design and warning claims.",
            "Contributory negligence, because Patient failed to conduct independent research on the drug.",
            "Strict products liability does not apply to commercially manufactured prescription pharmaceuticals."
        ],
        ans: 0,
        exp: "Under the Learned Intermediary Doctrine, a manufacturer of prescription drugs or medical devices satisfies its duty to warn by providing adequate warnings to the prescribing physician (the learned intermediary), who is responsible for evaluating the risks and advising the patient."
    },
    {
        id: 23,
        topic: "Defamation / Public Official & Actual Malice Standard",
        fp: "Newspaper published an investigative article stating that the local City Police Chief accepted cash bribes from organized crime figures. Reporter based the story solely on an anonymous, uncorroborated phone tip without checking official department records or interviewing available witnesses. Police Chief sued Newspaper for libel.",
        q: "To prevail in a defamation action, Police Chief must prove that Newspaper published the article:",
        opts: [
            "With ordinary negligence regarding the truth or falsity of the criminal allegations.",
            "With actual malice, meaning with knowledge that the statement was false or with reckless disregard for its truth.",
            "With common-law ill will, spite, and personal hostility directed at Police Chief.",
            "Exclusively through written print media rather than unrecorded oral statements."
        ],
        ans: 1,
        exp: "Under New York Times Co. v. Sullivan, a public official (such as a police chief) cannot recover damages for defamatory statements relating to official conduct without proving with clear and convincing evidence that the statement was made with 'actual malice'—knowledge of falsity or reckless disregard for whether it was false."
    },
    {
        id: 24,
        topic: "Public Nuisance / Special Injury Requirement",
        fp: "Chemical Co. illegally dumped non-toxic dye into a navigable municipal river, turning the water fluorescent green and causing City to close the waterway to all public boating and navigation for one week. Fisher, a commercial fisherman who earned his living catching fish in that stretch of river, lost $10,000 in income during the closure. Fisher sued Chemical Co. for public nuisance.",
        q: "Can Fisher maintain a private tort action against Chemical Co. for public nuisance?",
        opts: [
            "No, because public nuisance actions can only be initiated by government public prosecutors.",
            "No, because purely economic losses are never recoverable under environmental nuisance doctrines.",
            "Yes, because Fisher suffered a unique harm different in kind from the harm suffered by the general public.",
            "Yes, because commercial chemical polluters are subject to absolute strict enterprise liability."
        ],
        ans: 2,
        exp: "A public nuisance is an unreasonable interference with a right common to the general public. A private individual cannot recover for a public nuisance unless the individual suffered a 'special injury'—harm of a different kind (e.g., loss of commercial livelihood for a commercial fisherman), not merely a difference in degree, from that suffered by the general public who were merely inconvenienced in recreational boating."
    },
    {
        id: 25,
        topic: "Intentional Torts / Defense of Others & Reasonable Mistake",
        fp: "Sam saw two undercover plainclothes police officers tackling a pedestrian who was screaming for help. Believing in good faith that the pedestrian was being mugged, Sam struck Officer in the head with a wooden plank, fracturing Officer's jaw. Officer sued Sam for battery. Sam asserted the defense of others.",
        q: "Under the modern majority rule governing defense of third persons, Sam's defense will:",
        opts: [
            "Fail, because an intervenor acts at their own peril and steps directly into the shoes of the person being aided.",
            "Succeed, provided Sam's belief that the third party was being unlawfully attacked was objectively reasonable under the circumstances.",
            "Fail, because the use of physical force against active law enforcement officers is strict liability per se.",
            "Succeed only if the person being tackled was a member of Sam's immediate household family."
        ],
        ans: 1,
        exp: "Under the modern majority rule (and Restatement 2d of Torts), an actor is privileged to use reasonable force to defend a third person if the actor reasonably believes that the third person would be privileged to use force in self-defense. An honest, reasonable mistake does not forfeit the privilege (rejecting the old 'step-in-the-shoes' minority doctrine)."
    }
];