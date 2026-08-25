const examData = [
    // FACT PATTERN 1 (Q1-Q2)
    {
        id: 1,
        topic: "Homicide / Battered Woman Syndrome / Imperfect Self-Defense",
        fp: "Mary has been severely abused by her husband, Nick, for 10 years. One evening, Nick beats Mary and says, 'When I wake up tomorrow, I'm going to finish the job and kill you.' Nick then falls asleep. Believing she has no other way to survive, Mary shoots Nick while he sleeps.",
        q: "Can Mary successfully claim traditional perfect self-defense?",
        opts: [
            "No, because the threat of death was not imminent since Nick was asleep.",
            "Yes, because Battered Woman Syndrome creates an automatic legal exception to the imminence requirement in all jurisdictions.",
            "Yes, because her subjective belief that she needed to use lethal force was formed immediately after a severe physical altercation.",
            "No, because the use of a firearm against an unarmed sleeping person constitutes disproportionate force as a matter of law."
        ],
        ans: 0,
        exp: "Traditional perfect self-defense requires that the defendant reasonably believe they face an IMMINENT threat of death or great bodily harm[cite: 28]. Because Nick was asleep and the threat was for 'tomorrow,' the threat was not imminent, defeating a perfect self-defense claim in most jurisdictions[cite: 28]."
    },
    {
        id: 2,
        topic: "Homicide / Imperfect Self-Defense Mitigation",
        fp: "Mary has been severely abused by her husband, Nick, for 10 years. One evening, Nick beats Mary and says, 'When I wake up tomorrow, I'm going to finish the job and kill you.' Nick then falls asleep. Believing she has no other way to survive, Mary shoots Nick while he sleeps.",
        q: "If the jury finds that Mary held an honest but objectively unreasonable belief that she needed to use deadly force to save her life, what is the most appropriate homicide conviction?",
        opts: [
            "First-degree murder, because shooting a sleeping victim demonstrates premeditation and deliberation.",
            "Voluntary manslaughter, because imperfect self-defense negates the malice aforethought required for murder.",
            "Involuntary manslaughter, because her unreasonable assessment of the danger constitutes criminal negligence.",
            "Second-degree murder, because her actions demonstrated a depraved heart."
        ],
        ans: 1,
        exp: "Under the doctrine of imperfect self-defense, if a defendant holds an honest but objectively unreasonable belief that deadly force is necessary to prevent imminent death or great bodily harm, this belief negates malice aforethought[cite: 28]. The murder charge is mitigated to voluntary manslaughter[cite: 28]."
    },
    // FACT PATTERN 2 (Q3-Q5)
    {
        id: 3,
        topic: "Property Crimes / Claim of Right (Robbery)",
        fp: "Owen owes Paul $500 from a lawful loan. Paul sees Owen on the street, pulls a knife, and says, 'Give me the $500 you owe me right now, or I'll cut you.' Owen gives Paul his wallet, which contains exactly $500. Paul takes the $500 and throws the wallet back.",
        q: "Is Paul guilty of common law robbery for taking the $500?",
        opts: [
            "No, because Paul immediately returned the physical wallet to Owen.",
            "No, because collecting a liquidated debt under a claim of right negates the felonious intent to steal.",
            "Yes, because the use of a deadly weapon elevates any taking to armed robbery.",
            "Yes, because Paul used the threat of imminent deadly force to take cash from the victim's immediate presence."
        ],
        ans: 1,
        exp: "At traditional common law, the 'claim of right' doctrine holds that a person who takes property to satisfy a specific, liquidated debt honestly believes they are entitled to the property[cite: 28]. This honest belief negates the 'animus furandi' (intent to steal), thereby defeating a robbery or larceny charge[cite: 28]."
    },
    {
        id: 4,
        topic: "Property Crimes / Claim of Right Limitation",
        fp: "Owen owes Paul $500 from a lawful loan. Paul sees Owen on the street, pulls a knife, and says, 'Give me the $500 you owe me right now, or I'll cut you.' Owen gives Paul his wallet, which contains exactly $500. Paul takes the $500 and throws the wallet back.",
        q: "In a modern jurisdiction that has abolished the claim-of-right defense for violent takings, what is Paul's liability?",
        opts: [
            "He is guilty of robbery, because the use of force to collect a debt is strictly prohibited and the claim of right defense is unavailable.",
            "He is guilty of extortion, because he obtained property using a threat.",
            "He is guilty of embezzlement, because the funds were previously entrusted.",
            "He is guilty of false pretenses, because he used deceit to obtain title."
        ],
        ans: 0,
        exp: "Many modern jurisdictions have abolished the claim-of-right defense for violent crimes to discourage self-help[cite: 28]. In such jurisdictions, using force or the threat of force to recover a debt satisfies the elements of robbery, as the defendant takes property from the victim's person by force[cite: 28]."
    },
    {
        id: 5,
        topic: "Crimes Against Person / Assault",
        fp: "Owen owes Paul $500 from a lawful loan. Paul sees Owen on the street, pulls a knife, and says, 'Give me the $500 you owe me right now, or I'll cut you.' Owen gives Paul his wallet, which contains exactly $500. Paul takes the $500 and throws the wallet back.",
        q: "Did Paul commit an assault against Owen?",
        opts: [
            "No, because conditional threats negate the imminence required for an assault charge.",
            "No, because the common law debt collection privilege provides absolute immunity from personal torts.",
            "Yes, because he intentionally created a reasonable apprehension of imminent bodily harm.",
            "Yes, because any verbal threat of violence automatically constitutes assault when spoken in a public forum."
        ],
        ans: 2,
        exp: "Assault is the intentional creation of a reasonable apprehension of imminent bodily harm[cite: 28]. Brandishing a knife and issuing a conditional threat ('do this or I will cut you') satisfies the imminence and apprehension elements of assault, regardless of whether the victim complies[cite: 28]."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Inchoate Crimes / Conspiracy (Feigned Agreement)",
        fp: "Alice, a federal agent, poses as a hitman. Bob hires Alice to murder his wife, Claire, paying her $10,000. Alice never intends to kill Claire and immediately arrests Bob. Bob's brother, Dan, knew of the plan and provided Bob with the $10,000, specifically intending for Claire to be murdered.",
        q: "Is Bob guilty of common law conspiracy to commit murder with Alice?",
        opts: [
            "Yes, because Bob completed the overt act of paying the $10,000 to the purported hitman.",
            "No, because Alice was an undercover agent who lacked genuine criminal intent, defeating the bilateral agreement requirement.",
            "Yes, because the Model Penal Code unilateral approach governs all common law offenses.",
            "No, because the target crime of murder was never completed or attempted."
        ],
        ans: 1,
        exp: "Under traditional common law, conspiracy requires a 'bilateral' agreement (a true meeting of the minds between at least two parties who actually intend to commit the crime)[cite: 28]. Because Alice was an undercover agent feigning agreement, Bob did not form a valid conspiracy with her[cite: 28]."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Solicitation",
        fp: "Alice, a federal agent, poses as a hitman. Bob hires Alice to murder his wife, Claire, paying her $10,000. Alice never intends to kill Claire and immediately arrests Bob. Bob's brother, Dan, knew of the plan and provided Bob with the $10,000, specifically intending for Claire to be murdered.",
        q: "Can Bob be charged with solicitation to commit murder?",
        opts: [
            "No, because Alice was an undercover federal law enforcement agent acting under color of authority.",
            "No, because the solicitation automatically merged into the completed crime of common law conspiracy.",
            "Yes, because he urged another to commit a felony with specific intent.",
            "Yes, but only if the prosecution can prove that Alice took a substantial step toward the killing."
        ],
        ans: 2,
        exp: "Solicitation is complete when the defendant asks, commands, or urges another to commit a crime with the specific intent that the crime be committed[cite: 28]. The fact that the solicitee is an undercover agent or refuses the request is irrelevant to the completion of the solicitation[cite: 28]."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Conspiracy (Dan's Liability)",
        fp: "Alice, a federal agent, poses as a hitman. Bob hires Alice to murder his wife, Claire, paying her $10,000. Alice never intends to kill Claire and immediately arrests Bob. Bob's brother, Dan, knew of the plan and provided Bob with the $10,000, specifically intending for Claire to be murdered.",
        q: "What is Dan's liability regarding the plot to kill Claire?",
        opts: [
            "Guilty of conspiracy, because he and Bob shared the specific intent to kill and formed a genuine bilateral agreement.",
            "Dan is guilty of being an accessory after the fact, because he provided financial assistance to Bob.",
            "Dan bears absolutely no criminal liability, because the primary actor completely lacked criminal intent.",
            "Dan is guilty of attempted murder, because providing funds constitutes a dangerous proximity to success."
        ],
        ans: 0,
        exp: "While Bob cannot conspire with Alice (the undercover agent), Bob and Dan CAN form a valid bilateral conspiracy[cite: 28]. Both Bob and Dan shared the specific intent to kill Claire and agreed to pool resources ($10,000) to accomplish the goal[cite: 28]. Thus, Dan and Bob conspired together[cite: 28]."
    },
    // FACT PATTERN 4 (Q9-Q10)
    {
        id: 9,
        topic: "Homicide / Felony Murder (Non-Dangerous Felony)",
        fp: "Victor steals a $50 bicycle from a rack outside a store. While pedaling furiously down the crowded sidewalk to escape, Victor strikes an elderly pedestrian, who falls, hits her head, and dies.",
        q: "Can Victor be convicted of felony murder for the pedestrian's death?",
        opts: [
            "Yes, because the death occurred during the immediate flight from the scene of the active property crime.",
            "No, because the underlying crime is a misdemeanor, not an inherently dangerous felony.",
            "Yes, because operating a vehicle on a crowded walkway elevates the underlying offense to an inherently dangerous felony.",
            "No, because the pedestrian's resulting death was an entirely unforeseeable consequence of a minor property theft."
        ],
        ans: 1,
        exp: "The felony murder rule applies only when a death occurs during the commission or attempted commission of an 'inherently dangerous felony' (e.g., BARRK offenses: burglary, arson, rape, robbery, kidnapping)[cite: 28]. Stealing a $50 bicycle is a misdemeanor (petit larceny), precluding the application of the felony murder rule[cite: 28]."
    },
    {
        id: 10,
        topic: "Homicide / Involuntary Manslaughter (Misdemeanor-Manslaughter Rule)",
        fp: "Victor steals a $50 bicycle from a rack outside a store. While pedaling furiously down the crowded sidewalk to escape, Victor strikes an elderly pedestrian, who falls, hits her head, and dies.",
        q: "What is the most appropriate homicide charge against Victor?",
        opts: [
            "Involuntary manslaughter, under the misdemeanor-manslaughter rule or criminal negligence.",
            "First-degree murder.",
            "Second-degree murder.",
            "Voluntary manslaughter."
        ],
        ans: 0,
        exp: "Involuntary manslaughter encompasses unintentional killings resulting from criminal negligence or deaths occurring during the commission of an unlawful act not amounting to a felony (the misdemeanor-manslaughter rule)[cite: 28]. Riding a stolen bike furiously on a crowded sidewalk satisfies either theory[cite: 28]."
    },
    // FACT PATTERN 5 (Q11-Q13)
    {
        id: 11,
        topic: "Defenses / Involuntary Intoxication (Specific Intent)",
        fp: "Erin is slipped a powerful hallucinogen into her drink at a party without her knowledge (involuntary intoxication). While hallucinating that her friend Fred is a demon, she breaks into Fred's house to steal a holy relic to defend herself. Once inside, she attacks Fred with a vase.",
        q: "Can Erin use her involuntary intoxication as a defense to the charge of burglary?",
        opts: [
            "No, because burglary is categorized as a strict liability public welfare offense under the penal code.",
            "Yes, because involuntary intoxication is a defense to specific intent crimes if it prevents the formation of the requisite intent.",
            "No, because the law strictly prohibits using any form of intoxication to excuse a violent property invasion.",
            "Yes, but only if the intoxicating substance was administered by a licensed physician in a clinical setting."
        ],
        ans: 1,
        exp: "Involuntary intoxication is treated the same as insanity[cite: 28]. It provides a complete defense to a crime if, because of the intoxication, the defendant was unable to understand the nature of the act or distinguish right from wrong[cite: 28]. Even under standard intoxication rules, it negates the specific intent required for burglary[cite: 28]."
    },
    {
        id: 12,
        topic: "Defenses / Involuntary Intoxication (General Intent)",
        fp: "Erin is slipped a powerful hallucinogen into her drink at a party without her knowledge (involuntary intoxication). While hallucinating that her friend Fred is a demon, she breaks into Fred's house to steal a holy relic to defend herself. Once inside, she attacks Fred with a vase.",
        q: "Can Erin use her involuntary intoxication as a defense to the charge of battery against Fred?",
        opts: [
            "No, because the law treats all forms of intoxication as entirely irrelevant to the prosecution of general intent crimes like battery.",
            "Yes, because involuntary intoxication can serve as a defense to general intent crimes.",
            "No, because utilizing a blunt object as a weapon during the assault automatically negates any available intoxication defenses.",
            "Yes, but only if the prosecution fails to establish that the defendant voluntarily entered the residential premises prior to the attack."
        ],
        ans: 1,
        exp: "Unlike voluntary intoxication (which is only a defense to specific intent crimes), INVOLUNTARY intoxication is a defense to ALL crimes—including general intent crimes like battery—if the intoxication renders the defendant legally insane at the time of the act under the jurisdiction's insanity test[cite: 28]."
    },
    {
        id: 13,
        topic: "Defenses / Mistake of Fact (Involuntary Intoxication)",
        fp: "Erin is slipped a powerful hallucinogen into her drink at a party without her knowledge (involuntary intoxication). While hallucinating that her friend Fred is a demon, she breaks into Fred's house to steal a holy relic to defend herself. Once inside, she attacks Fred with a vase.",
        q: "What is the legal effect of Erin's belief that Fred was a demon?",
        opts: [
            "It acts as a valid mistake of fact, negating the required mens rea.",
            "It is legally irrelevant, because the victim was an actual human being rather than a supernatural entity.",
            "It automatically elevates the severity of the charge to premeditated attempted murder under modern law.",
            "It provides a complete and absolute defense to all criminal charges under the objective reasonable person standard for self-defense."
        ],
        ans: 0,
        exp: "A mistake of fact negates criminal liability if it prevents the defendant from forming the required mens rea[cite: 28]. Because the mistake was induced by involuntary intoxication, even an objectively unreasonable mistake (believing the victim is a demon) operates as a valid defense[cite: 28]."
    },
    // FACT PATTERN 6 (Q14-Q16)
    {
        id: 14,
        topic: "Property Crimes / False Pretenses vs. Larceny by Trick",
        fp: "George goes to a car dealership. He presents a fake driver's license and a forged cashier's check to purchase a $30,000 car. The dealer, believing the check is real, signs the vehicle's title over to George and hands him the keys. George drives away.",
        q: "Of what property crime is George guilty regarding the car?",
        opts: [
            "Larceny by trick, because the dealer only transferred custody.",
            "Embezzlement, because George acquired lawful possession first.",
            "False pretenses, because he obtained legal title to the vehicle through an intentional false representation.",
            "Robbery, because forged instruments constitute constructive force."
        ],
        ans: 2,
        exp: "False pretenses occurs when a defendant obtains TITLE to the property of another by an intentional false statement of fact with intent to defraud[cite: 28]. Because the dealer officially signed over the vehicle's title (not just custody), the crime is false pretenses, not larceny by trick[cite: 28]."
    },
    {
        id: 15,
        topic: "Property Crimes / Larceny by Trick Distinctions",
        fp: "George goes to a car dealership. He presents a fake driver's license and a forged cashier's check to purchase a $30,000 car. The dealer, believing the check is real, signs the vehicle's title over to George and hands him the keys. George drives away.",
        q: "Why is George NOT guilty of larceny by trick?",
        opts: [
            "Because automobiles are legally classified as real property fixtures.",
            "Because the total value of the stolen vehicle exceeded the statutory limit.",
            "Because George used a check.",
            "Because the dealership officially signed over the legal title to the vehicle."
        ],
        ans: 3,
        exp: "The distinction between larceny by trick and false pretenses lies in whether the victim intended to transfer custody or title[cite: 28]. Larceny by trick involves acquiring mere custody through deceit[cite: 28]. Because the dealership transferred legal title along with the keys, the crime cannot be larceny by trick[cite: 28]."
    },
    {
        id: 16,
        topic: "Property Crimes / Forgery",
        fp: "George goes to a car dealership. He presents a fake driver's license and a forged cashier's check to purchase a $30,000 car. The dealer, believing the check is real, signs the vehicle's title over to George and hands him the keys. George drives away.",
        q: "Is George guilty of forgery for creating the fake cashier's check?",
        opts: [
            "No, because the commercial dealership voluntarily accepted the financial instrument.",
            "Yes, he created a false writing with intent to defraud.",
            "Yes, but only because the monetary value of the transaction exceeded felony thresholds.",
            "No, because the counterfeit check was never successfully cashed by the receiving bank."
        ],
        ans: 1,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, done with the specific intent to defraud[cite: 28]. Creating a fake cashier's check satisfies all elements of forgery[cite: 28]. The fact that it was voluntarily accepted or not actually cashed is irrelevant to the completion of the forgery[cite: 28]."
    },
    // FACT PATTERN 7 (Q17-Q18)
    {
        id: 17,
        topic: "Homicide / Year and a Day Rule",
        fp: "Harry shoots Ian in the chest with the intent to kill him. Ian survives the initial surgery but remains in a coma. Exactly 14 months after the shooting, Ian dies from an infection directly caused by the gunshot wound. The jurisdiction strictly follows traditional common law.",
        q: "Can Harry be convicted of criminal homicide under traditional common law?",
        opts: [
            "Yes, because the ballistic trauma inflicted by the defendant served as the undisputed actual and proximate cause.",
            "Yes, because all post-operative medical infections are universally classified as foreseeable dependent intervening causes.",
            "No, because the medical facility's complete failure to prevent the bacterial infection constitutes a superseding cause.",
            "No, because the year-and-a-day rule strictly bars a homicide conviction after 13 months."
        ],
        ans: 3,
        exp: "Under the traditional common law 'year and a day' rule, a defendant cannot be convicted of criminal homicide if the victim dies more than one year and one day after the fatal blow or act was inflicted[cite: 28]. Because Ian died 14 months later, Harry is immune from a homicide prosecution at common law[cite: 28]."
    },
    {
        id: 18,
        topic: "Inchoate Crimes / Attempted Murder vs. Completed Homicide",
        fp: "Harry shoots Ian in the chest with the intent to kill him. Ian survives the initial surgery but remains in a coma. Exactly 14 months after the shooting, Ian dies from an infection directly caused by the gunshot wound. The jurisdiction strictly follows traditional common law.",
        q: "If Harry cannot be convicted of homicide, what is his highest potential criminal liability?",
        opts: [
            "Attempted murder, because he possessed the specific intent to kill and completed the actus reus.",
            "Aggravated battery.",
            "No crime, due to total statutory immunity.",
            "Voluntary manslaughter."
        ],
        ans: 0,
        exp: "If a defendant cannot be convicted of a completed homicide due to a legal barrier like the year-and-a-day rule, they remain fully liable for attempted murder[cite: 28]. Harry possessed the specific intent to kill and completed the actus reus by shooting Ian, satisfying all elements of attempt[cite: 28]."
    },
    // FACT PATTERN 8 (Q19-Q20)
    {
        id: 19,
        topic: "Crimes Against Person / Kidnapping vs. False Imprisonment",
        fp: "Kevin confronts his boss, Laura, in her office. He locks the office door, swallows the key, and forces Laura to sit in her chair at gunpoint for five hours while he rants about his grievances.",
        q: "Is Kevin guilty of kidnapping?",
        opts: [
            "Yes, because he unlawfully confined the victim against her will for an extended and substantial period of time.",
            "Yes, because the introduction of a loaded deadly weapon automatically elevates the offense into a felony kidnapping.",
            "No, because locking an interior commercial office door only constitutes an actionable civil trespass to real property.",
            "No, because there was no asportation of the victim."
        ],
        ans: 3,
        exp: "Kidnapping requires the unlawful confinement of a person accompanied by ASPORTATION (movement of the victim)[cite: 28]. Because Kevin merely locked Laura in her office and did not move her from one location to another, the crime is false imprisonment, not kidnapping[cite: 28]."
    },
    {
        id: 20,
        topic: "Crimes Against Person / False Imprisonment",
        fp: "Kevin confronts his boss, Laura, in her office. He locks the office door, swallows the key, and forces Laura to sit in her chair at gunpoint for five hours while he rants about his grievances.",
        q: "What crime did Kevin commit?",
        opts: [
            "Robbery.",
            "Extortion.",
            "False imprisonment, due to unlawful confinement.",
            "Larceny by trick or false pretenses against the victim."
        ],
        ans: 2,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their valid consent[cite: 28]. Kevin restricting Laura's freedom of movement by locking the door and holding her at gunpoint perfectly satisfies the elements of the tort and crime[cite: 28]."
    },
    // FACT PATTERN 9 (Q21-Q22)
    {
        id: 21,
        topic: "Defenses / Entrapment",
        fp: "Undercover Officer Smith approaches Mike, a known drug dealer with a long history of selling cocaine. Officer Smith asks Mike to sell him an ounce of cocaine. Mike immediately agrees and completes the sale.",
        q: "Will Mike succeed with an entrapment defense?",
        opts: [
            "Yes, because the officer initiated the illegal transaction.",
            "Yes, because police cannot solicit narcotics.",
            "No, because Mike was already predisposed to commit the crime, meaning the officer merely provided an opportunity.",
            "No, because entrapment only applies to violent felonies."
        ],
        ans: 2,
        exp: "Entrapment requires showing that the government induced the crime AND that the defendant was not otherwise predisposed to commit it[cite: 28]. Because Mike was a known drug dealer who immediately agreed to the sale, he was clearly predisposed, meaning the officer merely provided an opportunity[cite: 28]."
    },
    {
        id: 22,
        topic: "Defenses / Entrapment (Subjective Test)",
        fp: "Undercover Officer Smith approaches Mike, a known drug dealer with a long history of selling cocaine. Officer Smith asks Mike to sell him an ounce of cocaine. Mike immediately agrees and completes the sale.",
        q: "Under the subjective test for entrapment, what is the critical inquiry?",
        opts: [
            "The objective severity and egregiousness of the undercover law enforcement officer's misconduct.",
            "Whether the defendant was predisposed to commit the offense.",
            "The total aggregated monetary value of the illicit contraband exchanged during the sting operation.",
            "Whether the targeted defendant's fundamental constitutional due process rights were overtly violated."
        ],
        ans: 1,
        exp: "The majority 'subjective test' for entrapment focuses primarily on the defendant's state of mind—specifically, whether the defendant was predisposed to commit the crime prior to government contact[cite: 28]. If the defendant was predisposed, the entrapment defense fails[cite: 28]."
    },
    // FACT PATTERN 10 (Q23-Q25)
    {
        id: 23,
        topic: "Property Crimes / Extortion",
        fp: "Nancy approaches Oscar on the street and says, 'Give me your watch right now, or I will post embarrassing photos of you on the internet tomorrow.' Oscar, terrified of public humiliation, hands over the watch.",
        q: "Of what crime is Nancy guilty?",
        opts: [
            "Robbery.",
            "Larceny.",
            "Embezz.",
            "Extortion, because she threatened future reputational harm."
        ],
        ans: 3,
        exp: "Extortion (blackmail) is the obtaining of property from another by means of threats of future harm (including reputational harm or exposing secrets)[cite: 28]. Threatening to post embarrassing photos tomorrow clearly satisfies this definition[cite: 28]."
    },
    {
        id: 24,
        topic: "Property Crimes / Robbery vs. Extortion",
        fp: "Nancy approaches Oscar on the street and says, 'Give me your watch right now, or I will post embarrassing photos of you on the internet tomorrow.' Oscar, terrified of public humiliation, hands over the watch.",
        q: "Why is Nancy's conduct NOT robbery?",
        opts: [
            "Because Oscar voluntarily surrendered physical custody of the item without exhibiting any bodily resistance.",
            "Because a wristwatch is considered a personal accessory exempt from traditional common law robbery classifications.",
            "Because Nancy was unarmed.",
            "Because the threat involved future reputational damage instead of immediate physical harm."
        ],
        ans: 3,
        exp: "Robbery requires a taking accomplished by force or the threat of IMMEDIATE physical harm to the victim (or someone in their presence)[cite: 28]. A threat to cause reputational damage 'tomorrow' involves no immediate physical danger, differentiating it entirely from robbery[cite: 28]."
    },
    {
        id: 25,
        topic: "Property Crimes / Robbery",
        fp: "Nancy approaches Oscar on the street and says, 'Give me your watch right now, or I will post embarrassing photos of you on the internet tomorrow.' Oscar, terrified of public humiliation, hands over the watch.\n\nIf Nancy had instead said, 'Give me your watch right now, or I will punch you in the face right now,' what crime would she have committed?",
        opts: [
            "Extortion, because she utilized a coercive verbal command rather than a formal written declaration.",
            "Robbery, due to the threat of immediate physical harm.",
            "Larceny by trick, because she fraudulently deceived the innocent victim into surrendering possession.",
            "Simple assault, because the unprivileged taking of a wristwatch constitutes a distinct civil tort action."
        ],
        ans: 1,
        exp: "Robbery is the trespassory taking and carrying away of the personal property of another from their person or presence by force or threat of immediate physical harm[cite: 28]. Threatening to punch the victim 'right now' is a threat of immediate physical harm, establishing robbery[cite: 28]."
    }
];