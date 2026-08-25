const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Property Crimes / Embezzlement vs. Larceny by Trick",
        fp: "Arthur, the Chief Financial Officer of a tech startup, directs his executive secretary, Betty, to wire $5,000,000 from the company's primary operating account to an external shell corporation. Betty is completely unaware that Arthur secretly owns the shell corporation and is orchestrating a massive fraud. She processes the transfer strictly because it was ordered by her direct superior. Arthur subsequently withdraws the funds and flees the jurisdiction.",
        q: "What property crime did Arthur commit regarding the company funds?",
        opts: [
            "Embezzlement, because he utilized his lawful discretionary authority to fraudulently convert entrusted corporate funds.",
            "Larceny by trick, because the secretary was deceptively induced into relinquishing temporary custody of the commercial assets.",
            "False pretenses, because the corporate entity completely surrendered legal title to the electronic banking instruments.",
            "Common law robbery, because bypassing the corporate firewall to execute unauthorized wire transfers constitutes the constructive application of physical violence against the entity."
        ],
        ans: 0,
        exp: "Embezzlement requires the fraudulent conversion of the property of another by someone who already possesses lawful, entrusted possession of it[cite: 30]. As CFO with discretionary authority over the accounts, Arthur had lawful constructive possession of the funds[cite: 30]. His use of a subordinate to execute the conversion does not change the nature of his own entrusted authority[cite: 30]."
    },
    {
        id: 2,
        topic: "Parties to a Crime / Innocent Agent Doctrine",
        fp: "Arthur, the Chief Financial Officer of a tech startup, directs his executive secretary, Betty, to wire $5,000,000 from the company's primary operating account to an external shell corporation. Betty is completely unaware that Arthur secretly owns the shell corporation and is orchestrating a massive fraud. She processes the transfer strictly because it was ordered by her direct superior. Arthur subsequently withdraws the funds and flees the jurisdiction.",
        q: "Is Betty guilty of any criminal offense regarding the transfer of the funds?",
        opts: [
            "Yes, she is strictly liable as a principal in the second degree because she was physically present at the computer terminal when the actual theft was consummated.",
            "No, because under the innocent agent doctrine, a person who executes the actus reus without the requisite mens rea bears no criminal liability, transferring principal status entirely to the orchestrator.",
            "Yes, but her liability is strictly capped at a misdemeanor because she did not financially benefit from the transaction.",
            "No, because she possessed a valid mistake of law defense regarding the legality of offshore corporate banking regulations."
        ],
        ans: 1,
        exp: "Under criminal agency principles, a person who causes a crime to be committed through an 'innocent agent' (someone who lacks criminal intent, like Betty) is treated as the principal in the first degree[cite: 30]. The innocent agent is not guilty of any crime because they lack the required mens rea[cite: 30]."
    },
    {
        id: 3,
        topic: "Property Crimes / Extortion",
        fp: "Arthur, the Chief Financial Officer of a tech startup, directs his executive secretary, Betty, to wire $5,000,000 from the company's primary operating account to an external shell corporation. Betty is completely unaware that Arthur secretly owns the shell corporation and is orchestrating a massive fraud. She processes the transfer strictly because it was ordered by her direct superior. Arthur subsequently withdraws the funds and flees the jurisdiction.\n\nLater, a malicious hacker discovers Arthur's shell corporation and emails him: 'Pay me $1,000,000 or I will release your bank records to the FBI tomorrow.'",
        q: "What crime did the hacker commit?",
        opts: [
            "Robbery, because the threat generated profound psychological terror equivalent to the immediate application of physical force.",
            "Larceny by trick, because the hacker utilized a sophisticated digital deception to acquire temporary dominion over the illicit funds.",
            "Extortion.",
            "Embezzlement, because the hacker asserted an unauthorized proprietary interest in the financial data previously entrusted to the corporate banking servers."
        ],
        ans: 2,
        exp: "Extortion (blackmail) is the obtaining of property from another by means of threats of future harm, including threats to expose a secret, report a crime, or initiate administrative action[cite: 30]. Threatening to release bank records to the FBI 'tomorrow' perfectly satisfies the elements of extortion[cite: 30]."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Homicide / Year and a Day Rule",
        fp: "Bob intentionally feeds a highly potent, slow-acting poison to Carl. Carl immediately falls into a deep, unresponsive coma and is kept alive purely on advanced, artificial life support machines in the hospital's intensive care unit. Exactly 370 days after ingesting the poison, Carl's family, consulting with the medical team, legally removes him from life support, and he dies instantly.",
        q: "Under strict traditional common law rules, what is Bob's liability regarding Carl's death?",
        opts: [
            "First-degree murder, because the administration of poison inherently establishes the specific intent required for a capital premeditated homicide conviction.",
            "Voluntary manslaughter, because the prolonged medical delay negates the immediate malice aforethought initially formed by the defendant.",
            "Aggravated battery, because the removal of life support constitutes an unforeseeable superseding intervening act that severs the chain of proximate causation.",
            "Attempted murder, because the traditional common law year-and-a-day rule conclusively bars a completed homicide prosecution since the victim survived beyond the strictly defined temporal limit."
        ],
        ans: 3,
        exp: "Under the traditional common law 'year and a day' rule, a defendant cannot be convicted of criminal homicide if the victim dies more than one year and one day after the fatal blow or act was inflicted[cite: 30]. Because Carl survived for 370 days, Bob cannot be convicted of murder, leaving attempted murder as his highest liability[cite: 30]."
    },
    {
        id: 5,
        topic: "Homicide / Proximate Cause (Life Support)",
        fp: "Bob intentionally feeds a highly potent, slow-acting poison to Carl. Carl immediately falls into a deep, unresponsive coma and is kept alive purely on advanced, artificial life support machines in the hospital's intensive care unit. Exactly 370 days after ingesting the poison, Carl's family, consulting with the medical team, legally removes him from life support, and he dies instantly.\n\nAssume the jurisdiction completely abolished the year-and-a-day rule.",
        q: "Is the removal of life support by the family a superseding cause that relieves Bob of homicide liability?",
        opts: [
            "No, because the lawful removal of artificial life-sustaining medical treatment from a terminally injured victim is a highly foreseeable dependent event that does not sever the chain of proximate causation.",
            "Yes, because the family's independent decision to terminate care breaks the direct physical chain initiated by the poison.",
            "No, because medical doctors are strictly liable for any fatalities occurring within their licensed facilities.",
            "Yes, because the affirmative act of unplugging the machine actively hastened the victim's inevitable death."
        ],
        ans: 0,
        exp: "In criminal law, the removal of artificial life support by a victim's family or doctors is considered a foreseeable, dependent intervening act that naturally results from the defendant inflicting the fatal injury[cite: 30]. It is not a superseding cause, and the original attacker remains the proximate cause of death[cite: 30]."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Defenses / Voluntary vs. Involuntary Intoxication",
        fp: "Dave takes a legally prescribed medication for his severe insomnia. However, he deliberately decides to chase the pills with an entire bottle of black-market heroin, hoping it will enhance the sedative effect. The combination causes Dave to suffer a massive psychotic break. While hallucinating that his friend Evan is a flesh-eating zombie, Dave grabs a baseball bat and strikes Evan repeatedly, causing severe injuries.",
        q: "How will Dave's intoxication be classified under the law?",
        opts: [
            "Involuntary, because the psychosis was partially triggered by a medically prescribed therapeutic drug.",
            "Voluntary intoxication.",
            "Mistake of fact, because he genuinely believed he was defending his life against a supernatural threat.",
            "Legal insanity, because the combination of substances produced a recognized, permanent defect of reason."
        ],
        ans: 1,
        exp: "Intoxication is voluntary if the defendant knowingly ingests an illicit intoxicating substance, even if it is mixed with a prescribed medication[cite: 30]. Because Dave deliberately consumed black-market heroin to enhance the drug's effects, his resulting extreme psychosis is legally classified as voluntary intoxication[cite: 30]."
    },
    {
        id: 7,
        topic: "Homicide / Imperfect Self-Defense & Intoxication",
        fp: "Dave takes a legally prescribed medication for his severe insomnia. However, he deliberately decides to chase the pills with an entire bottle of black-market heroin, hoping it will enhance the sedative effect. The combination causes Dave to suffer a massive psychotic break. While hallucinating that his friend Evan is a flesh-eating zombie, Dave grabs a baseball bat and strikes Evan repeatedly, causing severe injuries.\n\nAssume Evan dies from the injuries, and Dave is charged with first-degree murder.",
        q: "Can Dave assert the doctrine of imperfect self-defense to mitigate the charge?",
        opts: [
            "No, because he utilized a deadly weapon against an unarmed victim.",
            "Yes, because his extreme psychosis triggered a valid necessity defense.",
            "Yes, if his voluntary intoxication caused an honest but unreasonable belief in the need for deadly force to repel an imminent threat, negating malice aforethought.",
            "No, because the belief that zombies exist is factually impossible and therefore completely barred from mitigating any violent felony."
        ],
        ans: 2,
        exp: "Under the doctrine of imperfect self-defense, if a defendant holds an honest but objectively unreasonable belief that deadly force is necessary (such as a hallucination that the victim is a lethal monster), it negates malice aforethought[cite: 30]. This mitigates murder to voluntary manslaughter, even if the delusion was induced by voluntary intoxication[cite: 30]."
    },
    {
        id: 8,
        topic: "Defenses / Voluntary Intoxication (General Intent Limitation)",
        fp: "Dave takes a legally prescribed medication for his severe insomnia. However, he deliberately decides to chase the pills with an entire bottle of black-market heroin, hoping it will enhance the sedative effect. The combination causes Dave to suffer a massive psychotic break. While hallucinating that his friend Evan is a flesh-eating zombie, Dave grabs a baseball bat and strikes Evan repeatedly, causing severe injuries.\n\nAssume Evan survives, and Dave is charged with general intent battery.",
        q: "Can Dave use his voluntary intoxication as a defense to the battery charge?",
        opts: [
            "Yes, if the intoxication was severe enough to render him physically unconscious during the attack.",
            "Yes, because extreme psychosis negates the mens rea for all criminal offenses regardless of their statutory classification.",
            "No, because battery is a strict liability offense that permits no affirmative defenses.",
            "No, because voluntary intoxication is never a recognized legal defense to general intent crimes, as the act of voluntarily consuming the intoxicant legally substitutes for the required reckless mental state."
        ],
        ans: 3,
        exp: "Battery is a general intent crime[cite: 30]. Voluntary intoxication is NEVER a defense to general intent crimes, because the act of voluntarily consuming the intoxicating substance is deemed sufficiently reckless to satisfy the mens rea for the offense[cite: 30]."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Property Crimes / False Pretenses",
        fp: "Fiona presents a fake diamond ring to a local pawn broker, falsely and intentionally stating it is a 3-carat flawless diamond that belonged to her grandmother. The broker, believing her, agrees to buy it for $10,000 cash and hands her the money.",
        q: "What crime did Fiona commit regarding the $10,000?",
        opts: [
            "False pretenses, because she obtained legal title to the money through an intentional false representation of fact.",
            "Larceny by trick, because the broker merely transferred temporary physical custody of the funds pending a formal appraisal.",
            "Embezzlement, because she exercised unauthorized dominion over the broker's commercial inventory.",
            "Robbery, because the exchange of a completely valueless counterfeit item constitutes the constructive application of physical force."
        ],
        ans: 0,
        exp: "False pretenses requires that the victim intend to transfer legal TITLE (ownership) to the defendant based on an intentional false representation of a past or existing fact[cite: 30]. Because the broker intended to purchase the ring and transfer full ownership of the $10,000 to Fiona, her crime is false pretenses[cite: 30]."
    },
    {
        id: 10,
        topic: "Property Crimes / Forgery",
        fp: "Fiona presents a fake diamond ring to a local pawn broker, falsely and intentionally stating it is a 3-carat flawless diamond that belonged to her grandmother. The broker, believing her, agrees to buy it for $10,000 cash and hands her the money.\n\nAssume instead that the pawn broker did not hand over cash, but instead paid Fiona using a counterfeit cashier's check that the broker had personally forged the night before.",
        q: "What crime did the broker commit by creating the fake check?",
        opts: [
            "Larceny, because he deprived Fiona of the fake ring.",
            "Forgery, because he materially created a false writing with apparent legal significance and the specific intent to defraud another party.",
            "Extortion, because he utilized coercive commercial leverage to bypass standard banking protocols.",
            "False pretenses, because he obtained legal title to the jewelry."
        ],
        ans: 1,
        exp: "Forgery is the making or altering of a false writing with apparent legal significance, done with the specific intent to defraud[cite: 30]. Creating a fake cashier's check perfectly satisfies all elements of forgery[cite: 30]. The crime is complete upon the making of the document[cite: 30]."
    },
    {
        id: 11,
        topic: "Inchoate Crimes / Attempted False Pretenses",
        fp: "Fiona presents a fake diamond ring to a local pawn broker, falsely and intentionally stating it is a 3-carat flawless diamond that belonged to her grandmother. The broker, believing her, agrees to buy it for $10,000 cash and hands her the money.\n\nAssume instead that the broker immediately recognized the ring was fake and called the police while pretending to get the cash from the back room. Fiona is arrested before receiving any money.",
        q: "What is Fiona's highest criminal liability?",
        opts: [
            "No crime, because the broker was not actually deceived, rendering the completion of the offense factually impossible.",
            "Solicitation to commit grand theft.",
            "Attempted false pretenses, because she possessed the specific intent to defraud the broker and committed an overt act that constituted a substantial step toward the completion of the theft.",
            "Attempted larceny, because she failed to acquire physical custody of the funds."
        ],
        ans: 2,
        exp: "Attempt requires specific intent and a substantial step toward the completion of the target crime[cite: 30]. Even though the broker was not fooled (which breaks the causal chain for completed false pretenses), Fiona had the specific intent to defraud and took a substantial step by presenting the fake ring and lying about it, making her guilty of attempted false pretenses[cite: 30]."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Homicide / Felony Murder (Redline Rule)",
        fp: "Greg and Hal commit an armed bank robbery. Outside, Greg opens fire on a responding police officer to facilitate their escape. The officer returns fire in lawful self-defense, completely missing Greg but striking and killing Hal.",
        q: "In a majority jurisdiction following the agency theory of felony murder, is Greg liable for Hal's death?",
        opts: [
            "Yes, because Hal's death was a highly foreseeable consequence of initiating an armed commercial bank robbery.",
            "Yes, because under the doctrine of transferred intent, the officer's lethal force is imputed directly to the primary aggressor.",
            "No, because the officer was utilizing a specialized municipal firearm not covered by standard penal codes.",
            "No homicide liability for Greg under the traditional Redline rule."
        ],
        ans: 3,
        exp: "Under the agency theory of felony murder (and the related Redline rule), a felon is not liable for the death of a co-felon who is justifiably killed by a police officer, security guard, or victim acting in lawful self-defense or crime prevention[cite: 30]. The lethal act must be committed by a felon or their agent for the rule to apply[cite: 30]."
    },
    {
        id: 13,
        topic: "Homicide / Provocative Act Doctrine",
        fp: "Greg and Hal commit an armed bank robbery. Outside, Greg opens fire on a responding police officer to facilitate their escape. The officer returns fire in lawful self-defense, completely missing Greg but striking and killing Hal.\n\nAssume instead that Greg grabbed an innocent bank customer and used her as a human shield. The police officer fired at Greg but accidentally shot and killed the customer.",
        q: "Is Greg liable for the customer's death?",
        opts: [
            "Yes, because using an innocent hostage as a human shield to deter police gunfire constitutes a highly provocative act manifesting extreme reckless indifference to human life, establishing implied malice.",
            "No, because the police officer fired the fatal projectile, completely severing the chain of proximate legal causation.",
            "No, because the Redline doctrine automatically immunizes co-felons from all deaths caused by sworn law enforcement personnel.",
            "Yes, but only for involuntary manslaughter, because he did not explicitly intend for the specific hostage to perish."
        ],
        ans: 0,
        exp: "Even in an agency-theory jurisdiction, the 'provocative act' doctrine holds that if a felon commits an independent, highly reckless act (like using a human shield or initiating a gunfight) that provokes lethal return fire from police, the felon is liable for murder based on their own implied malice, even if the police fired the fatal shot[cite: 30]."
    },
    {
        id: 14,
        topic: "Homicide / Felony Murder Merger Doctrine (Ireland Rule)",
        fp: "Greg and Hal commit an armed bank robbery. Outside, Greg opens fire on a responding police officer to facilitate their escape. The officer returns fire in lawful self-defense, completely missing Greg but striking and killing Hal.\n\nAssuming the provocative act doctrine applies and Greg is charged with felony murder for a bystander's death, does the underlying robbery merge into the homicide?",
        q: "Does the merger doctrine bar the felony murder charge based on the robbery?",
        opts: [
            "Yes, because the robbery directly caused the fatal physical injuries.",
            "No, because robbery is an independent collateral felony with a separate felonious purpose that does not merge under the Ireland rule.",
            "Yes, because double jeopardy prevents multiple punishments for offenses arising from a single continuous transaction.",
            "No, because the merger doctrine exclusively applies to inchoate crimes like attempt and solicitation."
        ],
        ans: 1,
        exp: "The merger doctrine (Ireland rule) bars a felony murder conviction if the underlying felony is an integral part of the homicide (e.g., assault or battery)[cite: 30]. Robbery is an independent felony with an independent purpose (acquiring property) and therefore does NOT merge, allowing it to serve as a valid predicate for felony murder[cite: 30]."
    },
    // FACT PATTERN 6 (Q15-Q16)
    {
        id: 15,
        topic: "Inchoate Crimes / Solicitation (Impossibility)",
        fp: "Ian, a foreign national, approaches an undercover federal agent and offers the agent $5,000 to marry him solely to bypass immigration laws. The statutory crime of marriage fraud requires exactly two willing participants. The agent immediately arrests Ian.",
        q: "What crime has Ian committed regarding his offer to the agent?",
        opts: [
            "Attempted marriage fraud, because he took a substantial step by offering the financial compensation to the purported bride.",
            "Conspiracy, because the formal tender of funds legally finalized the illicit bilateral agreement.",
            "Solicitation, which is complete upon the asking.",
            "No crime, because the legal impossibility of marrying an undercover federal agent completely nullifies all preliminary inchoate charges."
        ],
        ans: 2,
        exp: "Solicitation is complete the moment the defendant asks, commands, or urges another person to commit a crime with the specific intent that the crime be committed[cite: 30]. It is entirely irrelevant that the solicitee is an undercover agent or refuses the request[cite: 30]."
    },
    {
        id: 16,
        topic: "Inchoate Crimes / Conspiracy (Bilateral vs Unilateral)",
        fp: "Ian, a foreign national, approaches an undercover federal agent and offers the agent $5,000 to marry him solely to bypass immigration laws. The statutory crime of marriage fraud requires exactly two willing participants. The agent immediately arrests Ian.",
        q: "Can Ian be convicted of common law conspiracy with the undercover officer?",
        opts: [
            "Yes, under the unilateral approach adopted by modern penal codes.",
            "Yes, because the overt act of tendering the money was completed prior to the physical arrest.",
            "No, because marriage fraud is classified as a regulatory misdemeanor rather than an inherently dangerous common law felony.",
            "No, because the traditional bilateral approach requires two guilty minds, and the undercover officer lacked the requisite criminal intent to form a genuine agreement."
        ],
        ans: 3,
        exp: "Under traditional common law, conspiracy requires a 'bilateral' agreement—a true meeting of the minds between at least two parties who actually intend to commit the crime[cite: 30]. Because the undercover agent was feigning agreement and lacked genuine criminal intent, no common law conspiracy was formed[cite: 30]."
    },
    // FACT PATTERN 7 (Q17-Q19)
    {
        id: 17,
        topic: "Crimes against Person / Kidnapping (Incidental Asportation)",
        fp: "Jack breaks into a woman's house at night. He points a gun at her in the living room and forces her to walk 10 feet into her bedroom closet. He locks the closet door from the outside, then spends an hour stealing her jewelry from the master bedroom.",
        q: "Is Jack guilty of kidnapping regarding his movement of the victim?",
        opts: [
            "The movement is likely incidental to the robbery, lacking substantial asportation for kidnapping.",
            "Yes, because any physical relocation of a victim accomplished through the threat of a deadly weapon satisfies the statutory asportation requirement.",
            "Yes, because forcing an individual into an enclosed, unventilated space drastically increases their risk of permanent physical injury.",
            "No, because he failed to demand a monetary ransom from her immediate family members."
        ],
        ans: 0,
        exp: "Kidnapping requires unlawful confinement and 'asportation' (movement) that is substantial or increases the risk of harm independent of the underlying crime[cite: 30]. Most courts hold that forcing a victim a short distance into a closet or bathroom within their own home to facilitate a robbery is merely incidental to the robbery and does not constitute kidnapping[cite: 30]."
    },
    {
        id: 18,
        topic: "Crimes against Person / False Imprisonment",
        fp: "Jack breaks into a woman's house at night. He points a gun at her in the living room and forces her to walk 10 feet into her bedroom closet. He locks the closet door from the outside, then spends an hour stealing her jewelry from the master bedroom.",
        q: "What distinct crime against the person is Jack guilty of for locking her in the closet?",
        opts: [
            "Kidnapping, because the extended duration of the confinement substitutes for the lack of substantial physical movement.",
            "False imprisonment.",
            "Extortion, because he utilized the confinement to secure her absolute compliance.",
            "Robbery, because depriving an individual of their personal freedom of movement constitutes the taking of an intangible asset."
        ],
        ans: 1,
        exp: "False imprisonment is the intentional, unlawful confinement of a person to a bounded area without their valid consent[cite: 30]. Locking the victim in a closet against her will perfectly satisfies all elements of false imprisonment[cite: 30]."
    },
    {
        id: 19,
        topic: "Property Crimes / Extortion vs Robbery",
        fp: "Jack breaks into a woman's house at night. He points a gun at her in the living room and forces her to walk 10 feet into her bedroom closet. He locks the closet door from the outside, then spends an hour stealing her jewelry from the master bedroom.\n\nBefore leaving, Jack speaks through the closet door: 'If you tell the police about this, I will come back next week and kill you.'",
        q: "What crime did Jack commit by making this specific threat through the door?",
        opts: [
            "Assault, because he intentionally created a severe apprehension of bodily harm.",
            "Robbery, because the threat was utilized to secure his safe escape.",
            "Extortion, because he obtained compliance and compelled her inaction through a malicious and calculated threat of future physical harm.",
            "False pretenses, because he fraudulently deceived her into remaining silent."
        ],
        ans: 2,
        exp: "Extortion (blackmail) is obtaining property or compelling action from another by means of threats of future harm[cite: 30]. Threatening to return 'next week' to inflict lethal violence is a threat of future harm, satisfying the elements of extortion[cite: 30]."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Defenses / Necessity (Private)",
        fp: "Karen is hiking in the mountains when a starving, wild grizzly bear chases her. To survive, she breaks the window of a remote, locked cabin and hides inside. The cabin owner, Larry, is inside and furious. He points a shotgun at her and demands she leave immediately, back out into the path of the bear. She refuses to leave.",
        q: "What is Karen's legal status regarding her entry and refusal to leave the cabin?",
        opts: [
            "She is guilty of burglary, because she broke the threshold of a dwelling house with the specific intent to trespass.",
            "She is guilty of criminal trespass, because the owner explicitly revoked any implied license to remain on the premises.",
            "She must leave immediately, because property owners possess an absolute constitutional right to exclude all uninvited individuals.",
            "Her entry is privileged by private necessity, shielding her from criminal trespass liability."
        ],
        ans: 3,
        exp: "The defense of necessity (choice of evils) justifies committing a minor crime (like trespass) if the defendant reasonably believes it is necessary to avoid a greater, imminent harm caused by natural forces (a bear attack)[cite: 30]. Private necessity allows Karen to trespass to save her life, shielding her from criminal liability, though she remains civilly liable for the broken window[cite: 30]."
    },
    {
        id: 21,
        topic: "Defenses / Defense of Property vs Human Life",
        fp: "Karen is hiking in the mountains when a starving, wild grizzly bear chases her. To survive, she breaks the window of a remote, locked cabin and hides inside. The cabin owner, Larry, is inside and furious. He points a shotgun at her and demands she leave immediately, back out into the path of the bear. She refuses to leave.\n\nFurious at her refusal, Larry shoots Karen in the leg.",
        q: "Was Larry legally justified in using deadly force?",
        opts: [
            "No, because deadly force may not be used solely to protect property from a trespasser who poses no imminent threat of death or serious bodily harm to the occupants.",
            "Yes, under the widely accepted parameters of the modern castle doctrine.",
            "Yes, because she obstinately refused a lawful, direct order to vacate the private residential premises.",
            "No, because female intruders are granted heightened protections under the common law duty to retreat."
        ],
        ans: 0,
        exp: "A property owner is privileged to use reasonable, non-deadly force to protect their property from trespass[cite: 30]. However, a property owner may NEVER use deadly force solely to defend property[cite: 30]. Because Karen posed no threat of death or great bodily harm to Larry, his use of a shotgun was entirely unjustified[cite: 30]."
    },
    {
        id: 22,
        topic: "Defenses / Duress vs Necessity",
        fp: "Karen is hiking in the mountains when a starving, wild grizzly bear chases her. To survive, she breaks the window of a remote, locked cabin and hides inside. The cabin owner, Larry, is inside and furious. He points a shotgun at her and demands she leave immediately, back out into the path of the bear. She refuses to leave.\n\nIf Karen had been forced into the cabin at gunpoint by a human kidnapper instead of being chased by a bear, what defense would primarily apply to her trespass?",
        opts: [
            "Necessity.",
            "Duress.",
            "Mistake of fact.",
            "Entrapment."
        ],
        ans: 1,
        exp: "The key distinction between the two defenses is the source of the threat[cite: 30]. Duress involves coercion by another HUMAN being who threatens immediate physical harm[cite: 30]. Necessity involves pressure created by physical, mechanical, or NATURAL forces (like a bear)[cite: 30]."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Property Crimes / Burglary (Intent Timing)",
        fp: "Leo is walking home at 2:00 AM when a sudden, violent freezing rainstorm hits. To escape the lethal cold, he kicks open the door of an unoccupied house. Once inside and safe, he notices a large flat-screen TV on the wall. He decides to steal it, unmounts it, and carries it out.",
        q: "Is Leo guilty of common law burglary?",
        opts: [
            "Yes, because he ultimately stole property after completing a nocturnal breach of a residential structure.",
            "Yes, because his unauthorized presence in the home constituted a continuing trespass.",
            "He is not guilty of burglary because he lacked the specific intent to commit a felony at the precise moment of the breaking and entering.",
            "No, because the homeowner was absent, meaning the structure was not actively being used as a dwelling."
        ],
        ans: 2,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling AT THE TIME of the breaking and entering[cite: 30]. Because Leo only intended to escape the cold upon entry, he lacked the specific intent required for burglary[cite: 30]. His later decision to steal the TV makes him guilty of larceny, but not burglary[cite: 30]."
    },
    {
        id: 24,
        topic: "Property Crimes / Arson (Malice Requirement)",
        fp: "Leo is walking home at 2:00 AM when a sudden, violent freezing rainstorm hits. To escape the lethal cold, he kicks open the door of an unoccupied house. Once inside and safe, he notices a large flat-screen TV on the wall. He decides to steal it, unmounts it, and carries it out.\n\nAs he is unmounting the TV, Leo drops his lit cigarette on the carpet. The carpet catches fire, and the entire house burns to the ground.",
        q: "Is Leo guilty of common law arson for the destruction of the house?",
        opts: [
            "Yes, because he was engaged in an unprivileged property theft when the fire occurred.",
            "Yes, because the physical structure of the dwelling was completely consumed by the flames.",
            "No, because the absence of the homeowner mitigates the severity of the offense to reckless burning.",
            "He is not guilty of common law arson because the accidental dropping of a cigarette lacks the malicious intent required to intentionally or recklessly burn the dwelling structure of another."
        ],
        ans: 3,
        exp: "Common law arson requires the MALICIOUS burning of the dwelling of another[cite: 30]. Malice requires an intentional burning or an extreme, reckless disregard of an obvious risk of burning the structure itself[cite: 30]. Accidentally dropping a cigarette while stealing a TV generally lacks the requisite malice for arson[cite: 30]."
    },
    {
        id: 25,
        topic: "Parties to a Crime / Accomplice Withdrawal",
        fp: "Leo is walking home at 2:00 AM when a sudden, violent freezing rainstorm hits. To escape the lethal cold, he kicks open the door of an unoccupied house. Once inside and safe, he notices a large flat-screen TV on the wall. He decides to steal it, unmounts it, and carries it out.\n\nAssume that before entering, Leo was accompanied by his friend Mike. Mike agreed to stand outside as a lookout while Leo broke in to escape the cold. However, Mike got bored and ran away 5 minutes before Leo actually kicked the door open, without saying a word to Leo.",
        q: "What is Mike's liability regarding the entry?",
        opts: [
            "Mike is not guilty of any crime.",
            "Mike is guilty of attempted burglary.",
            "Mike's silent departure failed to legally neutralize his prior assistance or communicate withdrawal.",
            "Mike is strictly liable as an accessory after the fact."
        ],
        ans: 2,
        exp: "To successfully withdraw as an accomplice, a person must repudiate their prior aid, communicate their withdrawal to the principal, AND neutralize any material assistance they previously provided before the crime becomes unstoppable[cite: 30]. By running away silently, Mike failed to notify Leo, rendering his attempted withdrawal legally ineffective[cite: 30]."
    }
];