const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Inchoate Crimes / Attempt (Unconventional Methods)",
        fp: "Albert wants to kill his elderly grandfather, Ben, who has a severe clinical phobia of snakes. Albert knows this and intentionally places a live, harmless garter snake in Ben's bed, specifically hoping it will trigger a fatal heart attack. Ben sees the snake, suffers a massive heart attack, but survives in a coma. In the hospital, a disgruntled nurse, Claire, intentionally unplugs Ben's life support because she hates elderly patients. Ben dies.",
        q: "Regarding the placement of the snake in the bed, is Albert guilty of attempted murder?",
        opts: [
            "No, because a harmless garter snake is not objectively classified as a deadly weapon under state penal codes.",
            "No, because the factual impossibility of a harmless snake inflicting physical trauma completely negates the actus reus for criminal attempt.",
            "Yes, because he possessed the specific intent to kill and committed an overt act that constituted a substantial step, regardless of whether the chosen mechanism was unconventional.",
            "Yes, but only if the prosecution can demonstrate that Albert possessed specialized medical knowledge regarding cardiovascular vulnerabilities."
        ],
        ans: 2,
        exp: "Attempted murder requires the specific intent to kill and an overt act beyond mere preparation. Using a method known to be lethal to a specific victim due to their unique vulnerabilities (such as inducing a fright-based heart attack in someone with a severe phobia) satisfies the substantial step requirement, making it attempted murder."
    },
    {
        id: 2,
        topic: "Homicide / Proximate Cause (Superseding Intervening Act)",
        fp: "Albert wants to kill his elderly grandfather, Ben, who has a severe clinical phobia of snakes. Albert knows this and intentionally places a live, harmless garter snake in Ben's bed, specifically hoping it will trigger a fatal heart attack. Ben sees the snake, suffers a massive heart attack, but survives in a coma. In the hospital, a disgruntled nurse, Claire, intentionally unplugs Ben's life support because she hates elderly patients. Ben dies.",
        q: "Is Albert the proximate cause of Ben's death?",
        opts: [
            "No, because the nurse's intentional and malicious act constitutes an unforeseeable superseding intervening event.",
            "Yes, because under the eggshell skull rule, criminal defendants are strictly liable for all medical complications resulting from their initial assault.",
            "No, because a heart attack triggered by psychological fright cannot satisfy the rigid common law requirement of physical force.",
            "Yes, because the victim would not have been present in the hospital bed but for Albert's initial criminal conduct."
        ],
        ans: 0,
        exp: "While ordinary medical negligence is a foreseeable dependent cause that does not break the chain of legal causation, a third party's independent, intentional, and malicious act (a nurse unplugging life support out of hatred) is highly unforeseeable. This acts as a superseding intervening cause, severing Albert's liability for the completed homicide."
    },
    {
        id: 3,
        topic: "Homicide / First-Degree Murder (Hastening Death)",
        fp: "Albert wants to kill his elderly grandfather, Ben, who has a severe clinical phobia of snakes. Albert knows this and intentionally places a live, harmless garter snake in Ben's bed, specifically hoping it will trigger a fatal heart attack. Ben sees the snake, suffers a massive heart attack, but survives in a coma. In the hospital, a disgruntled nurse, Claire, intentionally unplugs Ben's life support because she hates elderly patients. Ben dies.",
        q: "What is Nurse Claire's highest criminal liability regarding Ben's death?",
        opts: [
            "Involuntary manslaughter, because medical personnel are insulated from murder charges when terminating life support.",
            "Second-degree murder, because her actions demonstrated a generalized depraved heart rather than direct malice.",
            "Voluntary manslaughter, due to the sudden emotional disturbance triggered by her general hatred of elderly patients.",
            "First-degree murder, because she intentionally hastened the death of a dying person with premeditation and deliberation."
        ],
        ans: 3,
        exp: "A person who intentionally accelerates or hastens the death of someone who is already dying is fully liable for homicide. Because Claire acted with specific intent, premeditation, and deliberation motivated by personal hatred rather than lawful medical protocol, she committed first-degree murder."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Involuntary Intoxication (Mistake of Fact)",
        fp: "David is involuntarily drugged with a powerful hallucinogen at a party. While driving home (which he believes he is sober enough to do), he begins hallucinating vividly. He hallucinates that a pedestrian crossing the street is a heavily armed assassin firing an assault rifle at his car. Panicking, David accelerates and intentionally runs over the pedestrian, killing him, genuinely believing he is acting in self-defense against a lethal threat.",
        q: "Can David successfully claim self-defense against a homicide charge?",
        opts: [
            "No, because driving a motor vehicle inherently triggers strict liability for all resulting pedestrian fatalities regardless of the driver's subjective mental state.",
            "Yes, because his involuntary intoxication produced a mistake of fact that excuses his conduct, even if the belief was objectively unreasonable to a sober person.",
            "No, because the belief must be objectively reasonable to an ordinary sober person under the strict parameters of the common law.",
            "Yes, but only to mitigate the charge to voluntary manslaughter under the doctrine of imperfect self-defense."
        ],
        ans: 1,
        exp: "Involuntary intoxication is treated equivalently to insanity. If it causes a severe hallucination or mistake of fact that prevents the defendant from understanding the wrongfulness of their act (or makes them believe they are in imminent deadly peril), it serves as a complete defense, overriding the usual requirement that a mistake be objectively reasonable."
    },
    {
        id: 5,
        topic: "Defenses / Voluntary Intoxication (Imperfect Self-Defense)",
        fp: "David is involuntarily drugged with a powerful hallucinogen at a party. While driving home (which he believes he is sober enough to do), he begins hallucinating vividly. He hallucinates that a pedestrian crossing the street is a heavily armed assassin firing an assault rifle at his car. Panicking, David accelerates and intentionally runs over the pedestrian, killing him, genuinely believing he is acting in self-defense against a lethal threat.\n\nAssume instead David's intoxication was completely voluntary. He drank a bottle of whiskey, hallucinated the assassin, and ran the pedestrian over.",
        q: "How does his voluntary intoxication affect his liability for the intentional homicide?",
        opts: [
            "It provides a complete and absolute defense because he lacked the physical volition to control his motor vehicle.",
            "It has absolutely no legal effect, leaving him fully liable for first-degree premeditated murder.",
            "It mitigates the homicide to voluntary manslaughter, because his honestly held but unreasonable belief in the need for self-defense negates malice aforethought.",
            "It reduces the offense exclusively to involuntary manslaughter because voluntary intoxication automatically negates all specific intent."
        ],
        ans: 2,
        exp: "Voluntary intoxication is not a complete defense. However, if the intoxication causes the defendant to hold an honest but objectively unreasonable belief that deadly force is necessary (an insane delusion of attack), it can establish 'imperfect self-defense.' This doctrine negates malice aforethought, mitigating what would be murder down to voluntary manslaughter."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Inchoate Crimes / Conspiracy & Wharton's Rule",
        fp: "Edgar, a sitting judge, and Fiona, a defense attorney, agree that Fiona will pay Edgar $50,000 to rule in her client's favor. The statutory definition of bribery strictly requires exactly two individuals: one to offer the bribe and one to receive it. Before any money actually changes hands, Edgar changes his mind, calls Fiona, and states 'The deal is completely off.'",
        q: "Are Edgar and Fiona guilty of conspiracy to commit bribery?",
        opts: [
            "No, because Wharton's rule bars a conspiracy charge when the crime by definition requires exactly two people and only those two are involved.",
            "Yes, because their mutual verbal agreement established the requisite bilateral meeting of the minds necessary for a common law conspiracy.",
            "No, because the physical transfer of currency was never completed.",
            "Yes, because bribery is an offense against public justice that statutorily bypasses traditional inchoate merger doctrines."
        ],
        ans: 0,
        exp: "Wharton's Rule provides that if a crime by definition requires the participation of exactly two people (such as bribery, adultery, or dueling), there can be no separate conviction for conspiracy to commit that crime if only the two essential parties are involved in the agreement."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Wharton's Rule (Third-Party Exception)",
        fp: "Edgar, a sitting judge, and Fiona, a defense attorney, agree that Fiona will pay Edgar $50,000 to rule in her client's favor. The statutory definition of bribery strictly requires exactly two individuals: one to offer the bribe and one to receive it. Before any money actually changes hands, Edgar changes his mind, calls Fiona, and states 'The deal is completely off.'\n\nSuppose George, Fiona's paralegal, helped plan the bribe, organized the meeting, and agreed to deliver the cash on Fiona's behalf.",
        q: "Does Wharton's Rule bar a conspiracy charge in this modified scenario?",
        opts: [
            "Yes, because George is merely a subordinate employee acting under Fiona's direct professional authority.",
            "Yes, because the core transactional elements of bribery still only strictly require a single payer and a single receiver.",
            "No, because bribery cases are exclusively prosecuted under federal racketeering statutes.",
            "No, because the third-party exception applies when the number of conspirators exceeds the number required to commit the underlying offense."
        ],
        ans: 3,
        exp: "The primary exception to Wharton's Rule is the 'third-party exception.' If more people participate in the conspiracy than are logically necessary to commit the target substantive offense (three people conspiring to commit a two-person crime), the rule does not apply, and all participants can be charged with conspiracy."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Defense of Abandonment (MPC)",
        fp: "Edgar, a sitting judge, and Fiona, a defense attorney, agree that Fiona will pay Edgar $50,000 to rule in her client's favor. The statutory definition of bribery strictly requires exactly two individuals: one to offer the bribe and one to receive it. Before any money actually changes hands, Edgar changes his mind, calls Fiona, and states 'The deal is completely off.'",
        q: "Assuming George was involved and a valid conspiracy existed, did Edgar effectively establish the affirmative defense of abandonment under the Model Penal Code (MPC)?",
        opts: [
            "No, because judicial officers are legally barred from asserting equitable defenses in corruption proceedings.",
            "Yes, because under the MPC, a voluntary and complete renunciation that thwarts the success of the conspiracy is a valid affirmative defense.",
            "No, because abandonment requires a formal, documented confession submitted directly to state law enforcement authorities.",
            "Yes, because mere verbal communication instantly dissolves all prior accessorial liability under common law standards."
        ],
        ans: 1,
        exp: "Unlike traditional common law (where withdrawal only shields against future substantive crimes), the Model Penal Code recognizes 'renunciation' or 'abandonment' as an affirmative defense to the conspiracy charge itself, provided the defendant completely and voluntarily renounces the criminal purpose and thwarts the success of the conspiracy."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Property Crimes / Larceny by Bailee (Breaking Bulk)",
        fp: "Hector owns a commercial delivery company. He assigns his employee, Ian, to transport a locked, sealed crate of electronics to a regional warehouse. Along the way, Ian decides to steal from the crate. He breaks the commercial seal, pries open the crate, removes two laptops, and sells them to a fence.",
        q: "What property crime did Ian commit regarding the laptops?",
        opts: [
            "Embezzlement, because he maintained continuous lawful possession of the cargo throughout the entire transit route.",
            "False pretenses, because he utilized his status as a delivery driver to fraudulently deceive the original owner.",
            "Larceny, because breaking bulk terminates his lawful possession as a bailee, converting his actions into a trespassory taking.",
            "Robbery, because the destruction of the commercial seal constitutes the constructive application of physical force."
        ],
        ans: 2,
        exp: "Under the common law 'breaking bulk' doctrine, a commercial carrier or bailee has lawful possession of a sealed container as a whole. However, if they break open the sealed container to remove individual contents, their lawful possession immediately terminates. The taking of the contents becomes a trespassory taking, constituting larceny rather than embezzlement."
    },
    {
        id: 10,
        topic: "Property Crimes / Embezzlement (Corporate Discretion)",
        fp: "Hector owns a commercial delivery company. He assigns his employee, Ian, to transport a locked, sealed crate of electronics to a regional warehouse. Along the way, Ian decides to steal from the crate. He breaks the commercial seal, pries open the crate, removes two laptops, and sells them to a fence.\n\nLater that day, Ian uses the company fuel card—which Hector authorized him to use exclusively for purchasing gas—to buy $500 in lottery tickets for himself.",
        q: "What crime did Ian commit regarding the company fuel card funds?",
        opts: [
            "Embezzlement, because he used property over which he had lawful discretionary authority for an unauthorized, fraudulent purpose.",
            "Larceny by trick, because he deceived the gas station attendant into processing the commercial transaction.",
            "False pretenses, because he acquired absolute legal title to the lottery tickets.",
            "Common law forgery, because he presented a commercial instrument under false pretenses."
        ],
        ans: 0,
        exp: "Embezzlement is the fraudulent conversion of the property of another by one who is already in lawful possession. By being entrusted with a company fuel card with the authority to make purchases, Ian had lawful, discretionary control over those funds. Using them for personal lottery tickets constitutes a fraudulent conversion, making it embezzlement."
    },
    {
        id: 11,
        topic: "Property Crimes / Embezzlement (Bailee Exception)",
        fp: "Hector owns a commercial delivery company. He assigns his employee, Ian, to transport a locked, sealed crate of electronics to a regional warehouse. Along the way, Ian decides to steal from the crate. He breaks the commercial seal, pries open the crate, removes two laptops, and sells them to a fence.\n\nAssume Ian didn't break the crate's seal at all. Instead, he simply drove the entire truck to a fence and sold the unbroken, sealed crate of electronics in its entirety.",
        q: "What crime did Ian commit in this alternate scenario?",
        opts: [
            "Larceny, because his deviation from the assigned transit route created a continuous trespass.",
            "False pretenses, because the fence acquired full ownership of the materials.",
            "Robbery, because the theft involved commercial assets exceeding statutory thresholds.",
            "Embezzlement, because he converted bailed property while still in lawful possession of the whole unit."
        ],
        ans: 3,
        exp: "If a bailee fraudulently converts the entire bailed property (the entire unbroken, sealed crate) without 'breaking bulk', they are converting property over which they already have valid lawful possession. This constitutes embezzlement, not larceny."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Parties to a Crime / Innocent Agent Doctrine",
        fp: "Karen wants to steal her neighbor's expensive riding lawnmower. She tells her 8-year-old son, Leo, 'Go take Mr. Smith's lawnmower, he said we could borrow it.' Leo, believing his mother, drags the mower to their yard. Karen's friend, Mike, knows the truth and stands lookout, but gets bored and walks away 10 minutes before Leo grabs the mower, saying nothing to Karen.",
        q: "What is Karen's criminal liability for the theft of the lawnmower?",
        opts: [
            "Accessory before the fact, because she was not physically present at the neighbor's property when the asportation occurred.",
            "Principal in the first degree, under the innocent agent doctrine.",
            "Solicitation only, because commanding a minor strictly limits liability to inchoate offenses.",
            "She bears no liability, because the physical actus reus was completed entirely by an individual lacking criminal capacity."
        ],
        ans: 1,
        exp: "Under criminal agency principles, a person who causes a crime to be committed through an innocent agent (such as a child lacking criminal capacity or someone operating under a mistake of fact) is treated as the principal in the first degree, just as if they had performed the physical actus reus themselves."
    },
    {
        id: 13,
        topic: "Parties to a Crime / Accomplice Withdrawal (Ineffective)",
        fp: "Karen wants to steal her neighbor's expensive riding lawnmower. She tells her 8-year-old son, Leo, 'Go take Mr. Smith's lawnmower, he said we could borrow it.' Leo, believing his mother, drags the mower to their yard. Karen's friend, Mike, knows the truth and stands lookout, but gets bored and walks away 10 minutes before Leo grabs the mower, saying nothing to Karen.",
        q: "Is Mike liable as an accomplice to the theft?",
        opts: [
            "No, because he physically departed the scene before the actual asportation of the property took place.",
            "No, because a lookout must actively warn the principal of impending danger to qualify as a participant.",
            "Yes, because his silent departure did not communicate withdrawal to the principal or neutralize his prior aid.",
            "Yes, because all bystanders who fail to report a felony are statutorily liable as accomplices."
        ],
        ans: 2,
        exp: "To successfully withdraw as an accomplice, a person must repudiate their prior aid, communicate their withdrawal to the principal actor, and neutralize any material assistance provided. Mike's silent departure failed to notify Karen that she no longer had a lookout, rendering his attempted withdrawal legally ineffective."
    },
    {
        id: 14,
        topic: "Parties to a Crime / Common Law Accessory Before the Fact",
        fp: "Karen wants to steal her neighbor's expensive riding lawnmower. She tells her 8-year-old son, Leo, 'Go take Mr. Smith's lawnmower, he said we could borrow it.' Leo, believing his mother, drags the mower to their yard. Karen's friend, Mike, knows the truth and stands lookout, but gets bored and walks away 10 minutes before Leo grabs the mower, saying nothing to Karen.\n\nAssume for this question that Leo was 19 years old, fully knew he was stealing the mower, and Karen stayed inside her own house the entire time.",
        q: "At traditional common law, what would Karen's status be?",
        opts: [
            "Accessory before the fact.",
            "Principal in the first degree, because she originated the criminal scheme.",
            "Principal in the second degree, because she was constructively present.",
            "Accessory after the fact, because she ultimately received the stolen property."
        ],
        ans: 0,
        exp: "At traditional common law, a principal in the first degree physically commits the act. A principal in the second degree is present at the scene aiding and abetting. An accessory before the fact aids, counsels, or encourages the crime but is NOT present at the scene. Because Karen stayed inside her house while Leo (a fully culpable actor) stole the mower, she is an accessory before the fact."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Homicide / Felony Murder (Eggshell Skull Rule)",
        fp: "Nancy breaks into a house at night to commit a burglary. She is completely unarmed. The homeowner, Oscar, wakes up, sees her, and suffers a fatal heart attack out of sheer terror. Nancy's getaway driver, Patty, is waiting down the street. When Patty sees police arriving, she panics and speeds off, running over and killing a pedestrian.",
        q: "Is Nancy liable for Oscar's death under the felony murder rule?",
        opts: [
            "No, because the heart attack was an independent, unforeseeable medical event that breaks causation.",
            "No, because she was completely unarmed, stripping the burglary of its inherently dangerous classification.",
            "Yes, because burglary is an inherently dangerous felony, and she takes her victim as she finds them under the eggshell skull rule.",
            "Yes, but only if the prosecution can prove she possessed advanced knowledge of Oscar's cardiovascular condition prior to the break-in."
        ],
        ans: 2,
        exp: "Under the felony murder rule, a defendant is liable for any death proximately caused during the commission of an inherently dangerous felony (burglary). The 'eggshell skull' rule applies: a defendant takes their victim as they find them. Causing a fatal heart attack through the sheer terror of a nighttime home invasion satisfies the causation requirement."
    },
    {
        id: 16,
        topic: "Homicide / Felony Murder (Res Gestae & Co-Felons)",
        fp: "Nancy breaks into a house at night to commit a burglary. She is completely unarmed. The homeowner, Oscar, wakes up, sees her, and suffers a fatal heart attack out of sheer terror. Nancy's getaway driver, Patty, is waiting down the street. When Patty sees police arriving, she panics and speeds off, running over and killing a pedestrian.",
        q: "Is Nancy liable for the pedestrian's death caused by Patty's reckless driving?",
        opts: [
            "No, because Nancy was not inside the vehicle when the fatal collision occurred.",
            "Yes, because the death occurred during the immediate flight (res gestae) of the felony, making co-felons vicariously liable.",
            "No, because traffic fatalities are exclusively governed by vehicular manslaughter statutes rather than the felony murder rule.",
            "Yes, but her liability is strictly capped at involuntary manslaughter."
        ],
        ans: 1,
        exp: "The 'res gestae' of a felony includes the immediate flight from the scene. If a death occurs during the escape, before the felons have reached a place of temporary safety, the felony murder rule applies. Under co-felon liability principles, Nancy is fully liable for the foreseeable lethal actions of her getaway driver during the escape."
    },
    {
        id: 17,
        topic: "Homicide / Non-Slayer Defense to Felony Murder",
        fp: "Nancy breaks into a house at night to commit a burglary. She is completely unarmed. The homeowner, Oscar, wakes up, sees her, and suffers a fatal heart attack out of sheer terror. Nancy's getaway driver, Patty, is waiting down the street. When Patty sees police arriving, she panics and speeds off, running over and killing a pedestrian.",
        q: "If Patty is charged with felony murder for the pedestrian's death, can she assert a 'non-slayer' defense by arguing that Nancy was unarmed inside the house?",
        opts: [
            "Yes, because the absence of a deadly weapon inside the structure legally terminates the inherently dangerous classification of the underlying burglary.",
            "Yes, because getaway drivers are granted qualified immunity from physical harms inflicted by primary actors.",
            "No, because the non-slayer defense typically requires the co-felon to be unaware of any deadly weapons AND that the felony wasn't inherently dangerous in a way that risks life; high-speed vehicular flight satisfies the requisite danger.",
            "No, because the non-slayer defense is entirely unrecognized in American jurisprudence."
        ],
        ans: 2,
        exp: "The statutory 'non-slayer' affirmative defense to felony murder requires a co-felon to prove they did not commit the homicidal act, were unarmed, had no reason to believe any co-felon was armed, AND had no reason to believe the crime would be committed in a way likely to result in death. Engaging in a high-speed, reckless vehicular escape in a populated area involves a foreseeable risk to life, defeating the defense."
    },
    // FACT PATTERN 7 (Q18-Q19)
    {
        id: 18,
        topic: "Defenses / Entrapment (Subjective Test)",
        fp: "Quinn, a recovering addict with no intent or desire to buy drugs, is approached by a relentless undercover officer. The officer harasses Quinn daily for 6 months, threatens to have Quinn evicted, and emotionally manipulates him. Finally breaking down, Quinn buys drugs from the officer. The officer then arrests him.",
        q: "Under the subjective test for entrapment, what is the likely result of Quinn's prosecution?",
        opts: [
            "Quinn is acquitted, because the government induced the crime and he lacked prior predisposition.",
            "Quinn is convicted, because he voluntarily completed the physical actus reus of the narcotics transaction.",
            "Quinn is convicted, because the subjective test relies entirely on the objective reasonableness of the officer's conduct.",
            "Quinn is acquitted, but only because the transaction involved a controlled substance rather than a violent felony."
        ],
        ans: 0,
        exp: "The subjective test for entrapment requires the defendant to prove: (1) the criminal design originated with law enforcement (inducement), and (2) the defendant was not predisposed to commit the crime prior to the government contact. Quinn's lack of desire and the extreme 6-month harassment clearly satisfy these elements, resulting in acquittal."
    },
    {
        id: 19,
        topic: "Defenses / Outrageous Government Conduct (Due Process)",
        fp: "Quinn, a recovering addict with no intent or desire to buy drugs, is approached by a relentless undercover officer. The officer harasses Quinn daily for 6 months, threatens to have Quinn evicted, and emotionally manipulates him. Finally breaking down, Quinn buys drugs from the officer. The officer then arrests him.",
        q: "Aside from traditional entrapment, could Quinn assert a constitutional defense to have the charges dismissed?",
        opts: [
            "No, because the exclusionary rule only applies to Fourth Amendment search and seizure violations.",
            "Yes, under the Eighth Amendment's prohibition against cruel and unusual punishment.",
            "No, because undercover sting operations are universally granted absolute constitutional immunity.",
            "Yes, Outrageous Government Conduct (a due process violation), due to the extreme and coercive nature of the police tactics."
        ],
        ans: 3,
        exp: "When law enforcement tactics are so extreme, coercive, and fundamentally unfair that they shock the conscience (e.g., 6 months of daily harassment and threats of eviction to force a recovering addict to buy drugs), a defendant can invoke the 'Outrageous Government Conduct' defense. This is a violation of the Due Process Clause of the Fifth/Fourteenth Amendments, resulting in dismissal."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Crimes against Person / Kidnapping (Incidental Asportation)",
        fp: "A masked Robber holds up a bank. He orders the teller, Sarah, at gunpoint to walk 5 feet from the counter to the cash drawer, and then another 5 feet to the main safe. He then decides to take Sarah with him as a hostage. He forces her into his car, drives across state lines, and holds her for a $100,000 ransom.",
        q: "Does forcing Sarah to walk 5 feet to the safe constitute kidnapping?",
        opts: [
            "Yes, because the presence of a loaded firearm automatically satisfies the element of substantial asportation.",
            "No, it is merely incidental to the robbery and does not substantially increase the risk of harm.",
            "Yes, because any movement of an individual against their will meets the statutory definition.",
            "No, because she was not physically injured during the brief transit across the room."
        ],
        ans: 1,
        exp: "Kidnapping requires unlawful confinement plus asportation (movement) of the victim. The movement must be substantial or increase the risk of harm to the victim independent of the underlying crime. Moving a teller 5 feet to a safe to facilitate a robbery is strictly incidental to the robbery itself and does not constitute kidnapping."
    },
    {
        id: 21,
        topic: "Crimes against Person / Kidnapping (Substantial Asportation)",
        fp: "A masked Robber holds up a bank. He orders the teller, Sarah, at gunpoint to walk 5 feet from the counter to the cash drawer, and then another 5 feet to the main safe. He then decides to take Sarah with him as a hostage. He forces her into his car, drives across state lines, and holds her for a $100,000 ransom.",
        q: "Does the subsequent drive across state lines constitute kidnapping?",
        opts: [
            "No, because the original criminal intent was strictly limited to a property offense.",
            "Yes, it involves substantial asportation and confinement.",
            "No, because crossing state lines invokes federal jurisdiction, preempting state kidnapping charges.",
            "Yes, but only because a ransom was explicitly demanded from the victim's family."
        ],
        ans: 1,
        exp: "Forcing a victim into a vehicle and driving them to a secondary location (especially across state lines) unequivocally constitutes substantial movement that drastically increases the risk of harm. This satisfies the asportation requirement for kidnapping."
    },
    {
        id: 22,
        topic: "Crimes against Person / False Imprisonment",
        fp: "A masked Robber holds up a bank. He orders the teller, Sarah, at gunpoint to walk 5 feet from the counter to the cash drawer, and then another 5 feet to the main safe. He then decides to take Sarah with him as a hostage. He forces her into his car, drives across state lines, and holds her for a $100,000 ransom.\n\nAssume instead that Robber simply locked Sarah inside the bank vault and fled alone.",
        q: "What crime would Robber have committed regarding Sarah in this alternate scenario?",
        opts: [
            "False imprisonment.",
            "Aggravated battery, because restricting oxygen access inherently implies physical injury.",
            "Kidnapping, because the vault door acts as a permanent restraint on liberty.",
            "Extortion, because he utilized coercive threats to ensure her compliance."
        ],
        ans: 0,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their valid consent. Locking someone in a bank vault completely restricts their freedom of movement, fulfilling all elements of false imprisonment (but lacking the asportation required for kidnapping)."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Property Crimes / Robbery vs. Extortion (Imminence)",
        fp: "Tom approaches Victor, a prominent politician, on the street. Tom says, 'Hand over your Rolex right now, or I will release the photos of your affair to the press tomorrow.' Victor hands over the watch. Next day, Tom demands $10,000 to keep quiet. Victor pays the $10,000.",
        q: "Is the taking of the Rolex classified as common law robbery?",
        opts: [
            "Yes, because the demand for the property was executed in a public forum.",
            "Yes, because Victor surrendered the item under severe psychological duress.",
            "No, because the value of the watch did not exceed the requisite felony threshold for a robbery charge.",
            "No, because the threat was of future reputational harm, not immediate physical violence."
        ],
        ans: 3,
        exp: "Robbery is the taking of personal property from the person or presence of another by force or the threat of IMMEDIATE physical harm. A threat to release photos 'tomorrow' involves no immediate physical danger, differentiating it entirely from robbery."
    },
    {
        id: 24,
        topic: "Property Crimes / Extortion",
        fp: "Tom approaches Victor, a prominent politician, on the street. Tom says, 'Hand over your Rolex right now, or I will release the photos of your affair to the press tomorrow.' Victor hands over the watch. Next day, Tom demands $10,000 to keep quiet. Victor pays the $10,000.",
        q: "What crime did Tom actually commit by taking the Rolex?",
        opts: [
            "Larceny by trick, because he used deceptive language.",
            "Extortion, because he obtained property through a threat of future exposure.",
            "Embezzlement, because Victor voluntarily transferred possession.",
            "False pretenses, because Victor surrendered title."
        ],
        ans: 1,
        exp: "Extortion (blackmail) is obtaining property from another by means of threats of future harm. Threats to expose a secret, damage a reputation, or cause economic/political ruin perfectly satisfy the elements of extortion."
    },
    {
        id: 25,
        topic: "Inchoate Crimes / Attempted Extortion (Causation Broken)",
        fp: "Tom approaches Victor, a prominent politician, on the street. Tom says, 'Hand over your Rolex right now, or I will release the photos of your affair to the press tomorrow.' Victor hands over the watch. Next day, Tom demands $10,000 to keep quiet. Victor pays the $10,000.\n\nAssume regarding the $10,000 payment: Victor was actually furious, called the police, set up a sting operation, and handed Tom the $10,000 marked bills while completely unafraid. Tom was immediately arrested.",
        q: "What is Tom's liability regarding the $10,000 transaction?",
        opts: [
            "Completed extortion, because he physically accepted the currency.",
            "Robbery, because the presence of law enforcement escalated the danger.",
            "Attempted extortion, because the victim was not actually induced by fear when handing over the money.",
            "No crime, because the police entrapment absolves him of liability."
        ],
        ans: 2,
        exp: "The completed crime of extortion requires that the property actually be obtained BY MEANS OF the coercive threat (the victim must surrender the property because they are induced by fear). If the victim is secretly cooperating with the police and is not afraid, the causal link is broken. The defendant is therefore only guilty of attempted extortion."
    }
];