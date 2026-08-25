const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Transferred Intent & Defenses",
        fp: "Alan is walking down the street when Ben suddenly lunges at him with a large, deadly hunting knife. Fearing for his life, Alan pulls a lawfully concealed handgun and fires at Ben in valid self-defense. The bullet passes cleanly through Ben's shoulder, exits, and strikes Carl, an innocent bystander walking nearby. Carl dies from the wound.",
        q: "Is Alan guilty of murdering Carl?",
        opts: [
            "Yes, because the doctrine of transferred intent automatically imputes malice aforethought to the defendant whenever an innocent bystander is killed by a discharged firearm.",
            "Yes, because the privilege of self-defense is strictly limited to the original aggressor and completely evaporates the moment a third party is harmed during the altercation.",
            "No, because his justification of self-defense transfers to the unintended victim.",
            "No, because the bullet passing completely through the aggressor's body constitutes a superseding, independent intervening event that severs the chain of proximate causation."
        ],
        ans: 2,
        exp: "When a defendant is justified in using deadly force in self-defense against an attacker, that justification transfers to the unintended killing of an innocent bystander, provided the defendant did not act recklessly or negligently toward the bystander[cite: 29]."
    },
    {
        id: 2,
        topic: "Homicide / Recklessness Limitation on Self-Defense",
        fp: "Alan is walking down the street when Ben suddenly lunges at him with a large, deadly hunting knife. Fearing for his life, Alan pulls a lawfully concealed handgun and fires at Ben in valid self-defense. The bullet passes cleanly through Ben's shoulder, exits, and strikes Carl, an innocent bystander walking nearby. Carl dies from the wound.\n\nAssume instead that Alan, to defend himself from Ben's knife, closed his eyes and wildly sprayed a fully automatic submachine gun into a dense crowd of fifty people standing behind Ben.",
        q: "If Carl is killed in the crowd, what is Alan's highest criminal liability regarding Carl's death?",
        opts: [
            "First-degree murder, because discharging a fully automatic weapon into a dense crowd of innocent people establishes the specific intent required for a capital premeditated homicide conviction under modern penal codes.",
            "Murder or manslaughter, because firing blindly into a crowd is extremely reckless.",
            "No crime, because a victim of a sudden, unprovoked lethal attack retains an absolute, unqualified privilege to use any necessary means to survive against the aggressor.",
            "Voluntary manslaughter, because the sudden knife attack by the aggressor constitutes adequate legal provocation that mitigates all subsequent responsive violence to a lesser included offense."
        ],
        ans: 1,
        exp: "While the initial right of self-defense transfers to unintended victims, a defendant may still be liable for murder (depraved heart) or manslaughter if the method of self-defense creates an unreasonable, reckless risk of death to innocent bystanders (like firing an automatic weapon blindly into a crowd)[cite: 29]."
    },
    {
        id: 3,
        topic: "Crimes against Person / Transferred Justification (Battery)",
        fp: "Alan is walking down the street when Ben suddenly lunges at him with a large, deadly hunting knife. Fearing for his life, Alan pulls a lawfully concealed handgun and fires at Ben in valid self-defense. The bullet passes cleanly through Ben's shoulder, exits, and strikes Carl, an innocent bystander walking nearby. Carl dies from the wound.\n\nAssume the original scenario where Alan fires a single, careful shot at Ben in valid self-defense. The bullet misses Carl entirely, but shatters a nearby glass window. The falling shards of glass strike Carl, causing deep lacerations on his arm.",
        q: "Is Alan guilty of criminal battery against Carl?",
        opts: [
            "Yes, because the physical impact of the shattered glass fragments satisfies the offensive contact element of common law battery.",
            "Yes, because the doctrine of transferred intent strictly applies to all general intent crimes involving physical injury.",
            "No, because breaking a commercial window is classified as malicious mischief rather than a physical offense against the person.",
            "No, because his lawful justification of self-defense transfers to the accidental injury."
        ],
        ans: 3,
        exp: "Just as the doctrine of transferred intent applies to hold a defendant liable for unintended victims, the doctrine of 'transferred justification' shields a defendant from battery or homicide charges if they accidentally injure a bystander while lawfully exercising proportionate self-defense against an attacker[cite: 29]."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Property Crimes / False Pretenses",
        fp: "Diane is a talented artist who paints a remarkably accurate replica of a famous Picasso painting. She takes the painting to an Art Dealer and explicitly states, 'This is a genuine, authenticated original Picasso.' The Art Dealer, believing her, agrees to buy it for $100,000. He hands Diane a commercial cashier's check for $100,000, transferring full ownership of the funds to her.",
        q: "Regarding the sale of the painting, what property crime did Diane commit?",
        opts: [
            "False pretenses, because she intentionally misrepresented a material fact to acquire title to the funds.",
            "Larceny by trick, because the Art Dealer only intended to relinquish temporary physical custody of the commercial check pending formal third-party authentication.",
            "Embezzlement, because Diane utilized her position as a specialized artist to exercise unlawful dominion over funds previously entrusted to her professional care.",
            "Robbery, because exchanging a valueless counterfeit item for a substantial sum of money constitutes constructive physical force against the victim."
        ],
        ans: 0,
        exp: "False pretenses requires obtaining title to the property of another by an intentional false statement of past or existing fact, with intent to defraud[cite: 29]. Because the Art Dealer intended to transfer full ownership (title) of the $100,000 check to Diane based on her lie, she is guilty of false pretenses[cite: 29]."
    },
    {
        id: 5,
        topic: "Property Crimes / Forgery",
        fp: "Diane is a talented artist who paints a remarkably accurate replica of a famous Picasso painting. She takes the painting to an Art Dealer and explicitly states, 'This is a genuine, authenticated original Picasso.' The Art Dealer, believing her, agrees to buy it for $100,000. He hands Diane a commercial cashier's check for $100,000, transferring full ownership of the funds to her.\n\nAssume instead the Art Dealer wrote the check for $10,000. Diane accepts it, but later uses a specialized pen to alter the numbers and text on the check to read $100,000 before attempting to deposit it.",
        q: "Regarding the alteration of the check, is Diane guilty of forgery?",
        opts: [
            "No, because the original document was a genuine, validly issued commercial instrument signed by the authorized account holder.",
            "No, because she had not yet successfully deposited the funds into her personal bank account, rendering the offense an incomplete attempt.",
            "Yes, she materially altered a writing of legal significance with the intent to defraud.",
            "Yes, because any modification of a financial document automatically constitutes statutory embezzlement under modern banking regulations."
        ],
        ans: 2,
        exp: "Forgery is the making OR altering of a false writing with apparent legal significance, done with the specific intent to defraud[cite: 29]. Materially altering the amount on a validly signed check to steal more money perfectly satisfies the elements of forgery[cite: 29]. The crime is complete upon the alteration, regardless of whether it is cashed[cite: 29]."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Homicide / Felony Murder (Scope of Conspiracy)",
        fp: "Earl and Faye agree to rob a bank. During their planning, Earl explicitly insists, 'We will not use any weapons, and nobody gets hurt.' Faye agrees. During the robbery, a security guard attempts to tackle Faye. Panicking, Faye grabs a heavy solid brass statue from a nearby desk and bludgeons the security guard to death. Earl is waiting outside in the getaway car.",
        q: "Is Earl liable for the security guard's death under the felony murder rule?",
        opts: [
            "No, because Earl remained inside the vehicle and did not actively participate in the physical altercation inside the premises.",
            "Yes, because a lethal confrontation is a highly foreseeable consequence of committing a commercial bank robbery, regardless of their prior agreement.",
            "No, because the co-conspirators reached an explicit, binding prior agreement that strictly prohibited the use of deadly weapons during the crime.",
            "Yes, but only if the prosecution can prove that Earl personally instructed Faye to utilize the brass statue as a bludgeoning instrument."
        ],
        ans: 1,
        exp: "Under the felony murder rule, all co-felons are liable for a death caused by one of them during the commission of an inherently dangerous felony, provided the death is a foreseeable result[cite: 29]. A lethal struggle during a bank robbery is highly foreseeable, and a prior agreement not to hurt anyone does not shield a co-felon from felony murder liability[cite: 29]."
    },
    {
        id: 7,
        topic: "Parties to a Crime / Pinkerton Liability (Battery)",
        fp: "Earl and Faye agree to rob a bank. During their planning, Earl explicitly insists, 'We will not use any weapons, and nobody gets hurt.' Faye agrees. During the robbery, a security guard attempts to tackle Faye. Panicking, Faye grabs a heavy solid brass statue from a nearby desk and bludgeons the security guard to death. Earl is waiting outside in the getaway car.",
        q: "Under the Pinkerton doctrine, is Earl vicariously liable for the battery committed against the security guard?",
        opts: [
            "Yes, because a physical altercation is a natural and probable consequence of a bank robbery.",
            "No, because Earl lacked the specific intent to inflict serious bodily injury upon the guard.",
            "Yes, because all participants in any criminal misdemeanor are strictly liable for the subsequent intentional torts of their partners.",
            "No, because Earl's physical absence from the immediate vicinity of the desk completely severs his derivative accessorial liability."
        ],
        ans: 0,
        exp: "Under the Pinkerton doctrine (and the natural and probable consequences doctrine for accomplices), a conspirator/accomplice is liable for any crimes committed by a co-conspirator that are reasonably foreseeable and in furtherance of the target offense[cite: 29]. A physical battery against a resisting guard is a natural and probable consequence of a bank robbery[cite: 29]."
    },
    {
        id: 8,
        topic: "Parties to a Crime / Accomplice Liability (Mens Rea Defense)",
        fp: "Earl and Faye agree to rob a bank. During their planning, Earl explicitly insists, 'We will not use any weapons, and nobody gets hurt.' Faye agrees. During the robbery, a security guard attempts to tackle Faye. Panicking, Faye grabs a heavy solid brass statue from a nearby desk and bludgeons the security guard to death. Earl is waiting outside in the getaway car.",
        q: "If Earl argues that his strict ignorance of the brass statue shields him from liability for the guard's death, how will the court rule?",
        opts: [
            "For Earl, because accomplice liability strictly requires the defendant to possess subjective foreknowledge of the specific weapon utilized by the principal.",
            "For Earl, because the sudden use of an improvised desktop weapon constitutes an unforeseeable superseding act that breaks the chain of causation.",
            "For the prosecution, because the employment of a getaway vehicle inherently elevates the offense to an aggregated capital conspiracy.",
            "For the prosecution, because subjective ignorance of a co-conspirator's specific weapon does not defeat liability for the foreseeable consequences of an armed robbery."
        ],
        ans: 3,
        exp: "An accomplice or co-conspirator does not need to know exactly how a foreseeable crime will be committed or what specific improvised weapon will be used[cite: 29]. As long as the resulting crime (assault/homicide during a bank robbery) is a natural and probable consequence of the target offense, the accomplice is liable[cite: 29]."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Defenses / Insanity (M'Naghten)",
        fp: "Greg has severe schizophrenia and genuinely believes the government is controlled by alien lizards. An undercover officer, fully aware of Greg's severe illness, approaches Greg and convinces him that stealing a specific classified document from a federal building will finally expose the lizards to the public. Driven by his delusion, Greg breaks into the building and steals the document.",
        q: "Can Greg successfully assert an insanity defense under the M'Naghten test?",
        opts: [
            "No, because he possessed the requisite physical dexterity to successfully break into a secure federal government facility.",
            "No, because his belief regarding extraterrestrial infiltration is objectively unreasonable and factually impossible under modern scientific standards.",
            "Yes, if his severe mental disease prevented him from understanding the nature of his act or knowing that his conduct was wrong.",
            "Yes, because any diagnosis of schizophrenia automatically confers absolute transactional immunity from all felony property prosecutions."
        ],
        ans: 2,
        exp: "Under the M'Naghten test, a defendant is legally insane if a mental disease or defect causes them to either not know the nature and quality of their act, or not know that what they were doing was wrong[cite: 29]. If Greg's severe delusion made him believe he was saving the world and doing a morally right act, he satisfies this test[cite: 29]."
    },
    {
        id: 10,
        topic: "Defenses / Entrapment",
        fp: "Greg has severe schizophrenia and genuinely believes the government is controlled by alien lizards. An undercover officer, fully aware of Greg's severe illness, approaches Greg and convinces him that stealing a specific classified document from a federal building will finally expose the lizards to the public. Driven by his delusion, Greg breaks into the building and steals the document.",
        q: "Can Greg successfully claim the defense of entrapment?",
        opts: [
            "No, because entrapment is strictly unavailable to defendants who assert an insanity defense during the same judicial proceeding.",
            "Yes, because the undercover officer originated the criminal plan and induced a defendant who was not otherwise predisposed to commit the theft.",
            "No, because Greg voluntarily executed the physical actus reus of breaking into the building and seizing the classified materials.",
            "Yes, because federal officers are constitutionally prohibited from communicating with individuals suffering from documented psychological disorders."
        ],
        ans: 1,
        exp: "Entrapment is a valid defense if the criminal design originated with law enforcement, and the defendant was not predisposed to commit the specific crime prior to the government's contact[cite: 29]. Because the officer targeted Greg's illness and convinced him to commit a theft he otherwise had no inclination to commit, entrapment applies[cite: 29]."
    },
    {
        id: 11,
        topic: "Property Crimes / Burglary (Common Law Building Requirement)",
        fp: "Greg has severe schizophrenia and genuinely believes the government is controlled by alien lizards. An undercover officer, fully aware of Greg's severe illness, approaches Greg and convinces him that stealing a specific classified document from a federal building will finally expose the lizards to the public. Driven by his delusion, Greg breaks into the building and steals the document.",
        q: "If Greg is prosecuted strictly under common law rules, did he commit burglary?",
        opts: [
            "Yes, because he broke and entered a physical structure with the specific intent to commit a felony offense.",
            "Yes, because the theft of classified federal documents satisfies the threshold for aggravated statutory offenses.",
            "No, because the undercover officer's involvement provided Greg with constructive authorized permission to enter the premises.",
            "No, because common law burglary strictly requires the breaking and entering of a dwelling house, and an office building is not a dwelling."
        ],
        ans: 3,
        exp: "Common law burglary requires the breaking and entering of the DWELLING house of another in the nighttime[cite: 29]. A commercial office building or federal facility does not qualify as a dwelling house under the strict traditional common law definition[cite: 29]."
    },
    // FACT PATTERN 5 (Q12-Q13)
    {
        id: 12,
        topic: "Property Crimes / Embezzlement vs. Larceny by Trick (Bailee)",
        fp: "Hannah arrives at an expensive restaurant and approaches Ian, who is wearing a valet parking uniform. Hannah hands Ian the keys to her luxury car, expecting him to park it in the restaurant's secure lot. Ian is actually a legitimate employee of the restaurant working his scheduled valet shift. Once Hannah goes inside, Ian drives the car straight to a chop shop and sells it for parts.",
        q: "What crime did Ian commit?",
        opts: [
            "Embezzlement, because as a legitimate valet entrusted with the vehicle, he possessed lawful possession prior to his fraudulent conversion.",
            "Larceny by trick, because the owner merely intended to transfer temporary physical custody of the vehicle rather than permanent legal title.",
            "False pretenses, because he obtained full ownership of the vehicle by implicitly misrepresenting his parking intentions.",
            "Robbery, because driving a vehicle away from the owner's immediate presence constitutes constructive physical force."
        ],
        ans: 0,
        exp: "Embezzlement requires fraudulent conversion by someone already in lawful possession[cite: 29]. A bailee (like a legitimate valet entrusted with parking a car) has lawful possession of the vehicle[cite: 29]. When the bailee subsequently converts the property to their own use, the crime is embezzlement, not larceny[cite: 29]."
    },
    {
        id: 13,
        topic: "Property Crimes / Larceny by Trick (Fake Bailee)",
        fp: "Hannah arrives at an expensive restaurant and approaches Ian, who is wearing a valet parking uniform. Hannah hands Ian the keys to her luxury car, expecting him to park it in the restaurant's secure lot. Ian is actually a legitimate employee of the restaurant working his scheduled valet shift. Once Hannah goes inside, Ian drives the car straight to a chop shop and sells it for parts.\n\nAssume instead that Ian did not work for the restaurant at all. He simply bought a fake valet vest, stood outside the restaurant to deceive customers, and took Hannah's keys with the intent to steal the car.",
        q: "Under this modified scenario, what crime did Ian commit?",
        opts: [
            "False pretenses, because Hannah willingly surrendered the keys to the vehicle.",
            "Embezzlement, because he exercised unauthorized dominion over the automobile.",
            "Larceny by trick, because he acquired custody via deceit with the intent to steal.",
            "Common law burglary, because he breached the physical threshold of the vehicle's interior cabin."
        ],
        ans: 2,
        exp: "If Ian is a fake valet, he never acquires lawful possession through a legitimate bailment[cite: 29]. Instead, he uses fraud and deceit (wearing a fake uniform) to trick the owner into handing over mere custody of the vehicle, while he harbors the contemporaneous intent to steal it[cite: 29]. This is the classic definition of Larceny by Trick[cite: 29]."
    },
    // FACT PATTERN 6 (Q14-Q15)
    {
        id: 14,
        topic: "Homicide / Proximate Cause (Life Support)",
        fp: "Jack intentionally poisons Kevin's food. Kevin suffers massive organ failure but survives on life support in a hospital. After 15 months, Kevin's family consults with doctors, determines Kevin will never recover, and legally removes him from life support. Kevin dies minutes later.",
        q: "Is the removal of life support a superseding cause that relieves Jack of homicide liability?",
        opts: [
            "Yes, because the affirmative decision by the family to terminate life-sustaining treatment constitutes an independent, unforeseeable act that breaks the chain of proximate causation.",
            "No, because the lawful removal of artificial life support from a terminally injured victim is a highly foreseeable dependent event that does not sever legal causation.",
            "Yes, because the administration of lethal medical protocols completely supersedes all prior criminal culpability.",
            "No, because criminal actors are held strictly liable for any and all subsequent medical decisions made by hospital administration committees."
        ],
        ans: 1,
        exp: "In criminal law, the removal of artificial life support by a victim's family or doctors is considered a foreseeable, dependent intervening act that naturally results from the defendant inflicting the fatal injury[cite: 29]. It is not a superseding cause, and the defendant remains the proximate cause of death[cite: 29]."
    },
    {
        id: 15,
        topic: "Homicide / Year and a Day Rule",
        fp: "Jack intentionally poisons Kevin's food. Kevin suffers massive organ failure but survives on life support in a hospital. After 15 months, Kevin's family consults with doctors, determines Kevin will never recover, and legally removes him from life support. Kevin dies minutes later.",
        q: "Under strict traditional common law rules, can Jack be convicted of murder?",
        opts: [
            "No, because the death occurred more than a year and a day after the fatal injury.",
            "Yes, because he acted with express malice and premeditation.",
            "No, because poison is classified as a non-violent property offense rather than an assaultive mechanism.",
            "Yes, because the ongoing operation of the life support machine tolls the applicable statute of limitations for common law homicides."
        ],
        ans: 0,
        exp: "Under the traditional common law 'year and a day' rule, a defendant cannot be convicted of criminal homicide if the victim dies more than one year and one day after the fatal blow or act was inflicted[cite: 29]. Because Kevin died 15 months later, Jack is immune from a completed homicide charge at common law (though attempted murder still applies)[cite: 29]."
    },
    // FACT PATTERN 7 (Q16-Q18)
    {
        id: 16,
        topic: "Defenses / Necessity (Trespass)",
        fp: "A massive hurricane strikes the coast. Liam's small boat is sinking in the storm. Desperate to survive, he swims to a private enclosed dock owned by Mary. Mary is standing on the dock with a shotgun, yelling 'No trespassing!' Liam, fearing he will drown in the freezing water, climbs onto the dock anyway.",
        q: "Can Liam successfully assert the defense of necessity regarding his trespass on the dock?",
        opts: [
            "No, because necessity cannot justify the violation of posted residential boundary markers.",
            "Yes, because the doctrine of private necessity allows a person to commit a minor property trespass to save their own life from imminent natural destruction.",
            "No, because Mary explicitly denied him permission to enter the premises.",
            "Yes, because the maritime salvage code grants absolute immunity to all civilian sailors during inclement weather events."
        ],
        ans: 1,
        exp: "The defense of necessity (choice of evils) justifies committing a crime (like trespass) if the defendant reasonably believes it is necessary to avoid a greater, imminent harm (drowning in a hurricane)[cite: 29]. Private necessity allows Liam to trespass to save his life, though he remains civilly liable for any actual damage caused to the dock[cite: 29]."
    },
    {
        id: 17,
        topic: "Defenses / Defense of Property vs. Human Life",
        fp: "A massive hurricane strikes the coast. Liam's small boat is sinking in the storm. Desperate to survive, he swims to a private enclosed dock owned by Mary. Mary is standing on the dock with a shotgun, yelling 'No trespassing!' Liam, fearing he will drown in the freezing water, climbs onto the dock anyway. As Liam climbs up, Mary shoots him in the foot.",
        q: "Is Mary legally justified in using deadly force to shoot Liam?",
        opts: [
            "Yes, because Liam ignored a direct verbal command to vacate the private residential premises.",
            "Yes, under the 'castle doctrine' which permits the use of firearms to repel any and all unauthorized intruders.",
            "No, because Mary failed to attempt a safe retreat into her primary dwelling house before discharging the weapon.",
            "No, because deadly force may never be used solely to protect property against a simple trespasser."
        ],
        ans: 3,
        exp: "A property owner is privileged to use reasonable, non-deadly force to protect their property from trespass[cite: 29]. However, a property owner may NEVER use deadly force (like shooting a shotgun) solely to defend property[cite: 29]. Because Liam posed no threat of death or great bodily harm to Mary, her use of deadly force was entirely unjustified[cite: 29]."
    },
    {
        id: 18,
        topic: "Crimes against Person / False Imprisonment & Self-Defense",
        fp: "A massive hurricane strikes the coast. Liam's small boat is sinking in the storm. Desperate to survive, he swims to a private enclosed dock owned by Mary. Mary is standing on the dock with a shotgun, yelling 'No trespassing!' Liam, fearing he will drown in the freezing water, climbs onto the dock anyway. As Liam climbs up, Mary shoots him in the foot. Bleeding, Liam wrestles the shotgun away from Mary, ties her to a post, and takes shelter in her boathouse until the storm passes.",
        q: "Is Liam guilty of false imprisonment for tying Mary to the post?",
        opts: [
            "Yes, because restraining a property owner on their own land constitutes aggravated statutory kidnapping.",
            "No, because his confinement of Mary was a reasonably necessary act of self-defense to neutralize her continuous unlawful use of deadly force.",
            "Yes, because he intentionally confined her to a bounded area against her will.",
            "No, because tying a person to a stationary object during a hurricane lacks the required asportation element for violent crimes."
        ],
        ans: 1,
        exp: "False imprisonment is the unlawful confinement of a person[cite: 29]. However, Liam's confinement of Mary is legally justified by self-defense[cite: 29]. Because Mary used unlawful deadly force against him (shooting his foot to stop a trespass), Liam was privileged to use reasonable force to disarm and restrain her to prevent further lethal attacks while he survived the storm[cite: 29]."
    },
    // FACT PATTERN 8 (Q19-Q20)
    {
        id: 19,
        topic: "Inchoate Crimes / Attempt & Factual Impossibility",
        fp: "Nancy believes she is two months pregnant and wants to terminate the pregnancy, which is completely illegal in her jurisdiction. She pays Oscar $500 for pills that Oscar claims will induce a miscarriage. Nancy takes the pills secretly at home. A week later, a doctor informs Nancy that she was never actually pregnant, and the police discover the pills were merely harmless sugar pills.",
        q: "Is Nancy guilty of attempting to procure an illegal abortion?",
        opts: [
            "Yes, because she possessed the specific intent to commit the crime and took a substantial step, and factual impossibility is not a valid defense to criminal attempt.",
            "No, because it is factually impossible to terminate a pregnancy when the defendant is not actually pregnant.",
            "Yes, because purchasing unregulated pharmaceuticals constitutes a strict liability federal offense.",
            "No, because the pills were harmless sugar, preventing her actions from meeting the dangerous proximity test required for inchoate felonies."
        ],
        ans: 0,
        exp: "Attempt requires specific intent and a substantial step[cite: 29]. Factual impossibility (the fact that Nancy was not pregnant and the pills were fake) is not a defense to an attempt charge[cite: 29]. She is judged based on the facts as she believed them to be[cite: 29]. Since she believed she was pregnant and took what she thought were abortion pills, she is guilty of attempt[cite: 29]."
    },
    {
        id: 20,
        topic: "Property Crimes / False Pretenses",
        fp: "Nancy believes she is two months pregnant and wants to terminate the pregnancy, which is completely illegal in her jurisdiction. She pays Oscar $500 for pills that Oscar claims will induce a miscarriage. Nancy takes the pills secretly at home. A week later, a doctor informs Nancy that she was never actually pregnant, and the police discover the pills were merely harmless sugar pills.",
        q: "Of what crime is Oscar guilty regarding the $500?",
        opts: [
            "Robbery, because exchanging counterfeit medication for currency constitutes a constructive threat of physical force.",
            "Embezzlement, because he exercised wrongful dominion over funds entrusted to his pharmaceutical care.",
            "Larceny by trick, because Nancy merely transferred temporary physical custody of the funds to Oscar for inspection.",
            "False pretenses, because he obtained legal title to the money by intentionally misrepresenting the nature of the pills."
        ],
        ans: 3,
        exp: "Oscar intentionally lied about the nature of the pills (a false statement of fact) with the intent to defraud Nancy out of her money[cite: 29]. Because Nancy intended to purchase the pills and transfer full title to the $500 cash to Oscar, the crime is false pretenses[cite: 29]."
    },
    // FACT PATTERN 9 (Q21-Q23)
    {
        id: 21,
        topic: "Crimes against Person / Kidnapping vs. Incidental Movement",
        fp: "Paul enters a bank, pulls a gun, and demands cash from the teller, Quinn. After collecting the money, Paul grabs Quinn by the shirt collar and drags her 15 feet across the lobby and shoves her into the bank's walk-in vault. He locks the heavy vault door to ensure he can escape without her calling the police. Paul flees. Quinn is trapped in the vault for 12 hours before being rescued.",
        q: "Is Paul guilty of kidnapping Quinn?",
        opts: [
            "Yes, because any physical relocation of a victim accomplished through the threat of a deadly weapon satisfies the statutory asportation requirement.",
            "No, because kidnapping requires the victim to be transported across established municipal or state boundary lines.",
            "No, because moving a victim 15 feet to a vault within the same building is generally considered movement merely incidental to the robbery, lacking substantial independent asportation.",
            "Yes, because locking the victim inside a commercial bank vault substantially extends the overall duration of the underlying felony offense."
        ],
        ans: 2,
        exp: "Kidnapping requires unlawful confinement and 'asportation' (movement) that is substantial or increases the risk of harm independent of the underlying crime[cite: 29]. Most courts hold that dragging a teller a short distance to a vault or back room within the same building to facilitate a robbery or escape is merely incidental to the robbery and does not constitute the substantial movement required for kidnapping[cite: 29]."
    },
    {
        id: 22,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Paul enters a bank, pulls a gun, and demands cash from the teller, Quinn. After collecting the money, Paul grabs Quinn by the shirt collar and drags her 15 feet across the lobby and shoves her into the bank's walk-in vault. He locks the heavy vault door to ensure he can escape without her calling the police. Paul flees. Quinn is trapped in the vault for 12 hours before being rescued.",
        q: "By locking Quinn inside the vault, did Paul commit False Imprisonment?",
        opts: [
            "No, because the confinement merged entirely into the completed property theft.",
            "Yes, he unlawfully confined her to a bounded area against her will.",
            "No, because commercial bank vaults are expressly designed for secure habitation.",
            "Yes, but the charge is automatically elevated to extortion."
        ],
        ans: 1,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area[cite: 29]. Shoving Quinn into a vault and locking the door clearly confines her against her will, fulfilling all elements of the crime[cite: 29]."
    },
    {
        id: 23,
        topic: "Property Crimes / Armed Robbery Scope",
        fp: "Paul enters a bank, pulls a gun, and demands cash from the teller, Quinn. After collecting the money, Paul grabs Quinn by the shirt collar and drags her 15 feet across the lobby and shoves her into the bank's walk-in vault. He locks the heavy vault door to ensure he can escape without her calling the police. Paul flees. Quinn is trapped in the vault for 12 hours before being rescued.",
        q: "Does Paul's act of locking Quinn in the vault elevate the crime of robbery to armed robbery?",
        opts: [
            "No, because the robbery was already completed, and armed robbery is based on his use of a deadly weapon to accomplish the taking, not the subsequent confinement.",
            "Yes, because trapping a human being inside a secure vault constitutes the use of a deadly weapon.",
            "No, because armed robbery requires the discharge of the firearm.",
            "Yes, because the vault door operated as an instrument of continuous physical force."
        ],
        ans: 0,
        exp: "The elevation of robbery to 'armed' robbery depends entirely on the defendant's possession or use of a dangerous/deadly weapon (the gun) during the taking of the property or the immediate flight[cite: 29]. The subsequent act of locking the victim in a vault constitutes false imprisonment, but does not alter the fundamental classification of the robbery itself[cite: 29]."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "Parties to a Crime / Accomplice Liability (Specific Intent to Aid)",
        fp: "Rachel tells her friend Sam that she wants to borrow his hunting rifle to go 'hunting' in the woods. Sam knows that Rachel's hunting license was recently suspended, making it a strict liability misdemeanor for her to hunt animals. Sam loans her the rifle anyway. In reality, Rachel uses the rifle to premeditatedly murder her husband. Sam had absolutely no idea she planned to commit a homicide.",
        q: "Is Sam an accomplice to the murder of Rachel's husband?",
        opts: [
            "Yes, because providing a lethal weapon to a known criminal actor imposes strict vicarious liability for all resulting violent felonies.",
            "No, because he did not pull the trigger.",
            "Yes, under the natural and probable consequences doctrine, because homicide is a foreseeable result of hunting.",
            "No, because he lacked the specific intent to facilitate a homicide; he only intended to facilitate a hunting misdemeanor."
        ],
        ans: 3,
        exp: "Accomplice liability requires that the defendant aid or encourage the principal with the specific intent that the target crime be committed[cite: 29]. Sam intended to help Rachel commit a hunting misdemeanor[cite: 29]. Because he had no knowledge of or intent to assist a murder, he is not an accomplice to the homicide[cite: 29]."
    },
    {
        id: 25,
        topic: "Parties to a Crime / Accomplice to a Strict Liability Offense",
        fp: "Rachel tells her friend Sam that she wants to borrow his hunting rifle to go 'hunting' in the woods. Sam knows that Rachel's hunting license was recently suspended, making it a strict liability misdemeanor for her to hunt animals. Sam loans her the rifle anyway. In reality, Rachel uses the rifle to premeditatedly murder her husband. Sam had absolutely no idea she planned to commit a homicide.",
        q: "Is Sam an accomplice to Rachel's strict liability hunting misdemeanor (assuming she actually hunted)?",
        opts: [
            "No, because accomplice liability cannot attach to strict liability regulatory offenses under the common law.",
            "No, because Rachel abandoned the hunting plan and committed a homicide instead.",
            "Yes, because he provided the weapon knowing she intended to commit the strict liability offense, intending to facilitate that exact act.",
            "Yes, but his liability is capped at a minor civil infraction."
        ],
        ans: 2,
        exp: "Even for a strict liability offense, a person can be an accomplice if they intentionally aid or encourage the principal to commit the prohibited actus reus[cite: 29]. Sam knew Rachel intended to hunt without a license and deliberately provided the rifle to help her do so, making him an accomplice to the hunting misdemeanor[cite: 29]."
    }
];