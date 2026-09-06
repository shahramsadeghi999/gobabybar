const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Causation (Medical Negligence)",
        fp: "Victor and Dan get into a heated argument at a bar. Victor pulls out a switchblade knife and threatens Dan. Dan pulls out a gun and shoots Victor in the leg to disarm him. Victor is rushed to the hospital. Due to gross hospital understaffing, a doctor negligently administers the wrong blood type during a routine transfusion, and Victor dies from the resulting complications.",
        q: "Is Dan the proximate cause of Victor's death?",
        opts: [
            "Yes, because the use of a firearm automatically imposes strict liability for any subsequent death.",
            "No, the doctor's error breaks the chain.",
            "Yes, because ordinary medical negligence is considered a foreseeable dependent intervening cause.",
            "No, because Dan only intended to shoot the leg."
        ],
        ans: 2,
        exp: "In criminal homicide, an original assailant is the proximate cause of death if the victim dies from medical negligence during treatment for the wound. Ordinary medical negligence is highly foreseeable and is considered a dependent intervening cause that does not break the chain of causation."
    },
    {
        id: 2,
        topic: "Defenses / Self-Defense",
        fp: "Victor and Dan get into a heated argument at a bar. Victor pulls out a switchblade knife and threatens Dan. Dan pulls out a gun and shoots Victor in the leg to disarm him. Victor is rushed to the hospital. Due to gross hospital understaffing, a doctor negligently administers the wrong blood type during a routine transfusion, and Victor dies from the resulting complications.",
        q: "Can Dan successfully claim self-defense for the initial shooting?",
        opts: [
            "Yes, if he reasonably believed he faced an imminent threat of death or great bodily harm.",
            "No, because he was in a public bar and had an absolute duty to retreat under the circumstances.",
            "No, because guns are disproportionate to knives.",
            "Yes, because any physical threat justifies lethal force."
        ],
        ans: 0,
        exp: "A defendant may use deadly force in self-defense if they reasonably believe they are in imminent danger of death or great bodily harm. A switchblade knife poses such a threat, and firing a gun to stop it is a proportionate use of deadly defensive force."
    },
    {
        id: 3,
        topic: "Homicide / Attempted Murder",
        fp: "Victor and Dan get into a heated argument at a bar. Victor pulls out a switchblade knife and threatens Dan. Dan pulls out a gun and shoots Victor in the leg to disarm him. Victor is rushed to the hospital. Due to gross hospital understaffing, a doctor negligently administers the wrong blood type during a routine transfusion, and Victor dies from the resulting complications.",
        q: "If the doctor's negligence is deemed an unforeseeable superseding cause, what is Dan's highest criminal liability?",
        opts: [
            "Attempted murder, assuming he possessed the specific intent to kill when he fired the weapon.",
            "Aggravated battery, as the death cannot be attributed to him.",
            "Involuntary manslaughter.",
            "Second-degree murder, because a gun was used."
        ],
        ans: 0,
        exp: "If a superseding cause breaks the chain of proximate causation for homicide, the defendant cannot be convicted of murder. However, if the defendant possessed the specific intent to kill and took a substantial step (shooting), he is fully liable for attempted murder regardless of the victim's actual cause of death."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Property Crimes / Embezzlement",
        fp: "Alice is a bank teller. A customer hands her $500 to deposit into his savings account. Alice puts the money into her designated teller till. Later that afternoon, Alice secretly takes $100 from the till to pay for her personal groceries.",
        q: "What property crime did Alice commit when she took the $100?",
        opts: [
            "Larceny by trick.",
            "False pretenses.",
            "Robbery.",
            "Embezzlement, because she fraudulently converted property of another while she had lawful possession."
        ],
        ans: 3,
        exp: "Embezzlement is the fraudulent conversion of the property of another by one who is already in lawful possession of it. As a bank teller entrusted with handling deposits, Alice had lawful possession of the funds. Her conversion of the money for her own use constitutes embezzlement."
    },
    {
        id: 5,
        topic: "Property Crimes / Larceny Distinctions",
        fp: "Alice is a bank teller. A customer hands her $500 to deposit into his savings account. Alice puts the money into her designated teller till. Later that afternoon, Alice secretly takes $100 from the till to pay for her personal groceries.",
        q: "Why is Alice NOT guilty of common law larceny?",
        opts: [
            "Because she had lawful possession, lacking a trespassory taking.",
            "Because she intended to replace the money the following day, negating the specific intent to permanently deprive the bank.",
            "Because the value was under the grand theft threshold.",
            "Because the money belonged to the bank, not the customer."
        ],
        ans: 0,
        exp: "Larceny strictly requires a trespassory taking (a taking from the possession of another without consent). Because Alice was already in lawful possession of the money as a trusted employee, there was no trespassory taking, eliminating a larceny charge."
    },
    // FACT PATTERN 3 (Q6-Q7)
    {
        id: 6,
        topic: "Property Crimes / Burglary (Common Law)",
        fp: "Ben breaks into a detached garage on a residential property at night to steal a lawnmower. To see in the dark, he lights a match, accidentally drops it, and burns the garage to the ground.",
        q: "Is Ben guilty of common law burglary?",
        opts: [
            "Yes, because he broke into a structure with felonious intent during the nighttime hours.",
            "No, because common law burglary strictly requires the breaking and entering of a dwelling house, and a detached garage does not qualify.",
            "Yes, because he committed a felony inside.",
            "No, because he did not use a weapon."
        ],
        ans: 1,
        exp: "Common law burglary is strictly defined as the breaking and entering of the DWELLING house of another in the nighttime with the intent to commit a felony therein. A detached garage that is not used for living or sleeping is not a dwelling house."
    },
    {
        id: 7,
        topic: "Property Crimes / Arson (Common Law)",
        fp: "Ben breaks into a detached garage on a residential property at night to steal a lawnmower. To see in the dark, he lights a match, accidentally drops it, and burns the garage to the ground.",
        q: "Is Ben guilty of common law arson?",
        opts: [
            "Yes, because the garage completely burned down to the ground.",
            "Yes, because he acted with extreme recklessness regarding the match.",
            "No, because the fire was an accidental result of dropping a match, thereby lacking the requisite malice.",
            "No, because common law arson strictly requires the malicious burning of the dwelling house of another person, and this was an accidental fire in a detached shed."
        ],
        ans: 2,
        exp: "Common law arson requires the MALICIOUS burning of the dwelling of another. Malice requires an intentional burning or reckless disregard of an obvious risk of burning. Accidentally dropping a match to see in the dark lacks the requisite malice."
    },
    // FACT PATTERN 4 (Q8-Q10)
    {
        id: 8,
        topic: "Inchoate Crimes / Conspiracy & Withdrawal",
        fp: "Cathy and Dave plan to rob a bank. Dave buys a ski mask for the robbery. The next day, Dave gets cold feet, tells Cathy he is backing out, and goes to the police. Cathy attempts the robbery alone but is caught before getting any money.",
        q: "Is Dave guilty of conspiracy?",
        opts: [
            "Yes, because the agreement and the overt act of purchasing the mask were completed prior to his withdrawal.",
            "No, because he withdrew and notified police before the robbery occurred, which retroactively cancels the conspiracy.",
            "No, because the robbery was not completed.",
            "Yes, but only as an accessory."
        ],
        ans: 0,
        exp: "Conspiracy is complete the moment the agreement is made and an overt act is performed (buying the mask). Once the crime of conspiracy is complete, subsequent withdrawal is not a defense to the conspiracy charge itself, though it may protect the defendant from liability for future substantive crimes."
    },
    {
        id: 9,
        topic: "Parties to a Crime / Accomplice Withdrawal",
        fp: "Cathy and Dave plan to rob a bank. Dave buys a ski mask for the robbery. The next day, Dave gets cold feet, tells Cathy he is backing out, and goes to the police. Cathy attempts the robbery alone but is caught before getting any money.",
        q: "Is Dave liable for Cathy's attempted robbery?",
        opts: [
            "Yes, because he originally conspired with her to commit the robbery.",
            "No, because he effectively withdrew from the conspiracy by communicating his withdrawal to his co-conspirator before the target crime became unstoppable.",
            "Yes, because he bought the mask.",
            "No, because Cathy failed to rob the bank."
        ],
        ans: 1,
        exp: "A conspirator may withdraw and avoid liability for the SUBSEQUENT crimes of co-conspirators if they perform an affirmative act that notifies all co-conspirators of their withdrawal in time for them to abandon their plans. Dave telling Cathy he was backing out successfully severed his liability for her subsequent attempt."
    },
    {
        id: 10,
        topic: "Inchoate Crimes / Attempted Robbery",
        fp: "Cathy and Dave plan to rob a bank. Dave buys a ski mask for the robbery. The next day, Dave gets cold feet, tells Cathy he is backing out, and goes to the police. Cathy attempts the robbery alone but is caught before getting any money.",
        q: "Is Cathy guilty of attempted robbery?",
        opts: [
            "No, because she didn't get any money.",
            "No, because Dave withdrew from the plan.",
            "Yes, she took a substantial step with intent.",
            "Yes, because entering a store with a weapon automatically satisfies the strict liability elements for completed common law robbery."
        ],
        ans: 2,
        exp: "Attempt requires specific intent to commit the target offense and an overt act that constitutes a substantial step toward completion. Cathy possessing the intent to rob and executing the plan by attempting the robbery constitutes a clear substantial step."
    },
    // FACT PATTERN 5 (Q11-Q12)
    {
        id: 11,
        topic: "Property Crimes / Extortion",
        fp: "Ellen tells her coworker, Fred, 'Give me $500 tomorrow or I will tell the boss about your affair with the secretary.' Terrified of losing his job, Fred pays her the next day.",
        q: "What property crime is Ellen guilty of?",
        opts: [
            "Robbery.",
            "Embezzlement.",
            "Larceny.",
            "Extortion, because she obtained the property by means of threatening future, non-physical harm to his employment."
        ],
        ans: 3,
        exp: "Extortion (blackmail) is obtaining property from another by means of a threat of future harm. Threats to expose a secret, damage a reputation, or cause economic harm (getting him fired) perfectly satisfy the elements of extortion."
    },
    {
        id: 12,
        topic: "Property Crimes / Robbery Distinctions",
        fp: "Ellen tells her coworker, Fred, 'Give me $500 tomorrow or I will tell the boss about your affair with the secretary.' Terrified of losing his job, Fred pays her the next day.",
        q: "Why is Ellen NOT guilty of robbery?",
        opts: [
            "Robbery requires a threat of immediate physical force rather than future economic or reputational harm.",
            "The money rightfully belonged to Fred.",
            "They were coworkers in a private setting.",
            "Fred voluntarily paid her."
        ],
        ans: 0,
        exp: "Robbery is the taking of personal property from the person or presence of another by force or the threat of IMMEDIATE physical harm. A threat to expose a secret to a boss 'tomorrow' involves no immediate physical danger, differentiating it entirely from robbery."
    },
    // FACT PATTERN 6 (Q13-Q15)
    {
        id: 13,
        topic: "Defenses / Voluntary Intoxication (Specific Intent)",
        fp: "Gary drinks heavily at a local bar until he is severely intoxicated. While stumbling home, he hallucinates that a pedestrian is a monster and stabs the pedestrian. Gary is charged with attempted murder and battery.",
        q: "Can Gary use voluntary intoxication as a defense to the specific intent crime of attempted murder?",
        opts: [
            "No, because he voluntarily consumed the alcohol.",
            "Yes, if the intoxication prevented him from forming specific intent.",
            "Yes, because voluntary intoxication serves as an absolute defense to any and all criminal charges under the modern penal code.",
            "No, because he used a deadly weapon."
        ],
        ans: 1,
        exp: "Attempted murder is a specific intent crime. Voluntary intoxication is a valid defense to specific intent crimes if the intoxication was so severe that it prevented the defendant from forming the requisite specific intent (in this case, the intent to kill a human being)."
    },
    {
        id: 14,
        topic: "Defenses / Voluntary Intoxication (General Intent)",
        fp: "Gary drinks heavily at a local bar until he is severely intoxicated. While stumbling home, he hallucinates that a pedestrian is a monster and stabs the pedestrian. Gary is charged with attempted murder and battery.",
        q: "Can Gary use voluntary intoxication as a defense to the general intent crime of battery?",
        opts: [
            "Yes, because his severe hallucinations rendered him temporarily insane under the law, excusing all general intent crimes.",
            "Yes, if he was physically unconscious.",
            "No, intoxication is no defense.",
            "No, because battery is a strict liability offense."
        ],
        ans: 2,
        exp: "Battery is a general intent crime. The law presumes that the requisite general intent or recklessness is supplied by the defendant's initial reckless act of voluntarily consuming the intoxicating substance. Voluntary intoxication is NEVER a defense to a general intent crime."
    },
    {
        id: 15,
        topic: "Defenses / Insanity & Voluntary Intoxication",
        fp: "Gary drinks heavily at a local bar until he is severely intoxicated. While stumbling home, he hallucinates that a pedestrian is a monster and stabs the pedestrian. Gary is charged with attempted murder and battery.",
        q: "Can Gary successfully claim the defense of legal insanity under the M'Naghten rule?",
        opts: [
            "Yes, because he lacked the ability to distinguish right from wrong.",
            "Yes, because the hallucination caused an irresistible impulse.",
            "No, because insanity requires a medical diagnosis prior to the act.",
            "No, because a temporary psychotic state caused solely by voluntary intoxication does not qualify as a mental disease or defect."
        ],
        ans: 3,
        exp: "Legal insanity must be the result of a recognized 'mental disease or defect.' A temporary psychotic state or hallucination brought on solely by the voluntary ingestion of drugs or alcohol does not qualify as a mental disease for the purposes of the insanity defense."
    },
    // FACT PATTERN 7 (Q16-Q18)
    {
        id: 16,
        topic: "Crimes against Person / Kidnapping",
        fp: "Harry grabs Irene on the street, forces her into his car, and drives 10 miles to an abandoned barn where he locks her in a room.",
        q: "Is Harry guilty of kidnapping?",
        opts: [
            "Yes, because he unlawfully confined her and moved her a substantial distance, increasing her risk of harm.",
            "No, because she was not physically injured.",
            "Yes, because any physical movement of a victim, regardless of distance or risk, automatically satisfies the asportation requirement.",
            "No, because the car was his own property."
        ],
        ans: 0,
        exp: "Kidnapping requires the unlawful confinement of a person accompanied by asportation (movement) that is substantial or increases the risk of harm to the victim. Moving a victim 10 miles from a public street to an isolated barn clearly satisfies this element."
    },
    {
        id: 17,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Harry grabs Irene on the street, forces her into his car, and drives 10 miles to an abandoned barn where he locks her in a room.",
        q: "Is Harry guilty of false imprisonment?",
        opts: [
            "No, because the greater charge of kidnapping completely supersedes and absorbs the lesser offense of false imprisonment.",
            "Yes, he confined her.",
            "No, because they were in a moving vehicle.",
            "Yes, but only after they reached the barn."
        ],
        ans: 1,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area. Harry locking Irene in the barn (and the car) against her will constitutes false imprisonment."
    },
    {
        id: 18,
        topic: "Crimes against Person / Assault",
        fp: "Harry grabs Irene on the street, forces her into his car, and drives 10 miles to an abandoned barn where he locks her in a room.",
        q: "If Harry pointed a gun at Irene to force her into the car, what additional crime against the person did he commit?",
        opts: [
            "Battery.",
            "Extortion.",
            "Assault, because he intentionally created a reasonable apprehension of imminent bodily harm.",
            "Common law robbery, because he used a deadly weapon to coerce her movements into the vehicle against her will."
        ],
        ans: 2,
        exp: "Assault is either an attempted battery or the intentional creation of a reasonable apprehension of imminent bodily harm. Pointing a loaded gun at someone to force compliance intentionally creates a highly reasonable apprehension of imminent physical injury."
    },
    // FACT PATTERN 8 (Q19-Q20)
    {
        id: 19,
        topic: "Property Crimes / Larceny by Trick",
        fp: "Jack borrows a lawnmower from his neighbor, telling the neighbor he will return it tomorrow. Jack secretly intends to sell it. He immediately takes it to a pawn shop and sells it.",
        q: "What property crime did Jack commit when he initially acquired the lawnmower?",
        opts: [
            "Embezzlement.",
            "False pretenses.",
            "Larceny, because he committed a trespassory taking.",
            "Larceny by trick, because he obtained custody via fraud with the specific intent to permanently deprive the owner at the time of the borrowing."
        ],
        ans: 3,
        exp: "Larceny by trick occurs when a defendant obtains mere CUSTODY (not title) of property through intentional fraud or deceit, with the contemporaneous intent to permanently deprive. Because the neighbor only lent the lawnmower, Jack obtained custody by trick, not title."
    },
    {
        id: 20,
        topic: "Property Crimes / False Pretenses Distinctions",
        fp: "Jack borrows a lawnmower from his neighbor, telling the neighbor he will return it tomorrow. Jack secretly intends to sell it. He immediately takes it to a pawn shop and sells it.",
        q: "Why is Jack NOT guilty of false pretenses?",
        opts: [
            "Custody was transferred, not title.",
            "Because the lawnmower's value did not exceed the statutory grand theft threshold required for false pretenses.",
            "Because he didn't use a fake check.",
            "Because it was a neighborly loan."
        ],
        ans: 0,
        exp: "False pretenses requires the defendant to obtain TITLE to the property by an intentional false statement. When someone lends an item to be returned, they only intend to transfer custody. Without the transfer of title, the crime cannot be false pretenses."
    },
    // FACT PATTERN 9 (Q21-Q23)
    {
        id: 21,
        topic: "Defenses / Duress",
        fp: "A violent criminal holds a gun to Kevin's head and tells Kevin to steal a car, or he will be shot immediately. Fearing for his life, Kevin steals the car.",
        q: "Can Kevin successfully claim the defense of duress?",
        opts: [
            "No, because he committed a felony.",
            "Yes, because he reasonably believed he faced an imminent threat of death or serious bodily injury.",
            "No, because the defense of duress is strictly unavailable for any property crime involving the unauthorized taking of a motor vehicle.",
            "Yes, but only if he returns the car."
        ],
        ans: 1,
        exp: "Duress is a valid defense if the defendant committed a crime because of a reasonable belief that a present, imminent threat of death or great bodily harm would be inflicted upon them if they did not comply. It is a defense to all crimes EXCEPT intentional homicide."
    },
    {
        id: 22,
        topic: "Defenses / Duress Limitation (Homicide)",
        fp: "A violent criminal holds a gun to Kevin's head and tells Kevin to steal a car, or he will be shot immediately. Fearing for his life, Kevin steals the car.\nSuppose instead the criminal ordered Kevin to shoot a bystander, and Kevin complied.",
        q: "Would duress be a valid defense to the homicide charge?",
        opts: [
            "Yes, if the threat was imminent and lethal.",
            "Yes, under the strict guidelines of the MPC.",
            "No, duress is never a defense to intentional murder.",
            "No, because the law requires a person to sacrifice their own life rather than take the life of an innocent third party under any circumstances."
        ],
        ans: 2,
        exp: "Under traditional common law, duress is NEVER a defense to an intentional killing. The rationale is that a person may not take the life of an innocent third party to save their own life."
    },
    {
        id: 23,
        topic: "Defenses / Duress vs. Necessity",
        fp: "A violent criminal holds a gun to Kevin's head and tells Kevin to steal a car, or he will be shot immediately. Fearing for his life, Kevin steals the car.",
        q: "Why is Kevin's defense classified as duress rather than necessity?",
        opts: [
            "Duress applies to property.",
            "Necessity requires a judge's order.",
            "They are absolutely identical in this context, providing the exact same legal protections for the defendant.",
            "Necessity involves choosing between evils usually from natural forces, while duress involves human coercion."
        ],
        ans: 3,
        exp: "The key distinction between the two defenses is the source of the threat. Duress involves coercion by another HUMAN being. Necessity (the choice of evils defense) typically involves pressure created by physical or NATURAL forces."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "Property Crimes / Forgery",
        fp: "Larry finds a blank check belonging to Mary. He signs Mary's name to it and fills it out for $500. He leaves the forged check in his desk drawer and never attempts to cash it.",
        q: "Is Larry guilty of forgery?",
        opts: [
            "Yes, he falsely made a writing with apparent legal significance and intent to defraud.",
            "No, he didn't cash it.",
            "No, because the check was blank when he found it, meaning it lacked any independent or inherent legal value.",
            "Yes, because stealing a check is forgery."
        ],
        ans: 0,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, with the specific intent to defraud. By signing Mary's name and filling out the check, Larry created a false document with apparent legal significance. The crime is complete upon the making."
    },
    {
        id: 25,
        topic: "Property Crimes / Forgery (Uttering)",
        fp: "Larry finds a blank check belonging to Mary. He signs Mary's name to it and fills it out for $500. He leaves the forged check in his desk drawer and never attempts to cash it.",
        q: "Does common law forgery require the document to actually be used or presented (uttered)?",
        opts: [
            "Yes, to prove intent.",
            "No, the crime is complete upon the fraudulent making or altering of the document, even if it is never published or cashed.",
            "Yes, to prove actual financial damages.",
            "No, unless it's a commercial bank check."
        ],
        ans: 1,
        exp: "Common law forgery is complete once the document is fraudulently made or altered with the intent to defraud. Actual use, presentation, or cashing of the document (known as 'uttering') is a separate and distinct criminal offense. Uttering is not required to complete the crime of forgery."
    }
];