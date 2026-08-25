const examData = [
    {
        id: 1,
        topic: "Battery / Particulate Matter & Offensive Contact (Leichtman v. WLW Jacor)",
        fp: "Questions 1–2 are based on the following fact situation:\nAnti-Smoking Activist was invited as a guest on a live radio broadcast hosted by Radio Host. During the interview, Radio Host, knowing that Activist had severe moral and health objections to tobacco, deliberately lit a large cigar, leaned within three inches of Activist's face, and repeatedly blew dense clouds of cigar smoke directly into Activist's eyes, nose, and mouth to humiliate him on air. Activist suffered no physical burn or clinical illness, but was deeply offended.",
        q: "In a civil tort action by Activist against Radio Host for Battery, Activist will:",
        opts: [
            "Lose, because tobacco smoke and gaseous particulates lack physical solidity and cannot constitute bodily contact.",
            "Prevail, because intentionally directing particulate matter or smoke into another's face constitutes offensive contact.",
            "Lose, because voluntary entry into a broadcast studio creates an implied consent to offensive talk-show antics.",
            "Prevail only under intentional infliction of emotional distress upon proving severe psychiatric injury."
        ],
        ans: 1,
        exp: "Under Leichtman v. WLW Jacor Communications, tobacco smoke has physical particulate properties. Intentionally blowing smoke directly into the face of another person constitutes an offensive contact sufficient to sustain an action for Battery."
    },
    {
        id: 2,
        topic: "Battery / Vicarious Liability for Radio Host Intentional Torts",
        fp: "Questions 1–2 are based on the following fact situation:\nAnti-Smoking Activist was invited as a guest on a live radio broadcast hosted by Radio Host. During the interview, Radio Host, knowing that Activist had severe moral and health objections to tobacco, deliberately lit a large cigar, leaned within three inches of Activist's face, and repeatedly blew dense clouds of cigar smoke directly into Activist's eyes, nose, and mouth to humiliate him on air. Activist suffered no physical burn or clinical illness, but was deeply offended.",
        q: "If Activist also sues Radio Station under respondeat superior for Radio Host's battery, Radio Station is:",
        opts: [
            "Immune from liability, because employers are categorically never vicariously liable for intentional torts.",
            "Not liable, because smoking inside private recording studios is an independent personal frolic outside employment.",
            "Vicariously liable, because Host's tortious conduct occurred during the broadcast to generate audience ratings.",
            "Liable only if Activist can prove that Radio Station executives provided Host with the specific cigar used."
        ],
        ans: 2,
        exp: "Under California respondeat superior law (Mary M. v. City of Los Angeles), an employer is vicariously liable for intentional torts if the conduct was engendered by or arose out of the performance of the employee's work duties (here, generating controversial talk radio entertainment)."
    },
    {
        id: 3,
        topic: "False Imprisonment / Confinement via Invalid Assertion of Legal Authority",
        q: "Private Security Guard, wearing a uniform resembling a police officer, confronted Shopper in a public street parking lot. Guard falsely stated: 'I am a sworn special state police constable. You are officially under arrest for felony theft. If you take one step away from this vehicle, I will shoot you.' Guard had no legal authority. Shopper submitted to the command and stood by the car for 45 minutes. In Shopper's suit for False Imprisonment:",
        opts: [
            "Shopper will prevail, because submission to an explicit threat under a false claim of legal authority is confinement.",
            "Guard will prevail, because Shopper was in an open public parking lot with unrestricted physical avenues of foot escape.",
            "Guard will prevail, because the intentional tort of false imprisonment requires physical locking of doors or barriers.",
            "Shopper will prevail only if Guard actually pointed a loaded, functional firearm directly at Shopper's chest."
        ],
        ans: 0,
        exp: "Confinement for False Imprisonment can be accomplished through submission to an asserted legal authority (color of law). When a plaintiff submits to an invalid arrest under an officer's or guard's false assertion of legal authority, actionable False Imprisonment is established."
    },
    {
        id: 4,
        topic: "Negligence / The Sudden Unforeseen Physical Incapacity Defense",
        q: "Driver was operating her vehicle with ordinary care at 30 mph. Driver had zero prior history of heart problems or medical conditions, and had passed a comprehensive physical exam the prior week. Without any warning or premonitory symptoms, Driver suffered an instantaneous massive stroke, lost consciousness, and her vehicle drifted onto the sidewalk, striking Pedestrian. In Pedestrian's negligence suit against Driver:",
        opts: [
            "Driver is strictly liable, because operating a motor vehicle on public thoroughfares is an inherently dangerous activity.",
            "Driver is liable under res ipsa loquitur, because motor vehicles do not leave the roadway onto sidewalks absent fault.",
            "Driver is liable for fifty percent of Pedestrian's damages under California's pure comparative fault allocation rules.",
            "Driver is not liable, because a sudden, unforeseen loss of consciousness without prior warning negates negligence."
        ],
        ans: 3,
        exp: "Under Bashi v. Wodarz, a sudden, unforeseen loss of consciousness or physical incapacitation that occurs without prior warning is a complete defense to a negligence claim, because the driver did not act with voluntary breach of the duty of ordinary care."
    },
    {
        id: 5,
        topic: "Intentional Torts / Transferred Intent Across Torts (Battery to Trespass to Land)",
        q: "Defendant became enraged at Neighbor standing on the sidewalk. Defendant picked up a heavy rock and threw it with all his might directly at Neighbor's head, intending to commit a severe battery. Neighbor ducked. The rock sailed over Neighbor's head, crossed the boundary line onto Homeowner's private lawn, and crashed through Homeowner's custom antique stained-glass bay window. In Homeowner's suit against Defendant for Trespass to Land:",
        opts: [
            "Defendant is liable exclusively in ordinary negligence, because Defendant lacked specific intent to invade real property.",
            "Defendant is liable for Trespass to Land under transferred intent, transferring his intent to commit battery to property.",
            "Defendant is not liable for trespass to land, because transferred intent operates strictly between torts against persons.",
            "Homeowner's recovery is barred by the doctrine of inevitable accident, because Neighbor's ducking was an intervening act."
        ],
        ans: 1,
        exp: "Transferred Intent applies across the five traditional writ-of-trespass torts. A defendant who intends a Battery against one person and ends up causing an unauthorized physical entry onto another's land is liable for intentional Trespass to Land."
    },
    {
        id: 6,
        topic: "Negligence / Statutory Compliance as Mere Minimum Evidence vs. Conclusive Care",
        q: "A federal administrative safety standard required industrial chemical storage vats to have concrete containment walls at least 3 feet high. Chemical Corp. built containment walls exactly 3 feet high. However, Chemical Corp.'s vat was located on an active flood plain where ordinary local rainfall predictably rose 5 feet every spring. A spring rain caused chemicals to overflow the 3-foot wall into Neighbor's well. Chemical Corp. argued full statutory compliance. Result?",
        opts: [
            "Chemical Corp. wins as a matter of law, because full compliance with an applicable safety regulation bars negligence claims.",
            "Chemical Corp. wins, because the federal safety regulation preempts all state common law environmental negligence claims.",
            "Neighbor wins, because compliance with government safety statutes establishes only a minimum baseline of reasonable care.",
            "Neighbor wins only if Neighbor proves that Chemical Corp. obtained its municipal building permit through concealment."
        ],
        ans: 2,
        exp: "Under Restatement (Third) of Torts § 16(a), compliance with a governmental statute or safety standard is evidence of reasonable care, but is NOT conclusive. If a reasonable person under the specific circumstances would have taken additional precautions, statutory compliance does not shield the defendant."
    },
    {
        id: 7,
        topic: "Self-Defense / Excessive Deadly Force in Response to Non-Deadly Battery",
        q: "Customer and Store Clerk engaged in a verbal argument over a return. Customer slapped Clerk across the face with an open hand, causing a red mark but no weapon or threat of deadly force. In immediate response, Clerk pulled a loaded 9mm semi-automatic pistol from beneath the counter and shot Customer in the chest, causing permanent paralysis. In Customer's civil action for Battery against Clerk, Clerk's self-defense argument will:",
        opts: [
            "Fail, because self-defense permits only proportional force, and deadly force is never privileged against non-deadly battery.",
            "Succeed, because an individual who is physically attacked on commercial premises is entitled to use all available force.",
            "Succeed under the common law 'initial aggressor' doctrine, which strips an attacking plaintiff of all tort protections.",
            "Fail only if Customer proves that Clerk had a safe, unobstructed avenue of physical retreat behind the counter."
        ],
        ans: 0,
        exp: "Self-defense privileges an actor to use only that degree of force that reasonably appears necessary. Deadly force is privileged ONLY when the actor reasonably believes they are in imminent danger of death or serious bodily harm. Responding to a slap with a firearm is excessive force as a matter of law."
    },
    {
        id: 8,
        topic: "Negligence / Specialized 'Eggshell Psyche' Analysis in NIED vs. Physical Impact",
        q: "Driver committed slight ordinary negligence in backing out of a driveway at 2 mph, tapping the bumper of Pedestrian's car with zero physical injury or bodily contact to Pedestrian. Pedestrian, who had an extreme, rare, pre-existing psychiatric schizophrenia condition, suffered a catastrophic psychological breakdown upon hearing the metal tap and was permanently institutionalized. In Pedestrian's NIED suit against Driver:",
        opts: [
            "Pedestrian wins full damages under the Eggshell Skull rule, because tortfeasors take victims with all pre-existing infirmities.",
            "Pedestrian wins, because any physical property collision creates an automatic direct duty to prevent psychiatric trauma.",
            "Pedestrian loses only if Driver can establish that Pedestrian was not wearing a seatbelt at the time of the bumper tap.",
            "Pedestrian loses, because NIED without impact requires that emotional distress be of a degree a normal person would suffer."
        ],
        ans: 3,
        exp: "In standalone claims for NIED without physical impact, the defendant is liable ONLY if an ordinary, reasonable person of normal sensibilities would have suffered severe emotional distress under the circumstances (unless the defendant had prior knowledge of the unique psychiatric vulnerability)."
    },
    {
        id: 9,
        topic: "Conversion / Conversion of Intangible Cryptocurrency & Digital Tokens",
        q: "Investor owned 10 Bitcoin stored in a digital cryptocurrency wallet with a unique private cryptographic key. Hacker gained unauthorized digital access to Investor's computer, stole the private key, transferred the Bitcoin into an unrecoverable offshore blockchain tumbler, and converted it to cash. Investor sued Hacker for Conversion. Hacker argued cryptocurrency is intangible software code not subject to conversion. Result?",
        opts: [
            "Hacker wins, because common law conversion is strictly restricted to physical, tangible, movable personal chattels.",
            "Investor wins, because conversion applies to intangible digital assets and cryptocurrency capable of exclusive ownership.",
            "Hacker wins, because the decentralized, unregulated nature of blockchain networks deprives investors of protections.",
            "Investor is restricted exclusively to an equitable action for unjust enrichment and constructive trust under banking law."
        ],
        ans: 1,
        exp: "Under modern conversion doctrines (Kremen v. Cohen), intangible property rights—including digital assets and cryptocurrency tokens represented by private keys—are fully subject to the tort of Conversion because they represent identifiable, specific, exclusive property interests."
    },
    {
        id: 10,
        topic: "Negligence / Negligent Entrustment of Real Property to Known Reckless Actors",
        q: "Landlord owned an empty, unfenced commercial warehouse. Landlord leased the warehouse for a single weekend to Promoter, knowing that Promoter planned to host an illegal 2,000-person indoor rave with pyrotechnics, no fire exits, and no security. During the rave, pyrotechnics ignited a fire, injuring Attendee. In Attendee's negligence lawsuit against Landlord:",
        opts: [
            "Landlord is completely immune from liability, because executing a commercial lease transfers exclusive possession to tenant.",
            "Landlord is not liable, because Attendee assumed the risk of injury by voluntarily purchasing an admission ticket to a rave.",
            "Landlord is liable, because a landowner who leases property for a known dangerous activity to the public owes due care.",
            "Landlord is liable only if Landlord was physically present inside the building operating the pyrotechnic ignition controls."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Torts § 359 (the Public Admission / Known Dangerous Activity exception), a lessor who leases land for a purpose involving the admission of the public, knowing that an unreasonable risk of danger exists, is directly liable for injuries to members of the public."
    },
    {
        id: 11,
        topic: "Defense of Property / Non-Deadly Electrified Security Fences",
        q: "Auto Salvage Yard suffered chronic nighttime thefts. To deter intruders, Owner installed a commercial security fence charged with a non-lethal, pulsed 12-volt electric shock designed to startle and cause momentary stinging pain, compliant with municipal security codes. Burglar climbed the fence at midnight, received a non-lethal electric shock, was startled, fell backward onto the grass, and suffered a sprained wrist. Burglar sued Owner for Battery. Result?",
        opts: [
            "Owner is privileged, because a property owner is entitled to use reasonable, non-deadly mechanical deterrents to protect real property.",
            "Owner is liable for battery, because the rule of Katko v. Briney prohibits the installation of any mechanical electrified devices on boundary fences.",
            "Owner is strictly liable, because accumulating electrical energy along perimeter property boundaries constitutes an ultrahazardous dangerous activity.",
            "Burglar wins, because landowners owe known nighttime trespassers an absolute duty to provide unobstructed climbing egress."
        ],
        ans: 0,
        exp: "While Katko v. Briney prohibits DEADLY mechanical devices or spring guns, a possessor of land is privileged to use reasonable, NON-DEADLY mechanical devices (such as barbed wire or code-compliant, non-lethal pulsed electric security fences) to prevent or terminate an unlawful intrusion upon real property."
    },
    {
        id: 12,
        topic: "Negligence / Landowner Duty for Ingress & Egress Hazards Outside Boundary",
        q: "Restaurant was situated on a busy highway with its customer parking lot located directly across the four-lane road. Restaurant provided no crosswalk, warning signs, or valet, and instructed customers to park across the highway and walk across the unlit road. Customer was struck by a speeding vehicle while crossing the highway to enter the restaurant. In Customer's negligence action against Restaurant (Bonanno v. Continental Casualty):",
        opts: [
            "Restaurant is immune from liability, because a commercial landowner's premises liability terminates at the precise legal boundary line of the real estate.",
            "Restaurant is not liable, because municipal traffic safety on public highways is the exclusive non-delegable duty of state highway patrol agencies.",
            "Restaurant is liable, because a commercial business owes a duty of reasonable care to provide safe ingress and egress for invitees crossing adjacent approaches.",
            "Customer's claim is completely barred under primary assumption of risk for jaywalking across a multi-lane commercial thoroughfare."
        ],
        ans: 2,
        exp: "Under California and modern premises liability rules (Schwartz v. Helms Bakery / Annocki v. Peterson Enterprises), a commercial business's duty to invitees extends to providing safe ingress and egress, and may encompass taking reasonable precautions regarding known, foreseeable traffic hazards on immediate approaches and crossings directly created or utilized by the business."
    },
    {
        id: 13,
        topic: "IIED / Abuse of Custodial and Fiduciary Power Relationships",
        q: "School Principal called 14-year-old Student into an interrogation room, locked the door, and falsely accused Student of selling illegal narcotics on campus. Principal refused to permit Student to call her parents, slammed his fists on the desk, shouted that Student would be sent to a maximum-security adult state penitentiary for 20 years, and kept Student sobbing uncontrollably in isolation for 5 hours. Student suffered acute trauma. In Student's IIED suit against Principal:",
        opts: [
            "Principal will prevail, because public school administrators enjoy absolute discretionary immunity regarding student disciplinary interrogations.",
            "Student will prevail, because an extreme abuse of a position of custodial authority over a vulnerable minor constitutes extreme and outrageous conduct.",
            "Principal will prevail, because the intentional tort of IIED strictly requires physical battery or physical impact during the interrogation.",
            "Student will prevail only if Principal had actual knowledge that Student had a pre-existing clinical psychiatric diagnosis."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Torts § 46 cmt. e, the extreme and outrageous character of conduct may arise from an abuse by the actor of a position of power, authority, or custodial control over the victim (such as school principals, police officers, or employers), especially where the victim is particularly vulnerable (such as a minor child)."
    },
    {
        id: 14,
        topic: "Negligence / Foreseeability of Rescuers in Firefighter's Rule (Independent Arsonist Exception)",
        q: "Arsonist intentionally set fire to an occupied apartment building. Firefighter entered the burning structure to rescue trapped tenants and was severely burned when an interior staircase collapsed. In Firefighter's personal injury lawsuit against Arsonist:",
        opts: [
            "Arsonist is completely shielded by the Firefighter's Rule, because combating structure fires is the core inherent professional risk of firefighting.",
            "Firefighter is barred from all recovery under the doctrine of primary assumption of risk for elevated structural collapses.",
            "Arsonist is liable only for economic damages under statutory Proposition 51 proportional fault allocation rules.",
            "Firefighter can recover against Arsonist, because the Firefighter's Rule does not protect an intentional wrongdoer who commits felonious arson."
        ],
        ans: 3,
        exp: "The common law Firefighter's Rule shields individuals whose ORDINARY negligence necessitated the first responder's presence. However, an established universal exception holds that the Firefighter's Rule does NOT shield intentional tortfeasors, criminals, or arsonists who intentionally ignite fires or commit intentional felonies causing injury to emergency responders."
    },
    {
        id: 15,
        topic: "Negligence / NIED for Mortuary Mishandling of Human Remains (Christensen v. Superior Court)",
        q: "Mortuary contracted with Family to provide a dignified cremation and burial of Decedent's remains. Mortuary employees secretly sold Decedent's body organs on the black market and returned a box of fireplace ashes to Family. Two years later, Family discovered the desecration and suffered severe psychiatric trauma. Under California law (Christensen v. Superior Court):",
        opts: [
            "Family can recover for NIED, because mortuaries owe a direct duty of care to close family members regarding the dignified handling of human remains.",
            "Family cannot recover for NIED, because Family members were not present at the mortuary to witness the organ removal contemporaneously.",
            "Family cannot recover without proving physical impact or bodily injury resulting directly from the mishandled human remains.",
            "Family's claim is strictly limited to breach of the commercial cremation services contract, capping recovery at the contract price paid."
        ],
        ans: 0,
        exp: "Under California law (Christensen v. Superior Court, 54 Cal.3d 868), mortuaries, crematories, and funeral homes owe a direct duty of care to the close surviving family members for whose benefit services are rendered. Negligent or intentional mishandling, desecration, or mutilation of human remains allows direct NIED recovery for emotional distress without physical impact or contemporaneous observation."
    },
    {
        id: 16,
        topic: "Battery / Lack of Actual Subjective Knowledge of Offensive Contact at Time of Act",
        q: "While Patient was deeply unconscious under general anesthesia during elective gallbladder surgery, Medical Resident (who had no clinical role in the surgery) leaned over and kissed Patient's lips for his own sexual gratification. Patient suffered no physical injury, but was devastated upon discovering the incident weeks later when a nurse reported it. In Patient's suit against Resident for Battery:",
        opts: [
            "Resident will prevail, because an intentional tort of battery strictly requires that the plaintiff be conscious and aware of the contact at the moment it occurs.",
            "Patient will prevail, because battery requires only intentional unauthorized offensive contact; contemporaneous consciousness of the contact is not required.",
            "Resident will prevail, because the absence of measurable physical skin trauma or tissue damage precludes recovery for battery.",
            "Patient is restricted to an action for intentional infliction of emotional distress against the hospital's corporate governing board."
        ],
        ans: 1,
        exp: "Unlike Assault (which requires contemporaneous apprehension), Battery does NOT require that the plaintiff be conscious or aware of the contact at the time it occurs. An unauthorized, intentional offensive contact made while the victim is asleep or anesthetized is a completed, actionable Battery the moment the contact is made."
    },
    {
        id: 17,
        topic: "Negligence / Indivisible Successive Impact Joint Liability (Summers vs. Successive Torts)",
        q: "Car 1 negligently struck Pedestrian, fracturing Pedestrian's leg. Thirty seconds later, while Pedestrian lay helpless on the asphalt, Car 2 negligently struck Pedestrian, crushing Pedestrian's chest and causing severe lung damage. Undisputed medical testimony established exactly which vehicle caused the leg fracture and which vehicle caused the lung damage. In Pedestrian's suit against both drivers:",
        opts: [
            "Car 1 and Car 2 are held jointly and severally liable for 100% of all combined injuries under the alternative liability rule of Summers v. Tice.",
            "Car 1 is completely dismissed from liability, because Car 2's subsequent impact acted as a superseding intervening cause.",
            "Liability is apportioned: Car 1 is liable for the leg fracture and resulting successive injury risks, while Car 2 is liable solely for the lung damage.",
            "Car 2 is completely dismissed, because Car 1 created the original helpless peril placing Pedestrian in the path of highway traffic."
        ],
        ans: 2,
        exp: "Where successive tortfeasors cause distinct, separate, divisible physical injuries (e.g., Car 1 caused the broken leg; Car 2 caused the crushed chest 30 seconds later), damages are apportioned between the tortfeasors based on actual causation. Car 2 is liable only for the distinct harm Car 2 inflicted (lung damage), while Car 1 is liable for the leg (and any foreseeable aggravation caused by leaving the victim helpless)."
    },
    {
        id: 18,
        topic: "Trespass to Land / Debris and Environmental Particulate Encroachment",
        q: "Factory operated industrial smokestacks that emitted thousands of pounds of visible, toxic microscopic lead dust particles. The lead dust was carried by prevailing winds across the boundary line onto Neighbor's agricultural topsoil, rendering the soil unfit for organic farming. Neighbor sued Factory for Trespass to Land. Factory argued particulate emissions are governed exclusively by nuisance. Result?",
        opts: [
            "Factory wins, because the physical entry requirement of trespass to land strictly mandates entry by tangible persons or visible macroscopic objects.",
            "Factory wins, because air pollution emissions are subject to exclusive administrative preemption under the Federal Clean Air Act.",
            "Neighbor wins only under strict liability for conducting an ultrahazardous dangerous agricultural processing activity.",
            "Neighbor wins for Trespass to Land, because causing microscopic physical particulate matter to settle upon real property constitutes a physical invasion (Martin v. Reynolds Metals)."
        ],
        ans: 3,
        exp: "Under Martin v. Reynolds Metals Co. and modern California law (Wilson v. Interlake Steel), the intentional or predictable deposition of physical microscopic particulate matter (such as lead dust or chemical pollutants) that settles upon and damages the plaintiff's land constitutes an actionable physical invasion supporting Trespass to Land."
    },
    {
        id: 19,
        topic: "Assault / Present Ability & Unloaded Firearms (Apparent vs. Actual Ability)",
        q: "Defendant confronted Victim in a dark alley, pulled an unloaded antique pistol from his pocket, pointed it at Victim's forehead, cocked the hammer, and snarled: 'Give me your wallet or I'll blow your brains out.' Victim was terrified and handed over his wallet. In reality, Defendant had no bullets. In Victim's civil tort action for Assault:",
        opts: [
            "Victim will prevail, because assault requires only that the defendant create an apparent, reasonable apprehension of imminent harmful contact.",
            "Defendant will prevail, because an unloaded firearm lacks the actual physical mechanical capacity to fire an imminent harmful projectile.",
            "Defendant will prevail, because words accompanied by conditional threats of armed robbery negate the required imminence of assault.",
            "Victim will prevail only under the tort of conversion for the unlawful exercise of dominion over the physical leather wallet."
        ],
        ans: 0,
        exp: "Assault requires that the defendant intentionally cause reasonable apprehension of immediate harmful or offensive contact. Apparent present ability is sufficient; actual physical ability is not required. Pointing an unloaded gun (which the victim reasonably believes to be loaded) creates reasonable apprehension of imminent harm, satisfying Assault."
    },
    {
        id: 20,
        topic: "Negligence / Direct Physician Duty to Warn of Genetic Risks (Pate v. Threlkel)",
        q: "Physician diagnosed Patient with an aggressive, genetically inherited hereditary thyroid cancer that carried a 90% transmission risk to children, treatable only if caught early. Physician treated Patient, but negligently failed to inform Patient that her adult children should be genetically screened. Patient's adult Daughter developed advanced, incurable thyroid cancer. In Daughter's medical negligence suit against Physician:",
        opts: [
            "Physician is not liable, because physicians owe duties of care strictly and exclusively to patients with whom they maintain direct contractual privity.",
            "Physician is completely immune from civil liability under federal medical privacy statutes (HIPAA) prohibiting disclosures regarding genetic tests.",
            "Physician is liable, because a physician diagnosing a dangerous hereditary disease owes a duty to warn the patient to alert direct biological offspring.",
            "Daughter's claim is completely barred under the doctrine of secondary implied assumption of risk for genetic medical conditions."
        ],
        ans: 2,
        exp: "Under modern medical malpractice law (Pate v. Threlkel / Safer v. Pack), where a physician diagnoses a genetically transmissible disease that poses a serious risk to biological children, the physician owes a duty of reasonable care to warn the patient of the hereditary nature of the disease so that family members can seek preventive testing."
    },
    {
        id: 21,
        topic: "False Imprisonment / Reasonable Means of Escape Known to Plaintiff",
        q: "Customer was standing inside an antique store. Store Owner locked the front exit glass door to prevent Customer from leaving until an argument was settled. However, there was an unlocked, clearly marked, brightly lit side exit door leading directly to the sidewalk, 10 feet from Customer, which Customer saw and knew was fully accessible. Customer remained inside for 30 minutes. Customer sued Owner for False Imprisonment. Result?",
        opts: [
            "Owner is liable for False Imprisonment, because locking the primary entrance/exit door constitutes unlawful physical restraint per se.",
            "Owner is not liable, because confinement does not exist if a safe, reasonable, readily accessible means of escape is known to the plaintiff.",
            "Owner is liable for nominal damages of $5,000 under statutory merchant detention limitation provisions.",
            "Customer will prevail, because an invitee is under no legal duty to seek alternate exits when a commercial store door is locked."
        ],
        ans: 1,
        exp: "An essential element of False Imprisonment is that the plaintiff be confined within bounded limits with NO reasonable means of escape. If a known, safe, reasonable, and readily accessible means of exit exists of which the plaintiff is aware, there is no actionable confinement."
    },
    {
        id: 22,
        topic: "Negligence / Pre-Impact Fright Damages in Survival Actions",
        q: "Driver was speeding at 90 mph and drifted across the center line. Victim saw Driver's speeding car barreling straight toward him for 5 seconds in sheer terror before the head-on collision occurred. Victim was killed instantly upon impact. In a survival action brought by Victim's Estate against Driver under modern tort law:",
        opts: [
            "Estate is barred from all emotional distress damages, because instantaneous death extinguishes all pre-impact mental suffering claims.",
            "Estate can recover exclusively for the fair market replacement value of the physical motor vehicle under property tort rules.",
            "Estate is restricted to statutory wrongful death burial expense reimbursements under the California Probate Code.",
            "Estate can recover damages for Victim's pre-impact emotional terror and fright experienced during the 5 seconds prior to fatal collision."
        ],
        ans: 3,
        exp: "In modern tort law and California survival actions (Cal. Code of Civ. Proc. § 377.34), a decedent's estate can recover for the pre-impact emotional distress, terror, and fright experienced by the decedent prior to impact/death where the decedent was aware of the impending fatal collision."
    },
    {
        id: 23,
        topic: "Battery / Consent Induced by Material Mistake Known to Actor",
        q: "Boxer agreed to participate in an amateur boxing match against Opponent. Unknown to Boxer, Opponent secretly removed the internal foam padding from his leather boxing gloves and inserted hardened plaster-of-Paris casts. During the first round, Opponent struck Boxer with the hardened glove, shattering Boxer's jaw. In Boxer's suit for Battery against Opponent:",
        opts: [
            "Opponent is not liable for Battery, because voluntary athletic participants in contact sports consent to all physical blows delivered in the ring.",
            "Opponent is liable for Battery, because Boxer consented to contact with standard boxing gloves, not plaster-loaded weapons.",
            "Opponent is liable exclusively under the statutory rules of unfair business competition for violating athletic commission rules.",
            "Boxer's claim is completely barred under the doctrine of primary assumption of risk for competitive amateur boxing."
        ],
        ans: 1,
        exp: "A participant in a sport consents only to contacts that are within the normal rules and customs of the sport. Consenting to a standard boxing match does NOT constitute consent to being struck with illegal, loaded plaster gloves; such unauthorized, altered contact exceeds the scope of consent and constitutes an intentional Battery."
    },
    {
        id: 24,
        topic: "Negligence / Affirmative Duty of Business Owners to Control Intoxicated Invitees on Premises",
        q: "Bar Patron became heavily intoxicated and began loudly shouting violent threats at other seated guests. Bar Staff observed Patron's aggressive behavior for 30 minutes, but took no steps to eject Patron, cut off alcohol, or call security. Patron suddenly grabbed a beer bottle and struck Innocent Customer in the face. In Innocent Customer's negligence lawsuit against Bar Owner:",
        opts: [
            "Bar Owner is completely immune from all liability under California Civil Code § 1714 social host and commercial alcohol vendor immunity.",
            "Bar Owner is not liable, because third-party intentional assaults are classified as unforeseeable superseding causes as a matter of law.",
            "Bar Owner is liable, because a business owner owes invitees a duty of reasonable care to control foreseeable aggressive conduct of persons on premises.",
            "Innocent Customer's claim is barred under the doctrine of secondary assumption of risk for drinking inside commercial barrooms."
        ],
        ans: 2,
        exp: "While California Civil Code § 1714 shields vendors from liability for serving alcohol that causes off-premises driving accidents, it does NOT extinguish a business proprietor's independent premises liability duty to protect invitees from foreseeable physical assaults and rowdy conduct occurring ON THE PREMISES where staff has notice of the dangerous behavior in time to intervene."
    },
    {
        id: 25,
        topic: "Trespass to Chattels / Intentional Impairment of Condition without Physical Dispossession",
        q: "Neighbor sneaked onto Owner's driveway at night, opened the gas tank of Owner's luxury car, and poured three cups of sugar into the fuel tank. Neighbor never moved the car or removed any physical parts. When Owner started the engine the next morning, the sugar dissolved into the fuel injectors, completely ruining the engine and causing $8,000 in mechanical repair bills. In Owner's suit for Trespass to Chattels against Neighbor:",
        opts: [
            "Neighbor is not liable for trespass to chattels, because the tort strictly requires total physical dispossession or carrying away of the chattel.",
            "Neighbor is liable exclusively for intentional trespass to land for walking across the private concrete driveway.",
            "Owner is restricted to an action for conversion requiring Neighbor to purchase the entire vehicle at full market value under forced sale.",
            "Neighbor is liable for Trespass to Chattels, because intentionally impairing the physical condition, quality, or value of chattel constitutes actionable trespass."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 218(b), a Trespass to Chattels occurs when an actor intentionally intermeddles with chattel in the possession of another, and the chattel is impaired as to its condition, quality, or value. Pouring a foreign substance into a fuel tank that impairs the engine is a classic Trespass to Chattels."
    }
];