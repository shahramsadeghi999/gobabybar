const examData = [
    {
        id: 1,
        topic: "Nuisance / Private Nuisance Elements",
        fp: "Dan operated a private airfield adjacent to Paul's dairy farm. Dan frequently flew low-altitude acrobatic flights over Paul's land, causing immense noise. As a direct result, Paul's cows became distressed, stopped producing milk, and several trampled Paul's fencing, escaping onto a nearby highway. One cow collided with a truck driven by Victor, injuring Victor.",
        q: "If Paul sues Dan based on private nuisance for the low-altitude stunt flights, Paul will most likely:",
        opts: [
            "Prevail, because Dan's stunt flights caused a substantial and unreasonable interference with use and enjoyment of land.",
            "Prevail, because Dan specifically intended to disrupt and destroy Paul's commercial dairy farm operation.",
            "Not prevail, because operating a private commercial aviation airfield is considered a lawful business activity.",
            "Not prevail, because private nuisance strictly requires physical boundary entry and direct physical contact."
        ],
        ans: 0,
        exp: "Private nuisance requires a substantial and unreasonable interference with the use and enjoyment of land. Low-altitude aerobatic flights creating excessive noise that disrupts agricultural operations meet this standard."
    },
    {
        id: 2,
        topic: "Negligence / Duty of Livestock Owners",
        fp: "Dan operated a private airfield adjacent to Paul's dairy farm. Dan frequently flew low-altitude acrobatic flights over Paul's land, causing immense noise. As a direct result, Paul's cows became distressed, stopped producing milk, and several trampled Paul's fencing, escaping onto a nearby highway. One cow collided with a truck driven by Victor, injuring Victor.",
        q: "If Victor asserts a claim against Paul for injuries sustained in the collision with the escaped cow, Victor will prevail if:",
        opts: [
            "Paul is held strictly liable under common law principles as the legal owner of domestic livestock.",
            "Paul failed to exercise reasonable care to maintain or repair his fences after notice of animal distress.",
            "Dan's low-altitude aerobatic stunt flights constituted an abnormally dangerous ultrahazardous activity.",
            "Victor was operating his commercial motor vehicle with reasonable prudence and ordinary care."
        ],
        ans: 1,
        exp: "At common law, domestic livestock owners are liable in negligence if they fail to exercise reasonable care in maintaining enclosures after notice that animals are agitated or likely to escape."
    },
    {
        id: 3,
        topic: "Negligence / Proximate Cause & Scope of Risk",
        fp: "Dan operated a private airfield adjacent to Paul's dairy farm. Dan frequently flew low-altitude acrobatic flights over Paul's land, causing immense noise. As a direct result, Paul's cows became distressed, stopped producing milk, and several trampled Paul's fencing, escaping onto a nearby highway. One cow collided with a truck driven by Victor, injuring Victor.",
        q: "If Victor asserts a claim against Dan based on negligence for his injuries, Dan's best defense is that:",
        opts: [
            "Victor was an unauthorized trespasser within the navigational flight path of Dan's private airfield.",
            "Paul's delayed repair of the property boundary fence was an unforeseeable superseding intervening cause.",
            "The highway collision with an escaped cow was outside the foreseeable scope of risk of stunt flights.",
            "Operating a private aviation airfield does not qualify as an abnormally dangerous ultrahazardous activity."
        ],
        ans: 2,
        exp: "Proximate cause requires that the resulting harm fall within the scope of foreseeable risks created by defendant's negligent conduct. A cow escaping and striking a motorist on a remote highway is outside the foreseeable scope of risk."
    },
    {
        id: 4,
        topic: "Battery / Transferred Intent",
        fp: "Arthur went to a local tavern owned by Tavern Co. While seated at the bar, Arthur became involved in a heated political argument with Bruno, another patron. Bruno suddenly swung a heavy wooden stool at Arthur. Arthur ducked, and the stool struck Charles, a bystander who was quietly drinking a soda nearby. Charles suffered a severe concussion.",
        q: "If Charles asserts a claim against Bruno based on battery, Charles will:",
        opts: [
            "Not prevail, because Bruno acted under the sudden provocation and emotional heat of passion.",
            "Prevail, provided Bruno possessed actual subjective knowledge that Charles stood behind Arthur.",
            "Not prevail, because Bruno intended harmful physical contact exclusively against Arthur, not Charles.",
            "Prevail, because Bruno's intent to commit a battery against Arthur transfers directly to Charles."
        ],
        ans: 3,
        exp: "Under transferred intent, an intent to commit a battery or assault against one person (Arthur) transfers to any unintended third party (Charles) who suffers the resulting harmful physical contact."
    },
    {
        id: 5,
        topic: "Negligence / Duty of Tavern Owners to Invitees",
        fp: "Arthur went to a local tavern owned by Tavern Co. While seated at the bar, Arthur became involved in a heated political argument with Bruno, another patron. Bruno suddenly swung a heavy wooden stool at Arthur. Arthur ducked, and the stool struck Charles, a bystander who was quietly drinking a soda nearby. Charles suffered a severe concussion.",
        q: "If Charles asserts a claim against Tavern Co. based on negligence for failing to protect him, Tavern Co. will be liable if:",
        opts: [
            "Tavern Co. is held strictly liable for all violent physical altercations occurring on licensed premises.",
            "Tavern Co.'s staff had reasonable notice of Bruno's aggression in time to intervene or call security.",
            "Bruno was acting as an authorized employee, agent, or security representative of Tavern Co.",
            "Charles did not actively provoke, participate in, or contribute to the verbal barroom argument."
        ],
        ans: 1,
        exp: "A commercial establishment owes business invitees a duty of reasonable care to protect them from foreseeable third-party tortious acts where staff had notice of aggressive conduct in time to intervene."
    },
    {
        id: 6,
        topic: "Strict Liability / Wild Animals (Ferae Naturae)",
        q: "Dave owned a pet python that was 10 feet long. Although non-venomous and kept in a heavy locked glass terrarium, the python managed to unlatch the terrarium and escape into the neighborhood. The python slithered into the backyard of Neighbor, who suffered severe shock upon seeing the snake and tripped over a garden hose, fracturing her wrist. Neighbor sues Dave under strict liability. Will Neighbor prevail?",
        opts: [
            "Yes, because strict liability applies to wild animals for harms resulting from dangerous propensities.",
            "Yes, but only if Neighbor demonstrates that Dave was affirmatively negligent in securing the terrarium.",
            "No, because the escaped python never bit, constricted, or made direct physical contact with Neighbor.",
            "No, because non-venomous pythons are commonly kept throughout the state as ordinary domestic pets."
        ],
        ans: 0,
        exp: "Keepers of wild animals (ferae naturae) are strictly liable for injuries resulting from normal dangerous propensities of the species, including panic/fright leading directly to physical fall injuries."
    },
    {
        id: 7,
        topic: "Negligence / Rescue Doctrine",
        q: "Pam, a pedestrian walking on a public sidewalk, noticed an infant stroller rolling uncontrolled toward a busy four-lane intersection. Pam sprinted forward and grabbed the stroller just before it rolled into oncoming traffic. In doing so, Pam stepped into a deep, unpatched pothole maintained negligently by City, twisting her ankle. Pam sues City. City defends that Pam acted recklessly. Will Pam recover?",
        opts: [
            "No, because Pam voluntarily assumed the risk of injury when she sprinted toward the roadway edge.",
            "No, because Pam was contributorily negligent in failing to observe open and obvious street potholes.",
            "Yes, because danger invites rescue, and Pam's rescue attempt was not rash or reckless under the facts.",
            "Yes, because municipalities are strictly liable for physical roadway defects within municipal limits."
        ],
        ans: 2,
        exp: "Under the rescue doctrine ('danger invites rescue'), a rescuer acting in an emergency is foreseeable and is not barred by contributory negligence or assumption of risk unless acting rashly or recklessly."
    },
    {
        id: 8,
        topic: "Strict Products Liability / Subsequent Alteration",
        fp: "Apex Tools manufactured an electric table saw. The saw featured a plastic safety blade guard that was easily detachable. Brenda purchased the saw from Retailer. Brenda's husband, Henry, removed the safety guard because it clogged with sawdust during heavy cuts. While Henry was using the modified saw, a piece of wood kicked back, causing Henry's hand to contact the exposed blade, severing two fingers.",
        q: "If Henry asserts a claim against Apex Tools based on strict products liability for design defect, Apex's strongest argument is that:",
        opts: [
            "Henry lacked enforceable privity of contract with the original tool manufacturer Apex Tools.",
            "The guard removal constituted a substantial and unforeseeable post-sale product alteration.",
            "Henry assumed the risk of injury by operating the power saw knowing the blade guard was absent.",
            "Apex Tools fully complied with all administrative government industrial safety guidelines."
        ],
        ans: 1,
        exp: "A manufacturer is relieved of strict products liability if the product undergoes a substantial, unforeseeable post-sale modification that directly causes the injury."
    },
    {
        id: 9,
        topic: "Strict Products Liability / Retailer Chain of Distribution",
        fp: "Apex Tools manufactured an electric table saw. The saw featured a plastic safety blade guard that was easily detachable. Brenda purchased the saw from Retailer. Brenda's husband, Henry, removed the safety guard because it clogged with sawdust during heavy cuts. While Henry was using the modified saw, a piece of wood kicked back, causing Henry's hand to contact the exposed blade, severing two fingers.",
        q: "If Henry asserts a strict products liability claim against Retailer, Retailer will be liable if:",
        opts: [
            "Retailer failed to conduct a reasonable physical inspection of the internal mechanics before sale.",
            "Retailer made an express commercial warranty that the power saw was completely safe for all uses.",
            "Retailer engaged in active, independent negligence in selling the power saw to consumer Brenda.",
            "The saw was defectively designed when sold, and user removal was reasonably foreseeable to seller."
        ],
        ans: 3,
        exp: "Commercial retailers in the distribution chain are strictly liable for selling a defectively designed product, provided user modifications were reasonably foreseeable to the manufacturer/seller."
    },
    {
        id: 10,
        topic: "Intentional Infliction of Emotional Distress / Elements",
        fp: "Apex Tools manufactured an electric table saw. The saw featured a plastic safety blade guard that was easily detachable. Brenda purchased the saw from Retailer. Brenda's husband, Henry, removed the safety guard because it clogged with sawdust during heavy cuts. While Henry was using the modified saw, a piece of wood kicked back, causing Henry's hand to contact the exposed blade, severing two fingers.",
        q: "If Brenda, who witnessed the accident from across the garage, sues Apex Tools for Intentional Infliction of Emotional Distress (IIED), will Brenda prevail?",
        opts: [
            "Yes, because Brenda is a close family member who witnessed the traumatic injury firsthand in person.",
            "Yes, provided Brenda experienced severe, clinically documented physical symptoms of trauma.",
            "No, because Apex did not engage in outrageous conduct directed at Brenda or intended to distress her.",
            "No, because strict products liability causes of action categorically bar recovery for emotional trauma."
        ],
        ans: 2,
        exp: "IIED requires intentional or reckless extreme and outrageous conduct directed at plaintiff. Designing a consumer power tool with a removable guard does not constitute outrageous intentional conduct."
    },
    {
        id: 11,
        topic: "Battery / Offensive Contact to Objects Attached to Person",
        q: "Customer was standing in a buffet line holding a plate of food. Manager, angry about an unpaid bill from a prior visit, approached Customer, snatched the plate directly out of Customer's hands without touching Customer's skin, and shouted that Customer was banned. Customer suffered no physical injury but was humiliated. Does Customer have a valid claim for Battery against Manager?",
        opts: [
            "Yes, because unpermitted contact with an item closely attached to a person's body constitutes battery.",
            "No, because the tort of battery strictly requires physical, flesh-to-flesh contact with the body.",
            "No, unless Customer can demonstrate actual out-of-pocket pecuniary damages or physical harm.",
            "Yes, provided Manager possessed the specific subjective intent to inflict severe physical pain."
        ],
        ans: 0,
        exp: "Under Fisher v. Carrousel Motor Hotel, battery extends to intentional offensive contact with items intimately connected with or held by the person, such as a plate, cane, or clothing, even without direct bodily contact."
    },
    {
        id: 12,
        topic: "Assault / Requirement of Overt Threatening Act",
        q: "Defendant walked up to Plaintiff in a public parking lot, placed his hand inside his jacket pocket in the distinct shape of a handgun, pointed the pocket directly at Plaintiff's chest, and snarled: 'Hand over your wallet or I'll shoot you right now.' Defendant had only an empty hand in his pocket. Plaintiff was terrified. Is Defendant liable for Assault?",
        opts: [
            "No, because Defendant lacked the actual physical present ability to fire a bullet at Plaintiff.",
            "Yes, because Defendant intentionally created a reasonable apprehension of imminent harmful contact.",
            "No, because words alone without the display of an actual visible weapon cannot constitute assault.",
            "Yes, but only under the tort of intentional infliction of emotional distress for verbal harassment."
        ],
        ans: 1,
        exp: "Assault requires an intentional act causing reasonable apprehension of imminent harmful or offensive contact. Apparent present ability (such as pointing an object concealed like a gun) is sufficient; actual ability is not required."
    },
    {
        id: 13,
        topic: "False Imprisonment / Moral Pressure vs. Physical Confinement",
        q: "Store Manager suspected Employee of stealing cash from the register. Manager called Employee into an unlocked back office and stated: 'If you leave this room before we finish the audit, you will be immediately fired.' Employee stayed in the office for three hours in tears. If Employee sues Manager for False Imprisonment, Employee will:",
        opts: [
            "Prevail, because threatening economic discharge is sufficiently coercive to overcome voluntary choice.",
            "Prevail, provided the three-hour duration exceeded a reasonable investigation timeframe under shopkeeper rules.",
            "Not prevail, because threats of future economic retaliation or job termination do not establish confinement.",
            "Not prevail, unless Manager physically blocked or locked the exit door leading out of the back office."
        ],
        ans: 2,
        exp: "False Imprisonment requires an intentional physical restraint or confinement within bounded limits without reasonable means of escape. Moral pressure or threats of future economic harm (like being fired) do not constitute actionable confinement."
    },
    {
        id: 14,
        topic: "Trespass to Land / Mistake of Boundary Lines",
        q: "Hiker honestly and reasonably believed he was walking on a public county nature trail because trail signs were vandalized and pointing the wrong way. In reality, Hiker crossed a marked surveyor line onto Rancher's private fenced acreage, trampling grass. Rancher sued Hiker for Trespass to Land. Will Rancher prevail?",
        opts: [
            "No, because Hiker made an honest, non-negligent, reasonable mistake regarding boundary markers.",
            "Yes, because the intent required for trespass is simply the intent to enter the specific parcel of land.",
            "No, unless Rancher proves substantial, permanent, and irreparable physical damage to the property.",
            "Yes, but only if Rancher personally ordered Hiker to leave and Hiker refused to depart immediately."
        ],
        ans: 1,
        exp: "Trespass to Land requires only the intent to enter the physical space. Mistake of fact or law, even if completely reasonable and in good faith, is no defense to intentional physical entry on real property."
    },
    {
        id: 15,
        topic: "Defense of Property / Mechanical Spring Guns",
        q: "Warehouse Owner suffered multiple burglaries. To protect commercial inventory, Owner installed a loaded 12-gauge shotgun trap wired to fire automatically when the warehouse door opened. Intruder picked the lock at midnight intending to steal electronics. The gun fired, shattering Intruder's leg. Intruder sued Owner for Battery. Will Intruder prevail?",
        opts: [
            "No, because a landowner has an absolute right to use deadly force against felonious nighttime burglars.",
            "Yes, because a property owner may never use deadly force or mechanical traps solely to protect property.",
            "No, because Intruder assumed the risk of physical injury by engaging in unlawful criminal burglary.",
            "Yes, provided the warehouse was located inside an industrial zoning district with no posted warnings."
        ],
        ans: 1,
        exp: "Under Katko v. Briney, deadly force or mechanical devices capable of inflicting death or serious bodily injury cannot be used solely to protect property where there is no threat to human life."
    },
    {
        id: 16,
        topic: "Privilege / Private Necessity & Compensation",
        q: "Boater was sailing on a lake when a sudden, catastrophic gale storm threatened to capsize his boat. To save his life and vessel, Boater docked and tied his boat to Dock Owner's private pier without permission. Wave impacts during the storm destroyed $10,000 worth of wooden planks on the dock. Dock Owner sued Boater for trespass and damages. Result?",
        opts: [
            "Boater is completely immune from all liability under the absolute doctrine of emergency necessity.",
            "Boater is privileged to enter, but is liable for actual compensatory damages caused to the dock.",
            "Boater is liable for intentional trespass to land, nominal damages, and punitive damages for entry.",
            "Dock Owner recovers nothing because natural storm events are an Act of God excusing all parties."
        ],
        ans: 1,
        exp: "Under Vincent v. Lake Erie Transportation Co., private necessity creates an incomplete privilege: it protects the actor from being treated as a trespasser (and prevents the owner from ejecting them), but the actor must pay for any actual damage caused."
    },
    {
        id: 17,
        topic: "Negligence / Child Standard of Care in Adult Activities",
        q: "A 14-year-old youth was operating a gas-powered personal jet ski on a crowded public lake. The youth failed to look behind him and collided with a swimmer. In evaluating whether the youth breached the duty of care, the court should apply:",
        opts: [
            "The standard of a child of like age, intelligence, and experience under identical circumstances.",
            "An objective adult standard of reasonable care because operating a motorized watercraft is an adult activity.",
            "A standard of gross negligence or willful recklessness due to youth recreational immunity statutes.",
            "Strict liability for operating a dangerous motorized instrumentality on navigable public waterways."
        ],
        ans: 1,
        exp: "While children are generally judged by a subjective standard (age, intelligence, experience), a child engaging in an inherently dangerous adult activity (such as operating a motorized vehicle, jet ski, or car) is held to the objective adult standard of reasonable care."
    },
    {
        id: 18,
        topic: "Negligence Per Se / Purpose of Statute Requirement",
        q: "A city ordinance required all property owners to clear snow and ice from municipal sidewalks within 2 hours of snowfall to facilitate pedestrian traffic. Homeowner failed to clear his sidewalk for 24 hours. A pedestrian was walking on the icy sidewalk when a drive-by robber knocked her over. If Pedestrian sues Homeowner under Negligence Per Se, the claim will:",
        opts: [
            "Succeed, because Homeowner violated a mandatory safety ordinance enacted to protect the public.",
            "Fail, because preventing physical assaults and robberies was not the risk the snow ordinance aimed to prevent.",
            "Succeed, because municipal ordinances create strict civil tort duties running to all pedestrians.",
            "Fail, because municipal sidewalk ordinances cannot be used to establish civil duties in tort cases."
        ],
        ans: 1,
        exp: "Negligence Per Se requires that the plaintiff be within the protected class and that the harm suffered be of the exact type the statute or ordinance was designed to prevent (here, slip-and-fall injuries, not criminal robberies)."
    },
    {
        id: 19,
        topic: "Causation / Alternative Liability (Summers v. Tice)",
        q: "Two hunters, Alpha and Beta, simultaneously and negligently fired their shotguns at a quail in the brush. One single shotgun pellet struck Hiker in the eye, causing blindness. It was scientifically impossible to determine which hunter fired the specific pellet. Hiker sued Alpha and Beta. What is the result?",
        opts: [
            "Hiker loses against both, because Hiker cannot satisfy the traditional 'but-for' causation burden.",
            "The burden shifts to Alpha and Beta to each prove they did not fire the shot, or face joint liability.",
            "Alpha and Beta are dismissed, but Hiker recovers full damages from the state wildlife agency.",
            "Alpha and Beta are each held liable for exactly 50% under market share apportionment theories."
        ],
        ans: 1,
        exp: "Under Summers v. Tice (Alternative Liability), where two or more defendants act negligently and it is impossible to identify which one caused the harm, the burden of proof shifts to each defendant to exonerate themselves or be held jointly and severally liable."
    },
    {
        id: 20,
        topic: "Proximate Cause / Intervening Medical Malpractice",
        q: "Driver negligently struck Pedestrian, fracturing Pedestrian's arm. At the hospital, Surgeon negligently set the bone, causing a permanent nerve injury. Pedestrian sued Driver for the initial fracture and the permanent nerve injury. Driver claims Surgeon's malpractice was a superseding cause. Driver is:",
        opts: [
            "Liable for both the initial fracture and the nerve damage caused by medical malpractice.",
            "Liable only for the initial fracture because professional medical errors cut off causal chains.",
            "Relieved of all liability under the doctrine of extraordinary intervening professional wrongdoing.",
            "Entitled to full indemnity from Surgeon for all damages sustained by Pedestrian in the collision."
        ],
        ans: 0,
        exp: "Subsequent ordinary medical malpractice is deemed foreseeable as a matter of law. The original tortfeasor whose negligence caused the initial injury remains proximately liable for all subsequent injuries flowing from ordinary medical treatment."
    },
    {
        id: 21,
        topic: "Landowner Duty / Attractive Nuisance Doctrine",
        q: "Homeowner installed an unfenced inground swimming pool in an open yard in a dense neighborhood full of toddlers. A 4-year-old child wandered onto the lot, fell into the pool, and suffered brain damage from near-drowning. In an action against Homeowner, the plaintiff's best theory is:",
        opts: [
            "Strict premises liability for maintaining an artificial body of water in an urban zoning area.",
            "The Attractive Nuisance Doctrine, because Homeowner maintained an artificial hazard dangerous to children.",
            "Res ipsa loquitur, because small children do not drown in pools absent premises owner negligence.",
            "Breach of the commercial warranty of habitability running from property owners to neighborhood residents."
        ],
        ans: 1,
        exp: "Under the Attractive Nuisance doctrine, landowners owe a duty of reasonable care to trespassing children regarding artificial conditions if: (1) owner knows or should know children are likely to trespass; (2) condition poses an unreasonable risk of death/serious harm; (3) children cannot appreciate the risk; and (4) utility/burden of eliminating danger is slight compared to risk."
    },
    {
        id: 22,
        topic: "Landowner Duty / Known Concealed Defect to Social Guest",
        q: "Host invited Friend to dinner. Host knew that a loose stair tread on the front porch was rotten and gave way when stepped on, but forgot to warn Friend. Friend stepped on the tread, fell, and broke a rib. Friend sued Host for negligence. Friend will:",
        opts: [
            "Prevail, because a landowner owes a social guest (licensee) a duty to warn of known hidden dangerous traps.",
            "Lose, because social guests enter residential premises strictly at their own risk under common law.",
            "Prevail, because residential landowners owe an absolute duty to inspect property for invited guests.",
            "Lose, unless Friend can demonstrate that Host acted with intentional malice or reckless disregard."
        ],
        ans: 0,
        exp: "A social guest is a licensee. Landowners owe licensees a duty to warn of or make safe known, hidden dangerous conditions that the licensee is unlikely to discover on their own (no duty to inspect)."
    },
    {
        id: 23,
        topic: "Negligent Infliction of Emotional Distress / Bystander Rules",
        q: "Mother and Daughter were walking down the sidewalk holding hands. A reckless driver struck Daughter, killing her instantly. Mother was physically untouched and never in physical impact, but witnessed the traumatic collision firsthand, causing severe shock and depression. Under Dillon v. Legg, Mother:",
        opts: [
            "Cannot recover, because Mother was not physically impacted by the vehicle during the collision.",
            "Can recover under bystander NIED because she was closely related, present, and contemporaneously observed the event.",
            "Cannot recover unless Mother was located directly within the physical zone of danger of impact.",
            "Can recover only if Mother establishes the driver acted with intentional extreme and outrageous conduct."
        ],
        ans: 1,
        exp: "Under California's bystander NIED rule (Dillon v. Legg / Thing v. La Chusa), a plaintiff can recover without physical impact or zone of danger if: (1) closely related to victim; (2) present at scene and contemporaneously aware of injury-producing event; and (3) suffers severe emotional distress beyond an ordinary bystander."
    },
    {
        id: 24,
        topic: "Strict Products Liability / Manufacturing Defect Elements",
        q: "Automaker manufactured 10,000 sedans. On one specific car, an assembly worker forgot to tighten the brake caliper bolts, causing total brake failure on the first drive and injuring Buyer. In Buyer's strict products liability suit, Buyer must prove:",
        opts: [
            "The brake caliper deviated from the manufacturer's intended design specifications when it left the factory.",
            "Automaker was actively negligent in screening and supervising its factory assembly line workers.",
            "The overall design of the vehicle failed the risk-utility balancing test compared to competitor cars.",
            "Buyer was in direct privity of contract with the parent manufacturing entity at time of sale."
        ],
        ans: 0,
        exp: "A manufacturing defect exists when a particular product unit departs from its intended design specifications and departs the manufacturer's custody in a defective condition, regardless of whether all possible care was exercised."
    },
    {
        id: 25,
        topic: "Defamation / Slander Per Se Categories",
        q: "Speaker falsely stated at a private corporate meeting: 'Auditor was fired from his previous accounting firm for embezzling client trust funds.' Auditor proved the statement was completely untrue, but showed no out-of-pocket pecuniary damage. Auditor sues Speaker for slander. Result?",
        opts: [
            "Auditor loses, because spoken defamation (slander) always requires proof of special pecuniary damages.",
            "Auditor wins, because falsely accusing someone of a crime of moral turpitude or business misconduct is slander per se.",
            "Auditor loses, because statements made in private business meetings are protected by absolute judicial immunity.",
            "Auditor wins, but recovery is strictly capped at nominal statutory damages absent written libel evidence."
        ],
        ans: 1,
        exp: "Slander per se allows recovery without proving special damages (pecuniary loss). Statements imputing criminal conduct of moral turpitude or conduct adversely affecting one's business, trade, or profession constitute slander per se."
    }
];