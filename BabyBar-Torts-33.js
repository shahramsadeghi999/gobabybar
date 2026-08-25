const examData = [
    {
        id: 1,
        topic: "Joint and Several Liability / Contribution",
        fp: "While driving his car, Plaintiff sustained injuries in a three-car collision. Plaintiff sued the drivers of the other two cars, D-l and D-2, and each defendant crossclaimed against the other for contribution. The jurisdiction has adopted a rule of pure comparative negligence and allows contribution based upon proportionate fault. The rule of joint-and-several liability has been retained.\n\nThe jury has found that Plaintiff sustained damages in the amount of $100,000, and apportioned the causal negligence of the parties as follows: Plaintiff 40%, D-I 30%, and D-2 30%.",
        q: "How much, if anything, can Plaintiff collect from D-I, and how much, if anything, can D-1 then collect from D-2 in contribution?",
        opts: [
            "Nothing, and then D-I can collect nothing from D-2.",
            "$30,000, and then D-l can collect nothing from D-2.",
            "$40,000, and then D-I can collect $10,000 from D-2.",
            "$60,000, and then D-I can collect $30,000 from D-2."
        ],
        ans: 3,
        exp: "Choice (D) is correct. In a pure comparative negligence jurisdiction, the plaintiff is allowed to recover even if his fault is greater than that of the defendant. The plaintiff's recovery is reduced by a proportion equal to the ratio between his own negligence and the total negligence contributing to the accident. Under the rule of joint-and-several liability, if two defendants acted separately to produce an indivisible harm to the plaintiff, then each can be required to pay 100% of the plaintiff's damages. A defendant who is required to pay more than her fair share can recover the balance from the other. So here, Plaintiff can collect the full $60,000 (the total damage for which Plaintiff himself is not responsible) from either defendant; the defendant who pays the whole $60,000 may in turn collect from the other that portion representing the overpayment. Since D-1 has paid $60,000 when his fair share was only $30,000, he can recover the $30,000 overpayment from D-2.\n\n(A) is wrong because, in a pure comparative negligence jurisdiction, the plaintiff is allowed to recover even if he is at fault. (B) is wrong because it does not allow for Plaintiff to collect the full amount of damages owed to him ($60,000) from one defendant. (C) is wrong because it limits Plaintiff's recovery to the amount of his own negligence."
    },
    {
        id: 2,
        topic: "Joint and Several Liability / Contribution",
        fp: "The plaintiff sustained personal injuries in a three-car collision caused by the concurrent negligence of the three drivers, who consisted of the plaintiff, Donald, and Drew. In the plaintiff's action for damages against Donald and Drew, the jury apportioned the negligence 30% to the plaintiff, 30% to Donald, and 40% to Drew. The plaintiff's total damages were $100,000. Assume that a state statute provides for a system of pure comparative negligence, joint-and-several liability of concurrent tortfeasors, and contribution based upon proportionate fault.",
        q: "If the plaintiff chooses to execute against Donald alone, she will be entitled to collect at most",
        opts: [
            "$70,000 from Donald, and then Donald will be entitled to collect $40,000 from Drew.",
            "$30,000 from Donald, and then Donald will be entitled to collect $10,000 from Drew.",
            "$30,000 from Donald, and then Donald will be entitled to collect nothing from Drew.",
            "nothing from Donald, because Donald's percentage of fault is not greater than that of the plaintiff."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Under the rule of joint-and-several liability, if two or more defendants are joint tortfeasors, the plaintiff may sue and collect from either of them or all of them. In a comparative fault system, the plaintiff's recovery is reduced by a proportion equal to the ratio between her own fault and the total fault contributing to the accident. If the plaintiff's total damages were $100,000, her damages will be reduced by 30% (her percentage of fault) for a total of $70,000. Where the negligence has been apportioned between the two defendants, yet they were joint tortfeasors, the plaintiff may collect the total amount of damages from one defendant and then that defendant may later seek reimbursement (\"contribution\") from the other defendant for his share of the damages award. So the plaintiff can collect $70,000 from Donald, but Donald will then be able to collect $40,000 from Drew for the latter's share of the damages.\n\n(B) and (C) are wrong because they allow Donald to be liable for only his proportion of the damages, which is not the case in a jurisdiction applying joint-and-several liability. (D) is wrong because, in a pure comparative fault system, the plaintiff is allowed to recover even if his fault is greater than or equal to that of the defendant."
    },
    {
        id: 3,
        topic: "Indemnity",
        fp: "David owned a shotgun that he used for hunting. David knew that his old friend, Mark, had become involved with a violent gang that recently had a shoot-out with a rival gang. David, who was going to a farm to hunt quail, placed his loaded shotgun on the back seat of his car. On his way to the farm, David picked up Mark to give him a ride to a friend's house. After dropping off Mark at the friend's house, David proceeded to the farm, where he discovered that his shotgun was missing from his car. Mark had taken the shotgun and, later in the day, Mark used it to shoot Paul, a member of the rival gang. Paul was severely injured.\n\nPaul recovered a judgment for his damages against David, as well as Mark, on the ground that David was negligent in allowing Mark to obtain possession of the gun, and was therefore liable jointly and severally with Mark for Paul's damages. The jurisdiction has a statute that allows contribution based upon proportionate fault and adheres to the traditional common-law rules on indemnity.",
        q: "If David fully satisfies the judgment, David then will have a right to recover from Mark",
        opts: [
            "indemnity for the full amount of the judgment, because Mark was an intentional tortfeasor.",
            "contribution only, based on comparative fault, because David himself was negligent.",
            "one-half of the amount of the judgment.",
            "nothing, because David's negligence was a substantial proximate cause of the shooting."
        ],
        ans: 0,
        exp: "Choice (A) is correct. If there is a great difference in the degree of culpability of the defendants, the court will shift the financial responsibility for a tort from the less-culpable to the more-culpable one, by the use of the doctrine of indemnity. In this case, where Mark was an intentional tortfeasor (causing severe injury with a gun) and David was merely a negligent one (in allowing Mark to obtain possession of the gun), David will have the right to indemnity, i.e., the right to recover from Mark the full amount of the judgment that David paid.\n\n(B) is wrong because David will be indemnified for the full amount of damages he paid, because of the great difference in the degree of culpability of the defendants. (C) is wrong because it incorrectly implies that the parties are equally culpable and it does not recognize that David will be indemnified for the full amount. (D) is wrong because, despite the fact that David's negligence was a proximate cause of the injury, David will be indemnified by Mark for the full amount of damages."
    },
    {
        id: 4,
        topic: "Negligent Infliction of Emotional Distress / Dead Bodies",
        fp: "Ann's three-year-old daughter, Janet, was killed in an automobile accident. At Ann's direction, Janet's body was taken to a mausoleum for interment. Normally, the mausoleum's vaults are permanently sealed with marble plates secured by \"tamper-proof\" screws. After Janet's body was placed in the mausoleum, however, only a fiberglass panel secured by caulking compound covered her vault. About a month later, Janet's body was discovered in a cemetery located near the mausoleum. It had apparently been left there by vandals who had taken it from the mausoleum.\n\nAs a result of this experience, Ann suffered great emotional distress.",
        q: "If Ann sues the mausoleum for the damages arising from her emotional distress, will she prevail?",
        opts: [
            "No, because Ann experienced no threat to her own safety.",
            "No, unless the mausoleum's behavior was extreme and outrageous.",
            "Yes, if the mausoleum failed to use reasonable care to safeguard the body.",
            "Yes, unless Ann suffered no physical harm as a consequence of her emotional distress."
        ],
        ans: 2,
        exp: "Choice (C) is correct. Most courts allow recovery for pure emotional distress, even if unaccompanied by bodily harm, where the defendant has negligently handled the corpse of the plaintiff's relative. This answer choice correctly applies this rule.\n\n(A) is wrong because, although it is generally true that a plaintiff who does not suffer any physical impact or even threat to her own safety can't recover in negligence for emotional distress, there are exceptions. One exception is where the plaintiff has suffered emotional distress due to the defendant's mishandling of a corpse belonging to the plaintiff's close relative.\n\n(B) is wrong because, although it is necessary to show that the defendant's behavior was extreme and outrageous in a suit for intentional infliction of emotional distress, this is not required to be proven in a case of negligent infliction of emotional distress.\n\n(D) is wrong because a claim for negligent mishandling of a corpse is one of the few special situations where courts have allowed damages for pure emotional suffering despite the fact that the plaintiff has suffered no physical harm."
    },
    {
        id: 5,
        topic: "Negligent Infliction of Emotional Distress / Dead Bodies",
        fp: "John's father, Jeremiah, died in Hospital. Hospital maintains a morgue with refrigerated drawers a bit larger than a human body. Jeremiah's body was placed in such a drawer awaiting pickup by a mortician. Before the mortician called for the body, a Hospital orderly placed two opaque plastic bags in the drawer with Jeremiah's body. One bag contained Jeremiah's personal effects, and the other contained an amputated leg from some other Hospital patient. It is stipulated that Hospital was negligent to allow the amputated leg to get into Jeremiah's drawer. The mortician delivered the two opaque plastic bags to John, assuming both contained personal effects. John was shocked when he opened the bag containing the amputated leg. John sued Hospital to recover for his emotional distress. At the trial, John testified that the experience had been extremely upsetting, that he had had recurring nightmares about it, and that his family and business relationships had been adversely affected for a period of several months. He did not seek medical or psychiatric treatment for his emotional distress.",
        q: "Who should prevail?",
        opts: [
            "John, because of the sensitivity people have regarding the care of the bodies of deceased relatives.",
            "John, because hospitals are strictly liable for mishandling dead bodies.",
            "Hospital, because John did not require medical or psychiatric treatment.",
            "Hospital, because John suffered no bodily harm."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Most courts allow recovery for negligent infliction of emotional distress when there has been a negligent mishandling of a corpse. The fact pattern indicates that the Hospital was negligent in its care of the body. Where the facts are such that it can confidently be believed that there has been actual mental distress (i.e., where mental distress would be the normal human reaction), courts ignore the ban on recovery for purely mental harm in a claim for negligent infliction of emotional distress.\n\n(B) is wrong because it misstates the law-neither hospitals nor any other class of defendant is strictly liable for mishandling dead bodies. What's special about dead bodies is that when they're negligently mishandled, a close relative of the body can recover for emotional distress that's not accompanied by bodily harm.\n\n(C) is wrong because, in the case of a claim for negligent mishandling of a corpse, it is not necessary that the plaintiff seek treatment for his distress. Courts are confident in inferring that a close relative of the corpse would indeed have suffered actual mental distress.\n\n(D) is wrong because a claim for negligent mishandling of a corpse is a situation where courts have allowed damages for pure emotional suffering despite the fact that the plaintiff has suffered no physical harm."
    },
    {
        id: 6,
        topic: "Negligent Infliction of Emotional Distress / At Risk Plaintiff",
        fp: "Palko is being treated by a physician for asbestosis, an abnormal chest condition that was caused by his on-the-job handling of materials containing asbestos. His physician has told him that the asbestosis is not presently cancerous, but that it considerably increases the risk that he will ultimately develop lung cancer. Palko brought an action for damages, based on strict product liability, against the supplier of the materials that contained asbestos. The court in this jurisdiction has ruled against recovery of damages for negligently inflicted emotional distress in the absence of physical harm.",
        q: "If the supplier is subject to liability to Palko for damages, should the award include damage for emotional distress he has suffered arising from his knowledge of the increased risk that he will develop lung cancer?",
        opts: [
            "No, because Palko's emotional distress did not cause his physical condition.",
            "No, unless the court in this jurisdiction recognizes a cause of action for an increased risk of cancer.",
            "Yes, because the supplier of a dangerous product is strictly liable for the harm it causes.",
            "Yes, because Palko's emotional distress arises from bodily harm caused by his exposure to asbestos."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Palko is an at-risk plaintiff, one who by virtue of his exposure to a particular substance, has suffered an increased likelihood of a particular disease. Even in jurisdictions disallowing recovery for pure emotional distress (unaccompanied by bodily harm), a plaintiff may recover for emotional distress as an \"add on\" if the plaintiff has also suffered bodily harm. That's true here-Palko's asbestosis is bodily harm, so he can add recovery for emotional distress due to the increased cancer risk on top of it to his recovery from the already-existing bodily harm from asbestosis.\n\n(A) is wrong because it is not required that the emotional distress be the cause of a physical condition; physical harm can cause compensable emotional distress. (B) is wrong because virtually all courts allow the injured plaintiff to \"tack on\" a recovery for emotional distress due to the injury once they have already suffered bodily harm. (C) is wrong because it misses the issue of what constitutes compensable harm."
    },
    {
        id: 7,
        topic: "Negligence / Pure Economic Loss",
        fp: "Star, who played the lead role in a television soap opera, was seriously injured in an automobile accident caused by Danton's negligent driving. As a consequence of Star's injury, the television series was canceled, and Penn, a supporting actor, was laid off.",
        q: "In an action against Danton, can Penn recover for his loss of income attributable to the accident?",
        opts: [
            "Yes, because Danton's negligence was the cause in fact of Penn's loss.",
            "Yes, unless Penn failed to take reasonable measures to mitigate his loss.",
            "No, unless Danton should have foreseen that by injuring Star he would cause harm to Penn.",
            "No, because Danton's liability does not extend to economic loss to Penn that arises solely from physical harm to Star."
        ],
        ans: 3,
        exp: "Choice (D) is correct. The general rule is that even if D negligently causes physical harm or property harm to A, D will not be liable for pure economic harm to B, where the latter harm stems from the harm to A. There is an exception if B was in the zone of physical danger, or if B watched physical harm to A, at least where B and A are close relatives. But here, neither exception applies. So the default rule applies: Since Penn was never placed at physical risk, and didn't witness the physical risk or injury to Star, Penn can't recover for his pure economic loss. (The theory behind this principle is that if such pure-economic-loss recovery were allowed, negligence liability would extend too far, and lawsuit costs would go through the roof.)\n\n(A) and (B) are wrong, because neither recognizes the key issue of liability for pure economic harm. (C) is wrong because it cites an irrelevant factor; even if Danton had been able to foresee the harm to Penn, Danton would still not be liable because the harm is purely economic."
    },
    {
        id: 8,
        topic: "Premises Liability / Duty to Trespassing Children",
        fp: "A bright nine-year-old child attended a day care center after school. The day care center was located near a man-made duck pond on the property of a corporation. During the winter, the pond was used for ice skating when conditions were suitable. At a time when the pond was only partially frozen, the child sneaked away from the center and walked out onto the ice covering the pond. The ice gave way, and the child fell into the cold water. He suffered shock and would have drowned had he not been rescued by a passerby. At the time of the incident, the pond was clearly marked with signs that stated, \"THIN ICE-NO SKATING.\" When the child left the day care center, the center was staffed with a reasonable number of qualified personnel, and the center's employees were exercising reasonable care to ensure that the children in their charge did not leave the premises. The jurisdiction follows a rule of pure comparative negligence.",
        q: "In a suit brought on the child's behalf against the corporation, who is likely to prevail?",
        opts: [
            "The child, because the corporation owes a duty to keep its premises free of dangerous conditions.",
            "The child, because the pond was an attractive nuisance.",
            "The corporation, because the danger of thin ice may reasonably be expected to be understood by a nine-year-old child.",
            "The corporation, because the day care center had a duty to keep the child off the ice."
        ],
        ans: 2,
        exp: "Choice (C) is correct. As a general rule, a landowner owes no duty to a trespasser to make her land safe. The exception that comes closest to applying is that an owner may have a duty of reasonable care to a trespassing child, if the owner has maintained an \"attractive nuisance.\" But this exception does not apply here. For a condition on land to be considered an attractive nuisance, there must be evidence that the children because of their youth do not discover the condition or realize the risk involved. A nine-year-old child is generally expected to understand the danger of thin ice, and the pond was clearly marked.\n\n(A) is wrong because the duty of a landowner to trespassers exists only where the owner has reason to know that trespassers are in dangerous proximity to the condition and that they are unlikely to appreciate the risk. Even then, the duty is only to exercise reasonable care to warn trespassers of the danger, which was done here.\n\n(B) is wrong because the condition here was not an attractive nuisance. (D) is wrong because, while it correctly states that the corporation will prevail, it misstates the legal basis for this conclusion. If A is negligent as to a risk, the fact that B was also negligent as to the same risk is unlikely to save A from liability."
    },
    {
        id: 9,
        topic: "Premises Liability / Duty to Discovered Trespassers",
        fp: "Prad entered Drug Store to make some purchases. As he was searching the aisles for various items, he noticed a display card containing automatic pencils. The display card was on a high shelf behind a cashier's counter. Prad saw a sign on the counter that read, \"No Admittance, Employees Only.\" Seeing no clerks in the vicinity to help him, Prad went behind the counter to get a pencil. A clerk then appeared behind the counter and asked whether she could help him. He said he just wanted a pencil and that he could reach the display card himself. The clerk said nothing further. While reaching for the display card, Prad stepped sideways into an open shaft and fell to the basement, ten feet below. The clerk knew of the presence of the open shaft, but assumed incorrectly that Prad had noticed it.\n\nPrad sued Drug Store to recover damages for the injuries he sustained in the fall. The jurisdiction has adopted a rule of pure comparative negligence, and it follows traditional common-law rules governing the duties of a land possessor.",
        q: "Will Prad recover a judgment against Drug Store?",
        opts: [
            "No, because Prad was a trespasser.",
            "No, unless Prad's injuries resulted from the defendant's willful or wanton misconduct.",
            "Yes, because the premises were defective with respect to a public invitee.",
            "Yes, if the clerk had reason to believe that Prad was unaware of the open shaft."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Normally, a shopper in a store would be considered an invitee. A visitor who is an invitee as to one part of the premises may become a trespasser if he goes beyond the part of the land held open to him. When Prad went behind the counter despite seeing the sign \"No Admittance, Employees Only,\" he might be found to have been a trespasser. But even if that's true, when the clerk saw him in that position, he was a \"discovered trespasser,\" and as such the store had an obligation to warn him of dangers known to it and likely unknown to Prad. Therefore, if the clerk had reason to believe that Prad was unaware of the open shaft (and given that the facts tell us the clerk knew about the open shaft), Drug Store will be liable for the clerk's failure to warn Prad of the danger.\n\n(A) is wrong because Prad was a discovered trespasser (or a licensee) when he was behind the cashier's counter, triggering a duty to warn of known hidden dangers. (B) is wrong because liability arose from breach of the owner's duty to warn Prad of a danger that it should reasonably anticipate that Prad may not discover; willful or wanton conduct is not required. (C) is wrong because Prad was not a public invitee in the employee-only area."
    },
    {
        id: 10,
        topic: "Premises Liability / Attractive Nuisance",
        fp: "Davis has a small trampoline in his backyard which, as he knows, is commonly used by neighbor children as well as his own. The trampoline is in good condition, is not defective in any way, and normally is surrounded by mats to prevent injury if a user should fall off. Prior to leaving with his family for the day, Davis leaned the trampoline up against the side of the house and placed the mats in the garage.\n\nWhile the Davis family was away, Philip, aged 11, a new boy in the neighborhood, wandered into Davis's yard and saw the trampoline. Philip had not previously been aware of its presence, but, having frequently used a trampoline before, he decided to set it up, and started to jump. He lost his balance on one jump and took a hard fall on the bare ground, suffering a serious injury that would have been prevented by the mats.\n\nAn action has been brought against Davis on Philip's behalf to recover damages for the injuries Philip sustained from his fall. In this jurisdiction, the traditional common-law rules pertaining to contributory negligence have been replaced by a pure comparative negligence rule.",
        q: "In his action against Davis, will Philip prevail?",
        opts: [
            "No, if children likely to be attracted by the trampoline would normally realize the risk of using it without mats.",
            "No, if Philip failed to exercise reasonable care commensurate with his age, intelligence, and experience.",
            "No, because Philip entered Davis's yard and used the trampoline without Davis's permission.",
            "No, because Philip did not know about the trampoline before entering Davis's yard and thus was not \"lured\" onto the premises."
        ],
        ans: 0,
        exp: "Choice (A) is correct. A trespassing child may sue for harm suffered from an injurious condition on the defendant's land. The only plausible basis for Philip to recover would be the special rule under which a landowner will be liable for an artificial condition that is highly dangerous to trespassing children. The requirements set forth in Rest. 2d, § 339 for such liability are that: (1) the place where the condition exists must be one on which children are likely to trespass; (2) there is an unreasonable risk of death or serious bodily harm to such children; (3) the children because of their youth do not discover the condition or don't recognize the risk from it; (4) the utility of maintaining the condition is slight compared with the risks; and (5) the owner fails to exercise reasonable care. Choice (A) correctly addresses requirement (3), that the child, because of his youth, either did not discover the condition or did not realize the danger posed by it.\n\n(B) is wrong because, if Philip failed to exercise reasonable care, this would merely reduce his recovery under pure comparative negligence, but not block it altogether. (C) is wrong because a duty is owed to child trespassers as long as certain requirements are met. (D) is wrong because most modern courts reject the requirement that the child must have been attracted by the particular condition which ends up injuring him (the \"lured\" doctrine)."
    },
    {
        id: 11,
        topic: "Premises Liability / Duty to Licensees",
        fp: "At the trial of an action against Grandmother on behalf of Patrick, the following evidence has been introduced.\n\nGrandson and his friend, Patrick, both aged eight, were visiting at Grandmother's house when, while exploring the premises, they discovered a hunting rifle in an unlocked gun cabinet. They removed it from the cabinet and were examining it when the rifle, while in Grandson's hands, somehow discharged. The bullet struck and injured Patrick. The gun cabinet was normally locked. Grandmother had opened it for dusting several days before the boys' visit, and had then forgotten to relock it. She was not aware that it was unlocked when the boys arrived.",
        q: "If the defendant moves for a directed verdict in her favor at the end of the plaintiff's case, that motion should be",
        opts: [
            "granted, because Grandmother is not legally responsible for the acts of Grandson.",
            "granted, because Grandmother did not recall that the gun cabinet was unlocked.",
            "denied, because a firearm is an inherently dangerous instrumentality.",
            "denied, because a jury could find that Grandmother breached a duty of care she owed to Patrick."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Patrick was a licensee, a person who has the owner's consent to be on the owner's property, but who does not have a business purpose for being there. When the plaintiff is a licensee, the defendant does not have a \"duty to inspect\" for dangers. But if the defendant knows of a dangerous condition, the defendant has a duty to take reasonable precautions to make the premises safe. In this case, a reasonable jury could find that since Grandmother knew of the danger from guns, she had a duty to take reasonable care to keep the cabinet locked.\n\n(A) is wrong because a duty did arise for Grandmother, as owner of the premises and the gun cabinet, to use reasonable care in safeguarding the guns. (B) is wrong because if Grandma did not recall that the gun cabinet was unlocked, this is evidence of her unreasonable behavior. Reasonable care would require that an owner of a gun cabinet be extremely vigilant in making sure that the cabinet is locked. (C) is wrong because it relies on an inappropriate concept for a negligence suit. It's not enough that defendant possessed an inherently dangerous instrumentality; she must have been negligent."
    },
    {
        id: 12,
        topic: "Premises Liability / Duty to Invitees",
        fp: "Supermarket is in a section of town where there are sometimes street fights and where pedestrians are occasionally the victims of pickpockets and muggers. In recognition of the unusual number of robberies in the area, the supermarket posted signs in the store and in its parking lot that read:\nWarning: There are pickpockets and muggers at work in this part of the city. Supermarket is not responsible for the acts of criminals.\n\nOne evening, Lorner drove to Supermarket to see about a special on turkeys that Supermarket was advertising. She decided that the turkeys were too large and left the store without purchasing anything. In the parking lot, she was attacked by an unknown man who raped her and then ran away.",
        q: "If Lorner sues Supermarket, the result should be for the",
        opts: [
            "plaintiff, if Supermarket failed to take reasonable steps to protect customers against criminal attack in its parking lot.",
            "plaintiff, because Supermarket is liable for harm to business invitees on its premises.",
            "defendant, if the warning signs were plainly visible to Lorner.",
            "defendant, because the rapist was the proximate cause of Lorner's injuries."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Grocery store shoppers are invitees-members of the public who come onto land held open to them and who do so for the purpose for which the land is held open. Such people reasonably expect that the premises have been made safe for them, and the owner must exercise reasonable care for the safety of such people. Reasonable care by the owner will typically require that she attempt to exercise control over third persons on the premises. A storekeeper, for instance, will generally be required to take reasonable security measures to prevent attacks or thefts against her customers.\n\n(B) is wrong because Supermarket is liable for harm caused to its invitee only if it has breached a duty of reasonable care to that invitee. Choice (B) asserts a blanket rule of liability. (C) is wrong because Supermarket's duty requires that it use reasonable efforts to control third persons on the premises. Issuing a warning does not necessarily satisfy this duty. (D) is wrong because an event may have multiple proximate causes; so here, the fact that the rapist was a proximate cause of Lorner's injuries doesn't prevent Supermarket's negligence from also being a proximate cause."
    },
    {
        id: 13,
        topic: "Punitive Damages",
        fp: "While driving his open-bed truck with a friend in the open bed, the driver swerved, throwing his friend to the pavement. The friend sustained severe injuries. The friend had often ridden in the open bed of the driver's truck, and on some of those occasions the driver had swerved to frighten his friend. The friend sued the driver to recover both compensatory damages for his injuries and punitive damages.",
        q: "Which cause of action would NOT permit the friend to recover punitive damages?",
        opts: [
            "Assault.",
            "Battery.",
            "Negligence.",
            "Recklessness."
        ],
        ans: 2,
        exp: "Choice (C) is correct because punitive damages are not available in ordinary negligence cases. Since this is the only cause of action listed that would NOT allow punitive damages, it is the best response.\n\n(A) and (B) are wrong because punitive damages are available to victims of intentional torts. (D) is wrong because punitive damages may be available to victims of reckless conduct."
    },
    {
        id: 14,
        topic: "Vicarious Liability / Scope of Employment",
        fp: "Perkins and Morton were passengers sitting in adjoining seats on a flight on Delval Airline. There were many empty seats on the aircraft.\n\nDuring the flight, a flight attendant served Morton nine drinks. As Morton became more and more obviously intoxicated and attempted to engage Perkins in a conversation, Perkins chose to ignore Morton. This angered Morton, who suddenly struck Perkins in the face, giving her a black eye.",
        q: "If Perkins asserts a claim for damages against Delval Airline based on battery, she will",
        opts: [
            "prevail, because she suffered an intentionally inflicted harmful or offensive contact.",
            "prevail, if the flight attendant acted recklessly in continuing to serve liquor to Morton.",
            "not prevail, because Morton was not acting as an agent or employee of Delval Airline.",
            "not prevail, unless she can establish some permanent injury from the contact."
        ],
        ans: 2,
        exp: "Choice (C) is correct. The doctrine of vicarious liability provides that in some special relationships, such as that of employer-employee, the tortious act of an employee may be imputed to his employer. In order for Delval Airline to be liable for the battery perpetrated by Morton, there would have to be such a relationship between Morton and the airline. Since Morton was not acting as an agent or employee of Delval, vicarious liability would not be applied.\n\n(A) is wrong because the fact that Perkins suffered a battery by itself doesn't justify imposing liability on Delval for the battery. (B) is wrong because the airline has not committed battery here. Battery is an intentional tort, so the airline can be liable for that intentional tort only if the airline or someone for whom the airline is directly responsible had the requisite intent to commit a harmful or offensive contact. A reckless mental state on the part of the flight attendant won't suffice for battery. (D) is wrong because the severity of the injury is irrelevant in determining Delval's liability for the conduct of another."
    },
    {
        id: 15,
        topic: "Strict Liability / Wild Animals",
        fp: "A homeowner owned a large poisonous snake, which had been defanged and was kept in a cage. A storm damaged the homeowner's house and the snake's cage, allowing it to escape. During the cleanup after the storm, a volunteer worker came across the snake. The worker tried to run away from the snake and fell, breaking his arm.",
        q: "In a suit by the worker against the homeowner based on strict liability in tort to recover for his injury, will the worker prevail?",
        opts: [
            "No, because the snake's escape was caused by a force of nature.",
            "No, because the worker should have anticipated an injury during his volunteer work.",
            "Yes, because the homeowner did not take adequate precautions to secure the snake.",
            "Yes, because the worker's injury was the result of his fear of the escaped snake."
        ],
        ans: 3,
        exp: "Choice (D) is correct, because an owner of a wild animal or an abnormally dangerous animal is strictly liable for harm caused by that animal's dangerous nature. Part of what makes wild animals dangerous is that third persons who encounter the animal may well experience acute fear, whether that fear is well-founded or not as to the particular animal. Here, even though the snake was defanged, the worker had no reason to know this. Therefore, his injury was caused by a foreseeable aspect of the animal's wild and dangerous nature, namely, its tendency to cause fear of being bitten.\n\n(A) is wrong because owners of dangerous animals are strictly liable even when the harm would not have occurred but for the operation of a force of nature. (B) is wrong because the contributory negligence of the worker would not be a defense to strict liability, and there is nothing to indicate the worker would foresee the risk of a poisonous snake. (C) is wrong because, while this answer correctly states that the worker will prevail, it misstates the legal basis for this conclusion. The owner of a wild animal is strictly liable without regard to whether adequate precautions were taken."
    },
    {
        id: 16,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "A fumigation company was hired to eliminate pests in one of two buildings in a condominium complex that shared a common wall. The owners of the complex told the fumigation company that the common wall separating the infested building from the uninfested building was an impenetrable fire wall. The fumigation company did its own thorough inspection and determined that the buildings were indeed completely separated by the wall. Residents of the condominium units in the building that was to be sprayed were told to evacuate, but the residents of the uninfested building were told that they could remain while the other building was treated.\n\nDuring and shortly after the fumigation, in which a highly toxic chemical was used, many residents of the uninfested building became sick. It was determined that their illnesses were caused by the fumigation chemical. In fact, there was a hole in the fire wall separating the two buildings, but because it could only be observed from a specific position in the crawl space underneath the floor of the uninfested building, it had not been discovered by either the fumigation company or any previous building inspector.",
        q: "Are the residents of the uninfested building likely to prevail in a tort action against the fumigation company?",
        opts: [
            "No, because the condominium complex owners were responsible for accurately conveying the condition of their buildings.",
            "No, because the fumigation company exercised a high level of care.",
            "Yes, because the fumigation company can be held strictly liable for its activity.",
            "Yes, because the fumigation company put a dangerous product into the stream of commerce."
        ],
        ans: 2,
        exp: "Choice (C) is correct because the fumigation company was engaged in an abnormally dangerous activity, causing the company to become strictly liable for any physical harm caused by the activity. Fumigation using highly toxic chemicals is likely to be found to be abnormally dangerous. Therefore, the fumigation company will be strictly liable to residents of the uninfested building for their physical harm; the fact that the company behaved with all reasonable care will not shield it from liability—that's the whole point of strict liability for carrying out such ultra-hazardous activities.\n\n(A) is wrong because the fumigation company is not shielded from liability by the fact that it reasonably relied on the complex owners' information. (B) is wrong because the company is strictly liable regardless of exercising a high level of care. (D) is wrong because it describes strict product liability, which applies only where a product is sold or distributed. The fumigation company never \"sold\" or \"distributed\" the toxic chemical product; rather, the company used the product as an adjunct to the performance of a service."
    },
    {
        id: 17,
        topic: "Strict Liability / Vicarious Liability for Independent Contractors",
        fp: "Landco purchased a large tract of land intending to construct residential housing on it. Landco hired Poolco to build a large in-ground swimming pool on the tract. The contract provided that Poolco would carry out blasting operations that were necessary to create an excavation large enough for the pool. The blasting caused cracks to form in the walls of Plaintiff's home in a nearby residential neighborhood.",
        q: "In Plaintiff's action for damages against Landco, Plaintiff should",
        opts: [
            "prevail, only if Landco retained the right to direct and control Poolco's construction of the pool.",
            "prevail, because the blasting that Poolco was hired to perform damaged Plaintiff's home.",
            "not prevail, if Poolco used reasonable care in conducting the blasting operations.",
            "not prevail, if Landco used reasonable care to hire a competent contractor."
        ],
        ans: 1,
        exp: "Choice (B) is correct. Blasting is considered an ultrahazardous activity, giving rise to strict liability. Where one person hires an independent contractor to perform an ultrahazardous activity, the hirer is strictly liable, just as the contractor is, even if the hirer used all due care selecting a careful contractor.\n\n(A) is wrong because Landco is responsible for damages caused by Poolco regardless of whether or not Poolco is Landco's employee. While a hiring party is usually not vicariously liable for the torts of an independent contractor, there is an exception where the work involves an abnormally dangerous activity like blasting. Therefore, Landco will be liable despite the fact that Poolco is an independent contractor.\n\n(C) is wrong because the use of reasonable care is irrelevant in a claim for strict liability for an ultrahazardous activity.\n\n(D) is wrong because, as the hiring party, Landco will be vicariously liable for harm caused by Poolco based on the abnormal dangerousness of the activity in which Poolco was engaging."
    },
    {
        id: 18,
        topic: "Products Liability / Retailer Liability",
        fp: "A mother purchased an expensive television from an appliance store for her adult son. Two years after the purchase, a fire started in the son's living room in the middle of the night. The fire department concluded that the fire had started in the television. No other facts are known.\n\nThe son sued the appliance store for negligence. The store has moved for summary judgment.",
        q: "Should the court grant the store's motion?",
        opts: [
            "No, because televisions do not catch fire in the absence of negligence.",
            "No, because the store sold the television.",
            "Yes, because the son is not in privity with the store.",
            "Yes, because there is no evidence of negligence on the part of the store."
        ],
        ans: 3,
        exp: "Choice (D) is correct. The son is suing in negligence, not in strict liability. To make out a prima facie case in negligence, the son must introduce evidence that the store was negligent. However, the son has not pointed to any negligent action or omission by the store. Nor can res ipsa loquitur supply an inference of negligence, because the television was not under the exclusive control of the store at whatever time any negligence must have occurred.\n\n(A) is wrong because even if televisions usually do not catch fire in the absence of negligence, the fact that this particular television caught fire is insufficient to establish that the store itself acted negligently.\n\n(B) is wrong because it cites a fact that is insufficient to establish liability in a negligence action. The son must establish that the store itself was negligent. (If the son had sued under strict liability, he would have had to establish that the television was defective at the time it was sold, and there's no indication in the facts that he could have made such a showing.)\n\n(C) is wrong because a lack of privity is not a barrier to negligence claims based on malfunctioning products."
    },
    {
        id: 19,
        topic: "Products Liability / Express Warranty",
        fp: "At a country auction, Powell acquired an antique cabinet that he recognized as a \"Morenci,\" an extremely rare and valuable collector's item. Unfortunately, Powell's cabinet had several coats of varnish and paint over the original finish. Its potential value could only be realized if these layers could be removed without damaging the original finish. Much of the value of Morenci furniture depends on the condition of a unique oil finish, the secret of which died with Morenci, its inventor.\n\nA professional restorer of antique furniture recommended that Powell use Restorall to remove the paint and varnish from the cabinet. Powell obtained and read a sales brochure published by Restorall, Inc., which contained the following statement: \"This product will renew all antique furniture. Will not damage original oil finishes.\"\n\nPowell purchased some Restorall and used it on his cabinet, being very careful to follow the accompanying instructions exactly. Despite Powell's care, the original Morenci finish was irreparably damaged. When finally refinished, the cabinet was worth less than 20% of what it would have been worth if the Morenci finish had been preserved.",
        q: "If Powell sues Restorall, Inc., to recover the loss he has suffered as a result of the destruction of the Morenci finish, will Powell prevail?",
        opts: [
            "Yes, unless no other known removal technique would have preserved the Morenci finish.",
            "Yes, if the loss would not have occurred had the statement in the brochure been true.",
            "No, unless the product was defective when sold by Restorall, Inc.",
            "No, if the product was not dangerous to persons."
        ],
        ans: 1,
        exp: "Choice (B) is correct. A seller may expressly represent that her goods have certain qualities. If the goods turn out not to have these qualities, the purchaser may sue for breach of warranty. UCC § 2-313. Had the statement \"will not damage original oil finishes\" been true, then the loss suffered would not have occurred. In this case, the product is not defective or dangerous to people (it only causes harm to a particular type of furniture). Therefore, a warranty claim is suitable for this kind of case.\n\n(A) is wrong because the fact that no other product would have been safer for use on the furniture is irrelevant when the claim is based on breach of an express warranty.\n\n(C) is wrong because suit for breach of warranty does not require that the product be \"defective.\"\n\n(D) is wrong because the fact that the product is not dangerous to people is irrelevant in this case of breach of warranty."
    },
    {
        id: 20,
        topic: "Strict Products Liability / Substantial Alteration",
        fp: "A homeowner was injured when an automatic cutoff switch failed to function on a snowblower he was using. The cutoff switch had functioned well for a year after he purchased the snowblower but failed after the machine had been improperly repaired by a mechanic. The snowblower's operating manual contained a clear and prominent warning against making the very alteration to the switch mechanism that was made by the mechanic. The mechanic, however, did not have a manual available when he repaired the snowblower.",
        q: "Does the homeowner have a viable claim against the manufacturer of the snowblower for damages?",
        opts: [
            "No, because the homeowner was contributorily negligent in failing to furnish the snowblower's manual to the mechanic.",
            "No, because the injury resulted from a substantial alteration of the snowblower by a third party.",
            "Yes, because a defect in the snowblower caused the homeowner's injury.",
            "Yes, because the manufacturer should have made the manual available to repair personnel."
        ],
        ans: 1,
        exp: "Choice (B) is correct because the snowblower was not defective at the time the manufacturer sold it. A manufacturer of a product that causes injury will be strictly liable only if the product was defective at the time manufacturer sold or distributed it. There are three types of \"defect\": a manufacturing defect, a design defect, or inadequate instructions/warnings. Here, none of the three types of defect existed at the time the homeowner bought the snowblower. The mechanic's improper repair-in the face of an explicit warning in the manual not to make this type of repair-is a sufficiently unforeseeable event that it would be found to have broken the chain of causation. Therefore, the fact of the substantial alteration, and not any original defect, would be deemed to be the sole proximate cause of the harm.\n\n(A) is wrong because, even if the homeowner was contributorily negligent, that would only reduce the homeowner's recovery, and would not prevent the homeowner from having \"a viable claim.\"\n\n(C) is wrong because it was not a defect in the snowblower (existing prior to the sale) that caused the homeowner's injury.\n\n(D) is wrong because the manufacturer's duty to warn of the repair risk was satisfied when the risk was warned of in the manual included at the time of sale. The manufacturer was justified in assuming the owner would make the manual available to the repair person."
    },
    {
        id: 21,
        topic: "Strict Products Liability / Foreseeable Bystanders",
        fp: "In preparation for a mountain-climbing expedition, Alper purchased the necessary climbing equipment from Outfitters, Inc., a retail dealer in sporting goods. A week later, Alper fell from a rock face when a safety device he had purchased from Outfitters malfunctioned because of a defect in its manufacture. Thereafter, Rollins was severely injured when he tried to reach and give assistance to Alper on the ledge to which Alper had fallen. Rollins's injury was not caused by any fault on his own part.",
        q: "If Rollins brings an action against Outfitters, Inc., to recover damages for his injuries, will Rollins prevail?",
        opts: [
            "No, unless Outfitters could have discovered the defect by a reasonable inspection of the safety device.",
            "No, because Rollins did not rely on the representation of safety implied from the sale of the safety device by Outfitters.",
            "Yes, unless Alper was negligent in failing to test the safety device.",
            "Yes, because injury to a person in Rollins's position was foreseeable if the safety device failed."
        ],
        ans: 3,
        exp: "Choice (D) is correct. This is a strict liability claim for a manufacturing defect. It must be proven that (1) the product was defective, (2) at the time it left the defendant's hands, and (3) the product caused harm. The causation element will be satisfied in this case if it was foreseeable that the failure of the safety device would invite rescue by a third party (and if the rescue was not performed in a grossly careless manner).\n\n(A) is wrong because the retailer will be subject to strict product liability; and, therefore the reasonableness of his conduct is irrelevant.\n\n(B) is wrong because reliance is irrelevant here. One who is in the business of selling a product which turns out to be dangerously defective has strict product liability, and that's true whether the retailer made any implied or express representation of safety.\n\n(C) is wrong because, in the ordinary case, the product user's failure to discover the defect will not be considered negligence, and even if it was, that negligence would only reduce the plaintiff's recovery, not eliminate it."
    },
    {
        id: 22,
        topic: "Strict Products Liability / Design Defect",
        fp: "The Rapido is a sports car manufactured by the defendant, a car maker. The Rapido has an excellent reputation for mechanical reliability with one exception, which is that the motor may stall if the engine has not had an extended warm-up. The plaintiff had just begun to drive her Rapido in city traffic without a warm-up when the engine suddenly stalled. Behind the plaintiff, a car driven by an elderly man tried to stop, but rear-ended the plaintiff's car. The plaintiff suffered no external physical injuries as a result of the collision. However, the shock of the crash caused her to suffer a severe heart attack.\n\nThe plaintiff brought an action against the defendant based on strict liability in tort. During the trial, the plaintiff presented evidence of an alternative engine design of equal cost that would eliminate the stalling problem without impairing the functions of the engine in any way. The defendant moves for a directed verdict at the close of the evidence.",
        q: "This motion should be",
        opts: [
            "denied, because the jury could find that an unreasonably dangerous defect in the engine was a proximate cause of the collision.",
            "denied, if the jury could find that the Rapido was not crashworthy.",
            "granted, because the elderly man's failure to stop within an assured clear distance was a superseding cause of the collision.",
            "granted, if a person of normal sensitivity would not have suffered a heart attack under these circumstances."
        ],
        ans: 0,
        exp: "Choice (A) is correct. A person who is engaged in the business of selling products, and who sells a defective product, is subject to liability for harm to persons or property caused by the defect. Rest. 3d (Prod. Liab.) § 1. One type of defect is a \"design defect.\" A design defect occurs \"when the foreseeable risks of harm posed by the product could have been reduced or avoided by the adoption of a reasonable alternative design by the seller... and the omission of the alternative design renders the product not reasonably safe.\" The plaintiff has made a prima facie showing that satisfies these requirements since a reasonable jury could find that the stalling motor is a design defect (an alternative design was available) and the defect caused the accident and her shock. The defendant's motion should be denied.\n\n(B) is wrong because the \"crashworthiness\" of the car was not at issue on these facts; the injury occurred from the \"shock of the crash,\" not from any failure of the vehicle to withstand the collision.\n\n(C) is wrong because it was foreseeable that cars with engines that stall could be in accidents, so the elderly man's failure to stop was not superseding.\n\n(D) is wrong because the defendant \"takes the plaintiff as he finds him.\" Where the defendant's negligence causes an aggravation of plaintiff's existing physical or mental illness, defendant is liable for the damages caused by the aggravation."
    },
    {
        id: 23,
        topic: "Strict Products Liability / Design Defect",
        fp: "A 16-year-old student purchased an educational chemistry set made by a manufacturer. The student invited his classmate to assist him in a chemistry project. Referring to a library chemistry book on explosives and finding that the chemistry set contained all of the necessary chemicals, the student and the classmate agreed to make a bomb. During the course of the project, the student carelessly knocked a lighted Bunsen burner into a bowl of chemicals from the chemistry set. The chemicals burst into flames, injuring the classmate.",
        q: "In a suit by the classmate against the manufacturer, based on strict liability, the classmate will",
        opts: [
            "prevail, if the chemistry set did not contain a warning that its contents could be combined to form dangerous explosives.",
            "prevail, because manufacturers of chemistry sets are engaged in an abnormally dangerous activity.",
            "not prevail, because the student's negligence was the cause in fact of the classmate's injury.",
            "not prevail, if the chemistry set was as safe as possible, consistent with its educational purposes, and its benefits exceeded its risks."
        ],
        ans: 3,
        exp: "Choice (D) is correct. Products that conform to their design, and essentially do what the consumer expects them to do, yet are by their very nature inherently dangerous, are products that are \"unavoidably unsafe.\" The chemistry set is such a product. The Third Restatement applies a risk-utility approach to such products, finding them defective rather than reasonably safe \"when the foreseeable risks of harm posed by the product could have been reduced or avoided by the adoption of a reasonable alternative design... and the omission of the alternative design renders the product not reasonably safe.\" (D) essentially applies this test. That is, the choice turns on whether the set was as safe as possible and its benefits exceeded its risks; if it was, the classmate would not prevail.\n\n(A) is wrong because the presence or absence of a warning will only determine the outcome of a product-liability case if the warning would have altered the outcome. Here, even if there had been a warning, this would probably not have prevented the knocking over of the Bunsen burner.\n\n(B) is wrong because manufacturing and selling a dangerous product won't be deemed to be an abnormally dangerous activity for strict liability; the relevant doctrine is strict product liability.\n\n(C) is wrong because there can be multiple causes in fact, and if the chemistry set had been defectively designed, that defect could have been a concurrent cause in fact with the student's negligence."
    },
    {
        id: 24,
        topic: "Strict Products Liability / Duty to Warn",
        fp: "Peter, who was 20 years old, purchased a new, high-powered sports car that was marketed with an intended and recognized appeal to youthful drivers. The car was designed with the capability to attain speeds in excess of 100 miles per hour. It was equipped with tires designed and tested only for a maximum safe speed of 85 miles per hour. The owner's manual that came with the car stated that \"continuous driving over 90 miles per hour requires high-speed-capability tires,\" but the manual did not describe the speed capability of the tires sold with the car.\n\nPeter took his new car out for a spin on a straight, smooth country road where the posted speed limit was 55 miles per hour. Intending to test the car's power, he drove for a considerable distance at over 100 miles per hour. While he was doing so, the tread separated from the left rear tire, causing the car to leave the road and hit a tree. Peter sustained severe injuries.\n\nPeter has brought a strict product liability action in tort against the manufacturer of the car. You should assume that pure comparative fault principles apply to this case.",
        q: "Will Peter prevail?",
        opts: [
            "No, because Peter's driving at an excessive speed constituted a misuse of the car.",
            "No, because the car was not defective.",
            "Yes, if the statement in the manual concerning the tires did not adequately warn of the danger of high-speed driving on the tires mounted on the car.",
            "Yes, unless Peter's driving at a speed in excess of the posted speed limit was negligence per se that, by the law of the jurisdiction, was not excusable."
        ],
        ans: 2,
        exp: "Choice (C) is correct. In product liability cases, even if the product would not be defectively dangerous if accompanied by the appropriate warning, absence of such a warning may convert the product into a defectively dangerous product for which there is strict product liability. So here, even if a tire tread that can separate at speeds of 85+ would not have been defectively dangerous if properly warned of, the car manufacturer would be strictly liable if the manual did not contain an adequate warning of the risk. It's quite plausible that the manual's failure to specify that the tires that came with the car were not the sort of \"high-speed-capability tires\" that were required for high speeds would be an actionable failure to warn (especially since the car was designed and marketed based on its ability to go 100+ mph).\n\n(A) is wrong because it is not an unforeseeable misuse of a sports car to drive it at a speed in excess of 100 miles per hour when that was a use intended by the manufacturer who marketed the car to youthful drivers.\n\n(B) is wrong because, as discussed in Choice (C) above, the car might well be \"defective\" in light of inadequate warnings about the capabilities of the tires sold with it.\n\n(D) is wrong because if Peter was found to be negligent he could still prevail. In a pure comparative fault system, the plaintiff's negligence would not bar recovery, but merely reduce his recovery."
    },
    {
        id: 25,
        topic: "Strict Products Liability / Failure to Warn",
        fp: "A homeowner was using a six-foot stepladder to clean the furnace in his home. The homeowner broke his arm when he slipped and fell from the ladder. The furnace had no warnings or instructions on how it was to be cleaned.",
        q: "In a suit by the homeowner against the manufacturer of the furnace to recover for his injury, is the homeowner likely to prevail?",
        opts: [
            "No, because the danger of falling from a ladder is obvious.",
            "No, because the homeowner should have hired a professional to clean the furnace.",
            "Yes, because the furnace did not have a ladder attached to it for cleaning purposes.",
            "Yes, because the lack of warnings or instructions for how to clean the furnace made the furnace defective."
        ],
        ans: 0,
        exp: "Choice (A) is correct, because a manufacturer has no obligation to warn against obvious dangers. In a suit based on strict product liability, the manufacturer's failure to warn of a danger can itself make the product defective. But the seller or manufacturer of a product is generally not liable for failing to warn against a danger that should be obvious to foreseeable users of the product. That's because \"warning of an obvious or generally known risk in most instances will not provide an effective additional measure of safety.\"\n\nHere, the ordinary dangers of working on a ladder are obvious. And there appears to be nothing about using a ladder to clean this furnace that increases the danger of ladder use generally. So the manufacturer's failure to warn about the dangers of ladder use did not make the furnace defective.\n\n(B) is wrong because there was no reason for the homeowner to believe that he could not safely maintain the furnace. Even if the homeowner's decision to clean it himself was a \"misuse,\" that misuse would merely reduce damages under comparative-fault principles, not eliminate recovery.\n\n(C) is wrong because the absence of a ladder did not make the product defective. Ladders are a readily-available household item, and there is no indication that a special-purpose ladder would have been safer than a standard ladder.\n\n(D) is wrong because a manufacturer is not required to warn of obvious dangers. There is no indication there was a way to clean the furnace without climbing on a ladder, so a warning would have just been to be careful on a ladder, which is an obvious danger."
    }
];