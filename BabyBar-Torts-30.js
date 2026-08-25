const examData = [
    {
        id: 1,
        topic: "Res Ipsa Loquitur",
        fp: "A traveler was flying on a commercial aircraft owned and operated by an airline. The aircraft crashed into a mountain, killing everyone on board. The flying weather was good.\n\nThe traveler's legal representative brought a wrongful death action against the airline. At trial, the legal representative offered no expert or other testimony as to the cause of the crash.\n\nOn the airline's motion to dismiss at the conclusion of the legal representative's case, the court should",
        q: "How should the court rule on the airline's motion to dismiss?",
        opts: [
            "grant the motion, because the legal representative has offered no evidence as to the cause of the crash.",
            "grant the motion, because the legal representative has failed to offer evidence negating the possibility that the crash may have been caused by mechanical failure that the airline could not have prevented.",
            "deny the motion, because the jury may infer that the aircraft crashed due to the airline's negligence.",
            "deny the motion, because in the circumstances common carriers are strictly liable."
        ],
        ans: 2,
        exp: "(C) is the best response, because the traveler's legal representative has met the requirements for res ipsa loquitur.\n\nThe doctrine of res ipsa loquitur (\"the thing speaks for itself\") permits the plaintiff to create an inference of the defendant's negligence without any direct evidence showing negligence. There are four requirements: (1) there must be no direct evidence of how the defendant behaved in connection with the event; (2) the event must be of a kind which ordinarily does not occur except through the negligence (or other fault) of someone; (3) the instrument that caused the injury must have been, at the relevant time, in the exclusive control of the defendant; and (4) the injury must not have been due to the plaintiff's own actions.\n\nHere, the four requirements of the doctrine are satisfied: (1) there is no direct evidence of how the defendant airline behaved; (2) airplanes do not ordinarily crash except through the negligence or fault of someone; (3) a jury could reasonably find that the plane was in the exclusive control of the airline and its pilots; and (4) the injury suffered by the traveler was not due to his own action. Since all the requirements for res ipsa loquitur are met, the jury must be permitted to draw the inference that the plane crashed because of the airline's negligence.\n\n(A) is not the best response because the res ipsa loquitur doctrine does not require a showing of evidence of the cause of the crash. (B) is not the best response because the doctrine does not require the plaintiff to negate the possibility that the defendant might not have been negligent. (D) is not the best response because common carriers are not strictly liable, although they are held to a high degree of care."
    },
    {
        id: 2,
        topic: "Negligence / Duty of Care",
        fp: "A sporting goods shop was burglarized by an escaped inmate from a nearby prison. The inmate stole a rifle and bullets from a locked cabinet. The burglar alarm at the sporting goods shop did not go off because the shop owner had negligently forgotten to activate the alarm's motion detector.\n\nShortly thereafter, the inmate used the rifle and ammunition stolen from the shop in a shooting spree that caused injury to a victim.",
        q: "If the victim sues the shop owner for the injury she suffered, will the victim prevail?",
        opts: [
            "Yes, if the victim's injury would have been prevented had the motion detector been activated.",
            "Yes, because the owner was negligent in failing to activate the motion detector.",
            "No, because the storage and sale of firearms and ammunition is not an abnormally dangerous activity.",
            "No, unless there is evidence of circumstances suggesting a high risk of theft and criminal use of firearms stocked by the shop owner."
        ],
        ans: 3,
        exp: "(D) is the best response, because the shop owner took reasonable care by storing the rifle and bullets in a locked cabinet.\n\nFor the victim to make a case in negligence against the shop owner for the harm she suffered, she would have to show that he did not exercise reasonable care to protect her against injury. The facts state that the inmate escaped from a nearby prison, and then entered the shop owner's store by breaking and entering. Once inside, the inmate had to break into a locked cabinet to get the rifle and bullets. Unless it was foreseeable that someone would succeed in breaking and entering the shop owner's store and the locked cabinet, steal firearms, and then use them in crime, the shop owner would not be held liable, whether or not he negligently failed to activate the store's motion detector. Only with evidence suggesting a high risk of theft and criminal use of his firearms could the victim show that the shop owner failed to exercise reasonable care.\n\n(A) and (B) are not the best responses because the shop owner likely met the standard of reasonable care when he locked his store and the gun cabinet, even if he was negligent in failing to activate the motion detector. (C) is not the best response because the shop owner might be liable even under ordinary negligence principles if there was evidence suggesting a high risk of theft, making the lack of abnormally dangerous activity irrelevant."
    },
    {
        id: 3,
        topic: "Strict Products Liability / Retailer Liability",
        fp: "Because of a farmer's default on his loan, the bank foreclosed on the farm and equipment that secured the loan. Among the items sold at the resulting auction was a new tractor recently delivered to the farmer by the retailer. Shortly after purchasing the tractor at the auction, the new owner was negligently operating the tractor on a hill when it rolled over due to a defect in the tractor's design. He was injured as a result. The new owner sued the auctioneer, alleging strict liability in tort. The jurisdiction has not adopted a comparative fault rule in strict liability cases.",
        q: "In this suit, the result should be for the",
        opts: [
            "plaintiff, because the defendant sold a defective product that injured the plaintiff.",
            "plaintiff, if the defendant failed to inspect the tractor for defects prior to sale.",
            "defendant, because he should not be considered a \"seller\" for purposes of strict liability in tort.",
            "defendant, because the accident was caused in part by the new owner's negligence."
        ],
        ans: 2,
        exp: "(C) is the best response, because the auctioneer was not a seller or distributor of the tractor the new owner purchased.\n\nStrict liability, as usually imposed, applies only against one who is \"engaged in the business of selling\" the type of product involved. A court would almost certainly conclude that an auctioneer acting at the behest of a creditor to sell various mortgaged items, one of which happens to be a tractor, is not \"engaged in the business of selling\" tractors.\n\n(A) is not the best response because it incorrectly assumes that the auctioneer is a seller as defined in strict liability. (B) is not the best response because the auctioneer's alleged negligence would not be an element of the new owner's strict liability suit. (D) is not the best response because in states that have not adopted comparative fault principles (as the facts state is the case here), a plaintiff's contributory negligence is not a defense to strict liability."
    },
    {
        id: 4,
        topic: "Private Nuisance",
        fp: "A homeowner owns a house on a lake, and a neighbor owns a house across a driveway from the homeowner's property. The neighbor's house sits on a hill and the neighbor can see the lake from his living room window.\n\nThe homeowner and the neighbor got into an argument and the homeowner erected a large spotlight on his property that automatically comes on at dusk and goes off at sunrise. The only reason the homeowner installed the light was to annoy the neighbor. The glare from the light severely detracts from the neighbor's view of the lake.",
        q: "In a suit by the neighbor against the homeowner, will the neighbor prevail?",
        opts: [
            "Yes, because the homeowner installed the light solely to annoy the neighbor.",
            "Yes, if, and only if, the neighbor's property value is adversely affected.",
            "No, because the neighbor's view of the lake is not always obstructed.",
            "No, if the spotlight provides added security to the homeowner's property."
        ],
        ans: 0,
        exp: "(A) is the best response, because the interference outweighs the utility of the light.\n\nThe neighbor's suit here would be based on private nuisance. A private nuisance is a substantial, unreasonable interference with another individual's use or enjoyment of his property. Since the interference with plaintiff's use of his land must be \"unreasonable,\" the severity of the inflicted injury must outweigh the utility of the defendant's conduct. Because Choice (A) specifies that the homeowner put in the light only to annoy the neighbor, we know that there was no socially accepted \"benefit\" to the homeowner from the conduct. Consequently, even a small burden to the neighbor (such as detracting from his view of the lake) would outweigh the non-existent benefits to the homeowner.\n\n(B) is not the best response because a plaintiff need only show an unreasonable interference with the use of his land, not loss of market value. (C) is not the best response because an occasional interference suffices if it is substantial and unreasonable. (D) is not the best response because the facts stipulate that the only reason the homeowner put in the light was to annoy the neighbor, so the court won't consider incidental security benefits that didn't in fact motivate the homeowner's conduct."
    },
    {
        id: 5,
        topic: "Negligent Infliction of Emotional Distress",
        fp: "A driver was driving his car near a house when the homeowner's child darted into the street in front of the driver's car. As the driver swerved and braked his car to avoid hitting the child, the car skidded up into the homeowner's driveway and stopped just short of the homeowner, who was standing in the driveway and had witnessed the entire incident. The homeowner suffered serious emotional distress from witnessing the danger to his child and to himself. Neither the homeowner nor his property was physically harmed.",
        q: "If the homeowner asserts a claim for damages against the driver, will the homeowner prevail?",
        opts: [
            "Yes, because the driver's entry onto the homeowner's land was unauthorized.",
            "Yes, because the homeowner suffered serious emotional distress by witnessing the danger to his child and to himself.",
            "No, unless the driver was negligent.",
            "No, unless the homeowner's child was exercising reasonable care."
        ],
        ans: 2,
        exp: "(C) is the best response, because the driver's unauthorized entry onto the homeowner's land was not an intentional act, thus preventing trespass from occurring. Therefore, the claim must rely on negligence.\n\nIf the driver was negligent, then a suit based on ordinary negligence could succeed, since the driver's negligence would have placed the homeowner and the homeowner's child in the zone of danger, and then caused emotional distress. So if the driver was negligent, the homeowner would prevail, making this aspect of Choice (C) correct. If the driver was not negligent, the homeowner's suit could of course not successfully be based on negligence. In that event, the suit would have to be based on trespass. However, trespass requires an intentional entry onto the plaintiff's property. Here, where the driver came onto the homeowner's property only as the result of a skid, the required \"intentional entry\" would not be found.\n\n(A) is not the best response because the entry was not intentional, and the doctrine of private necessity would supply a defense to trespass. (B) is not the best response because the presence of serious emotional distress is irrelevant if the driver violated no duty (i.e., wasn't negligent). (D) is not the best response because the child's exercise of reasonable care is irrelevant to the driver's potential negligence."
    },
    {
        id: 6,
        topic: "Conversion",
        fp: "A neighbor, who lived next door to another homeowner, went into the homeowner's garage without permission and borrowed the homeowner's chainsaw. The neighbor used the saw to clear broken branches from the trees on the neighbor's own property. After he had finished, the neighbor noticed several broken branches on the homeowner's trees that were in danger of falling on the homeowner's roof. While the neighbor was cutting the homeowner's branches, the saw broke.",
        q: "In a suit for conversion by the homeowner against the neighbor, will the homeowner recover?",
        opts: [
            "Yes, for the actual damage to the saw.",
            "Yes, for the value of the saw before the neighbor borrowed it.",
            "No, because when the saw broke the neighbor was using it to benefit the homeowner.",
            "No, because the neighbor did not intend to keep the saw."
        ],
        ans: 1,
        exp: "(B) is the best response, because it correctly states the damages available for the tort of conversion.\n\nThe tort of conversion is the interference with a person's possessory rights in a chattel that is so serious as to warrant that defendant pay full value for the chattel. Under these facts, the neighbor borrowed the homeowner's chainsaw without permission, thereby interfering with the homeowner's possessory rights. The saw broke (as opposed to becoming slightly damaged), constituting a serious interference. Under conversion, the neighbor is responsible for the full value of the saw (but can keep it) - \"you break it, you own it.\"\n\n(A) is not the best response because it incorrectly states the damages for conversion. Actual damages are for trespass to chattels; conversion forces a sale. (C) is not the best response because the fact that the neighbor was ostensibly helping the homeowner later does not excuse the initial unauthorized borrowing and use for his own purposes. (D) is not the best response because an intent to keep the chattel is not a necessary element in conversion; intent to exercise dominion that seriously interferes is enough."
    },
    {
        id: 7,
        topic: "Conversion",
        fp: "A landowner hired a tree specialist to cut down four trees, which he pointed out to the specialist before the specialist began work. Although the landowner reasonably believed that all the trees were on his property, three of the trees that were cut down were in fact on a neighbor's property.",
        q: "Who, if anyone, is liable to the landowner's neighbor for conversion?",
        opts: [
            "Both the tree specialist and the landowner.",
            "Neither the tree specialist nor the landowner.",
            "The landowner only.",
            "The tree specialist only."
        ],
        ans: 0,
        exp: "(A) is the best response, because neither the landowner's reasonable belief about who possessed the trees nor the specialist's reasonable belief about that topic will shield that person from liability for conversion.\n\nConversion occurs when an actor intentionally interacts with an item that is the personal property of another so as to permanently deprive the other of possession. This is true regardless of (1) whether the actor knows that the item is in another's possession; and (2) the reasonableness of the actor's belief about who possesses the item. Therefore, the landowner's reasonable belief that the trees were his does not prevent him from being liable for conversion. Similarly, the specialist's reasonable belief (based on what the landowner told him) that the trees belonged to the landowner does not prevent the specialist from being liable for conversion.\n\n(B), (C), and (D) are all incorrect because both parties engaged in intentional dominion over the neighbor's property, constituting conversion."
    },
    {
        id: 8,
        topic: "Negligent Infliction of Emotional Distress",
        fp: "A trucking company employed nine salaried dispatchers to ensure that its truck fleet operated according to schedule. Two years ago, as a cost-saving measure, the company reduced the number of dispatchers to six, and each of the remaining dispatchers had to work substantially longer hours.\n\nOne of the remaining dispatchers complained to his supervisor that the stress and fatigue associated with the new working conditions were too much for him to handle. The supervisor told the dispatcher that he should quit if he couldn't handle the increased hours.\n\nOver the next three months, the dispatcher continued to complain about the working conditions, to no effect. The dispatcher suffered severe emotional distress from the working conditions, but no physical injury. He eventually was hospitalized and had to miss several months of work as a result of the emotional distress.\n\nThe dispatcher sued the trucking company for negligence. The company has moved for summary judgment, based on the undisputed facts set out above. Assume that there is no applicable workers' compensation statute.",
        q: "How should the court rule on the motion?",
        opts: [
            "Deny the motion, because the jury must determine the extent of the emotional distress suffered by the dispatcher.",
            "Deny the motion, because there is evidence from which a jury could reasonably conclude that the supervisor failed to act with ordinary care.",
            "Grant the motion, because the dispatcher suffered no physical injury.",
            "Grant the motion, because there is no evidence from which a jury could reasonably conclude that the supervisor acted carelessly with respect to the dispatcher's emotional well-being."
        ],
        ans: 2,
        exp: "(C) is the best response, because negligently caused emotional distress is ordinarily not actionable unless connected to a physical injury.\n\nWhen the defendant negligently causes emotional distress to the plaintiff, the plaintiff generally cannot recover unless the emotional distress was connected to a physical injury, or they were in the \"zone of danger\" of physical impact, or there is a special relationship (like mishandling a corpse). Since the dispatcher suffered no physical injury and was not in a zone of danger, the default rule of no liability for pure emotional distress applies.\n\n(A) is not the best response because the extent of distress is irrelevant when there is no underlying duty to avoid pure emotional distress. (B) and (D) are not the best responses because the insufficiency in the dispatcher's case is not as to breach of a duty but rather as to the existence of a duty. Even if the supervisor failed to use ordinary care regarding the dispatcher's emotional well-being, there is no duty under negligence law to avoid inflicting pure emotional distress in an employment context."
    },
    {
        id: 9,
        topic: "Intentional Infliction of Emotional Distress",
        fp: "The warden of a state prison prohibits the photographing of the face of any prisoner without the prisoner's consent. A news photographer wanted to photograph a mobster, a notorious organized crime figure incarcerated at the state prison. To circumvent the warden's prohibition, the photographer flew over the prison exercise yard and photographed the mobster. Another prisoner, who was imprisoned for a technical violation of a regulatory statute, happened to be standing next to the mobster when the photograph was taken.\n\nWhen the picture appeared in the press, the prisoner suffered severe emotional distress because he believed that his business associates and friends would think he was consorting with gangsters. The prisoner suffered no physical harm as the result of his emotional distress. The prisoner brought an action against the photographer for intentional or reckless infliction of emotional distress.",
        q: "What is the best argument that the photographer can make in support of a motion for summary judgment?",
        opts: [
            "No reasonable person could conclude that the photographer intended to photograph the prisoner.",
            "The prisoner did not suffer any physical injury arising from the emotional distress.",
            "As a news photographer, the photographer was privileged to take photographs that others could not.",
            "No reasonable person could conclude that the photographer's conduct was extreme and outrageous as to the prisoner."
        ],
        ans: 3,
        exp: "(D) is the best response, because this argument correctly states a requirement for the tort of intentional infliction of emotional distress and shows that the requirement is not met.\n\nTo establish a prima facie case for intentional/reckless infliction of emotional distress, the plaintiff must prove an act amounting to \"extreme and outrageous\" conduct. Taking a photograph from an airplane over a prison yard to get a picture of a mobster does not meet the standard of conduct that is \"beyond all possible bounds of decency\" and \"utterly intolerable in a civilized community.\"\n\n(A) is not the best response because intent to photograph the specific prisoner is not necessary if the photographer was reckless as to the emotional distress. (B) is not the best response because physical injury is not an element of IIED; severe emotional distress alone is sufficient. (C) is not the best response because news photographers do not have a special privilege exempting them from tortious conduct."
    },
    {
        id: 10,
        topic: "Negligence Per Se / Causation",
        fp: "A passenger departed on an ocean liner knowing that it would be a rough voyage due to predicted storms. The ocean liner was not equipped with the type of lifeboats required by the applicable statute.\n\nThe passenger was swept overboard and drowned in a storm so heavy that even a lifeboat that conformed to the statute could not have been launched.",
        q: "In an action against the operator of the ocean liner brought by the passenger's representative, will the passenger's representative prevail?",
        opts: [
            "Yes, because the ocean liner was not equipped with the statutorily required lifeboats.",
            "Yes, because in these circumstances common carriers are strictly liable.",
            "No, because the storm was so severe that it would have been impossible to launch a statutorily required lifeboat.",
            "No, because the passenger assumed the risk by boarding the ocean liner knowing that it would be a rough voyage."
        ],
        ans: 2,
        exp: "(C) is the best response, because the storm was so severe that the absence of lifeboats made no difference.\n\nOn these facts, the doctrine of 'negligence per se' might have applied since the liner failed to have statutorily required lifeboats. However, the negligence per se doctrine doesn't excuse the plaintiff from showing actual causation. If compliance with the statute wouldn't have prevented the harm from occurring, then the absence of compliance couldn't have been the cause in fact of the injury. Since a lifeboat could not have been launched anyway, the statutory violation was not the cause in fact of the drowning.\n\n(A) is not the best response because not having the lifeboats was not the actual cause of the drowning. (B) is not the best response because common carriers are held to a very high degree of care, but they are not strictly liable. (D) is not the best response because boarding the liner knowing of a rough voyage does not constitute a knowing assumption of the risk of lacking statutorily required lifeboats."
    },
    {
        id: 11,
        topic: "Battery / Consent",
        fp: "A basketball player suffered a serious injury while participating in an impromptu basketball game at a public park. The injury occurred when the player and his opponent each tried to obtain possession of the ball when it rebounded from the backboard after a missed shot at the basket. During that encounter, the player was struck and injured by the opponent's elbow. The player now seeks compensation from the opponent.\n\nAt the trial, evidence was introduced tending to prove that the game had been rough from the beginning, that elbows and knees had frequently been used to discourage interference by opposing players, and that the player had been one of those making liberal use of such tactics.",
        q: "In this action, will the player prevail?",
        opts: [
            "Yes, if the opponent intended to strike the player with his elbow.",
            "Yes, if the opponent intended to cause a harmful or offensive contact with the player.",
            "No, because the player impliedly consented to rough play.",
            "No, unless the opponent intentionally used force that exceeded the player's consent."
        ],
        ans: 3,
        exp: "(D) is the best response, because intentional force that exceeded the basketball player's consent would be an offensive contact constituting a battery.\n\nAn action for battery requires an intentional harmful or offensive contact without the plaintiff's consent. Somebody who voluntarily engages in a body contact sport impliedly consents to the normal contacts inherent in playing it, as well as the level of roughness established during the game. However, consent is not a defense if the opponent intentionally used more than the consented-to level of force.\n\n(A) and (B) are not the best responses because they ignore the significance of the plaintiff's implied consent. If the opponent intended the contact but it was within the bounds of the rough play established in the game, it is not actionable. (C) is not the best response because it ignores the possibility that the opponent may have exceeded the scope of the implied consent."
    },
    {
        id: 12,
        topic: "Negligent Infliction of Emotional Distress / Property Damage",
        fp: "In a trial to a jury, a restaurateur proved that the power company's negligent maintenance of a transformer caused a fire that destroyed his restaurant. The jury returned a verdict for the restaurateur in the amount of $450,000 for property loss and $500,000 for emotional distress. The trial judge entered judgment in those amounts. The power company appealed that part of the judgment awarding $500,000 for emotional distress.",
        q: "On appeal, the judgment should be",
        opts: [
            "affirmed, because the power company negligently caused the restaurateur's emotional distress.",
            "affirmed, because harm arising from emotional distress is as real as harm caused by physical impact.",
            "reversed, because the law does not recognize a claim for emotional distress incident to negligently caused property loss.",
            "reversed, unless the jury found that the restaurateur suffered physical harm as a consequence of the emotional distress caused by his property loss."
        ],
        ans: 2,
        exp: "(C) is the best response, because the law does not recognize a claim for damages for emotional distress incident to negligently caused property loss.\n\nWhere due to the defendant's negligence the plaintiff either suffers physical injury or narrowly avoids it, the plaintiff can recover for emotional distress. But where the only injury or physical damage from the defendant's negligence is property damage, courts are unwilling to allow the plaintiff to recover for emotional distress at the property damage. Since the restaurateur's distress is due solely to the property damage, he cannot recover for it.\n\n(A) and (B) are not the best responses because the law does not recognize a claim for damages for emotional distress incident to negligently caused property loss. (D) is not the best response because even a showing of physical harm resulting from the distress would not suffice when the distress originates entirely from negligent property loss."
    },
    {
        id: 13,
        topic: "Negligence / Constructive Notice",
        fp: "A customer fell and injured himself when he slipped on a banana peel while shopping at a grocer's store. The banana peel was fresh and clean except for a mark made by the heel of the customer's shoe. In an action brought by the customer against the grocer, these are the only facts in evidence.",
        q: "Should the trial judge permit the case to go to the jury?",
        opts: [
            "No, because the customer had an obligation to watch where he stepped.",
            "No, because there is not a reasonable basis for inferring that the grocer knew or should have known of the banana peel.",
            "Yes, because it is more likely than not that the peel came from a banana offered for sale by the grocer.",
            "Yes, because the grocer could foresee that a customer might slip on a banana peel."
        ],
        ans: 1,
        exp: "(B) is the best response, because res ipsa loquitur does not apply to these facts, and there is no evidence that the defendant knew or should have known of the banana peel.\n\nA store owner must use reasonable care to inspect the premises and protect invitees from dangerous conditions. To establish negligence, the plaintiff must prove that the store owner had actual or constructive notice of the hazard. Because the banana peel was \"fresh and clean,\" there is no basis for inferring it had been on the floor long enough that the grocer should have discovered it in the exercise of reasonable care.\n\n(A) is not the best response because under pure comparative negligence, even if a plaintiff is negligent the case may still go to the jury to apportion fault. (C) is not the best response because the origin of the banana does not establish that the grocer breached the duty of care regarding the peel on the floor. (D) is not the best response because foreseeability alone is not enough; the plaintiff must also prove a breach of the standard of care (i.e., constructive notice of the specific hazard)."
    },
    {
        id: 14,
        topic: "Negligence / Emergency Doctrine",
        fp: "While approaching an intersection with the red light against him, a motorist suffered a heart attack that rendered him unconscious. The motorist's car struck a child, who was crossing the street with the green light in her favor. Under the state motor vehicle code, it is an offense to drive through a red traffic light.\n\nThe child sued the motorist to recover for her injuries. At trial it was stipulated that (1) immediately prior to suffering the heart attack, the motorist had been driving within the speed limit, had seen the red light, and had begun to slow his car; (2) the motorist had no history of heart disease and no warning of this attack; (3) while the motorist was unconscious, his car ran the red light.",
        q: "On cross motions for directed verdicts on the issue of liability at the conclusion of the proofs, the court should",
        opts: [
            "grant the child's motion, because the motorist ran a red light in violation of the motor vehicle code.",
            "grant the child's motion, because, in the circumstances, reasonable persons would infer that the motorist was negligent.",
            "grant the motorist's motion, because he had no history of heart disease or warning of the heart attack.",
            "deny both motions and submit the case to the jury, to determine whether, in the circumstances, the motorist's conduct was that of a reasonably prudent person."
        ],
        ans: 2,
        exp: "(C) is the best response, because there is no direct evidence that the motorist failed to exercise due care.\n\nUnder ordinary negligence principles, an unforeseeable physical incapacity that causes an accident does not constitute negligence because the driver acted as a reasonable person would have prior to the sudden incapacity. Furthermore, negligence per se does not apply to a statutory violation caused by an involuntary, unconscious act due to an unforeseeable medical emergency. Because no reasonable jury could find the motorist liable on these stipulated facts, a directed verdict for the motorist is appropriate.\n\n(A) is not the best response because an unconscious act cannot be the basis for a statutory violation or negligence per se. (B) is not the best response because res ipsa loquitur or inference of negligence does not apply when the accident is entirely explained by a sudden, unforeseeable medical emergency. (D) is not the best response because there are no disputed facts for the jury to resolve regarding the motorist's care."
    },
    {
        id: 15,
        topic: "Negligence / Duty and Causation",
        fp: "A company designed and built a processing plant for the manufacture of an explosive chemical. An engineer was retained by the company to design a filter system for the processing plant. She prepared an application for a permit to build the plant's filter system and submitted it to the state's Department of Environmental Protection (DEP). As required by DEP regulations, the engineer submitted a blueprint to the DEP with the application for permit. The blueprint showed the entire facility and was signed and sealed by her as a licensed professional engineer.\n\nAfter the project was completed, a portion of the processing plant exploded, injuring the plaintiff. During discovery in an action by the plaintiff against the engineer, it was established that the explosion was caused by a design defect in the processing plant that was unrelated to the filter system designed by the engineer.",
        q: "In that action, will the plaintiff prevail?",
        opts: [
            "Yes, if the engineer signed, sealed, and submitted a blueprint that showed the design defect.",
            "Yes, because all of the plant's designers are jointly and severally liable for the defect.",
            "No, because the engineer owed no duty to the plaintiff to prevent the particular risk of harm.",
            "No, if the engineer was an independent contractor."
        ],
        ans: 2,
        exp: "(C) is the best response, because the engineer owed no duty to the plaintiff to prevent the particular risk of harm.\n\nThe only plausible basis for the suit here would have to be negligence. To be liable in negligence, the engineer would have to have had a duty to avoid a particular type of harm, and then to have failed to use reasonable care. Because the engineer dealt only with the filtering system, she never undertook any duty to ascertain the safety of the other aspects of the plant design. Nothing she did constituted a failure to use reasonable care in discharging her specific duty.\n\n(A) is not the best response because merely showing the rest of the plant on a required blueprint does not make her liable for defects outside her scope of work. (B) is not the best response because joint and several liability requires multiple parties to actually commit tortious acts; the engineer committed no tort. (D) is not the best response because the engineer's liability would depend on her own negligence, regardless of whether she was an employee or an independent contractor."
    },
    {
        id: 16,
        topic: "Intentional Interference with Contract",
        fp: "An established cemetery sells \"pre-need\" funeral plans, which include funeral services, a casket, and a burial plot, in exchange for advance payment. By state statute, any purchaser of a funeral plan of this sort can cancel the purchase at any time, subject to a penalty imposed by the seller of up to 15 percent of the purchase price.\n\nA former high-level employee of the cemetery, who knew of the limitations specified in the state statute, recently built a new cemetery near the established cemetery. To promote the new cemetery, the former employee sent postcards to local residents asserting that anyone who had already purchased a pre-need funeral plan had \"an unlimited right to cancel that plan at any time, for any reason, without penalty.\" The postcard also offered a $100 rebate on a pre-need funeral plan with the new cemetery to anyone who canceled an existing plan elsewhere.\n\nShortly after the promotion began, several purchasers of funeral plans with the established cemetery canceled their plans and purchased plans from the new cemetery. When the established cemetery withheld penalties from the refund amounts, the purchasers objected and threatened to notify the state consumer protection bureau.\n\nThe established cemetery has sued the former employee for tortious interference with contract. The former employee has moved for summary judgment, based on the foregoing facts.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because a reasonable jury could conclude that the former employee bribed purchasers in order to take business from the established cemetery.",
            "No, because the former employee could be found by a jury to have intentionally and improperly interfered with the established cemetery's contracts.",
            "Yes, because the established cemetery's contracts with purchasers were terminable at the option of the purchasers.",
            "Yes, because the former employee was simply competing with the established cemetery."
        ],
        ans: 1,
        exp: "(B) is the best response, because the facts establish a prima facie case of the tort of interference with contract.\n\nThere is a tort known as \"interference with contract.\" The defendant is liable if a valid contract existed, the defendant intended to cause a breach or disruption of performance, the defendant engaged in wrongful conduct, and the wrongful conduct caused the breach or disruption. Here, the former employee engaged in wrongful conduct by committing fraud (an independent legal wrong) when he falsely stated that purchasers could cancel \"without penalty.\" This wrongful conduct intentionally induced the disruption of the established cemetery's contracts.\n\n(A) is not the best response because offering a financial incentive is not by itself a \"bribe\" or necessarily tortious; it is the fraudulent misrepresentation that makes the interference wrongful. (C) is not the best response because inducing a party to exercise a termination clause using wrongful means (fraud) still constitutes tortious interference. (D) is not the best response because the former employee's use of fraud went beyond the bounds of permissible, fair competition."
    },
    {
        id: 17,
        topic: "Negligent Infliction of Emotional Distress",
        fp: "A woman's three-year-old daughter was killed in an automobile accident. At the woman's direction, the child's body was taken to a mausoleum for interment. Normally, the mausoleum's vaults are permanently sealed with marble plates secured by \"tamper-proof\" screws. After the child's body was placed in the mausoleum, however, only a fiberglass panel secured by caulking compound covered her vault. About a month later, the child's body was discovered in a cemetery located near the mausoleum. It had apparently been left there by vandals who had taken it from the mausoleum.\n\nAs a result of this experience, the woman suffered great emotional distress.",
        q: "If the woman sues the mausoleum for the damages arising from her emotional distress, will she prevail?",
        opts: [
            "No, because the woman experienced no threat to her own safety.",
            "No, unless the mausoleum's behavior was extreme and outrageous.",
            "Yes, if the mausoleum failed to use reasonable care to safeguard the body.",
            "Yes, unless the woman suffered no physical harm as a consequence of her emotional distress."
        ],
        ans: 2,
        exp: "(C) is the best response, because the defendant mishandled a corpse.\n\nMost courts allow recovery for pure emotional distress, even if unaccompanied by bodily harm, where the defendant is a hospital, funeral home, or cemetery that has negligently handled the corpse of the plaintiff's relative. This special exception to the usual NIED rules recognizes the inherent likelihood of severe emotional distress in such situations. If the mausoleum failed to use reasonable care, it is liable for the resulting emotional distress.\n\n(A) is not the best response because the \"zone of danger\" requirement does not apply to the mishandling of a corpse. (B) is not the best response because the requirement of \"extreme and outrageous\" conduct applies to Intentional Infliction of Emotional Distress, whereas this is a negligence claim. (D) is not the best response because physical harm or manifestation is not required in cases involving the negligent handling of a close relative's corpse."
    },
    {
        id: 18,
        topic: "Premises Liability / Invitees",
        fp: "A mother rushed her eight-year-old daughter to the emergency room at the local hospital after her daughter fell off her bicycle and hit her head on a sharp rock. The wound caused by the fall was extensive and bloody.\n\nThe mother was permitted to remain in the treatment room and held her daughter's hand while the emergency room physician cleaned and sutured the wound. During the procedure, the mother said that she was feeling faint and stood up to leave the room. While leaving the room, the mother fainted and, in falling, struck her head on a metal fixture that protruded from the emergency room wall. She sustained a serious injury as a consequence.",
        q: "If the mother sues the hospital to recover damages for her injury, will she prevail?",
        opts: [
            "Yes, because the mother was a public invitee of the hospital's.",
            "Yes, unless the fixture was an obvious, commonly used, and essential part of the hospital's equipment.",
            "No, unless the hospital's personnel failed to take reasonable steps to anticipate and prevent the mother's injury.",
            "No, because the hospital's personnel owed the mother no affirmative duty of care."
        ],
        ans: 2,
        exp: "(C) is the best response, because it most completely states the duty owed to the mom as an invitee.\n\nAn invitee is a person who enters onto the premises in response to an express or implied invitation of the landowner (such as accompanying a minor patient to an emergency room). The hospital owes an invitee a general duty to use reasonable and ordinary care in keeping the property safe. The mere fact that the mother injured herself does not establish negligence; liability depends on whether the hospital's personnel failed to take reasonable steps to safeguard invitees from foreseeable dangers posed by the protruding fixture.\n\n(A) is not the best response because status as an invitee merely establishes the duty owed; it does not automatically guarantee victory without proof of a breach of that duty. (B) is not the best response because even an obvious, commonly used fixture could be negligently maintained or placed without proper padding. (D) is not the best response because the hospital does owe an affirmative duty to invitees to inspect and make the premises safe."
    },
    {
        id: 19,
        topic: "Defamation / Opinion",
        fp: "The governor of a state signed a death warrant for a convicted murderer. A man and a woman were active opponents of the death penalty. At a demonstration protesting the execution of the murderer, the man and the woman carried large signs that stated, \"The Governor Is A Murderer.\" A television station broadcast news coverage of the demonstration, including pictures of the signs carried by the man and the woman.",
        q: "If the governor asserts a defamation claim against the TV station, will the governor prevail?",
        opts: [
            "Yes, because the signs would cause persons to hold the governor in lower esteem.",
            "Yes, if the governor proves that the station showed the signs with knowledge of falsity or reckless disregard of the truth that the governor had not committed homicide.",
            "No, unless the governor proves he suffered pecuniary loss resulting from harm to his reputation proximately caused by the televised images of the signs.",
            "No, if the only reasonable interpretation of the signs was that the term \"murderer\" was intended as a characterization of one who would sign a death warrant."
        ],
        ans: 3,
        exp: "(D) is the best response, because it recognizes that the station cannot be liable if it was expressing an opinion rather than making a provable false statement of fact.\n\nIn any defamation case, the First Amendment requires the plaintiff to show that the defendant made a provably false statement of fact, as opposed to a statement of pure opinion or rhetorical hyperbole. In the context of a death penalty protest, no reasonable reader would interpret the sign as a factual assertion that the governor committed criminal homicide; it is clearly a rhetorical expression of political opinion. Such statements cannot be defamatory.\n\n(A) and (B) are not the best responses because they fail to address the threshold requirement that the statement must be a provable false statement of fact. (C) is not the best response because, regardless of pecuniary loss, a statement of pure opinion or rhetorical hyperbole cannot support a defamation claim."
    },
    {
        id: 20,
        topic: "Strict Products Liability / Bystanders",
        fp: "In preparation for a mountain-climbing expedition, a climber purchased the necessary climbing equipment from a sporting goods retailer. A week later, the climber fell from a rock face when a safety device he had purchased from the retailer malfunctioned because of a defect in its manufacture. Thereafter, a bystander was severely injured when he tried to reach and give assistance to the climber on the ledge to which the climber had fallen. The bystander's injury was not caused by any fault on his own part.",
        q: "If the bystander brings an action against the retailer to recover damages for his injuries, will the bystander prevail?",
        opts: [
            "No, unless the retailer could have discovered the defect by a reasonable inspection of the safety device.",
            "No, because the bystander did not rely on the representation of safety implied from the sale of the safety device by the retailer.",
            "Yes, unless the climber was negligent in failing to test the safety device.",
            "Yes, because injury to a person in the bystander's position was foreseeable if the safety device failed."
        ],
        ans: 3,
        exp: "(D) is the best response, because the retailer will be strictly liable to anyone whose injury was foreseeable in the event the device failed.\n\nThis is a strict liability claim for a manufacturing defect. The bystander must prove that the product was defectively dangerous at the time it left the defendant's hands, and that it was foreseeable that the product might cause harm to one in the bystander's position. Danger invites rescue, so it is highly foreseeable that if a safety device fails, a third party may attempt a rescue and be injured. A commercial retailer in the distribution chain is strictly liable for such foreseeable harm.\n\n(A) is not the best response because the retailer's inability to discover the defect through reasonable inspection is not a defense to strict liability. (B) is not the best response because reliance is irrelevant to strict products liability. (C) is not the best response because the user's negligent failure to discover the defect does not cut off the strict liability of the seller to the bystander."
    },
    {
        id: 21,
        topic: "Private Nuisance",
        fp: "For ten years, a vacationer and a neighbor have owned summer vacation homes on adjoining lots. A stream flows through both lots. As a result of a childhood swimming accident, the vacationer is afraid of water and has never gone close to the stream.\n\nThe neighbor built a dam on her property that has completely stopped the flow of the stream to the vacationer's property.",
        q: "In a suit by the vacationer against the neighbor, will the vacationer prevail?",
        opts: [
            "Yes, if the damming unreasonably interferes with the use and enjoyment of the vacationer's property.",
            "Yes, if the neighbor intended to affect the vacationer's property.",
            "No, because the vacationer made no use of the stream.",
            "No, if the dam was built in conformity with all applicable laws."
        ],
        ans: 0,
        exp: "(A) is the best response, because if the defendant neighbor's dam unreasonably interfered with the plaintiff's use and enjoyment of his property, the plaintiff would have a valid claim for private nuisance.\n\nA landowner who causes a substantial, unreasonable interference with a neighbor's use or enjoyment of his property without a valid defense is liable for private nuisance. Most courts hold that an upstream owner may not completely block the flow of water if this would unreasonably interfere with a downstream owner's property.\n\n(B) is not the best response because intent to affect the property is not enough; the interference must be unreasonable. (C) is not the best response because a person's use and enjoyment of land encompasses more than direct physical use (e.g., aesthetics, property value, future potential use). (D) is not the best response because compliance with applicable laws does not preclude a common-law nuisance claim."
    },
    {
        id: 22,
        topic: "Premises Liability / Vendor of Land",
        fp: "The day after a seller completed the sale of his house and moved out, one of the slates flew off the roof during a windstorm. The slate struck a pedestrian, who was on the public sidewalk. The pedestrian was seriously injured.\n\nThe roof is old and has lost several slates in ordinary windstorms on other occasions.",
        q: "If the pedestrian sues the seller to recover damages for his injuries, will the pedestrian prevail?",
        opts: [
            "Yes, because the roof was defective when the seller sold the house.",
            "Yes, if the seller should have been aware of the condition of the roof and should have realized that it was dangerous to persons outside the premises.",
            "No, because the seller was neither the owner nor the occupier of the house when the pedestrian was injured.",
            "No, if the pedestrian knew that in the past slates had blown off the roof during windstorms."
        ],
        ans: 1,
        exp: "(B) is the best response, because the seller should have fixed the roof and doesn't escape liability immediately just because he sold the house.\n\nGenerally, a vendor of land is not liable for injuries occurring after the buyer takes possession. However, there is an exception: A vendor who created or negligently permitted an unreasonably dangerous artificial condition to remain on the land is liable to persons outside the land for physical harm caused by the condition until the vendee has had a reasonable opportunity to discover the condition and take precautions (Rest. 2d Torts § 373). One day is insufficient for the new buyer to discover and fix the roof, so the seller remains liable if he should have known of the danger.\n\n(A) is not the best response because strict liability does not apply to the sale of a used home by an ordinary homeowner. (C) is not the best response because the seller's liability extends beyond the time of possession under the exception mentioned above. (D) is not the best response because walking on a public sidewalk knowing slates have blown off in the past is unlikely to constitute a voluntary assumption of risk."
    },
    {
        id: 23,
        topic: "Medical Malpractice / Causation",
        fp: "A patient had been under the care of a cardiologist for three years prior to submitting to an elective operation that was performed by a surgeon. Two days thereafter, the patient suffered a stroke, resulting in a coma, caused by a blood clot that lodged in her brain. When it appeared that she had entered a permanent vegetative state, with no hope of recovery, the artificial life-support system that had been provided was withdrawn, and she died a few hours later. The withdrawal of artificial life support had been requested by her family, and duly approved by a court. The surgeon was not involved in that decision, or in its execution.\n\nThe administrator of the patient's estate thereafter filed a wrongful death action against the surgeon, claiming that the surgeon was negligent in having failed to consult a cardiologist prior to the operation. At the trial the plaintiff offered evidence that accepted medical practice would require examination of the patient by a cardiologist prior to the type of operation that the surgeon performed.",
        q: "In this action, the plaintiff should",
        opts: [
            "prevail, if the surgeon was negligent in failing to have the patient examined by a cardiologist prior to the operation.",
            "prevail, if the blood clot that caused the patient's death was caused by the operation which the surgeon performed.",
            "not prevail, absent evidence that a cardiologist, had one examined the patient before the operation, would probably have provided advice that would have changed the outcome.",
            "not prevail, because the surgeon had nothing to do with the withdrawal of artificial life support, which was the cause of the patient's death."
        ],
        ans: 2,
        exp: "(C) is the best response, because it is the only answer that correctly requires a causal link between the surgeon's asserted negligence and the injury to the patient.\n\nA plaintiff can prevail in a negligence claim only if she proves that the defendant's negligence was the cause in fact, as well as the proximate cause, of the injury. Since the negligence consists of failure to consult a cardiologist, the plaintiff must show that such consultation would, more likely than not, have prevented the bad outcome (e.g., the cardiologist would have altered the surgical plan or canceled the surgery).\n\n(A) is not the best response because negligence without actual causation does not result in liability. (B) is not the best response because the operation causing the clot is not enough; the specific negligent act (failure to consult) must be the cause. (D) is not the best response because the lawful withdrawal of life support is a foreseeable consequence of the initial injury and does not sever proximate causation."
    },
    {
        id: 24,
        topic: "Vicarious Liability / Independent Contractors",
        fp: "A racetrack held a motorcycle race, which was sponsored by a local motorcycle dealership. Under the sponsorship agreement, the dealership was required to arrange for licensed and trained emergency medical technicians (EMTs) to be present during the race. The dealership contracted with a licensed and reputable emergency medical services (EMS) firm that supplied EMTs for events such as these.\n\nA motorcyclist participating in the race was injured when he lost control of his motorcycle. The motorcyclist was treated at the scene by the EMTs. In removing the motorcyclist's helmet, one of the EMTs twisted the motorcyclist's neck, causing him to become permanently paralyzed.\n\nThe motorcyclist has sued both the EMS firm and the dealership, alleging that the EMT's careless conduct caused his paralysis.",
        q: "Assuming the validity of the motorcyclist's negligence claim against the EMS firm, which of the following best characterizes the dealership's potential liability?",
        opts: [
            "The dealership is directly liable for hiring the EMS firm.",
            "The dealership is vicariously liable, because it owed a non-delegable duty to provide emergency care for the race.",
            "The dealership is vicariously liable, because the EMT was careless in the course of her employment.",
            "The dealership is neither directly liable nor vicariously liable."
        ],
        ans: 3,
        exp: "(D) is the best response, because (1) the dealership did not behave negligently, and (2) the default rule that one who hires an independent contractor is not vicariously liable for the latter's negligence applies here.\n\nFirst, regarding direct liability, the dealership used reasonable care in selecting a licensed and reputable independent contractor, so there is no negligent hiring. Second, regarding vicarious liability, the general rule is that a principal is not vicariously liable for the torts of an independent contractor. While there are exceptions (such as inherently dangerous activities or non-delegable duties), the provision of EMT services at a race is not considered a non-delegable duty of the sponsor under these facts. Therefore, the dealership faces no liability.\n\n(A) is not the best response because there are no facts indicating negligent hiring. (B) is not the best response because there is no recognized non-delegable duty to provide emergency care making a sponsor vicariously liable for independent medical personnel. (C) is not the best response because the EMT is an employee of the EMS firm, not the dealership."
    },
    {
        id: 25,
        topic: "Invasion of Privacy / Appropriation",
        fp: "A well-known movie star was drinking wine at a nightclub. A bottle of the wine, with its label plainly showing, was on the table in front of the movie star. An amateur photographer asked the movie star if he could take his picture and the movie star said, \"Yes.\" Subsequently, the photographer sold the photo to the wine company, whose wine was pictured in the photo. The wine company, without the movie star's consent, used the photo in a wine advertisement in a nationally circulated magazine. The caption below the photo stated, \"This movie star enjoys our wine.\"",
        q: "If the movie star sues the wine company to recover damages as a result of the wine company's use of the photograph, will the movie star prevail?",
        opts: [
            "No, because the movie star consented to being photographed.",
            "No, because the movie star is a public figure.",
            "Yes, because the wine company made commercial use of the photograph.",
            "Yes, unless the movie star did, in fact, enjoy that specific wine."
        ],
        ans: 2,
        exp: "(C) is the best response, because this choice correctly states the standard for the misappropriation-of-identity type of invasion of privacy.\n\nTo establish a prima facie case for invasion of privacy by appropriation, a plaintiff must prove the unauthorized use by the defendant of the plaintiff's picture or name for commercial advantage. Here, the wine company used the movie star's photo for an advertisement (commercial advantage) without his consent. This constitutes misappropriation of identity.\n\n(A) is not the best response because consenting to an amateur photograph is not consent to national commercial exploitation. (B) is not the best response because public figures retain the right to control the commercial exploitation of their likeness. (D) is not the best response because truth (whether he actually enjoyed the wine) is not a defense to the tort of appropriation."
    }
];