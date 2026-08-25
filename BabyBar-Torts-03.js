const examData = [
    {
        id: 1,
        topic: "Causation / Market Share Liability Requirements (Sindell v. Abbott Labs)",
        fp: "Questions 1–2 are based on the following fact situation:\nPlaintiff developed a rare form of reproductive tract cancer caused by prenatal exposure to DES, a synthetic hormone drug manufactured by multiple pharmaceutical companies according to an identical chemical formula. Decades later, records identifying the specific manufacturer that supplied the pills to Plaintiff's mother were lost. Plaintiff joined five major drug manufacturers who collectively produced 85% of the DES sold in the relevant market during that period.",
        q: "Under California's Market Share Liability doctrine (Sindell v. Abbott Labs), Plaintiff will:",
        opts: [
            "Lose against all defendants, because Plaintiff cannot satisfy the traditional 'but-for' test identifying the wrongdoer.",
            "Prevail under joint and several liability, entitling Plaintiff to collect 100% of damages from any single solvent defendant.",
            "Lose, unless Plaintiff joins 100% of all licensed pharmaceutical laboratories that manufactured the synthetic drug.",
            "Prevail against named defendants, holding each liable for the proportion represented by its share of the market."
        ],
        ans: 3,
        exp: "Under Sindell v. Abbott Laboratories, where a plaintiff cannot identify which manufacturer produced a fungible, defective product, the plaintiff may sue manufacturers representing a 'substantial share' of the market. Each defendant is held liable only for its proportional market share."
    },
    {
        id: 2,
        topic: "Causation / Exculpation under Market Share Liability",
        fp: "Questions 1–2 are based on the following fact situation:\nPlaintiff developed a rare form of reproductive tract cancer caused by prenatal exposure to DES, a synthetic hormone drug manufactured by multiple pharmaceutical companies according to an identical chemical formula. Decades later, records identifying the specific manufacturer that supplied the pills to Plaintiff's mother were lost. Plaintiff joined five major drug manufacturers who collectively produced 85% of the DES sold in the relevant market during that period.",
        q: "If Defendant Pharma Corp. proves by conclusive distribution records that it never distributed or sold any DES in the state or region where Plaintiff's mother purchased the medication, Pharma Corp. will:",
        opts: [
            "Be completely dismissed from the action, because a defendant may exculpate itself by proving it could not have caused harm.",
            "Remain liable for its national market share percentage under the aggregate national risk creation theory of liability.",
            "Remain liable under enterprise liability principles for participating in the trade association that standardized the drug.",
            "Be dismissed only if the remaining joined co-defendants agree to absorb and redistribute Pharma Corp.'s assigned share."
        ],
        ans: 0,
        exp: "Under market share liability, the burden shifts to each defendant to demonstrate that it could not have produced the particular unit that caused the plaintiff's harm. Proving non-distribution in the relevant market completely exculpates the defendant."
    },
    {
        id: 3,
        topic: "NIED / Bystander Contemporaneous Sensory Awareness (Thing v. La Chusa)",
        q: "Father was inside his house when he heard a loud tire screech and crash outside. Father ran outside immediately (30 seconds later) and saw his Son lying severely injured on the asphalt having just been struck by a negligent motorist. Father suffered severe, clinically diagnosed shock and depression. Under California law (Thing v. La Chusa), Father:",
        opts: [
            "Can recover for NIED, because Father arrived at the scene almost immediately before the emergency ambulance arrived.",
            "Cannot recover for NIED, because Father was not contemporaneously aware that the event was causing injury at that moment.",
            "Can recover for NIED, because hearing the tire screech satisfied the required auditory perception of the collision event.",
            "Cannot recover for NIED unless Father also suffered physical impact or was within the physical zone of danger of impact."
        ],
        ans: 1,
        exp: "Under Thing v. La Chusa, a bystander plaintiff can recover for NIED ONLY if: (1) closely related to victim; (2) present at the scene and contemporaneously aware that the event is causing injury to the victim at the time it occurs; and (3) suffers serious emotional distress."
    },
    {
        id: 4,
        topic: "Strict Products Liability / Commercial Lessors vs. Service Providers",
        q: "Rental Co. leased a heavy-duty commercial wood chipper to Landscaper for a 3-day job. Unknown to Rental Co., an internal flywheel had a microscopic fatigue crack from the factory that rendered it unreasonably dangerous. On the second day of the rental, the flywheel shattered, severely injuring Landscaper. Rental Co. exercised utmost care in inspecting the machine before lease. Is Rental Co. strictly liable?",
        opts: [
            "No, because strict products liability applies exclusively to sellers of new goods who transfer absolute legal title.",
            "No, because Rental Co. exercised reasonable care in conducting pre-lease inspections, eliminating all tort liability.",
            "Yes, because commercial lessors in the regular business of leasing products are subject to strict products liability.",
            "Yes, but only under the implied warranty of merchantability under Article 2A of the Uniform Commercial Code."
        ],
        ans: 2,
        exp: "In California and the majority of jurisdictions (Price v. Shell Oil Co.), strict products liability applies to commercial lessors who are in the regular business of leasing equipment, because lessors place products into the stream of commerce."
    },
    {
        id: 5,
        topic: "Strict Products Liability / Hybrid Sales-Service Transactions",
        q: "Dentist used a commercially manufactured needle to administer a local anesthetic injection to Patient before a dental procedure. Because of a latent defect created by the manufacturer, the needle snapped off in Patient's jaw, requiring oral surgery. Patient sued Dentist under strict products liability for providing a defective product. Patient will:",
        opts: [
            "Lose against Dentist, because healthcare providers provide professional services rather than acting as commercial sellers.",
            "Prevail against Dentist, because healthcare providers are commercial distributors of all medical devices used directly.",
            "Prevail against Dentist under res ipsa loquitur, because needles do not break in the absence of negligent techniques.",
            "Lose against Dentist only if Dentist had purchased the needle from a certified, licensed domestic medical distributor."
        ],
        ans: 0,
        exp: "Under Magrine v. Krasnica, healthcare providers who use defective medical instruments during treatment are deemed providers of professional services, not commercial sellers of goods, and are not subject to strict products liability for tools used incidentally during treatment."
    },
    {
        id: 6,
        topic: "Economic Torts / Inducing Breach of Contract (Justification Privilege)",
        q: "Executive signed a valid 2-year employment contract with Tech Alpha containing a covenant not to work for competitors. Competitor Beta, with full knowledge of Executive's valid contract, offered Executive double the salary and agreed to pay all legal fees if Executive breached the contract and joined Beta. Executive breached. Tech Alpha sued Beta for Intentional Interference with Contract. Beta will:",
        opts: [
            "Not be held liable, because the privilege of commercial competition protects businesses offering higher compensation.",
            "Not be held liable, because Executive was an at-will employee as a matter of public policy regardless of term limits.",
            "Be held liable only if Tech Alpha proves that Competitor Beta acted with personal spite, ill will, and malice.",
            "Be held liable, because commercial competition does not privilege a competitor to induce breach of an existing valid contract."
        ],
        ans: 3,
        exp: "The privilege of commercial competition does NOT justify or protect a defendant who intentionally induces a third party to breach an existing, valid contract for a definite term. The competition privilege applies only to prospective economic relationships or contracts terminable at will."
    },
    {
        id: 7,
        topic: "Privilege / Citizen's Arrest for Felonies and Misdemeanors",
        q: "Bystander honestly and reasonably believed that Driver had committed a misdemeanor traffic infraction (illegal U-turn). Bystander blocked Driver's vehicle on the road and forcibly detained Driver until police arrived. In reality, no infraction had occurred. Driver sued Bystander for False Imprisonment. Bystander's defense of Citizen's Arrest will:",
        opts: [
            "Succeed, because private citizens are privileged to detain individuals upon a reasonable, good-faith suspicion of violation.",
            "Fail, because a private citizen is privileged to arrest for a misdemeanor only if the breach was committed in their presence.",
            "Succeed, provided Bystander used only non-deadly reasonable physical force to effectuate the traffic detention.",
            "Fail, because citizen's arrest privileges under common law are strictly restricted to violent capital felony offenses."
        ],
        ans: 1,
        exp: "At common law, a private citizen's privilege to arrest for a misdemeanor requires that the misdemeanor involve a breach of the peace AND actually have been committed in the citizen's physical presence. Private citizens are not protected by reasonable mistakes regarding whether a misdemeanor occurred."
    },
    {
        id: 8,
        topic: "Trespass / Trespass Ab Initio Modern Doctrine",
        q: "Health Inspector entered Restaurant during business hours under lawful statutory authority to conduct a kitchen safety inspection. While in the kitchen, Inspector noticed a high-end commercial espresso machine, unplugged it, and loaded it into his personal vehicle for his private home use. Restaurant sued Inspector for Trespass to Land. Inspector claims initial entry was lawful. Result?",
        opts: [
            "Inspector is liable exclusively for conversion and trespass to chattels, but not trespass to land because entry was lawful.",
            "Inspector is immune from all tort claims under the absolute sovereign immunity doctrine protecting municipal inspectors.",
            "Inspector is liable for trespass to land, because abusing a public authority of entry renders the initial entry tortious.",
            "Inspector is liable for trespass to land only if Restaurant owners ordered Inspector to leave prior to the machine seizure."
        ],
        ans: 2,
        exp: "Under the common law doctrine of Trespass Ab Initio, one who enters land pursuant to an authority given by law (like an inspector or officer) and subsequently commits an affirmative tortious act abuses that privilege, making the entire entry tortious from the beginning."
    },
    {
        id: 9,
        topic: "Privilege / Defense and Recapture of Chattel",
        q: "Shopper left her umbrella in a restaurant coat rack. Thief grabbed the umbrella and ran out the door. Shopper saw Thief grab the umbrella and immediately sprinted after Thief, catching Thief 50 yards down the sidewalk. Shopper tackled Thief to the ground to snatch back the umbrella, causing Thief a bruised shoulder. Thief sued Shopper for Battery. Result?",
        opts: [
            "Shopper is privileged, because an owner may use reasonable non-deadly force to recapture chattel in fresh pursuit.",
            "Shopper is liable for battery, because physical force may never be used to recapture personal property once possession is lost.",
            "Shopper is liable for battery, because Shopper had a legal duty to contact law enforcement rather than engaging in self-help.",
            "Shopper is privileged only if Shopper proved that the chattel possessed unique, irreplaceable sentimental value."
        ],
        ans: 0,
        exp: "Under Recapture of Chattel, an owner is privileged to use reasonable, non-deadly force to regain possession of chattel if: (1) the chattel was wrongfully taken; and (2) the owner acts in 'fresh pursuit' (prompt discovery and immediate pursuit without unreasonable delay)."
    },
    {
        id: 10,
        topic: "Negligence / Landowner Duty to Protect Against Third-Party Crime (Rowland Factors)",
        q: "Apartment Complex was located in a neighborhood that experienced 15 violent nighttime armed robberies in building parking lots over a 3-month span. Tenants repeatedly requested working floodlights and a security gate, but Landlord refused to spend the money. Tenant was robbed and assaulted in the dark parking lot at night. In Tenant's negligence action, Landlord's best defense is:",
        opts: [
            "Landlord had no heightened duty to provide security because the assault occurred outdoors rather than in a locked unit.",
            "Tenant assumed the risk of criminal attack by walking through the unlit parking lot after dark with knowledge of crime.",
            "The intentional criminal assault was an unforeseeable superseding cause breaking the chain of proximate causation.",
            "Landlord owed no duty, because premises owners are never liable for intentional independent torts of unknown criminals."
        ],
        ans: 2,
        exp: "While Landlord will argue superseding cause (the traditional defense), modern California law holds that where prior similar violent crimes establish high foreseeability, a landlord owes a duty of reasonable security precautions."
    },
    {
        id: 11,
        topic: "Negligence / Professional Specialist Standard of Care",
        q: "Board-Certified Neurosurgeon performed brain surgery on Patient in a rural community hospital. During the surgery, Neurosurgeon utilized an outdated surgical technique that general practitioners in that rural county commonly used, but which national neurosurgical board standards had condemned as dangerous a decade earlier. Patient suffered brain injury. What legal standard of care applies?",
        opts: [
            "The standard of professional skill and knowledge customarily exercised by medical practitioners in that local rural area.",
            "The degree of skill, care, and learning ordinarily possessed and exercised by certified neurosurgical specialists nationwide.",
            "An objective reasonable person standard without regard to specialized neurosurgical training or certifications.",
            "Strict liability, because neurosurgery involving human brain tissue constitutes an ultrahazardous medical undertaking."
        ],
        ans: 1,
        exp: "Medical specialists (such as board-certified neurosurgeons) are held to a national specialist standard of care—the skill, care, and learning ordinarily possessed and exercised by specialists in the same medical field nationwide—rather than a local 'same locality' rule."
    },
    {
        id: 12,
        topic: "Negligence / The Emergency Doctrine Limits",
        q: "Driver was texting on his phone while speeding at 60 mph in heavy traffic. Suddenly, Driver looked up and noticed Traffic Car stopped 10 feet ahead. In an emergency reaction to avoid the rear-end collision, Driver swerved onto the sidewalk and struck Pedestrian. Driver argued the 'Emergency Doctrine' shielded him from negligence. Driver's argument will:",
        opts: [
            "Succeed, because an actor confronted with sudden peril is not held to the standard of calm, deliberate reasonable care.",
            "Succeed, provided Driver honestly chose the path of least catastrophic damage under sudden crisis conditions.",
            "Fail, because the Emergency Doctrine applies exclusively to professional first responders like paramedics and firefighters.",
            "Fail, because the Emergency Doctrine does not protect an actor whose own prior negligent conduct created the emergency."
        ],
        ans: 3,
        exp: "Under the Emergency Doctrine, a person confronted with sudden emergency peril not of their own making is judged by how a reasonable person would act under those emergency circumstances. However, the doctrine is inapplicable if the emergency was created in whole or in part by the actor's own prior negligence."
    },
    {
        id: 13,
        topic: "Causation / Concurrent Independent Causes (Substantial Factor)",
        q: "Two independent forest fires, started negligently by Camper A and Camper B on separate parcels, merged together into a single massive wall of flame that destroyed Homeowner's cabin. Either fire alone was sufficient to destroy the cabin at the exact same instant. Homeowner sued Camper A. Camper A argued that his fire was not the 'but-for' cause because Camper B's fire would have destroyed the cabin anyway. Result?",
        opts: [
            "Camper A is liable, because under the Substantial Factor test, concurrent independent causes that each were sufficient are both liable.",
            "Camper A is not liable, because Homeowner cannot prove that 'but for' Camper A's fire the cabin would have been preserved.",
            "Camper A is dismissed, but Camper A and Camper B are held jointly liable exclusively under alternative liability (Summers v. Tice).",
            "Camper A is liable only for 50% of the property loss under statutory comparative fault allocation of environmental fires."
        ],
        ans: 0,
        exp: "Where two or more independent forces or acts combine to produce an indivisible injury, and either force alone would have been sufficient to bring about the harm at the same time, courts apply the 'Substantial Factor' test, holding each defendant liable for the entire damage."
    },
    {
        id: 14,
        topic: "Vicarious Liability / Non-Delegable Safety Duties of Business Landlords",
        q: "Department Store hired Independent Contractor Electric to repair overhead chandeliers in the store lobby. Electric negligently failed to bolt a chandelier bracket securely. Two days later, the chandelier fell and struck Customer. Department Store argued it was not liable because Electric was an independent contractor. Customer sued Department Store. Department Store is:",
        opts: [
            "Not liable, because employers are categorically immune from torts of independent contractors without direct physical control.",
            "Not liable, unless Customer proves Department Store was actively negligent in screening and hiring Contractor Electric.",
            "Vicariously liable, because commercial landowners owe invitees a non-delegable duty to maintain premises in a safe condition.",
            "Liable exclusively under the statutory worker's compensation scheme governing retail construction accidents."
        ],
        ans: 2,
        exp: "A commercial possessor of land open to the public owes invitees a non-delegable duty to keep the premises reasonably safe; hiring an independent contractor to perform repairs does not discharge this duty."
    },
    {
        id: 15,
        topic: "Joint Tortfeasors / Pro Tanto Settlement Credit Rule",
        q: "Plaintiff sued Co-Defendant A and Co-Defendant B for an indivisible personal injury resulting in $100,000 in total damages. Prior to trial, Plaintiff settled in good faith with Co-Defendant A for $30,000, releasing A from all claims. At trial against Co-Defendant B, the jury found B 100% at fault and confirmed $100,000 in damages. What amount of judgment can Plaintiff enter against B?",
        opts: [
            "$100,000, because Co-Defendant B was found fully liable by the jury and cannot benefit from third-party settlements.",
            "$70,000, because under the pro tanto settlement rule, non-settling defendants receive a dollar-for-dollar credit for settlements paid.",
            "$50,000, representing an equitable fifty percent contribution split between originally joined joint tortfeasors.",
            "$30,000, because settlements with joint tortfeasors cap the maximum enforceable liability against all remaining defendants."
        ],
        ans: 1,
        exp: "Under California and common law 'Pro Tanto' settlement credit rules (CCP § 877), a good-faith settlement with one joint tortfeasor reduces claims against remaining non-settling tortfeasors dollar-for-dollar by the settlement amount ($100,000 - $30,000 = $70,000)."
    },
    {
        id: 16,
        topic: "Strict Products Liability / Adequate Warning Defense to Inherent Risks",
        q: "Manufacturer produced industrial meat grinders. Grinder contained large rotating steel blades that were completely exposed to allow feeding cattle carcasses. Manufacturer placed prominent, vivid, durable warning labels on the hopper stating: 'DANGER: KEEP HANDS OUT OF HOPPER WHILE MOTOR IS RUNNING. SEVERE AMPUTATION RISK.' Worker ignored the warning and reached into the hopper, severing his hand. In Worker's strict products liability design defect suit:",
        opts: [
            "Worker will prevail, because warnings can never cure or substitute for a safer feasible alternative mechanical guard design.",
            "Worker will prevail under strict liability, because industrial meat grinders are classified as ultrahazardous dangerous products.",
            "Manufacturer will prevail only if Worker was in direct contractual privity with Manufacturer at the time of the injury.",
            "Manufacturer will prevail, because an adequate warning can render a product with inherent, unavoidable dangers non-defective."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Torts § 402A cmt. j, where an inherent danger cannot be designed out without destroying the product's fundamental utility, the product is not defective or unreasonably dangerous if adequate warnings and instructions are provided."
    },
    {
        id: 17,
        topic: "Battery / Implied Consent in Medical Emergencies",
        q: "Unconscious Pedestrian was rushed to Hospital emergency room following a severe car crash with internal bleeding. Immediate surgery was vital to prevent fatal hemorrhaging. Surgeon performed emergency surgery without patient consent. Pedestrian survived, but sued Surgeon for Battery because Pedestrian had not authorized surgery. Result?",
        opts: [
            "Surgeon is not liable, because consent is implied as a matter of law in life-threatening emergencies where patient cannot consent.",
            "Surgeon is liable for battery, because physical surgical contact without actual subjective consent is tortious regardless of benefit.",
            "Surgeon is liable for nominal damages only under the constitutional doctrine of bodily integrity and self-determination.",
            "Surgeon is not liable only if Hospital obtained emergency authorization from a municipal court judge prior to incision."
        ],
        ans: 0,
        exp: "Under the doctrine of Emergency Consent (implied by law), a healthcare provider is privileged to render necessary emergency medical treatment to an unconscious patient where immediate action is required to preserve life or health and there is no indication patient would object."
    },
    {
        id: 18,
        topic: "Defamation / Constitutional Public Figure All-Purpose vs. Limited-Purpose",
        q: "President of a major regional environmental organization thrust himself into the forefront of a heated public controversy regarding the construction of a proposed local dam, giving multiple televised press conferences. Local Paper published an article falsely claiming President took bribes from concrete developers. In President's defamation action, President must prove:",
        opts: [
            "Simple negligence only, because President is a private citizen who does not hold public elected political office.",
            "Common law spite and hatred by clear and convincing evidence under traditional slander per se rules.",
            "Actual malice (knowing falsity or reckless disregard), because President is a limited-purpose public figure regarding the dam issue.",
            "Special pecuniary damages, because environmental controversies are protected by absolute First Amendment immunity."
        ],
        ans: 2,
        exp: "Under Gertz v. Robert Welch, Inc., an individual who voluntarily injects themselves into the forefront of a particular public controversy to influence the outcome is a 'limited-purpose public figure' and must prove constitutional actual malice."
    },
    {
        id: 19,
        topic: "Nuisance / Balancing of the Equities for Injunctions",
        q: "Cement Factory operated in an industrial area, employing 500 local workers and producing $100 million in regional economic output. Microscopic dust vibrations from the factory created a private nuisance to Neighbor's single adjacent residential home, causing $10,000 in structural damage. Neighbor sued Cement Factory seeking a permanent injunction to immediately shut down the entire factory. The court should:",
        opts: [
            "Grant the permanent injunction automatically, because proof of an ongoing intentional private nuisance requires judicial closure.",
            "Deny the injunction and award permanent compensatory damages, balancing economic hardship against private harm (Boomer).",
            "Dismiss the entire lawsuit, because residential owners who live near industrial zones are completely barred under coming to nuisance.",
            "Grant the injunction only if Neighbor proves that Cement Factory operated with gross negligence and intentional malice."
        ],
        ans: 1,
        exp: "Under Boomer v. Atlantic Cement Co., courts balance the equities (the economic disparity between the injury to the plaintiff and the economic consequences of shutting down defendant's lawful operation), awarding permanent damages in lieu of an injunction where an injunction would cause catastrophic economic disparity."
    },
    {
        id: 20,
        topic: "Trespass to Chattels vs. Conversion Measure of Damages",
        q: "Prankster took Coworker's laptop bag without permission, carried it to another office floor for 45 minutes to play a joke, and returned it completely unharmed with all contents intact. Coworker sued Prankster for conversion and trespass to chattels. Coworker showed no physical damage, loss of use, or pecuniary harm. Result?",
        opts: [
            "Prankster is liable for conversion, because any unauthorized physical taking of chattel constitutes conversion as a matter of law.",
            "Prankster is liable for nominal damages of $1,000 under the statutory intentional property interference rules.",
            "Prankster is liable for conversion under the forced sale remedy, requiring Prankster to buy the laptop at full market value.",
            "Prankster is not liable for either tort, because Trespass to Chattels requires actual damage or dispossession, and Conversion requires substantial dominion."
        ],
        ans: 3,
        exp: "Unlike Trespass to Land, Trespass to Chattels requires actual damage (physical impairment, substantial dispossession, or bodily harm). A momentary, harmless borrowing without damage is not actionable, nor does it constitute Conversion."
    },
    {
        id: 21,
        topic: "Negligence / Landowner Open and Obvious Hazard Exception",
        q: "Customer was shopping in Hardware Store. Store employees placed an open, unshielded 4-foot display forklift blade directly across the main customer checkout aisle. Although the blade was completely open and obvious in broad daylight, Customer was distracted by overhead checkout signs and tripped over the blade. In Customer's negligence suit against Store:",
        opts: [
            "Customer can prevail, because a landowner remains liable for open and obvious dangers if the owner should anticipate invitee distraction.",
            "Store is completely immune from liability, because open and obvious physical hazards relieve landowners of all duties of care.",
            "Customer is barred from all recovery under the doctrine of primary assumption of risk in retail stores.",
            "Store is strictly liable under commercial premises safety rules for placing metal machinery inside retail buildings."
        ],
        ans: 0,
        exp: "Under Restatement (Second) of Torts § 343A, an open and obvious danger does NOT relieve the landowner of duty if the landowner should anticipate that invitees may be distracted (e.g., by store displays or signs) or will forget the danger."
    },
    {
        id: 22,
        topic: "Assault / Conditional Threats Nullifying Imminence",
        q: "Defendant confronted Plaintiff during a heated argument on a public street, raised a wooden cane in the air, and shouted: 'If the police officer wasn't standing right over there on the corner, I would knock your teeth out with this cane!' Plaintiff was frightened. Plaintiff sued Defendant for Assault. Result?",
        opts: [
            "Defendant is liable for assault, because raising a weapon in the air while shouting words of violence establishes assault.",
            "Defendant is liable for intentional infliction of emotional distress, because public verbal threats constitute outrageous conduct.",
            "Defendant is not liable for assault, because the explicit conditional words accompanied with the gesture negated immediate imminent battery.",
            "Defendant is liable for nominal damages under statutory civil harassment provisions for threatening physical violence."
        ],
        ans: 2,
        exp: "Under Tuberville v. Savage, words can negate an apparent assault where the language explicitly indicates that no immediate battery will occur (e.g., presence of police officer). Because the words negated present intent, there was no imminent apprehension."
    },
    {
        id: 23,
        topic: "Negligence / Rescuers and Abnormally Dangerous Activities",
        q: "Blasting Corp. conducted dynamiting operations in a quarry. A premature explosion caused by blasting operations trapped Worker in a ditch. Rescuer rushed into the blasting zone to pull Worker out and was injured by a falling boulder. Rescuer sued Blasting Corp. under strict liability. Blasting Corp. argued Rescuer assumed the risk by entering the blasting zone. Result?",
        opts: [
            "Blasting Corp. is not liable, because strict liability for abnormally dangerous activities extends only to adjacent landowners.",
            "Rescuer can recover under strict liability, because danger invites rescue and a rescuer does not assume the risk unless rash or reckless.",
            "Rescuer is completely barred from recovery under the doctrine of secondary implied assumption of risk.",
            "Blasting Corp. is liable only if Rescuer was an authorized employee or contracted rescue technician of the fire department."
        ],
        ans: 1,
        exp: "The 'Rescue Doctrine' applies to strict liability for abnormally dangerous activities just as it does in negligence. A rescuer attempting to save human life from a peril created by an ultrahazardous activity does not assume the risk unless their attempt was reckless or rash."
    },
    {
        id: 24,
        topic: "Defamation / Retraction Statute Compliance in California",
        q: "Daily Newspaper published a false news item stating that Politician had been arrested for tax evasion. Politician served a formal written demand for retraction on Newspaper within 20 days. Newspaper published a full, prominent, front-page correction and retraction within 3 weeks in the same news edition. In Politician's defamation action under California Civil Code § 48a, Politician:",
        opts: [
            "Can recover full general and punitive damages, because statutory retractions cannot extinguish common law liabilities.",
            "Is completely barred from all civil damages, because publishing a full front-page retraction provides an absolute defense.",
            "Can recover presumed general damages without proving out-of-pocket financial harm under the libel per se doctrine.",
            "Can recover only special (actual out-of-pocket pecuniary) damages, because a timely full retraction limits recovery to special damages."
        ],
        ans: 3,
        exp: "Under California Civil Code § 48a, if a newspaper or radio/TV broadcaster publishes a timely, full, conspicuous retraction after written demand, the plaintiff's recovery is strictly limited to SPECIAL (out-of-pocket pecuniary) damages."
    },
    {
        id: 25,
        topic: "Strict Products Liability / Bystander Recovery for Design Defect",
        q: "Automaker manufactured a sports car with an accelerator pedal that defectively stuck in the wide-open position. While Driver was operating the car, the pedal jammed, causing the car to careen uncontrollably onto a sidewalk, striking Pedestrian. Pedestrian sued Automaker under strict products liability for design defect. Automaker argued Pedestrian was a bystander who never bought or used the product. Result?",
        opts: [
            "Pedestrian can recover under strict products liability, because strict products liability protects foreseeable bystanders from defective products (Elmore).",
            "Pedestrian is restricted to a negligence cause of action, because strict products liability requires privity with the purchaser.",
            "Pedestrian cannot recover against Automaker unless Pedestrian proves that Driver was completely free from contributory fault.",
            "Pedestrian can recover only under the express warranty provisions of Article 2 of the Uniform Commercial Code."
        ],
        ans: 0,
        exp: "Under Elmore v. American Motors Corp., California established that strict products liability extends to foreseeable bystanders who are injured by defective products, as bystanders have no opportunity to inspect or choose the product."
    }
];