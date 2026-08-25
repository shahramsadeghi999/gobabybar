const examData = [
    // ==========================================
    // FACT PATTERN 1
    // ==========================================
    {
        id: 1,
        topic: "Homicide / Causation / Self-Defense",
        fp: "Albert is walking home when he is confronted by Bruno, who demands Albert's wallet while holding a baseball bat. Albert pulls out a lawfully concealed handgun. Bruno sees the gun, drops the bat, puts his hands up, and says 'I give up, don't shoot!' Albert, angry at being robbed, shoots Bruno in the chest, killing him.",
        q: "Can Albert successfully claim self-defense to a homicide charge?",
        opts: [
            "No, because Bruno had clearly communicated his withdrawal and surrendered, terminating Albert's privilege to use deadly defensive force.",
            "Yes, because the initial use of a deadly weapon by an aggressor grants the victim an absolute, continuing privilege to use lethal force.",
            "No, because Albert possessed a concealed firearm, which automatically invalidates any self-defense claim under the common law duty to retreat.",
            "Yes, because the excitement of the robbery attempt created an irrebuttable presumption that Albert remained in reasonable fear for his life."
        ],
        ans: 0, // A
        exp: "Self-defense justifies deadly force only when the defender reasonably believes they are in imminent danger of death or great bodily harm. Once an aggressor unequivocally withdraws and communicates that withdrawal (dropping the bat, raising hands, and verbally surrendering), the imminent threat ends. The victim no longer has a privilege to use deadly force."
    },
    {
        id: 2,
        topic: "Homicide / Murder vs. Manslaughter",
        fp: "Albert is walking home when he is confronted by Bruno, who demands Albert's wallet while holding a baseball bat. Albert pulls out a lawfully concealed handgun. Bruno sees the gun, drops the bat, puts his hands up, and says 'I give up, don't shoot!' Albert, angry at being robbed, shoots Bruno in the chest, killing him.",
        q: "If Albert is charged with murder, what is the most likely outcome?",
        opts: [
            "He is guilty of involuntary manslaughter because he acted recklessly.",
            "He is guilty of first-degree murder under the felony murder rule.",
            "He is guilty of murder because he shot a surrendering person intentionally.",
            "He is guilty of voluntary manslaughter based on imperfect self-defense."
        ],
        ans: 2, // C
        exp: "Albert acted with the specific intent to kill (express malice) out of anger/revenge after the threat had passed. Because Bruno had clearly surrendered, Albert could not have held an honest (even if unreasonable) belief in the need for self-defense, defeating an imperfect self-defense claim for voluntary manslaughter."
    },
    // ==========================================
    // FACT PATTERN 2
    // ==========================================
    {
        id: 3,
        topic: "Inchoate Crimes / Solicitation",
        fp: "Clara wants to burn down her failing business to collect insurance money. She asks David, an arsonist, to do it for $5,000. David agrees and takes a $1,000 advance. Unbeknownst to Clara, David is an undercover police informant and immediately reports the plan to his superiors. David never goes to the business.",
        q: "With what inchoate crime can Clara immediately be charged when she first asks David?",
        opts: [
            "Conspiracy, because the payment of the advance money constitutes a valid overt act.",
            "Attempted arson, because soliciting an expert crosses the line into dangerous proximity.",
            "No crime, because David was a police informant lacking true criminal intent.",
            "Solicitation, because she commanded or urged another to commit a felony offense."
        ],
        ans: 3, // D
        exp: "Solicitation is complete the moment the defendant asks, urges, or commands another person to commit a crime with the specific intent that the crime be committed. It is irrelevant whether the person solicited agrees, refuses, or is an undercover informant."
    },
    {
        id: 4,
        topic: "Inchoate Crimes / Common Law Conspiracy",
        fp: "Clara wants to burn down her failing business to collect insurance money. She asks David, an arsonist, to do it for $5,000. David agrees and takes a $1,000 advance. Unbeknownst to Clara, David is an undercover police informant and immediately reports the plan to his superiors. David never goes to the business.",
        q: "Is Clara guilty of common law conspiracy to commit arson?",
        opts: [
            "Yes, because the Wharton rule does not apply to the crime of arson.",
            "No, because David lacked genuine criminal intent, defeating the bilateral agreement requirement.",
            "Yes, because Clara possessed the specific intent to commit the target offense.",
            "No, because the targeted business structure was not completely destroyed by fire."
        ],
        ans: 1, // B
        exp: "Under traditional common law, conspiracy requires a 'bilateral' agreement—a true meeting of the minds between at least two parties who actually intend to commit the crime. Because David was an informant feigning agreement, there was no true bilateral agreement."
    },
    {
        id: 5,
        topic: "Inchoate Crimes / MPC Conspiracy",
        fp: "Clara wants to burn down her failing business to collect insurance money. She asks David, an arsonist, to do it for $5,000. David agrees and takes a $1,000 advance. Unbeknownst to Clara, David is an undercover police informant and immediately reports the plan to his superiors. David never goes to the business.",
        q: "Assume the jurisdiction follows the Model Penal Code (MPC). Is Clara guilty of conspiracy?",
        opts: [
            "Yes, because the MPC unilateral approach requires only that Clara believed she was agreeing.",
            "No, because the MPC strictly maintains the traditional bilateral agreement requirement for all felonies.",
            "Yes, but only if David took a substantial step toward igniting the business structure.",
            "No, because police informants are statutorily incapable of forming the requisite mens rea."
        ],
        ans: 0, // A
        exp: "The Model Penal Code adopts a 'unilateral' approach to conspiracy. Under this approach, a defendant can be convicted of conspiracy if they themselves agree to commit a crime with another person, regardless of whether the other person (like an undercover officer) actually intends to carry out the agreement."
    },
    // ==========================================
    // FACT PATTERN 3
    // ==========================================
    {
        id: 6,
        topic: "Property Crimes / Larceny by Trick",
        fp: "Edgar goes to a car rental agency and presents a fake driver's license and a stolen credit card. He signs a rental agreement for a sports car for one week. Edgar intends to drive the car to Mexico and sell it. He drives the car away and never returns.",
        q: "What crime did Edgar commit when he drove the car off the lot?",
        opts: [
            "False pretenses, because the rental agency voluntarily transferred full title of the car.",
            "Larceny by trick, because he obtained mere custody through fraud with intent to steal.",
            "Embezzlement, because he was in lawful possession of the vehicle prior to the conversion.",
            "Common law robbery, because using a stolen credit card constitutes constructive physical force."
        ],
        ans: 1, // B
        exp: "Larceny by trick occurs when a defendant obtains possession (but not title) of property by intentional false statements or fraud, with the intent to permanently deprive the owner at the time of the taking. Because a rental agency only transfers temporary possession (custody/use), the crime is larceny by trick."
    },
    {
        id: 7,
        topic: "Property Crimes / False Pretenses",
        fp: "Edgar goes to a car rental agency and presents a fake driver's license and a stolen credit card. He signs a rental agreement for a sports car for one week. Edgar intends to drive the car to Mexico and sell it. He drives the car away and never returns.",
        q: "Why is Edgar NOT guilty of false pretenses?",
        opts: [
            "Because the rental agency only intended to transfer temporary possession, not legal title.",
            "Because automobiles are classified as real property fixtures under modern statutory schemes.",
            "Because he did not make a false representation of a past or existing fact.",
            "Because the value of the sports car exceeded the standard grand theft threshold."
        ],
        ans: 0, // A
        exp: "The distinction between larceny by trick and false pretenses turns on what the victim intends to transfer. If the victim intends to transfer only possession, the crime is larceny by trick. If the victim intends to transfer ownership (title), the crime is false pretenses. A rental agency clearly does not intend to transfer title."
    },
    // ==========================================
    // FACT PATTERN 4
    // ==========================================
    {
        id: 8,
        topic: "Defenses / Insanity & Voluntary Intoxication",
        fp: "Frank has a severe mental illness. He also drinks heavily. One night, after consuming ten beers, Frank hallucinates that his roommate, George, is an alien assassin. Frank attacks George with a lamp, causing serious injuries. Psychiatric experts testify that Frank's hallucination was caused entirely by his voluntary alcohol consumption interacting with his illness, and that without the alcohol, he would not have hallucinated.",
        q: "Can Frank successfully assert an insanity defense under the M'Naghten test?",
        opts: [
            "Yes, because he did not understand the nature and quality of his physical act.",
            "Yes, because the mental illness prevented him from conforming his conduct to the law.",
            "No, because his belief that George was an alien assassin is factually impossible.",
            "No, because temporary insanity caused solely by voluntary intoxication is not a recognized defense."
        ],
        ans: 3, // D
        exp: "Legal insanity must be the result of a recognized 'mental disease or defect.' A temporary psychotic state or hallucination brought on solely by the voluntary ingestion of drugs or alcohol does not qualify as a mental disease for the purposes of the insanity defense."
    },
    {
        id: 9,
        topic: "Defenses / Voluntary Intoxication Application",
        fp: "Frank has a severe mental illness. He also drinks heavily. One night, after consuming ten beers, Frank hallucinates that his roommate, George, is an alien assassin. Frank attacks George with a lamp, causing serious injuries. Psychiatric experts testify that Frank's hallucination was caused entirely by his voluntary alcohol consumption interacting with his illness, and that without the alcohol, he would not have hallucinated.",
        q: "For which of the following charges could Frank's voluntary intoxication potentially serve as a defense?",
        opts: [
            "Battery, because it requires the general intent to cause harmful physical contact.",
            "Attempted murder, because it requires the specific intent to kill the victim.",
            "Involuntary manslaughter, because it requires gross negligence or criminal recklessness.",
            "Aggravated battery, because it is universally classified as a strict liability offense."
        ],
        ans: 1, // B
        exp: "Voluntary intoxication is only a defense to specific intent crimes, provided the intoxication was severe enough to prevent the defendant from forming the requisite specific intent. Attempted murder is a specific intent crime. It is never a defense to general intent crimes (like battery) or crimes of recklessness/negligence."
    },
    {
        id: 10,
        topic: "Crimes against Person / Battery & Intoxication",
        fp: "Frank has a severe mental illness. He also drinks heavily. One night, after consuming ten beers, Frank hallucinates that his roommate, George, is an alien assassin. Frank attacks George with a lamp, causing serious injuries. Psychiatric experts testify that Frank's hallucination was caused entirely by his voluntary alcohol consumption interacting with his illness, and that without the alcohol, he would not have hallucinated.",
        q: "If Frank is charged with general intent Battery, will his voluntary intoxication excuse his conduct?",
        opts: [
            "Yes, because severe intoxication negates all forms of criminal mens rea.",
            "Yes, if the intoxication rendered him physically unconscious during the attack.",
            "No, because voluntary intoxication is never a defense to a general intent crime.",
            "No, because battery requires proof of premeditation and deliberate criminal planning."
        ],
        ans: 2, // C
        exp: "Battery is a general intent crime. The law presumes that the requisite general intent or recklessness for such crimes is supplied by the defendant's initial reckless act of voluntarily consuming the intoxicating substance. Therefore, voluntary intoxication provides no defense to a general intent charge."
    },
    // ==========================================
    // FACT PATTERN 5
    // ==========================================
    {
        id: 11,
        topic: "Accomplice Liability",
        fp: "Helen and Ivan plan to burglarize a warehouse. Helen agrees to act as the lookout and stays in the getaway car. Ivan breaks into the warehouse. Inside, Ivan is surprised by a night watchman. Ivan panics, pulls out a gun Helen didn't know he had, and shoots the watchman dead. Ivan runs out, jumps in the car, and Helen drives them away.",
        q: "Is Helen guilty of the burglary?",
        opts: [
            "No, because she never physically entered the warehouse structure at any point.",
            "Yes, as an accomplice, because she aided and abetted with the intent to commit the crime.",
            "No, because her participation was limited to acting as a passive observer outside.",
            "Yes, but only as an accessory after the fact for driving the getaway vehicle."
        ],
        ans: 1, // B
        exp: "An accomplice is one who aids, abets, encourages, or facilitates the commission of a crime with the intent that the crime be committed. Acting as a lookout and getaway driver clearly constitutes aiding and abetting. Accomplices are liable for the principal crime."
    },
    {
        id: 12,
        topic: "Homicide / Felony Murder (Co-Felon Liability)",
        fp: "Helen and Ivan plan to burglarize a warehouse. Helen agrees to act as the lookout and stays in the getaway car. Ivan breaks into the warehouse. Inside, Ivan is surprised by a night watchman. Ivan panics, pulls out a gun Helen didn't know he had, and shoots the watchman dead. Ivan runs out, jumps in the car, and Helen drives them away.",
        q: "Can Helen be convicted of felony murder for the watchman's death?",
        opts: [
            "Yes, because the homicide was a reasonably foreseeable consequence of the armed burglary.",
            "No, because she was entirely unaware that Ivan was carrying a lethal weapon.",
            "Yes, because all participants in any misdemeanor are strictly liable for resulting deaths.",
            "No, because the fatal shot was fired inside the building while she was outside."
        ],
        ans: 0, // A
        exp: "Under the felony murder rule, all co-felons are liable for a death caused by one of them during the commission of an inherently dangerous felony (like burglary), provided the death was a foreseeable result of the felony. A confrontation leading to death during a commercial burglary is generally considered foreseeable, even if the co-felon didn't know about the gun."
    },
    {
        id: 13,
        topic: "Homicide / Felony Murder (Res Gestae)",
        fp: "Helen and Ivan plan to burglarize a warehouse. Helen agrees to act as the lookout and stays in the getaway car. Ivan breaks into the warehouse. Inside, Ivan is surprised by a night watchman. Ivan panics, pulls out a gun Helen didn't know he had, and shoots the watchman dead. Ivan runs out, jumps in the car, and Helen drives them away.",
        q: "What is the legal status of Helen's driving the getaway car?",
        opts: [
            "It constitutes an independent intervening cause that absolves Ivan of all criminal homicide liability.",
            "It serves as the requisite overt act for a charge of solicitation to commit robbery.",
            "It extends the 'res gestae' of the felony, making any deaths during flight subject to felony murder.",
            "It automatically reduces her level of culpability from a principal to an accessory after the fact."
        ],
        ans: 2, // C
        exp: "The 'res gestae' of a felony includes the immediate flight from the scene. If a death occurs during the escape, before the felons have reached a place of temporary safety, the felony murder rule still applies. Helen driving the car is part of that ongoing felony."
    },
    // ==========================================
    // FACT PATTERN 6
    // ==========================================
    {
        id: 14,
        topic: "Property Crimes / Extortion",
        fp: "Karen confronts her coworker, Larry, and says, 'I know you've been stealing office supplies. Give me $500 by tomorrow, or I will report you to the boss and you will be fired.' Larry is terrified of losing his job and pays Karen the $500 the next day.",
        q: "Of what crime is Karen guilty?",
        opts: [
            "Robbery, because she used a threat to obtain personal property from Larry's immediate presence.",
            "Embezzlement, because she leveraged her position as a coworker to acquire the disputed funds.",
            "Extortion, because she obtained property by threatening future harm rather than immediate physical force.",
            "Larceny by trick, because she fraudulently deceived Larry regarding her intent to report him."
        ],
        ans: 2, // C
        exp: "Extortion (blackmail) is obtaining property by means of a threat of future harm (including threats to expose a secret, report a crime, or cause economic harm). It differs from robbery, which requires a threat of immediate physical harm."
    },
    {
        id: 15,
        topic: "Property Crimes / Robbery vs. Extortion",
        fp: "Karen confronts her coworker, Larry, and says, 'I know you've been stealing office supplies. Give me $500 by tomorrow, or I will report you to the boss and you will be fired.' Larry is terrified of losing his job and pays Karen the $500 the next day.",
        q: "Why does Karen's conduct NOT constitute robbery?",
        opts: [
            "Because the threat was of future economic harm rather than immediate physical injury.",
            "Because the amount of money taken was below the statutory threshold for felony robbery.",
            "Because Larry voluntarily handed over the money without offering any physical resistance.",
            "Because the transaction occurred between two employees within a private commercial workplace."
        ],
        ans: 0, // A
        exp: "Robbery requires a taking from the person or presence of the victim accomplished by force or the threat of IMMEDIATE physical harm. A threat to report someone to their boss tomorrow is a threat of future, non-physical harm, classifying the crime as extortion."
    },
    // ==========================================
    // FACT PATTERN 7
    // ==========================================
    {
        id: 16,
        topic: "Crimes against Person / Assault",
        fp: "Mark approaches Nancy on the street, points a realistic-looking toy gun at her, and demands she walk into a nearby alley so he can rob her without being seen. Nancy believes the gun is real and walks 50 feet into the alley. Mark takes her watch and runs away.",
        q: "Did Mark commit an assault against Nancy?",
        opts: [
            "No, because the gun was a toy and therefore objectively incapable of inflicting actual physical harm.",
            "Yes, because he intentionally created a reasonable apprehension of imminent bodily harm in the victim.",
            "No, because he did not attempt to physically strike her with the toy weapon at any point.",
            "Yes, because any verbal demand for property automatically constitutes an assault under the common law."
        ],
        ans: 1, // B
        exp: "Assault can be committed by intentionally placing another in reasonable apprehension of imminent bodily harm. Even though the gun was a toy, Nancy reasonably believed it was real. Her apprehension of harm was reasonable, satisfying the elements of assault."
    },
    {
        id: 17,
        topic: "Crimes against Person / Kidnapping",
        fp: "Mark approaches Nancy on the street, points a realistic-looking toy gun at her, and demands she walk into a nearby alley so he can rob her without being seen. Nancy believes the gun is real and walks 50 feet into the alley. Mark takes her watch and runs away.",
        q: "Is Mark guilty of kidnapping?",
        opts: [
            "Yes, because moving her 50 feet into an alley substantially increased the risk of harm.",
            "No, because moving a victim 50 feet is always considered incidental to a standard robbery.",
            "Yes, because any movement of a victim, regardless of distance, satisfies the asportation element perfectly.",
            "No, because Nancy walked voluntarily into the alley without being physically dragged by the defendant."
        ],
        ans: 0, // A
        exp: "Kidnapping requires unlawful confinement and substantial asportation (movement). While short movements purely incidental to a robbery (e.g., from the cash register to the safe) may not suffice, forcing a victim from a public street into a secluded alley increases the risk of harm and is generally considered substantial movement."
    },
    {
        id: 18,
        topic: "Property Crimes / Armed Robbery",
        fp: "Mark approaches Nancy on the street, points a realistic-looking toy gun at her, and demands she walk into a nearby alley so he can rob her without being seen. Nancy believes the gun is real and walks 50 feet into the alley. Mark takes her watch and runs away.",
        q: "Can Mark be convicted of armed robbery?",
        opts: [
            "Yes, because the objective fear experienced by the victim elevates the crime to an armed offense.",
            "No, because a toy gun is not a deadly weapon, though he is guilty of simple robbery.",
            "Yes, in many jurisdictions, if the toy gun appeared real and was used to intimidate the victim.",
            "No, because he did not make actual physical contact with the victim during the theft process."
        ],
        ans: 2, // C
        exp: "In many jurisdictions, the definition of 'armed' robbery or robbery with a deadly weapon is satisfied if the defendant uses a toy or fake weapon that is designed to look real, and the victim reasonably believes it to be a real deadly weapon."
    },
    // ==========================================
    // FACT PATTERN 8
    // ==========================================
    {
        id: 19,
        topic: "Homicide / Causation (Medical Malpractice)",
        fp: "Oscar stabs Peter in the abdomen, intending to kill him. Peter is rushed to the hospital. Dr. Quinn, the attending surgeon, operates while highly intoxicated and accidentally severs a major artery, causing Peter to bleed to death on the operating table. Medical experts agree Peter would have survived the initial stab wound with proper care.",
        q: "Is Oscar the proximate cause of Peter's death?",
        opts: [
            "No, because Dr. Quinn's grossly negligent surgery was an unforeseeable independent superseding cause of death.",
            "Yes, because medical malpractice is always considered a foreseeable dependent intervening act under common law rules.",
            "No, because while ordinary medical negligence is foreseeable, grossly negligent or reckless medical care is a superseding cause.",
            "Yes, because the 'eggshell skull' rule holds Oscar strictly liable for all subsequent hospital complications."
        ],
        ans: 2, // C
        exp: "An original tortfeasor or criminal actor is liable for foreseeable intervening acts, including ordinary medical negligence during treatment of the wound. However, grossly negligent, reckless, or intentional medical misconduct (like operating while highly intoxicated) is considered an unforeseeable superseding cause that breaks the chain of proximate causation."
    },
    {
        id: 20,
        topic: "Inchoate Crimes / Attempted Murder",
        fp: "Oscar stabs Peter in the abdomen, intending to kill him. Peter is rushed to the hospital. Dr. Quinn, the attending surgeon, operates while highly intoxicated and accidentally severs a major artery, causing Peter to bleed to death on the operating table. Medical experts agree Peter would have survived the initial stab wound with proper care.",
        q: "If Dr. Quinn's actions are deemed a superseding cause, what is Oscar's highest criminal liability?",
        opts: [
            "Attempted murder, because he had the specific intent to kill and took a substantial step.",
            "Aggravated battery, because the death of the victim prevents any inchoate murder prosecution from proceeding.",
            "Involuntary manslaughter, because he recklessly initiated a chain of events that ended in the victim's death.",
            "Second-degree murder, because the use of a deadly weapon implies a depraved heart mental state."
        ],
        ans: 0, // A
        exp: "If the chain of proximate causation for the homicide is broken by a superseding cause, Oscar cannot be convicted of murder. However, because he stabbed Peter with the specific intent to kill him, he is fully liable for attempted murder."
    },
    // ==========================================
    // FACT PATTERN 9
    // ==========================================
    {
        id: 21,
        topic: "Property Crimes / Burglary (Common Law)",
        fp: "Rachel wants to destroy a competitor's warehouse. She hires Steve to do it. At midnight, Steve breaks a window, climbs inside, and pours gasoline on the floor. Before he can light the match, a security guard captures him.",
        q: "Is Steve guilty of common law burglary?",
        opts: [
            "Yes, because he broke and entered the structure at night with the specific intent to commit a felony.",
            "No, because the building was a commercial warehouse rather than the dwelling house of another person.",
            "Yes, because the pouring of gasoline constitutes a completed felony offense within the enclosed structure.",
            "No, because he was apprehended before he could successfully ignite the accelerant and cause structural damage."
        ],
        ans: 1, // B
        exp: "Common law burglary strictly requires the breaking and entering of a DWELLING HOUSE of another. A commercial warehouse is not a dwelling house. (Under modern statutes, it would be burglary, but the question specifies common law)."
    },
    {
        id: 22,
        topic: "Inchoate Crimes / Attempted Arson",
        fp: "Rachel wants to destroy a competitor's warehouse. She hires Steve to do it. At midnight, Steve breaks a window, climbs inside, and pours gasoline on the floor. Before he can light the match, a security guard captures him.",
        q: "Is Steve guilty of attempted arson?",
        opts: [
            "No, because mere preparation does not satisfy the actus reus requirement for an attempted property crime.",
            "Yes, because entering the building and pouring gasoline constitutes a substantial step toward the malicious burning.",
            "Yes, because he possessed the specific intent to burn the structure and came in dangerous proximity to success.",
            "No, because the security guard's intervention rendered the completion of the offense factually impossible to achieve."
        ],
        ans: 2, // C
        exp: "Attempt requires specific intent and an overt act beyond mere preparation. Breaking in and pouring gasoline is a clear substantial step (MPC) and places the defendant in dangerous proximity (common law) to completing the arson."
    },
    {
        id: 23,
        topic: "Inchoate Crimes / Conspiracy",
        fp: "Rachel wants to destroy a competitor's warehouse. She hires Steve to do it. At midnight, Steve breaks a window, climbs inside, and pours gasoline on the floor. Before he can light the match, a security guard captures him.",
        q: "Can Rachel be convicted of conspiracy to commit arson?",
        opts: [
            "No, because she was not physically present at the warehouse when the overt act was committed.",
            "Yes, because she entered into a mutual agreement with Steve and he performed an overt act.",
            "Yes, because soliciting another person to commit a felony automatically establishes a binding criminal conspiracy agreement.",
            "No, because the target offense of arson was never successfully completed by the hired primary actor."
        ],
        ans: 1, // B
        exp: "Conspiracy requires an agreement between two or more people to commit a crime, and usually an overt act. Rachel and Steve agreed to the arson, and Steve's breaking in and pouring gas constitutes a clear overt act in furtherance of the conspiracy. Physical presence at the scene is not required."
    },
    // ==========================================
    // FACT PATTERN 10
    // ==========================================
    {
        id: 24,
        topic: "Defenses / Entrapment",
        fp: "An undercover officer approaches Tim, who has no criminal record and is known in the community as a law-abiding citizen. The officer begs Tim to procure illegal narcotics for him, claiming he is in agonizing pain from a terminal illness. After refusing five times, Tim finally gives in out of extreme sympathy, buys the drugs, and gives them to the officer.",
        q: "Will Tim likely succeed with an entrapment defense?",
        opts: [
            "Yes, because the officer's extreme emotional appeals induced a person not otherwise predisposed to commit the crime.",
            "No, because entrapment is never a valid defense when the defendant successfully completes the prohibited physical act.",
            "Yes, because undercover officers are legally barred from initiating conversations regarding narcotics with civilian individuals.",
            "No, because Tim voluntarily accepted the money and delivered the narcotics, demonstrating independent criminal intent."
        ],
        ans: 0, // A
        exp: "Entrapment is a valid defense if the criminal design originated with law enforcement, and the defendant was not predisposed to commit the crime prior to the government's contact. The officer's repeated begging and emotional appeals overcame the will of a non-predisposed citizen."
    },
    {
        id: 25,
        topic: "Defenses / Entrapment Elements",
        fp: "An undercover officer approaches Tim, who has no criminal record and is known in the community as a law-abiding citizen. The officer begs Tim to procure illegal narcotics for him, claiming he is in agonizing pain from a terminal illness. After refusing five times, Tim finally gives in out of extreme sympathy, buys the drugs, and gives them to the officer.",
        q: "What are the two core elements of a valid subjective entrapment defense in a majority of jurisdictions?",
        opts: [
            "Government inducement of the crime, and the presence of a deadly weapon during the transaction.",
            "The defendant's lack of predisposition to commit the crime, and the absence of any financial compensation.",
            "The criminal design originated with law enforcement, and the defendant was not predisposed to commit the act.",
            "Extreme psychological coercion by police, and a complete lack of physical evidence supporting the prosecution's case."
        ],
        ans: 2, // C
        exp: "In a majority of jurisdictions (subjective test), entrapment requires showing: (1) the criminal plan originated with the government (inducement), and (2) the defendant was not predisposed to commit the crime prior to the government contact."
    }
];