const examData = [
    {
        id: 1,
        topic: "Negligence / Proximate Cause",
        fp: "The landlord was the owner of a four-story office building. An attorney in the landlord's building knew that the elevator was broken, but decided to take one of his client's up in it anyway. The landlord had promised the attorney he would fix it, but the landlord did not do so. When the attorney and the client were riding in the elevator, it suddenly dropped, injuring the client.",
        q: "The client asserted a claim against the landlord for damages resulting from his injuries, alleging that the landlord was negligent in failing to fix the elevator or warn the client about it. Which of the following would be the landlord's most effective argument in defense?",
        opts: [
            "The landlord did not owe the client a duty to repair the elevator since the landlord's promise was not made to the client.",
            "The client was a mere licensee since his presence did not confer a benefit on the landlord.",
            "It was not foreseeable that the attorney would permit the client to use the elevator since the attorney knew it was not working properly.",
            "It was unreasonable for the attorney to permit the client to use the elevator since the attorney knew that it was not working properly."
        ],
        ans: 2,
        exp: "Even if a defendant's conduct is negligent, the defendant is not liable for the plaintiff's injuries unless they were proximately caused by that conduct. Conduct is a proximate cause of harm if it was a factual and legal cause of the harm. Conduct is a factual cause of harm if the harm would not have occurred without it. Since the client would not have been hurt if the landlord had fixed or warned him about the elevator, the landlord's failure to do so was a factual cause of the client's injuries. Conduct that is a factual cause of harm is a legal cause if the harm was a foreseeable result of it and not brought about by an unforeseeable intervening cause (i.e., a superseding cause). Since the client would not have been hurt if the attorney had not permitted him to use the elevator, the attorney's conduct was also a cause of the client's injury. Thus, if it was not foreseeable that the attorney would permit the client to use the elevator, the attorney's conduct was a superseding cause of the client's injury. While it is not certain that a court would come to this conclusion, C is the only argument listed that could possibly support the landlord's defense.\n\nAlthough the landlord's promise to repair the elevator might not be enforceable by the client, A is not an effective argument because, apart from the promise, one who holds realty owes a duty of reasonable care to invitees. An invitee is a person whose presence confers an economic benefit on the landholder. The client was the attorney's client, and the attorney would not have rented space in the building unless his clients could come to see him there. For this reason, the client's presence did confer an economic benefit on the landlord, and the client was the landlord's invitee. (Note: It is usually held that invitees of a tenant are also invitees of the landlord.) B is therefore incorrect. Although an unforeseeable intervening cause may be superseding (i.e., prevent the antecedent wrongdoer from being liable), the fact that it was unreasonable is not sufficient to make it superseding. D is therefore incorrect."
    },
    {
        id: 2,
        topic: "Negligence / Duty to Warn",
        fp: "A team of law school students entered their university's softball tournament. The law students were extremely competitive, but also extremely bad at softball. In their first game, they were quickly losing by five runs. The student coach got mad at one of the players for not taking the game seriously. A woman watched the coach pick up a baseball bat and march toward the player, who was dancing by home base. Although she realized what was about to happen, she didn't warn the player before the coach hit the player in the back of the head with the bat. The player dropped to the ground with a cracked skull. The player sued the woman for his injuries because she came from a wealthy family.",
        q: "Should the court rule in the player's favor?",
        opts: [
            "No, because the coach actually hit the player.",
            "No, because the woman had no duty to warn the player.",
            "Yes, because the woman realized what was about to happen.",
            "Yes, because the woman had a duty to warn the player."
        ],
        ans: 1,
        exp: "Even if a person could warn another person of an imminent danger, that person has no duty to do so. Consequently, the player cannot recover against the woman.\n\nA is incorrect because the woman could be liable if she had a duty to warn the player. C and D are incorrect because the woman had no duty to warn the player."
    },
    {
        id: 3,
        topic: "Trespass to Chattels / Consent",
        fp: "After living together for several months, a man and his girlfriend began to argue frequently. On Monday, after an argument, the man left their apartment in anger, saying that he didn't know when he was coming back. The following Saturday, the girlfriend took all the man's possessions, including his television set, to a swap meet in hopes of selling them. At the swap meet, she sold the television to a neighbor.",
        q: "If the man instituted an action against his former girlfriend for trespass to chattel, which one of the following additional facts or inferences, if it was the only one true, would be most helpful to the girlfriend's defense?",
        opts: [
            "The man's leaving the apartment constituted implied consent to the girlfriend's sale of his possessions.",
            "The girlfriend's interference with the man's right to the television was serious enough to justify a forced sale.",
            "The neighbor committed a conversion by purchasing the television set at the swap meet.",
            "At the time the man's action against her was instituted, the girlfriend could not reacquire possession of the television set from the neighbor."
        ],
        ans: 0,
        exp: "Consent (i.e., willingness) is a defense to all intentional torts. While it is not likely that this inference would be drawn, it would give the girlfriend a complete privilege if it was.\n\nB is incorrect because the plaintiff has a right to elect whether to sue for conversion or trespass to chattel. C is incorrect because the neighbor's liability would not prevent the girlfriend from being liable as well. The remedy for trespass to chattel is money damages. D is therefore incorrect."
    },
    {
        id: 4,
        topic: "Negligence / Breach of Duty",
        fp: "The plaintiff and the defendant lived on the same street and worked in the same office, so they formed a car pool, each driving his own car on alternate days. One day while the defendant was driving, the car in front of him stopped suddenly and without warning. Since the defendant had taken his eyes off the road for a moment to look at the plaintiff, he was unable to stop in time and collided with the rear of the stopped car. The plaintiff was injured as a result of the collision.\n\nThere was no automobile guest statute in the jurisdiction.",
        q: "In an action by the plaintiff against the defendant, which of the following would be the defendant's most effective argument in defense?",
        opts: [
            "The plaintiff assumed the risk since he knew that it was possible that the defendant's car would be involved in an accident while traveling to work.",
            "The defendant's conduct was not a cause-in-fact of harm since the accident would not have occurred if the car in front of him had not stopped suddenly.",
            "The defendant did not owe the plaintiff a duty of reasonable care since the plaintiff was a licensee.",
            "It was not negligent for the defendant to take his eyes off the road for a moment."
        ],
        ans: 3,
        exp: "Negligence means failing to act like the reasonable person. If the defendant can convince the trier of fact that the reasonable person occasionally takes his or her eyes off the road while driving, and that his conduct was therefore not negligent, the plaintiff's negligence action against him will fail. While a court might not come to this conclusion, D is the only argument listed that might be effective in the defendant's defense.\n\nA is incorrect because assumption of the risk requires a voluntary encounter with a known risk. For this purpose, a risk is \"known\" if the plaintiff is substantially certain that harm will probably occur. Recognition of a mere possibility of harm is not sufficient. B is incorrect because although it establishes that the other car's sudden stop was a cause of the accident, that does not mean that the defendant's conduct was not also a cause. C is incorrect since the special rules about duties owed to licensees apply only to accidents that occur on a defendant's land."
    },
    {
        id: 5,
        topic: "Negligence",
        fp: "After an accident, a woman was trapped in her car. The fire chief told a volunteer firefighter to use a new device to free her. He knew the device could be dangerous, and that the volunteer firefighter had not been trained in how to use it. The volunteer firefighter used the device improperly, injuring the woman.",
        q: "If the woman instituted an action against the fire chief, what is the woman's best theory?",
        opts: [
            "Negligence.",
            "Battery.",
            "Strict products liability.",
            "Res ipsa loquitur."
        ],
        ans: 0,
        exp: "It was probably unreasonable for the fire chief (who knew the device could be dangerous) to permit the volunteer firefighter (whom he knew to be untrained) to use it. Although a court might not find that the fire chief was negligent, A is the only theory listed that could result in a judgment for the woman.\n\nUnless the fire chief had a substantial certainty that harm would result, he lacked the intent to make him liable for battery. B is therefore incorrect. Strict products liability is imposed only on a professional supplier of a defective product. Since the fire chief was not in the business of supplying the device, C is incorrect. D is incorrect because res ipsa permits an inference of negligence to be drawn from the circumstances only when there is no direct evidence of the defendant's conduct."
    },
    {
        id: 6,
        topic: "Negligence / Affirmative Duty to Act",
        fp: "A poet was sitting on a rock by a small waterfall. As he was sitting there, a young woman fell in the water at the bottom, which was about five feet deep. She started thrashing and screaming that she couldn't swim. The poet was a college swimmer, but he had a big reading that night and didn't want to get his hair wet. The woman sunk to the bottom. After a few minutes, the poet finally got up, found a long stick, and fished the woman out. He then called the paramedics and started CPR. The woman was eventually revived, but she suffered brain damage from lack of oxygen. The woman's family sued the poet on the woman's behalf. The state had a Good Samaritan Law.",
        q: "Should the court rule in the woman's favor?",
        opts: [
            "Yes, under the Good Samaritan Law.",
            "Yes, because the poet's actions were unreasonable.",
            "No, because the poet had no duty to help the woman.",
            "No, because the woman was contributorily negligent by getting near the water."
        ],
        ans: 2,
        exp: "Generally, a person has no duty to assist another person in danger. Here, because the poet had no duty to help the woman, he didn't have to try even if it would have been easy for him to do so. Thus, the woman should not recover.\n\nA is incorrect because a Good Samaritan Law protects a person from liability if he or she tries to help another person. Importantly, it does not require a person to rescue others. B is incorrect because the poet had no duty to do anything. D is incorrect because the woman's possible negligence would not change the analysis."
    },
    {
        id: 7,
        topic: "Defamation",
        fp: "A newspaper incorrectly stated that a local minister was a minister for a group that was historically perceived as a cult engaged in unlawful activities.",
        q: "Which of the following is a court most likely to find about the statement?",
        opts: [
            "The statement is not defamatory if the group can be classified as a religion under the First Amendment to the United States Constitution.",
            "The statement is not defamatory if members of the group do not currently engage in improper activities.",
            "The statement is not defamatory if a substantial group of right-thinking people know that members of the group no longer engage in improper activities.",
            "The statement is defamatory if many people continue to believe that members of the group engage in improper activities."
        ],
        ans: 3,
        exp: "A statement is defamatory if it would expose the plaintiff to hatred, contempt, disgrace, or ridicule. Here, if many people continue to believe that members of the group engage in improper activities, the statement would do so.\n\nA is incorrect since a judgment for the minister will not violate either the Establishment Clause or the Free Exercise Clause. B is incorrect because what matters is what a substantial group of people would believe about the plaintiff as a result of the statement. The fact that a substantial group of right-thinking people would not associate the plaintiff with shame or disgrace does not prevent the statement from being defamatory if there is also a substantial group of people who would. C is therefore incorrect."
    },
    {
        id: 8,
        topic: "Negligence / Duty",
        fp: "A company was in the business of developing and manufacturing machinery used in other industries. A warehouse employee was injured when a pin in one of the company's machines wore out. The company knew that a pin failure was dangerous. The employee instituted a negligence action against the company that made the machine.",
        q: "The company's defense was based on the assertion that prior to the accident, the company neither knew nor reasonably could have known that the pin would wear out. If the jury believes this assertion, will the employee win?",
        opts: [
            "Yes, since the company is deemed to be an expert in its field and has a duty to know all relevant facts about the product that it makes.",
            "Yes, since it is foreseeable that if the pin did wear out, someone would be hurt.",
            "Yes, since a manufacturer is strictly liable for defects in its product, whether or not it could have prevented those defects.",
            "No."
        ],
        ans: 3,
        exp: "Negligence is the failure to act reasonably in the face of a foreseeable risk. If the risk was not foreseeable, the company's failure to guard against it was not negligence.\n\nA is incorrect since an expert is expected to know only that which the reasonable expert would know. If the risk that it will wear out was not foreseeable, knowledge that harm would occur if it did wear out does not result in a duty to protect against its wearing out. B is therefore incorrect. C is incorrect because the employee's action is based on negligence."
    },
    {
        id: 9,
        topic: "Negligence / Duty of Care",
        fp: "A carpenter was working on the framework of his roof when he found that he had brought the wrong hammer onto the roof with him. Without looking to see if anyone was around, he tossed the hammer to the ground, shouting, \"Heads up!\"\n\nA man who was crossing the property was killed when the hammer hit him in the head. The representative of the man's estate instituted an appropriate action against the carpenter, in a jurisdiction that applies the all-or-nothing rule of contributory negligence, alleging that the carpenter's throwing of the hammer without looking was negligence.",
        q: "If it were the only one true, which of the following additional facts or inferences would be most effective in the carpenter's defense against that allegation?",
        opts: [
            "It was reasonable for the carpenter to believe that no one would be struck by the hammer.",
            "It is customary in the construction industry for people working on a roof to toss unwanted tools and objects to the ground without looking, so long as they shout, \"Heads up!\"",
            "The man could have avoided being struck by the hammer if he had seen it coming.",
            "The blow of his hammer would not have caused a serious injury to a normal person, but it seriously injured the man because his head was extraordinarily sensitive."
        ],
        ans: 0,
        exp: "Negligence is a breach of the duty of reasonable care. Most cases hold that a defendant does not owe a duty of reasonable care unless it is foreseeable (i.e., the reasonable person would anticipate) that his or her act will cause harm. If it was reasonable for the carpenter to believe that his act would cause no harm, he owed no duty of reasonable care. If the carpenter owed no duty of reasonable care, the carpenter could not have been negligent.\n\nB is incorrect because custom does not determine what reasonable care is. Although the man's contributory negligence might prevent him from recovering, there is no indication that the man's failure to see the hammer was negligent. C is therefore incorrect. D is incorrect because of the rule that a defendant takes the plaintiff as he or she finds him or her. (Note: What this means is that if an injury to the plaintiff is foreseeable, the full extent of that injury is foreseeable even though some special sensitivity of the plaintiff was a contributing factor to its extent.)"
    },
    {
        id: 10,
        topic: "Battery / Eggshell Plaintiff Rule",
        fp: "A boy and a girl were insulting each other in the middle school lunchroom when the girl took her peanut butter sandwich and pushed it in the boy's face. Although the girl didn't know it, the boy was extremely allergic to peanuts. The boy had a severe allergic reaction and went into a coma. When he finally came out of the coma, he had severe brain damage. The boy's parents sued the girl for the boy's injuries.",
        q: "Should the court rule in the boy's favor?",
        opts: [
            "Yes, because of the eggshell plaintiff rule.",
            "Yes, because a peanut butter allergy was reasonably foreseeable.",
            "No, because the girl did not know about the boy's allergy.",
            "No, because the boy's coma was not reasonably foreseeable."
        ],
        ans: 0,
        exp: "Under the eggshell plaintiff rules, damages are not reduced because the victim is more susceptible to an injury than the average person. Here, although peanut butter wouldn't severely injure the average person, this does not change the fact that it severely injured the boy. Thus, the girl is liable for his injuries.\n\nB is incorrect because the boy's recovery is not dependent on foreseeability. C and D are incorrect because of the eggshell plaintiff rule."
    },
    {
        id: 11,
        topic: "Negligence / Contributory Negligence",
        fp: "A mother negligently allowed her nine-year-old son to ride his bike on a busy road. While doing so, the boy negligently swerved side-to-side until he was hit by a car driven by a driver. The driver was acting unreasonably when he struck the boy. The jurisdiction applies the all-or-nothing rule of contributory negligence.",
        q: "If the boy asserts a negligence claim against the driver for his injuries, should the court rule for the boy?",
        opts: [
            "Yes, because a nine-year-old is presumed incapable of contributory negligence.",
            "Yes, under the doctrine of res ipsa loquitur.",
            "No, because the accident resulted from the boy's unreasonable conduct.",
            "No, because it was unreasonable for the boy's mother to give her son permission to ride his bicycle along the roadway."
        ],
        ans: 2,
        exp: "Negligence is unreasonable conduct. Thus, if the driver was acting unreasonably, he was negligent and should be liable for the boy's injuries. Under the all-or-nothing rule of contributory negligence, however, a plaintiff is completely barred from recovery if his or her own negligence contributed to the happening of the accident. Contributory negligence is unreasonable conduct by a plaintiff. Thus, if the boy's injury resulted from his own unreasonable conduct (i.e., contributory negligence), he will not recover in spite of the fact that the driver was also negligent.\n\nA child is said to have been negligent if he failed to act like a reasonable child of the same age, experience, and intelligence. A is therefore incorrect. Res ipsa loquitur permits an inference that the defendant was negligent to be drawn from certain circumstantial evidence. Since the driver's negligence is given, res ipsa loquitur is inapplicable, and B is incorrect. Unreasonable conduct by a third person is not imputed to a plaintiff as contributory negligence, even when the third person is the minor plaintiff's parent. D is therefore incorrect."
    },
    {
        id: 12,
        topic: "Negligence / Proximate Cause",
        fp: "While attempting to make an arrest at a grocery store, police officers knocked over several stacks of merchandise, including cases of bottled soda-pop. This caused minute cracks in all the bottles. The following day, store employees cleaned up the mess, restacking the cases of soda-pop without checking any of the bottles for damage. A woman purchased one of the bottles but did not notice the minute crack in it.\n\nThat evening, the woman was placing the bottle on the dinner table when the bottle exploded because of the crack in it, sending fragments of glass flying in all directions. The woman was injured.",
        q: "In an action by the woman against the grocery store, is the court likely to find for the woman?",
        opts: [
            "Yes, because she could not have done anything to protect herself against the kind of injury that occurred.",
            "Yes, because the grocery store's conduct in restacking and selling the bottles without some sort of inspection was unreasonable under the circumstances.",
            "No, because the conduct of the police officers was a proximate cause of the injury sustained by the woman.",
            "No, because the woman and the grocery store were not in privity."
        ],
        ans: 1,
        exp: "A defendant's conduct is a proximate cause of harm if it was a factual and legal cause of that harm. Conduct is a factual cause of harm if the harm would not have occurred without it. Since the woman would not have been injured by the bottle if the grocery store had not restacked and sold the bottles, the grocery store's conduct was a factual cause of the woman's injury. Conduct that is a factual cause of harm is a legal cause of that harm if the harm was a foreseeable result of it. Since the contents of bottles of soda-pop are under pressure, it is probably foreseeable that a crack in the bottle will result in an explosion and injury. The grocery store's conduct was thus a proximate cause of the woman's injury. A defendant is liable for the proximate results of his or her negligence. For this reason, since the grocery store's conduct was negligent, the woman is likely to win her lawsuit against it.\n\nA is incorrect because the plaintiff's helplessness is not in itself a basis of the defendant's liability. C is incorrect because harm may have more than one proximate cause. The fact that the conduct of the officers was a proximate cause of the plaintiff's harm does not mean that the negligence of the grocery store was not. Since privity is not an essential element of a negligence action, D is also incorrect."
    },
    {
        id: 13,
        topic: "Misrepresentation / Damages",
        fp: "While standing in an art gallery, a buyer overheard a conversation between a collector and an art dealer. The dealer stated that a particular painting was worth $250,000. After the collector left the gallery, the buyer purchased the painting for $225,000 from the dealer. The buyer subsequently learned that the painting was worth only $600.",
        q: "If the buyer is successful in a tort action for misrepresentation against the dealer, the court is likely to award him a judgment for what amount?",
        opts: [
            "$250,000 (the value that the dealer stated).",
            "$250,000 (the value that the dealer stated), on condition that the buyer return the painting to the dealer.",
            "$225,000 (the price that the buyer paid to the dealer).",
            "$224,400 (the price that the buyer paid to the dealer, less the value of the painting)."
        ],
        ans: 3,
        exp: "Since the buyer received something for his money, the measure of his damages must consider the value that he has received. In some jurisdictions, damage for misrepresentation is measured by the difference between what the plaintiff received and what the defendant told him or her he or she would be receiving (\"benefit of the bargain\" theory). In this case, that would be $250,000 less $600, or $249,400. In other jurisdictions, the damage is measured by the difference between what the plaintiff paid and what he or she actually received (\"out-of-pocket\" theory). In this case, that would be $225,000 less $600 or $224,400. D is therefore correct.\n\nA and C are incorrect because they ignore the value of what the buyer actually received. B is incorrect because it describes a rescission remedy, which may be available in a claim for breach of contract but is not available in this tort claim for damages."
    },
    {
        id: 14,
        topic: "Negligent Entrustment",
        fp: "A man lent his friend his car. The man knew his friend had had his license revoked for reckless driving, but his friend promised he was only driving his mother to a doctor's appointment and would return the car as quickly as possible. In fact, the friend drove the car several hundred miles away to visit his girlfriend. On the way back, the friend was speeding and swerving between cars when he crashed into a woman's car. Because the man's friend had no money, the woman sued the man for negligence.",
        q: "May she recover?",
        opts: [
            "Yes, because the man loaned his friend the car.",
            "Yes, because the man owned the car.",
            "No, because the friend lied to the man about how he would use the car.",
            "No, because the woman is only suing the man because his friend has no money."
        ],
        ans: 0,
        exp: "If the likelihood of injury is great, a defendant may be required to anticipate the negligence of others. Here, a reasonable person would not have lent the car to the friend, considering the fact he had his license revoked for reckless driving.\n\nB is incorrect because the man's liability in this instance is based on his loan of the car, not his ownership of it. C is incorrect because the man was negligent when he lent the car to his friend, so the fact that the friend lied to him about his intentions does not change the analysis. D is incorrect because the woman's motivation for suing the man does not affect the man's liability for negligence."
    },
    {
        id: 15,
        topic: "Breach of Implied Warranty of Merchantability",
        fp: "The plaintiff purchased a bottle of dishwashing detergent made by the defendant at a supermarket. After using the product for washing dishes, the plaintiff experienced a serious rash on his hands and wrists as the result of an allergic reaction to a chemical in the product.",
        q: "If the plaintiff asserts a claim against the defendant on the ground that the product was not merchantable, which of the following additional facts or inferences, if it were the only one true, would provide the defendant with its most effective defense?",
        opts: [
            "The plaintiff's allergic reaction was the only such reaction that ever occurred.",
            "The supermarket purchased the product from an independent wholesaler that purchased it from the defendant.",
            "Before marketing the product, the defendant made a reasonable effort to determine whether the product would be harmful to normal skin.",
            "Prior to manufacturing and marketing the product, the defendant received approval for its sale from the federal Food and Drug Administration."
        ],
        ans: 0,
        exp: "The term \"merchantable\" means \"fit for ordinary use.\" Proof that the plaintiff's allergic reaction was the only one that ever occurred indicates that it was an unusual one. If the plaintiff's allergy was unusual enough to be regarded as extraordinary, the product may have been fit for ordinary use (i.e., by ordinary persons) although unfit for use by the plaintiff. While a court might not come to this conclusion, A is the only fact listed that could possibly support the defendant's defense.\n\nMost jurisdictions hold all members of the chain of commercial product distribution liable for a condition of the product that breaches the implied warranty of merchantability. B is therefore incorrect. Although reasonable inspection may have revealed that the product was safe for persons with \"normal\" skin, C is incorrect for two reasons. First, warranty liability does not depend on unreasonable conduct by the defendant, and second, ordinary use may include use by persons with skin that is not normal. D is incorrect because government approval or compliance with government requirements does not prevent common law liability."
    },
    {
        id: 16,
        topic: "Negligence Per Se",
        fp: "A statute required all high-rise construction sites to be surrounded by a temporary fence. The purpose of the statute was to protect people from being hurt by falling construction debris. A construction company failed to fence in one of its sites near an elementary school. One of the schoolchildren wandered onto the site and was poisoned when he drank water from a puddle on the site. The child's injury was severe. The child sued the construction company, and the court found the child would not have been able to get onto the site if the proper fence had been in place. It also found that a reasonable child of the child's age, intelligence, and experience would not have drunk the water from the puddle. The child's attorney then asked the judge to instruct the jury that the violation of the statute was negligence per se.",
        q: "Should the court do so?",
        opts: [
            "Yes, because the child would not have been hurt but for the violation of the statute.",
            "Yes, because the puddle was under the construction company's control.",
            "No, because the child was poisoned.",
            "No, because the child failed to adhere to the proper standard of care."
        ],
        ans: 2,
        exp: "For the violation of a statute to constitute negligence per se, the type of harm that occurred must be the type of harm the statute intended to protect against. Here, the purpose of the statute was to protect people from falling debris, not poisoning, so the construction company's violation of it would not constitute negligence per se in this instance. Therefore, C is correct.\n\nA, B, and D are incorrect because issues of control, but-for causation, or the child's negligence would not change the initial negligence per se analysis."
    },
    {
        id: 17,
        topic: "Negligence / Assumption of Risk",
        fp: "A man invited his friend to ride on the back of his new high-performance motorcycle. The friend hopped on back of the bike and the two raced around the neighborhood. As they were driving, the man decided to try to jump the bike over the neighborhood kids' skateboard ramp. Instead of going up the ramp, the bike crashed straight through the ramp and into a brick wall. Both the man and the friend were killed instantly. The friend's family sued the man's estate for the friend's wrongful death.",
        q: "Should the court rule in the family's favor?",
        opts: [
            "No, because the friend impliedly consented to the crash.",
            "No, because the friend assumed the risk.",
            "Yes, because the man engaged in an abnormally dangerous activity.",
            "Yes, because the man failed to exercise reasonable care."
        ],
        ans: 3,
        exp: "Riding on a motorcycle is not considered an abnormally dangerous activity. Thus, the family could recover under the normal negligence standard of failing to exercise reasonable care.\n\nA is incorrect because agreeing to ride on the motorcycle is not implied consent to the driver trying to take a jump. B is incorrect because the friend did not assume the risk that the man would try to jump the motorcycle simply by agreeing to go on a ride. C is incorrect because riding a motorcycle is not an abnormally dangerous activity."
    },
    {
        id: 18,
        topic: "Comparative Negligence / Collateral Source Rule",
        fp: "The plaintiff was injured in a car accident and received $100,000 worth of damages. The jury further found that the plaintiff's damage was caused 20 percent by the plaintiff's negligence, 40 percent by one defendant's negligence, and 40 percent by another defendant's negligence. The jurisdiction had a statute that read as follows:\n\nIn a negligence action, no plaintiff shall be barred from recovery because of that plaintiff's contributory negligence, but such plaintiff's recovery shall be diminished in proportion to plaintiff's own fault.\n\nThe court held that the defendants were jointly and severally liable for the plaintiff's damage and entered judgment for the plaintiff consistent with the jury's verdict. Prior to the entry of judgment, the plaintiff collected $10,000 from an insurance company under a policy in which it agreed to pay any medical bills that the plaintiff might incur as the result of an automobile accident.",
        q: "Which of the following correctly reflects the sum that the plaintiff is entitled to collect from the defendants?",
        opts: [
            "$90,000, because the plaintiff's damage of $100,000 should be diminished by the sum the plaintiff received from the insurance company.",
            "$80,000, because the plaintiff's damage of $100,000 should be diminished by a sum proportional to the plaintiff's own fault, without regard to sums that the plaintiff has received under the insurance policy.",
            "$70,000, because the plaintiff's damage of $100,000 should be diminished by a sum proportional to the plaintiff's own fault and further diminished by the sum that the plaintiff received under the insurance policy.",
            "$60,000, because the plaintiff's damage of $100,000 should be diminished by a sum proportional to the plaintiff's own fault, and the two defendants' proportional shares should each be further diminished by the sum that the plaintiff received under the insurance policy."
        ],
        ans: 1,
        exp: "Under the given \"pure comparative negligence\" statute, the plaintiff's damage should be diminished by 20 percent, since 20 percent of his injury resulted from his own negligence. Under the collateral source rule, applied in most jurisdictions, money that the plaintiff has received from collateral sources (i.e., those other than tortfeasors) is not relevant to his or her rights against tortfeasors who caused his or her injury. The insurance money that the plaintiff received was from a collateral source and should therefore not play any role in determining the damages.\n\nA, C, and D are therefore incorrect."
    },
    {
        id: 19,
        topic: "Negligence / Proximate Cause",
        fp: "A man was trying to prove he could drive his car with his eyes closed when he ran over his neighbor. The neighbor was rushed to the hospital and into surgery. During surgery, the doctor negligently left behind a scalpel in the neighbor's abdomen. As a result, the neighbor contracted an infection that caused even more injuries. When the neighbor finally got out of the hospital, he sued the man for recovery for all of his injuries.",
        q: "Can the neighbor recover from the man for all of his injuries?",
        opts: [
            "Yes, because it was foreseeable that the doctor would be negligent.",
            "Yes, because the eggshell plaintiff rule would apply.",
            "No, because the doctor leaving his scalpel behind was unforeseeable.",
            "No, because the doctor's negligence was unreasonable."
        ],
        ans: 0,
        exp: "If a person is injured, it is foreseeable that the injury would lead to the need for medical care and that the person giving the medical care might be negligent. Consequently, the man is responsible for all injuries caused by his running over the neighbor, including the doctor negligently leaving the scalpel behind.\n\nB is incorrect because the eggshell plaintiff rule applies when a plaintiff is particularly susceptible to injury. Here, there is no indication that the plaintiff is particularly susceptible. C and D are incorrect because the doctor's negligence is reasonably foreseeable."
    },
    {
        id: 20,
        topic: "Invasion of Privacy / Appropriation",
        fp: "A monthly publication of interest primarily to persons who deal in the purchase and sale of historic buildings as an investment stated that a property had been purchased by the plaintiff for $1,450,000. It described the plaintiff as a bank president earning a salary of $200,000 per year and stated that she had purchased the property with part of the $1 million fortune that she inherited from her mother.\n\nThe plaintiff asserted a claim for invasion of privacy on the ground that the publication appropriated her identity by publishing the article about her without her permission.",
        q: "Which of the following would be the publication's most effective argument in defense?",
        opts: [
            "Information about the purchaser of the property was of interest to readers of the publication.",
            "The article about the plaintiff did not enrich the publication because the plaintiff was not a celebrity.",
            "The sale of the property to the plaintiff was a matter of public record.",
            "Publication of the article was not the result of actual malice."
        ],
        ans: 0,
        exp: "Tortious appropriation of identity is committed by making commercial use of the plaintiff's name, likeness, or identity without his or her permission. It has been repeatedly held, however, that newsworthy publications about the plaintiff do not constitute commercial use and therefore cannot result in liability for this tort. It has also been held that information may be regarded as \"newsworthy\" for this purpose, even though the group to which it is of interest is a limited one.\n\nSince the use of a non-celebrity's identity might be put to commercial gain (e.g., the photograph of an unknown but muscular person in an advertisement for exercise equipment), it is not necessary that the plaintiff be a public figure. Many of the cases imposing liability for this tort have involved plaintiffs who were not celebrities. B is incorrect for this reason and because every article of interest to a publication's readers enriches the publisher by increasing the demand for its product. Although the publication of facts that are contained in public records is protected by the First Amendment, the commercial use of such information is not necessarily protected. For this reason, although C would be an effective defense against a claim of public disclosure, it is not necessarily an effective defense against a claim of appropriation. The United States Supreme Court has indicated that liability for false light privacy invasions cannot be imposed without a showing of actual malice, but no such requirement exists for the tort of appropriation. D is therefore incorrect."
    },
    {
        id: 21,
        topic: "Negligence / Damages",
        fp: "For many years, powdered cement used by a factory was delivered in 90-pound sacks. Recently, however, factory officials determined that it would be considerably less expensive to purchase unbagged cement. A landowner lived in the area. After the factory began using unbagged cement, cement dust from the factory's operation continually settled on the cabin that the landowner occupied. Although the dust did no physical harm to the cabin or to the landowner, the landowner complained to officials of the factory that the dust annoyed her. Because the factory received no other complaints from area residents, however, it continued using unbagged cement.",
        q: "The landowner asserts a negligence claim against the factory. Which of the following would be the factory's most effective argument in defense?",
        opts: [
            "Changing from bagged cement to unbagged cement resulted in substantial financial savings to the factory.",
            "The factory's conduct was not a factual cause of the landowner's discomfort because no other residents complained about the dust.",
            "The landowner assumed the risk by continuing to live in the area.",
            "The landowner sustained no damage as a result of the factory's conduct."
        ],
        ans: 3,
        exp: "Damage is an essential element of a negligence action. There are circumstances under which a plaintiff's mental suffering, although unrelated to physical injury, may be regarded as damage. Mere annoyance, however, is probably not damage sufficient to justify recovery for negligence. While it is not certain that this argument would defeat the claim of the landowner, D is the only argument listed that could possibly lead to a judgment for the factory.\n\nThe reasonableness of a defendant's conduct is ordinarily determined by weighing the risks that it creates against the benefits that it confers. The argument set forth in A is not an effective defense, however, because it considers only the benefit resulting from the use of unbagged concrete without balancing it against the resulting risks. A is therefore incorrect. Conduct is a factual cause of any result that would not have occurred without it. Since the landowner would not have experienced annoyance if the factory had not used unbagged cement, the use of unbagged cement was a factual cause of the landowner's annoyance. B is therefore incorrect. A plaintiff assumes a risk when he or she knows of it and voluntarily encounters it. C is incorrect because there is no indication that the landowner's encounter with the dust was voluntary."
    },
    {
        id: 22,
        topic: "Premises Liability / Duty to Trespassers",
        fp: "A group of drunken college students were having a party when they decided to go down to the football stadium. It was 2 a.m. in the morning, so the stadium was closed and locked. The students ignored the stadium's \"No Trespassing\" sign and ran around on the field. One of the students decided it would be fun to go into the football team locker room. The student ignored a sign that said, \"Danger: Coaches and Players Only\" and went into what he thought was the locker room. Instead, he found himself in a dark room. As he was searching for the light switch, he tripped over a barbell left negligently in the middle of the floor. The student cracked his head open on the floor. The next morning, he was discovered by campus police. The student sued the college for his injuries.",
        q: "Should the court rule in the student's favor?",
        opts: [
            "Yes, because the barbell was left negligently in the middle of the floor.",
            "Yes, because the college owed a duty of care to its students in loco parentis.",
            "No, because the student was a trespasser.",
            "No, because the student ignored the \"Danger: Coaches and Players Only\" sign."
        ],
        ans: 2,
        exp: "The owner of a premises owes no duty of care to unknown trespassers. Here, the student was a trespasser in the closed stadium and there is no indication that the college knew he was there. Consequently, he will not recover for his injury.\n\nA and B are incorrect because the student was an unknown trespasser in the stadium. D is incorrect because the student was an unknown trespasser on the premises. Consequently, the fact he ignored the danger sign does not change the analysis."
    },
    {
        id: 23,
        topic: "Vicarious Liability / Indemnification",
        fp: "An employee was driving a pickup truck owned by the company when he collided with an automobile owned and operated by a driver. The plaintiff, a passenger in the car, sued. At trial, the jury fixed the amount of the plaintiff's damages and found that the employee was 40 percent at fault, the driver was 60 percent at fault, and the plaintiff was not at fault. It was also found that the employee was acting within the scope of his duties as an employee of the company when the accident occurred. In issuing a judgment for the passenger, the court held that the employee and the driver were jointly and severally liable for the passenger's injuries and that the company was vicariously liable for the employee's tort. The jurisdiction had statutes that adopted pure comparative negligence and recognized a right of contribution between joint tortfeasors.\n\nIn enforcing the judgment, the plaintiff succeeded in collecting $100,000 from the company.",
        q: "If the company asserts a claim against the employee seeking compensation for the company's payment to the plaintiff, what is the company is entitled to recover?",
        opts: [
            "Nothing, because the company was found to be vicariously liable for the employee's tort.",
            "$40,000 as partial indemnity.",
            "$50,000 as contribution.",
            "$100,000 as complete indemnity."
        ],
        ans: 3,
        exp: "The doctrine of respondeat superior makes an employer vicariously liable to a plaintiff for torts committed by an employee acting within the scope of employment. But the concept of indemnity may shift the burden of payment from the one who actually did pay to the one who should have paid. Therefore, an employer who has been required to pay for a tort committed by an employee is entitled to complete indemnity (i.e., repayment) from the employee.\n\nThe concept of vicarious liability determines a plaintiff's rights against a tortfeasor's employer, but it does not determine the rights of that employer against its employee. A is therefore incorrect. When parties are found to be jointly and severally liable to a plaintiff, the plaintiff may collect all of his or her damages from any one of them or from all of them in any combination whatsoever. For this reason, one of the joint tortfeasors may be required to pay more than its fair share of the plaintiff's damages. After this happens, most jurisdictions allow the one who has paid to seek partial repayment from the others so that each ends up paying a fair share. The majority of jurisdictions apply the equal apportionment approach, determining fair shares by dividing the amount paid by the number of joint tortfeasors. In these jurisdictions, joint tortfeasors who pay more than their fair share are said to seek \"contribution.\" The employee and employer here are treated as a single unit for this purpose, so the company is not seeking contribution from the employee. B and C are therefore incorrect."
    },
    {
        id: 24,
        topic: "Res Ipsa Loquitur / Falling Objects",
        fp: "A man was walking in front of a hotel when he was hit with a falling television. The man sued the hotel for his injuries under the doctrine of res ipsa loquitur. There was no doubt the television belonged to the hotel.",
        q: "Should the court rule in the man's favor?",
        opts: [
            "Yes, because there was no doubt the television belonged to the hotel.",
            "Yes, because televisions usually don't fall from hotels without someone's negligence.",
            "No, because a guest could have thrown the television from the hotel.",
            "No, because the hotel is not responsible for the negligence of its employees."
        ],
        ans: 2,
        exp: "Res ipsa loquitur allows a jury to infer negligence when the event is of a kind that ordinarily does not occur in the absence of negligence, other responsible causes are sufficiently eliminated, and the indicated negligence is within the scope of the defendant's duty. In cases of falling objects from a hotel (like the famous Larson v. St. Francis Hotel case), a hotel does not have exclusive control over the furniture inside guest rooms because guests have independent control. Because a guest could have thrown the television, the hotel does not have the requisite exclusive control to permit an inference of negligence against it under res ipsa loquitur.\n\nA and B are incorrect because they ignore the exclusive control requirement. Even if the television belonged to the hotel, the hotel was not in exclusive control of it if a guest had access to it. D is an incorrect statement of law; employers are vicariously liable for the negligence of their employees in the scope of employment."
    },
    {
        id: 25,
        topic: "Proximate Cause / Superseding Cause",
        fp: "As a result of a minor earthquake, the framework of a building that the builder was erecting collapsed. When the builder began the building, he knew that the steel that he was using for that purpose was of poor quality but decided to use it anyway. If the steel had not been of poor quality, the earthquake would not have caused the building to collapse.\n\nA driver was employed by a gas company to operate a gasoline truck. She had parked the truck in front of the builder's construction site moments before the earthquake. When the building collapsed, falling debris struck the truck, causing it to rupture and causing its cargo of gasoline to leak. A stream of gasoline that leaked from the truck flowed for three blocks until it reached another nearby street. There, unaware of the presence of gasoline, a man tossed a lit cigarette into the street. The cigarette caused the gasoline to explode, injuring a woman standing nearby.",
        q: "If the woman asserts a claim against the gas company driver, alleging that it was negligent for the driver to park a gasoline truck in front of a construction site, which of the following would be the driver's most effective argument in defense against the woman's claim?",
        opts: [
            "The builder's use of poor-quality steel was a superseding cause of the woman's injury.",
            "The explosion would not have occurred if the man did not throw a lit cigarette into the street.",
            "The driver could not have anticipated that falling debris from the construction site would cause the truck to rupture and leak.",
            "The explosion that injured the woman was proximately caused by the earthquake."
        ],
        ans: 2,
        exp: "For a defendant to be liable in negligence, the defendant's conduct must be the proximate (legal) cause of the plaintiff's harm. This requires that the general type of harm and the sequence of events be reasonably foreseeable. A driver parking a truck in front of a construction site could not reasonably foresee that an earthquake would cause the building to collapse due to poor-quality steel, rupturing the truck, and that the gasoline would flow three blocks and be ignited by a cigarette. Because this bizarre sequence of events was entirely unforeseeable, the driver's conduct was not the proximate cause of the injury.\n\nA, B, and D identify other factual causes in the chain of events, but C provides the best legal argument for the driver: lack of foreseeability defeats proximate cause, relieving the driver of liability."
    }
];