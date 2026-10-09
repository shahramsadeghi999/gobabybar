const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "Carl and Homer entered into a valid written contract under which Carl agreed to build a house on Homer's lot. Homer agreed to pay $150,000 for the house. The contract stated: 'Homer's duty to pay shall not arise unless and until the house is constructed in full compliance with the attached specifications.'\n\nAssume that shortly after commencing performance Carl called Homer and said that the 1/2 inch rods for the foundation required in the specifications were in short supply, but that 1/4 inch rods were readily available. Homer replied: 'Go ahead and use the 1/4 inch.' One day later, before Carl had bought or installed the rods, Homer called and stated that Carl must use the 1/2 inch rods. Carl refused to do so.",
        q: "The best analysis of the parties' legal rights is",
        opts: [
            "Homer waived his right to have 1/2 inch steel and his waiver cannot be retracted.",
            "Homer and Carl modified their contract and Carl may use 1/4 inch rods.",
            "Homer waived his right to have 1/2 inch rods, but he has retracted the waiver so that Carl must use 1/2 inch rods.",
            "Homer's statement, 'Go ahead and use the 1/4 inch,' is not effective either as a modification or a waiver because Homer did not expressly agree to modify or waive."
        ],
        ans: 2,
        exp: "Rule: A party who has made an executory waiver of an express condition or non-material term may retract that waiver by reasonable notification received by the other party before the other party has materially changed position in reliance on it (Restatement (Second) of Contracts § 84(2)). Here, Homer's oral permission constituted a waiver of the specification condition. However, because Homer notified Carl of the retraction before Carl bought or installed the rods (no detrimental reliance), Homer effectively reinstated the requirement. Option C is correct. Option A is incorrect because executory waivers without reliance can be retracted. Option B is incorrect because a common law contract modification requires consideration, which was absent. Option D is incorrect because express words of waiver are not required to effect a waiver."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "Carl and Homer entered into a valid written contract under which Carl agreed to build a house on Homer's lot. Homer agreed to pay $150,000 for the house. The contract stated: 'Homer's duty to pay shall not arise unless and until the house is constructed in full compliance with the attached specifications.'\n\nAssume that during his vacation, Homer voluntarily spent two days helping Carl construct the house. At the end of the second day, Carl mentioned the fact that he had an antique weathervane and Homer said he would like to buy it. Carl stated: 'You've already done enough for me. I'll give the weathervane to you and install it tomorrow.' Homer said: 'Thanks a lot.' When Carl refused to deliver or install the weathervane, Homer sued.",
        q: "The principal question for the court is whether",
        opts: [
            "Homer's voluntary work was sufficient consideration for Carl's promise to give Homer the weathervane.",
            "Carl's statement about the weathervane is enforceable as an oral modification of a written contract.",
            "the parol evidence rules bars admission of evidence of the promise to give Homer the weathervane.",
            "Carl's statement about the weathervane constituted a promise."
        ],
        ans: 0,
        exp: "Rule: Consideration requires a bargained-for exchange. Under the traditional common law rule, 'past consideration' or past voluntary services performed without expectation of compensation do not constitute valid consideration for a subsequent promise. Because Homer volunteered his services before Carl made the statement, the pivotal legal issue determining enforceability is whether past voluntary work satisfies consideration (Option A). Option B is incorrect because this separate transaction concerning a gift/chattel is not an amendment to the house construction specifications. Option C is incorrect because the parol evidence rule governs prior or contemporaneous agreements, not subsequent transactions. Option D is incorrect because Carl clearly uttered a promissory statement; the defect lies in consideration."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "Carl and Homer entered into a valid written contract under which Carl agreed to build a house on Homer's lot. Homer agreed to pay $150,000 for the house. The contract stated: 'Homer's duty to pay shall not arise unless and until the house is constructed in full compliance with the attached specifications.'\n\nAssume that neither the written agreement nor the specifications mentioned the size of the water heater to be installed. Carl installed a 20 gallon heater. The size of the house reasonably required one of at least 40 gallons. After the house was completed, Homer noticed the size of the water heater and said he would not pay the contract price.",
        q: "Carl is now entitled to recover from Homer",
        opts: [
            "nothing because his breach allows Homer to treat the contract as discharged.",
            "the full contract price because the agreement did not specify the size of the water heater.",
            "the full contract price because he substantially performed the contract.",
            "the full contract price minus Homer's damages for breach of Carl's implied obligation to install a heater of the size reasonably required."
        ],
        ans: 3,
        exp: "Rule: Where a construction contract omits a standard specification, there is an implied obligation to build in a workmanlike manner and provide fixtures reasonably suitable for the structure. Carl substantially performed the overall contract, meaning his breach was minor/non-material. A party who substantially performs is entitled to the contract price less an offset for damages necessary to remedy the minor defect (Option D). Option A is incorrect because a minor breach does not discharge the owner's duty to pay. Option B is incorrect because omitting a detail does not give a builder carte blanche to install unsuited equipment. Option C is incorrect because it ignores Homer's entitlement to damages/deduction for the deficient heater."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "Carl and Homer entered into a valid written contract under which Carl agreed to build a house on Homer's lot. Homer agreed to pay $150,000 for the house. The contract stated: 'Homer's duty to pay shall not arise unless and until the house is constructed in full compliance with the attached specifications.'\n\nAssume that the contract provided that Homer's payment for the house would be due upon receipt of the architect's certification that the house was built in accordance with the specifications. The architect refused to issue such certification 'because the fireplace was not constructed in a workmanlike manner as required by the specifications.' Homer refused to pay the contract price.",
        q: "If Carl insists that the fireplace was constructed in a workmanlike manner and sues for the full contract price, who will prevail?",
        opts: [
            "Homer, unless Carl proves that other architects would have been satisfied with the fireplace.",
            "Homer, if Homer proved the architect's refusal was in good faith.",
            "Carl, unless Homer proves the architect's refusal to certify was both reasonable and in good faith.",
            "Carl, if Carl proves that the fireplace was constructed in a workmanlike manner."
        ],
        ans: 1,
        exp: "Rule: When payment is conditioned on the approval or certification of an independent expert (such as an architect or engineer), the condition is enforceable and personal satisfaction governs, limited only by the requirement of good faith. The architect's honest, good-faith judgment will be upheld even if other architects would disagree, unless there is a showing of bad faith, fraud, or collusion (Option B). Option A is incorrect because the standard is good faith, not objective consensus of other architects. Option C is incorrect because architect certificates in building contracts are governed by subjective good faith rather than objective reasonableness. Option D is incorrect because proving Carl's work was adequate does not bypass the express condition of architect approval."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "Carl and Homer entered into a valid written contract under which Carl agreed to build a house on Homer's lot. Homer agreed to pay $150,000 for the house. The contract stated: 'Homer's duty to pay shall not arise unless and until the house is constructed in full compliance with the attached specifications.'\n\nAssume that the day after entering into the contract with Homer, Carl borrowed $150,000 from Bank and assigned to Bank Carl's rights against Homer. Bank promptly notified Homer of the assignment. Carl performed 75% of the work and then abandoned the job.",
        q: "Which of the following is the most accurate statement of the rights of Bank and Homer?",
        opts: [
            "Bank has no rights against Homer because construction contracts are not assignable.",
            "Bank, having accepted the assignment from Carl, must arrange for completion of the contract and cannot recover anything until the work is completed.",
            "Bank may recover the reasonable value of the work performed by Carl minus damages to Homer caused by Carl's failure to complete the work.",
            "Bank can recover the contract price minus the cost of completion of the contract."
        ],
        ans: 2,
        exp: "Rule: An assignee stands in the shoes of the assignor and is subject to all defenses and claims arising from the contract that the obligor has against the assignor. Because Carl willfully abandoned the project at 75%, Carl committed a material breach and cannot recover on the contract. However, under restitution/quantum meruit, an obligor who retains value may owe the net benefit conferred minus the damages caused by the breach. As Carl's assignee, Bank succeeds to this net restitutionary claim (Option C). Option A is incorrect because contract rights to receive payment are freely assignable. Option B is incorrect because an assignment of rights does not automatically obligate the assignee to assume performance duties. Option D is incorrect because recovery on the full contract minus completion costs is the standard measure for substantial performance, which does not apply to intentional abandonment."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "One night Paul and David were having a heated argument in Paul's office on the 40th floor of an office building. David became angry and left, violently slamming the office door behind him. The force of David's slamming the door caused the lock to jam and Paul was unable to open the door or to leave his office until a locksmith came the next day.",
        q: "If Paul asserts a claim against David based on false imprisonment, will Paul prevail?",
        opts: [
            "Yes, because David's act caused Paul to be confined.",
            "Yes, if David was negligent in slamming the door.",
            "No, because Paul was in his own office.",
            "No, if David did not intend to jam the lock."
        ],
        ans: 3,
        exp: "Rule: False imprisonment is an intentional tort requiring an act by the defendant with the intent to confine or restrain the plaintiff to a bounded area, resulting in actual confinement without reasonable means of escape, and the plaintiff must be conscious of the confinement or harmed by it. Confinement resulting from negligence or accident, without the intent to confine, does not sustain an action for false imprisonment (Option D). Option A is incorrect because causation alone without intent does not establish an intentional tort. Option B is incorrect because negligence does not satisfy the prima facie intent element of false imprisonment. Option C is incorrect because a person can be falsely imprisoned in their own home or office."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "Husband and Wife were staying at Motel, which had a large swimming pool. A state statute required that owners of hotel and motel pools must, during the time that the pool was open for use and no lifeguard was present, post in a prominent place by the pool a sign of specified size stating, 'Warning No Lifeguard Present.' Motel did not provide a lifeguard and did not post the required sign.\n\nOne afternoon, Wife went sightseeing and Husband remained at Motel. When Wife returned, she learned that Husband had been seen swimming in the pool and was later found drowned. There were no witnesses to the drowning.\n\nWife suffered severe emotional shock when she learned of Husband's death and had to be hospitalized, under the care of a physician, for several days.",
        q: "If Wife asserts a claim for damages for the wrongful death of Husband, the basis on which Motel is most likely to prevail is",
        opts: [
            "Husband assumed the risk because the absence of the sign and lifeguard was obvious.",
            "Husband was contributorily negligent in swimming in the pool when no lifeguard was present.",
            "the absence of a warning sign was not a cause-in-fact of Husband's drowning.",
            "the statute imposed only criminal penalties for its violation."
        ],
        ans: 2,
        exp: "Rule: In any negligence action—even where negligence per se is established by a statutory violation—the plaintiff must prove that the defendant's breach was both the cause-in-fact (but-for cause) and proximate cause of the injury. Since Husband entered the pool and was swimming without a lifeguard present, there is no evidence showing that a posted warning sign would have prevented him from entering or drowning; thus, causation-in-fact fails (Option C). Option A is incorrect because assumption of risk requires proof of subjective awareness of specific imminent danger, which is harder to prove than lack of causation. Option B is incorrect because swimming in a hotel pool without a lifeguard is not contributory negligence as a matter of law. Option D is incorrect because tort courts routinely borrow criminal safety standards to establish the standard of care."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "Husband and Wife were staying at Motel, which had a large swimming pool. A state statute required that owners of hotel and motel pools must, during the time that the pool was open for use and no lifeguard was present, post in a prominent place by the pool a sign of specified size stating, 'Warning No Lifeguard Present.' Motel did not provide a lifeguard and did not post the required sign.\n\nOne afternoon, Wife went sightseeing and Husband remained at Motel. When Wife returned, she learned that Husband had been seen swimming in the pool and was later found drowned. There were no witnesses to the drowning.\n\nWife suffered severe emotional shock when she learned of Husband's death and had to be hospitalized, under the care of a physician, for several days.",
        q: "If Wife asserts a claim for damages against Motel based on her emotional distress, will Wife prevail?",
        opts: [
            "Yes, because Wife sustained demonstrable emotional distress.",
            "Yes, because Motel violated a criminal statute.",
            "No, because Wife was not present when Husband drowned.",
            "No, because Wife did not suffer any physical impact."
        ],
        ans: 2,
        exp: "Rule: Under traditional common law bystander recovery for Negligent Infliction of Emotional Distress (NIED) (e.g., Dillon v. Legg), the plaintiff must be located near the scene of the accident, contemporaneously observe the event sensory-wise, and have a close relationship to the victim. Because Wife was away sightseeing and only learned of the drowning afterward, she cannot recover (Option C). Option A is incorrect because emotional distress alone without contemporaneous observation does not satisfy bystander NIED. Option B is incorrect because statutory negligence per se does not eliminate the proximity and perception limits on bystander emotional distress. Option D is incorrect because modern bystander rules allow recovery without direct physical impact if sensory presence and proximity criteria are met."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "Frederick threatened Bruce with a physical beating unless Bruce personally wrote, signed and mailed a letter to the President of the United States threatening the President's life. Bruce complied. A statute makes it a felony 'knowingly to mail to any person a letter that threatens the life of the President of the United States.'",
        q: "Is Bruce guilty of violating that statute?",
        opts: [
            "No, because he did not intend to take the President's life.",
            "No, because of the defense of duress.",
            "Yes, because duress is not a defense to such a crime.",
            "Yes, because Bruce was not threatened with loss of his life."
        ],
        ans: 1,
        exp: "Rule: Duress is an affirmative defense to all crimes except intentional homicide. It excuses criminal conduct if the defendant reasonably believed that committing the offense was necessary to avoid imminent death or serious bodily injury. Since Frederick threatened Bruce with a serious physical beating and Bruce did not kill anyone, Bruce may successfully assert duress (Option B). Option A is incorrect because the statute criminalizes sending a threatening letter, not having an actual intent to carry out the threat. Option C is incorrect because duress is unavailable only in homicide cases. Option D is incorrect because a threat of grievous bodily harm suffices; a threat of death is not mandatory."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "Frederick threatened Bruce with a physical beating unless Bruce personally wrote, signed and mailed a letter to the President of the United States threatening the President's life. Bruce complied. A statute makes it a felony 'knowingly to mail to any person a letter that threatens the life of the President of the United States.'",
        q: "If Frederick and Bruce are prosecuted for violating the statute and Bruce is acquitted, may Frederick be convicted?",
        opts: [
            "Yes, under the doctrine of transferred intent.",
            "Yes, because a person can commit a crime through an innocent agent.",
            "No, because Frederick did not write or mail the letter.",
            "No, because Frederick can only be vicariously liable for Bruce's act."
        ],
        ans: 1,
        exp: "Rule: An individual who causes an innocent, coerced, or non-culpable person (an 'innocent agent') to commit the actus reus of a crime is treated as a principal in the first degree. Even if the immediate actor is acquitted due to duress, insanity, or lack of mens rea, the instigator who possessed the requisite intent is fully criminally liable (Option B). Option A is incorrect because transferred intent applies when harm is directed at one victim but impacts another, which is irrelevant here. Option C is incorrect because physical execution of the actus reus is unnecessary when acting through an agent. Option D is incorrect because the liability is direct as a principal, not vicarious."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "Frederick threatened Bruce with a physical beating unless Bruce personally wrote, signed and mailed a letter to the President of the United States threatening the President's life. Bruce complied. A statute makes it a felony 'knowingly to mail to any person a letter that threatens the life of the President of the United States.'",
        q: "If Frederick and Bruce are charged with the crime of conspiring to violate the statute, they will most likely be found",
        opts: [
            "not guilty, because the conspiracy was merged in the completed crime",
            "not guilty, because Bruce was not a willing participant",
            "guilty, because Bruce participated in the commission of the crime",
            "guilty, because Bruce complied with Frederick's threat"
        ],
        ans: 1,
        exp: "Rule: Common law conspiracy requires an agreement between two or more persons with the specific intent to achieve an unlawful objective. True agreement requires genuine mutual consent; compliance obtained through duress or coercion does not constitute voluntary agreement. Because Bruce was coerced through threats of physical violence, there was no mutual assent to form a conspiracy (Option B). Option A is incorrect because common law conspiracy does not merge into the completed target crime. Option C is incorrect because involuntary physical participation under duress does not supply the necessary mental agreement. Option D is incorrect because coercion negates conspiratorial intent."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "Axel wrote Grant saying: 'Please ship 175 Model X Hearing Aids per catalog price...' Grant shipped 175 Model Y Hearing Aids, which are superficially similar to Model X and can be distinguished only by taking them apart. Model Y is an obsolete model with no market demand. On tender of delivery, Axel discovered the discrepancy and demanded that Grant deliver Model X Hearing Aids. Grant refused.",
        q: "If Axel sues for breach of contract, what result?",
        opts: [
            "Grant wins, because there was no meeting of the minds.",
            "Grant wins, because his shipment was only a counteroffer which Axel rejected.",
            "Axel wins, because the offeror is master of his offer.",
            "Axel wins, because Grant's shipment of Model Y Hearing Aids constituted an acceptance of Axel's offer to buy Model X hearing aids."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-206(1)(b), an order or other offer to buy goods for prompt or current shipment invites acceptance either by a prompt promise to ship or by the prompt shipment of conforming or non-conforming goods. A shipment of non-conforming goods operates simultaneously as an acceptance and a breach, unless the seller seasonably notifies the buyer that the shipment is offered only as an accommodation. Because Grant shipped non-conforming goods without an accommodation notice, it operated as an acceptance and an immediate breach (Option D). Options A and B are incorrect because the UCC abolished the pre-code 'unilateral contract trick' where non-conforming shipments were treated as counteroffers. Option C is an incomplete and incorrect statement of UCC offer-and-acceptance rules."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "Owner owned a house in City. A storm sewer, owned and operated by City, ran under part of Owner's house. Water from the sewer main escaped into the basement of Owner's house, flooding the basement and causing substantial damage. The jurisdiction in which City is located has abolished governmental tort immunity.",
        q: "If Owner asserts a claim against City, the basis on which Owner is most likely to prevail is",
        opts: [
            "negligence, if the sewer main was improperly constructed or maintained.",
            "strict liability, because the water escaped from City's sewer main.",
            "strict liability in tort, if the sewer main was defective.",
            "nuisance, because Owner's use and enjoyment of his house was interfered with."
        ],
        ans: 0,
        exp: "Rule: Municipal water and sewer main maintenance is governed by general negligence principles. The operating entity owes a duty of reasonable care in design, construction, and maintenance. If the city was negligent in construction or maintenance, it is liable for resulting flood damage (Option A). Option B is incorrect because operating a municipal storm sewer is a routine public utility, not an abnormally dangerous activity that warrants strict liability under Rylands v. Fletcher. Option C is incorrect because products liability applies to commercial manufacturers/sellers of goods, not municipalities operating public utility lines. Option D is incorrect because private nuisance typically requires an intentional, ongoing, or recurring substantial interference, whereas a single pipe burst is traditionally handled under negligence."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "Daniel owned a restored 'classic' automobile made in 1922. To discourage tampering with the car, Daniel installed an electrical device designed to give a mild shock, enough to warn but not to harm persons touching the car. Paul, a heart patient with a pacemaker, saw Daniel's car and attempted to open the door. Paul received a mild shock which would not have harmed an ordinary individual but which caused his pacemaker to malfunction, resulting in a fatal heart attack.",
        q: "If Paul's estate asserts a claim against Daniel for the wrongful death of Paul, will the estate prevail?",
        opts: [
            "No, if Daniel was not using excessive force to protect his car.",
            "No, because Paul was a trespasser.",
            "Yes, because Daniel's act was a substantial factor in causing Paul's death.",
            "Yes, if Paul had no reason to suspect the presence of the electrical device."
        ],
        ans: 0,
        exp: "Rule: A property owner may use reasonable, non-deadly force to protect personal property against intermeddling or trespass. A property owner is not privileged to use mechanical devices that inflict deadly force or serious bodily harm (Katko v. Briney). However, where a device is set to administer only a mild, non-harmful shock, the force used is objectively reasonable and non-deadly. Daniel did not breach a duty of care, nor did he intentionally inflict harmful force; an unforeseeable idiosyncratic vulnerability does not make non-excessive defensive force unlawful (Option A). Option B is incorrect because land/property owners still owe certain duties not to willfully harm known or anticipated trespassers. Option C is incorrect because causation alone without breach of duty or tortious conduct does not establish liability. Option D is incorrect because lack of notice does not per se convert reasonable defensive force into tort liability."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "Bill borrowed a television set from Len to watch a football game on Sunday afternoon. Bill promised Len that he would return the set to Len by 7:00 Sunday night because Len wanted to watch a program at 10:00 that night. When Bill had not returned the set by 9:00, Len went to Bill's house. Bill was not at home, and Len forced open a window, climbed in, took his television set and walked out with it.",
        q: "Did Len commit burglary?",
        opts: [
            "Yes, because Len broke and entered Bill's dwelling at night.",
            "Yes, because Bill had lawfully obtained possession of the television set from Len.",
            "No, because Bill was not at home when Len went to his house.",
            "No, because Len entered for the purpose of recovering his own television set."
        ],
        ans: 3,
        exp: "Rule: Common law burglary requires the breaking and entering of the dwelling house of another at night with the specific intent to commit a felony therein. Larceny requires the intent to permanently deprive another of their property. Under a bona fide claim of right, taking one's own property (even wrongfully or by trespass) negates the felonious intent required for larceny, and consequently negates the specific intent to commit a felony upon entry required for burglary (Option D). Option A is incorrect because breaking and entering at night is insufficient without the concurrent intent to commit a felony. Option B is incorrect because the issue is whether Len had felonious intent, not whether Bill had lawful bailee possession. Option C is incorrect because the physical presence of the resident is not an element of common law burglary."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "Bank had a substantial increase in the number of robberies at its main office. Bank hired Sharp, an expert rifleman, and placed him at a position where he could observe the entire floor of the bank through an opening in the ceiling of the bank. Sharp was instructed to shoot if he believed that it was necessary to prevent a robbery.\n\nSeveral days after Sharp had been hired, Rob entered the bank, pointed a gun at a cashier and demanded money. When Sharp saw Rob point a gun at a cashier, Sharp fired at and killed Rob.",
        q: "What criminal offense, if any, did Sharp commit?",
        opts: [
            "None, if Sharp reasonably believed his act was necessary to prevent a dangerous felony.",
            "Voluntary manslaughter, because Sharp used deadly force to protect private property.",
            "Voluntary manslaughter, because Sharp did not first warn Rob.",
            "Murder, if Sharp deliberately aimed to kill Rob."
        ],
        ans: 0,
        exp: "Rule: A person is privileged to use deadly force in defense of others if they reasonably believe that the third party is facing an imminent threat of death or serious bodily harm, or to prevent the commission of an inherently dangerous, violent felony (such as armed robbery). Because Rob was pointing a gun at a cashier, Sharp was legally justified in employing deadly force (Option A). Option B is incorrect because Sharp acted to prevent armed robbery and protect life, not solely to protect property. Option C is incorrect because a prior verbal warning is not required when facing an immediate, active deadly threat. Option D is incorrect because justification (defense of others) completely absolves intentional homicide."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "Mike was employed as a salesman in Leo's store. Leo owned a beautiful clock which Mike had often admired. The clock needed repairs and Leo asked Mike to take it with him on his way home and leave it at a repair shop. When asked to do this, Mike decided to keep the clock for himself. Mike took the clock, did not deliver it to the shop, and did not return to work for Leo.",
        q: "Did Mike commit larceny?",
        opts: [
            "Yes, because after he received the clock, Mike did not take it to the repair shop.",
            "Yes, because when he received the clock from Leo, Mike had a secret intention to keep it.",
            "No, because Mike was Leo's servant when Leo gave Mike the clock.",
            "No, because Leo transferred possession to Mike without any act or inducement on Mike's part."
        ],
        ans: 1,
        exp: "Rule: Common law larceny is the trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. An employee or servant given temporary custody of an employer's goods has mere custody, while legal possession remains with the employer. Furthermore, if a person obtains custody with a pre-existing, contemporaneous intent to steal, the taking is trespassory at inception (larceny by trick) (Option B). Option A is incorrect because failure to deliver after the fact is mere evidence; the crime requires fraudulent or felonious intent at the time of taking. Option C is incorrect because an employee has mere custody, which makes misappropriation larceny rather than embezzlement. Option D is incorrect because voluntary physical handoff of custody does not prevent larceny when accompanied by a simultaneous secret intent to steal."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "On December 20, 1979, Carl, owner of Carl's Coffee Shop, entered into a written contract with Dan, owner of Dan's Doughnut Factory, under which Carl agreed to purchase his doughnut requirements for the calendar year 1980. The contract provided that 'Carl shall have no obligation to receive any specified quantity of doughnuts, but only his daily requirements' and that Dan 'agrees to supply such requirements' at the fixed price per dozen specified in the contract, 'cash on delivery.' During 1979, Carl's requirements of doughnuts for his coffee shop averaged approximately 50 dozen per week.\n\nEarly in 1980, Dan experienced a rise in his costs and decided he could no longer afford to supply Carl's requirements at the price fixed in their agreement.",
        q: "If Dan asserts that the agreement is not binding upon him because of lack of consideration will Dan prevail?",
        opts: [
            "Yes, because requirements contracts lack mutuality of obligation.",
            "Yes, because the provision that Carl had no obligation to receive any specified quantity made the contract illusory.",
            "No, because requirements contracts do not need consideration to be enforceable.",
            "No, because Carl's agreement to buy his requirements was sufficient consideration for Dan's agreement to supply those requirements."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-306(1), a contract measuring quantity by the buyer's good-faith requirements is valid and supported by consideration. The buyer gives consideration by restricting their legal freedom to purchase doughnuts from other suppliers, while an implied obligation of good faith prevents the promise from being illusory (Option D). Option A is incorrect because requirements contracts possess mutuality of obligation under the UCC. Option B is incorrect because UCC § 2-306 expressly validates contracts without specified quantities. Option C is incorrect because requirements contracts, like all sales contracts, require valid consideration (which exists in the exclusive purchase commitment)."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "On December 20, 1979, Carl, owner of Carl's Coffee Shop, entered into a written contract with Dan, owner of Dan's Doughnut Factory, under which Carl agreed to purchase his doughnut requirements for the calendar year 1980. The contract provided that 'Carl shall have no obligation to receive any specified quantity of doughnuts, but only his daily requirements' and that Dan 'agrees to supply such requirements' at the fixed price per dozen specified in the contract, 'cash on delivery.' During 1979, Carl's requirements of doughnuts for his coffee shop averaged approximately 50 dozen per week.\n\nAssume that on May 1, 1980, Carl opened 'Carl's Coffee Shop #2' in a new office building. During the first four months of 1980, Carl had ordered an average of 50 dozen doughnuts per week from Dan. The first week in May he ordered 75 dozen doughnuts, explaining that he needed the larger quantity because of the opening of Carl's Coffee Shop #2. Dan refused to supply any more than 50 dozen at the price fixed in the agreement.",
        q: "Is Dan justified in his refusal?",
        opts: [
            "Yes, if the normal requirements of the original coffee shop are approximately 50 dozen per week.",
            "Yes, because the opening of Carl's Coffee Shop #2 was an unanticipated occurrence which excused Dan from his contract with Carl.",
            "No, because the agreement provided that Dan would supply Carl's requirements of doughnuts at the fixed price.",
            "No, if in opening Carl's Coffee Shop #2, Carl relied on his requirements contract with Dan."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 2-306(1), no quantity may be demanded under a requirements contract that is unreasonably disproportionate to any stated estimate or to normal or otherwise comparable prior requirements. Expanding operations by adding a second store and demanding 50% more units falls outside normal prior requirements, entitling Dan to refuse supplying the excess requirements of the new location (Option A). Option B is incorrect because unexpected expansion does not excuse Dan entirely from the contract; it merely caps his obligation at normal levels. Option C is incorrect because requirements obligations are legally circumscribed by the 'not unreasonably disproportionate' ceiling. Option D is incorrect because Carl cannot unilaterally expand the scope of the agreement through reliance."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "On December 20, 1979, Carl, owner of Carl's Coffee Shop, entered into a written contract with Dan, owner of Dan's Doughnut Factory, under which Carl agreed to purchase his doughnut requirements for the calendar year 1980. The contract provided that 'Carl shall have no obligation to receive any specified quantity of doughnuts, but only his daily requirements' and that Dan 'agrees to supply such requirements' at the fixed price per dozen specified in the contract, 'cash on delivery.' During 1979, Carl's requirements of doughnuts for his coffee shop averaged approximately 50 dozen per week.\n\nAssume that in May Carl decided the price fixed in his contract with Dan was too high since Carl was making a profit of only five cents per doughnut. Carl asked Dan to agree to charge a lower price, but Dan refused. Carl thereupon stopped selling doughnuts in his coffee shop and switched to other pastries. If Dan sues Carl for breach of contract, who will prevail?",
        opts: [
            "Dan, because the elimination by Carl of his requirements of doughnuts did not occur in good faith.",
            "Dan, because under the agreement Carl had an absolute obligation to have requirements of approximately 50 dozen doughnuts per week.",
            "Carl, because the inadequate profit on doughnut sales was a permissible reason for Carl's eliminating his requirements of doughnuts.",
            "Carl, because a buyer under a requirements contract may properly eliminate his requirements for any reason."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 2-306, a buyer in a requirements contract must operate in good faith. While a buyer may reduce or eliminate requirements due to an actual, bona fide discontinuance of business or genuine business adversity, shutting down requirements merely because profits are lower than desired or to substitute an alternative product violates good faith (Option A). Option B is incorrect because requirements buyers do not assume an absolute obligation to demand a fixed quantity. Options C and D are incorrect because a buyer cannot escape a requirements contract solely because profit margins are small or for arbitrary reasons."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "On December 20, 1979, Carl, owner of Carl's Coffee Shop, entered into a written contract with Dan, owner of Dan's Doughnut Factory, under which Carl agreed to purchase his doughnut requirements for the calendar year 1980. The contract provided that 'Carl shall have no obligation to receive any specified quantity of doughnuts, but only his daily requirements' and that Dan 'agrees to supply such requirements' at the fixed price per dozen specified in the contract, 'cash on delivery.' During 1979, Carl's requirements of doughnuts for his coffee shop averaged approximately 50 dozen per week.\n\nAssume that in May Carl sold Carl's Coffee Shop to Ed, assigning his rights and delegating his duties under the contract with Dan to Ed. Ed decided to continue using the name 'Carl's Coffee Shop.' When Dan was notified of the sale, he refused to supply doughnuts to Ed for Carl's Coffee Shop.",
        q: "What are Ed's rights, if any, against Dan for the balance of the year 1980?",
        opts: [
            "Ed has no rights against Dan.",
            "Ed is entitled to have Dan supply Ed's requirements of doughnuts for Carl's Coffee Shop, but not in a quantity unreasonably disproportionate to Carl's normal requirements before he sold to Ed.",
            "Ed is entitled to have Dan supply whatever quantity of doughnuts Ed might order for Carl's Coffee Shop, but Ed is free to buy doughnuts elsewhere.",
            "Ed is entitled to have Dan supply whatever requirements of doughnuts Ed might have for Carl's Coffee Shop."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-210 and § 2-306, the assignment of rights and delegation of duties in a requirements contract is valid upon the sale of the business, provided the assignee continues operating the same enterprise. The assignee steps into the assignor's requirements measure, subject to the statutory limitation that requirements may not be unreasonably disproportionate to the assignor's normal prior requirements (Option B). Option A is incorrect because requirements contracts are assignable in connection with the sale of an established business. Option C is incorrect because a requirements contract requires exclusivity; Ed cannot buy elsewhere. Option D is incorrect because it ignores the 'unreasonably disproportionate' limit."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "On December 20, 1979, Carl, owner of Carl's Coffee Shop, entered into a written contract with Dan, owner of Dan's Doughnut Factory, under which Carl agreed to purchase his doughnut requirements for the calendar year 1980. The contract provided that 'Carl shall have no obligation to receive any specified quantity of doughnuts, but only his daily requirements' and that Dan 'agrees to supply such requirements' at the fixed price per dozen specified in the contract, 'cash on delivery.' During 1979, Carl's requirements of doughnuts for his coffee shop averaged approximately 50 dozen per week.\n\nAssume the same facts as in question 21, except that upon being notified of the sale to Ed, Dan agreed with Ed and Carl that Ed should be substituted for Carl in the agreement between Dan and Carl. In June Ed started buying his requirements of doughnuts for Carl's Coffee Shop from a supplier other than Dan.",
        q: "Does Dan have any rights against Carl?",
        opts: [
            "Yes, because a party who delegates his duties under a contract to a third party remains liable for breach of those duties.",
            "Yes, because Dan was a third party beneficiary of the agreement between Carl and Ed.",
            "No, because Carl's delegation of his duties to Ed discharged Carl from any further duty to Dan.",
            "No, because the arrangement between Carl, Ed and Dan was a novation."
        ],
        ans: 3,
        exp: "Rule: A novation is a mutual agreement among all parties (obligor, obligee, and substitute obligor) to substitute a new party and completely release the original obligor from all contractual obligations. Because Dan expressly agreed with both Ed and Carl to substitute Ed for Carl, a valid novation occurred, extinguishing Carl's obligations (Option D). Option A correctly states the default rule for delegation, but fails to account for the tripartite agreement releasing Carl via novation. Option B is incorrect because third-party beneficiary status does not preserve rights against a released party. Option C is incorrect because a mere unilateral delegation never discharges the delegator without the creditor's assent."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "For Son's seventh birthday, Father bought Son a small bicycle at Hardware. The bicycle was manufactured by Bikeco.\n\nA week later, Son's sister, Sis, age 17, returned home from college for Thanksgiving vacation. Son asked Sis to get out his new bicycle so he could show her how well he could ride it. Sis went to the garage, sat on the bicycle seat and began to 'walk' the bicycle between the two family cars and out of the garage. As Sis neared the doorway of the garage, the rod on which the seat was mounted snapped, causing Sis to fall backward over the bicycle and to suffer severe injuries. Friend, standing a few feet from Sis, was horrified and sickened as he saw what happened to Sis, but suffered no other harm.\n\nMost bicycle manufacturers make the supporting rods for seats from a metal which is much stronger for that purpose than the metal used by Bikeco. The use of the stronger metal increases the cost of manufacture by about $1.50 a bicycle.",
        q: "If Sis asserts a claim against Bikeco based on strict liability in tort the likely result is Sis will",
        opts: [
            "recover, if use such as hers was foreseeable.",
            "recover, because Bikeco can spread the risk of loss.",
            "not recover, if the bicycle was intended for use by small children.",
            "not recover, because the bicycle was purchased for Son."
        ],
        ans: 0,
        exp: "Rule: In strict products liability (Restatement (Second) of Torts § 402A), a commercial manufacturer is strictly liable for personal injuries caused by a design or manufacturing defect that renders a product unreasonably dangerous. The scope of liability extends to all foreseeable users and foreseeable misuses of the product. If sitting on and walking a small bicycle was reasonably foreseeable, Bikeco is strictly liable for the defective support rod (Option A). Option B is incorrect because risk-spreading is a policy rationale, not the legal test for liability. Option C is incorrect because manufacturers must guard against foreseeable uses/misuses, even by persons outside the target age demographic. Option D is incorrect because lack of contractual privity is not a defense in strict products liability."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "For Son's seventh birthday, Father bought Son a small bicycle at Hardware. The bicycle was manufactured by Bikeco.\n\nA week later, Son's sister, Sis, age 17, returned home from college for Thanksgiving vacation. Son asked Sis to get out his new bicycle so he could show her how well he could ride it. Sis went to the garage, sat on the bicycle seat and began to 'walk' the bicycle between the two family cars and out of the garage. As Sis neared the doorway of the garage, the rod on which the seat was mounted snapped, causing Sis to fall backward over the bicycle and to suffer severe injuries. Friend, standing a few feet from Sis, was horrified and sickened as he saw what happened to Sis, but suffered no other harm.\n\nMost bicycle manufacturers make the supporting rods for seats from a metal which is much stronger for that purpose than the metal used by Bikeco. The use of the stronger metal increases the cost of manufacture by about $1.50 a bicycle.",
        q: "If Sis asserts a claim against Hardware based on negligence, is it likely that Sis will prevail?",
        opts: [
            "Yes, if the bicycle was defective.",
            "Yes, if the bicycle was defective and Hardware could have discovered the defect by a reasonable inspection.",
            "No, because Sis was not an intended user of the bicycle.",
            "No, because Sis was not riding the bicycle in a normal manner."
        ],
        ans: 1,
        exp: "Rule: In a negligence action against a retailer/dealer, the plaintiff must prove that the retailer failed to exercise reasonable care. Unlike manufacturers, a retailer of new goods is not liable in negligence for latent manufacturing or design defects unless the defect was discoverable through a reasonable, customary inspection (Option B). Option A is incorrect because liability based solely on the presence of a defect defines strict products liability, not negligence. Option C is incorrect because negligence duties extend to all foreseeable users, not merely intended users. Option D is incorrect because walking a bicycle is not extraordinary or unforeseeable misuse."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "For Son's seventh birthday, Father bought Son a small bicycle at Hardware. The bicycle was manufactured by Bikeco.\n\nA week later, Son's sister, Sis, age 17, returned home from college for Thanksgiving vacation. Son asked Sis to get out his new bicycle so he could show her how well he could ride it. Sis went to the garage, sat on the bicycle seat and began to 'walk' the bicycle between the two family cars and out of the garage. As Sis neared the doorway of the garage, the rod on which the seat was mounted snapped, causing Sis to fall backward over the bicycle and to suffer severe injuries. Friend, standing a few feet from Sis, was horrified and sickened as he saw what happened to Sis, but suffered no other harm.\n\nMost bicycle manufacturers make the supporting rods for seats from a metal which is much stronger for that purpose than the metal used by Bikeco. The use of the stronger metal increases the cost of manufacture by about $1.50 a bicycle.",
        q: "If Sis asserts a claim against Hardware based on strict liability in tort, is it likely that Sis will prevail?",
        opts: [
            "Yes, if the bicycle was defective.",
            "Yes, but only if Hardware could have discovered a defect by a reasonable inspection.",
            "No, because Hardware sold the bicycle in exactly the same condition as that in which it was received.",
            "No, because Sis was not in privity with Hardware."
        ],
        ans: 0,
        exp: "Rule: Under strict products liability (Restatement § 402A), every commercial seller in the distribution chain—including a retail dealer—is strictly liable for physical injuries caused by a product sold in a defective, unreasonably dangerous condition, regardless of whether the retailer was at fault or could have discovered the defect (Option A). Option B is incorrect because failure to discover a defect applies to negligence, not strict liability. Option C is incorrect because selling an item in original condition is not a defense to strict liability for downstream retailers. Option D is incorrect because lack of privity has long been abolished in strict tort actions."
    },
    {
        id: 26,
        topic: "Mixed",
        fp: "For Son's seventh birthday, Father bought Son a small bicycle at Hardware. The bicycle was manufactured by Bikeco.\n\nA week later, Son's sister, Sis, age 17, returned home from college for Thanksgiving vacation. Son asked Sis to get out his new bicycle so he could show her how well he could ride it. Sis went to the garage, sat on the bicycle seat and began to 'walk' the bicycle between the two family cars and out of the garage. As Sis neared the doorway of the garage, the rod on which the seat was mounted snapped, causing Sis to fall backward over the bicycle and to suffer severe injuries. Friend, standing a few feet from Sis, was horrified and sickened as he saw what happened to Sis, but suffered no other harm.\n\nMost bicycle manufacturers make the supporting rods for seats from a metal which is much stronger for that purpose than the metal used by Bikeco. The use of the stronger metal increases the cost of manufacture by about $1.50 a bicycle.",
        q: "If Friend asserts a claim against Bikeco based on strict liability in tort, is it likely that Friend will prevail?",
        opts: [
            "Yes, if the bicycle was inherently dangerous.",
            "Yes, because Friend was within a few feet of Sis when she was injured.",
            "No, because Friend was not using the product when the accident occurred.",
            "No, because Friend was horrified and sickened, but suffered no other harm."
        ],
        ans: 3,
        exp: "Rule: Under strict products liability (Restatement (Second) of Torts § 402A), a plaintiff can recover only for physical harm (bodily injury or property damage). Pure emotional distress unaccompanied by physical injury or objective physical manifestation is not recoverable under strict products liability. Because Friend was merely horrified and sickened without suffering physical impact, physical injury, or physical manifestations, Friend cannot recover (Option D). Option A is incorrect because inherent danger does not dispense with the physical injury requirement. Option B is incorrect because close physical proximity alone does not establish a claim for purely emotional distress in strict products liability. Option C is incorrect because bystanders may recover in strict liability if they suffer actual physical harm."
    },
    {
        id: 27,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Did Al commit the murder of Vic?",
        opts: [
            "Yes, because Al and Tom were co-conspirators.",
            "Yes, because he arranged for the killing of Vic.",
            "No, because his arrangement was with Bob and not Tom.",
            "No, because Vic was killed in a different manner than Al had contemplated."
        ],
        ans: 1,
        exp: "Rule: An accessory before the fact (or accomplice) is one who solicits, encourages, commands, or counsels another to commit a crime with the intent that the crime be committed. An accomplice is criminally liable for the contemplated crime even if the hired perpetrator delegates or subcontracts the commission of the act to a third person, as the target offense (homicide) was intended and directly procured by the instigator. Al arranged for Vic's murder and is therefore guilty of murder as an accomplice/mastermind (Option B). Option A is less precise because accomplice/accessory liability attaches directly to the solicitation and procurement of the target offense, regardless of whether a formal three-way conspiracy is proven. Option C is incorrect because an accomplice cannot escape liability simply because the agent employed a sub-agent to carry out the agreed crime. Option D is incorrect because the difference in the specific mechanism used to kill (fire/smoke instead of a bullet) does not negate liability where the intended result—the death of the specific victim—was accomplished."
    },
    {
        id: 28,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Is Tom guilty of common law burglary of Vic's house?",
        opts: [
            "Yes, because he committed a felony within the home of another during the nighttime.",
            "Yes, because he inserted the lighted stick through the open window.",
            "No, because he did not commit a breaking.",
            "No, because no part of his body entered the house."
        ],
        ans: 2,
        exp: "Rule: Common law burglary requires a breaking and entering of the dwelling house of another at nighttime with the intent to commit a felony therein. 'Breaking' requires the creation or enlargement of an opening (e.g., opening a closed door, turning a latch, or raising an open window further). Entering through an open window that was already left open does not satisfy the common law requirement of a breaking (Option C). Option A is incorrect because nighttime felony commission alone does not establish burglary without the requisite breaking and entry. Option B is incorrect because inserting an instrument into an open aperture constitutes entry, but fails to supply the essential element of breaking. Option D is incorrect because entry by an instrument used to commit the felony satisfies the entry requirement, making the lack of breaking the dispositive defect."
    },
    {
        id: 29,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Is Tom guilty of arson of Vic's house?",
        opts: [
            "Yes, because there was smoke damage to the walls.",
            "Yes, because a burning occurred in the commission of an inherently dangerous felony.",
            "No, because arson is a specific intent crime.",
            "No, because there was no burning of any part of the house."
        ],
        ans: 3,
        exp: "Rule: Common law arson requires the malicious burning of the dwelling house of another. 'Burning' requires some charring or fiber consumption of the structure or building fabric itself; mere smoke discoloration, scorching, or blackening does not constitute a burning, nor does the burning of personal property/furnishings within the home (Option D). Option A is incorrect because smoke damage without structural fiber charring does not satisfy common law burning. Option B is incorrect because felony-arson is not an existing doctrine; the physical element of structural burning must still occur. Option C is incorrect because common law arson is a malice crime, not a specific intent crime."
    },
    {
        id: 30,
        topic: "Mixed",
        fp: "Ed told Pete, an auto mechanic, that he had stolen a car and that the engine had to be rebuilt before it could be sold. Pete agreed to perform the work under the following terms: Pete would receive $300 upon completion of the job, even though his normal fee was $600 and he would receive an additional $600 when Ed sold the car. After rebuilding the engine, and before the car was sold, Pete and Ed were arrested.",
        q: "Did Pete commit the crime of conspiracy to sell the stolen car?",
        opts: [
            "Yes, because he agreed to rebuild the engine, knowing the car was stolen.",
            "Yes, because of the profit he agreed to receive on the sale of the car.",
            "No, because Ed was the person who was going to sell the car.",
            "No, because Pete's rebuilding of the engine was not per se illegal."
        ],
        ans: 1,
        exp: "Rule: A supplier of goods or services becomes a co-conspirator in an unlawful venture if they provide services with knowledge of the illegal purpose and have an intent to further that venture. Intent can be inferred when the supplier acquires a 'stake in the venture'—such as conditioning part of their compensation or earning an inflated profit directly from the illicit enterprise's success. By deferring part of his fee in exchange for a substantial profit contingent upon the sale of the stolen vehicle, Pete obtained an active stake in the venture (Option B). Option A is incorrect because mere knowledge of illegal activity without an intent to advance it (or a stake in it) is generally insufficient for conspiracy. Option C is incorrect because a co-conspirator does not need to personally execute every target offense. Option D is incorrect because otherwise lawful acts done to facilitate an unlawful enterprise with a stake in its profits establish conspiratorial liability."
    },
    {
        id: 31,
        topic: "Mixed",
        fp: "Paul was nine years old and a third-grade student in school. While playing in the school yard during the recess period, Paul became involved in a fight with David, ten years old and a student in the fourth grade. David kicked Paul in the leg during the fight and, as a result, Paul suffered a fracture of a bone in the leg.\n\nPaul, through an appropriate legal representative, has asserted claims for damages against David and against the school district.",
        q: "Will Paul prevail on his claim against David?",
        opts: [
            "Yes, because David kicked Paul.",
            "Yes, if David started the fight.",
            "No, unless David used excessive force.",
            "No, if Paul's bones were unusually brittle."
        ],
        ans: 2,
        exp: "Rule: Voluntarily participating in a mutual fight or sporting scuffle implies consent to physical contacts that are normal and reasonably anticipated under the circumstances. A participant cannot recover for battery resulting from mutual combat unless the defendant used excessive, disproportionate, or unreasonable force outside the scope of implied consent (Option C). Option A is incorrect because mutual combat implies consent to customary physical blows. Option B is incorrect because mutual consent to fight defeats the battery claim regardless of who initiated the dispute, unless excessive force was employed. Option D is incorrect because under the 'eggshell skull' doctrine, a tortfeasor takes the victim as found, so brittle bones would not be a defense if battery were established."
    },
    {
        id: 32,
        topic: "Mixed",
        fp: "Paul was nine years old and a third-grade student in school. While playing in the school yard during the recess period, Paul became involved in a fight with David, ten years old and a student in the fourth grade. David kicked Paul in the leg during the fight and, as a result, Paul suffered a fracture of a bone in the leg.\n\nPaul, through an appropriate legal representative, has asserted claims for damages against David and against the school district.",
        q: "Will Paul prevail on his claim against the school district?",
        opts: [
            "Yes, because the fight took place during the recess period.",
            "Yes, because the fight took place on school premises.",
            "No, if Paul was the person who actually started the fight.",
            "No, unless the school failed to use reasonable care in supervising the school premises."
        ],
        ans: 3,
        exp: "Rule: A school district is not an absolute insurer of student safety and is not strictly liable for torts committed by pupils. The school owes a duty of ordinary, reasonable care under the circumstances to provide adequate supervision on school grounds. To prevail, a plaintiff must prove that school personnel breached that standard of reasonable care (Option D). Options A and B are incorrect because time and location do not establish strict liability for a school district. Option C is incorrect because a child's initiation of a playground dispute does not automatically negate school liability if school authorities were negligent in supervising the yard."
    },
    {
        id: 33,
        topic: "Mixed",
        fp: "Actor, a well-known film star, was photographed by a freelance photographer, while sitting at a sidewalk cafe, drinking beer and with a bottle of Foamus Light Beer on the table in front of him. The picture was reproduced in Magazine, a publication containing stories and articles about the film industry, in connection with a story about the eating and drinking tastes of film stars. The label on the beer bottle was clearly visible in the picture.\n\nThe following month, advertisements for Foamus Light Beer appeared in other publications and carried a reproduction of the page from Magazine on which Actor's picture appeared, with the heading 'Drink the beer that movie stars drink.'",
        q: "If Actor asserts a claim against Magazine, will Actor prevail?",
        opts: [
            "Yes, if Actor had not authorized any use of the picture.",
            "Yes, because Magazine was using Actor's picture for its commercial purposes.",
            "No, because Actor's picture was taken in a public place.",
            "No, if Actor's career was advanced by the publicity."
        ],
        ans: 2,
        exp: "Rule: The tort of invasion of privacy protects individuals from intrusion upon seclusion, false light, public disclosure of private facts, and commercial appropriation. Photographing a celebrity in an open, public place (such as a sidewalk cafe) does not constitute intrusion upon seclusion because there is no reasonable expectation of privacy. Furthermore, publishing the photo in connection with a newsworthy or entertainment-related article does not constitute commercial misappropriation, which applies only to unauthorized advertising or trade promotion (Option C). Option A is incorrect because media publications do not require prior consent to publish newsworthy photographs taken in public. Option B is incorrect because selling news or entertainment magazines is not 'commercial use' under misappropriation rules. Option D is incorrect because lack of reputational harm does not determine liability for privacy torts."
    },
    {
        id: 34,
        topic: "Mixed",
        fp: "Actor, a well-known film star, was photographed by a freelance photographer, while sitting at a sidewalk cafe, drinking beer and with a bottle of Foamus Light Beer on the table in front of him. The picture was reproduced in Magazine, a publication containing stories and articles about the film industry, in connection with a story about the eating and drinking tastes of film stars. The label on the beer bottle was clearly visible in the picture.\n\nThe following month, advertisements for Foamus Light Beer appeared in other publications and carried a reproduction of the page from Magazine on which Actor's picture appeared, with the heading 'Drink the beer that movie stars drink.'",
        q: "If Actor asserts a claim against Foamus Light Beer based on the advertisements in the other publications, will Actor prevail?",
        opts: [
            "Yes, if Actor had not consented to having his picture taken.",
            "Yes, if Actor had not consented to Foamus Light Beer using Actor's picture for commercial purposes.",
            "No, because Actor's picture had already appeared in Magazine.",
            "No, if Actor was already a public figure."
        ],
        ans: 1,
        exp: "Rule: Commercial appropriation (part of the right of publicity / privacy) occurs when a defendant uses the plaintiff's name, image, or likeness for commercial advantage or advertising purposes without obtaining the plaintiff's consent. Foamus Light Beer used Actor's image in commercial advertisements endorsing their product without permission, making Foamus liable for commercial appropriation (Option B). Option A is incorrect because consent to take the original photo does not grant commercial advertising rights. Option C is incorrect because lawful publication in a newsworthy magazine does not grant third-party commercial entities the right to exploit the photograph in product advertising. Option D is incorrect because public figures retain the right of publicity over the commercial exploitation of their likeness."
    },
    {
        id: 35,
        topic: "Mixed",
        fp: "Vee loaned Dan her car when Dan told Vee that he needed the car in order to get some groceries. In fact Dan intended to drive 100 miles to apply for a job in City and return the same day. However, when Dan reached City and obtained a job he decided to remain in City permanently. Dan did not inform Vee of where he was and he did not return to car to Vee.",
        q: "Did Dan commit larceny?",
        opts: [
            "Yes, because Dan did not return the car to Vee.",
            "Yes, because Dan unlawfully converted property to which he had lawfully obtained possession.",
            "No, because there was no concurrence of actus reus and mens rea.",
            "No, because Vee voluntarily loaned Dan her car."
        ],
        ans: 0,
        exp: "Rule: Larceny requires a trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. Dan committed a trespassory taking at the outset through fraud/misrepresentation (larceny by trick) when he deceived Vee about his intended trip. Under the doctrine of continuing trespass, because the original taking was trespassory/wrongful, the trespassory nature continues until the actor forms the intent to permanently deprive, satisfying the concurrence requirement when he decides to keep the vehicle. Thus, Dan committed larceny (Option A). Option B is incorrect because converting property after obtaining lawful possession defines embezzlement, not larceny. Option C is incorrect because the doctrine of continuing trespass satisfies concurrence. Option D is incorrect because consent obtained by fraud is vitiated, rendering the initial taking trespassory."
    },
    {
        id: 36,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume that Ella received her wire on June 22 and immediately wired back: 'On my way. Hope I get a better room than you provided last time. /s/ Ella.' After Ella sent her wire, but before Anna received it, Anna learned from Sam's surgeon that Sam had recovered and could perform July 1. Anna immediately telephone Ella and said that Ella was not needed because Sam had recovered.",
        q: "If Ella asserts a claim against Anna and Anna defends on the ground that there was no effective acceptance of her offer, who will prevail?",
        opts: [
            "Ella, because her acceptance was dispatched prior to Anna's revocation of her offer.",
            "Ella, because Anna's revocation was not communicated in the same form as Anna's offer.",
            "Anna, because Ella's response failed to specify any salary.",
            "Anna, because Ella's response, added a term to the offer, which Anna was free to reject."
        ],
        ans: 0,
        exp: "Rule: Under the mailbox rule, an acceptance of an offer is effective upon proper dispatch (e.g., deposited into the post or handed to the telegraph agency), creating an immediate binding contract. Conversely, a revocation is effective only upon actual receipt by the offeree. Because Ella dispatched her acceptance wire on June 22 before Anna communicated her revocation, an enforceable contract was formed at the moment of dispatch (Option A). Option B is incorrect because a revocation need not match the exact medium of the offer; it simply must be received prior to acceptance. Option C is incorrect because 'money no object' in the context of professional booking acts allows a court to imply a reasonable value / market rate. Option D is incorrect because Ella's statement ('Hope I get a better room') was a mere expression of hope or 'grumbling acceptance,' which does not defeat acceptance or create a counteroffer."
    },
    {
        id: 37,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume the same facts as in question 36.\nAnna defends on the ground that her wire was not intended as an offer, since it was sent to three people and she needed only one replacement act.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, if Anna did not intend to be bound to more than one person.",
            "Yes, because, as creator of the purported 'offer,' Anna's intent not to make an offer prevails.",
            "No, if Ella did not know that identical wires were sent to others.",
            "No, because Anna would only be bound by the first acceptance she received."
        ],
        ans: 2,
        exp: "Rule: Contract formation is judged by the objective theory of contracts—how a reasonable person in the offeree's position would understand the communication. Secret subjective intentions or undisclosed transmissions of identical communications to other parties do not prevent a manifestation of assent from operating as a valid offer if the offeree reasonably understands that their assent binds the contract and has no reason to know of the multi-offeree communications (Option C). Options A and B are incorrect because subjective unexpressed intent does not govern over objective manifestations. Option D is incorrect because sending multiple unqualified offers to several parties exposes the offeror to liability on all acceptances if not properly qualified."
    },
    {
        id: 38,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume the same facts as in previous question 36.\nAnna defends on the ground that Sam's recovery was a changed circumstance that excused her from liability on her contract with Ella.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, because the risk of Sam's recovery was assumed by Ella.",
            "Yes, because illness in personal service contracts operates to excuse performance.",
            "No, because Anna was unilaterally mistaken as to whether Sam would recover in time to perform.",
            "No, because Anna did not condition her offer on Sam's continued incapacity and, therefore, the risk of his recovery was assumed by her."
        ],
        ans: 3,
        exp: "Rule: Impossibility, impracticability, or frustration of purpose discharges contractual duties only when an unforeseen event occurs, the non-occurrence of which was a basic assumption on which the contract was made, and the party seeking excuse did not assume the risk. When hiring a replacement entertainer without reserving the right to cancel if the primary performer recovers, the employer bears the business risk of the original employee's early recovery (Option D). Option A is incorrect because the hiring party, not the replacement artist, controls and bears the risk of an unconditioned employment commitment. Option B is incorrect because Sam's illness excused Sam from performing, but does not excuse Anna from honoring her independent contract with Ella. Option C is incorrect because Sam's recovery occurred after contract formation, making this an issue of changed circumstances/risk allocation rather than mutual/unilateral mistake at formation."
    },
    {
        id: 39,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume for this question that there was a valid contract between Ella and Anna, and that Sam recovered. Assume further that Anna refused to allow Ella to perform as the featured star, but offered to employ Ella, at a salary of $3,000 for the week, to perform in a less popular nightclub which Anna also owned. Ella's usual salary for a one week engagement is $5,000 and this is the sum she expected to receive from Anna. Ella refused to perform in Anna's other nightclub and was unable to obtain another booking. Anna paid Sam $10,000 for his one week performance.",
        q: "How much is Ella entitled to recover from Anna?",
        opts: [
            "$2,000.",
            "$5,000.",
            "$10,000.",
            "Nothing."
        ],
        ans: 1,
        exp: "Rule: In employment contracts, an employee wrongfully discharged or repudiated is entitled to recover the full agreed contract price/expected earnings, minus any amount earned or that could have been earned through reasonable mitigation efforts. However, an employee is not required to mitigate damages by accepting employment that is inferior, different in kind, of lower status, or at a lesser compensation. Because performing as a secondary act in a less popular club is substantially inferior and offers lower pay, Ella had no duty to accept Anna's substitute offer. Since Ella was unable to find comparable work despite reasonable efforts, she is entitled to her full expected compensation of $5,000 (Option B). Option A is incorrect because Ella was under no duty to accept inferior work, so Anna cannot deduct the $3,000 offer. Option C is incorrect because damages protect Ella's expectation interest ($5,000), not the amount paid to another performer ($10,000). Option D is incorrect because a material breach occurred and Ella is entitled to expectation damages."
    },
    {
        id: 40,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume that Frank, another performer, received one of the three wires sent by Anna on June 21. Without communicating with Anna, Frank cancelled his existing booking for the week of July 1 and appeared at Anna's nightclub on June 29, stating: 'Here I am. You knew you could count on me to help you out.' Anna said that Sam had recovered and was going to perform and that Anna did not expect Frank since she had heard nothing from him.",
        q: "If Frank sues Anna, who will prevail?",
        opts: [
            "Frank, because he could reasonably interpret Anna's wire as an offer permitting acceptance either by performance or a return promise.",
            "Frank, because he commenced performance prior to any attempted revocation by Anna.",
            "Anna, because her wire should reasonably have been understood as an offer requiring a timely return promise.",
            "Anna, because an offer can only be accepted by a return promise."
        ],
        ans: 2,
        exp: "Rule: The offeror is the master of the offer. Where an offer creates an urgent business scenario ('desperately need replacement act') and performance is set days into the future, a reasonable person would understand that the offeror needs prompt commitment (a return promise) rather than the uncertainty of waiting to see if an offeree silently appears a week later. Therefore, the wire reasonably required a timely return promise to accept, which Frank failed to provide (Option C). Option A is incorrect because in light of the urgent emergency circumstances, silence followed by physical appearance a week later is not a commercially reasonable mode of acceptance. Option B is incorrect because Frank did not notify Anna or commence actual performance with Anna's consent. Option D is incorrect because offers in general may invite acceptance by performance unless the language or circumstances indicate otherwise."
    },
    {
        id: 41,
        topic: "Mixed",
        fp: "Alma and Betty were patients in Hospital. Dr. Andrews was to operate on Alma for a back problem. Dr. Brown was to perform an appendectomy on Betty. Each doctor was performing her first operation in Hospital. Neither was familiar with the location of the operating rooms. Through some unexplained mistake, employees of Hospital took Dr. Andrews to the operating room where Betty was awaiting her operation and took Dr. Brown to the operating room where Alma was awaiting her operation. Each doctor commenced operating before the mistakes were discovered.",
        q: "If Alma asserts a claim against Dr. Brown, will Alma prevail?",
        opts: [
            "Yes, for battery.",
            "Yes, for negligence, relying on the doctrine of res ipsa loquitur.",
            "No, unless Alma can establish that Dr. Brown was negligent in not discovering her identity.",
            "No, because Hospital's employee took Dr. Brown to the wrong operating room."
        ],
        ans: 0,
        exp: "Rule: Battery is an intentional, non-consensual harmful or offensive contact with the person of another. In a medical context, performing surgery without the patient's consent constitutes battery as a matter of law. Mistake regarding patient identity—even if made in good faith or induced by hospital staff—does not negate the intent to make physical surgical contact, and the patient's lack of consent makes the contact an actionable battery (Option A). Option B is incorrect because surgical operations on the wrong patient constitute direct intentional contact (battery) rather than mere negligence. Option C is incorrect because battery does not require proof of negligence. Option D is incorrect because hospital error does not shield a physician from liability for direct, unauthorized physical intrusions."
    },
    {
        id: 42,
        topic: "Mixed",
        fp: "Alma and Betty were patients in Hospital. Dr. Andrews was to operate on Alma for a back problem. Dr. Brown was to perform an appendectomy on Betty. Each doctor was performing her first operation in Hospital. Neither was familiar with the location of the operating rooms. Through some unexplained mistake, employees of Hospital took Dr. Andrews to the operating room where Betty was awaiting her operation and took Dr. Brown to the operating room where Alma was awaiting her operation. Each doctor commenced operating before the mistakes were discovered.",
        q: "If Betty asserts a claim against Hospital will Betty prevail?",
        opts: [
            "Yes, for battery.",
            "Yes, for negligence relying on the doctrine of res ipsa loquitur.",
            "No, unless Dr. Andrews was an employee of Hospital.",
            "No, because Hospital is not strictly liable for harm to patients."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of res ipsa loquitur, negligence may be inferred where (1) the accident is of a kind that ordinarily does not occur in the absence of negligence, (2) the instrumentality causing the injury was under the defendant's exclusive control, and (3) the injury was not due to any voluntary action or contribution on the plaintiff's part. Delivering a surgeon to the wrong operating room and wrong patient is an event that does not occur in the absence of institutional administrative negligence, creating a prima facie inference of negligence against the hospital under res ipsa loquitur (Option B). Option A is incorrect because the hospital itself did not commit an intentional offensive touching; its liability sounds in administrative/institutional negligence. Option C is incorrect because the negligence was that of the hospital's direct employees who misdirected the physicians, not solely the doctors' employment status. Option D is incorrect because liability is based on actionable negligence, not strict liability."
    },
    {
        id: 43,
        topic: "Mixed",
        fp: "Owner brought his television set to Repairer for repair. Repairer sold the set to Buyer. Buyer believed that Repairer owned the set.",
        q: "If Owner asserts a claim based on conversion against Repairer and Buyer, Owner will prevail against",
        opts: [
            "Repairer but not Buyer, because Buyer was a good faith purchaser.",
            "Both Repairer and Buyer because each exercised dominion over the television set.",
            "Buyer but not Repairer because Repairer no longer has possession of the television set.",
            "Buyer but not Repairer because Repairer had lawful possession of the television set."
        ],
        ans: 1,
        exp: "Rule: Conversion is an intentional exercise of dominion or control over personal property that seriously interferes with the owner's right to control it. A bailee who wrongfully sells bailed property converts it. Furthermore, a purchaser of converted goods from someone with mere possession acquires no title and is likewise liable in tort for conversion upon asserting dominion, even if the purchaser acted in good faith (bona fide purchaser). Owner can prevail against both Repairer and Buyer in tort (Option B). (Note: While UCC § 2-403(2) provides that entrustment to a merchant dealing in goods of that kind can pass title to a buyer in ordinary course, in tort law, a conversion action lies against both the converter and the buyer who receives and exercises unauthorized dominion over the owner's chattel). Options A, C, and D are incorrect because neither lack of possession at the time of suit nor good faith prevents tortious dominion from constituting conversion."
    },
    {
        id: 44,
        topic: "Mixed",
        fp: "Boater owned a power boat which he was operating on Lake, a large body of water, on a clear calm day. He approached Sailer whose sailboat was disabled by a broken rudder. Sailer asked Boater to tow his sailboat to shore but Boater refused because he feared the tow might damage the paint on his power boat.\n\nIf Sailer was unable to bring his sailboat in and became severely ill as a result of exposure before he was rescued, and Sailer asserts a claim against Boater for damages based on Boater's refusal to provide assistance, will Sailer prevail?",
        q: "Will Sailer prevail?",
        opts: [
            "Yes, if Boater's failure to rescue made a bad situation worse.",
            "Yes, if the probability of harm to Sailer outweighed the probability of damage to Boater's property.",
            "No, unless there was some special relationship between Sailer and Boater.",
            "No, if Boater reasonably believed that towing Sailer's sailboat might damage the paint on Boater's power boat."
        ],
        ans: 2,
        exp: "Rule: Under common law tort principles, an individual owes no affirmative duty to rescue or assist a stranger in peril, absent a recognized special relationship (e.g., common carrier-passenger, innkeeper-guest, employer-employee), a statute imposing a duty, or conduct by the defendant that caused the peril. Because Boater did not create the disabled condition and shared no special relationship with Sailer, Boater had no legal duty to rescue (Option C). Option A is incorrect because mere failure to intervene is not an affirmative act that worsens peril. Option B is incorrect because cost-benefit balancing determines breach of duty only after an underlying affirmative legal duty is established. Option D is incorrect because Boater's refusal is privileged by the absence of a legal duty, regardless of whether his specific property concern was reasonable."
    },
    {
        id: 45,
        topic: "Mixed",
        fp: "Deft is being tried on an indictment charging him with burglary. Deft has introduced evidence, that, at the time he broke and entered, he was so intoxicated that he could not have formed an intent to commit a felony.",
        q: "On the issue of whether Deft was so intoxicated that his capacity to form the necessary intent was diminished, the jury should be instructed that the burden of proof is on the",
        opts: [
            "defendant to establish by a preponderance of the evidence that his capacity to form the necessary intent was diminished.",
            "defendant to establish by clear and convincing evidence that his capacity to form the necessary intent was diminished.",
            "prosecution to establish by clear and convincing evidence that Deft had the capacity to form the necessary intent.",
            "prosecution to establish beyond a reasonable doubt that Deft had the capacity to form the necessary intent."
        ],
        ans: 3,
        exp: "Rule: Under the Due Process Clause (In re Winship), the prosecution bears the constitutional burden of proving every essential element of the charged offense beyond a reasonable doubt. Burglary is a specific intent crime requiring proof of intent to commit a felony upon entry. Because voluntary intoxication can negate the specific intent element, the prosecution bears the ultimate burden of proving beyond a reasonable doubt that the defendant possessed the requisite intent and capacity despite evidence of intoxication (Option D). Options A and B are incorrect because affirmative defenses that directly negate an essential element of the crime cannot constitutionally have their burden shifted to the defendant. Option C is incorrect because the constitutional standard of proof for criminal elements is beyond a reasonable doubt, not clear and convincing evidence."
    },
    {
        id: 46,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on April 1, Seller conveyed his home to a third party. Buyer learned of the sale the following day and wants to cancel his contract with Seller and buy another home.",
        q: "May he do so without any risk that he will be obliged to perform his contract obligation to Seller?",
        opts: [
            "Yes, but only if he first demands assurance from Seller that Seller will perform on July 1, and Seller is unable to provide such assurance.",
            "Yes, if Seller, in connection with the sale to the third party, did nothing to preserve Buyer's rights to acquire the property.",
            "No, because Seller's performance is not due until July 1 and Buyer must remain in a position to perform his contract obligation up to that time.",
            "No, because there is a possibility that Seller could buy back the property and tender a deed to Buyer on July 1."
        ],
        ans: 1,
        exp: "Rule: When a seller of specific real property conveys that property to a third party without reserving or preserving the buyer's rights, the conveyance constitutes an anticipatory repudiation by conduct because the seller has voluntarily rendered their own performance impossible. Upon anticipatory repudiation, the aggrieved buyer is discharged from their duties, is free to treat the contract as broken, and may immediately seek cover or terminate the contract (Option B). Option A is incorrect because a definitive, disabling act is an outright repudiation, obviating the need to demand adequate assurances. Options C and D are incorrect because the speculative possibility that the seller might repurchase the land does not deprive the buyer of the immediate right to treat the conveyance as a repudiation."
    },
    {
        id: 47,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on April 1 Seller tells Buyer that he (Seller) has changed his mind and will not convey his home to Buyer.",
        q: "May Buyer immediately maintain an action for damages for breach of contract?",
        opts: [
            "Yes, but only if Seller has sold or contracted to sell the home to another party.",
            "Yes, because Seller's statement constituted a repudiation, giving rise to an immediate cause of action for breach of contract.",
            "No, because Seller's performance is not due until July 1 and thus there can be no breach of contract until that date.",
            "No, because Seller might retract his repudiation before July 1."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of anticipatory repudiation (Hochster v. De La Tour), an unequivocal and absolute statement by a party declaring that they will not perform their contractual obligations constitutes an immediate total breach. The non-repudiating party is not required to wait until the scheduled date of performance, but may file an action for breach of contract immediately (Option B). Option A is incorrect because an unequivocal oral or written refusal to perform is an anticipatory repudiation; third-party transfer is not required. Option C is incorrect because anticipatory repudiation permits immediate suit prior to the performance date. Option D is incorrect because the power to retract a repudiation terminates once the aggrieved party accepts the repudiation, brings suit, or materially changes position."
    },
    {
        id: 48,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on July 1 Seller fails to deliver or tender the deed.",
        q: "May Buyer successfully maintain an immediate action against Seller for damages for breach of contract?",
        opts: [
            "Yes, if Buyer tendered payment on July 1.",
            "Yes, but only if Buyer actually made the payment on July 1.",
            "Yes, whether or not Buyer tendered payment or actually paid on July 1.",
            "Yes, because payment of the price by Buyer was a condition subsequent to Seller's duty to tender the deed."
        ],
        ans: 0,
        exp: "Rule: In real estate transactions, delivery of the deed and payment of the purchase price are concurrent conditions. Neither party can put the other in actual breach of contract on the closing date without first tendering (or offering and being able to make) their own performance. Thus, Buyer must tender payment on July 1 to place Seller in default and maintain an action for damages (Option A). Option B is incorrect because actual delivery of funds into the hands of a breaching party who refuses to tender the deed is not required; tender (offering payment ready and willing) suffices. Option C is incorrect because without tender of payment, Seller's duty to convey does not become immediately enforceable. Option D is incorrect because payment is a concurrent condition, not a condition subsequent."
    },
    {
        id: 49,
        topic: "Mixed",
        fp: "Deft intended to kill Vic. With that in mind, Deft shot at Vic but missed Vic and hit Cal. Cal was wounded only slightly. Cal turned, saw Vic empty-handed standing nearby, but thought that Vic had shot him. Cal picked up an iron bar and beat Vic repeatedly over the head.",
        q: "Did Deft commit the attempted murder of Cal?",
        opts: [
            "Yes, because Deft attempted to kill Vic.",
            "Yes, because Deft acted with premeditation and malice towards Vic.",
            "No, because Cal was wounded only slightly.",
            "No, because Vic did not intend to kill Cal."
        ],
        ans: 3,
        exp: "Rule: Attempt requires the specific intent to commit the target crime (specific intent to kill). The doctrine of transferred intent applies to completed crimes (e.g., where an intended shot misses the intended victim and kills a bystander, making it murder), but transferred intent does not apply to inchoate attempts. Attempted murder requires a specific intent to kill the specific person actually harmed or attempted. Because Deft did not possess the specific intent to kill Cal, Deft cannot be convicted of attempted murder of Cal (Option D—which corresponds to Option D in the test key). Options A and B are incorrect because transferred intent cannot satisfy the specific intent requirement in attempted murder. Option C is incorrect because the severity of the wound does not determine whether an attempted murder occurred."
    },
    {
        id: 50,
        topic: "Mixed",
        fp: "Deft intended to kill Vic. With that in mind, Deft shot at Vic but missed Vic and hit Cal. Cal was wounded only slightly. Cal turned, saw Vic empty-handed standing nearby, but thought that Vic had shot him. Cal picked up an iron bar and beat Vic repeatedly over the head.",
        q: "Did Cal commit battery?",
        opts: [
            "Yes, because Cal intentionally beat Vic.",
            "Yes, because Vic had not committed an unlawful act.",
            "No, if Cal acted in the heat of passion.",
            "No, if Cal reasonably believed Vic had shot at him."
        ],
        ans: 0,
        exp: "Rule: Battery is the intentional, unlawful infliction of harmful or offensive bodily contact. While self-defense permits the use of reasonable force against an apparent assailant based on a reasonable mistake of fact, deadly or aggravated force (such as repeatedly beating an empty-handed person over the head with an iron bar) is excessive and disproportionate as a matter of law. Because Cal used excessive, deadly force against an unarmed victim, the defense of self-defense fails, rendering the intentional beating a battery (Option A). Option B is incorrect because self-defense can be valid even if the victim did not commit an unlawful act, provided the defendant's mistake of fact was reasonable and the force used was not excessive. Option C is incorrect because heat of passion can mitigate murder to manslaughter, but does not justify or excuse battery. Option D is incorrect because beating an unarmed person repeatedly over the head with an iron bar constitutes excessive force, precluding self-defense."
    }
];