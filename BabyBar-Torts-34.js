const examData = [
    {
        id: 1,
        topic: "Products Liability / Medical Providers",
        fp: "A dentist was anesthetizing a patient's gum before pulling a tooth. Although the dentist used due care, the hypodermic needle broke off in the patient's gum, causing injury. The needle broke because of a manufacturing defect that the dentist could not have detected.",
        q: "Is the patient likely to recover damages in an action against the dentist based on strict products liability and malpractice?",
        opts: [
            "No, on neither basis.",
            "Yes, based on malpractice, but not on strict products liability.",
            "Yes, based on strict products liability, but not on malpractice.",
            "Yes, on both bases."
        ],
        ans: 0,
        exp: "To succeed in a strict products liability claim, the plaintiff would need to prove that a product was sold in a defective condition that is unreasonably dangerous by a commercial seller. Because the dentist was providing a service and was not in the business of selling the needle as a product, strict products liability does not apply against the dentist (although the plaintiff could sue the manufacturer). To succeed in a malpractice claim, the plaintiff must prove that the dentist failed to act with the level of skill and learning commonly possessed by members of the profession. Because the dentist used \"due care,\" there was no malpractice. Therefore, the patient will fail on both claims."
    },
    {
        id: 2,
        topic: "Private Nuisance",
        fp: "Electco operates a factory that requires the use of very high voltage electricity. Paul owns property adjacent to the Electco plant where he has attempted to carry on a business that requires the use of sensitive electronic equipment. The effectiveness of Paul's electronic equipment is impaired by electrical interference arising from the high voltage currents used in Electco's plant. Paul has complained to Electco several times, with no result. There is no way that Electco, by taking reasonable precautions, can avoid the interference with Paul's operation that arises from the high voltage currents necessary to Electo's operation.",
        q: "In Paul's action against Electco to recover damages for the economic loss caused to him by the electrical interference, will Paul prevail?",
        opts: [
            "Yes, because Electco's activity is abnormally dangerous.",
            "Yes, for loss suffered by Paul after Electco was made aware of the harm its activity was causing to Paul.",
            "No, unless Electco caused a substantial and unreasonable interference with Paul's business.",
            "No, because Paul's harm was purely economic and did not arise from physical harm to his person or property."
        ],
        ans: 2,
        exp: "Paul can win only on a nuisance theory (not on negligence or strict liability for ultrahazardous activities, since transmitting electricity is generally not considered an abnormally dangerous activity). A private nuisance is an unreasonable interference with the plaintiff's use and enjoyment of his land. In order to recover for private nuisance, the plaintiff must show that his use and enjoyment of his land was interfered with in a \"substantial\" and \"unreasonable\" way. Unless the electrical interference meets this high threshold of substantial and unreasonable interference, Paul cannot prevail.\n\nElectco's use of high voltage electricity would not be found to be abnormally dangerous. Also, if the interference was not substantial and unreasonable, the fact that Electco was given notice would not make them liable."
    },
    {
        id: 3,
        topic: "Defamation / Opinion",
        fp: "Doe, the governor of State, signed a death warrant for Rend, a convicted murderer. Able and Baker are active opponents of the death penalty. At a demonstration protesting the execution of Rend, Able and Baker carried large signs that stated, \"Governor Doe-Murderer.\"\n\nTelevision station XYZ broadcast news coverage of the demonstration, including pictures of the signs carried by Able and Baker.",
        q: "If Governor Doe asserts a defamation claim against XYZ, will Doe prevail?",
        opts: [
            "Yes, because the signs would cause persons to hold Doe in lower esteem.",
            "Yes, if Doe proves that XYZ showed the signs with knowledge of falsity or reckless disregard of the truth that Doe had not committed homicide.",
            "No, unless Doe proves he suffered pecuniary loss resulting from harm to his reputation proximately caused by the defendants' signs.",
            "No, if the only reasonable interpretation of the signs was that the term \"murderer\" was intended as a characterization of one who would sign a death warrant."
        ],
        ans: 3,
        exp: "If a statement could be reasonably interpreted only in one way, then that interpretation must in fact be defamatory in order for a plaintiff to prevail in a case of defamation. If the only reasonable interpretation of the sign was that \"murderer\" means one who would sign a death warrant, then the statement was pure rhetorical opinion (that one who signs a death warrant is properly classified as a murderer), not a provably false fact. A statement of pure opinion cannot serve as the basis for a defamation claim.\n\nTo be defamatory, a statement must be a provably false statement of fact. If it is understood merely as political hyperbole, it fails the threshold test for defamation, regardless of whether it lowers esteem, was broadcast with malice, or caused pecuniary loss."
    },
    {
        id: 4,
        topic: "Defamation / Publication",
        fp: "Drew, the owner of a truck leasing company, asked Pat, one of Drew's employees, to deliver $1,000 to the dealership's main office. The following week, as a result of a dispute over whether the money had been delivered, Drew instructed Pat to come to the office to submit to a lie detector test.\n\nWhen Pat reported to Drew's office for the test, it was not administered. Instead, without hearing Pat's story, Drew shouted at him, \"You're a thief,\" and fired him. Drew's shout was overheard by several other employees who were in another office, which was separated from Drew's office by a thin partition. The next day, Pat accepted another job at a higher salary. Several weeks later, upon discovering that the money had not been stolen, Drew offered to rehire Pat.",
        q: "In a suit for slander by Pat against Drew, Pat will",
        opts: [
            "prevail, because Pat was fraudulently induced to go to the office for a lie detector test, which was not, in fact, given.",
            "prevail, if Drew should have foreseen that the statement would be overheard by other employees.",
            "not prevail, if Drew made the charge in good faith, believing it to be true.",
            "not prevail, because the statement was made to Pat alone and intended for his ears only."
        ],
        ans: 1,
        exp: "One of the elements of defamation is \"publication,\" i.e., the fact that the defamatory statement was communicated to at least one person other than the plaintiff. Furthermore, plaintiff must show that defendant acted either negligently or intentionally with regard to publication. So if defendant had reason to foresee that shouting through a thin partition would result in the statement being overheard by other employees, the publication requirement is satisfied.\n\nWhether Pat was fraudulently induced into the office is irrelevant. Since Pat is a private figure, Drew could be held liable if he was negligent regarding the truth of the statement, so honest \"good faith\" alone does not automatically shield him if he failed to use reasonable care to verify it. Intent that only the plaintiff hear the statement is not enough to defeat publication if Drew was negligent in letting others hear it."
    },
    {
        id: 5,
        topic: "Defamation / Fault",
        fp: "Allen and Bradley were law school classmates who had competed for the position of editor of the law review. Allen had the higher grade point average, but Bradley was elected editor, largely in recognition of a long and important note that had appeared in the review over her name.\n\nDuring the following placement interview season, Allen was interviewed by a representative of a nationally prominent law firm. In response to the interviewer's request for information about the authorship of the law review note, Allen said that he had heard that the note attributed to Bradley was largely the work of another student.\n\nThe firm told Bradley that it would not interview her because of doubts about the authorship of the note. This greatly distressed Bradley. In fact the note had been prepared by Bradley without assistance from anyone else.",
        q: "If Bradley asserts a claim against Allen based on defamation, Bradley will",
        opts: [
            "recover, because Allen's statement was false.",
            "recover, if Allen had substantial doubts about the accuracy of the information he gave the interviewer.",
            "not recover, unless Bradley proves pecuniary loss.",
            "not recover, because the statement was made by Allen only after the interviewer inquired about the authorship of the note."
        ],
        ans: 1,
        exp: "Even under First Amendment-based restrictions, states are permitted to give a private (i.e., non-public-figure) plaintiff the right to win if the plaintiff can show that the defendant made a defamatory falsehood and behaved at least negligently with respect to the statement's truth. Since Bradley is not a public figure, the fact that the defendant entertained substantial doubts about the truth of the statement is more than enough to prove negligence (and would even establish the \"reckless disregard\" standard required for actual malice).\n\nIt is not enough to prove that the statement was false; some degree of fault must be proven. Special (pecuniary) harm need not be proven because this statement adversely reflects on the plaintiff's fitness for her profession (slander per se). While Allen may have had a qualified privilege to respond to an inquiry, the privilege is lost if abused by acting with reckless disregard for the truth (i.e., having substantial doubts)."
    },
    {
        id: 6,
        topic: "Defamation / Actual Malice",
        fp: "A newspaper published an editorial in which an editor asserted that a candidate for high political office was a user of illegal drugs. The accusation was untrue. The editor acted unreasonably in not investigating the accusation before publishing it; however, the editor honestly believed that the accusation was true.\n\nThe candidate sued the editor for defamation.",
        q: "Is the candidate entitled to recover?",
        opts: [
            "No, because the accusation appeared in an editorial and was, therefore, merely an opinion.",
            "No, because the editor honestly believed that the accusation was true.",
            "Yes, because calling someone an illegal drug user is defamatory per se.",
            "Yes, because the accusation was false and was injurious to the candidate's reputation."
        ],
        ans: 1,
        exp: "A candidate for high political office is a public figure. The Supreme Court has held that the First Amendment requires that a public figure, in order to recover for defamation, must prove that the defendant made the statement with \"actual malice\" (knowledge that it was false or with reckless disregard of whether it was false or not). Reckless disregard requires that the defendant in fact entertained serious doubts as to the truth of the publication. Since the editor honestly believed that the accusation was true, he did not act with actual malice, even if he acted unreasonably (negligently) in failing to investigate.\n\nThe accusation was stated as a fact, not pure opinion, despite appearing in an editorial. However, the lack of actual malice bars the public figure from recovering, regardless of whether the statement was defamatory per se or injurious to his reputation."
    },
    {
        id: 7,
        topic: "Defense of Others",
        fp: "Karen was crossing Main Street at a crosswalk. John, who was on the sidewalk nearby, saw a speeding automobile heading in Karen's direction. John ran into the street and pushed Karen out of the path of the car. Karen fell to the ground and broke her leg.",
        q: "In an action for battery brought by Karen against John, will Karen prevail?",
        opts: [
            "Yes, because John could have shouted a warning instead of pushing Karen out of the way.",
            "Yes, if Karen was not actually in danger and John should have realized it.",
            "No, because the driver of the car was responsible for Karen's injury.",
            "No, if John's intent was to save Karen, not to harm her."
        ],
        ans: 1,
        exp: "Since John intentionally caused a harmful or offensive contact with another, he's liable for battery unless he has a defense. The only defense that plausibly applies here is \"defense of others.\" The defense-of-others defense requires that the actor's belief that danger exists, and his belief that the proposed conduct is a good way to deal with the danger, be reasonable. If John should have realized that Karen was not in fact in danger, the privilege to use force in defense of others would be negated, and he would be liable for battery.\n\nThe fact that an alternative method (shouting) was available does not automatically make the physical intervention unreasonable. The speeding driver might be a concurrent cause, but that wouldn't save John from liability if his actions were unreasonable. Finally, John's pure intent to save Karen does not immunize him if his belief in the danger was objectively unreasonable."
    },
    {
        id: 8,
        topic: "Vicarious Liability / Independent Contractors",
        fp: "House owns his home in City. On the lawn in front of his home and within five feet of the public sidewalk there was a large tree. The roots of the tree caused the sidewalk to buckle severely and become dangerous. An ordinance of City requires adjacent landowners to keep sidewalks in safe condition. House engaged Contractor to repair the sidewalk, leaving it to Contractor to decide how the repair should be made.\n\nContractor dug up the sidewalk, cut back the roots of the tree, and laid a new sidewalk. Two days after House had paid Contractor the agreed price of the repair, the tree fell over onto the street and damaged a parked car belonging to Driver.\n\nDriver has asserted claims against House and Contractor, and both defendants admit that cutting the roots caused the tree to fall.",
        q: "The theory on which Driver is most likely to prevail against House is that House is",
        opts: [
            "strictly liable, because the tree was on his property.",
            "liable for Contractor's negligence if, to House's knowledge, Contractor was engaged in hazardous activity.",
            "liable, because he assumed responsibility when he paid Contractor for the repair.",
            "liable on the basis of respondeat superior."
        ],
        ans: 1,
        exp: "As a general rule, a principal is not vicariously liable for the torts of an independent contractor. However, there are exceptions. One primary exception is when the contractor is engaged in inherently dangerous or hazardous activities that pose a special risk to others unless special precautions are taken (like excavating near a public street or severing massive tree roots near a roadway). In such cases, the property owner remains liable for the contractor's negligence. Additionally, repairing a public sidewalk often constitutes a non-delegable duty, imposing liability on the homeowner.\n\nHomeowners are not strictly liable merely because a tree on their property falls. Paying a contractor does not constitute an assumption of legal liability for their past torts. Respondeat superior strictly applies to the employer-employee relationship, not to independent contractors."
    },
    {
        id: 9,
        topic: "Battery / Intent",
        fp: "A mother and her six-year-old child were on a walk when the mother stopped to talk with an elderly neighbor. Because the child resented having his mother's attention diverted by the neighbor, the child angrily threw himself against the neighbor and knocked her to the ground. The neighbor suffered a broken wrist as a result of the fall.",
        q: "In an action for battery by the neighbor against the child, what is the strongest argument for liability?",
        opts: [
            "The child intended to throw himself against the neighbor.",
            "The child was old enough to appreciate that causing a fall could inflict serious injury.",
            "The child was old enough to appreciate the riskiness of his conduct.",
            "The child was not justified in his anger."
        ],
        ans: 0,
        exp: "Battery requires an intentional act that causes a harmful or offensive contact with the plaintiff's person. In tort law, a child is generally capable of forming the requisite intent to commit an intentional tort like battery. All that is required is that the child acted with the intent to cause the harmful or offensive contact (i.e., the child intended to throw himself against the neighbor). \n\nIt is not necessary for the child to appreciate the specific risk or the severity of the potential injury, as the tortfeasor is liable for the full extent of the harm caused by an intentional battery, regardless of foreseeability. The child's lack of justification for his anger does not establish the legal elements of the tort."
    },
    {
        id: 10,
        topic: "Wrongful Life / Wrongful Birth",
        fp: "Surgeon performed a sterilization operation on Patient. After the surgery, Surgeon performed a test that showed that Patient's fallopian tubes were not severed, as was necessary for sterilization. Surgeon did not reveal the failure of the operation to Patient, who three years later became pregnant and delivered a baby afflicted with a severe birth defect that will require substantial medical care throughout its life. The birth defect resulted from a genetic defect unknown to, and undiscoverable by, Surgeon. Patient brought an action on her own behalf against Surgeon, seeking to recover the cost of her medical care for the delivery of the baby, and the baby's extraordinary future medical expenses for which Patient will be responsible.",
        q: "Which of the following questions is relevant to the lawsuit and currently most difficult to answer?",
        opts: [
            "Did Surgeon owe a duty of care to the baby in respect to medical services rendered to Patient three years before the baby was conceived?",
            "Can a person recover damages for a life burdened by a severe birth defect based on a physician's wrongful failure to prevent that person's birth from occurring?",
            "Did Surgeon owe a duty to Patient to inform her that the sterilization operation had failed?",
            "Is Patient entitled to recover damages for the baby's extraordinary future medical expenses?"
        ],
        ans: 1,
        exp: "This fact pattern touches upon the highly controversial and legally difficult concepts of \"wrongful birth\" (brought by the parents) and \"wrongful life\" (brought on behalf of the child). While many jurisdictions allow parents to recover damages for the costs of pregnancy and sometimes the extraordinary medical expenses of a defective child resulting from a botched sterilization (\"wrongful birth\"), the question of whether damages can be recovered for the mere existence of a life burdened by a birth defect when the physician did not cause the genetic defect itself (but merely failed to prevent the birth) is a profound and deeply divided issue in tort law.\n\nWhether the surgeon owed a duty to inform the patient of the failed procedure is a straightforward medical malpractice concept with a clear \"yes\" answer. The recoverability of the extraordinary medical expenses is an issue, but it is deeply intertwined with the broader, more difficult existential and legal question posed in option B."
    },
    {
        id: 11,
        topic: "Negligence / Proximate Cause",
        fp: "Adam's car sustained moderate damage in a collision with a car driven by Basher. The accident was caused solely by Basher's negligence. Adam's car was still drivable after the accident. Examining the car the next morning, Adam could see that a rear fender had to be replaced. He also noticed that gasoline had dripped onto the garage floor. The collision had caused a small leak in the gasoline tank.\n\nAdam then took the car to Mechanic, who owns and operates a body shop, and arranged with Mechanic to repair the damage. During their discussion Adam neglected to mention the gasoline leakage. Thereafter, while Mechanic was loosening some of the damaged material with a hammer, he caused a spark, igniting vapor and gasoline that had leaked from the fuel tank. Mechanic was severely burned.\n\nMechanic has brought an action to recover damages against Adam and Basher. The jurisdiction has adopted a pure comparative negligence rule in place of the traditional common-law rule of contributory negligence.",
        q: "In this action, will Mechanic obtain a judgment against Adam?",
        opts: [
            "No, because it was Mechanic's job to inspect the vehicle and repair whatever needed repair.",
            "No, unless Adam was aware of the risk that the gasoline leak represented.",
            "Yes, if a reasonable person in Adam's position would have warned Mechanic about the gasoline leak.",
            "Yes, because the car was unreasonably dangerous when Adam delivered it to Mechanic."
        ],
        ans: 2,
        exp: "To hold Adam liable in negligence, the Mechanic must prove that Adam owed a duty, breached it, and caused the injury. A car owner turning over a vehicle for repair has a duty to act as a reasonably prudent person, which includes warning the mechanic of known hidden dangers (like a leaking gas tank) that the owner knows or should know pose a risk of harm. If a reasonable person in Adam's position would have warned the mechanic, then his failure to do so was a breach of duty that proximately caused the mechanic's burns.\n\nThe mechanic's failure to independently inspect the vehicle would be an issue of comparative negligence, but it would not completely bar his recovery in a pure comparative negligence jurisdiction. Strict liability (unreasonably dangerous product) does not apply because Adam is not a commercial seller of cars."
    },
    {
        id: 12,
        topic: "Negligence Per Se / Causation",
        fp: "Passenger departed on an ocean liner knowing that it would be a rough voyage due to predicted storms. The ocean liner was not equipped with the type of lifeboats required by the applicable statute.\n\nPassenger was swept overboard and drowned in a storm so heavy that even a lifeboat that conformed to the statute could not have been launched.",
        q: "In an action against the operator of the ocean liner brought by Passenger's representative, will Passenger's representative prevail?",
        opts: [
            "Yes, because the ocean liner was not equipped with the statutorily required lifeboats.",
            "Yes, because in these circumstances common carriers are strictly liable.",
            "No, because the storm was so severe that it would have been impossible to launch a statutorily required lifeboat.",
            "No, because Passenger assumed the risk by boarding the ocean liner knowing that it would be a rough voyage."
        ],
        ans: 2,
        exp: "Even when a defendant violates a safety statute (triggering negligence per se), the plaintiff must still prove actual causation (cause in fact). If the storm was so severe that even the statutorily required lifeboats could not have been launched, the failure to equip the ship with those lifeboats was not the \"but for\" cause of the Passenger's drowning. Without causation, there is no liability.\n\nCommon carriers are held to a very high degree of care, but they are not strictly liable. Boarding a ship knowing of a rough voyage does not constitute an assumption of the risk of lacking statutorily mandated safety equipment."
    },
    {
        id: 13,
        topic: "Battery / Mental Illness",
        fp: "Peavey was walking peacefully along a public street when he encountered Dorwin, whom he had never seen before. Without provocation or warning, Dorwin picked up a rock and struck Peavey with it. It was later established that Dorwin was mentally ill and suffered recurrent hallucinations.",
        q: "If Peavey asserts a claim against Dorwin based on battery, which of the following, if supported by evidence, will be Dorwin's best defense?",
        opts: [
            "Dorwin did not understand that his act was wrongful.",
            "Dorwin did not desire to cause harm to Peavey.",
            "Dorwin did not know that he was striking a person.",
            "Dorwin thought Peavey was about to attack him."
        ],
        ans: 2,
        exp: "Battery requires the intentional infliction of a harmful or offensive bodily contact. Generally, an insane or mentally ill person is capable of forming the intent to commit an intentional tort, and mental illness is not a defense if the actor intended the physical contact. However, if Dorwin's hallucinations were so severe that he did not even know he was striking a human being (e.g., he thought he was striking a tree or a demon), then he lacked the specific intent required to commit a battery upon a person.\n\nNot understanding that an act is wrongful, lacking the desire to cause harm (as long as the contact itself was intended), and holding an unreasonable, hallucination-induced belief of self-defense do not negate the intent element of battery in tort law."
    },
    {
        id: 14,
        topic: "Strict Products Liability / Retailer Liability",
        fp: "A water pipe burst in the basement of Supermart, a grocery store, flooding the basement and damaging cases of canned goods on the floor. The plumbing contractor's workmen, in repairing the leak, knocked over several stacks of canned goods in cases, denting the cans. After settling its claims against the landlord for the water leak and against the plumbing contractor for the damage done by his workmen, Supermart put the goods on special sale.\n\nFour weeks later Dotty was shopping in Supermart. Several tables in the market were covered with assorted canned foods, all of which were dirty and dented. A sign on each of the tables read: \"Damaged Cans—Half Price.\"\n\nDotty was having Guest for dinner that evening and purchased two dented cans of tuna, packed by Canco, from one of the tables displaying the damaged cans. Before Guest arrived, Dotty prepared a tuna casserole which she and Guest ate. Both became ill and the medical testimony established that the illness was caused by the tuna's being unfit for consumption. The tuna consumed by Dotty and Guest came from the case that was at the top of one of the stacks knocked over by the workmen. The tuna in undamaged cans from the same Canco shipment was fit for consumption.",
        q: "If Guest asserts a claim against Dotty, Dotty most likely will",
        opts: [
            "be held strictly liable in tort for serving spoiled tuna.",
            "be held liable only if she were negligent.",
            "not be held liable unless her conduct was in reckless disregard of the safety of Guest.",
            "not be held liable, because Guest was a social visitor."
        ],
        ans: 1,
        exp: "Strict products liability applies only to commercial suppliers who are engaged in the business of selling products of the kind that caused the injury. Dotty is a private individual preparing a meal for a social guest in her home, not a commercial seller of tuna casseroles. Therefore, she cannot be held strictly liable. To be liable to her guest, the guest must prove that Dotty acted negligently (e.g., that she knew or should have known the deeply dented, dirty cans posed an unreasonable health risk and served them anyway).\n\nA host generally owes a duty of reasonable care to social guests (licensees or invitees depending on the jurisdiction) regarding activities and known concealed dangers, so she could be liable if negligent, making \"only if she were negligent\" the most accurate statement."
    },
    {
        id: 15,
        topic: "Proximate Cause / Continuing Risk",
        fp: "While driving at a speed in excess of the statutory limit, Dant negligently collided with another car, and the disabled vehicles blocked two of the highway's three northbound lanes. When Page approached the scene two minutes later, he slowed his car to see if he could help those involved in the collision. As he slowed, he was rear-ended by a vehicle driven by Thomas. Page, who sustained damage to his car and was seriously injured, brought an action against Dant to recover damages. The jurisdiction adheres to the traditional common-law rules pertaining to contributory negligence.",
        q: "If Dant moves to dismiss the action for failure to state a claim upon which relief may be granted, should the motion be granted?",
        opts: [
            "Yes, because it was Thomas, not Dant, who collided with Page's car and caused Page's injuries.",
            "Yes, if Page could have safely passed the disabled vehicles in the traffic lane that remained open.",
            "No, because a jury could find that Page's injury arose from a risk that was a continuing consequence of Dant's negligence.",
            "No, because Dant was driving in excess of the statutory limit when he negligently caused the first accident"
        ],
        ans: 2,
        exp: "A negligent defendant is liable for the foreseeable consequences of their negligence. By negligently causing a collision that blocked multiple lanes of a highway, Dant created a continuing, foreseeable risk that approaching drivers (like Page) would have to suddenly slow down or stop, and consequently might be rear-ended by other inattentive drivers (like Thomas). Because this subsequent collision was a reasonably foreseeable result of the dangerous condition created by Dant, a jury could find that Dant's negligence was a proximate cause of Page's injuries.\n\nThe fact that Thomas's vehicle was the direct physical cause does not break the chain of proximate causation, as foreseeable intervening acts are not superseding causes. Even if Page could have safely passed, his decision to slow down and offer assistance is a foreseeable response under the rescue doctrine."
    },
    {
        id: 16,
        topic: "Trespass to Land",
        fp: "David built in his backyard a garage that encroached two feet across the property line onto property owned by his neighbor, Prudence. Thereafter, David sold his property to Drake. Prudence was unaware, prior to David's sale to Drake, of the encroachment of the garage onto her property. When she thereafter learned of the encroachment, she sued David for damages for trespass.",
        q: "In this action, will Prudence prevail?",
        opts: [
            "No, unless David was aware of the encroachment when the garage was built.",
            "No, because David no longer owns or possesses the garage.",
            "Yes, because David knew where the garage was located, whether or not he knew where the property line was.",
            "Yes, unless Drake was aware of the encroachment when he purchased the property."
        ],
        ans: 2,
        exp: "Trespass to land requires an intentional physical invasion of another's real property. The intent required is simply the intent to enter the particular piece of land, not the intent to trespass or the knowledge that the land belongs to someone else. Because David intentionally built the garage exactly where it was located, he had the requisite intent, even if he made an honest mistake regarding the boundary line.\n\nThe fact that David later sold the property does not absolve him of liability for the initial and continuing trespass he created while he owned it. Drake's awareness or unawareness upon purchasing the property does not affect David's liability for his own tortious act."
    },
    {
        id: 17,
        topic: "Trespass to Land / Intent vs. Negligence",
        fp: "A car driven by Dan entered land owned by and in the possession of Peter, without Peter's permission.",
        q: "Which, if any, of the following allegations, without additional facts, would provide a sufficient basis for a claim by Peter against Dan?\n\nI. Dan intentionally drove his car onto Peter's land.\nII. Dan negligently drove his car onto Peter's land.\nIII. Dan's car damaged Peter's land.",
        opts: [
            "I only.",
            "III only.",
            "I, II, or III.",
            "Neither I, nor II, nor III."
        ],
        ans: 0,
        exp: "An action for intentional trespass to land does not require proof of actual damages; the invasion of the right to exclusive possession is sufficient to support a claim for nominal damages. Therefore, alleging that Dan intentionally drove onto the land (Statement I) is sufficient to state a claim.\n\nIn contrast, an action for negligent entry onto land requires proof of actual damages. Statement II merely alleges negligent entry without alleging damages, so it is insufficient on its own. Statement III alleges damage but does not allege fault (intent, negligence, or strict liability activity), so it is also insufficient on its own. Thus, only Statement I provides a sufficient, independent basis for a claim."
    },
    {
        id: 18,
        topic: "Firefighter's Rule",
        fp: "Daniel and a group of his friends are fanatical basketball fans who regularly meet at each others' homes to watch basketball games on television. Some of the group are fans of team A, and others are fans of team B. When the group has watched televised games between these two teams, fights sometimes have broken out among the group. Despite this fact, Daniel invited the group to his home to watch a championship game between teams A and B.\n\nDuring the game, Daniel's guests became rowdy and antagonistic. Fearing that they would begin to fight, and that a fight would damage his possessions, Daniel asked his guests to leave. They refused to go and soon began to fight. Daniel called the police, and Officer was sent to Daniel's home. Officer sustained a broken nose in his efforts to stop the fighting.\n\nOfficer brought an action against Daniel alleging that Daniel was negligent in inviting the group to his house to watch this championship game. Daniel has moved to dismiss the complaint.",
        q: "The best argument in support of this motion would be that",
        opts: [
            "A rescuer injured while attempting to avert a danger cannot recover damages from the endangered person.",
            "A police officer is not entitled to a recovery based upon the negligent conduct that created the need for the officer's professional intervention.",
            "As a matter of law, Daniel's conduct was not the proximate cause of Officer's injury.",
            "Daniel did not owe Officer a duty to use reasonable care, because Officer was a mere licensee on Daniel's property."
        ],
        ans: 1,
        exp: "Under the common-law \"Firefighter's Rule\" (which generally applies to police officers as well), emergency professionals cannot recover damages in tort for injuries caused by the very negligence that created the emergency requiring their presence. Because the officer was injured by the specific hazard (a fight) that he was professionally summoned to resolve, the rule bars his recovery against Daniel for negligently creating the situation.\n\nThe rescue doctrine generally allows rescuers to recover, making A incorrect. Daniel's invitation of known brawlers could legally be considered a proximate cause of the fight, making C incorrect. A police officer acting in their official capacity is typically granted the status of an invitee or a special status requiring warning of hidden dangers, making D incorrect."
    },
    {
        id: 19,
        topic: "Assault / Imminent Apprehension",
        fp: "A host pointed an unloaded revolver at her guest, threatening to shoot him. The guest knew that the revolver was not loaded, and that the ammunition for the revolver was stored in a locked basement closet, two stories below where the two were then standing.",
        q: "In an action brought by the guest against the host for assault, will the guest be likely to prevail?",
        opts: [
            "No, because the host did not intend to shoot her guest.",
            "No, because the host did not put her guest in apprehension of an imminent contact.",
            "Yes, because the ammunition was accessible to the host.",
            "Yes, because the host threatened her guest with a revolver."
        ],
        ans: 1,
        exp: "Assault is the intentional causing of an apprehension of an imminent harmful or offensive contact. The plaintiff must actually experience reasonable apprehension of an *imminent* contact. Because the guest knew the gun was unloaded and that the ammunition was far away and locked up, the guest could not have reasonably apprehended that he was about to be shot immediately.\n\nIntent to shoot is not required for assault; intent to cause apprehension is sufficient. However, the lack of imminent apprehension by the plaintiff defeats the claim."
    },
    {
        id: 20,
        topic: "Municipal Liability / Duty of Care",
        fp: "In City of State Y, Maple Street is a local public thoroughfare, designated as a one-way street for northbound traffic. Pine Street is a public thoroughfare, designated as a one-way street for east-bound traffic. Maple and Pine Streets intersect at right angles. The intersection is controlled by traffic lights. There are two sets of lights, one at the northeast corner and one at the northwest corner, for traffic on Maple Street. There are two sets of lights, one at the northeast corner and one at the southeast corner, for traffic on Pine Street.\n\nTrucker was making a delivery to a market on the east side of Maple Street, just north of its intersection with Pine Street. There being insufficient space for his truck and enclosed trailer, he parked it with the rear of the trailer extending entirely across the crosswalk on the north side of the intersection. The height of the trailer was such that it entirely obscured the traffic light on the northeast corner from the view of traffic moving east on Pine Street. Unknown to Trucker, the traffic light at the southeast corner was not functioning, because a collision seventy-two hours earlier had knocked down the pole from which the light was suspended.\n\nVisitor, on his first trip to City, was driving east on Pine Street. Not seeing any traffic light or pole, he entered the intersection at a time when the light was red for eastbound traffic and green for northbound traffic. Driver, proceeding north on Maple Street and seeing the green light, entered the intersection without looking for any cross traffic and struck Visitor's car. Driver received personal injuries, and Visitor's car was damaged severely as a result of the impact.\n\nStatutes of State Y make it a misdemeanor (1) to park a motor vehicle so that any part projects into a crosswalk and (2) to enter an intersection contrary to a traffic signal.",
        q: "If Driver asserts a claim against City, the theory on which he has the best chance of prevailing is that City",
        opts: [
            "is strictly liable for harm caused by a defective traffic signal.",
            "was negligent in not replacing the broken pole within seventy-two hours.",
            "had an absolute duty to maintain installed traffic signals in good operating order.",
            "created a dangerous trap by not promptly replacing the broken pole."
        ],
        ans: 1,
        exp: "Municipalities generally owe a duty to exercise reasonable care to keep public roadways in a reasonably safe condition for travel. Once a city assumes the duty of installing a traffic light, it has a duty to maintain it and to repair it within a reasonable time after it breaks or is knocked down. A jury could find that seventy-two hours (three days) is an unreasonable amount of time to leave an intersection without a functioning traffic signal, constituting negligence that proximately contributed to the collision.\n\nMunicipalities are not subject to strict liability or an \"absolute duty\" regarding traffic signals; they are only held to a standard of reasonable care. \"Dangerous trap\" is a term of art generally applied to concealed hazards for licensees or trespassers, not the standard negligence theory for municipal road maintenance."
    },
    {
        id: 21,
        topic: "Negligence / Foreseeability",
        fp: "Del's sporting goods shop was burglarized by an escaped inmate from a nearby prison. The inmate stole a rifle and bullets from a locked cabinet. The burglar alarm at Del's shop did not go off because Del had negligently forgotten to activate the alarm's motion detector.\n\nShortly thereafter, the inmate used the rifle and ammunition stolen from Del in a shooting spree that caused injury to several people, including Paula.",
        q: "If Paula sues Del for the injury she suffered, will Paula prevail?",
        opts: [
            "Yes, if Paula's injury would have been prevented had the motion detector been activated.",
            "Yes, because Del was negligent in failing to activate the motion detector.",
            "No, because the storage and sale of firearms and ammunition is not an abnormally dangerous activity.",
            "No, unless there is evidence of circumstances suggesting a high risk of theft and criminal use of firearms stocked by Del."
        ],
        ans: 3,
        exp: "Generally, an actor is not liable for the intentional criminal acts of third parties unless the actor's negligence created a foreseeable opportunity for the crime to occur. Del securely locked the guns in a cabinet inside a locked store. Unless there were special circumstances making it highly foreseeable that his specific store was at an elevated risk of theft and subsequent criminal use of the weapons, his failure to set the alarm would not render him the proximate cause of the independent, superseding criminal act of the escaped inmate.\n\nBut-for causation (Option A) and breach of a minor duty (Option B) are insufficient to establish liability if the intervening criminal act was an unforeseeable superseding cause. Option C is factually true but does not fully address the ordinary negligence standard that governs this scenario."
    },
    {
        id: 22,
        topic: "Defamation / Public Official",
        fp: "Mayor Smith was running for re-election. A local newspaper published an article claiming Mayor Smith embezzled city funds. The newspaper failed to properly verify its sources, constituting negligence, but honestly believed the story was true and did not harbor serious doubts about its accuracy. The article severely damaged Mayor Smith's reputation.",
        q: "Will Mayor Smith prevail in a defamation suit against the newspaper?",
        opts: [
            "Yes, because the newspaper acted negligently in failing to verify its sources.",
            "Yes, because embezzling city funds is a crime, making it defamation per se.",
            "No, because the newspaper did not act with actual malice.",
            "No, because the statement was an opinion."
        ],
        ans: 2,
        exp: "As a public official, the plaintiff must prove that the media defendant acted with \"actual malice\"—meaning the defendant published the statement with knowledge of its falsity or with reckless disregard for the truth. Negligence (failing to verify sources) is insufficient to establish actual malice. Because the newspaper honestly believed the story and did not harbor serious doubts about its accuracy, it did not act with actual malice, and Mayor Smith cannot recover."
    },
    {
        id: 23,
        topic: "Strict Products Liability / Retailer",
        fp: "A consumer purchased a brand-new blender from a retail appliance store. The blender had a manufacturing defect in its wiring that caused it to spark and catch fire the first time it was plugged in. The fire caused severe burns to the consumer's hand. The retail store had no way of discovering the internal wiring defect during a routine inspection.",
        q: "Can the consumer recover against the retail appliance store in a strict products liability action?",
        opts: [
            "Yes, because the retailer sold a defective product that caused physical harm.",
            "Yes, but only if the retailer was negligent in failing to inspect the blender.",
            "No, because the retailer did not manufacture the blender.",
            "No, because the consumer assumed the risk of being burned when using electrical appliances."
        ],
        ans: 0,
        exp: "In strict products liability, any commercial seller in the chain of distribution, including a retailer, is strictly liable for selling a dangerously defective product that causes physical harm, regardless of fault or the inability to discover the defect. The fact that the retailer did not manufacture the product or act negligently does not shield them from strict liability."
    },
    {
        id: 24,
        topic: "Negligence / Res Ipsa Loquitur",
        fp: "A pedestrian was walking on a public sidewalk next to a warehouse. A heavy grand piano suddenly fell from a third-story window of the warehouse, striking the pedestrian. The warehouse is exclusively owned and operated by a moving company, and only its employees have access to the third floor. The pedestrian has no direct evidence of what caused the piano to fall.",
        q: "Under which doctrine is the pedestrian most likely to establish a prima facie case of negligence against the moving company?",
        opts: [
            "Negligence per se.",
            "Res ipsa loquitur.",
            "Strict liability for abnormally dangerous activities.",
            "Assumption of risk."
        ],
        ans: 1,
        exp: "Res ipsa loquitur applies when the event is one that ordinarily does not occur without negligence, and the instrumentality causing the injury was in the exclusive control of the defendant. Grand pianos do not normally fall from windows absent negligence, and the moving company had exclusive control of the premises and its employees. This doctrine permits an inference of negligence allowing the plaintiff to survive a motion to dismiss."
    },
    {
        id: 25,
        topic: "Battery / Transferred Intent",
        fp: "Albert was furious with his neighbor, Bob, over a boundary dispute. Seeing Bob standing in his yard, Albert picked up a heavy rock and threw it directly at Bob, intending to strike him. Bob saw the rock coming and ducked. The rock missed Bob entirely but struck Charlie, a delivery driver who was walking up the driveway. Charlie suffered a severe concussion.",
        q: "Will Charlie prevail in a battery action against Albert?",
        opts: [
            "No, because Albert did not intend to strike Charlie.",
            "No, because Charlie was a trespasser on Bob's property.",
            "Yes, because Albert intended to cause a harmful contact with Bob, and the intent transfers to Charlie.",
            "Yes, under the doctrine of res ipsa loquitur."
        ],
        ans: 2,
        exp: "Under the doctrine of transferred intent, if a defendant intends to commit an intentional tort (such as battery) against one person but accidentally commits it against a different person, the intent transfers to the actual victim. Albert intended to commit a battery against Bob, so his intent to cause a harmful or offensive contact transfers to Charlie, making him fully liable for the battery against Charlie."
    }
];