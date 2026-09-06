const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Felony Murder & Merger Doctrine (Ireland Rule)",
        fp: "Aaron intends to kill his business rival, Bill. Aaron knows Bill is working late in a crowded commercial office building. Aaron sets fire to the building, intending for the flames to trap and kill Bill. The fire successfully kills Bill. However, the flames also spread rapidly and kill an overnight janitor working on another floor. Aaron is charged with felony murder regarding the janitor's death, predicated on the underlying felony of arson.",
        q: "Does the merger doctrine (Ireland rule) preclude a felony murder conviction for the janitor's death based on the arson?",
        opts: [
            "No, because arson is an independent collateral felony.",
            "Yes, because the defendant's primary subjective intent was to commit an assaultive act.",
            "Yes, because under the common law, any property crime that results in death must merge with the homicide charge if the building was occupied.",
            "No, because the merger doctrine strictly applies only to vehicular manslaughter and related offenses."
        ],
        ans: 0,
        exp: "Under the merger doctrine (Ireland rule), a felony murder charge cannot be based on a felony that is an integral part of the homicide (e.g., assault or battery) because it merges into the killing. However, arson is generally recognized as an independent collateral felony with an independent felonious purpose (destruction of property), even if the defendant also harbored an assaultive intent. Thus, it does not merge and can support felony murder."
    },
    {
        id: 2,
        topic: "Homicide / First-Degree Murder & Transferred Intent",
        fp: "Aaron intends to kill his business rival, Bill. Aaron knows Bill is working late in a crowded commercial office building. Aaron sets fire to the building, intending for the flames to trap and kill Bill. The fire successfully kills Bill. However, the flames also spread rapidly and kill an overnight janitor working on another floor. Aaron is charged with felony murder regarding the janitor's death, predicated on the underlying felony of arson.",
        q: "What is Aaron's highest liability for Bill's death?",
        opts: [
            "Second-degree murder, because the use of fire indicates a generalized depraved heart rather than specific malice aforethought.",
            "Voluntary manslaughter due to provocation.",
            "First-degree murder, because the killing was intentional, premeditated, and deliberate.",
            "Involuntary manslaughter, because setting a building on fire is a property crime that lacks the required mens rea for an intentional homicide offense."
        ],
        ans: 2,
        exp: "First-degree murder requires an intentional killing committed with premeditation and deliberation. Aaron formulated a plan to kill Bill and deliberately set the building on fire to accomplish that goal, fully satisfying the requirements for first-degree premeditated murder."
    },
    {
        id: 3,
        topic: "Inchoate Crimes / Attempt & Transferred Intent Limitations",
        fp: "Aaron intends to kill his business rival, Bill. Aaron knows Bill is working late in a crowded commercial office building. Aaron sets fire to the building, intending for the flames to trap and kill Bill. The fire successfully kills Bill. However, the flames also spread rapidly and kill an overnight janitor working on another floor. Aaron is charged with felony murder regarding the janitor's death, predicated on the underlying felony of arson.\n\nAssume instead that Aaron placed a bomb in Bill's office to kill him, but the bomb failed to detonate properly. It merely injured the janitor who was cleaning the room. Aaron is charged with the attempted murder of the janitor.",
        q: "If Aaron is charged with the attempted murder of the janitor, how should the court rule?",
        opts: [
            "Guilty, because the intent to kill Bill transfers to the janitor under the doctrine of transferred intent.",
            "Not guilty, because the doctrine of transferred intent does not apply to inchoate attempt crimes; attempted murder requires the specific intent to kill that specific victim.",
            "Guilty, because he used a deadly weapon.",
            "Not guilty, because the janitor's presence was entirely unforeseeable."
        ],
        ans: 1,
        exp: "Attempted murder is a specific intent crime requiring the actual intent to kill the specific victim. The doctrine of transferred intent generally applies only to completed homicides or batteries, not to inchoate attempt crimes. Because Aaron did not specifically intend to kill the janitor, he cannot be convicted of attempted murder of the janitor."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Property Crimes / Embezzlement vs. False Pretenses",
        fp: "Calvin is the Chief Financial Officer of a large corporation. He possesses full legal authority to disburse corporate funds and sign checks on behalf of the company. Calvin creates a series of fake vendor invoices for shell companies he secretly owns. He then uses his authority to sign corporate checks paying these fake invoices, funneling $500,000 into his personal offshore bank account.",
        q: "What property crime did Calvin commit?",
        opts: [
            "Larceny by trick, because the CFO used a fraudulent scheme to deceive the corporate board into relinquishing temporary custody of the funds.",
            "False pretenses, because the CFO acquired actual legal title to the company's financial assets through deceit.",
            "Robbery, because the unauthorized transfer of corporate funds constitutes constructive force.",
            "Embezzlement, because he had lawful possession."
        ],
        ans: 3,
        exp: "Embezzlement is the fraudulent conversion of the property of another by one who is already in lawful possession. As CFO with the authority to disburse funds and sign checks, Calvin had lawful possession of the corporate assets. His conversion of those assets for personal gain constitutes embezzlement."
    },
    {
        id: 5,
        topic: "Parties to a Crime / Innocent Agent Doctrine",
        fp: "Calvin is the Chief Financial Officer of a large corporation. He possesses full legal authority to disburse corporate funds and sign checks on behalf of the company. Calvin creates a series of fake vendor invoices for shell companies he secretly owns. He then uses his authority to sign corporate checks paying these fake invoices, funneling $500,000 into his personal offshore bank account.\n\nSuppose instead that Calvin lacked the authority to authorize the final wire transfers. He tricks an innocent, low-level accountant into clicking the authorization button by assuring her the invoices are legitimate.",
        q: "If Calvin tricks an innocent subordinate into authorizing the transfer, is Calvin still guilty of the principal offense?",
        opts: [
            "Yes, under the innocent agent doctrine, a defendant who uses an unwitting third party to commit the actus reus is fully liable as the principal actor.",
            "No, because the subordinate committed the actus reus.",
            "Yes, but only as an accessory before the fact since he did not hit the transfer button.",
            "No, because corporate officers are shielded by the business judgment rule in such transactions."
        ],
        ans: 0,
        exp: "Under criminal agency principles, a person who causes a crime to be committed through an innocent agent (someone who lacks criminal intent or capacity) is treated as the principal in the first degree, just as if they had performed the physical actus reus themselves."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Inchoate Crimes / Conspiracy & Factual vs. Legal Impossibility",
        fp: "Dan and Eve agree to smuggle a shipment of what they strongly believe to be illegal elephant ivory into the country. In reality, the supplier scammed them, and the shipment consists entirely of legal, synthetic polymer ivory that perfectly mimics the real material. They are arrested at the border.",
        q: "Are Dan and Eve guilty of conspiracy to smuggle illegal ivory?",
        opts: [
            "No, because the legal impossibility of the target offense nullifies the criminal agreement.",
            "Yes, because the importation of any animal byproduct requires a special federal permit, making the act a strict liability customs violation regardless of their intent.",
            "Yes, because factual impossibility is not a defense.",
            "No, because the items were not actually contraband, negating the actus reus."
        ],
        ans: 2,
        exp: "Conspiracy requires an agreement to commit a crime. Factual impossibility (the fact that the ivory was fake, preventing the successful completion of the smuggling) is never a defense to conspiracy. They intended to agree and intended to commit the illegal act, which is sufficient."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Attempt & Factual Impossibility",
        fp: "Dan and Eve agree to smuggle a shipment of what they strongly believe to be illegal elephant ivory into the country. In reality, the supplier scammed them, and the shipment consists entirely of legal, synthetic polymer ivory that perfectly mimics the real material. They are arrested at the border.",
        q: "Are Dan and Eve guilty of attempted smuggling of illegal ivory?",
        opts: [
            "No, because the substance was legal.",
            "Yes, because their conduct would constitute a crime if the circumstances were as they believed them to be.",
            "No, because attempting to smuggle synthetic materials is categorically recognized as a legal impossibility under modern common law frameworks.",
            "Yes, because they crossed an international border."
        ],
        ans: 1,
        exp: "Under modern attempt law (and the Model Penal Code), factual impossibility is not a defense. A defendant is guilty of attempt if their conduct would constitute a crime had the attendant circumstances been as the defendant believed them to be."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Conspiracy & Specific Intent",
        fp: "Dan and Eve agree to smuggle a shipment of what they strongly believe to be illegal elephant ivory into the country. In reality, the supplier scammed them, and the shipment consists entirely of legal, synthetic polymer ivory that perfectly mimics the real material. They are arrested at the border.\n\nSuppose that before they reach the border, Eve opens the crates and realizes the ivory is fake. However, she decides to continue driving the truck solely to collect her transportation fee from Dan, no longer caring about the smuggling aspect.",
        q: "Is Eve still participating in the conspiracy to smuggle illegal ivory?",
        opts: [
            "Yes, because she performed an overt act by transporting the goods, which solidifies the conspiracy regardless of her subsequent discovery.",
            "No, because of the Wharton rule.",
            "Yes, because she still intended to defraud Dan out of his money.",
            "No, because she no longer shared the specific intent to commit the target crime with Dan."
        ],
        ans: 3,
        exp: "Conspiracy requires that the parties share the specific intent to commit the target offense. Once Eve discovered the ivory was fake, she could no longer intend to smuggle illegal ivory. Continuing the act merely for payment without the shared intent to commit the underlying crime severs her from the ongoing conspiracy."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Defenses / Self-Defense (Initial Aggressor Escalation)",
        fp: "Greg and Hank are arguing in a parking lot. Greg initiates a physical altercation by shoving Hank and raising his fists to engage in a non-deadly brawl. Hank suddenly pulls a loaded handgun and aims it at Greg's head. Greg attempts to run away but realizes he is cornered between two walls. Greg quickly pulls his own concealed firearm and shoots Hank dead.",
        q: "Can Greg successfully claim self-defense?",
        opts: [
            "No, because an initial aggressor is strictly liable for any resulting deaths and can never claim self-defense.",
            "Yes, because Hank escalated the conflict.",
            "Yes, because when a victim escalates a non-deadly altercation into a deadly one, the initial aggressor regains the right of self-defense if they cannot safely retreat.",
            "No, because Greg failed to verbally communicate his withdrawal from the physical altercation."
        ],
        ans: 2,
        exp: "An initial aggressor generally loses the privilege of self-defense. However, there are two exceptions where the privilege is restored: (1) if the initial aggressor effectively withdraws and communicates that withdrawal, or (2) if the victim escalates a non-deadly confrontation into a deadly one, and the initial aggressor has no safe means of retreat."
    },
    {
        id: 10,
        topic: "Crimes against Person / Aggravated Assault (Disproportionate Force)",
        fp: "Greg and Hank are arguing in a parking lot. Greg initiates a physical altercation by shoving Hank and raising his fists to engage in a non-deadly brawl. Hank suddenly pulls a loaded handgun and aims it at Greg's head. Greg attempts to run away but realizes he is cornered between two walls. Greg quickly pulls his own concealed firearm and shoots Hank dead.",
        q: "Did Hank commit a crime by pulling the gun?",
        opts: [
            "Yes, aggravated assault, because the force was disproportionate.",
            "No, because he was responding to an unprovoked physical battery by the initial aggressor.",
            "Yes, attempted murder, because drawing a firearm inherently establishes the specific intent to kill a human being with premeditation.",
            "No, because the castle doctrine extends to all public places under modern statutes."
        ],
        ans: 0,
        exp: "A person may only use non-deadly force to repel a non-deadly attack. Hank responding to a fistfight by pulling a gun constitutes a disproportionate escalation to deadly force. Intentionally creating a reasonable apprehension of imminent deadly harm without justification is aggravated assault."
    },
    {
        id: 11,
        topic: "Defenses / Self-Defense (Provocation with Intent to Kill)",
        fp: "Greg and Hank are arguing in a parking lot. Greg initiates a physical altercation by shoving Hank and raising his fists to engage in a non-deadly brawl. Hank suddenly pulls a loaded handgun and aims it at Greg's head. Greg attempts to run away but realizes he is cornered between two walls. Greg quickly pulls his own concealed firearm and shoots Hank dead.\n\nSuppose instead that Greg secretly intended to kill Hank from the beginning, but started the fistfight specifically hoping it would provoke Hank into drawing a weapon, thereby giving Greg a pretext to shoot him.",
        q: "In this modified scenario, can Greg claim self-defense?",
        opts: [
            "Yes, because Hank drew first.",
            "No, because one who provokes a conflict with the intent to use deadly force loses the privilege of self-defense.",
            "Yes, because subjective internal motives do not override the objective necessity of repelling an imminent lethal threat under the common law.",
            "No, because Greg used a concealed weapon."
        ],
        ans: 1,
        exp: "The right of self-defense is unavailable to a person who provokes an altercation with the specific intent to create an excuse or pretext to use deadly force against the victim. Greg's premeditated provocation completely strips him of the defense."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Parties to a Crime / Accomplice Liability (Natural and Probable Consequences)",
        fp: "Ivan drives his friend Jack to a local bank. Ivan waits outside in the car with the engine running, knowing Jack intends to commit an armed robbery. Inside the bank, a teller trips the silent alarm. Jack panics, grabs a customer, and drags the customer out the back door as a hostage to ensure his escape. Taking a hostage was never discussed or planned by Ivan and Jack.",
        q: "Is Ivan liable for the kidnapping of the customer?",
        opts: [
            "No, because the taking of a hostage was expressly outside the scope of their prior verbal agreement.",
            "Yes, under the felony murder rule.",
            "No, because accomplice liability strictly requires the defendant to share the principal's specific intent.",
            "Yes, under the natural and probable consequences doctrine, an accomplice is liable for any foreseeable crimes committed by the principal during the target offense."
        ],
        ans: 3,
        exp: "Under the natural and probable consequences doctrine, an accomplice is liable not only for the target crime they intended to aid (robbery) but also for any other crimes committed by the principal that are reasonably foreseeable outcomes of the target crime. Taking a hostage during a botched armed bank robbery is highly foreseeable."
    },
    {
        id: 13,
        topic: "Parties to a Crime / Accomplice Withdrawal Timeliness",
        fp: "Ivan drives his friend Jack to a local bank. Ivan waits outside in the car with the engine running, knowing Jack intends to commit an armed robbery. Inside the bank, a teller trips the silent alarm. Jack panics, grabs a customer, and drags the customer out the back door as a hostage to ensure his escape. Taking a hostage was never discussed or planned by Ivan and Jack.\n\nSuppose that the moment Jack exits the back door with the hostage, Ivan gets scared, speeds away alone in the car, and immediately calls the police to report Jack.",
        q: "Did Ivan effectively withdraw from the ongoing criminal enterprise?",
        opts: [
            "Yes, because he physically abandoned the scene before the hostage was harmed.",
            "Yes, because driving away unequivocally communicated his withdrawal from the criminal enterprise to the principal actor.",
            "No, because it was too late to prevent the crime.",
            "No, because withdrawal requires a formal confession to local law enforcement."
        ],
        ans: 2,
        exp: "To effectively withdraw as an accomplice, the withdrawal must occur BEFORE the crime becomes unstoppable, and the accomplice must neutralize their prior assistance (e.g., notifying police in time to stop the act). Withdrawing as the principal is already exiting with a hostage is too late to effectively thwart the offense."
    },
    {
        id: 14,
        topic: "Homicide / Felony Murder (Provocative Act / Human Shield)",
        fp: "Ivan drives his friend Jack to a local bank. Ivan waits outside in the car with the engine running, knowing Jack intends to commit an armed robbery. Inside the bank, a teller trips the silent alarm. Jack panics, grabs a customer, and drags the customer out the back door as a hostage to ensure his escape. Taking a hostage was never discussed or planned by Ivan and Jack.\n\nSuppose Jack uses the hostage as a human shield while fleeing. Arriving police officers fire at Jack, but the bullets strike and kill the hostage instead.",
        q: "Is Jack guilty of felony murder for the hostage's death?",
        opts: [
            "Yes, under the provocative act doctrine or because he used the victim as a human shield.",
            "No, under the Redline rule.",
            "No, because the fatal bullet was discharged by a sworn peace officer acting in the lawful performance of their official administrative duties.",
            "Yes, because robbery is a strict liability offense."
        ],
        ans: 0,
        exp: "Even in jurisdictions that follow the agency theory of felony murder (where felons are generally not liable for killings by police/victims), a well-established exception holds the felon liable for murder if they act with extreme recklessness, such as using a hostage as a human shield, thereby provoking the lethal response that kills the innocent party."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Property Crimes / Burglary (Common Law Temporal Requirement)",
        fp: "Kyle wants to steal a valuable painting from Leo's house. At 2:00 PM (broad daylight), Kyle approaches Leo's house, finds a closed but unlocked first-floor window, slides it open, and climbs inside. Hearing someone coming, Kyle hides under a guest bed. He remains hidden there until midnight. At 1:00 AM, Kyle emerges, steals the painting, and maliciously sets the guest bed on fire before escaping.",
        q: "Is Kyle guilty of common law burglary?",
        opts: [
            "Yes, because he remained concealed inside the dwelling until nighttime to commit the felony.",
            "No, because common law burglary requires the breaking and entering to occur during the nighttime, and his physical entry occurred during the day.",
            "Yes, because opening a closed window is a breaking.",
            "No, because opening an unlocked window does not satisfy the common law breaking requirement."
        ],
        ans: 1,
        exp: "Common law burglary strictly requires that both the breaking AND entering of the dwelling house occur during the nighttime. Because Kyle's physical entry occurred at 2:00 PM, the nighttime element is absent. (Note: sliding open an unlocked window DOES satisfy the 'breaking' element, making D incorrect, but the timing precludes common law burglary)."
    },
    {
        id: 16,
        topic: "Property Crimes / Arson (Dwelling Structure Requirement)",
        fp: "Kyle wants to steal a valuable painting from Leo's house. At 2:00 PM (broad daylight), Kyle approaches Leo's house, finds a closed but unlocked first-floor window, slides it open, and climbs inside. Hearing someone coming, Kyle hides under a guest bed. He remains hidden there until midnight. At 1:00 AM, Kyle emerges, steals the painting, and maliciously sets the guest bed on fire before escaping.",
        q: "Regarding the burning of the guest bed, is Kyle guilty of common law arson?",
        opts: [
            "Yes, because he burned personal property.",
            "Yes, because setting fire to a bed inside a dwelling house satisfies the malicious burning requirement for common law arson prosecutions.",
            "No, because he didn't use an accelerant.",
            "No, because common law arson requires burning a part of the dwelling structure itself, not merely personal furniture."
        ],
        ans: 3,
        exp: "Common law arson is the malicious burning of the dwelling house of another. The burning must cause some structural damage (charring) to the building itself or its fixtures. Burning personal property contained within the house (like a bed or rug) without damaging the structure does not constitute common law arson."
    },
    {
        id: 17,
        topic: "Property Crimes / Larceny",
        fp: "Kyle wants to steal a valuable painting from Leo's house. At 2:00 PM (broad daylight), Kyle approaches Leo's house, finds a closed but unlocked first-floor window, slides it open, and climbs inside. Hearing someone coming, Kyle hides under a guest bed. He remains hidden there until midnight. At 1:00 AM, Kyle emerges, steals the painting, and maliciously sets the guest bed on fire before escaping.",
        q: "What is Kyle's liability for taking the painting?",
        opts: [
            "Larceny, because he committed a trespassory taking and asportation of the tangible personal property of another with the specific intent to permanently deprive.",
            "Embezzlement, because he was inside the house.",
            "Robbery, because his presence in the home constituted a continuous threat of constructive force.",
            "False pretenses, because he deceived the homeowner by hiding under the bed."
        ],
        ans: 0,
        exp: "Larceny is the trespassory taking and carrying away of the personal property of another with the intent to steal. Taking the painting satisfies all these elements. It is not robbery because no force or threat was used against a person."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Homicide / Year and a Day Rule",
        fp: "Mary holds a deep grudge against Ned. She slips a slow-acting, untraceable poison into Ned's daily vitamins. Ned immediately falls ill and is hospitalized in a coma. Due to his weakened immune system, Ned contracts a severe staph infection due to ordinary hospital negligence. He remains on life support but eventually dies from the combined effects of the poison and infection exactly 13 months after consuming the poisoned vitamins.",
        q: "If the jurisdiction follows strict traditional common law, can Mary be convicted of criminal homicide?",
        opts: [
            "Guilty of murder, because the poison was the actual and proximate cause of death.",
            "Guilty of voluntary manslaughter, because the prolonged delay in death negates the immediate malice aforethought required for a murder conviction.",
            "Not guilty of homicide, due to the year-and-a-day rule.",
            "Guilty of murder, but only if the prosecution proves no intervening medical negligence occurred."
        ],
        ans: 2,
        exp: "Under the traditional common law 'year and a day' rule, a defendant cannot be convicted of criminal homicide if the victim dies more than one year and one day after the fatal blow or act was inflicted. Because Ned died 13 months later, Mary is immune from a homicide prosecution at common law (though modern statutes largely abolish this)."
    },
    {
        id: 19,
        topic: "Homicide / Proximate Cause (Dependent Intervening Acts)",
        fp: "Mary holds a deep grudge against Ned. She slips a slow-acting, untraceable poison into Ned's daily vitamins. Ned immediately falls ill and is hospitalized in a coma. Due to his weakened immune system, Ned contracts a severe staph infection due to ordinary hospital negligence. He remains on life support but eventually dies from the combined effects of the poison and infection exactly 13 months after consuming the poisoned vitamins.\n\nSuppose instead that Ned died within two weeks solely because the hospital's ordinary negligence caused the severe staph infection.",
        q: "Is Mary the proximate cause of Ned's death?",
        opts: [
            "No, the superbug is a superseding cause.",
            "Yes, because ordinary medical negligence and subsequent infections are foreseeable dependent intervening causes.",
            "No, because the hospital's failure to maintain sterile environments completely severs the chain of legal causation from the initial poisoning.",
            "Yes, because medical errors are strictly irrelevant in criminal law."
        ],
        ans: 1,
        exp: "An original assailant is the proximate cause of a victim's death if the death results from ordinary medical negligence or foreseeable infections contracted during treatment for the inflicted wound. These are considered dependent intervening causes that do not break the chain of legal causation."
    },
    {
        id: 20,
        topic: "Inchoate Crimes / Attempted Murder vs. Completed Homicide Barriers",
        fp: "Mary holds a deep grudge against Ned. She slips a slow-acting, untraceable poison into Ned's daily vitamins. Ned immediately falls ill and is hospitalized in a coma. Due to his weakened immune system, Ned contracts a severe staph infection due to ordinary hospital negligence. He remains on life support but eventually dies from the combined effects of the poison and infection exactly 13 months after consuming the poisoned vitamins.",
        q: "If Mary is acquitted of homicide exclusively due to the common law year-and-a-day rule, what is her highest potential criminal liability?",
        opts: [
            "Aggravated assault, because inchoate homicide charges automatically merge into the completed physical battery upon the victim's death.",
            "Solicitation to commit murder, because she acquired the poison from a third party.",
            "No crime, because the year-and-a-day rule provides absolute transactional immunity.",
            "Attempted murder, because she had specific intent and took a substantial step."
        ],
        ans: 3,
        exp: "If a defendant cannot be convicted of a completed homicide due to a legal barrier like the year-and-a-day rule, they remain fully liable for attempted murder. Mary possessed the specific intent to kill and completed the actus reus by poisoning the vitamins, satisfying all elements of attempt."
    },
    // FACT PATTERN 8 (Q21-Q22)
    {
        id: 21,
        topic: "Defenses / Necessity (Choice of Evils)",
        fp: "Owen and Patty are hiking in a remote mountain range when a sudden, freak blizzard traps them. Facing imminent death from freezing temperatures and starvation, they break into a locked, unoccupied private cabin owned by Quinn. Inside, they consume $200 worth of Quinn's emergency food rations and burn his antique wooden chairs to stay warm.",
        q: "Can Owen and Patty successfully assert the defense of necessity against charges of burglary and property damage?",
        opts: [
            "Yes, because they acted to prevent imminent harm (freezing/starving) greater than the property crimes committed.",
            "No, because necessity never applies to intentional property damage.",
            "Yes, because the 'castle doctrine' allows stranded individuals to assume temporary ownership of abandoned rural structures during severe weather events.",
            "No, because they were trespassing."
        ],
        ans: 0,
        exp: "The necessity defense (choice of evils) excuses a criminal act if the defendant reasonably believed the conduct was necessary to avoid a greater, imminent harm caused by natural forces. Saving human life from a blizzard far outweighs the property damage of breaking in and consuming food/wood."
    },
    {
        id: 22,
        topic: "Defenses / Necessity Limitations (Harming Innocent Third Parties)",
        fp: "Owen and Patty are hiking in a remote mountain range when a sudden, freak blizzard traps them. Facing imminent death from freezing temperatures and starvation, they break into a locked, unoccupied private cabin owned by Quinn. Inside, they consume $200 worth of Quinn's emergency food rations and burn his antique wooden chairs to stay warm.\n\nSuppose Quinn was actually inside the cabin. He refuses to let them in, aiming a rifle at them to protect his limited supplies. Desperate, Owen and Patty overpower Quinn, tie him to a chair, and lock him in a closet for three days while they survive the storm.",
        q: "Can Owen and Patty assert the necessity defense against a charge of false imprisonment regarding Quinn?",
        opts: [
            "Yes, because securing the owner was reasonably necessary to facilitate their survival during the blizzard.",
            "No, because necessity only applies to property, not persons.",
            "No, because the necessity defense is generally unavailable when the defendant's actions cause harm to an innocent third party who is merely protecting their own lawful rights.",
            "Yes, because the owner's attempt to eject them constituted an unlawful use of deadly force in a blizzard."
        ],
        ans: 2,
        exp: "Necessity generally cannot be used to justify harming an innocent third party or overriding an innocent person's lawful rights to protect themselves. While necessity justifies trespassing against property, it does not justify committing violent torts/crimes against a property owner defending their home."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Defenses / Voluntary Intoxication (Specific Intent Exception)",
        fp: "Steve goes to a party and drinks heavily until he is severely intoxicated. On his walk home, a stranger approaches and offers to sell him a brand new laptop for $10. The stranger explicitly whispers, 'I just stole this from the store across the street.' Steve, heavily slurring his words and unable to process information properly, laughs and hands over the $10, genuinely not comprehending that the item is stolen due to his extreme inebriation.",
        q: "Can Steve successfully use voluntary intoxication as a defense to the charge of receiving stolen property?",
        opts: [
            "No, because receiving stolen property is a strict liability public welfare offense.",
            "Yes, because voluntary intoxication negated the specific knowledge required.",
            "No, because the act of voluntarily consuming alcohol substitutes for the mens rea required to permanently deprive the owner of their belongings.",
            "Yes, but only if his intoxication was involuntary due to spiked drinks."
        ],
        ans: 1,
        exp: "Receiving stolen property requires specific subjective knowledge that the property is stolen. Voluntary intoxication is a valid defense if it prevents the defendant from forming the required specific mental state (in this case, the cognitive capacity to know the item was stolen)."
    },
    {
        id: 24,
        topic: "Defenses / Voluntary Intoxication (General Intent Limitation)",
        fp: "Steve goes to a party and drinks heavily until he is severely intoxicated. On his walk home, a stranger approaches and offers to sell him a brand new laptop for $10. The stranger explicitly whispers, 'I just stole this from the store across the street.' Steve, heavily slurring his words and unable to process information properly, laughs and hands over the $10, genuinely not comprehending that the item is stolen due to his extreme inebriation.\n\nAfter buying the laptop, Steve finds an unlocked car with the keys inside. He gets in and drives wildly down the street. He hops a curb and strikes a pedestrian, causing severe injuries.",
        q: "If Steve is charged with battery against the pedestrian, can he use his voluntary intoxication as a defense?",
        opts: [
            "Yes, because he lacked specific intent.",
            "Yes, because his severe intoxication rendered him legally unconscious and incapable of performing a voluntary physical actus reus.",
            "No, because battery requires premeditation which can be formed while intoxicated.",
            "No, because battery is a general intent crime, and voluntary intoxication is no defense."
        ],
        ans: 3,
        exp: "Battery is a general intent crime (which can be committed through criminal recklessness). Voluntary intoxication is never a defense to general intent or recklessness crimes, because the act of voluntarily drinking is legally substituted for the required reckless mental state."
    },
    {
        id: 25,
        topic: "Defenses / Mistake of Fact vs. Intoxication",
        fp: "Steve goes to a party and drinks heavily until he is severely intoxicated. On his walk home, a stranger approaches and offers to sell him a brand new laptop for $10. The stranger explicitly whispers, 'I just stole this from the store across the street.' Steve, heavily slurring his words and unable to process information properly, laughs and hands over the $10, genuinely not comprehending that the item is stolen due to his extreme inebriation.",
        q: "How does the legal doctrine of Mistake of Fact intersect with Steve's voluntary intoxication regarding the receiving stolen property charge?",
        opts: [
            "He must prove the mistake was objectively reasonable, because intoxication cannot excuse an unreasonable mistake.",
            "Because receiving stolen property requires specific knowledge, his intoxication can be used to show he made an honest mistake of fact, even if the mistake was objectively unreasonable.",
            "Mistake of fact is barred when the defendant is intoxicated.",
            "He is strictly liable regardless of his mistake, because he operated a motor vehicle while impaired."
        ],
        ans: 1,
        exp: "Mistake of fact is a defense to a specific intent/knowledge crime if it negates the required mens rea, and the mistake need only be subjective/honest, not objectively reasonable. Evidence of voluntary intoxication is admissible to explain why the defendant made an honest (though objectively unreasonable) mistake regarding the stolen nature of the property."
    }
];