const examData = [
    {
        id: 1,
        topic: "Property Crimes / Larceny",
        fp: "Dan takes Victor's umbrella from a restaurant coat rack, genuinely believing it is his own. Later that day, Dan realizes it actually belongs to Victor but decides to keep it anyway.",
        q: "Is Dan guilty of common law larceny?",
        opts: [
            "Yes, because he ultimately formed the intent to steal when he decided to keep the umbrella.",
            "No, because the continuing trespass doctrine applies whenever a person takes the property of another, regardless of their initial state of mind at the time of the physical taking.",
            "No, because the initial taking was not trespassory, which is required for larceny.",
            "Yes, because the taking of personal property without permission is a strict liability offense under the common law definitions of theft."
        ],
        ans: 2,
        exp: "Larceny requires a trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. The intent to steal must exist at the time of the taking. Because Dan honestly believed the umbrella was his, the initial taking was not wrongful (trespassory). Thus, the continuing trespass doctrine does not apply."
    },
    {
        id: 2,
        topic: "Property Crimes / Burglary",
        fp: "Aaron knocks on Betty's door at night. When she answers, Aaron points a gun at her and forces his way inside to steal her television.",
        q: "Did Aaron commit a 'breaking' for the purposes of common law burglary?",
        opts: [
            "No, because Betty opened the door voluntarily, meaning the physical threshold was not breached by Aaron's force.",
            "Yes, but only if the incident occurred during the nighttime hours as required by the strict common law rules.",
            "No, because a breaking requires actual physical damage to the structure of the dwelling house.",
            "Yes, because gaining entry by threat of force constitutes a constructive breaking."
        ],
        ans: 3,
        exp: "Common law burglary requires a breaking and entering. A 'breaking' can be actual or constructive. Gaining entry through fraud, trick, or threat of force (such as pointing a gun) satisfies the requirement for a constructive breaking."
    },
    {
        id: 3,
        topic: "Homicide / Depraved Heart Murder",
        fp: "Carl, angry at his boss, fires a rifle into the window of a crowded train. He does not intend to kill anyone, but merely wants to cause a panic to disrupt the train schedule. The bullet kills a passenger.",
        q: "With what crime is Carl most likely to be charged?",
        opts: [
            "Murder, because firing a lethal weapon into a crowded train demonstrates a reckless indifference to an unjustifiably high risk to human life.",
            "Voluntary manslaughter, because Carl acted out of sudden anger directed at his employer.",
            "Involuntary manslaughter, because Carl specifically lacked the intent to kill or injure anyone.",
            "First-degree murder, because the use of a firearm creates an irrebuttable presumption of premeditation."
        ],
        ans: 0,
        exp: "Murder requires malice aforethought, which can be satisfied by a 'depraved heart'—a reckless indifference to an unjustifiably high risk to human life. Firing a rifle into a crowded train clearly demonstrates this level of extreme recklessness, satisfying the malice requirement for murder."
    },
    {
        id: 4,
        topic: "Inchoate Crimes / Attempt",
        fp: "Greg intends to poison his wife. He buys the poison and pours it into her evening tea. Before she drinks it, she accidentally spills the tea on the floor.",
        q: "Is Greg guilty of attempted murder?",
        opts: [
            "No, because the wife was never in actual physical danger since she spilled the tea before consuming any of it.",
            "Yes, because he had the specific intent to kill and committed an overt act beyond mere preparation.",
            "No, because the crime was factually impossible to complete once the tea was spilled onto the kitchen floor.",
            "Yes, but only if the prosecution can prove that the specific poison used was legally classified as a lethal substance under state law."
        ],
        ans: 1,
        exp: "Attempt requires the specific intent to commit the target crime and an overt act in furtherance of that intent. Pouring poison into the victim's drink goes well beyond mere preparation and constitutes a substantial step, making Greg guilty of attempted murder despite the accidental spill."
    },
    {
        id: 5,
        topic: "Property Crimes / Robbery",
        fp: "Hank approaches a woman from behind and swiftly snatches her purse from her shoulder. The woman does not resist and is not harmed.",
        q: "Is Hank guilty of robbery?",
        opts: [
            "No, because the snatching did not involve sufficient force or intimidation to elevate the crime from larceny.",
            "Yes, because taking property directly from the person of another automatically satisfies the force requirement.",
            "Yes, because Hank permanently deprived the victim of her property while she was physically present.",
            "No, because Hank did not use a deadly weapon to accomplish the taking of the victim's purse."
        ],
        ans: 0,
        exp: "Robbery is the trespassory taking of personal property from the person or presence of another by force or intimidation. A sudden purse-snatching without resistance or injury generally lacks the requisite force or fear to constitute robbery, making it larceny."
    },
    {
        id: 6,
        topic: "Property Crimes / Embezzlement",
        fp: "Irene is a cashier at a retail store. A customer hands her a $100 bill for a purchase. Instead of putting it in the register, Irene slips it into her pocket.",
        q: "Of what crime is Irene guilty?",
        opts: [
            "Robbery, because she was on duty.",
            "Larceny by trick, because she deceived the customer.",
            "Embezzlement, because she had lawful possession of the money as an employee.",
            "False pretenses, because she took title to the money."
        ],
        ans: 2,
        exp: "Embezzlement is the fraudulent conversion of the property of another by one who is already in lawful possession. As an employee receiving funds on behalf of her employer, Irene had lawful possession of the $100 before placing it in the till. Her conversion of it makes her guilty of embezzlement."
    },
    {
        id: 7,
        topic: "Defenses / Self-Defense",
        fp: "Jack punches Kevin in the face during an argument. Kevin responds by pulling out a gun and shooting Jack dead.",
        q: "Can Kevin successfully claim self-defense?",
        opts: [
            "Yes, because Jack was the initial aggressor in the confrontation.",
            "No, because Kevin used deadly force in response to non-deadly force.",
            "Yes, because Kevin had no duty to retreat under the circumstances.",
            "No, because Jack's punch constituted a continuous battery."
        ],
        ans: 1,
        exp: "Self-defense allows the use of force proportionate to the threat. Deadly force may only be used to repel an imminent threat of death or serious bodily harm. A simple punch (non-deadly force) does not justify a lethal response."
    },
    {
        id: 8,
        topic: "Property Crimes / False Pretenses",
        fp: "Larry sells a painting to Mary, lying that it is a genuine Picasso. Mary pays him $10,000 for it.",
        q: "What crime has Larry committed?",
        opts: [
            "Larceny by trick, because Mary only gave him custody of the funds.",
            "Embezzlement, because he converted the money.",
            "Robbery, because he stole from her presence.",
            "False pretenses, because he obtained title to the money through an intentional false statement."
        ],
        ans: 3,
        exp: "False pretenses occurs when a defendant obtains TITLE to the property of another by an intentional false statement of past or existing fact, with intent to defraud. Because Mary intended to transfer ownership (title) of the money to Larry in the sale, the crime is false pretenses."
    },
    {
        id: 9,
        topic: "Inchoate Crimes / Conspiracy",
        fp: "Nancy and Olivia agree to rob a bank. Nancy buys a getaway car. The next day, they change their minds and decide not to go through with it.",
        q: "Are they guilty of conspiracy?",
        opts: [
            "Yes, because the crime was complete upon the agreement and the overt act.",
            "No, because they voluntarily abandoned the criminal plan before any actual harm occurred.",
            "No, because purchasing a getaway car does not constitute a sufficient substantial step.",
            "Yes, but only if the prosecution can prove that they intended to use a deadly weapon."
        ],
        ans: 0,
        exp: "Conspiracy requires an agreement to commit a crime and, in most jurisdictions, an overt act in furtherance of the agreement. The crime is complete once the overt act (buying the car) is performed. Subsequent abandonment is not a defense to the conspiracy charge itself."
    },
    {
        id: 10,
        topic: "Defenses / Insanity (M'Naghten)",
        fp: "Paul suffers from a mental disease that makes him believe his neighbor is a demon. Believing he is saving the world, Paul kills the neighbor.",
        q: "Under the M'Naghten rule, is Paul legally insane?",
        opts: [
            "No, because he possessed the physical capacity to commit the homicide.",
            "Yes, because he lacked the ability to control his irresistible impulses.",
            "Yes, because he did not know that his act was legally or morally wrong.",
            "No, because his actions were the direct result of voluntary intoxication."
        ],
        ans: 2,
        exp: "Under the M'Naghten rule, a defendant is insane if a disease of the mind caused a defect of reason such that the defendant lacked the ability to know the wrongfulness of their actions or understand the nature and quality of their actions. Believing he was killing a demon satisfies this test."
    },
    {
        id: 11,
        topic: "Crimes against the Person / Battery",
        fp: "Quinn throws a rock at Ron, intending to hit him. Ron ducks, and the rock misses him entirely, shattering a window.",
        q: "Is Quinn guilty of battery against Ron?",
        opts: [
            "Yes, because he had the specific intent to cause physical harm to Ron.",
            "Yes, because the rock shattered the window, which satisfies the contact element.",
            "No, because Ron was able to successfully avoid the physical impact.",
            "No, because the rock did not make harmful or offensive contact with Ron."
        ],
        ans: 3,
        exp: "Battery requires the unlawful application of force to the person of another resulting in harmful or offensive contact. Because the rock missed Ron, there was no contact, and thus no battery (though Quinn is guilty of assault)."
    },
    {
        id: 12,
        topic: "Accomplice Liability",
        fp: "Sam knows that Tom plans to burglarize a house. Sam lends Tom his crowbar to help him break in, but Tom gets cold feet and never commits the burglary.",
        q: "Is Sam guilty of accomplice liability for burglary?",
        opts: [
            "No, because the target crime of burglary was never actually committed.",
            "Yes, because he provided the tools necessary to complete the crime.",
            "Yes, because he had knowledge of Tom's criminal intentions.",
            "No, because Sam did not physically participate in the breaking and entering."
        ],
        ans: 0,
        exp: "Accomplice liability is derivative. A person cannot be convicted as an accomplice to a substantive crime unless the principal actually commits the target crime or an attempt. Since Tom never committed the burglary, Sam cannot be an accomplice to it."
    },
    {
        id: 13,
        topic: "Homicide / Voluntary Manslaughter",
        fp: "Victor comes home and finds his husband in bed with another man. Enraged, Victor immediately grabs a heavy lamp and bludgeons the man to death.",
        q: "What is the most appropriate homicide charge for Victor?",
        opts: [
            "First-degree murder, because the killing was intentional and caused by a deadly weapon.",
            "Voluntary manslaughter, because Victor acted in the heat of passion after adequate provocation.",
            "Second-degree murder, because Victor acted with a depraved heart.",
            "Involuntary manslaughter, because the killing occurred during a sudden physical altercation."
        ],
        ans: 1,
        exp: "Voluntary manslaughter is an intentional killing mitigated by adequate provocation that causes the defendant to act in the heat of passion without sufficient time to cool off. Discovering a spouse in the act of adultery is a classic example of adequate provocation."
    },
    {
        id: 14,
        topic: "Homicide / Felony Murder Rule",
        fp: "Wendy commits a highly dangerous armed robbery at a jewelry store. While speeding away in her getaway car, she accidentally strikes and kills a pedestrian crossing the street.",
        q: "Is Wendy guilty of felony murder?",
        opts: [
            "No, because the pedestrian's death was accidental and lacked malice aforethought.",
            "No, because the robbery was completely terminated the moment she left the store.",
            "Yes, because driving a getaway car is an independent inherently dangerous felony.",
            "Yes, because the death occurred during her immediate flight from the robbery."
        ],
        ans: 3,
        exp: "The felony murder rule applies to deaths that occur during the commission of, or immediate flight from, an inherently dangerous felony. Wendy was still in the 'res gestae' (immediate flight) of the robbery when she hit the pedestrian, making her liable for felony murder."
    },
    {
        id: 15,
        topic: "Property Crimes / Larceny by Trick",
        fp: "Xander asks to borrow Yvette's lawnmower for the weekend, secretly intending to sell it to a pawn shop. Yvette agrees. Xander immediately sells the lawnmower.",
        q: "What crime has Xander committed?",
        opts: [
            "False pretenses, because he obtained title to the lawnmower.",
            "Embezzlement, because he was in lawful possession of the lawnmower.",
            "Larceny by trick, because he obtained custody through fraud with intent to steal.",
            "Robbery, because he permanently deprived Yvette of her property."
        ],
        ans: 2,
        exp: "Larceny by trick occurs when a defendant obtains mere CUSTODY (not title) of property through intentional fraud or deceit, with the intent to permanently deprive. Because Yvette only lent the lawnmower, Xander obtained custody by trick, not title."
    },
    {
        id: 16,
        topic: "Property Crimes / Arson",
        fp: "Zack, angry at his school, sets fire to the school building at night. The fire burns the exterior walls before being extinguished.",
        q: "Is Zack guilty of common law arson?",
        opts: [
            "Yes, because he maliciously burned the structure.",
            "No, because the building was not completely destroyed.",
            "No, because the school building is not a dwelling house.",
            "Yes, because the fire caused actual charring to the walls."
        ],
        ans: 2,
        exp: "Common law arson is the malicious burning of the dwelling house of another. A school building is a commercial or public structure, not a dwelling house, precluding a conviction under the strict common law definition."
    },
    {
        id: 17,
        topic: "Property Crimes / Extortion",
        fp: "Alice threatens to publish embarrassing photos of Bob unless Bob gives her $1,000. Bob complies and hands over the cash.",
        q: "What crime has Alice committed?",
        opts: [
            "Extortion, because she obtained property through a threat of future harm.",
            "Robbery, because she used a threat of harm to obtain the money.",
            "Larceny, because she took Bob's money without his genuine consent.",
            "Embezzlement, because she wrongfully converted Bob's funds."
        ],
        ans: 0,
        exp: "Extortion (blackmail) is the obtaining of property from another by means of threats of future harm (including reputational harm or exposing secrets). Unlike robbery, the threat does not need to be of immediate physical harm."
    },
    {
        id: 18,
        topic: "Defenses / Mistake of Fact",
        fp: "Chris takes a coat from a restaurant rack, genuinely believing it is his own because it looks identical. It actually belongs to Dave.",
        q: "Is Chris guilty of larceny?",
        opts: [
            "Yes, because he took the personal property of another person.",
            "Yes, because his mistake must be objectively reasonable to be a defense.",
            "No, because Dave abandoned the coat by leaving it on the rack.",
            "No, because his honest mistake of fact negates the intent to steal."
        ],
        ans: 3,
        exp: "Larceny requires the specific intent to permanently deprive the owner of their property. An honest mistake of fact, even if unreasonable, negates the specific intent required for the crime. Since Chris believed the coat was his, he lacked the intent to steal."
    },
    {
        id: 19,
        topic: "Crimes against the Person / Kidnapping",
        fp: "Evan forces Fiona into his car at gunpoint and drives her 50 miles away to an abandoned cabin.",
        q: "What crime has Evan committed?",
        opts: [
            "False imprisonment only, because Fiona was not physically harmed during the transport.",
            "Assault, because he created a reasonable apprehension of imminent bodily harm.",
            "Kidnapping, because he confined Fiona and moved her a substantial distance by force.",
            "Robbery, because he deprived Fiona of her freedom of movement permanently."
        ],
        ans: 2,
        exp: "Kidnapping requires the unlawful confinement of a person accompanied by asportation (movement) that is substantial or increases the risk of harm. Forcing someone into a car and driving them 50 miles clearly satisfies the asportation requirement."
    },
    {
        id: 20,
        topic: "Defenses / Voluntary Intoxication",
        fp: "George drinks heavily and becomes severely intoxicated. He then breaks into a house to steal a television, but passes out on the floor before taking anything.",
        q: "Can George's voluntary intoxication serve as a defense to burglary?",
        opts: [
            "Yes, if the intoxication prevented him from forming the specific intent to commit a felony inside.",
            "No, because voluntary intoxication is never a defense to any criminal charge.",
            "Yes, because burglary is a general intent crime that is negated by severe intoxication.",
            "No, because he successfully completed the breaking and entering elements."
        ],
        ans: 0,
        exp: "Voluntary intoxication is a defense to specific intent crimes if it prevents the defendant from forming the requisite intent. Burglary requires the specific intent to commit a felony therein. If George was too drunk to form that intent, he is not guilty of burglary."
    },
    {
        id: 21,
        topic: "General Principles / Strict Liability",
        fp: "Hannah sells alcohol to a 19-year-old, reasonably believing the buyer is 22 based on a very realistic fake ID. The state statute prohibits selling alcohol to minors and is designated as a strict liability offense.",
        q: "Is Hannah guilty under the statute?",
        opts: [
            "No, because she made an honest and reasonable mistake of fact regarding the buyer's age.",
            "Yes, because strict liability offenses do not require proof of mens rea regarding the prohibited act.",
            "No, because the buyer's use of a fake ID constitutes fraudulent entrapment.",
            "Yes, but only if the prosecution can prove that she acted with criminal negligence."
        ],
        ans: 1,
        exp: "Strict liability offenses, such as statutory rape or selling alcohol to minors, do not require a culpable mental state (mens rea) regarding the act. A reasonable mistake of fact is not a defense to a strict liability crime."
    },
    {
        id: 22,
        topic: "Inchoate Crimes / Solicitation Merger",
        fp: "Ian asks Jane to murder his business partner. Jane agrees and successfully commits the murder.",
        q: "Can Ian be convicted of both solicitation and murder?",
        opts: [
            "Yes, because solicitation is a separate and distinct offense from the completed crime.",
            "Yes, because Ian did not physically participate in the actual killing.",
            "No, because Jane's act of murder acts as an independent superseding cause.",
            "No, because the crime of solicitation merges into the completed crime of murder."
        ],
        ans: 3,
        exp: "Under the merger doctrine, solicitation merges into the target offense if it is completed (or into conspiracy if an agreement is reached). Thus, Ian cannot be convicted of both solicitation and the completed murder; he will be held liable for the murder as an accomplice."
    },
    {
        id: 23,
        topic: "Defenses / Self-Defense",
        fp: "Kyle is attacked by an unarmed man who shoves him in the street. Kyle immediately pulls out a gun and shoots the man, killing him.",
        q: "Is Kyle's use of deadly force justified?",
        opts: [
            "Yes, because a person may use deadly force to repel any unprovoked physical attack.",
            "No, because deadly force may not be used to repel a non-deadly attack.",
            "Yes, because Kyle was in a public place and had no legal duty to retreat.",
            "No, because Kyle failed to issue a verbal warning before discharging the firearm."
        ],
        ans: 1,
        exp: "Self-defense allows the use of force proportionate to the threat. Deadly force may only be used to repel an imminent threat of death or serious bodily harm. A shove is non-deadly force and does not justify a lethal response."
    },
    {
        id: 24,
        topic: "Property Crimes / Forgery",
        fp: "Lisa finds a blank check belonging to Mark. She signs Mark's name on it and makes it out to herself for $500. She puts it in her purse but has not yet tried to cash it.",
        q: "Is Lisa guilty of forgery?",
        opts: [
            "No, because she has not yet attempted to negotiate or cash the check at a bank.",
            "No, because the check was blank when she found it, meaning it lacked independent legal value.",
            "Yes, because she falsely made a writing of apparent legal significance with the intent to defraud.",
            "Yes, because forgery is a strict liability offense that occurs upon the signing of another's name."
        ],
        ans: 2,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, with the intent to defraud. The crime is complete upon the fraudulent making or altering; it does not require that the document actually be used or cashed."
    },
    {
        id: 25,
        topic: "Parties to a Crime / Common Law Accessories",
        fp: "Mike provides Nick with the blueprints to a museum so Nick can steal a famous painting. Mike stays home while Nick commits the burglary.",
        q: "At common law, what is Mike's status?",
        opts: [
            "He is a principal in the first degree because he orchestrated the planning of the crime.",
            "He is a principal in the second degree because he assisted in the commission of the crime.",
            "He is an accessory after the fact because he provided the blueprints before the crime occurred.",
            "He is an accessory before the fact because he aided the crime but was not present during it."
        ],
        ans: 3,
        exp: "At common law, an accessory before the fact is one who aids, abets, counsels, or encourages the principal but is not present at the scene of the crime. Because Mike provided the blueprints but stayed home, he is an accessory before the fact."
    }
];