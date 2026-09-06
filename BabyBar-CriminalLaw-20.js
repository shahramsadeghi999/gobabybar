const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Homicide / Felony Murder (Provocative Act vs Pinkerton)",
        fp: "Alice and Bob plan to rob a jewelry store. Bob stays in the running getaway car. Alice enters the store and engages in a shootout with an armed guard. To escape, Alice grabs a customer, using him as a human shield. The guard fires at Alice but strikes and kills the customer. Alice flees the store. Meanwhile, Bob, hearing the sirens and unaware of the shooting, speeds away in panic, inadvertently running over and killing a pedestrian in the crosswalk.",
        q: "Is Bob liable for the death of the customer inside the store?",
        opts: [
            "No, because the guard who fired the fatal shot was not a co-felon, negating all agency-theory liability.",
            "Yes, because under the provocative act doctrine, Alice's extreme recklessness in utilizing a human shield imputes implied malice to all participating co-felons.",
            "No, because Bob was not physically present inside the structure when the lethal confrontation occurred.",
            "Yes, because the strict strict liability framework of the Redline rule exclusively applies to the deaths of innocent bystanders rather than active participants."
        ],
        ans: 1,
        exp: "Under the provocative act doctrine, a felon who commits an extremely reckless act (like using a human shield) that provokes lethal return fire is liable for murder based on their own implied malice. Under co-conspirator/accomplice liability, Bob is vicariously liable for the foreseeable crimes of his co-felon committed in furtherance of the robbery, including provocative act murder."
    },
    {
        id: 2,
        topic: "Homicide / Felony Murder (Res Gestae)",
        fp: "Alice and Bob plan to rob a jewelry store. Bob stays in the running getaway car. Alice enters the store and engages in a shootout with an armed guard. To escape, Alice grabs a customer, using him as a human shield. The guard fires at Alice but strikes and kills the customer. Alice flees the store. Meanwhile, Bob, hearing the sirens and unaware of the shooting, speeds away in panic, inadvertently running over and killing a pedestrian in the crosswalk.",
        q: "Is Alice liable for the pedestrian's death caused by Bob's driving?",
        opts: [
            "No, because she was not an occupant of the getaway vehicle at the moment the collision took place.",
            "No, because the robbery was legally terminated the moment she exited the commercial premises.",
            "Yes, because the death occurred during the immediate flight (res gestae) from the robbery, triggering vicarious liability.",
            "Yes, but her culpability is restricted solely to the lesser included offense of involuntary manslaughter."
        ],
        ans: 2,
        exp: "The 'res gestae' of a felony includes the immediate flight from the scene. If a death occurs during the escape, before the felons have reached a place of temporary safety, the felony murder rule applies. As a co-felon, Alice is fully liable for the foreseeable lethal actions of her getaway driver during the escape."
    },
    {
        id: 3,
        topic: "Parties to a Crime / Accomplice Liability (Specific Intent)",
        fp: "Alice and Bob plan to rob a jewelry store. Bob stays in the running getaway car. Alice enters the store and engages in a shootout with an armed guard. To escape, Alice grabs a customer, using him as a human shield. The guard fires at Alice but strikes and kills the customer. Alice flees the store. Meanwhile, Bob, hearing the sirens and unaware of the shooting, speeds away in panic, inadvertently running over and killing a pedestrian in the crosswalk.",
        q: "If Bob is charged with the attempted murder of the guard (based on Alice's shootout), what is the most likely outcome?",
        opts: [
            "He is not guilty, because attempted murder requires a shared specific intent to kill, which he lacked.",
            "He is guilty, because the attempt merges directly with the completed overarching conspiracy.",
            "He is not guilty, because the guard survived the encounter without sustaining a fatal ballistic injury.",
            "He is guilty, because natural and probable consequences automatically impute specific intent."
        ],
        ans: 0,
        exp: "To be convicted of a specific intent crime as an accomplice (like attempted murder), the accomplice must share the specific intent of the principal. Bob only intended to commit a robbery; he did not intend to kill the guard. Thus, he cannot be convicted of attempted murder (though he is liable for felony murder for the actual deaths)."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Involuntary Intoxication vs. Mistake of Fact",
        fp: "Charlie is at a private party. Without his knowledge, a powerful hallucinogen is slipped into his drink. Later that night, he hallucinates vividly that his friend Dave is a ferocious, attacking bear. Terrified, Charlie shoots Dave. Dave survives but is permanently paralyzed. Charlie is charged with aggravated battery.",
        q: "Can Charlie successfully claim self-defense against the aggravated battery charge?",
        opts: [
            "Yes, because involuntary intoxication functions as temporary insanity, excusing conduct if it creates a severe mistake of fact.",
            "No, because the general intent required for battery cannot be negated by any form of intoxication.",
            "No, because a valid self-defense claim requires objective reasonableness judged from the perspective of a completely sober person.",
            "Yes, but the claim is strictly restricted to establishing imperfect self-defense."
        ],
        ans: 0,
        exp: "Involuntary intoxication is treated identically to the insanity defense. It provides a complete defense to ALL crimes (including general intent crimes like battery) if it renders the defendant unable to understand the nature of their act or causes a profound mistake of fact that negates culpability, regardless of objective reasonableness."
    },
    {
        id: 5,
        topic: "Defenses / Voluntary Intoxication (General Intent Limitation)",
        fp: "Charlie is at a private party. Without his knowledge, a powerful hallucinogen is slipped into his drink. Later that night, he hallucinates vividly that his friend Dave is a ferocious, attacking bear. Terrified, Charlie shoots Dave. Dave survives but is permanently paralyzed. Charlie is charged with aggravated battery.\n\nAssume instead that Charlie took the hallucinogen entirely voluntarily, fully knowing its effects. He hallucinates the bear and shoots Dave.",
        q: "Could Charlie use his voluntary intoxication as a defense to the battery charge?",
        opts: [
            "Yes, because extreme hallucinations fundamentally negate the physical volition necessary to complete a criminal actus reus.",
            "Yes, but only if he did not intentionally bring the firearm to the social gathering.",
            "No, because voluntary intoxication is never a legally recognized defense to a general intent crime.",
            "No, because the victim suffered permanent paralysis, triggering strict liability enhancement statutes."
        ],
        ans: 2,
        exp: "Battery is a general intent crime. Voluntary intoxication is NEVER a defense to general intent crimes, as the act of voluntarily consuming the intoxicant legally substitutes for the reckless mental state required for the offense."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Inchoate Crimes / Conspiracy (Wharton's Rule Exception)",
        fp: "Eve and Fred agree to bribe a foreign official. The statute explicitly requires exactly two participants: a bribe giver and a foreign official receiver. Eve and Fred gather the funds. Fred travels overseas to meet the official to finalize the deal. However, the 'official' is actually an undercover FBI agent who immediately arrests Fred.",
        q: "Are Eve and Fred guilty of conspiracy to bribe?",
        opts: [
            "No, because Wharton's rule absolutely bars a conspiracy charge for offenses requiring mutual cooperation.",
            "Yes, because bribery is an independent collateral felony that bypasses standard merger limitations.",
            "No, because the targeted official was operating in an undercover federal capacity.",
            "Yes, because two people agreed to bribe a third party, falling under the third-party exception to Wharton's Rule."
        ],
        ans: 3,
        exp: "Wharton's Rule prohibits a conspiracy charge for a crime that logically requires exactly two people (like bribery) if only those two people agree to commit it. However, the 'third-party exception' applies when more people participate in the agreement than are necessary to commit the crime. Because Eve and Fred (two people) agreed to bribe a third (the official), the rule does not bar the charge."
    },
    {
        id: 7,
        topic: "Inchoate Crimes / Attempt (Factual vs Legal Impossibility)",
        fp: "Eve and Fred agree to bribe a foreign official. The statute explicitly requires exactly two participants: a bribe giver and a foreign official receiver. Eve and Fred gather the funds. Fred travels overseas to meet the official to finalize the deal. However, the 'official' is actually an undercover FBI agent who immediately arrests Fred.",
        q: "Is Fred guilty of attempted bribery?",
        opts: [
            "No, because bribing an undercover agent constitutes pure legal impossibility.",
            "Yes, because factual impossibility is no defense and he took a substantial step.",
            "No, because his actions constituted mere preliminary preparation rather than dangerous proximity.",
            "Yes, because foreign corrupt practices act violations enforce strict liability."
        ],
        ans: 1,
        exp: "Attempt requires specific intent and a substantial step. Factual impossibility (the fact that the official was an FBI agent) is not a defense to an attempt charge. Fred is judged based on the facts as he believed them to be. Since he believed he was meeting a corrupt official and offered the bribe, he is guilty of attempted bribery."
    },
    {
        id: 8,
        topic: "Inchoate Crimes / Conspiracy (Overt Act Requirement)",
        fp: "Eve and Fred agree to bribe a foreign official. The statute explicitly requires exactly two participants: a bribe giver and a foreign official receiver. Eve and Fred gather the funds. Fred travels overseas to meet the official to finalize the deal. However, the 'official' is actually an undercover FBI agent who immediately arrests Fred.",
        q: "Does Eve's liability for conspiracy depend on Fred actually handing over the money?",
        opts: [
            "Yes, because the agreement itself is insufficient without the completion of the target offense under modern common law.",
            "No, because the physical acceptance of the illicit funds by the recipient is never legally mandated.",
            "No, because merely gathering the funds constitutes a sufficient overt act in furtherance of the agreement.",
            "Yes, gathering funds is considered mere preparation."
        ],
        ans: 2,
        exp: "Conspiracy requires an agreement and an overt act in furtherance of the conspiracy. The overt act does NOT need to be the completed crime itself; it can be any act that shows the conspiracy is at work. Gathering the funds or traveling overseas clearly satisfies the overt act requirement."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Property Crimes / False Pretenses vs. Larceny by Trick",
        fp: "Gina is an entry-level accountant with no signing authority over corporate accounts. She tricks the Chief Financial Officer into signing a blank company check by falsely claiming it is needed to pay an urgent IRS tax penalty. Once signed, Gina makes the check out to herself for $50,000 and deposits it. Later that week, Gina finds a company laptop in the lobby. She decides to take it home just to 'borrow' it for the weekend, but a week later, she sells it online.",
        q: "What crime did Gina commit regarding the $50,000 check?",
        opts: [
            "False pretenses, because the CFO intended to transfer legal title to the funds.",
            "Larceny by trick, because the CFO only transferred temporary custody.",
            "Embezzlement, because Gina was an official corporate employee.",
            "Forgery, because she signed her own name on the payee line."
        ],
        ans: 0,
        exp: "False pretenses requires that the victim intend to transfer legal TITLE (ownership) to the defendant based on an intentional false representation of fact. Because the CFO intended to transfer full ownership of the $50,000 (believing it was going to the IRS), Gina obtained title via deceit, constituting false pretenses."
    },
    {
        id: 10,
        topic: "Property Crimes / Larceny (Intent Timing)",
        fp: "Gina is an entry-level accountant with no signing authority over corporate accounts. She tricks the Chief Financial Officer into signing a blank company check by falsely claiming it is needed to pay an urgent IRS tax penalty. Once signed, Gina makes the check out to herself for $50,000 and deposits it. Later that week, Gina finds a company laptop in the lobby. She decides to take it home just to 'borrow' it for the weekend, but a week later, she sells it online.",
        q: "What crime did Gina commit regarding the laptop at the exact moment she removed it from the lobby?",
        opts: [
            "Larceny, because borrowing company property without express authorization automatically establishes a continuous trespassory taking.",
            "No crime, because she intended to borrow it, lacking the specific intent to permanently deprive.",
            "Embezzlement, because her status as an accountant granted her overarching fiduciary possession of all corporate hardware assets.",
            "Trespass to chattels only."
        ],
        ans: 1,
        exp: "Larceny is a specific intent crime requiring the intent to PERMANENTLY deprive the owner of their property AT THE TIME of the taking. Because Gina only intended to borrow the laptop for the weekend when she took it, she lacked the requisite mens rea for larceny at that moment."
    },
    {
        id: 11,
        topic: "Property Crimes / Continuing Trespass Doctrine",
        fp: "Gina is an entry-level accountant with no signing authority over corporate accounts. She tricks the Chief Financial Officer into signing a blank company check by falsely claiming it is needed to pay an urgent IRS tax penalty. Once signed, Gina makes the check out to herself for $50,000 and deposits it. Later that week, Gina finds a company laptop in the lobby. She decides to take it home just to 'borrow' it for the weekend, but a week later, she sells it online.",
        q: "When Gina sold the laptop a week later, did the continuing trespass doctrine apply to make her guilty of larceny?",
        opts: [
            "Yes, because the continuous unauthorized retention of the hardware converted the initial taking into a permanent deprivation.",
            "No, because the initial taking was not wrongful or trespassory since she genuinely intended to borrow the item.",
            "Yes, it becomes embezzlement.",
            "Yes, because property theft statutes impose strict liability upon the ultimate unauthorized commercial sale of the asset."
        ],
        ans: 1,
        exp: "The continuing trespass doctrine fictionally extends a trespassory taking until the moment the defendant forms the intent to steal. However, it ONLY applies if the initial taking was wrongful (trespassory). Because Gina's initial taking was not wrongful (assuming implied permission or lack of wrongful intent in 'borrowing'), the doctrine does not apply."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Property Crimes / Burglary (Intent Timing & Dwelling)",
        fp: "Harry is caught in a severe thunderstorm. He breaks into an RV (motorhome) parked in a driveway at night, thinking it is completely abandoned, purely to seek shelter and sleep. Inside the RV, he discovers a locked floor safe. He decides to blow the safe open with a stick of dynamite he was carrying. The explosion accidentally catches the entire RV on fire, destroying it completely.",
        q: "Is Harry guilty of common law burglary?",
        opts: [
            "Yes, because an RV utilized for habitation functions as a legally recognized dwelling house.",
            "Yes, because he utilized highly destructive explosives to bypass the internal security mechanisms.",
            "No, because he lacked the specific intent to commit a felony at the time of the breaking and entering.",
            "No, because a motorized recreational vehicle categorically fails to meet the permanent structure requirement."
        ],
        ans: 2,
        exp: "Common law burglary requires the specific intent to commit a felony inside the dwelling AT THE TIME of the breaking and entering. Because Harry only intended to escape the storm and sleep upon entry, he lacked the specific intent required for burglary. His later decision to blow the safe does not retroactively establish burglary."
    },
    {
        id: 13,
        topic: "Property Crimes / Arson (Malice Requirement)",
        fp: "Harry is caught in a severe thunderstorm. He breaks into an RV (motorhome) parked in a driveway at night, thinking it is completely abandoned, purely to seek shelter and sleep. Inside the RV, he discovers a locked floor safe. He decides to blow the safe open with a stick of dynamite he was carrying. The explosion accidentally catches the entire RV on fire, destroying it completely.",
        q: "Is Harry guilty of common law arson?",
        opts: [
            "Yes, because he utilized an inherently volatile explosive device within the confined space.",
            "Yes, because the recreational vehicle was entirely consumed by the resulting conflagration.",
            "No, because a motorized RV cannot be classified as a permanent dwelling house.",
            "No, because he lacked the malicious intent to burn the structure, as the fire was an accidental byproduct of blowing the safe."
        ],
        ans: 3,
        exp: "Common law arson requires the MALICIOUS burning of the dwelling of another. Malice requires an intentional burning or an extreme, reckless disregard of an obvious risk of burning the structure itself. While using dynamite is dangerous, if the fire was a purely accidental byproduct of trying to open the safe, the specific malice to burn the dwelling is absent."
    },
    {
        id: 14,
        topic: "Defenses / Necessity Scope",
        fp: "Harry is caught in a severe thunderstorm. He breaks into an RV (motorhome) parked in a driveway at night, thinking it is completely abandoned, purely to seek shelter and sleep. Inside the RV, he discovers a locked floor safe. He decides to blow the safe open with a stick of dynamite he was carrying. The explosion accidentally catches the entire RV on fire, destroying it completely.",
        q: "If Harry claims the defense of private necessity for entering the RV to escape the storm, does this defense shield him from liability for blowing the safe?",
        opts: [
            "Yes, because necessity provides an absolute umbrella of transactional immunity covering all acts committed within the structure.",
            "No, because necessity only justifies the initial trespass to seek shelter, not the unrelated safe-blowing.",
            "Yes, because he was trapped by the severe weather conditions.",
            "No, because he did not secure the implied consent of the property owner prior to entry."
        ],
        ans: 1,
        exp: "The necessity defense justifies committing a minor crime (like trespass) only if it is reasonably necessary to avoid a greater, imminent harm. While necessity justifies Harry's initial trespass (entering to avoid the storm), blowing up a safe was completely unnecessary for his survival, so the defense does not apply to the property damage or theft."
    },
    // FACT PATTERN 6 (Q15-Q16)
    {
        id: 15,
        topic: "Defenses / Duress (Homicide Limitation)",
        fp: "Ian holds a loaded gun to Jane's head. He hands her a vial of liquid and says, 'Pour this poison into your husband's soup right now, or I will pull the trigger and blow your brains out.' Terrified, Jane pours the poison into the soup. Her husband eats the soup and dies.",
        q: "Can Jane successfully assert the defense of duress against the murder charge?",
        opts: [
            "Yes, because she faced an imminent and overwhelming lethal threat to her own physical survival.",
            "No, because duress is never a legally recognized defense to an intentional criminal homicide under the traditional common law.",
            "Yes, if she can prove that she honestly and reasonably feared for her life at the precise moment she poured the substance.",
            "No, because the use of a toxic chemical substance implies a degree of premeditated reflection that defeats the coercion narrative."
        ],
        ans: 1,
        exp: "Under traditional common law, duress is NEVER a defense to an intentional killing. The rationale is that a person may not take the life of an innocent third party to save their own life. Jane is guilty of murder despite the extreme coercion."
    },
    {
        id: 16,
        topic: "Parties to a Crime / Innocent Agent Doctrine (Coercer Liability)",
        fp: "Ian holds a loaded gun to Jane's head. He hands her a vial of liquid and says, 'Pour this poison into your husband's soup right now, or I will pull the trigger and blow your brains out.' Terrified, Jane pours the poison into the soup. Her husband eats the soup and dies.",
        q: "What is Ian's criminal liability for the husband's death?",
        opts: [
            "He is guilty only of criminal solicitation, because he did not personally administer the toxic substance.",
            "He is liable merely as an accomplice who provided the physical instrumentality of the offense.",
            "He is guilty as a principal in the first degree, utilizing an innocent or coerced agent to commit the actus reus.",
            "He bears absolutely no legal liability for the homicide because Jane independently performed the fatal voluntary act."
        ],
        ans: 2,
        exp: "When a person forces an innocent or severely coerced party to commit a crime under threat of death, the coercer (Ian) is treated under criminal agency principles as the principal in the first degree, just as if he had poured the poison himself."
    },
    // FACT PATTERN 7 (Q17-Q19)
    {
        id: 17,
        topic: "Property Crimes / Extortion (Future Harm)",
        fp: "Kyle walks up to Liam on the street. Kyle says, 'Give me your briefcase or I'll break your knees tomorrow.' Liam refuses. Kyle then pulls a knife and says, 'Give it to me right now.' Liam hands it over. Kyle opens the briefcase, sees it is full of worthless blank paper, and throws it back at Liam in disgust.",
        q: "What property crime did Kyle commit when he issued the first threat regarding breaking Liam's knees tomorrow?",
        opts: [
            "Robbery, because any threat of physical violence automatically satisfies the statutory elements of the offense.",
            "Assault, because the verbalized threat inherently created a reasonable apprehension of bodily injury.",
            "Larceny, because he attempted to secure an unprivileged taking of another's personal property.",
            "Extortion, because he threatened future physical harm."
        ],
        ans: 3,
        exp: "Extortion (blackmail) involves obtaining property or compelling action by means of a threat of FUTURE harm. Threatening to break Liam's knees 'tomorrow' is a threat of future physical harm, distinct from the immediate threat required for robbery."
    },
    {
        id: 18,
        topic: "Property Crimes / Robbery (Immediate Harm & Value)",
        fp: "Kyle walks up to Liam on the street. Kyle says, 'Give me your briefcase or I'll break your knees tomorrow.' Liam refuses. Kyle then pulls a knife and says, 'Give it to me right now.' Liam hands it over. Kyle opens the briefcase, sees it is full of worthless blank paper, and throws it back at Liam in disgust.",
        q: "Is Kyle guilty of robbery for the second threat with the knife?",
        opts: [
            "Yes, because he obtained property from the victim's presence by the threat of immediate physical harm.",
            "No, because the briefcase ultimately contained worthless materials, preventing the satisfaction of felony value thresholds.",
            "No, because he did not make actual physical contact with the victim's person.",
            "Yes, but the robbery charge completely merges into the prior extortionate threat."
        ],
        ans: 0,
        exp: "Robbery requires taking property from the person or presence of another by force or the threat of IMMEDIATE physical harm. Pulling a knife and demanding the item 'right now' satisfies the immediate threat. The actual monetary value of the item taken (the briefcase) is irrelevant for establishing the basic elements of robbery."
    },
    {
        id: 19,
        topic: "Property Crimes / Larceny & Robbery (Abandonment)",
        fp: "Kyle walks up to Liam on the street. Kyle says, 'Give me your briefcase or I'll break your knees tomorrow.' Liam refuses. Kyle then pulls a knife and says, 'Give it to me right now.' Liam hands it over. Kyle opens the briefcase, sees it is full of worthless blank paper, and throws it back at Liam in disgust.",
        q: "Does Kyle's immediate return of the briefcase negate the robbery charge?",
        opts: [
            "Yes, because the prompt return of the asset legally negates the specific intent to permanently deprive.",
            "Yes, because it fundamentally reduces the completed offense to a mere attempted robbery.",
            "No, because the crime was fully complete the exact moment he took physical possession with the requisite specific intent.",
            "No, because throwing an object at a victim constitutes an independent abandonment."
        ],
        ans: 2,
        exp: "The crimes of larceny and robbery are complete the moment the defendant achieves physical possession (caption) and performs any slight movement (asportation) with the intent to permanently deprive. Returning the property moments later out of disgust or disappointment does not undo the already completed crime."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Homicide / Proximate Causation (Foreseeable Reactions)",
        fp: "Mona intends to kill Ned. She shoots a pistol at Ned but misses. The bullet hits a pressurized gas tank behind him. The gas tank leaks toxic fumes. A bystander, Paul, is overcome by the fumes and collapses. Mona, a trained EMT carrying a full oxygen kit, sees Paul dying on the ground but maliciously walks away. Paul dies from the fumes.",
        q: "Is Mona the proximate cause of Paul's death based on the initial shooting?",
        opts: [
            "Yes, because the toxic leak and resulting bystander injury were a foreseeable result of firing a weapon at a pressurized gas tank, making her the proximate legal cause.",
            "No, because the structural failure of the gas tank constitutes an unforeseeable superseding intervening event.",
            "No, because her specific intent was strictly limited to eliminating Ned.",
            "Yes, because criminal defendants face strict liability for all environmental hazards."
        ],
        ans: 0,
        exp: "A defendant is the proximate cause of death if the result is a foreseeable consequence of their actions. Striking a gas tank and causing a leak during a shootout is highly foreseeable. The fact that an unintended victim died from the fumes does not break the chain of causation."
    },
    {
        id: 21,
        topic: "Homicide / Omissions & Duty to Rescue (Creation of Peril)",
        fp: "Mona intends to kill Ned. She shoots a pistol at Ned but misses. The bullet hits a pressurized gas tank behind him. The gas tank leaks toxic fumes. A bystander, Paul, is overcome by the fumes and collapses. Mona, a trained EMT carrying a full oxygen kit, sees Paul dying on the ground but maliciously walks away. Paul dies from the fumes.",
        q: "Did Mona have an affirmative legal duty to rescue Paul?",
        opts: [
            "No, because standard common law never imposes an affirmative duty upon strangers to execute a rescue operation.",
            "Yes, because she personally created the fatal peril that caused Paul's injury, imposing a strict affirmative legal duty to act.",
            "No, because off-duty medical professionals are exclusively bound by civil liability rather than criminal mandates.",
            "Yes, because she possessed the specialized medical equipment required to effectuate the rescue."
        ],
        ans: 1,
        exp: "While a stranger generally has no duty to rescue, a legal duty to act arises if the defendant themselves CREATED the peril. Because Mona's shooting caused the gas leak that incapacitated Paul, she had an affirmative legal duty to attempt a rescue. Her malicious failure to do so can independently support a homicide conviction."
    },
    {
        id: 22,
        topic: "Inchoate Crimes / Attempted Murder (Transferred Intent Limits)",
        fp: "Mona intends to kill Ned. She shoots a pistol at Ned but misses. The bullet hits a pressurized gas tank behind him. The gas tank leaks toxic fumes. A bystander, Paul, is overcome by the fumes and collapses. Mona, a trained EMT carrying a full oxygen kit, sees Paul dying on the ground but maliciously walks away. Paul dies from the fumes.",
        q: "Can Mona be charged with the attempted murder of Ned?",
        opts: [
            "Yes, because she took a substantial step with the specific intent to kill him.",
            "No, because her ballistic trajectory completely missed the intended human target.",
            "No, because the inchoate charge automatically merges into the completed homicide of the bystander.",
            "Yes, but only if Ned was subjectively aware of the discharging firearm."
        ],
        ans: 0,
        exp: "Attempted murder requires the specific intent to kill and an overt act beyond mere preparation (a substantial step). Firing a gun directly at Ned with the intent to kill him satisfies all elements of attempted murder, regardless of the fact that she missed."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Defenses / Entrapment (Subjective Predisposition)",
        fp: "Quinn, a sovereign citizen and known black-market dealer, believes federal drug laws are unconstitutional. An undercover cop approaches Quinn and aggressively begs him to sell cocaine to fund a 'revolution.' Quinn agrees. Quinn sells the cop a bag of white powder, honestly believing it's cocaine. The powder is actually just baking soda.",
        q: "Can Quinn successfully assert an entrapment defense under the subjective test?",
        opts: [
            "Yes, because the undercover officer utilized extreme emotional coercion by begging him.",
            "No, because his prior status as an active black-market dealer demonstrates a predisposition to commit the illicit offense, defeating the subjective test.",
            "Yes, because sovereign citizens possess qualified constitutional immunity from sting operations.",
            "No, because the powder he sold was ultimately harmless baking soda."
        ],
        ans: 1,
        exp: "The subjective test for entrapment requires the defendant to prove they were NOT predisposed to commit the crime prior to government contact. Because Quinn is an active black-market dealer who agreed to the sale, he is legally predisposed. Therefore, the subjective entrapment defense fails, regardless of the officer's begging."
    },
    {
        id: 24,
        topic: "Defenses / Mistake of Law (Constitutional Beliefs)",
        fp: "Quinn, a sovereign citizen and known black-market dealer, believes federal drug laws are unconstitutional. An undercover cop approaches Quinn and aggressively begs him to sell cocaine to fund a 'revolution.' Quinn agrees. Quinn sells the cop a bag of white powder, honestly believing it's cocaine. The powder is actually just baking soda.",
        q: "Can Quinn claim mistake of law regarding his belief that the drug laws are unconstitutional?",
        opts: [
            "Yes, because he sincerely and honestly believed the federal statutes lacked valid legal authority.",
            "Yes, because his ideological stance fundamentally negates the specific intent required for narcotics trafficking.",
            "No, because a defendant's subjective personal belief that a duly enacted law is unconstitutional does not constitute a valid mistake of law defense.",
            "No, because federal drug trafficking regulations strictly impose absolute strict liability."
        ],
        ans: 2,
        exp: "A mistake of law (believing a criminal statute is invalid or unconstitutional) is generally never a defense to criminal liability, regardless of how honest the belief is. Personal ideological or 'sovereign citizen' legal theories do not excuse the violation of a valid criminal statute."
    },
    {
        id: 25,
        topic: "Inchoate Crimes / Attempt (Factual vs Legal Impossibility)",
        fp: "Quinn, a sovereign citizen and known black-market dealer, believes federal drug laws are unconstitutional. An undercover cop approaches Quinn and aggressively begs him to sell cocaine to fund a 'revolution.' Quinn agrees. Quinn sells the cop a bag of white powder, honestly believing it's cocaine. The powder is actually just baking soda.",
        q: "Is Quinn guilty of attempting to distribute cocaine?",
        opts: [
            "No, because the distribution of baking soda constitutes pure legal impossibility.",
            "No, because the harmless nature of the white powder prevented the transaction from meeting the dangerous proximity threshold.",
            "Yes, because factual impossibility is not a valid defense since he genuinely believed he was selling a controlled substance.",
            "Yes, because federal drug regulations impose strict liability on all commercial powdery substances."
        ],
        ans: 2,
        exp: "Attempt requires specific intent and a substantial step. Factual impossibility (the fact that the powder was baking soda, not cocaine) is not a defense to an attempt charge. Quinn is judged based on the facts as he believed them to be. Since he believed he was selling cocaine and completed the sale, he is guilty of attempted distribution."
    }
];