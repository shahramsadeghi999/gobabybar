const examData = [
    {
        id: 1,
        topic: "Strict Products Liability / Retailer Liability",
        fp: "The defendant owned a small hardware store. One of the products he sold were circular saws made by a local manufacturer. The defendant sold the saws in their original boxes. One day, the defendant sold the plaintiff a saw. Two years later, the plaintiff hurt herself badly when the blade detached from the saw and cut her in the face. The blade broke free after delivery to the plaintiff and was due to poor design by the manufacturing company. There was no research available that would have indicated to the defendant that there was a risk of such injury or that the product was badly designed. The plaintiff sued the defendant for her injuries. Assuming the saw design constituted a dangerous defect, should the court find in the plaintiff's favor?",
        q: "Should the court find in the plaintiff's favor?",
        opts: [
            "No, because there was no indication the defendant behaved negligently.",
            "No, because there was no way the defendant could have discovered the risk of such breakage before selling the product to the plaintiff.",
            "Yes, because the defendant sold the saw.",
            "Yes, because selling the defective saws was unreasonable."
        ],
        ans: 2,
        exp: "Strict liability means that the seller of a product is liable without fault for personal injuries or other physical harm caused by the product if the product is sold in a defective condition. Once a defect is found, the seller is liable even if he or she used all possible care. Importantly, strict liability applies not only to the manufacturer, but also to the retailer and any other person in the distribution chain who is in the business of selling such products. Consequently, a retailer is strictly liable for selling the defective product even if the retailer is non-negligent and even if the retailer could not have discovered the defect. Here, since the defendant sold the defective product, he is liable even though he sold the saws without opening the boxes and could not have possibly discovered the defect before the plaintiff was injured. A and B are therefore incorrect.\n\nThere was no indication that selling saws made by the manufacturer was unreasonable. D is therefore incorrect."
    },
    {
        id: 2,
        topic: "Negligence / Duty of Care",
        fp: "A driver was driving her automobile in the rain on a curvy road known for numerous accidents when she rounded a bend and saw a cow standing directly in her path. She immediately jammed on her brakes and pulled the steering wheel to the right in an attempt to avoid striking the cow. As a result, she lost control of her car, which skidded off the road and into the homeowner's yard. The homeowner, who was in the process of installing an automatic watering system, had dug a trench across the yard for pipes. When the wheels of the driver's car hit the trench, the car stopped abruptly, throwing the driver forward into the windshield and causing her to be injured.",
        q: "In an action by the driver against the homeowner for negligence, will a court decide that the homeowner owed the driver a duty of reasonable care?",
        opts: [
            "Yes, because it was foreseeable that persons driving on the road might lose control of their vehicles and skid into the homeowner's yard.",
            "Yes, because the homeowner knew that drivers used the neighboring road.",
            "No, because it was not unreasonable for the homeowner to dig a trench on his own land.",
            "No, because the driver was a trespasser."
        ],
        ans: 0,
        exp: "Holders of land owe a duty of reasonable care to travelers who foreseeably deviate onto the land for reasons related to their use of the adjacent public way. Here, the fact that the road was curvy and known for numerous accidents likely made the driver's accident foreseeable.\n\nB is incorrect because the mere fact that the homeowner knew drivers used the neighboring road is not enough. C is incorrect because although the reason given explains why the homeowner's conduct was not negligent, it fails to explain why he had no duty. Although a landholder generally owes no duty of reasonable care to a trespasser, D is incorrect because a strayed traveler as described above is entitled to reasonable care as an exception to the general rule."
    },
    {
        id: 3,
        topic: "Negligence / Causation",
        fp: "A carpenter who was building a house on his own property had posted a sign that said, \"No Trespassing.\" While he was working, he threw his hammer off the roof. The hammer hit a truck driver who was walking across the property because he mistakenly thought he was supposed to deliver a load of wood to the carpenter. Even though he saw the hammer hit, the carpenter failed to call for help. A passerby called an ambulance, and after the ambulance picked up the truck driver, the ambulance had an accident resulting in the truck driver's death.\n\nThe representative of the truck driver's estate instituted an appropriate action against the carpenter, alleging that the carpenter's failure to call for medical assistance after he saw the hammer strike the truck driver was negligence.",
        q: "Which of the following comments is most accurate regarding that allegation?",
        opts: [
            "The carpenter owed the truck driver no duty to call for help if the truck driver was a trespasser.",
            "The truck driver's estate is entitled to punitive (exemplary) damages if the carpenter was substantially certain that there was a possibility of harm resulting from his failure to act.",
            "The carpenter's failure to call for medical aid was not a factual cause of harm to the truck driver since someone did call a moment later.",
            "The truck driver was an invitee since he was a user of the public street who had entered upon adjacent private land."
        ],
        ans: 2,
        exp: "Conduct is a factual cause of harm if the harm would not have occurred without it. Since medical assistance was summoned just a moment later, and since the facts do not indicate that the truck driver was worse off for the momentary delay, the carpenter's failure to summon aid was not a cause of harm.\n\nMost jurisdictions agree that a landholder owes no duty of reasonable care to a trespasser. When the landholder knows of the trespasser's presence, however, and knows that the trespasser has been imperiled by some affirmative act of the landholder, the landholder does have a duty to act reasonably to protect the trespasser from that act. Since the carpenter knew that his act of throwing the hammer created the need for aid, he probably did owe the truck driver a duty to act reasonably in summoning it. A is therefore incorrect. Punitive damages may be available against a defendant who intended harm by his or her act. Intent requires a substantial certainty that the harm will probably occur, however. Knowledge that harm is possible is not intent and is not sufficient to result in liability for punitive damages. B is therefore incorrect. A user of the public way who enters upon private land foreseeably and in connection with his or her use of the public way is entitled to some measure of reasonable care. D is incorrect, however, because he or she does not thereby become an invitee, and, further, because the truck driver's entry onto the carpenter's realty was not connected with the truck driver's use of the public way."
    },
    {
        id: 4,
        topic: "Public Nuisance",
        fp: "The company had been operating a soap factory in the county for 50 years. When the factory was first opened, the nearest residential settlement was the town, six miles away. Because the factory has been in existence for 50 years, county zoning ordinances were drafted to allow its continued operation. In the past 50 years, however, the town has expanded in size. Now the edge of town is only a quarter of a mile from the company's factory. On days when the wind is blowing from the direction of the factory, residents of the town are annoyed by the noxious odor emanating from the factory chimneys. A homeowner, who moved to the town three years ago, has asked the town attorney to seek an injunction to prohibit the company from emitting foul odors, but the town attorney has refused.",
        q: "If the homeowner sues the company for damages resulting from the odors on a theory of public nuisance, which of the following will be the company's most effective argument in defense?",
        opts: [
            "The company's operation preceded the growth of the town.",
            "The homeowner came to the nuisance.",
            "The homeowner's damages are no different from those of other residents of the town.",
            "A lawful activity cannot constitute a public nuisance."
        ],
        ans: 2,
        exp: "A private individual may sue for public nuisance only if his or her damages were different in kind from those sustained by the general public.\n\nA and B are incorrect because the fact that the defendant's conduct preexisted the plaintiff's presence is not, by itself, a defense to nuisance unless it can be shown that the plaintiff came to the nuisance specifically for the purpose of instituting litigation. D is an incorrect statement of the law; even a lawful activity may constitute a public nuisance if it is conducted in a way that unreasonably interferes with the rights of the public."
    },
    {
        id: 5,
        topic: "Assault / Consent",
        fp: "The defendant and the plaintiff had been friends for years and worked in the same office. Ever since they were children, they had enjoyed playing practical jokes on each other. One day, planning to have some fun with the plaintiff, the defendant bought a large rubber spider from a toy store. Knowing that the plaintiff was terrified of spiders, the defendant came into work early and placed the toy spider in the top drawer of the plaintiff's desk. Later, when the plaintiff arrived at work, he opened his top drawer and saw the rubber spider. Believing it to be real and terrified that it would bite him, the plaintiff screamed in fear, fainted, and fell to the floor. As he fell, he struck his head on the corner of his desk, sustaining a serious fracture of the skull.",
        q: "If the plaintiff asserts a claim for assault against the defendant for the injury that he sustained in the fall, which of the following arguments would be most effective in the defendant's defense?",
        opts: [
            "The plaintiff's fear of being bitten by a spider was not apprehension of a battery.",
            "The reasonable person in the plaintiff's position would not have become apprehensive at the sight of a spider.",
            "The plaintiff impliedly consented to the prank by engaging in a course of practical joking with the defendant.",
            "The defendant was not substantially certain that the plaintiff would be injured as a result of the joke."
        ],
        ans: 2,
        exp: "Consent-the plaintiff's willingness-is a complete defense to most intentional tort actions. Consent is implied if the reasonable person would infer from the plaintiff's conduct and the surrounding circumstances that the plaintiff is willing for the defendant's act to occur. The fact that the defendant and the plaintiff have been enjoying each other's jokes for years could result in the inference that the plaintiff was willing to have a joke played upon him. Although it is not certain that a court would come to this conclusion, the argument in C is the only one listed that could support the defendant's defense.\n\nA is incorrect because assault requires apprehension of harmful contact but not necessarily of battery. Ordinarily, the apprehension experienced by the plaintiff must be such as a reasonable person in his or her shoes would experience. B is incorrect, however, because an exception to this objective standard is made when the plaintiff has a special sensitivity about which the defendant knows, and the defendant knew that the plaintiff was terrified of spiders. D is incorrect because assault requires an intent to cause apprehension, not necessarily an intent to cause injury."
    },
    {
        id: 6,
        topic: "Negligence / Causation",
        fp: "The plaintiff commenced an action against the defendant, and proved the following: The defendant and his friend were both slingshot enthusiasts known for the accuracy of their aim. Without consulting the other, each went independently to the woods outside of town to practice his or her skill. Since not many people frequented the area, the defendant and his friend were both somewhat casual about their targets, each shooting at anything that moved without properly checking to make sure of what they were shooting at. The plaintiff, who had gone to the woods to read in solitude, was struck by a steel ball shot from one of the slingshots. Since the defendant and his friend were using the same kind of ammunition, it is impossible to determine which of them fired the ball that struck the plaintiff, but it is certain that one of them did.",
        q: "If the court finds for the defendant, it will probably be for which one of the following reasons?",
        opts: [
            "The defendant did not owe the plaintiff a duty of reasonable care since not many people frequented the area.",
            "There is no evidence that the defendant acted unreasonably.",
            "The evidence does not establish that the defendant's conduct was a factual cause of the injury.",
            "Even if the defendant's conduct was a factual cause of the injury, it is impossible to tell whether it was a legal cause of the injury."
        ],
        ans: 2,
        exp: "Conduct is a factual cause of harm if the harm would not have occurred without the conduct. Since there is no way of knowing whether the defendant's shot struck the plaintiff, it cannot be established that the plaintiff's harm was factually caused by the defendant's conduct. (Note: Do not confuse these facts with the rule of Summers v. Tice, 199 P.2d 1 (Cal. 1948), where both negligent persons were named as defendants.)\n\nThe defendant's duty of reasonable care might not require the same vigilance that would be required in an urban area, but A is incorrect because the possibility that someone would come by required some vigilance. Since it is likely that a person struck by a pellet shot from a slingshot would be seriously injured, it is probably unreasonable to shoot a slingshot without taking some precaution against hitting other persons. B is therefore incorrect. If the defendant's conduct was a factual cause of the harm, it was a legal cause of the harm if the harm was foreseeable. Since it is clearly foreseeable that a person struck by a slingshot pellet will sustain an injury, D is incorrect."
    },
    {
        id: 7,
        topic: "Negligence / Standard of Care",
        fp: "Statutes in the state provide that persons under the age of 20 years are incompetent to enter into contracts, may not marry without the written consent of their parents, may not lawfully purchase alcoholic beverages, and are subject to local curfew regulations. A 19-year-old girl was fishing for pleasure from a pier in the state when she accidentally struck a fisherman in the eye with a fishhook on the end of her line. The fisherman commenced a negligence action against the girl.",
        q: "Why should the trial court find that the girl was negligent?",
        opts: [
            "She failed to act like a reasonable 19-year-old with her experience and intelligence.",
            "Fishing is an adult activity.",
            "At 19 she is old enough to be treated as an adult by the law of torts.",
            "The risk of injury caused by her use of the fishhook outweighs the utility of fishing for pleasure."
        ],
        ans: 2,
        exp: "Although the law recognizes a special standard for judging the negligence of children, it is applied only when the youth of the defendant is likely to prevent him or her from exercising the same mature judgment as an adult. When a child is old enough to have acquired the judgment of an adult with respect to a particular activity, the child standard no longer applies. It is rare for a court to apply the child standard to persons over the age of 14 years.\n\nA is therefore incorrect. An adult activity is one that is substantially more likely to be dangerous when performed by a child than by an adult, or one in which only adults traditionally engage. B is incorrect because fishing is neither. The balancing test that is sometimes used to determine whether conduct is negligent weighs the risks that foreseeably result from acting a certain way against the utility of acting that particular way. D is incorrect because it distorts that rule by weighing the risk of handling a fishhook in whatever way the girl was handling it against the utility of fishing in general."
    },
    {
        id: 8,
        topic: "Strict Products Liability",
        fp: "A company manufactured several kinds of cooked-fruit desserts.\n\nA man bought one of the company's desserts at a grocery store, opened the package and began eating the contents with a spoon. After consuming more than half of the product, the man noticed parts of a rat's tail mixed with the cooked fruit.",
        q: "If the man asserts a claim against the company on the theory of strict liability in tort, which of the following would be the man's most effective argument?",
        opts: [
            "The presence of a rat's tail was a defect that made the product unreasonably dangerous.",
            "The man was in horizontal privity with the grocery store, and there is no need for vertical privity.",
            "The labeling and packaging implied a promise that the contents of the package purchased by the man were fit for human consumption.",
            "The doctrine of res ipsa loquitur applies, since the product was sold in a sealed package."
        ],
        ans: 0,
        exp: "Strict liability in tort is imposed on the supplier of a product for damages that result from a defect in the product that existed at the time it left that supplier's hands and that made the product unreasonably dangerous. Since a defect is a condition that would defeat the reasonable expectations of the reasonable consumer, and since the reasonable consumer probably does not expect to find a rat's tail in food products, the presence of a rat's tail was probably a defect. Since a product is unreasonably dangerous if the benefits of its condition are outweighed by its disadvantages, and since the presence of a rat's tail has no advantage and is likely to be a source of disease and disgust in a person eating it, the presence of a rat's tail in a food product probably makes that product unreasonably dangerous.\n\nB is incorrect because strict liability in tort may be imposed for the benefit of any plaintiff whose contact with the product was foreseeable, without regard to the existence of a contractual relationship (i.e., privity). Although the sale of a product by a merchant implies a warranty that the product is merchantable (i.e., fit for ordinary use), C is incorrect because the question stem specifies the theory of strict liability in tort, and this theory does not depend on the existence of an implied promise. The doctrine of res ipsa loquitur is applied to establish an inference that the defendant acted unreasonably. Since the reasonableness of the defendant's conduct is not relevant to the imposition of strict liability, D is incorrect."
    },
    {
        id: 9,
        topic: "Negligence / Defenses",
        fp: "A driver swerved to avoid a car and hit a boy walking along the road. The boy's mother had told the boy that she did not want him riding his bicycle on the road because it was a heavily travelled roadway with no sidewalks. She gave him permission, however, to walk his bicycle carefully along the road shoulder.\n\nThe jurisdiction applies the all-or-nothing rule of contributory negligence.",
        q: "If the boy's mother asserts a negligence claim against the driver for the medical bills that she incurred as a result of the boy's injury, which of the following may the driver assert in defense?",
        opts: [
            "The accident resulted from the boy's negligence.",
            "The accident resulted from the boy's mother's negligence.",
            "The accident resulted from both the boy's and his mother's negligence.",
            "The driver cannot claim that either the boy or his mother was negligent."
        ],
        ans: 2,
        exp: "A parent's claim for medical bills incurred as a result of injuries negligently inflicted on a child is a derivative one, subject to any defenses that could have been raised in response to an action by the child. Here, the boy's negligence could be asserted by the driver in response to a claim by the boy. Additionally, since the mother is the plaintiff, her negligence can be asserted by the driver. Consequently, the driver can raise both the boy's and the boy's mother's negligence as a defense."
    },
    {
        id: 10,
        topic: "Negligence Per Se",
        fp: "The defendant was towing a small travel-trailer with his automobile when the hitch that attached the trailer to the car broke, causing the trailer to collide with the vehicle of the plaintiff, which was parked at the curb. A statute in the jurisdiction provides that \"[n]o person shall operate a motor vehicle or trailer on the roads of this state unless said motor vehicle or trailer is covered by a valid policy of liability insurance.\" The defendant was in violation of that statute in that he knew that his trailer was not covered by a valid policy of liability insurance at the time of the accident.",
        q: "Is his violation of statute relevant to the issue of negligence in an action brought against him by the plaintiff?",
        opts: [
            "Yes, because the statute was designed to protect the victims of automobile and trailer accidents.",
            "Yes, because the reasonable person does not knowingly violate a statute.",
            "No, because the law encourages the purchase of automobile insurance and therefore absolutely prohibits disclosure to the jury about whether or not a defendant was insured.",
            "No, because compliance with the statute does not prevent automobile or trailer accidents."
        ],
        ans: 3,
        exp: "Violation of a statute is relevant to the question of negligence only if the statute violated was designed to protect a class of persons to which the plaintiff belongs against risks like the one that resulted in harm to the plaintiff. Since insurance would not have prevented the trailer hitch from failing, the statute was not designed to protect against the risk that it would. Its violation is therefore not relevant.\n\nA is therefore incorrect. B is incorrect because the violation is not relevant unless the statute was designed to protect against the risk involved. Public policy generally prohibits disclosing to a jury that a defendant was or was not insured. Such disclosure is not absolutely prohibited, however, since there are circumstances under which such disclosure could be made to a jury (e.g., to establish ownership of a vehicle). C is thus based on an over-inclusive statement of the law and is therefore incorrect."
    },
    {
        id: 11,
        topic: "Res Ipsa Loquitur",
        fp: "One night, police officers received a message that a burglary was in progress at a grocery store. In the ensuing attempt to make an arrest, the officers knocked over several stacks of merchandise, including cases of bottled soda-pop manufactured by the company. This caused minute cracks in all the bottles. A woman purchased one of the bottles but did not notice the minute crack in it.\n\nThat evening, the woman was placing the bottle on the dinner table when the bottle exploded. The woman was cut by flying glass.",
        q: "In an action by the woman against the company, may she successfully rely on the doctrine of res ipsa loquitur?",
        opts: [
            "Yes, because it applies in exploding bottle cases.",
            "Yes, because the company was in exclusive control of the bottling process.",
            "No, because the bottles were knocked over by the officers.",
            "No, because the bottles were not in the company's possession at the time the woman's injury occurred."
        ],
        ans: 2,
        exp: "An inference of negligence may be established under the doctrine of res ipsa loquitur when the accident was one that would not ordinarily have occurred without negligence, and the circumstances eliminate the probability that the negligence was anyone's but the defendant's. Bottles don't usually explode unless the company that was in exclusive control of the bottling process acted negligently, so res ipsa frequently is applied in exploding bottle cases. But where, as here, some other event was as likely a cause of the explosion, res ipsa cannot be applied.\n\nA and B are therefore incorrect. D is incorrect because the fact that the bottles were not in the defendant's possession when the accident occurred is not in itself sufficient to eliminate the probability that the negligence was anyone's other than the defendant's."
    },
    {
        id: 12,
        topic: "Strict Products Liability",
        fp: "A contractor did some renovations on a customer's apartment. In order to put in a new window, the contractor used a glue made by a local manufacturer. Due to a design defect, the glue released highly toxic fumes that floated into a neighbor's apartment and caused severe lung injuries.",
        q: "How can the neighbor recover?",
        opts: [
            "In strict liability against the contractor.",
            "In strict liability against the manufacturer.",
            "In strict liability against the contractor or manufacturer.",
            "In negligence only."
        ],
        ans: 1,
        exp: "A person who sells services rather than goods does not generally fall within standard strict liability. Consequently, since the contractor was not selling the glue itself, he could not be held strictly liable for its defect. However, the neighbor could recover in strict liability against the manufacturer, because the glue was defective, was sold by the manufacturer, and proximately caused the injury to the neighbor.\n\nA, C, and D are therefore incorrect."
    },
    {
        id: 13,
        topic: "Misrepresentation",
        fp: "One day, while a well-known collector was visiting the dealer's art gallery, the dealer showed him a new painting that she had received that day.\n\n\"The artist didn't sign it,\" the dealer said. \"But I'm sure it was painted by Degas. That would make it worth at least $250,000.\"\n\nThe collector answered, \"It's by Degas, all right. It's worth every cent you're asking. But I already have several paintings by Degas in my collection, and I don't need another.\"\n\nThe buyer, who was browsing in the dealer's gallery, overheard the conversation between the collector and the dealer. The buyer knew very little about art. Because he knew that the collector and the dealer were art experts, he believed what he heard them saying. After the collector left the gallery, the buyer purchased the painting for $225,000. The buyer subsequently learned that it had not been painted by Degas and was worth only $600.",
        q: "If the buyer asserts a tort claim for misrepresentation against the dealer, which of the following would be the dealer's most effective argument in defense?",
        opts: [
            "A statement of opinion cannot be construed as a misrepresentation, since there is no such thing as a false idea.",
            "The buyer did not sustain damage as a result of his reliance on a statement by the dealer.",
            "The dealer did not know that the buyer would rely on the statements that she made to the collector.",
            "The value of any work of art is a matter of opinion."
        ],
        ans: 2,
        exp: "An essential element of tort liability for misrepresentation is the defendant's intent to induce the plaintiff's reliance with his or her statement. If the dealer did not know that the buyer would rely on the statements that she made to the collector, she could not have intended to induce the buyer's reliance on those statements. Since there is no indication that the dealer was aware that the buyer had overheard her conversation with the collector, C is correct.\n\nA is over-inclusive and therefore incorrect. Statements of opinion, especially when made by experts, may be regarded as assertions of fact (i.e., the fact that the speaker actually held that particular opinion). Since the buyer paid $225,000 for something worth only $600 based on his belief in what he had overheard, he did sustain damage as a result of his reliance on a statement by the dealer. B is therefore incorrect. D is incorrect for two reasons. First, as indicated above, an expert may incur misrepresentation liability by stating that he or she holds an opinion that he or she doesn't actually hold. Second, the dealer's statement was not only an evaluation of the painting's value, but also a statement about who had painted it."
    },
    {
        id: 14,
        topic: "Intentional Infliction of Emotional Distress",
        fp: "As a joke, the defendant knocked on the plaintiff's door wearing a police officer's uniform that he had rented from a costume shop. When the plaintiff came to the door, the defendant told her that her husband had just been killed in a highway accident, and that she would have to come with him to claim the body. The plaintiff, who recognized the defendant and knew that he was not a police officer, slammed the door in his face and told him to leave her alone. She was outraged at his attempt to play such a joke on her, but she sustained no physical or mental injury.",
        q: "If the plaintiff asserts a claim against the defendant for intentional infliction of emotional distress, should the court find for the plaintiff?",
        opts: [
            "Yes, because the defendant's conduct exceeded all bounds normally tolerated by decent society.",
            "Yes, because the defendant's conduct was calculated to cause severe mental suffering.",
            "No, because the defendant's intention was merely to play a joke on the plaintiff.",
            "No, because the plaintiff sustained no physical or mental injury as a result of the defendant's conduct."
        ],
        ans: 3,
        exp: "Intentional infliction of emotional distress requires intentional, outrageous conduct that results in severe mental suffering. Since the plaintiff did not experience any mental injury, the defendant is not liable to her for this tort.\n\nConduct is \"outrageous\" if it exceeds all bounds normally tolerated by decent society and is calculated to cause mental suffering. Conduct is \"calculated to cause mental suffering\" if suffering in the mind of a reasonable person is an almost inevitable result. The defendant's conduct probably was both. A and B are incorrect, however, because the plaintiff sustained no mental injury. Outrageous conduct is \"intentional\" if the defendant desired or knew with substantial certainty that it would result in mental suffering in the plaintiff. C is incorrect because the defendant might have had such a desire or knowledge, even though his motive was only to play a joke."
    },
    {
        id: 15,
        topic: "Negligence / Duty of Care",
        fp: "",
        q: "Which of the following most correctly states the duty owed to customers by a druggist who dispenses prescription drugs?",
        opts: [
            "To know all the harmful side effects of the drugs being dispensed.",
            "To warn of all the harmful side effects of the drugs being dispensed.",
            "To sell only those drugs that are not defective.",
            "To make whatever inspection of the drugs is reasonable before dispensing them."
        ],
        ans: 3,
        exp: "A seller of products owes his or her customers the duty to act reasonably. If it would be reasonable to inspect a product before selling it, then the druggist owes his customers a duty of doing so.\n\nA, B, and C are over-inclusive statements. Since some of the harmful side effects or defects associated with a particular drug might be unknown even to the reasonable druggist, a druggist cannot be said to have a duty to know them all. (Note: A druggist who sells a defective drug may be held strictly liable for damages that result. This is because strict liability is not based on fault, however, and does not justify the conclusion set forth in C.)"
    },
    {
        id: 16,
        topic: "Joint Tortfeasors",
        fp: "A plaintiff asserted a claim for damages against a man and his friend. The man and his friend had been trying to see who could hit a golf ball farthest. The plaintiff succeeded in proving that a golf ball that struck him had been driven by one of them, but he was unable to show which one. The court found that both the man and his friend had acted negligently, and that they were involved in a concert of action.",
        q: "Which of the following statements is most correct about the relationship of the parties?",
        opts: [
            "Either the man or his friend may avoid liability by proving that his ball was not the one that struck the plaintiff.",
            "Neither the man's nor his friend's conduct was a factual cause of harm because each one's conduct was a substantial factor in producing the plaintiff's injury.",
            "The man's conduct and his friend's conduct were legal causes of harm, but neither was a factual cause of harm.",
            "The man and his friend may each be held vicariously liable for the other's conduct."
        ],
        ans: 3,
        exp: "Persons engaged in a concert of action are regarded as members of a joint enterprise. As such, they are vicariously liable for torts committed by other members of the enterprise. Thus, the man and his friend may each be held liable for the other's tort.\n\nTo recover against either or both of them, the plaintiff need prove only that his injury was caused by the negligence of some member of the enterprise. A is therefore incorrect. B suggests that one thing cannot be a cause of harm if some other thing is. Since any effect may have more than one cause, B is incorrect. C is incorrect because nothing can be a legal cause of harm unless it was a factual cause of that harm."
    },
    {
        id: 17,
        topic: "Legal Malpractice / Causation",
        fp: "A cancer patient was given a drug that caused her to have an allergic reaction that blinded her in one eye. The patient subsequently retained an attorney to commence a malpractice action against the doctor for the damages that resulted from her allergic reaction. Although the statute of limitations on such an action fixed a period of one year, more than one year passed before the attorney commenced an action against the doctor. As a result, no such action could ever be brought. The patient eventually sued the attorney, alleging that the attorney's failure to bring the action on time was negligent.",
        q: "Which one of the following additional facts or inferences, if it was the only one true, would be most effective as part of the attorney's defense?",
        opts: [
            "The attorney had been admitted to the bar only three weeks before being retained by the patient.",
            "The attorney honestly believed that the statutory period of limitations for the commencement of medical malpractice actions was two years.",
            "After discussing the case with the doctor's attorney, the attorney came to the conclusion that the patient's case against the doctor was weak.",
            "Cancer would have led to the patient's death within a few months if left untreated, and the drug was the only drug available for its treatment."
        ],
        ans: 3,
        exp: "Negligence does not result in liability unless it was a proximate cause of damage. Although the attorney's failure to commence the patient's action against the doctor was probably negligent, no liability will result unless the attorney's negligence was a proximate cause of damage. If the patient would have lost her lawsuit against the doctor anyway, the attorney's failure to institute it did not result in damage since the patient lost nothing as a result. If the doctor's use of the drug did not result in damage to the patient, the doctor would not have been liable to her even if her conduct was negligent. If the drug saved the patient's life at the expense of her eye, it probably did not result in damage, since what the patient gained from its use exceeded what she lost. This means that the patient would have lost her lawsuit against the doctor, and that the attorney's failure to assert it did not result in damage.\n\nA is incorrect because even an inexperienced lawyer is required to act as the reasonable attorney. The attorney's honest belief is no defense unless the reasonable attorney would have held it. B and C are therefore incorrect."
    },
    {
        id: 18,
        topic: "Negligence / Duty of Care",
        fp: "A man was walking his dog along the side of the road even though the road had a sidewalk. As he was walking the dog, a car came speeding up a hill. The driver of the car was looking at his phone and not at what was in the road in front of him. Just as the car got close to the man and his dog, the dog darted into the street to chase a cat. The driver glanced up from his phone, saw the dog, and swerved. The man yanked his dog back to avoid being run over and fell backward into a birdbath in his neighbor's yard. The birdbath was smashed. Because the neighbor and the man lived in the same neighborhood, the neighbor chose to sue the driver for the damage to his birdbath.",
        q: "Does the neighbor have a valid claim against the driver?",
        opts: [
            "No, because the man was the one who smashed the birdbath.",
            "No, because the man was negligent in walking in the street instead of on the sidewalk.",
            "Yes, because the driver was negligent in looking at his phone instead of the road.",
            "Yes, because the driver caused a trespass."
        ],
        ans: 2,
        exp: "The neighbor has a valid claim for negligence against the driver for looking at his phone instead of the road. A driver on a public road owes a duty of reasonable care to foreseeable plaintiffs. Here, the neighbor was a foreseeable plaintiff because he owned property bordering the public road. The driver breached his duty of reasonable care by not looking where he was going, and his breach was the proximate and actual cause of the smashed birdbath because his negligent driving caused the man to fall into it. Consequently, the neighbor has a valid claim against the driver.\n\nA is incorrect because the fact that the man was the one who smashed the birdbath would not free the driver from liability. B is incorrect because the man's negligence would not free the driver from liability for his own negligence. D is incorrect because the driver did not have the intent to force the man into the neighbor's property, and trespass is an intentional tort."
    },
    {
        id: 19,
        topic: "Negligence / Duty to Child Trespassers",
        fp: "A playground was directly adjacent to a company's property, separated from it by a six-foot wire mesh fence. The company officials were aware that a large gaping hole in this fence had existed for approximately one year, and that children frequently crept through the hole to play on the company's property.\n\nOne morning, the plaintiff, a 12-year-old student, entered the company's property through the hole in the fence. The plaintiff began climbing spikes that had been driven into a pole. When she reached a wooden platform located 12 feet aboveground, she put her head through the hole in its center to see what was above it. Her head came into contact with a high-voltage wire that had been strung over the platform, causing her to sustain serious injuries.",
        q: "In a negligence action by the plaintiff against the company, which one of the following additional facts or inferences, if it were the only one true, would provide the company with its most effective argument in defense?",
        opts: [
            "The plaintiff entered the premises without the company's permission.",
            "To the company's knowledge, no child had ever before attempted to climb the pole.",
            "The plaintiff was old enough to comprehend the dangers associated with an attempt to climb the pole.",
            "The fence that separated the company's property from the schoolyard was located completely on realty occupied by the school."
        ],
        ans: 2,
        exp: "Since the plaintiff entered without the company's permission, she was a trespasser. Ordinarily, a landholder owes trespassers, even if they are children, no duty of reasonable care with respect to dangerous conditions of the premises. A trespassing child may be entitled to reasonable care, however, if it was foreseeable that children would trespass, it was foreseeable that a child who trespassed would be injured, and if the child was too young to comprehend the danger. Thus, if the plaintiff was old enough to comprehend the danger associated with an attempt to climb the pole, the company owed no duty of reasonable care to protect her against it. Although a minority of jurisdictions holds that a landholder owes a duty of reasonable care to all who enter, C is correct because it is the only argument listed that could provide the company with an effective defense in any jurisdiction.\n\nA is incorrect because under the rule stated above, a duty of reasonable care may be owed to a trespassing child. The fact that no child had ever before attempted to climb the pole would not prevent the rule from being applied if it was foreseeable that a child would do so in the future. B is therefore incorrect. D is incorrect because even if the company could not repair the fence, there may have been other steps that the reasonable person in the company's position would have taken to prevent the danger that resulted in the plaintiff's injury."
    },
    {
        id: 20,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "Several cases of explosives made by a company were shipped to a buyer in another state to be stored in a warehouse pending delivery. While the explosives were there, the warehouse facility was struck by lightning, causing the explosives to explode. The cases containing the explosives did not bear any description of their contents. If the warehouse employees knew that the cases contained explosives, they would have stored them in a way that would have prevented the explosion. A homeowner who sustained property damage as a result of the explosion has asserted a claim against the company.",
        q: "Which of the following facts or inferences, if it were the only one true, would provide the company with its most effective argument in defense?",
        opts: [
            "The company did not do anything unreasonable or irresponsible in manufacturing, packaging, or labeling its product.",
            "When the company shipped the cases of explosives, they had been properly labeled with firmly affixed labels identifying their contents, but the labels had somehow come off in transit.",
            "The company had assigned an employee to make sure that all cases of explosives shipped by the company were properly labeled, but the employee had forgotten to inspect this shipment.",
            "The storage of explosives by the warehouse was an ultra-hazardous activity."
        ],
        ans: 1,
        exp: "The homeowner's lawsuit may be founded either on negligence or upon strict products liability. Negligence involves unreasonable conduct. If the explosives were properly labeled, the company's conduct was not unreasonable. Strict liability is imposed only if the product that caused harm left the defendant in a defective condition. A product may be defective because of the way in which it is labeled, but if the labels were properly affixed when the cases left the company's plant, the product was not defective at the time it left the company's hands.\n\nA is incorrect because strict liability may be imposed even though the defendant acted reasonably. C is incorrect because the negligence of a company employee would be imputed to the company. Although the storage of explosives is usually regarded as an ultra-hazardous activity, resulting in the imposition of strict liability upon one storing it, D would not furnish the company with a defense since the imposition of liability on the warehouse would not prevent liability from being imposed on the company."
    },
    {
        id: 21,
        topic: "Private Nuisance",
        fp: "A restaurant opened on the edge of a college bar area, which abutted a residential neighborhood. The restaurant had a walk-up window where people could purchase food and drinks without going inside. The restaurant and window were open until 4 A.M. every night. College students soon started to congregate in front of the restaurant. On many nights, the students were loud, and some even engaged in the use of illegal drugs or drank alcohol underage. The plaintiff, who lived in a house next to the new restaurant, complained and told the restaurant it was bringing down his property value. He demanded that the restaurant close at 11 P.M., like many other restaurants in the area. The restaurant refused.",
        q: "If the plaintiff chooses to sue, which of the following legal theories would be most likely to result in a judgment for the plaintiff?",
        opts: [
            "Intentional infliction of emotional distress.",
            "Invasion of privacy.",
            "Trespass to land.",
            "Private nuisance."
        ],
        ans: 3,
        exp: "A private nuisance is liability-forming conduct by the defendant that unreasonably interferes with the plaintiff's right to use and enjoy his or her property. Liability is formed if the defendant intends to invade the plaintiff's rights. After speaking with the plaintiff, the defendant now intends his invasion because he is now acting with either desire or substantial certainty that the interfering conduct will occur. Consequently, if the interference is unreasonable, the defendant is liable. This is the only theory listed that could result in a judgment for the plaintiff.\n\nA is incorrect because the theory requires some physical intrusion into the plaintiff's presence, and there is no indication the restaurant or the college kids are doing so. B is incorrect because the plaintiff is not complaining of or seeking damages for severe mental suffering. C is incorrect because trespass requires tangible entry onto the plaintiff's land, and none has occurred."
    },
    {
        id: 22,
        topic: "Invasion of Privacy / Appropriation",
        fp: "During a comedian's long career in the entertainment business, the comedian's trademark was always a cigar that he clenched between his teeth or held in his hand while delivering his jokes. As part of an interview on a television show, the interviewer asked the comedian whether he really smoked cigars. The comedian replied, \"Sure. I always smoke these cigars. They're the best cigars made.\"\n\nThe following day, the manufacturer of the cigars placed several advertisements in newspapers. All the advertisements said, \"Jimmy Stoker the Famous Comedian says our cigars are the best cigars made. He always smokes them, and you should too.\"",
        q: "If the comedian asserts a claim against the cigar company for invasion of privacy by misappropriation of identity, should the court find for the comedian?",
        opts: [
            "No, because the comedian had in fact made the statement that appeared in the advertisement.",
            "No, because the advertisement constituted a constitutionally protected form of commercial expression.",
            "Yes, because when the comedian made the statement on the television show, it was unforeseeable that the cigar company would use it in its advertising.",
            "Yes, because the cigar company used his name to sell its product without his permission."
        ],
        ans: 3,
        exp: "Misappropriation of identity is an invasion of privacy that consists of the unauthorized use of the plaintiff's identity for a commercial purpose. Since the cigar company used the comedian's name without his permission for the purpose of selling its product, it has committed this tort against the comedian.\n\nAlthough the truth of the statement made in the advertisements might justify its publication for some purposes, its use for a commercial purpose is not privileged. A is therefore incorrect. Although the protection of the First Amendment to the United States Constitution has been extended to commercial expression, it has not been extended to the unauthorized use of another's identity for a commercial purpose. B is therefore incorrect. C is incorrect because liability for misappropriation of identity does not depend on the foreseeability of the defendant's conduct."
    },
    {
        id: 23,
        topic: "Negligence / Duty of Care",
        fp: "The defendant grew fruit trees on her farm outside the village. In addition, she operated a fruit store in the village. Every day during the harvest season, in a trailer that she towed with her pickup truck, she hauled fresh fruit from her orchards to her store. One day, as she was towing the trailer filled with fruit up a hill on her way to the village, the hitch that fastened the trailer to the pickup truck failed, permitting the trailer to break loose and roll down the hill, striking and damaging the home of the plaintiff. Subsequent investigation revealed that the hitch failed because one of its parts was made of defective steel.",
        q: "If the plaintiff asserts a claim against the defendant for damage to his house, what is the court's decision most likely to turn on?",
        opts: [
            "Whether the defendant acted reasonably.",
            "Whether the hitch was defective in manufacture or in design.",
            "Whether the defendant was a merchant.",
            "Whether the plaintiff could have foreseen the damage."
        ],
        ans: 0,
        exp: "Tort liability may be imposed only for harm that resulted from intent, negligence, or any activity for which strict liability may be imposed. Since there is no indication that the defendant intended the harm, and since her activity was not an abnormally dangerous one, the only theory available to the plaintiff is negligence. Negligence is a breach of the duty of reasonable care. The duty exists if the defendant's conduct creates a foreseeable risk to the plaintiff. Since the operation of a motor vehicle on a roadway creates foreseeable risks to persons owning property along the roadway, the operator of a vehicle owes a duty of reasonable care to such persons. The question of whether the defendant breached that duty depends on whether the defendant acted reasonably.\n\nA professional seller of products (i.e., a merchant) may be held liable for damage resulting from a defect in a product that he or she supplied on theories of strict liability in tort or breach of the implied warranty of merchantability. Since the defendant did not supply the trailer, however, neither of these theories can be applied to her. Thus, the questions of whether the hitch was defective or whether the defendant was a merchant are not relevant. B and C are therefore incorrect. Although negligence liability is often made to depend on whether the reasonable person in the position of the defendant would have foreseen the harm, D is incorrect because it is never necessary that the harm be foreseeable to the plaintiff."
    },
    {
        id: 24,
        topic: "Trespass to Land",
        fp: "The pilot was a helicopter pilot employed by a radio station as a traffic reporter. One day, while flying in his helicopter, he hovered over the home of a woman. Using powerful binoculars, he looked into her window to watch her while she was exercising in the nude.",
        q: "If the woman institutes an action against him, which of the following facts or inferences must she establish to make out a prima facie case of trespass to land?",
        opts: [
            "The altitude at which the pilot hovered over her house.",
            "Damage to her land, or to her right to enjoy it, that resulted from the pilot's conduct.",
            "That she had a reasonable expectation of privacy while exercising nude in her own home.",
            "That she was in lawful possession of the premises at the time that the pilot hovered over her house."
        ],
        ans: 0,
        exp: "The old rule that \"he or she who holds the land holds upward unto heaven\" is no longer true. All jurisdictions agree that a flight over land is a trespass to the land only if it was below a certain altitude (although they frequently disagree about what that altitude is). Thus, unless the woman can prove the altitude at which the pilot hovered, she cannot establish a trespass.\n\nB is incorrect because damage is not an essential element of an action for trespass to land. C is incorrect since an action for trespass is not one for invasion of privacy, but rather for invasion of the right to exclusive possession of realty. D is incorrect because even one whose possession is unlawful may sue for trespass."
    },
    {
        id: 25,
        topic: "Defense of Property",
        fp: "When a woman discovered that her car had been stolen, she reported the theft to the police. Then, while she was walking home from the police station, she saw her car in a homeowner's driveway, where the person who stole it had abandoned it after using it in a bank robbery. When she began walking toward the automobile, the homeowner ran out of his house shouting, \"Hey, you! Where do you think you're going?\" The woman explained that she was attempting to retrieve her car, but the homeowner pushed her, saying, \"Get off my land.\" The woman, who sustained no physical or mental injury as a result of the homeowner's contact with her, got into her car and drove it away. The woman subsequently commenced a battery action against the homeowner.",
        q: "If, in response to the woman's claim, the homeowner asserts the privilege to defend realty, should the court find for the homeowner?",
        opts: [
            "Yes, because the woman was not in hot pursuit of her car when she entered the homeowner's realty.",
            "Yes, because the woman was not injured as a result of the homeowner's contact with her.",
            "No, because force is never permitted in defense of realty.",
            "No, because the woman was privileged to enter and retake her automobile."
        ],
        ans: 3,
        exp: "A person entitled to possess a chattel who enters the realty of another for the purpose of recovering that chattel is privileged to make such entry, provided that he or she does so in a reasonable manner (and provided further that the chattel did not get onto the realty through any fault of his or her own). The woman's entry onto the homeowner's realty was therefore privileged. Since the woman's entry was privileged, the homeowner was not entitled to use force against her to defend his realty, and his use of such force constituted a battery.\n\nA privilege to use force against the wrongful dispossessor of a chattel exists only when that force is used in hot pursuit of the dispossessor. A is incorrect, however, because hot pursuit is not a prerequisite to the privilege to enter realty to recover a chattel. B is incorrect because injury is not an essential element of battery. C is incorrect because a possessor of realty is privileged to use reasonable force to prevent a trespass to that realty."
    }
];