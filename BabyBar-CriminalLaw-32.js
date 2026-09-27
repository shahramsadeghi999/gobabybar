// BabyBar-CriminalLaw-32.js
const examData = [
    {
        id: 1,
        topic: "Homicide / First-Degree Murder",
        fp: "The defendant was addicted to heroin and frequently committed acts of prostitution to obtain the money she needed to buy drugs. One night, she was out looking for customers for prostitution when she was approached by a man who asked what her price was. When she told him that she would have intercourse with him for $20, he said that he would get the money from a friend and see her later. When the defendant went home several hours later, the man was waiting inside her apartment. He said that he wanted to have sex with her, but when the defendant repeated her demand for $20, he said that he had no money. She told him to get out or she would call the police. The man took a knife from his pocket, saying that if she did not have intercourse with him, he would kill her. Silently, the defendant took off her clothes and had intercourse with him.\n\nImmediately afterwards, the man fell asleep. The defendant tied his hands and feet to the four corners of the bed and woke him. She said, \"Now you are going to be punished for what you have done. I should kill you, but I won't because I want to make sure that you suffer for the rest of your life.\" Using his own knife, she began to cut and jab him with it, planning to torture but not to kill him. She stabbed and blinded him in both eyes, then cut off his sex organs. She also severed the tip of his nose and made a series of cuts across his face and chest.\n\nThe man died as a result of the injuries inflicted by the defendant. She was charged with first degree murder in a jurisdiction that defines that crime as \"the unlawful killing of a human being committed intentionally, with deliberation and premeditation.\"",
        q: "The court should find the defendant",
        opts: [
            "not guilty, because the defendant did not intend to cause the man's death.",
            "not guilty, because the defendant was acting in self-defense.",
            "guilty, because the man's death resulted from the defendant's commission of a dangerous felony.",
            "guilty, because the man's death resulted from torture."
        ],
        ans: 0,
        exp: "Since the statute requires intent, and since the defendant did not intend the man's death, she is not guilty of first degree murder under the statute.\n\nB is incorrect because once the man was asleep (and certainly once he was tied to the bed), the defendant was no longer in danger and therefore not privileged to use force in self-defense. Although some first degree murder statutes include deaths resulting from the commission of dangerous felonies, this particular statute does not. C is therefore incorrect. Many first degree murder statutes include death resulting from torture, but this one does not. D is therefore incorrect."
    },
    {
        id: 2,
        topic: "Crimes Against Person / Statutory Rape",
        fp: "One day when his parents were away, a boy and a girl, who were students at the same high school, cut class to go to the boy's home to play videogames. The boy was 17 years of age; the girl was 15. While there, they had intercourse. The boy believed that it was lawful to have intercourse with a female over the age of 14.\n\nA statute in the jurisdiction provides that \"A person is guilty of rape in the third degree when, being 17 years of age or more, he or she engages in sexual intercourse with a person under the age of 16 years.\"",
        q: "If the boy is charged with committing rape in the third degree by having intercourse with the girl, the court should find him",
        opts: [
            "guilty, because the boy was over the age of 17 and the girl was under the age of 16.",
            "guilty, only if he knew that the girl was under the age of 16.",
            "not guilty, if the girl instituted the conduct which led to sexual intercourse between them.",
            "not guilty, because the boy believed that it was lawful to have sexual intercourse with a female over the age of 14."
        ],
        ans: 0,
        exp: "Statutory rape is a crime for which no intent is required other than the intent to have sexual intercourse. The given statute defines it as sexual intercourse between a person 17 or older and a person under 16. Since the boy engaged in sexual intercourse with the girl while he was 17 and she was 15, he is guilty of violating the statute.\n\nSince the crime charged is a strict liability crime, B and C are incorrect because it is not necessary for the defendant to have knowledge of the \"victim's\" age, or to be the one who instituted the intercourse. D is incorrect because ignorance of the law ordinarily is not a defense."
    },
    {
        id: 3,
        topic: "Parties to a Crime / Accessory to Larcenous Conversion",
        fp: "Jason and Shannon were law students in the same Contracts class. Knowing that the professor kept his lecture notes in a cabinet in his office, they planned to break into the office for the purpose of copying his notes. Jason purchased a miniature camera for this purpose after discussing the purchase with Shannon and collecting half the cost from her. When they saw the professor leave his office at lunchtime, they went there. Shannon opened the locked door by slipping a strip of plastic under its latch. Once inside the office, Jason found the professor's notes and photographed them with the camera that he had purchased. Shannon noticed a gold-plated pen on the professor's desk and put it into her pocket without telling Jason. She did so with the intention of returning the pen in a week or two, hoping that in the meantime, the professor would be so upset about the loss of his pen that he would not notice that his notes had been disturbed. The following day, however, the pen was stolen from Shannon's briefcase.\n\nThe jurisdiction has a statute that defines the crime of \"larcenous conversion\" as \"intentionally carrying off property known to belong to another person.\"",
        q: "If Jason is charged with being an accessory to the larcenous conversion of the professor's pen, he should be found",
        opts: [
            "guilty, because Shannon committed the larcenous conversion while with Jason.",
            "guilty, because Shannon took the pen to keep the professor from noticing that his notes had been disturbed.",
            "not guilty, because Jason did not expect that Shannon would take the pen.",
            "not guilty, because Jason did not know that Shannon took the professor's pen."
        ],
        ans: 1,
        exp: "Co-conspirators are vicariously liable for crimes committed by members of the conspiracy in furtherance of its goals. Since one of the goals of Jason's and Shannon's agreement was to avoid the professor's notice, and since Shannon's taking of the pen was an attempt to accomplish that goal, Jason is vicariously liable for it.\n\nA is incorrect because mere presence during the commission of a crime is not enough to result in guilt. C and D are incorrect because a co-conspirator's vicarious liability does not depend on whether he or she knew or foresaw that the crime would occur, but simply on whether it was in furtherance of the conspiratorial goal."
    },
    {
        id: 4,
        topic: "Homicide / Criminal Homicide (Self-Defense)",
        fp: "After striking a police officer with a baseball bat, a man was charged with felonious assault. He was found not guilty by reason of insanity, but the judge directed that he report to a state-employed psychiatrist for weekly psychotherapy treatments. One day, while he was in the waiting room of the doctor's office, the man drew a knife and waved it at a nurse employed there, shouting, \"Lord Darkstar must die! The Empire will be restored!\" The nurse took a heavy decorative hard plastic replica of a medieval sword from the wall and held it in front of him. When the man saw this, he handed his knife to the nurse and knelt before him, crying and saying, \"Forgive me, Lord of the Galaxy.\" Although he realized that the man was no longer trying to kill him, the nurse struck him heavily on the head with the plastic sword, causing a fracture of the man's skull.\n\nTwo weeks after the incident, the man died as a result of the fractured skull that he sustained when the nurse struck him with the plastic sword.",
        q: "If the nurse is prosecuted for criminal homicide, he may properly be found",
        opts: [
            "guilty of murder, if he knew when he struck the man that the man would sustain a serious injury as a result.",
            "guilty of voluntary manslaughter, if he did not intend to inflict a serious injury by his act.",
            "not guilty of involuntary manslaughter, if a reasonable person in his position would have believed that the man was still trying to kill him.",
            "not guilty of any crime, because he acted in self-defense."
        ],
        ans: 0,
        exp: "Murder is the unlawful killing of a human being with malice aforethought. Malice aforethought may consist of intent to cause great bodily harm. A defendant has intent to cause great bodily harm when he or she desires or knows that his or her act will result in serious injury. Thus, if the nurse knew that his act would inflict a serious injury, he may be found to have acted with malice aforethought.\n\nVoluntary manslaughter is the unlawful killing of a human being with the intent to cause death or great bodily harm, but under circumstances of great emotional distress or mistaken justification. B is incorrect because if the nurse did not intend serious injury, he lacked the intent necessary to make him guilty of voluntary manslaughter. Self-defense is a privilege to use reasonable force to protect oneself against a threatened contact. Even if no contact is actually threatened, a defendant who uses force to protect himself or herself against an apparent threat may be privileged if he or she reasonably believed that a contact would occur. If a defendant actually believed that contact was threatened, deciding whether that belief was reasonable requires determining what the reasonable person in his or her position would have believed. If the defendant did not actually believe that contact was threatened, however, he or she had no privilege to use force even if the reasonable person in his or her position would have believed that such force was necessary. C and D are incorrect because the facts indicate that when the nurse struck the man, he was aware that the threat was over."
    },
    {
        id: 5,
        topic: "Property Crimes / Larceny (Dyer Act)",
        fp: "The defendant's roommate heard of someone in a nearby town who bought stolen cars. Because they needed money to pay their rent, the roommate proposed to the defendant that they steal a car and sell it. The defendant agreed, and the two of them went out immediately looking for a car to steal. When they found a late-model convertible parked at the curb, the roommate slipped a wire coat hanger under the convertible top and used it to open the door. Then the roommate short-circuited the wires under the car's dashboard so that he could start it without a key. The roommate got behind the wheel and drove the car while the defendant sat beside him. Later, because he felt drowsy, the defendant climbed into the back seat and went to sleep. Soon thereafter, the defendant and the roommate were arrested.",
        q: "The defendant is charged in a state court with larceny for the theft of the car. He should be found",
        opts: [
            "not guilty, unless he is guilty of conspiracy to commit larceny.",
            "guilty, if he was willing to help his roommate start the car if necessary.",
            "not guilty, since he did not aid or abet his roommate in starting or driving the car.",
            "guilty, unless he is convicted in a federal court of any crime arising from the incident."
        ],
        ans: 1,
        exp: "A person is guilty as an accessory if, with criminal intent, he or she aided and abetted in the commission of a crime, or if he or she stood by ready and willing to give aid in its commission. Thus, if the defendant was willing to help his roommate steal the car, he is guilty of larceny as an accessory.\n\nAlthough a co-conspirator is vicariously liable for crimes committed in furtherance of the conspiracy, this is not the only way that the defendant might be found guilty of larceny. As explained above, he may have been guilty as an accessory. A is therefore incorrect. C is incorrect because a person may aid and abet in the commission of a crime by making himself or herself available to assist in its perpetration if necessary. D is incorrect because the Double Jeopardy Clause of the United States Constitution does not apply to prosecutions by different sovereigns (such as by the United States and an individual state)."
    },
    {
        id: 6,
        topic: "Inchoate Crimes / Conspiracy to Receive Stolen Property",
        fp: "Two undercover police officers received an anonymous tip that the defendant was engaged in buying and selling stolen cars. The two officers got a car from the police impound lot and then met with the defendant. After the officers told the defendant the car was stolen, the defendant offered to buy it for $3,000. When the defendant handed the officers the money, they placed him under arrest.",
        q: "The defendant is charged with conspiracy to criminally receive stolen property. The court should find him",
        opts: [
            "guilty.",
            "guilty, unless he is convicted of attempting to criminally receive stolen property.",
            "not guilty, because neither officer actually intended to participate in the purchase or sale of a stolen vehicle.",
            "not guilty, because the car that he agreed to purchase from the officers was not actually stolen."
        ],
        ans: 2,
        exp: "A criminal conspiracy is an agreement between two or more persons to commit a crime. Without such an agreement, there can be no conspiracy. Since neither officer actually intended to commit a crime, the defendant never made such an agreement with either of them, even though he believed he did. For this reason, he cannot be guilty of conspiracy.\n\nA is therefore incorrect. B is incorrect for this reason, and because conspiracy is a separate crime that does not merge with the substantive crime that the conspirators agreed to commit. Thus, if there had been an agreement to receive stolen property, the defendant could be convicted of conspiracy in addition to being convicted of attempting to receive stolen property. Since the crime of conspiracy is complete when the conspirators agree to commit a crime, the fact that they never actually accomplished the purpose of their conspiracy does not prevent a conspiracy conviction. D is therefore incorrect."
    },
    {
        id: 7,
        topic: "Parties to a Crime / Accessory to Statutory Rape",
        fp: "One day, when Sean's parents were away, Sean, Vieve, and Kevin, who were students at the same high school, cut class to go to Sean's home and read poetry. Sean was 17 years of age; Vieve and Kevin were each 15. Sean and Vieve knew that Kevin was very shy. Vieve had intercourse with Sean while Kevin watched. Kevin knew the ages of Sean and Vieve. Kevin knew that it was unlawful to have intercourse with a female under the age of 16. Sean believed that it was lawful to have intercourse with a female over the age of 14.\n\nA statute in the jurisdiction provides that \"A person is guilty of rape in the third degree when, being 17 years of age or more, he or she engages in sexual intercourse with a person under the age of 16 years.\"",
        q: "If Kevin is charged with being an accessory to third degree rape, he should be found",
        opts: [
            "guilty, because he knew that it was unlawful for a male 17 years of age to have sexual intercourse with a female under 16 years of age.",
            "guilty, only if Sean was first charged with and convicted of the same crime.",
            "not guilty, if sexual intercourse between Sean and Vieve could have been accomplished without Kevin's assistance.",
            "not guilty, because he did not actually aid, abet, or facilitate sexual intercourse between Sean and Vieve."
        ],
        ans: 3,
        exp: "A person may be guilty as an accessory or accomplice if he or she intentionally aids, abets, or facilitates the commission of a crime. Standing by in silent acquiescence, however, does not constitute aiding, abetting, or facilitating unless the defendant is ready, willing, and able to render assistance in its commission if needed. Here, there is no indication that this was so.\n\nSince mere knowledge that a crime is being committed is not enough to result in liability, A is incorrect. B is incorrect because in the majority of jurisdictions, it is no longer necessary for the principal to be convicted before an accomplice can be tried. A person who intentionally aided, abetted, or facilitated the commission of a crime may be convicted even though his or her participation was not essential to its commission. C is therefore incorrect."
    },
    {
        id: 8,
        topic: "Property Crimes / Embezzlement vs Larceny",
        fp: "A bank teller received a cash deposit from a customer. Instead of placing the cash into the cash drawer, the teller immediately slipped the cash into his own pocket, intending to keep it.",
        q: "What crime has the teller committed?",
        opts: [
            "Larceny.",
            "Embezzlement.",
            "False Pretenses.",
            "Robbery."
        ],
        ans: 1,
        exp: "Because the teller received the money directly from a third party and had lawful possession of it before it was deposited into the employer's till, the conversion constitutes embezzlement rather than larceny."
    },
    {
        id: 9,
        topic: "Property Crimes / False Pretenses",
        fp: "A man approached a tourist on the street and offered to sell him a \"genuine Rolex watch\" for $500. The man knew the watch was a cheap counterfeit worth $20. Believing the man's representation, the tourist paid the $500 and took the watch.",
        q: "What crime has the man committed?",
        opts: [
            "Larceny by trick.",
            "Obtaining property by false pretenses.",
            "Embezzlement.",
            "Robbery."
        ],
        ans: 1,
        exp: "The man obtained title to the money (not just possession) by making a false representation of a material present fact with the intent to defraud. Because title passed, it is false pretenses, not larceny by trick."
    },
    {
        id: 10,
        topic: "Homicide / Felony Murder (Agency Theory)",
        fp: "Two armed men entered a jewelry store to commit a robbery. As they demanded the jewels, the store owner pulled out a shotgun and fired at them. The blast missed the robbers but struck and killed a customer. The jurisdiction applies the majority \"agency\" theory of felony murder.",
        q: "Are the robbers guilty of felony murder for the customer's death?",
        opts: [
            "Yes, because the death occurred during the commission of a dangerous felony.",
            "Yes, because the robbers initiated the gunfight.",
            "No, because the fatal shot was fired by the store owner, who was not their agent.",
            "No, because the customer was an unforeseeable victim."
        ],
        ans: 2,
        exp: "Under the majority \"agency\" theory of felony murder, a felon is only liable for killings committed by a co-felon or an agent acting in furtherance of the felony. They are not liable for a killing committed by a resisting victim or police officer."
    },
    {
        id: 11,
        topic: "Inchoate Crimes / Attempted Robbery",
        fp: "A man walked into a bank, approached a teller, and handed her a note that read: \"I have a gun. Give me all your cash.\" The teller read the note, but recognized the man as a harmless local eccentric who frequently played practical jokes. She laughed and handed the note back to him. The man then walked out of the bank.",
        q: "Is the man guilty of attempted robbery?",
        opts: [
            "Yes, because he took a substantial step toward committing robbery with the specific intent to rob.",
            "Yes, because the teller was legally placed in apprehension of harm.",
            "No, because the teller did not actually believe he had a gun.",
            "No, because it was factually impossible for him to commit the robbery."
        ],
        ans: 0,
        exp: "Attempt requires specific intent to commit the target offense and an overt act (or substantial step) in furtherance of that intent. The man had the specific intent to rob and committed an overt act by passing the note. The fact that the teller was not actually frightened does not negate the attempt; it merely prevents the completed crime of robbery."
    },
    {
        id: 12,
        topic: "Property Crimes / Burglary (Constructive Breaking)",
        fp: "One night, a woman knocked on a homeowner's door and claimed to be a gas company inspector. The homeowner invited her inside. Once inside, the woman distracted the homeowner and stole a valuable painting, which had been her plan all along. The jurisdiction applies the common law definition of burglary.",
        q: "Is the woman guilty of burglary?",
        opts: [
            "Yes, because her entry was accomplished by a constructive breaking.",
            "Yes, but only if she used physical force to open the door.",
            "No, because she did not break into the house.",
            "No, because she committed larceny, which merges with burglary."
        ],
        ans: 0,
        exp: "Common law burglary requires a breaking and entering of the dwelling of another at night with the intent to commit a felony. A \"breaking\" can be constructive if entry is gained by fraud, deceit, or threat. Because the woman gained entry by falsely claiming to be an inspector, this constitutes a constructive breaking."
    },
    {
        id: 13,
        topic: "Property Crimes / Arson",
        fp: "A man was angry at his employer and decided to burn down the employer's office building. He poured gasoline on the side of the wooden building and lit a match. The fire scorched the paint on the outside of the building and created a large black smudge, but the fire was extinguished before any of the wood itself caught fire or burned. The jurisdiction applies the common law definition of arson, except that it extends the crime to commercial buildings.",
        q: "Is the man guilty of arson?",
        opts: [
            "Yes, because he acted with malice.",
            "Yes, because scorching the paint is sufficient to constitute a burning.",
            "No, because there was no charring of the actual structure.",
            "No, because the building was a commercial structure."
        ],
        ans: 2,
        exp: "Arson requires a \"burning\" of the structure. Mere scorching, smoking, or blackening of the paint or surface is insufficient. There must be some actual charring or consumption of the fiber of the structure itself. Since only the paint was scorched, the completed crime of arson did not occur (though attempted arson did)."
    },
    {
        id: 14,
        topic: "Defenses / Self-Defense",
        fp: "A man was walking down the street when a stranger confronted him with a knife, demanding his wallet. The man pulled out a legally concealed handgun and shot the stranger, killing him. The jurisdiction has adopted the minority \"duty to retreat\" rule.",
        q: "Is the man's use of deadly force justified?",
        opts: [
            "Yes, because the duty to retreat does not apply when an individual is threatened with a deadly weapon.",
            "Yes, because he could not safely retreat from the immediate threat of a knife.",
            "No, because he was required to retreat before using deadly force in public.",
            "No, because the use of a firearm is disproportionate to the threat of a knife."
        ],
        ans: 1,
        exp: "Even in a minority jurisdiction that imposes a duty to retreat before using deadly force, the duty only applies if the person can retreat with complete safety. A person confronted by an armed assailant demanding property under threat of immediate deadly force (a knife) is generally not able to retreat with complete safety. Therefore, the use of deadly force was justified."
    },
    {
        id: 15,
        topic: "Defenses / Defense of Others",
        fp: "A woman saw two men fighting in an alley. One man was wearing plain clothes and was holding the other man on the ground, raising a club to strike him. Believing the man on the ground was about to be murdered, the woman struck the plainclothes man in the head with a brick, severely injuring him. It turned out the plainclothes man was an undercover police officer making a lawful arrest, and the man on the ground was a dangerous fugitive.",
        q: "In a jurisdiction that applies the Model Penal Code (MPC) approach to the defense of others, is the woman guilty of assault?",
        opts: [
            "Yes, because the officer was making a lawful arrest.",
            "Yes, because she \"stepped into the shoes\" of the fugitive, who had no right of self-defense.",
            "No, because she reasonably believed her intervention was necessary to protect the man on the ground from unlawful deadly force.",
            "No, because police officers assume the risk of being attacked while in plain clothes."
        ],
        ans: 2,
        exp: "Under the Model Penal Code and the modern majority view, a person is justified in using force to defend another if they reasonably believe the other person is in imminent danger of unlawful bodily harm, even if their belief is mistaken. Since the woman reasonably believed the man on the ground was being unlawfully attacked, her use of force was justified."
    },
    {
        id: 16,
        topic: "Defenses / Duress",
        fp: "A gang member held a gun to a teenager's head and told the teenager, \"Steal that car and drive it to our hideout, or I will blow your brains out right now.\" The teenager complied and stole the car. The teenager was later arrested and charged with grand theft auto.",
        q: "Does the teenager have a valid defense of duress?",
        opts: [
            "Yes, because he committed the crime under the threat of imminent death or serious bodily harm.",
            "Yes, because he lacked the mens rea for larceny.",
            "No, because duress is never a defense to a felony.",
            "No, because he should have fled instead of committing the crime."
        ],
        ans: 0,
        exp: "Duress is a defense to criminal conduct (other than intentional murder) if the defendant reasonably believed that committing the crime was the only way to avoid imminent death or serious bodily harm to himself or another. Here, the teenager faced an immediate threat of death, making duress a complete defense to the theft."
    },
    {
        id: 17,
        topic: "Defenses / Insanity",
        fp: "A defendant killed his neighbor because he suffered from a severe mental illness that caused him to believe the neighbor was a demon. Two psychiatrists testified at trial. One testified that the defendant genuinely did not know the nature and quality of his act. The other testified that the defendant knew he was killing a human, but because of his illness, he believed the killing was morally justified and commanded by God. The jurisdiction applies the M'Naghten test for insanity.",
        q: "Is the defendant legally insane under M'Naghten?",
        opts: [
            "Yes, because he suffered from a severe mental illness.",
            "Yes, because under either psychiatric theory, he did not know his act was wrong or did not understand its nature.",
            "No, because he intended to kill.",
            "No, because religious delusions are not recognized under M'Naghten."
        ],
        ans: 1,
        exp: "Under the M'Naghten rule, a defendant is insane if, because of a mental disease or defect, he either (1) did not know the nature and quality of his act, or (2) did not know that his act was wrong. If the jury believes either psychiatrist, the defendant meets one of the prongs of the M'Naghten test."
    },
    {
        id: 18,
        topic: "Inchoate Crimes / Conspiracy",
        fp: "Dan and Ed agreed to rob a local bank. They sketched out a plan, and Ed purchased ski masks and a crowbar to be used in the robbery. The night before the robbery, Dan got cold feet and called Ed. Dan said, \"I'm out. I don't want anything to do with this anymore.\" Dan hung up and did not participate. Ed went ahead and robbed the bank alone. During the robbery, Ed shot and wounded a security guard.",
        q: "What crimes can Dan be properly convicted of?",
        opts: [
            "Conspiracy to commit robbery only.",
            "Conspiracy to commit robbery and the robbery itself.",
            "Conspiracy, robbery, and battery of the guard.",
            "No crime, because he successfully withdrew."
        ],
        ans: 0,
        exp: "Dan is guilty of conspiracy because the crime of conspiracy was complete as soon as the agreement was made and an overt act (purchasing masks) was performed. However, Dan successfully withdrew from the target offense and future foreseeable crimes by communicating his withdrawal to Ed before the robbery occurred. Thus, he is not liable for the robbery or the battery of the guard under Pinkerton liability."
    },
    {
        id: 19,
        topic: "Homicide / Voluntary Manslaughter",
        fp: "A homeowner awoke in the middle of the night to the sound of breaking glass. He grabbed his handgun and went downstairs. He saw a shadowy figure in his living room holding what looked like a weapon. Terrified, the homeowner fired, killing the intruder. When he turned on the lights, he realized the intruder was an unarmed, intoxicated teenager who had stumbled into the wrong house and broken a vase. The jurisdiction recognizes \"imperfect self-defense.\"",
        q: "If the homeowner is charged with murder, what is his best argument for reducing the charge to voluntary manslaughter?",
        opts: [
            "He acted in the heat of passion.",
            "He acted under extreme emotional disturbance.",
            "He made an honest but unreasonable mistake regarding the need for deadly force.",
            "He was defending his dwelling."
        ],
        ans: 2,
        exp: "Imperfect self-defense applies when a defendant kills another person with an honest but unreasonable belief that deadly force was necessary to prevent death or serious bodily harm. This doctrine reduces a murder charge to voluntary manslaughter."
    },
    {
        id: 20,
        topic: "Homicide / Involuntary Manslaughter",
        fp: "A man bought a new sports car and wanted to show off its speed to his friends. He drove 90 miles per hour through a residential neighborhood with a posted speed limit of 25 miles per hour. As he crested a hill, he struck and killed a child who was riding a tricycle in the street. The man was completely sober and did not intend to hurt anyone.",
        q: "What is the most serious homicide offense the man can be convicted of?",
        opts: [
            "First-degree murder.",
            "Second-degree murder (Depraved Heart).",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 1,
        exp: "Driving 90 mph in a 25 mph residential neighborhood constitutes an extreme and reckless disregard for the value of human life. This level of gross recklessness supports a conviction for \"depraved heart\" murder, which is typically classified as second-degree murder."
    },
    {
        id: 21,
        topic: "Property Crimes / Larceny by Trick",
        fp: "A woman went to a car rental agency and rented a luxury SUV for a weekend, providing a valid credit card and signing the rental agreement. However, at the exact moment she signed the paperwork and was handed the keys, she actually intended to drive the car to Mexico and sell it on the black market, which she subsequently did.",
        q: "What crime has the woman committed regarding the SUV?",
        opts: [
            "Larceny by trick.",
            "Obtaining property by false pretenses.",
            "Embezzlement.",
            "Robbery."
        ],
        ans: 0,
        exp: "Larceny by trick occurs when a defendant gains possession (but not title) to the personal property of another by means of a false representation or deceit, with the intent to permanently deprive the owner. Because the rental agency only transferred possession (a rental), and the woman had the intent to steal at the moment she received possession, it is larceny by trick."
    },
    {
        id: 22,
        topic: "Inchoate Crimes / Solicitation",
        fp: "A business owner wanted to eliminate a competitor. He approached a known hitman and offered him $10,000 to murder the competitor. The hitman took the money but immediately went to the police and reported the business owner. The business owner was arrested.",
        q: "Is the business owner guilty of conspiracy?",
        opts: [
            "Yes, because he entered into an agreement to commit murder.",
            "Yes, because the hitman committed an overt act by taking the money.",
            "No, because the hitman never actually intended to commit the murder.",
            "No, because the crime of solicitation merged into the completed crime."
        ],
        ans: 2,
        exp: "Under the common law \"bilateral\" approach to conspiracy, there must be an actual agreement between two or more persons who genuinely intend to commit the target offense. Because the hitman never intended to commit the murder (he immediately went to the police), there was no \"meeting of the minds\" and thus no conspiracy. The business owner is only guilty of solicitation."
    },
    {
        id: 23,
        topic: "General Principles / Strict Liability",
        fp: "A state statute makes it a misdemeanor for any commercial food preparer to \"sell or offer for sale any adulterated or contaminated food product.\" A bakery owner purchased a bulk shipment of flour from a reputable supplier. Unknown to the bakery owner, the flour contained microscopic insect eggs. The owner used the flour to bake bread and sold it to customers, several of whom became ill. The bakery owner is charged with violating the statute.",
        q: "Can the bakery owner be convicted?",
        opts: [
            "Yes, because this is a strict liability public welfare offense.",
            "Yes, but only if the prosecution proves the owner was negligent in failing to inspect the flour.",
            "No, because the owner lacked the necessary mens rea.",
            "No, because the supplier was the actual cause of the contamination."
        ],
        ans: 0,
        exp: "Statutes regulating the sale of food, drugs, and alcohol to the public are generally construed as strict liability \"public welfare\" offenses. They do not require the prosecution to prove any mens rea (intent, recklessness, or negligence). The bakery owner can be convicted simply for selling the contaminated food."
    },
    {
        id: 24,
        topic: "Defenses / Mistake of Fact",
        fp: "A man attended a party and left his black umbrella in the coatroom. When he left the party, he grabbed a black umbrella from the coatroom that looked exactly like his, genuinely believing it was his own. In fact, it belonged to another guest. The other guest pressed charges for larceny.",
        q: "Does the man have a valid defense of mistake of fact?",
        opts: [
            "Yes, because larceny is a specific intent crime, and his honest mistake negated the intent to steal.",
            "Yes, but only if his mistake was objectively reasonable.",
            "No, because his taking of the umbrella was trespassory.",
            "No, because mistake of fact is never a defense to a property crime."
        ],
        ans: 0,
        exp: "Larceny is a specific intent crime requiring the intent to permanently deprive another of their property. Any mistake of fact, whether reasonable or unreasonable, that genuinely negates the specific intent is a valid defense. Because the man honestly believed the umbrella was his, he lacked the intent to steal."
    },
    {
        id: 25,
        topic: "Parties to a Crime / Accomplice Liability",
        fp: "A gun store owner was approached by a customer who said, \"I need a shotgun and some ammo. I'm going to kill my wife's lover tonight.\" The owner, who did not care what the customer did as long as he paid, sold the customer a shotgun at the standard retail price. The customer used the shotgun to commit the murder.",
        q: "Is the gun store owner guilty of murder as an accomplice?",
        opts: [
            "Yes, because he provided the murder weapon with knowledge of the customer's intent.",
            "Yes, because the sale of the shotgun was an inherently dangerous activity.",
            "No, because a merchant who merely sells ordinary goods at ordinary prices with knowledge of a criminal purpose, but without a stake in the outcome, lacks the requisite intent to assist.",
            "No, because the customer was an intervening superseding cause."
        ],
        ans: 2,
        exp: "To be liable as an accomplice, a person must not only assist the principal, but must do so with the intent to promote or facilitate the commission of the crime. Merely selling ordinary goods at ordinary prices to a known criminal does not, by itself, establish the specific intent to facilitate the crime, because the merchant lacks a \"stake in the venture.\""
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = examData;
}