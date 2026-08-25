const examData = [
    {
        id: 1,
        topic: "Trespass to Land",
        fp: "A car driven by Dan entered land owned by and in the possession of Peter, without Peter's permission.",
        q: "Which, if any, of the following allegations, without additional facts, would provide a sufficient basis for a claim by Peter against Dan?\n\nI. Dan intentionally drove his car onto Peter's land.\nII. Dan negligently drove his car onto Peter's land\nIII. Dan's car damaged Peter's land.",
        opts: [
            "I only.",
            "III only.",
            "I, II, or III.",
            "Neither I, nor II, nor III."
        ],
        ans: 0,
        exp: "Choice (A) is correct, because it recognizes that only Choice I contains an allegation which by itself would provide the plaintiff with a sufficient basis for relief.\n\nI. A trespass to land can occur when the defendant enters the plaintiff's land, or causes another person or an object to enter the plaintiff's land. If a defendant intentionally drives his car onto plaintiff's land, he has committed a trespass, and the plaintiff is entitled to nominal damages regardless of whether any harm has occurred. Rest. 2d §163. This answer choice contains an allegation that would provide the plaintiff with a sufficient basis for relief.\n\nII. If the plaintiff relies on a negligence theory in a trespass case, he must prove not only that the defendant was in fact negligent, but also that he (the plaintiff) suffered actual damages. Rest. 2d § 165. The facts do not indicate that the plaintiff suffered any harm; therefore, this answer choice does not contain an allegation that would provide the plaintiff with a sufficient basis for relief.\n\nIII. To be liable for trespass, entry on another's land must be intentional, negligent, or pursuant to the carrying out of an \"abnormally dangerous activity.\" Rest. 2d § 166. Although the facts do indicate that Dan's car damaged Peter's land, he would not be liable for trespass unless one of those three conditions applied. Therefore, the allegation by itself would not provide the plaintiff with a sufficient basis for relief."
    },
    {
        id: 2,
        topic: "Trespass to Land / Effect of Mistake",
        fp: "David built in his backyard a garage that encroached two feet across the property line onto property owned by his neighbor, Prudence. Thereafter, David sold his property to Drake. Prudence was unaware, prior to David's sale to Drake, of the encroachment of the garage onto her property. When she thereafter learned of the encroachment, she sued David for damages for trespass.",
        q: "In this action, will Prudence prevail?",
        opts: [
            "No, unless David was aware of the encroachment when the garage was built.",
            "No, because David no longer owns or possesses the garage.",
            "Yes, because David knew where the garage was located, whether or not he knew where the property line was.",
            "Yes, unless Drake was aware of the encroachment when he purchased the property."
        ],
        ans: 2,
        exp: "Choice (C) is correct. A trespass to land can occur when the defendant enters the plaintiff's land, or causes another person or an object to enter the plaintiff's land. A \"continuing trespass\" is one where the object stays on the land. If a defendant intentionally enters onto the plaintiff's land, the plaintiff is entitled to nominal damages regardless of whether any harm has occurred. David built the garage, so his intentional actions caused an object to enter onto Prudence's land and constituted a continuing trespass. The fact that he may not have known where the property line was and so was unaware of the encroachment is irrelevant.\n\n(A) is wrong because it implies that there is no liability for trespass if a defendant enters onto the land and is unaware that he is trespassing. If the defendant enters onto the plaintiff's land thinking that it is his own, or thinking erroneously that he is entitled to be there, he has still committed an intentional trespass.\n\n(B) is wrong because David committed the tort and is liable for it regardless of whether or not he has current ownership of the trespassing object.\n\n(D) is wrong because David committed an act that constituted trespass and he is liable for it. That's true even if the new owner knew of the encroachment-once David built the encroaching structure he had committed trespass (which was an ongoing tort as long as he owned the structure), and nothing that happened at or after the time of sale by David could retroactively change this fact."
    },
    {
        id: 3,
        topic: "Conversion / Damages",
        fp: "Dower, an inexperienced driver, borrowed a car from Puder, a casual acquaintance, for the express purpose of driving it several blocks to the local drug store. Instead, Dower drove the car, which then was worth $12,000, 100 miles to Other City. While Dower was driving in Other City the next day, the car was hit by a negligently driven truck and sustained damage that will cost $3,000 to repair. If repaired, the car will be fully restored to its former condition.",
        q: "If Puder asserts a claim against Dower based on conversion, Puder should recover a judgment for",
        opts: [
            "$12,000.",
            "$3,000.",
            "$3,000 plus damages for the loss of the use of the car during its repair.",
            "nothing, unless Dower was negligent and his negligence was a substantial cause of the collision."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Conversion occurs when the defendant so substantially interferes with the plaintiff's possession or ownership of property that it is fair to require the defendant to pay the property's full value. Rest. 2d § 222A. One must consider the extent and duration of the defendant's exercise of control over the object, the defendant's good faith, the harm done to the property, and the inconvenience and expense caused to the plaintiff. The defendant had permission to drive the plaintiff's car several blocks and instead drove 100 miles to Other City and continued to drive it in Other City the following day. There does not appear to be any good faith exhibited by the defendant. The car sustained $3,000 in damages (1/4 of its total value). Considering these facts, it is fair to require that the defendant pay the full value of the car as damages for conversion.\n\n(B) and (C) are wrong because they incorrectly assert that plaintiff's recovery would provide only for repair of the car and loss of use of the car (as in a claim of trespass to chattels). The suit here is for conversion, and in conversion plaintiff recovers the full value of the item (viewed as of the moment before the taking).\n\n(D) is wrong because in a claim of conversion, the issue of who was at fault in damaging the plaintiff's property (once the defendant committed a substantial interference with it) is irrelevant. In other words, if the car was the subject of conversion, then the defendant is responsible to pay for its full value regardless of whether it was physically damaged (or by whom)."
    },
    {
        id: 4,
        topic: "Self-Defense",
        fp: "In a plaintiff's action for battery, the evidence established that the plaintiff was bad-tempered and, the defendant knew, carried a gun and used it often; that the plaintiff struck the defendant first; that during the altercation, the plaintiff repeatedly tried to get to his gun; and that the blows inflicted upon the plaintiff by the defendant resulted in the plaintiff being hospitalized.",
        q: "Which finding of fact would be most likely to result in a verdict for the defendant?",
        opts: [
            "The defendant used no more force than he actually believed was necessary to protect himself against death or serious bodily harm.",
            "The defendant used no more force than he reasonably believed was necessary to protect himself against death or serious bodily harm.",
            "The defendant, in fact, feared death or serious bodily harm.",
            "The defendant was justified in retaliating against the plaintiff because the plaintiff struck the first blow."
        ],
        ans: 1,
        exp: "Choice (B) is correct. The facts show that the plaintiff hit the defendant and the defendant hit him back. So the defendant committed a battery, but he may be privileged because he was acting in self-defense. The question is whether the force used by the defendant was justified. Choice (B) states the test correctly: The defendant is not liable if he \"used no more force than he reasonably believed was necessary to protect himself against death or serious bodily harm.\" The most important point about this answer is the word \"reasonably.\" Claims of self-defense are not judged by asking whether the defendant thought he was using necessary force. The test is whether the amount of force was reasonable under the circumstances. Only then does the defendant get the benefit of the self-defense privilege. See Rest. 2d § 63 and Comment i.\n\n(A) is wrong because it focuses on whether the defendant \"actually\" believed that the force he used was necessary. As explained in the discussion of Choice (B) above, the legal test is not whether the defendant acted in good faith, or according to \"actual\" beliefs. The legal test is whether he acted reasonably-and reasonableness is judged by the trier of fact, not by the defendant. If the defendant did not act reasonably, he loses the privilege no matter how strongly he believed that the force he used was necessary.\n\n(C) is wrong because, like Choice (A), it focuses on what was going through the defendant's mind-on whether he \"in fact\" feared death or serious bodily harm. But an authentic fear of death is not enough to support the self-defense privilege. The force used by the defendant must be reasonable under the circumstances. The reasonableness of the force used by the defendant is an objective judgment made by the trier of fact.\n\n(D) is wrong because being hit first does not necessarily entitle the defendant to respond with force. First, note the suggestion in this choice that the defendant was \"retaliating.\" The privilege of self-defense does not create a right to \"retaliate\" or \"get even.\" It is strictly a privilege to protect oneself against present or future attack. In this case the facts obviously do suggest that the defendant faced an ongoing threat. But in that case the outcome depends on the reasonableness of the defendant's use of force in reply to that threat-it does not depend on the fact that the plaintiff hit him first."
    },
    {
        id: 5,
        topic: "Self-Defense / Injury to Third Person",
        fp: "In the course of a bank holdup, Robber fired a gun at Guard. Guard drew his revolver and returned the fire. One of the bullets fired by Guard ricocheted, striking Plaintiff.",
        q: "If Plaintiff asserts a claim against Guard based upon battery, will Plaintiff prevail?",
        opts: [
            "Yes, unless Plaintiff was Robber's accomplice.",
            "Yes, under the doctrine of transferred intent.",
            "No, if Guard fired reasonably in his own defense.",
            "No, if Guard did not intend to shoot Plaintiff."
        ],
        ans: 2,
        exp: "Choice (C) is correct. In a situation where the defendant is entitled to use reasonable force in his self-defense, and does so, the fact that he injures an innocent bystander does not prevent the use of force from being privileged (as long as the defendant did not act negligently in choosing to shoot, and in how he shot). That's what this choice says.\n\n(A) is wrong because Plaintiff will not prevail if the defendant's actions were privileged, which they would be if the defense of self-defense applied. And that's true regardless of whether Plaintiff was Robber's accomplice or was instead an innocent bystander.\n\n(B) is wrong because Guard's actions may have been privileged, and if so, he will not be liable for battery despite application of the transferred intent doctrine. The doctrine of transferred intent provides that as long as the defendant held the necessary intent with respect to one person, he will be held to have committed an intentional tort against any other person who he happens to injure... However, if Guard was acting in self-defense, his actions were privileged, in which case Plaintiff would not prevail.\n\n(D) is wrong because it cites a fact that will not be dispositive. According to the transferred intent doctrine... Guard could be held liable for battery of Plaintiff even if he didn't intend to shoot Plaintiff, as long as he had the requisite intent to shoot Robber. (Instead, the outcome will depend on whether Guard qualifies for the defense of self-defense.)"
    },
    {
        id: 6,
        topic: "Defense of Others",
        fp: "A pedestrian was crossing a street at a crosswalk. A jogger who was on the sidewalk nearby saw a speeding automobile heading in the pedestrian's direction. The jogger ran into the street and pushed the pedestrian out of the path of the car. The pedestrian fell to the ground and broke her leg.",
        q: "In an action for battery brought by the pedestrian against the jogger, will the pedestrian prevail?",
        opts: [
            "Yes, because the jogger could have shouted a warning instead of pushing the pedestrian out of the way.",
            "Yes, if the pedestrian was not actually in danger and the jogger should have realized it.",
            "No, because the driver of the car was responsible for the pedestrian's injury.",
            "No, if the jogger's intent was to save the pedestrian, not to harm her."
        ],
        ans: 1,
        exp: "Choice (B) is correct, because the defense of \"defense of others\" would be negated if the jogger's belief about the danger was unreasonable. Since the jogger has intentionally caused a harmful or offensive contact with another, he's liable for battery unless he has a defense. The only defense that plausibly applies here is \"defense of others.\" That is, just as a person has the right to use self-defense to save himself from harm, he has that right with respect to another person who is threatened with harm (even a stranger, under the modern view).\n\nHowever, the defense-of-others defense, like the right of self-defense, requires that both the actor's belief that danger exists, and his belief that the proposed conduct is a good way to deal with the danger, be reasonable. If the jogger should have realized that the pedestrian was not in fact in danger, this requirement for the defense-of-others defense would not exist.\n\n(A) is wrong because the fact that an alternative method of dealing with the danger might have solved the problem does not automatically mean that the jogger's method was unreasonable.\n\n(C) is wrong because the jogger might be jointly and severally liable with the driver. The speeding driver would clearly be a cause of the injury, and would therefore likely be jointly and severally liable with the jogger if the jogger was liable. But this fact wouldn't save the jogger from liability, if the jogger's choice of methods (or his belief in the danger) were unreasonable.\n\n(D) is wrong because the jogger's intent to save the pedestrian wouldn't immunize him if his belief in the danger was unreasonable."
    },
    {
        id: 7,
        topic: "Private Necessity",
        fp: "A boater, caught in a sudden storm and reasonably fearing that her boat would capsize, drove the boat up to a pier, exited the boat, and tied the boat to the pier. The pier was clearly marked with \"NO TRESPASSING\" signs. The owner of the pier ran up to the boater and told her that the boat could not remain tied to the pier. The boater offered to pay the owner for the use of the pier. Regardless, over the boater's protest, the owner untied the boat and pushed it away from the pier. The boat was lost at sea.",
        q: "Is the boater likely to prevail in an action against the owner to recover the value of the boat?",
        opts: [
            "No, because the owner told the boater that she could not tie the boat to the pier.",
            "No, because there was a possibility that the boat would not be damaged by the storm.",
            "Yes, because the boater offered to pay the owner for the use of the pier.",
            "Yes, because the boater was privileged to enter the owner's property to save her boat."
        ],
        ans: 3,
        exp: "Choice (D) is correct. The boater was privileged to trespass on the owner's property under the doctrine of private necessity, because the boater's property was at risk. Because the boater's intrusion onto the pier was privileged, the owner had no right to exclude her or her boat from the pier. When the owner untied the boat, he committed an unprivileged trespass upon the boater's property, so the owner must pay for the loss of the boat.\n\n(A) is wrong because what the owner told the boater is irrelevant. As discussed in Choice (D) above, because the boater's property was at risk, the boater was privileged to trespass on the owner's property under the doctrine of private necessity.\n\n(B) is wrong because it cites an irrelevant factor. In order to establish that privilege, the boater need not establish that harm to the boat was inevitable, but only that her actions were reasonable given the circumstances.\n\n(C) is wrong because it cites the wrong reason for the correct result. The boater is likely to prevail, but that's because, under the doctrine of private necessity, the boater was privileged to trespass... And this privilege of private necessity applies whether or not the boater offered to pay the owner, making the payment offer cited in this choice irrelevant."
    },
    {
        id: 8,
        topic: "Negligence / Standard of Care for Children",
        fp: "Dora, who was eight years old, went to the grocery store with her mother. Dora pushed the grocery cart while her mother put items into it. Dora's mother remained near Dora at all times. Peterson, another customer in the store, noticed Dora pushing the cart in a manner that caused Peterson no concern. A short time later, the cart Dora was pushing struck Peterson in the knee, inflicting serious injury.",
        q: "If Peterson brings an action, based on negligence, against Dora, Dora's best argument in defense would be that",
        opts: [
            "Dora exercised care commensurate with her age, intelligence, and experience.",
            "Dora is not subject to tort liability.",
            "Dora was subject to parental supervision.",
            "Peterson assumed the risk that Dora might hit Peterson with the cart."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Children are not held to the level of care which would be exercised by a reasonable adult. A child must merely conform to the conduct of a \"reasonably careful person of the same age, intelligence, and experience.\" Rest. 3d (Liab. For Phys. Harm), § 10(a).\n\n(B) is wrong because children are subject to liability for intentional torts and also for negligence. Dora is eight years old-capable of negligence, and subject to liability using the \"reasonable person\" standard discussed in (A).\n\n(C) is wrong because a parent's duty to supervise her child is separate from the duty of the child to not cause intentional or negligent harm to others. The fact that Dora was supervised (or should have been supervised) would not relieve her of tort liability for her actions.\n\n(D) is wrong because the assumption-of-risk doctrine would not apply in this context. A grocery store is not a dangerous place where one expects to get struck in the knee and suffer serious injury. Nor was Peterson alerted to a possible danger, because Dora was not pushing the cart in a manner that caused her concern."
    },
    {
        id: 9,
        topic: "Negligence / Inadequate Parental Supervision",
        fp: "An eight-year-old girl went to the grocery store with her mother. The girl pushed the grocery cart while her mother put items into it. The girl's mother remained near the girl at all times. The plaintiff, another customer in the store, noticed the girl pushing the cart in a manner that caused the plaintiff no concern. A short time later, the cart the girl was pushing struck the plaintiff in the knee, inflicting serious injury.",
        q: "If the plaintiff brings an action, based on negligence, against the girl's mother, will the plaintiff prevail?",
        opts: [
            "Yes, if the girl was negligent.",
            "Yes, because the girl's mother is responsible for any harm caused by the girl.",
            "Yes, because the girl's mother assumed the risk of her child's actions.",
            "Yes, if the girl's mother did not adequately supervise the girl's actions."
        ],
        ans: 3,
        exp: "Choice (D) is correct. The issue is whether and when a parent has a duty to supervise a child. The Restatement says: \"A parent is under a duty to exercise reasonable care so as to control his minor child as to prevent it from intentionally harming others or from so conducting itself as to create an unreasonable risk of bodily harm to them, if the parent (a) knows or has reason to know that he has the ability to control his child, and (b) knows or should know of the necessity and opportunity for exercising such control.\" Rest. 2d § 316. Since the girl's mother was with her when she was pushing the cart in the supermarket the mother had the duty to control the girl's actions if they caused an unreasonable risk of harm to others.\n\n(A) is wrong because the parent's duty is independent and is not affected by the fact that the child is or is not subject to liability for her own actions. So even if the child was negligent, the mother wouldn't be liable as long as the mother didn't fail to make reasonable supervision of the child.\n\n(B) is wrong because it is too broad a statement. And a parent has no vicarious liability for her child's torts, whether that tort consists of negligence or an intentional tort.\n\n(C) is wrong because it misapplies the assumption-of-risk concept. Assumption of risk applies when a plaintiff has voluntarily consented to take her chances that harm will occur."
    },
    {
        id: 10,
        topic: "Negligence / Anticipating Criminal Acts",
        fp: "A construction company was digging a trench for a new sewer line in a street in a high-crime neighborhood. During the course of the construction, there had been many thefts of tools and equipment from the construction area. One night, the construction company's employees neglected to place warning lights around the trench. A delivery truck drove into the trench and broke an axle. While the delivery driver was looking for a telephone to summon a tow truck, thieves broke into the delivery truck and stole $350,000 worth of goods. The delivery company sued the construction company to recover for the $350,000 loss and for $1,500 worth of damage to its truck. The construction company stipulated that it was negligent in failing to place warning lights around the trench, and admits liability for damage to the truck, but denies liability for the loss of the goods.",
        q: "On cross-motions for summary judgment, how should the court rule?",
        opts: [
            "Deny both motions, because there is evidence to support a finding that the construction company should have realized that its negligence could create an opportunity for a third party to commit a crime.",
            "Grant the construction company's motion, because no one could have foreseen that the failure to place warning lights could result in the loss of a cargo of valuable goods.",
            "Grant the construction company's motion, because the criminal acts of third persons were a superseding cause of the loss.",
            "Grant the delivery company's motion, because but for the construction company's actions, the goods would not have been stolen."
        ],
        ans: 0,
        exp: "Choice (A) is correct, because this response recognizes the exception for when a negligent tortfeasor may be liable for the criminal acts of a third party. When a tortfeasor should have realized the likelihood of the crime at the time of his negligence, he may be liable for the criminal acts of a third party. The issue of foreseeability is generally a question for the jury, so we must look closely at the facts of this question. Here, we are informed that this was a \"high-crime neighborhood\" and \"there had been many thefts of tools and equipment from the construction area.\" Thus, there is enough evidence of foreseeability that this issue should go to the jury. Also note that the evidence must be overwhelming for the judge to take the issue away from the jury by granting summary judgment for the defendant. Here, the evidence was not overwhelming based on the criminal activity at the construction site.\n\n(B), (C), and (D) are all wrong because the issue of foreseeability is generally a question for the jury, meaning both cross-motions for summary judgment must be denied."
    },
    {
        id: 11,
        topic: "Negligence / Duty of Common Carrier",
        fp: "The plaintiff and a salesman, who were strangers to each other, were passengers sitting in adjoining seats on an airline flight. There were many empty seats on the aircraft.\n\nDuring the flight, a flight attendant served the salesman nine drinks. As the salesman became more and more obviously intoxicated and attempted to engage the plaintiff in a conversation, the plaintiff chose to ignore the salesman. This angered the salesman, who suddenly struck the plaintiff in the face, giving her a black eye.",
        q: "If the plaintiff asserts a claim for damages against the airline based on negligence, the plaintiff will",
        opts: [
            "not recover, because a person is not required by law to come to the assistance of another who is imperiled by a third party.",
            "not recover, if the plaintiff could easily have moved to another seat.",
            "recover, because a common carrier is strictly liable for injuries suffered by a passenger while aboard the carrier.",
            "recover, if the flight attendants should have perceived the salesman's condition and acted to protect the plaintiff before the blow was struck."
        ],
        ans: 3,
        exp: "Choice (D) is correct. A business operator whose premises are open to third persons owes a duty of reasonable care to those on the premises to make reasonable efforts to control the behavior of others on the premises, so as to prevent them from causing bodily harm. Therefore, if the flight attendants should have perceived that the salesman posed an unreasonable risk of bodily harm to the plaintiff, and should have realized that they could or might be able to protect the plaintiff, the airline (the business operator) will be liable for negligence because its employees did not intervene.\n\n(A) is wrong because, while this choice correctly states the general rule, there is an exception where some special relationship exists between the defendant and the plaintiff, such as where the defendant operates business premises open to the public on which the plaintiff is present at the defendant's invitation.\n\n(B) is wrong because whether or not the plaintiff could have easily changed her seat does not change the fact that the flight attendants had a duty to act reasonably to protect her from foreseeable harm. The plaintiff's failure to change seats would have been at most comparative negligence, which would have reduced but not eliminated the plaintiff's recovery.\n\n(C) is wrong because breach of the duty of reasonable care may result in negligence liability of a common carrier, but a common carrier is not strictly liable for injuries to its passengers."
    },
    {
        id: 12,
        topic: "Negligence / Retailer Duty",
        fp: "A plaintiff always brought her lunch to eat in the office. One Saturday afternoon the plaintiff went to a local self-service grocery, and bought a can of corned beef. The can had printed on its label \"A Product of Beef Company.\" The company was a reputable supplier of beef products. On Sunday evening, the woman prepared a sandwich for lunch the next day, using the can of corned beef she had bought on Saturday. When the plaintiff bit into her sandwich at lunch time the next day, a large sliver of bone concealed in the corned beef slice pierced between her teeth, broke one off, and came to rest deep in the roof of her mouth. This accident caused her to suffer severe pain and to incur medical expenses of $700.\n\nThe plaintiff brought two claims for damages: one against the local grocery and the other against Beef Company. The claims were tried together. At the trial, the plaintiff proved all of the above facts leading up to her injury as well as the elements of her damage. Beef Company proved that it had not processed and packed the corned beef, but that such had been done by its regular and independent supplier, Meat Packing Company. Beef Company further proved that it had never obtained from Meat Packing Company defective meat products, and that it had no way of knowing that the can contained any dangerous material. The grocery proved that it had no way of knowing the content of the can was likely to cause harm, and that it had sold the products of Beef Company for a number of years without ever having been told by a customer that the products were defective. Both defendants agreed by stipulation in open court that Meat Packing Company had been guilty of negligence in packing the corned beef containing the sliver of bone. The jurisdiction still follows common-law contributory negligence.",
        q: "If the plaintiff's claim against the grocery is based on a negligence theory, the plaintiff will",
        opts: [
            "recover, because the negligence of Meat Packing Company follows passage of title of the product to the grocery.",
            "recover, because the grocery is liable for the negligence of Meat Packing Company since they are joint venturers.",
            "not recover, because there was no evidence that the grocery failed to exercise due care in selling her the corned beef.",
            "not recover, because she was guilty of contributory negligence when she selected the can containing the sliver of bone."
        ],
        ans: 2,
        exp: "Choice (C) is correct because it correctly identifies why the grocery won't be liable: It wasn't negligent. As in any negligence claim, a product liability suit predicated on negligence requires proof that (1) the defendant failed to exercise such care as a reasonable person in his position would have exercised, (2) the failure was a breach of the duty to prevent the foreseeable risk of harm to anyone in the plaintiff's position, and (3) this breach caused the plaintiff's damages. Here, the grocery was not affirmatively negligent, and since the defect was inside the can, there was nothing to trigger the grocery's duty to inspect.\n\n(A) is wrong because it misstates the law: Negligence does not, in fact, follow passage of title. If this were strict liability, the grocery would get tagged with liability, but the claim here is for negligence.\n\n(B) is wrong because it mischaracterizes the facts. There was no mutual right of control between the Meat Packing Company and the grocery, so the grocery can't be liable on a joint-venture theory.\n\n(D) is wrong because there was nothing to trigger any alarm in the plaintiff, since the can looked fine. So the plaintiff could not have been contributorily negligent."
    },
    {
        id: 13,
        topic: "Negligence / Duty of Store Owner",
        fp: "Cara, who was eight years old, went to the grocery store with her mother. Cara pushed the grocery cart while her mother put items into it. Cara's mother remained near Cara at all times. Penny, another customer in the store, noticed Cara pushing the cart in a manner that caused Penny no concern. A short time later, the cart Cara was pushing struck Penny in the knee, inflicting serious injury.",
        q: "If Penny brings an action, based on negligence, against the grocery store, the store's best defense will be that",
        opts: [
            "a store owes no duty to its customers to control the use of its shopping carts.",
            "a store owes no duty to its customers to control the conduct of other customers.",
            "any negligence of the store was not the proximate cause of Penny's injury.",
            "a supervised child pushing a cart does not pose an unreasonable risk to other customers."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Grocery store shoppers are invitees-members of the public who come onto land held open to them and who do so for the purpose for which the land is held open. Such people reasonably expect that the premises have been made safe for them, and the owner must exercise reasonable care for the safety of such people. Reasonable care by the owner may require that she exercise control over third persons on the premises. But the fact pattern indicates that Cara's mother was near her at all times and that the plaintiff herself was not concerned by Cara's pushing of the grocery cart. Under these circumstances, it does not appear that Cara posed an unreasonable risk to the grocery shoppers. Therefore, the store acted reasonably and should not be held responsible for her actions.\n\n(A) is wrong because a store does owe a duty of reasonable care to provide for the safety of its invitees, which would include reasonable attempts to protect customers from harms that might foreseeably result from shopping carts.\n\n(B) is wrong because a store does owe a duty of reasonable care, which might include trying to protect them from harm posed by other customers.\n\n(C) is wrong because on the facts here, \"lack of negligence\" (Choice (D)) is more convincing than \"lack of proximate cause.\" If Cara had posed a foreseeable risk of injury, the store's failure to intervene would be a proximate cause of Penny's injuries."
    },
    {
        id: 14,
        topic: "Medical Malpractice / Standard of Care",
        fp: "A patient who had suffered a severe fracture of her leg was treated by an orthopedist, who set the patient's leg and put it in a cast. When the leg continued to bother the patient six months later, she consulted a second orthopedist in the same town. The second orthopedist surgically inserted a pin to facilitate healing.\n\nThe patient brought a malpractice action against the first orthopedist, claiming that he should have surgically inserted a pin at the time of initial treatment.\n\nThe only evidence that the patient offered in support of her malpractice claim was the testimony of the second orthopedist, as follows:\nIn response to the question \"Would you have inserted a pin initially?\" the second orthopedist testified, \"I personally would not have been satisfied that the leg would heal properly without a pin.\"\n\nAt the close of the patient's evidence, the first orthopedist moved for judgment as a matter of law.",
        q: "Should the motion be granted?",
        opts: [
            "No, because the patient has introduced evidence that the first orthopedist failed to give the care that the second orthopedist would have provided.",
            "No, because the second orthopedist practices in the same town and field of specialty as the first orthopedist.",
            "Yes, because the patient has failed to introduce evidence that the first orthopedist's care fell below the professional standard of care.",
            "Yes, because the second orthopedist also treated the patient and is thus not sufficiently objective to offer expert testimony."
        ],
        ans: 2,
        exp: "Choice (C) is correct. To recover for malpractice, the plaintiff must show that the defendant professional failed to act with the level of skill of the minimally qualified member of the profession in good standing, not the average member. Rest. 2d, § 299A, Comment e. All the patient has established here is that the second orthopedist would have initially inserted the pin-that's not enough to permit a reasonable jury to conclude that, more probably than not, that failure to insert the pin fell below the skill level of a \"minimally qualified member\" of the orthopedic profession.\n\n(A) is wrong because it's not enough for the patient to introduce evidence that the second orthopedist would have used a pin. Instead, to avoid judgment as a matter of law, the patient had to introduce evidence that the defendant's failure to insert a pin constituted a failure to use the skill level of a minimally qualified orthopedist.\n\n(B) is wrong because it's irrelevant whether the second orthopedist practices in the same town and field of specialty as the first one. (Today, evidence concerning the minimum national standard of care in that specialty suffices.)\n\n(D) is wrong because the fact that the second orthopedist also treated the patient is irrelevant. Any bias on the part of the second orthopedist would go only to the weight to be given to that doctor's testimony, not to whether the testimony was legally sufficient."
    },
    {
        id: 15,
        topic: "Negligence Per Se",
        fp: "A car owner washed her car while it was parked on a public street, in violation of a statute that prohibits the washing of vehicles on public streets during rush hours. The statute was enacted only to expedite the flow of automobile traffic. Due to a sudden and unexpected cold snap, the car owner's waste water formed a puddle that froze. A pedestrian slipped on the frozen puddle and broke her leg. The pedestrian sued the car owner to recover for her injury. At trial, the only evidence the pedestrian offered as to negligence was the car owner's admission that she had violated the statute. At the conclusion of the proofs, both parties moved for a directed verdict.",
        q: "How should the trial judge proceed?",
        opts: [
            "Deny both motions and submit the case to the jury, because, on the facts, the jury may infer that the car owner was negligent.",
            "Deny both motions and submit the case to the jury, because the jury may consider the statutory violation as evidence that the car owner was negligent.",
            "Grant the car owner's motion, because the pedestrian has failed to offer adequate evidence that the car owner was negligent.",
            "Grant the pedestrian's motion, because of the car owner's admitted statutory violation."
        ],
        ans: 2,
        exp: "Choice (C) is correct. For the pedestrian to recover, she will have to show negligence on the part of the car owner. The pedestrian has two shots at this: (1) negligence per se; and (2) garden-variety negligence. As to negligence per se, before the standard of care in a statute can be the basis for a claim of negligence per se, it must be the case that the ordinance was drafted at least in part for the purpose of protecting against the particular hazard that occurred. Rest. 2d, § 286(d). This requirement is not satisfied here, because we're told that the purpose of the statute was solely to expedite the flow of car traffic, not to protect against the formation of the ice. With respect to garden-variety negligence, the pedestrian has simply come forward with no evidence that the accident was caused by any failure on the part of the car owner to use reasonable care under the circumstances. Accordingly, the car owner's motion should be granted.\n\n(A) is wrong because negligence creating the risk of an icy surface cannot be inferred from the mere fact that the car owner allowed the water to accumulate; the cold snap was \"sudden and unexpected.\"\n\n(B) is wrong because the statutory violation is not even evidence of negligence here, since the statute was not enacted to reduce the risk of accumulating ice on the public walkways.\n\n(D) is wrong because the negligence per se doctrine does not apply when the statute was enacted solely to reduce a particular safety risk that neither materialized nor caused the injury."
    },
    {
        id: 16,
        topic: "Res Ipsa Loquitur",
        fp: "A trucker driving down an isolated country road late one night struck cattle that had escaped from a farmer's pen and wandered into the road. The trucker was unable to stop before hitting the cattle but was not driving carelessly. While he was not injured in the collision, the trucker sustained damage to his truck and lost income during the time it took to repair the truck.\n\nThe trucker sued the farmer for his damages and invoked the doctrine of res ipsa loquitur. At trial, the farmer introduced evidence that his cattle pen was of a sufficient height to prevent cattle from stepping over it and was constructed of thick steel pipe sitting in concrete with a substantial top rail. A sturdy pen such as this one would be more difficult for cattle to break through than one constructed of barbed wire or electric wire.",
        q: "Should the trial court allow the case to go to the jury with a res ipsa loquitur instruction?",
        opts: [
            "No, because it is possible that a third party wrongfully let the cattle out of the pen.",
            "No, because the trucker must submit direct evidence of negligence in order to invoke the res ipsa loquitur doctrine.",
            "Yes, because the farmer is strictly liable for harm caused by his escaping cattle.",
            "Yes, because the jury could conclude that cattle would not ordinarily escape a strong, secure cattle pen in the absence of negligence."
        ],
        ans: 3,
        exp: "Choice (D) is correct. The doctrine of res ipsa loquitur allows the plaintiff to point to the fact of the accident, and to create an inference that, even absent a precise showing of how the defendant behaved, the defendant was probably negligent. The courts generally agree on four requirements before the doctrine may be applied: (1) there must be no direct evidence of the defendant's conduct; (2) the event must be of a kind that ordinarily does not occur except through negligence; (3) the instrument that caused the injury must have been, at the relevant time, in the exclusive control of the defendant; and (4) plaintiff must show that his injury was not due to his own action. These requirements are all satisfied here. A jury could infer that cattle kept inside fencing too high and strongly built for the cows to trample or step over would normally not escape without the negligence of someone (e.g., a third person left the gate open or the farmer failed to lock it).\n\n(A) is wrong because the mere possibility that a third party let the cattle out does not defeat the use of res ipsa; exclusive control combined with the trucker's non-fault are enough to trigger it.\n\n(B) is wrong because the availability of res ipsa eliminates the trucker's need to show direct evidence of negligence.\n\n(C) is wrong because strict liability does not attach to raising cattle, which is not an abnormally dangerous activity."
    },
    {
        id: 17,
        topic: "Res Ipsa Loquitur",
        fp: "As a shopper was leaving a supermarket, an automatic door that should have opened outward opened inward, striking and breaking the shopper's nose. The owner of the building had installed the automatic door. The lease, pursuant to which the supermarket leased the building, provided that the supermarket was responsible for all maintenance of the premises.\n\nThe shopper sued the supermarket. At trial, neither the shopper nor the supermarket offered any testimony, expert or otherwise, as to why the door had opened inward. At the conclusion of the proofs, both the shopper and the supermarket moved for judgment.",
        q: "How should the trial judge rule?",
        opts: [
            "Grant judgment for the shopper, because it is undisputed that the door malfunctioned.",
            "Grant judgment for the supermarket, because the shopper failed to join the owner of the building as a defendant.",
            "Grant judgment for the supermarket, because the shopper failed to offer proof of the supermarket's negligence.",
            "Submit the case to the jury, because on these facts negligence may be inferred."
        ],
        ans: 3,
        exp: "Choice (D) is correct. In a case like this, where there is no evidence to show why an accident happened, the underlying issue is whether the plaintiff can use the doctrine of res ipsa loquitur. Res ipsa allows a jury to find a defendant negligent even without specific evidence of what the defendant did wrong. For the doctrine to apply, there are two basic requirements: the accident must be one that ordinarily does not occur unless someone was negligent; and the defendant has to be responsible for the thing, or \"instrumentality,\" that caused the harm. In this case it seems fair to suppose that automatic doors usually do not open the wrong way unless somebody responsible for the doors has been negligent. And it also is fair to say that the defendant supermarket is responsible for the doors, since the market is put in charge of ongoing maintenance by its lease. Therefore res ipsa loquitur applies. The case should go to a jury, which can decide whether or not to give a verdict to the plaintiff on the basis of those inferences.\n\n(A) is wrong because the mere malfunction of the door does not require judgment against the supermarket; res ipsa allows a jury to find for a plaintiff, but it doesn't require it.\n\n(B) is wrong because a plaintiff is not required to join all parties as defendants who might have been responsible for an accident.\n\n(C) is wrong because it is not always necessary for a plaintiff to offer direct evidence of the defendant's negligence; res ipsa loquitur lets a plaintiff reach a jury by inference."
    },
    {
        id: 18,
        topic: "Res Ipsa Loquitur / Rebuttal",
        fp: "Defendant left her car parked on the side of a hill. Two minutes later, the car rolled down the hill and struck and injured Plaintiff.\n\nIn Plaintiff's negligence action against Defendant, Plaintiff introduced into evidence the facts stated above, which are undisputed. Defendant testified that, when she parked her car, she turned the front wheels into the curb and put on her emergency brakes, which were in good working order. She also introduced evidence that, in the weeks before this incident, juveniles had been seen tampering with cars in the neighborhood. The jury returned a verdict in favor of Defendant, and Plaintiff moved for a judgment notwithstanding the verdict.",
        q: "Plaintiff's motion should be",
        opts: [
            "granted, because it is more likely than not that Defendant's negligent conduct was the legal cause of Plaintiff's injuries.",
            "granted, because the evidence does not support the verdict.",
            "denied, because, given Defendant's evidence, the jury was not required to draw an inference of negligence from the circumstances of the accident.",
            "denied, if Defendant was in no better position than Plaintiff to explain the accident."
        ],
        ans: 2,
        exp: "Choice (C) is correct. The doctrine of res ipsa loquitur allows the plaintiff to point to the fact of the accident, and to create an inference that, even without a precise showing of how the defendant behaved, the defendant was probably negligent. The consequence of the doctrine's application is that the plaintiff has met her burden of production. The defendant may counter with evidence that rebuts any or all of the elements required for res ipsa (e.g., by showing other possible causes not involving the defendant's negligence). It will then be up to the jury to decide whether the defendant's evidence is enough to negate the inference of negligence stemming from application of res ipsa. Here, the defendant provided enough evidence (proper use of the emergency brakes and evidence of juveniles tampering with cars in the neighborhood) that a jury was not required to infer negligence of the defendant from the fact that the defendant parked her car and two minutes later it rolled down the hill.\n\n(A) and (B) are wrong because, as discussed above, there was enough evidence provided by the defendant to entitle a reasonable jury to conclude that it should not apply res ipsa, i.e., that it should not infer negligence. This fact will be dispositive, since a JNOV should be granted only if there was not enough evidence to permit a reasonable jury to find for the verdict-winner.\n\n(D) is wrong because it focuses on a factor that won't be dispositive; the plaintiff will lose because the defendant came up with enough evidence that a reasonable jury could find that the inference of negligence by the defendant was unjustified."
    },
    {
        id: 19,
        topic: "Negligence / Rescue Doctrine",
        fp: "Desmond fell while attempting to climb a mountain, and lay unconscious and critically injured on a ledge that was difficult to reach. Pearson, an experienced mountain climber, was himself seriously injured while trying to rescue Desmond. Pearson's rescue attempt failed, and Desmond died of his injuries before he could be reached. Pearson brought an action against Desmond's estate for compensation for his injuries. In this jurisdiction, the traditional common-law rules relating to contributory negligence and assumption of risk remain in effect.",
        q: "Will Pearson prevail in his action against Desmond's estate?",
        opts: [
            "Yes, if his rescue attempt was reasonable.",
            "Yes, because the law should not discourage attempts to assist persons in helpless peril.",
            "No, unless Desmond's peril arose from his own failure to exercise reasonable care.",
            "No, because Pearson's rescue attempt failed and therefore did not benefit Desmond."
        ],
        ans: 2,
        exp: "Choice (C) is correct. A rescuer who sustains injuries can recover from the rescuee, if the rescuee acted negligently in putting himself in the position of needing rescue. But if the rescuee did not act negligently (or any negligence did not contribute directly to the arising of the peril), then the rescuer would not be permitted to recover, even though the peril was the proximate cause and cause in fact of the harm to the rescuer.\n\n(A) is wrong because, even if Pearson's rescue attempt was reasonable, if it was not in response to a danger caused by Desmond's negligence, then Pearson would not prevail in an action against defendant for his injuries.\n\n(B) is wrong because, even if rescue attempts should be encouraged, if Pearson's rescue attempt was not in response to a danger caused by Desmond's negligence, then Pearson would not prevail in an action against defendant for his injuries.\n\n(D) is wrong because, even though Desmond didn't benefit from the rescue attempt, he would still be liable to the rescuer if the rescue attempt was in response to Desmond's own negligence in putting himself in need of rescue."
    },
    {
        id: 20,
        topic: "Proximate Cause / Foreseeability",
        fp: "Doe negligently caused a fire in his house, and the house burned to the ground. As a result, the sun streamed into Peter's yard next door, which previously had been shaded by Doe's house. The sunshine destroyed some delicate and valuable trees in Peter's yard that could grow only in the shade. Peter has brought a negligence action against Doe for the loss of Peter's trees. Doe has moved to dismiss the complaint.",
        q: "The best argument in support of this motion would be that",
        opts: [
            "Doe's negligence was not the active cause of the loss of Peter's trees.",
            "Doe's duty to avoid the risks created by a fire did not encompass the risk that sunshine would damage Peter's trees.",
            "the loss of the trees was not a natural and probable consequence of Doe's negligence.",
            "Peter suffered a purely economic loss, which is not compensable in a negligence action."
        ],
        ans: 1,
        exp: "Choice (B) is correct. Doe's liability extends to foreseeable damages from a fire. It was not foreseeable that a fire would damage trees by depriving them of the structure that was sustaining them by providing shade. Had the trees burned down, this would be a foreseeable consequence of the fire, but that was not the case here.\n\n(A) is wrong because Doe's negligence did in fact cause the loss of the trees, albeit in an unexpected manner.\n\n(C) is wrong because the loss of trees is a natural and probable consequence of a fire. The manner in which Peter's trees were lost was not foreseeable, however, which is why Choice (B) is the correct answer.\n\n(D) is wrong because Peter suffered property damage, which is compensable in a negligence action. Examples of pure economic loss are loss of profits or wages. Property damage does not fall under this category."
    },
    {
        id: 21,
        topic: "Proximate Cause / Intervening Causes",
        fp: "A driver's car sustained moderate damage in a collision with a car driven by a sightseer. The accident was caused solely by the sightseer's negligence. The driver's car was still drivable after the accident. Examining the car the next morning, the driver could see that a rear fender had to be replaced. He also noticed that gasoline had dripped onto the garage floor. The collision had caused a small leak in the gasoline tank.\n\nThe driver then took the car to a mechanic, who owns and operates a body shop, and arranged with the mechanic to repair the damage. During their discussion the driver neglected to mention the gasoline leakage. Thereafter, while the mechanic was loosening some of the damaged material with a hammer, he caused a spark, igniting vapor and gasoline that had leaked from the fuel tank. The mechanic was severely burned.\n\nThe mechanic has brought an action to recover damages against the driver and the sightseer. The jurisdiction has adopted a pure comparative negligence rule in place of the traditional common-law rule of contributory negligence.",
        q: "In this action, will the mechanic obtain a judgment against the sightseer?",
        opts: [
            "No, unless there is evidence that the sightseer was aware of the gasoline leak.",
            "No, if the mechanic would not have been harmed had the driver warned him about the gasoline leak.",
            "Yes, unless the mechanic was negligent in not discovering the gasoline leak himself.",
            "Yes, if the mechanic's injury was a proximate consequence of the sightseer's negligent driving."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Under the prevailing view of proximate cause, the defendant's negligent conduct is the (or a) proximate cause of the plaintiff's injury if (and only if) the general type of harm that occurred to the plaintiff was a reasonably foreseeable consequence of the defendant's negligent action. Choice (D) articulates this standard. We cannot definitively say on these facts that the mechanic's injury was in fact a proximate consequence of the sightseer's negligent driving-but if it was a proximate consequence, the mechanic would be entitled to at least partial recovery from the sightseer, under pure comparative-negligence principles. If the driver's failure to mention the leak constituted negligence by him, this would reduce the sightseer's share of the judgment under comparative negligence, but it wouldn't eliminate the sightseer's liability.\n\n(A) is wrong because the sightseer's liability arises out of his negligent driving, not his awareness of the gasoline leak. Liability depends on the foreseeable consequences of the negligently-caused event (the accident), not from whether the negligent actor was or wasn't aware of how the danger arose.\n\n(B) is wrong because the lack of such a warning would not be deemed to have broken the causal link between the sightseer's negligent driving and the injury to the mechanic. In general, a third party's failure to discover or warn of a danger caused by the defendant will not insulate the defendant from negligence liability.\n\n(C) is wrong because even had the mechanic negligently failed to discover the danger, he would still be entitled to recovery under pure comparative negligence principles."
    },
    {
        id: 22,
        topic: "Proximate Cause / Escape Response",
        fp: "While Driver was taking a leisurely spring drive, he momentarily took his eyes off the road to look at some colorful trees in bloom. As a result, his car swerved a few feet off the roadway, directly toward Walker, who was standing on the shoulder of the road waiting for a chance to cross. When Walker saw the car bearing down on him, he jumped backwards, fell, and injured his knee.\n\nWalker sued Driver for damages, and Driver moved for summary judgment. The foregoing facts are undisputed.",
        q: "Driver's motion should be",
        opts: [
            "denied, because the record shows that Walker apprehended an imminent, harmful contact with Driver's car.",
            "denied, because a jury could find that Driver negligently caused Walker to suffer a legally compensable injury.",
            "granted, because the proximate cause of Walker's injury was his own voluntary act.",
            "granted, because it is not unreasonable for a person to be distracted momentarily."
        ],
        ans: 1,
        exp: "Choice (B) is correct. When A puts B in peril, it's typically quite foreseeable that B will try to escape the peril. Therefore, if A acted negligently in putting B in peril, A will be liable for injury to B that occurs during B's foreseeable efforts to escape the peril. Here, it's completely foreseeable that one in Walker's position might jump backwards to escape the oncoming car, and thereby be injured. That's all that this choice is asserting.\n\n(A) is wrong because Driver's actions were negligent and apprehension of an imminent harmful contact is the definition of an assault, an intentional tort.\n\n(C) is wrong because, when A is put in peril by B's negligence, A's efforts to escape the peril-unless they are truly bizarre and unforeseeable-won't act as superseding causes. So while Walker's injury may have been due in part to his \"voluntary act\" of jumping backward, this certainly doesn't prevent Driver's negligence from also being a proximate cause of the injury.\n\n(D) is wrong because, although sometimes it may not be unreasonable for a person to be distracted momentarily, in this case it was unreasonable. In assessing reasonableness, courts do a cost-benefit analysis. Here, a driver's looking at \"colorful trees in bloom\" during a \"leisurely spring drive\" is certainly not an event whose social value outweighs the major risk to others."
    },
    {
        id: 23,
        topic: "Firefighter's Rule",
        fp: "A driver, returning from a long shift at a factory, fell asleep at the wheel and lost control of his car. As a result, his car collided with a police car driven by an officer who was returning to the station after having responded to an emergency. The police officer was injured in the accident. The police officer sued the driver in negligence for her injuries. The driver moved for summary judgment, arguing that the common-law firefighters' rule barred the suit.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because the firefighters' rule does not apply to police officers.",
            "No, because the police officer's injuries were not related to any special dangers of her job.",
            "Yes, because the accident would not have occurred but for the emergency.",
            "Yes, because the police officer was injured on the job."
        ],
        ans: 1,
        exp: "Choice (B) is correct. The common-law \"firefighters' rule\" says that when firefighters or police officers are injured during the course of the job, they normally have no claim against the person whose conduct created the peril. But even among those that do, the doctrine is generally limited to risks that are inherent in, and special to, that particular occupation. This limit means that the doctrine will not apply here because being struck by a car in normal traffic is not one of the special risks inherent to dangerous police work. So the driver can be held liable under ordinary negligence principles.\n\n(A) is wrong because, although this answer correctly states that the driver's motion should be denied, it misstates the legal basis for this conclusion. The firefighters' rule also covers police officers.\n\n(C) is wrong because but-for causation is not sufficient to support the firefighters' rule defense here. The fact that the officer was returning from an emergency when she was struck was just a coincidence.\n\n(D) is wrong because it overstates the scope of the firefighters' rule. The rule only bars claims for injuries that result from risks that are unique or special to the plaintiff's inherently dangerous work."
    },
    {
        id: 24,
        topic: "Products Liability / Design Defect",
        fp: "A company manufactured metal stamping presses that were usually sold with an installed safety device that made it impossible for a press to close on a worker's hands. The company strongly recommended that its presses be purchased with the safety device installed, but would sell a press without the safety device at a slightly reduced price.\n\nRejecting the company's advice, a worker's employer purchased a stamping press without the safety device. The press closed on the worker's hand, crushing it.",
        q: "Will the worker prevail in a products liability suit against the company?",
        opts: [
            "Yes, because the company's press was the cause in fact of the worker's injury.",
            "Yes, because the company sold the press to the worker's employer without an installed safety device.",
            "No, because the failure of the worker's employer to purchase the press with a safety device was a superseding intervening cause of the worker's injury.",
            "No, because the company strongly recommended that the worker's employer purchase the press with the safety device."
        ],
        ans: 1,
        exp: "Choice (B) is correct, because a product is defective if it fails to include a feasible safety device that would prevent injuries foreseeably incurred in ordinary use. If a plaintiff is injured by a product with a defective design, the manufacturer of the product is strictly liable. A plaintiff can prove that a product's design is defective by pointing out a reasonable alternative design that offers a better balance of costs and benefits. In this case, the plaintiff can make that showing easily enough: The manufacturer itself had designed an alternative model that we are told was considerably safer, only slightly more expensive, and equally useful. The existence of that safer model makes the model sold here unreasonably dangerous.\n\n(A) is wrong because a plaintiff cannot win a claim based on a design defect simply by showing that the defendant's product was a cause in fact of his injury. The plaintiff also must show that the product was defective.\n\n(C) is wrong because the employer's failure to purchase the safety device was not a superseding intervening cause of the worker's injury. A consumer's decision to buy the product, and not to buy a safer one, does not cut off the manufacturer's liability. The buyer's decision was highly foreseeable.\n\n(D) is wrong because a manufacturer cannot insulate itself from liability for its defective products by warning about the defects or strongly recommending optional safety equipment that should have been standard."
    },
    {
        id: 25,
        topic: "Joint Liability / Comparative Negligence",
        fp: "Jones, who was driving his car at night, stopped the car and went into a nearby tavern for a drink. He left the car standing at the side of the road, projecting three feet into the traffic lane. The lights were on and his friend, Peters, was asleep in the back seat. Peters awoke, discovered the situation, and went back to sleep. Before Jones returned, his car was hit by an automobile approaching from the rear and driven by Davis. Peters was injured.\n\nPeters sued Davis and Jones jointly to recover the damages he suffered resulting from the accident. The jurisdiction has a pure comparative negligence rule and has abolished the defense of assumption of risk. In respect to other issues, the rules of the common law remain in effect.",
        q: "Peters should recover",
        opts: [
            "nothing, if Peters was more negligent than either Davis or Jones.",
            "nothing, unless the total of Davis's and Jones's negligence was greater than Peters's.",
            "from Davis and Jones, jointly and severally, the amount of damages Peters suffered reduced by the percentage of the total negligence that is attributed to Peters.",
            "from Davis and Jones, severally, a percentage of Peters's damages equal to the percentage of fault attributed to each of the defendants."
        ],
        ans: 2,
        exp: "Choice (C) is correct. If more than one person is a proximate cause of the plaintiff's harm, and the harm is indivisible, then under the traditional common-law rule, each defendant is liable for the entire harm. Davis and Jones would be jointly and severally liable. In a pure comparative fault system, the plaintiff is allowed to recover even if his fault is greater than that of the defendant. The plaintiff's recovery is reduced by a proportion equal to the ratio between his own fault and the total fault contributing to the accident. Therefore, Peter's recovery would be the amount of damages suffered reduced by the percentage of the total negligence that is attributed to him. And Peter can recover that entire amount of \"net\" damages from either defendant.\n\n(A) and (B) are wrong because in a pure comparative fault system, the plaintiff is allowed to recover even if the percentage of his fault is greater than that of either defendant or greater than the fault of both defendants combined.\n\n(D) is wrong because the harm is indivisible; therefore, the defendants are jointly and severally liable (each defendant is liable for the entire harm), not just severally liable for their own percentages."
    }
];