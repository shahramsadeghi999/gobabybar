const examData = [
    // ==========================================
    // FACT PATTERN 1
    // ==========================================
    {
        id: 1,
        topic: "Property Crimes / Arson",
        fp: "Alice is extremely angry at her ex-boyfriend, Bob. She decides to kill him. She waits until nightfall, approaches Bob's residential house, and sets fire to the exterior siding, knowing Bob is asleep inside. The fire quickly engulfs and completely destroys the house. Bob dies of smoke inhalation.",
        q: "Is Alice guilty of common law arson?",
        opts: [
            "No, because her primary intent was to commit murder rather than cause property destruction.",
            "No, because arson requires the specific intent to defraud a commercial insurance provider.",
            "Yes, because she maliciously burned the dwelling house of another.",
            "Yes, because she utilized the fire as a deadly weapon to effectuate a homicide."
        ],
        ans: 2, // C
        exp: "At common law, arson is the malicious burning of the dwelling house of another. Malice is satisfied if the defendant intentionally or recklessly causes the burning. Alice intentionally set fire to Bob's house; her ultimate motive (murder) does not negate the elements of arson."
    },
    {
        id: 2,
        topic: "Homicide / First-Degree Murder",
        fp: "Alice is extremely angry at her ex-boyfriend, Bob. She decides to kill him. She waits until nightfall, approaches Bob's residential house, and sets fire to the exterior siding, knowing Bob is asleep inside. The fire quickly engulfs and completely destroys the house. Bob dies of smoke inhalation.",
        q: "What is the most severe homicide charge Alice faces for Bob's death?",
        opts: [
            "Involuntary manslaughter, due to her reckless use of fire near a sleeping individual.",
            "First-degree murder, because she intentionally killed him with premeditation and deliberation.",
            "Voluntary manslaughter, due to the sudden anger she experienced regarding her ex-boyfriend.",
            "Second-degree murder, because the use of fire implies a depraved heart."
        ],
        ans: 1, // B
        exp: "First-degree murder encompasses intentional killings committed with premeditation and deliberation. Alice decided in advance to kill Bob, waited until night, and set the fire to accomplish that goal, demonstrating clear premeditation and deliberation. (Felony murder based on arson would also apply, but premeditated intent makes it first-degree)."
    },
    // ==========================================
    // FACT PATTERN 2
    // ==========================================
    {
        id: 3,
        topic: "Property Crimes / Larceny (Continuing Trespass)",
        fp: "Charlie sees a bicycle resting against a park fence. He takes it without permission, intending only to borrow it for the afternoon to run errands and return it before dark. While riding it, Charlie decides he likes it so much he will keep it permanently. The owner, Dan, spots Charlie later that evening, yells 'Stop thief!', and grabs the handlebars. Charlie punches Dan, knocking him down, and rides away.",
        q: "Regarding the initial taking of the bicycle from the fence, is Charlie guilty of larceny?",
        opts: [
            "Yes, under the continuing trespass doctrine.",
            "No, because he did not intend to permanently deprive the owner at the time of the taking.",
            "Yes, because any unprivileged taking constitutes a theft.",
            "No, because bicycles are not considered personal property."
        ],
        ans: 1, // B
        exp: "Larceny requires a trespassory taking and carrying away of personal property with the specific intent to permanently deprive the owner, existing AT THE TIME of the taking. Because Charlie only intended to borrow the bike initially, he lacked the requisite mens rea for larceny at the time of the taking."
    },
    {
        id: 4,
        topic: "Crimes against Person / Battery vs. Robbery",
        fp: "Charlie sees a bicycle resting against a park fence. He takes it without permission, intending only to borrow it for the afternoon to run errands and return it before dark. While riding it, Charlie decides he likes it so much he will keep it permanently. The owner, Dan, spots Charlie later that evening, yells 'Stop thief!', and grabs the handlebars. Charlie punches Dan, knocking him down, and rides away.",
        q: "What crime does Charlie commit when he punches Dan to retain the bicycle?",
        opts: [
            "Robbery, because he used physical force against the owner's presence to accomplish the taking.",
            "Simple assault, because the initial theft had already concluded prior to the confrontation.",
            "Extortion, because he coerced the owner to relinquish possession.",
            "Battery, but not robbery, because the intent to steal did not coincide with the use of force to obtain the property initially."
        ],
        ans: 3, // D
        exp: "Robbery requires that the force or threat of force be used to obtain the property or overcome resistance to the taking. In many jurisdictions, if the property was acquired without force (or intent to steal), a later use of force to retain it or escape does not elevate the crime to robbery, though the punch itself is a battery."
    },
    // ==========================================
    // FACT PATTERN 3
    // ==========================================
    {
        id: 5,
        topic: "Inchoate Crimes / Conspiracy",
        fp: "Edgar and Fay agree to rob a convenience store. Edgar buys a gun and hands it to Fay. On the way to the store, Edgar gets scared, tells Fay 'I'm out, don't do this,' and goes home. Fay proceeds to the store, enters, points the gun at the clerk, but the clerk tackles her before she can ask for money.",
        q: "Is Edgar guilty of conspiracy to commit robbery?",
        opts: [
            "Yes, because the crime was complete upon the agreement and the overt act of buying the gun.",
            "No, because he unequivocally communicated his withdrawal to Fay before the robbery occurred.",
            "Yes, but his charge is reduced to simple solicitation.",
            "No, because the target crime of robbery ultimately failed."
        ],
        ans: 0, // A
        exp: "Conspiracy requires an agreement and an overt act in furtherance of the agreement. Once Edgar bought the gun (the overt act), the crime of conspiracy was complete. Subsequent withdrawal is not a defense to the conspiracy charge itself, though it may limit liability for future substantive crimes."
    },
    {
        id: 6,
        topic: "Parties to a Crime / Accomplice Withdrawal",
        fp: "Edgar and Fay agree to rob a convenience store. Edgar buys a gun and hands it to Fay. On the way to the store, Edgar gets scared, tells Fay 'I'm out, don't do this,' and goes home. Fay proceeds to the store, enters, points the gun at the clerk, but the clerk tackles her before she can ask for money.",
        q: "Can Edgar be convicted of Fay's attempted robbery?",
        opts: [
            "No, because attempted robbery is not a foreseeable outcome.",
            "Yes, because co-conspirators are strictly liable for all acts.",
            "No, because he effectively withdrew from the conspiracy by notifying his co-conspirator before the attempt occurred, cutting off liability for future substantive crimes.",
            "Yes, because purchasing the weapon established his status as a principal in the first degree."
        ],
        ans: 2, // C
        exp: "To withdraw effectively and avoid liability for future substantive crimes committed by co-conspirators, a defendant must communicate their withdrawal to all co-conspirators before the target crime becomes unstoppable. Edgar told Fay he was out before she reached the store, terminating his liability for her subsequent attempt."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Attempted Robbery",
        fp: "Edgar and Fay agree to rob a convenience store. Edgar buys a gun and hands it to Fay. On the way to the store, Edgar gets scared, tells Fay 'I'm out, don't do this,' and goes home. Fay proceeds to the store, enters, points the gun at the clerk, but the clerk tackles her before she can ask for money.",
        q: "What crime did Fay commit inside the store?",
        opts: [
            "Completed robbery, because she entered the premises with a weapon.",
            "Attempted robbery, because she had specific intent and took a substantial step.",
            "Assault only, because she never verbalized a demand for money.",
            "Burglary only, because she crossed the threshold."
        ],
        ans: 1, // B
        exp: "Attempt requires specific intent to commit the target crime and an overt act (substantial step) in furtherance. Entering the store and pointing a gun at the clerk is a clear substantial step strongly corroborative of her intent to rob, making her guilty of attempted robbery despite failing to get the money."
    },
    // ==========================================
    // FACT PATTERN 4
    // ==========================================
    {
        id: 8,
        topic: "Defenses / Self-Defense (Unreasonable Belief)",
        fp: "George consumes LSD voluntarily. While hallucinating, he believes his friend Harry is a giant spider attacking him. George kills Harry with a kitchen knife. George claims he acted in self-defense and was legally insane.",
        q: "Can George successfully claim self-defense?",
        opts: [
            "Yes, because he genuinely believed his life was in imminent danger.",
            "No, because his belief in the need for self-defense was objectively unreasonable.",
            "Yes, because the law permits deadly force against terrifying hallucinations.",
            "No, because he used a deadly weapon against an unarmed person."
        ],
        ans: 1, // B
        exp: "Self-defense requires that the defendant's belief in the necessity of using deadly force be both honest (subjective) and OBJECTIVELY REASONABLE. A belief based entirely on a drug-induced hallucination is not objectively reasonable, so the defense fails."
    },
    {
        id: 9,
        topic: "Defenses / Insanity & Voluntary Intoxication",
        fp: "George consumes LSD voluntarily. While hallucinating, he believes his friend Harry is a giant spider attacking him. George kills Harry with a kitchen knife. George claims he acted in self-defense and was legally insane.",
        q: "Will George succeed with an insanity defense?",
        opts: [
            "Yes, because he did not know the nature and quality of his act.",
            "Yes, under the irresistible impulse test, because he lacked volitional control.",
            "No, because he used a weapon, proving cognitive awareness.",
            "No, because temporary psychosis induced solely by voluntary intoxication is not a qualifying mental disease or defect for insanity."
        ],
        ans: 3, // D
        exp: "To qualify for the insanity defense, the defendant's incapacity must be caused by a 'mental disease or defect.' A temporary psychotic state or hallucination brought on solely by the voluntary ingestion of intoxicating substances does not legally qualify as a mental disease."
    },
    {
        id: 10,
        topic: "Defenses / Voluntary Intoxication (Specific Intent)",
        fp: "George consumes LSD voluntarily. While hallucinating, he believes his friend Harry is a giant spider attacking him. George kills Harry with a kitchen knife. George claims he acted in self-defense and was legally insane.",
        q: "Since George is charged with first-degree murder, what is the best use of his voluntary intoxication?",
        opts: [
            "To negate the specific intent (premeditation and deliberation) required for first-degree murder.",
            "To provide an absolute defense to all lesser included homicide offenses.",
            "To prove that he was acting under an involuntary physiological compulsion.",
            "To establish the adequate provocation needed for voluntary manslaughter."
        ],
        ans: 0, // A
        exp: "Voluntary intoxication is a defense to specific intent crimes if the intoxication prevented the defendant from forming the requisite intent. First-degree murder requires specific intent (premeditation and deliberation). George can use his intoxication to argue he could not premeditate, potentially reducing the charge to second-degree murder."
    },
    // ==========================================
    // FACT PATTERN 5
    // ==========================================
    {
        id: 11,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Ian grabs Jane on the sidewalk, shoves her into his van, and locks the doors so she cannot escape. He drives her three blocks to a secluded warehouse to assault her.",
        q: "What crime does Ian commit the very moment he locks Jane in the van?",
        opts: [
            "Kidnapping, because he confined her to a bounded area.",
            "Assault, because he grabbed her arm forcefully.",
            "False imprisonment, because he intentionally and unlawfully confined her against her will.",
            "Extortion, because he intended to assault her later."
        ],
        ans: 2, // C
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their consent. The moment Ian locked the doors and trapped Jane in the van against her will, he completed the crime of false imprisonment."
    },
    {
        id: 12,
        topic: "Crimes against Person / Kidnapping",
        fp: "Ian grabs Jane on the sidewalk, shoves her into his van, and locks the doors so she cannot escape. He drives her three blocks to a secluded warehouse to assault her.",
        q: "Does Ian's act of driving Jane to the warehouse constitute kidnapping?",
        opts: [
            "No, because three blocks is generally considered de minimis movement incidental to assault.",
            "Yes, because moving her three blocks to a secluded area constitutes substantial asportation that increased her risk of harm.",
            "No, because she was enclosed within a moving vehicle rather than carried on foot.",
            "Yes, because any movement automatically transforms a confinement into kidnapping."
        ],
        ans: 1, // B
        exp: "Kidnapping requires unlawful confinement plus asportation (movement) of the victim. The movement must be substantial or increase the risk of harm to the victim. Moving a victim from a public street to a secluded warehouse clearly increases the risk of harm, satisfying the asportation requirement."
    },
    // ==========================================
    // FACT PATTERN 6
    // ==========================================
    {
        id: 13,
        topic: "Property Crimes / Embezzlement",
        fp: "Kyle manages a charity fund and has signing authority over its bank account. He transfers $10,000 from the charity to his personal account to pay off gambling debts. To cover his tracks, he later sends an email to donors falsely claiming the $10,000 was spent on a new community center.",
        q: "What property crime did Kyle commit when he transferred the funds?",
        opts: [
            "Larceny by trick.",
            "Embezzlement.",
            "False pretenses.",
            "Common law robbery."
        ],
        ans: 1, // B
        exp: "Embezzlement is the fraudulent conversion of the property of another by one who is already in lawful possession of it. Because Kyle was the manager with signing authority, he had lawful possession of the charity's funds. Transferring them to pay personal debts constitutes a fraudulent conversion."
    },
    {
        id: 14,
        topic: "Property Crimes / False Pretenses Distinctions",
        fp: "Kyle manages a charity fund and has signing authority over its bank account. He transfers $10,000 from the charity to his personal account to pay off gambling debts. To cover his tracks, he later sends an email to donors falsely claiming the $10,000 was spent on a new community center.",
        q: "Why is the transfer of funds NOT false pretenses?",
        opts: [
            "Because charity funds are legally immune from false pretenses prosecutions.",
            "Because the donors retained equitable title to the funds even after the transfer occurred.",
            "Because he intended to repay the gambling debts later in the fiscal year.",
            "Because he did not make a false representation to acquire the money initially."
        ],
        ans: 3, // D
        exp: "False pretenses requires the defendant to obtain title to property BY MEANS OF an intentional false statement. Kyle already had lawful possession of the funds; he did not use a lie to get the money in the first place. His lie to the donors occurred after the crime was complete to cover it up."
    },
    // ==========================================
    // FACT PATTERN 7
    // ==========================================
    {
        id: 15,
        topic: "Parties to a Crime / Accomplice Liability",
        fp: "Liam asks Mike to help him break into a house. Liam tells Mike they are just going to steal a television. Mike agrees and picks the lock. Liam goes inside while Mike waits outside. Inside, Liam encounters the homeowner and intentionally shoots him dead. Liam comes out with the TV, and they flee.",
        q: "What is Mike's liability regarding the burglary?",
        opts: [
            "Guilty as an accomplice, because he aided and abetted the entry.",
            "Accessory before the fact only.",
            "Not guilty, because he never entered the dwelling.",
            "Principal in the first degree."
        ],
        ans: 0, // A
        exp: "An accomplice is one who aids, abets, or encourages the principal in the commission of the crime, with the intent that the crime be committed. Mike picked the lock to help Liam enter, making him fully liable for the burglary as an accomplice."
    },
    {
        id: 16,
        topic: "Homicide / Felony Murder (Co-Felon)",
        fp: "Liam asks Mike to help him break into a house. Liam tells Mike they are just going to steal a television. Mike agrees and picks the lock. Liam goes inside while Mike waits outside. Inside, Liam encounters the homeowner and intentionally shoots him dead. Liam comes out with the TV, and they flee.",
        q: "Can Mike be convicted of felony murder for the homeowner's death?",
        opts: [
            "No, because Mike was not physically present in the room where the death occurred.",
            "Yes, but only if the prosecution proves Mike supplied the firearm.",
            "No, because Liam intentionally shot the victim, making it a premeditated murder rather than felony murder.",
            "Yes, because the death occurred during the commission of an inherently dangerous felony (burglary), making all co-felons liable."
        ],
        ans: 3, // D
        exp: "Under the felony murder rule, all participants in an inherently dangerous felony (like burglary) are liable for a murder committed by a co-felon during the commission of the crime, provided the death was a foreseeable consequence. A lethal confrontation during a home burglary is generally foreseeable."
    },
    {
        id: 17,
        topic: "Accomplice Liability / Intent Limitation",
        fp: "Liam asks Mike to help him break into a house. Liam tells Mike they are just going to steal a television. Mike agrees and picks the lock. Liam goes inside while Mike waits outside. Inside, Liam encounters the homeowner and intentionally shoots him dead. Liam comes out with the TV, and they flee.",
        q: "If Mike is charged with first-degree premeditated murder, will he be convicted?",
        opts: [
            "Yes, because picking the lock constitutes premeditation.",
            "No, because he was merely an accessory after the fact.",
            "No, because he did not share Liam's specific intent to kill, which is required for a premeditated murder conviction as an accomplice.",
            "Yes, because accomplices share the exact same specific intent as the principal actor by operation of law."
        ],
        ans: 2, // C
        exp: "To be convicted of a specific intent crime as an accomplice (like first-degree premeditated murder), the accomplice must share the specific intent of the principal. Mike only intended to commit a burglary; he did not intend to kill the homeowner. Thus, he cannot be convicted of premeditated murder (though felony murder still applies)."
    },
    // ==========================================
    // FACT PATTERN 8
    // ==========================================
    {
        id: 18,
        topic: "Property Crimes / Extortion",
        fp: "Nancy threatens to burn down Oscar's restaurant next week unless Oscar gives her $5,000 immediately. Oscar is terrified of losing his business and hands her the cash.",
        q: "What crime did Nancy commit?",
        opts: [
            "Robbery, because she used intimidation to acquire the funds.",
            "Larceny by trick, because she deceived Oscar into surrendering possession.",
            "Extortion, because she obtained property by means of a threat of future harm.",
            "Embezzlement, because she exercised wrongful dominion over commercial assets."
        ],
        ans: 2, // C
        exp: "Extortion (blackmail) is obtaining property from another by means of a threat of future harm (including harm to property). Threatening to burn down a building next week clearly satisfies this definition."
    },
    {
        id: 19,
        topic: "Property Crimes / Robbery Distinctions",
        fp: "Nancy threatens to burn down Oscar's restaurant next week unless Oscar gives her $5,000 immediately. Oscar is terrified of losing his business and hands her the cash.",
        q: "Why is this NOT robbery?",
        opts: [
            "Because $5,000 does not meet the statutory grand robbery threshold.",
            "Because Oscar handed the money over voluntarily without a physical struggle.",
            "Because the threat was of future harm to property, rather than immediate physical harm to the victim's person.",
            "Because commercial businesses cannot be victims of common law robbery."
        ],
        ans: 2, // C
        exp: "Robbery requires a taking accomplished by force or the threat of IMMEDIATE physical harm to the victim (or someone in their presence). A threat to damage property in the future lacks the required immediacy and physical danger to constitute robbery."
    },
    // ==========================================
    // FACT PATTERN 9
    // ==========================================
    {
        id: 20,
        topic: "Property Crimes / Receiving Stolen Property",
        fp: "Paula buys a gold watch from a stranger in an alley for $10. The stranger says, 'This is hot, don't show it around.' Paula thinks 'hot' means it is a popular brand. She genuinely believes the watch is legitimate. Later, she discovers it is stolen, but she keeps it.",
        q: "Is Paula guilty of receiving stolen property at the time of the purchase?",
        opts: [
            "Yes, because buying a valuable item for $10 automatically imputes criminal knowledge.",
            "Yes, because she acquired possession of goods that were illegally obtained.",
            "No, because she did not actually know the property was stolen at the time she received it, negating the required mens rea.",
            "No, because the stranger did not provide a bill of sale."
        ],
        ans: 2, // C
        exp: "Receiving stolen property requires that the defendant RECEIVE possession of the property while KNOWING it to be stolen. Because Paula genuinely (even if foolishly) misunderstood the slang and believed the watch was legitimate when she bought it, she lacked the requisite mens rea at the time of receipt."
    },
    {
        id: 21,
        topic: "Property Crimes / Receiving Stolen Property (Continuing)",
        fp: "Paula buys a gold watch from a stranger in an alley for $10. The stranger says, 'This is hot, don't show it around.' Paula thinks 'hot' means it is a popular brand. She genuinely believes the watch is legitimate. Later, she discovers it is stolen, but she keeps it.",
        q: "Does Paula's later decision to keep the watch after discovering it is stolen constitute receiving stolen property?",
        opts: [
            "No, because the required knowledge that the property is stolen must exist at the exact moment the defendant receives possession of the property.",
            "Yes, under the continuing receipt doctrine which creates a new offense daily.",
            "No, because she had already acquired legal title during the alley transaction.",
            "Yes, because she formed the intent to permanently deprive at that later moment."
        ],
        ans: 0, // A
        exp: "The crime of receiving stolen property is completed at the moment the defendant takes possession. The required knowledge (that the item is stolen) must exist concurrently with the act of receiving. Later discovery of the item's stolen nature does not retroactively create liability for this specific offense."
    },
    {
        id: 22,
        topic: "Property Crimes / Larceny (Trespassory Taking)",
        fp: "Paula buys a gold watch from a stranger in an alley for $10. The stranger says, 'This is hot, don't show it around.' Paula thinks 'hot' means it is a popular brand. She genuinely believes the watch is legitimate. Later, she discovers it is stolen, but she keeps it.",
        q: "If Paula is charged with larceny for keeping the watch, what is her best defense?",
        opts: [
            "She lacked the intent to steal.",
            "Her initial acquisition of the watch was not a trespassory taking.",
            "The watch was abandoned property.",
            "She paid valid consideration for the item."
        ],
        ans: 1, // B
        exp: "Larceny requires a trespassory taking (a taking without the owner's consent). Because Paula acquired the watch through a voluntary transaction (a sale), her acquisition was not trespassory, even though the seller did not have valid title."
    },
    // ==========================================
    // FACT PATTERN 10
    // ==========================================
    {
        id: 23,
        topic: "Homicide / Causation (Superseding Cause)",
        fp: "Quinn recklessly shoots his gun in the air celebrating a holiday. The bullet strikes Ray in the shoulder. Ray is rushed to the hospital. While recovering in the ICU, the hospital catches fire due to faulty wiring, and Ray dies in the blaze. Medical experts confirm the shoulder wound was non-lethal.",
        q: "Is Quinn the proximate cause of Ray's death?",
        opts: [
            "Yes, because Ray would not have been in the hospital but for the gunshot wound.",
            "No, because the hospital fire was an unforeseeable, independent superseding cause that broke the chain of causation.",
            "Yes, because criminal actors are strictly liable for all hospital-related fatalities.",
            "No, because the shoulder wound was intentionally inflicted."
        ],
        ans: 1, // B
        exp: "Proximate cause requires that the death be a foreseeable consequence of the defendant's act. An independent, unforeseeable event (like a hospital fire caused by faulty wiring) that causes death constitutes a superseding cause, breaking the chain of proximate causation."
    },
    {
        id: 24,
        topic: "Crimes against Person / Battery",
        fp: "Quinn recklessly shoots his gun in the air celebrating a holiday. The bullet strikes Ray in the shoulder. Ray is rushed to the hospital. While recovering in the ICU, the hospital catches fire due to faulty wiring, and Ray dies in the blaze. Medical experts confirm the shoulder wound was non-lethal.",
        q: "What is Quinn's liability regarding the initial shooting?",
        opts: [
            "Attempted murder, because discharging a firearm inherently demonstrates specific intent to kill.",
            "Aggravated mayhem, because the bullet pierced the victim's skin.",
            "No crime, because he did not aim at anyone specifically.",
            "Battery, because he recklessly caused the unlawful application of force resulting in harmful physical contact."
        ],
        ans: 3, // D
        exp: "Battery is a general intent crime that can be committed through criminal recklessness. Recklessly discharging a firearm into the air in a populated area demonstrates a conscious disregard of a substantial risk, satisfying the mens rea for battery when the bullet strikes someone."
    },
    {
        id: 25,
        topic: "Homicide / Causation (Medical Negligence)",
        fp: "Quinn recklessly shoots his gun in the air celebrating a holiday. The bullet strikes Ray in the shoulder. Ray is rushed to the hospital. While recovering in the ICU, the hospital catches fire due to faulty wiring, and Ray dies in the blaze. Medical experts confirm the shoulder wound was non-lethal.\nSuppose instead the fire never happened, but Ray died from a foreseeable medical infection introduced during surgery for the gunshot wound.",
        q: "Would Quinn be liable for homicide in this alternate scenario?",
        opts: [
            "No, because the surgeon's unsterilized instruments constitute a superseding act.",
            "Yes, but only under the strict liability framework of the felony murder rule.",
            "Yes, because ordinary medical complications are foreseeable dependent intervening causes that do not break the chain of causation.",
            "No, because the infection was microscopic and therefore unforeseeable."
        ],
        ans: 2, // C
        exp: "Unlike a bizarre independent event (like a hospital fire), ordinary medical negligence or standard complications (like an infection) arising during the treatment of a wound inflicted by the defendant are highly foreseeable. They are dependent intervening causes that do NOT break the chain of proximate causation."
    }
];