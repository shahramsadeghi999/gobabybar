const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Property Crimes / Larceny by Bailee & Breaking Bulk",
        fp: "Albert is hired by Brenda to transport a locked, sealed wooden chest full of rare gold coins from her house to the bank. Albert is a trusted delivery driver. En route to the bank, Albert pulls his truck over, forcefully pries open the locked chest, takes a handful of the gold coins out, and reseals the chest. He delivers the chest to the bank. The next day, Albert feels immensely guilty, goes to Brenda's house, and returns the exact same gold coins to her.",
        q: "Is Albert guilty of common law larceny?",
        opts: [
            "No, because he possessed lawful custody of the chest and its contents during the commercial transport.",
            "Yes, because embezzlement automatically merges into larceny when the stolen property is physical currency.",
            "Yes, because prying open a sealed container committed by a bailee breaks bulk, terminating lawful possession and creating a trespassory taking.",
            "No, because the prompt return of the exact same property within twenty-four hours establishes a complete affirmative defense to theft."
        ],
        ans: 2,
        exp: "A bailee generally has lawful possession of property entrusted to them, making conversion embezzlement rather than larceny. However, under the common law 'breaking bulk' doctrine, if a bailee opens a sealed container and takes a portion of the contents, their lawful possession terminates. The taking of the contents becomes a trespassory taking, constituting larceny."
    },
    {
        id: 2,
        topic: "Property Crimes / Embezzlement vs. Larceny (Bailee Exception)",
        fp: "Albert is hired by Brenda to transport a locked, sealed wooden chest full of rare gold coins from her house to the bank. Albert is a trusted delivery driver. En route to the bank, Albert pulls his truck over, forcefully pries open the locked chest, takes a handful of the gold coins out, and reseals the chest. He delivers the chest to the bank. The next day, Albert feels immensely guilty, goes to Brenda's house, and returns the exact same gold coins to her.",
        q: "Why is Albert NOT guilty of embezzlement regarding the gold coins?",
        opts: [
            "Because he lacked the specific intent to defraud the original owner.",
            "Because the coins were placed in a secure commercial transport vessel.",
            "Because he acted strictly as a temporary custodian rather than a permanent employee.",
            "Because the act of breaking bulk terminated his lawful possession of the enclosed contents prior to the conversion."
        ],
        ans: 3,
        exp: "Embezzlement requires the fraudulent conversion of property by one who is already in LAWFUL possession of it. When a bailee 'breaks bulk' (opens a closed container), their lawful possession of the contents is legally severed. Since Albert no longer had lawful possession of the coins when he took them, his crime is larceny, not embezzlement."
    },
    {
        id: 3,
        topic: "Property Crimes / Larceny & Intent to Return",
        fp: "Albert is hired by Brenda to transport a locked, sealed wooden chest full of rare gold coins from her house to the bank. Albert is a trusted delivery driver. En route to the bank, Albert pulls his truck over, forcefully pries open the locked chest, takes a handful of the gold coins out, and reseals the chest. He delivers the chest to the bank. The next day, Albert feels immensely guilty, goes to Brenda's house, and returns the exact same gold coins to her.",
        q: "Does Albert's return of the gold coins provide a valid defense to larceny?",
        opts: [
            "No, because he possessed the intent to permanently deprive at the exact moment of the taking.",
            "Yes, because returning the exact same property within 24 hours operates as an absolute affirmative defense to theft.",
            "No, because the bank suffered actual financial damages.",
            "Yes, if he sincerely repented."
        ],
        ans: 0,
        exp: "Larceny requires the specific intent to permanently deprive the owner of their property AT THE TIME of the taking. Albert intended to keep the coins when he took them from the chest. A later change of heart and return of the property does not negate the previously completed crime of larceny."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Homicide / Voluntary Manslaughter (Adequate Provocation & Words)",
        fp: "Carl and Dan are standing in a parking lot. Dan wants to hurt Carl emotionally, so Dan says to him, 'You are a pathetic loser, nobody respects you, and your wife hates you.' Carl, becoming instantly enraged by the severe insults, grabs a heavy steel wrench from his truck bed and strikes Dan in the head, killing him instantly.",
        q: "Can Carl's murder charge be mitigated to voluntary manslaughter based on the heat of passion defense?",
        opts: [
            "Yes, because insulting a spouse is adequate provocation.",
            "No, because mere words or verbal insults alone are generally insufficient to constitute adequate provocation at common law.",
            "Yes, because the words were spoken in a sudden and extremely heated manner.",
            "No, because he used a deadly weapon."
        ],
        ans: 1,
        exp: "Voluntary manslaughter requires 'adequate provocation' that would cause a reasonable person to lose self-control. Under traditional common law, mere words, taunts, or insults—no matter how offensive—are never sufficient to constitute adequate provocation to mitigate murder to manslaughter."
    },
    {
        id: 5,
        topic: "Homicide / Second-Degree Murder",
        fp: "Carl and Dan are standing in a parking lot. Dan wants to hurt Carl emotionally, so Dan says to him, 'You are a pathetic loser, nobody respects you, and your wife hates you.' Carl, becoming instantly enraged by the severe insults, grabs a heavy steel wrench from his truck bed and strikes Dan in the head, killing him instantly.",
        q: "Assuming Carl cannot mitigate the charge, what is the most likely homicide conviction for Carl?",
        opts: [
            "First-degree murder.",
            "Second-degree murder, because he acted with malice aforethought but lacked premeditation and deliberation.",
            "Voluntary manslaughter, because the sudden altercation negates all forms of malice aforethought automatically.",
            "Involuntary manslaughter."
        ],
        ans: 1,
        exp: "Carl intentionally killed Dan with a deadly weapon (the heavy wrench), establishing express malice. However, because he acted 'instantly enraged' without prior planning or reflection, he lacks the premeditation and deliberation required for first-degree murder. Thus, the crime is second-degree murder."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Defenses / Mistake of Law",
        fp: "Evan is hunting deer in a state park. A state statute prohibits hunting deer with any rifle caliber larger than .30. Evan uses a .35 caliber rifle. He genuinely believed the law only banned .40 caliber rifles because he misread the statute in a hunting brochure. While hunting, he shoots at what he reasonably believes is a deer in the brush, but it is actually another hunter, Fred, dressed in a realistic deer costume for a prank. Fred dies.",
        q: "Can Evan assert a mistake of law defense regarding the violation of the hunting caliber statute?",
        opts: [
            "Yes, because his mistake was objectively reasonable.",
            "Yes, because the statute was ambiguous and complex.",
            "No, because ignorance of the criminal law is generally not a valid defense, even if the mistake was genuine and reasonable.",
            "No, because hunting regulations are unconstitutional."
        ],
        ans: 2,
        exp: "Ignorance or mistake of the law is generally not a defense to criminal liability. The fact that Evan misread the statute or misunderstood its provisions does not excuse his violation of the caliber restriction."
    },
    {
        id: 7,
        topic: "Defenses / Mistake of Fact (General Intent/Recklessness)",
        fp: "Evan is hunting deer in a state park. A state statute prohibits hunting deer with any rifle caliber larger than .30. Evan uses a .35 caliber rifle. He genuinely believed the law only banned .40 caliber rifles because he misread the statute in a hunting brochure. While hunting, he shoots at what he reasonably believes is a deer in the brush, but it is actually another hunter, Fred, dressed in a realistic deer costume for a prank. Fred dies.",
        q: "If Evan is charged with involuntary manslaughter for Fred's death, can Evan assert a mistake of fact defense?",
        opts: [
            "Yes, because an honest and reasonable mistake of fact is a defense to a general intent or negligence crime.",
            "No, because involuntary manslaughter is a strict liability offense.",
            "Yes, but only if the victim was trespassing.",
            "No, because using a firearm automatically negates any mistake of fact defense regardless of reasonableness."
        ],
        ans: 0,
        exp: "Involuntary manslaughter is a general intent/recklessness crime. An honest AND reasonable mistake of fact is a valid defense to such crimes. Because Fred was wearing a realistic deer costume in a hunting area, Evan's mistake was both honest and objectively reasonable, negating criminal negligence."
    },
    {
        id: 8,
        topic: "Homicide / Transferred Intent",
        fp: "Evan is hunting deer in a state park. A state statute prohibits hunting deer with any rifle caliber larger than .30. Evan uses a .35 caliber rifle. He genuinely believed the law only banned .40 caliber rifles because he misread the statute in a hunting brochure. While hunting, he shoots at what he reasonably believes is a deer in the brush, but it is actually another hunter, Fred, dressed in a realistic deer costume for a prank. Fred dies.\n\nAssume instead that Evan realized Fred was a human in a costume and intentionally fired his rifle to kill Fred. The bullet missed Fred entirely, but struck and killed George, who was hiding behind a tree.",
        q: "Is Evan liable for the intentional murder of George?",
        opts: [
            "No, because transferred intent only applies to property crimes.",
            "Yes, but only if George was a direct relative of Fred.",
            "No, because his mistake of fact regarding the deer costume cancels the transferred intent doctrine entirely.",
            "Yes, because his specific intent to kill Fred transfers to the actual victim, George, under the transferred intent doctrine."
        ],
        ans: 3,
        exp: "Under the doctrine of transferred intent, a defendant who intends to kill one person but accidentally kills a different, unintended person is guilty of the intentional murder of the actual victim. The intent to kill transfers from the intended target (Fred) to the actual victim (George)."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Inchoate Crimes / Conspiracy & Wharton's Rule",
        fp: "Gina and Harry want to secure a lucrative city contract. They agree to bribe a public official, Ian. (The statutory crime of bribery requires exactly two people: one to give the bribe and one to receive it). Gina and Harry gather the money. Gina drives to Ian's office and successfully pays him the bribe. While driving away, Gina runs a red light and hits a pedestrian, killing him.",
        q: "Are Gina, Harry, and Ian guilty of conspiracy to commit bribery?",
        opts: [
            "Yes, because the number of conspirators (three) exceeds the number of people logically necessary to commit the target offense of bribery (two).",
            "No, because Wharton's rule strictly prohibits conspiracy charges for any crime requiring cooperation.",
            "No, because bribery is a white-collar offense exempt from inchoate conspiracy prosecutions.",
            "Yes, because Wharton's rule only applies to common law felonies, not statutory bribery."
        ],
        ans: 0,
        exp: "Wharton's Rule states that an agreement between two people to commit a crime that logically requires two people (like bribery, dueling, adultery) cannot be prosecuted as a conspiracy. HOWEVER, an exception exists if the number of conspirators exceeds the number required to commit the crime. Since bribery requires two, but there are three conspirators (Gina, Harry, Ian), Wharton's Rule does not apply, and they are all guilty of conspiracy."
    },
    {
        id: 10,
        topic: "Parties to a Crime / Pinkerton Vicarious Liability",
        fp: "Gina and Harry want to secure a lucrative city contract. They agree to bribe a public official, Ian. (The statutory crime of bribery requires exactly two people: one to give the bribe and one to receive it). Gina and Harry gather the money. Gina drives to Ian's office and successfully pays him the bribe. While driving away, Gina runs a red light and hits a pedestrian, killing him.",
        q: "Under the Pinkerton doctrine, is Harry liable for the substantive crime of bribery committed by Gina?",
        opts: [
            "No, because Harry did not physically hand the money to the official.",
            "Yes, because he is strictly liable for all acts of his business partner.",
            "No, because he withdrew by not going to the office.",
            "Yes, because the completed bribery was a foreseeable act committed in furtherance of the conspiracy."
        ],
        ans: 3,
        exp: "Under the Pinkerton doctrine, a co-conspirator is vicariously liable for any substantive crimes committed by their partners that are in furtherance of the conspiracy and reasonably foreseeable. Paying the bribe was the exact object of the conspiracy, making Harry fully liable for it."
    },
    {
        id: 11,
        topic: "Parties to a Crime / Pinkerton Foreseeability Limit",
        fp: "Gina and Harry want to secure a lucrative city contract. They agree to bribe a public official, Ian. (The statutory crime of bribery requires exactly two people: one to give the bribe and one to receive it). Gina and Harry gather the money. Gina drives to Ian's office and successfully pays him the bribe. While driving away, Gina runs a red light and hits a pedestrian, killing him.",
        q: "Is Harry liable for the involuntary manslaughter of the pedestrian under the Pinkerton doctrine?",
        opts: [
            "Yes, because all co-conspirators are absolutely liable for any deaths occurring during the flight from a felony.",
            "No, because a fatal traffic accident is not a highly foreseeable consequence of a white-collar bribery conspiracy.",
            "No, because the pedestrian stepped into the crosswalk unlawfully.",
            "Yes, because driving a vehicle is an inherently dangerous activity."
        ],
        ans: 1,
        exp: "Pinkerton liability requires the co-conspirator's crime to be a REASONABLY FORESEEABLE consequence of the conspiracy. While a fatal high-speed crash might be foreseeable escaping an armed bank robbery, a fatal traffic accident fleeing a quiet, white-collar bribery is generally not considered a foreseeable consequence of the specific conspiracy."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Homicide / Felony Murder (Provocative Act Doctrine)",
        fp: "Jack and Kyle commit an armed robbery of a jewelry store. The police arrive outside. Jack uses the store owner as a human shield, drags him to the front door, and fires his weapon at the police. The police return fire, accidentally striking and killing the store owner. Jack and Kyle are arrested.",
        q: "In a jurisdiction that follows the 'agency theory' of felony murder, is Jack liable for the owner's death?",
        opts: [
            "No, because the police officer fired the fatal shot.",
            "No, because the victim was innocent.",
            "Yes, because using a hostage as a human shield and firing at police is a highly provocative act manifesting a depraved heart, making him liable for the resulting police gunfire.",
            "Yes, because all store owners assume the risk of injury during robberies."
        ],
        ans: 2,
        exp: "Under the agency theory of felony murder, a felon is not strictly liable for deaths caused by a non-felon (like a police officer). HOWEVER, the 'provocative act' doctrine is an exception: if a felon commits an intentional act with extreme recklessness (like using a human shield and shooting at cops) that provokes lethal return fire, they are liable for murder based on their own implied malice."
    },
    {
        id: 13,
        topic: "Homicide / Co-Felon Liability & Provocative Act",
        fp: "Jack and Kyle commit an armed robbery of a jewelry store. The police arrive outside. Jack uses the store owner as a human shield, drags him to the front door, and fires his weapon at the police. The police return fire, accidentally striking and killing the store owner. Jack and Kyle are arrested.",
        q: "Can Kyle be convicted of murder for the owner's death?",
        opts: [
            "Yes, because Jack's lethal confrontation with the police was a reasonably foreseeable consequence of an armed commercial robbery, imposing vicarious liability on co-felons.",
            "No, because Kyle did not physically handle the firearm or interact with the hostage.",
            "Yes, because co-felons share strict liability for all traffic offenses.",
            "No, because the Redline doctrine automatically immunizes co-felons from the deaths of innocent victims."
        ],
        ans: 0,
        exp: "Under conspiracy and accomplice principles, a co-felon is liable for the foreseeable crimes of their partners committed in furtherance of the joint enterprise. A shootout during an armed robbery is a foreseeable consequence. Therefore, Kyle shares Jack's liability for the provocative act murder of the owner."
    },
    {
        id: 14,
        topic: "Homicide / Felony Murder & Merger Doctrine",
        fp: "Jack and Kyle commit an armed robbery of a jewelry store. The police arrive outside. Jack uses the store owner as a human shield, drags him to the front door, and fires his weapon at the police. The police return fire, accidentally striking and killing the store owner. Jack and Kyle are arrested.",
        q: "If Jack is prosecuted for felony murder, does the underlying felony of robbery merge into the homicide, barring the felony murder charge?",
        opts: [
            "Yes, because the robbery resulted in a fatal physical assault.",
            "No, because robbery is an independent collateral felony with a separate felonious purpose (theft) that does not merge into the homicide.",
            "Yes, because the violence of the robbery was the direct cause of the death.",
            "No, because the merger doctrine exclusively applies to involuntary manslaughter."
        ],
        ans: 1,
        exp: "The merger doctrine (Ireland rule) bars a felony murder conviction if the underlying felony is an integral part of the homicide (e.g., assault or battery). Robbery is an independent felony with an independent purpose (acquiring property) and therefore does NOT merge, allowing it to serve as a valid predicate for felony murder."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Property Crimes / Robbery vs. Extortion (Imminence)",
        fp: "Laura's car was damaged by Mike in a parking lot. Mike refused to pay the $1,000 repair bill. Laura approaches Mike on the street with a baseball bat, raises it menacingly, and says 'Pay me the $1,000 you owe me for my car right now, or I'll break your legs.' Terrified, Mike hands her $1,000 in cash.",
        q: "What property crime does Laura's conduct most closely represent?",
        opts: [
            "Extortion, because she demanded money for property damage.",
            "Larceny by trick, because she used a baseball bat to deceive him.",
            "Embezzlement, because the debt was already owed to her.",
            "Robbery, because she took the property from his presence by the threat of immediate physical harm."
        ],
        ans: 3,
        exp: "Robbery is taking property from the person or presence of another by force or the threat of IMMEDIATE physical harm. Extortion involves threats of FUTURE harm. Because Laura raised a bat and threatened to break his legs 'right now,' the threat was of immediate physical harm, constituting robbery."
    },
    {
        id: 16,
        topic: "Defenses / Claim of Right (Unliquidated Damages)",
        fp: "Laura's car was damaged by Mike in a parking lot. Mike refused to pay the $1,000 repair bill. Laura approaches Mike on the street with a baseball bat, raises it menacingly, and says 'Pay me the $1,000 you owe me for my car right now, or I'll break your legs.' Terrified, Mike hands her $1,000 in cash.",
        q: "Can Laura successfully assert a 'claim of right' defense to the robbery charge under traditional common law rules?",
        opts: [
            "Yes, because she had a sincere, honest belief that he owed her money for the car damage.",
            "Yes, because the common law always permits self-help force to recover civil debts.",
            "No, because the claim-of-right defense generally does not apply to the forcible collection of unliquidated, disputed tort damages.",
            "No, because the baseball bat was not actually swung."
        ],
        ans: 2,
        exp: "At common law, a defendant who takes property to satisfy a specific, liquidated debt under an honest belief of entitlement has a 'claim of right' defense that negates the intent to steal. However, this defense does NOT apply to unliquidated, disputed tort claims (like estimating car damage). Furthermore, many modern jurisdictions prohibit the defense entirely when violent force is used."
    },
    {
        id: 17,
        topic: "Crimes against Person / Assault",
        fp: "Laura's car was damaged by Mike in a parking lot. Mike refused to pay the $1,000 repair bill. Laura approaches Mike on the street with a baseball bat, raises it menacingly, and says 'Pay me the $1,000 you owe me for my car right now, or I'll break your legs.' Terrified, Mike hands her $1,000 in cash.",
        q: "Is Laura guilty of assault against Mike?",
        opts: [
            "Yes, because raising the bat and threatening to break his legs intentionally created a reasonable apprehension of imminent bodily harm.",
            "No, because it was a conditional threat that he could avoid by simply paying the money.",
            "Yes, because she made actual physical contact with his property.",
            "No, because verbal threats cannot constitute assault under any circumstances."
        ],
        ans: 0,
        exp: "Assault is the intentional creation of a reasonable apprehension of imminent bodily harm. Raising a baseball bat while making a violent threat clearly creates such apprehension. The fact that the threat was conditional ('pay me OR I will break your legs') does not negate the assault."
    },
    // FACT PATTERN 7 (Q18-Q19)
    {
        id: 18,
        topic: "Defenses / Necessity (Choice of Evils)",
        fp: "Nancy is driving her pregnant sister to the hospital for an emergency delivery. The only road is completely blocked by an unoccupied, parked police cruiser. Knowing there is no other way, Nancy intentionally rams the police cruiser with her heavy truck to push it out of the way. She destroys both vehicles, but successfully gets her sister to the hospital in time.",
        q: "Can Nancy successfully claim the defense of necessity regarding the destruction of the police cruiser?",
        opts: [
            "No, because destroying a police vehicle is an act of treason.",
            "Yes, because she reasonably believed ramming the vehicle was necessary to avoid the greater, imminent harm to her sister's health.",
            "No, because necessity cannot justify intentional property damage.",
            "Yes, but only because she was an immediate family member."
        ],
        ans: 1,
        exp: "The necessity defense (choice of evils) justifies a criminal act (like destroying property) if the defendant reasonably believes the conduct is necessary to avoid a greater, imminent harm caused by natural forces or emergencies. Saving her sister's life/health far outweighs the property damage to the cruiser."
    },
    {
        id: 19,
        topic: "Defenses / Necessity vs. Duress",
        fp: "Nancy is driving her pregnant sister to the hospital for an emergency delivery. The only road is completely blocked by an unoccupied, parked police cruiser. Knowing there is no other way, Nancy intentionally rams the police cruiser with her heavy truck to push it out of the way. She destroys both vehicles, but successfully gets her sister to the hospital in time.",
        q: "Why is Nancy's defense classified as necessity rather than duress?",
        opts: [
            "Duress applies because the police car physically blocked her path.",
            "They are identical and interchangeable legal theories in this context.",
            "Duress applies because her sister was screaming in pain.",
            "She cannot claim duress because duress requires a threat of physical force from another human being commanding her to commit the crime, rather than pressure from a medical emergency."
        ],
        ans: 3,
        exp: "Duress involves coercion by another HUMAN being who threatens immediate physical harm if the defendant does not commit a specific crime. Necessity involves pressure from physical or natural circumstances (like a medical emergency) forcing a choice between two evils."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Oscar breaks into Patty's house at midnight to steal jewelry. Patty wakes up. Oscar points a gun at Patty, forces her into her walk-in closet, and locks the door from the outside. He spends 30 minutes stealing items and leaves. Patty is trapped in the closet for 2 days before being rescued.",
        q: "Is Oscar guilty of false imprisonment?",
        opts: [
            "No, because he left the house after 30 minutes.",
            "No, because the closet was inside her own residential home.",
            "Yes, because he intentionally and unlawfully confined her to a bounded area against her will.",
            "Yes, but it merges completely into the underlying burglary charge."
        ],
        ans: 2,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their valid consent. Locking Patty in a closet against her will satisfies all elements of the offense, regardless of where the closet is located."
    },
    {
        id: 21,
        topic: "Crimes against Person / Kidnapping Asportation Limit",
        fp: "Oscar breaks into Patty's house at midnight to steal jewelry. Patty wakes up. Oscar points a gun at Patty, forces her into her walk-in closet, and locks the door from the outside. He spends 30 minutes stealing items and leaves. Patty is trapped in the closet for 2 days before being rescued.",
        q: "Is Oscar guilty of kidnapping?",
        opts: [
            "No, because forcing a victim into a closet within the same house is generally considered movement merely incidental to the burglary, lacking substantial independent asportation.",
            "Yes, because any physical movement of a victim at gunpoint automatically constitutes kidnapping.",
            "Yes, because the confinement lasted for two full days.",
            "No, because she was not physically injured while inside the closet."
        ],
        ans: 0,
        exp: "Kidnapping requires unlawful confinement and substantial 'asportation' (movement) that increases the risk of harm independent of the underlying crime. Most jurisdictions hold that moving a victim from one room to another within the same structure to facilitate a burglary/robbery is merely incidental movement and insufficient for kidnapping."
    },
    {
        id: 22,
        topic: "Property Crimes / Burglary (Breaking Requirement)",
        fp: "Oscar breaks into Patty's house at midnight to steal jewelry. Patty wakes up. Oscar points a gun at Patty, forces her into her walk-in closet, and locks the door from the outside. He spends 30 minutes stealing items and leaves. Patty is trapped in the closet for 2 days before being rescued.\n\nAssume instead that Patty left her front door wide open to let in a breeze. Oscar simply walked through the open door at midnight, without moving the door at all, and stole the jewelry.",
        q: "Is Oscar guilty of common law burglary in this alternate scenario?",
        opts: [
            "Yes, because he crossed the threshold of a dwelling house at night with felonious intent.",
            "No, because walking through an already open door does not satisfy the strict 'breaking' element required by the common law.",
            "No, because the home was occupied by the owner at the time.",
            "Yes, because the open door created an implied invitation that he fraudulently exploited."
        ],
        ans: 1,
        exp: "Common law burglary requires a breaking AND an entering. A 'breaking' requires the use of some force (even slight, like turning a doorknob or pushing open a cracked window) to create an opening. Entering through a door or window that is already completely open involves zero force and is therefore not a breaking."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Inchoate Crimes / Legal vs Factual Impossibility",
        fp: "Quinn believes it is a federal crime to sell unpasteurized honey across state lines. He intentionally transports and sells unpasteurized honey to a buyer in another state, specifically intending to break the law. In reality, the federal law prohibiting this was repealed a year earlier, making his conduct perfectly legal.",
        q: "Is Quinn guilty of a criminal attempt to smuggle contraband?",
        opts: [
            "Yes, because he had the specific intent to break the law and committed an overt act.",
            "No, because his conduct constitutes pure legal impossibility; if the intended act is not actually a crime, he cannot be convicted of attempting it, regardless of his guilty mind.",
            "Yes, because factual impossibility is not a defense to criminal attempt under modern penal codes.",
            "No, because honey is an agricultural commodity exempt from interstate commerce regulations."
        ],
        ans: 1,
        exp: "True legal impossibility is a complete defense to criminal attempt. It occurs when a defendant intends to do something they believe is illegal, but the act is actually perfectly lawful. Because selling honey is not a crime, intending to sell it cannot be an attempted crime, regardless of his guilty mind."
    },
    {
        id: 24,
        topic: "Inchoate Crimes / Impossibility Definitions",
        fp: "Quinn believes it is a federal crime to sell unpasteurized honey across state lines. He intentionally transports and sells unpasteurized honey to a buyer in another state, specifically intending to break the law. In reality, the federal law prohibiting this was repealed a year earlier, making his conduct perfectly legal.",
        q: "How does pure legal impossibility differ from factual impossibility?",
        opts: [
            "True legal impossibility occurs when the defendant's intended acts, even if fully completed exactly as intended, would not violate any existing criminal statute.",
            "Factual impossibility applies whenever a statute is repealed before the trial commences.",
            "Legal impossibility occurs when a defendant's gun jams during an attempted homicide.",
            "Factual impossibility is an absolute defense to all inchoate crimes."
        ],
        ans: 0,
        exp: "Legal impossibility means that even if the defendant completed all intended acts, no law would be broken (e.g., intending to smuggle illegal lace, but the lace is actually legal). Factual impossibility means the defendant intends to commit a crime, but a factual circumstance prevents completion (e.g., shooting into an empty bed believing the victim is there). Only legal impossibility is a defense."
    },
    {
        id: 25,
        topic: "General Principles / Legality Principle",
        fp: "Quinn believes it is a federal crime to sell unpasteurized honey across state lines. He intentionally transports and sells unpasteurized honey to a buyer in another state, specifically intending to break the law. In reality, the federal law prohibiting this was repealed a year earlier, making his conduct perfectly legal.",
        q: "What is the ultimate legal effect of Quinn's subjective criminal intent to violate the repealed statute?",
        opts: [
            "He is guilty of a general intent misdemeanor.",
            "He is guilty of conspiracy to violate interstate commerce.",
            "He is not guilty of any crime, because criminal liability requires both a guilty mind and a prohibited actus reus defined by an existing law.",
            "He is guilty of federal fraud because he intended to smuggle contraband."
        ],
        ans: 2,
        exp: "Under the principle of legality, there is no crime without a pre-existing law making the conduct illegal. A guilty mind (mens rea) alone, without an accompanying actus reus that violates a valid, existing criminal statute, cannot result in criminal liability."
    }
];