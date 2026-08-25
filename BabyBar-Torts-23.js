const examData = [
    {
        id: 1,
        topic: "Negligence / Duty and Breach",
        fp: "The defendant is a supplier of telephone service to the city. Many of the wooden poles from which the defendant's wires are strung have been standing for more than 40 years and are in a rotted condition. A driver lost control of his automobile because he was driving while intoxicated, and he collided with one of the defendant's rotten poles. As a result of the collision, the pole fell over, striking a parked car and injuring the plaintiff, who was sitting in it. The force of the collision would have caused even a reasonably good pole to fall.",
        q: "In an action by the plaintiff against the defendant, should the court find in the plaintiff's favor?",
        opts: [
            "Yes, because it was unreasonable for the defendant to permit its poles to become rotten.",
            "Yes, because it was foreseeable that if a pole fell, it would injure a person sitting in a parked car.",
            "No, because the driver's conduct either amounted to gross negligence or was criminal.",
            "No, because the force of the collision would have caused even a reasonably good pole to fall."
        ],
        ans: 3,
        exp: "The defendant is not liable for harm unless its conduct was a factual and legal cause of it. Its conduct was a factual cause of harm only if the harm would not have occurred without it. If the force of the collision would have caused a good pole to fall, then the fact that the pole was rotten is not a factual cause of its falling.\n\nA and B are incorrect because they do not establish that the defendant's conduct was a factual cause of harm, and liability cannot be imposed unless it was. If the defendant's conduct was a factual cause of harm, the driver's intervention might be a superseding cause that protects the defendant from liability, but only if the intervention was unforeseeable. This does not necessarily depend on whether it was criminal or grossly negligent. C is therefore incorrect."
    },
    {
        id: 2,
        topic: "Negligence / Comparative Fault",
        fp: "A truck and a car collided in an intersection. The drivers asserted negligence claims against each other for damage to their vehicles. In answer to specific questions posed by the court, the jury found that the accident was 60 percent the fault of the truck driver and 40 percent the fault of the car driver. In addition, the jury found that damage to the truck amounted to $1,000 and that damage to the car amounted to $10,000. The jurisdiction had a statute that provided as follows: \"In any negligence action, a plaintiff's recovery shall not be barred by that plaintiff's fault, but the recovery of said plaintiff shall be diminished in proportion to that plaintiff's fault.\"",
        q: "Which of the following correctly states the sum to which the car driver is entitled?",
        opts: [
            "$6,000 ($10,000 less 40 percent).",
            "$4,000 ($10,000 less 60 percent).",
            "$10,000.",
            "$0."
        ],
        ans: 0,
        exp: "The statute given is typical of the \"pure comparative negligence\" approach. Since the car driver's loss amounted to $10,000, and since it was 40 percent his own fault, 40 percent of $10,000 (or $4,000) must be deducted from his recovery. The balance that he is entitled to collect is $6,000. Therefore, B, C, and D are incorrect."
    },
    {
        id: 3,
        topic: "Strict Products Liability / Manufacturing Defect",
        fp: "A boy, who was 11 years old, received a sled manufactured by the sled company from his uncle as a Christmas present. Since he already had a better sled, the boy sold the sled to his neighbor, the plaintiff. The plaintiff was riding the sled down a snow-covered hill when one of the bolts that held it together broke, causing the sled to overturn and injure the plaintiff severely. The bolt broke because of a crack that existed when the sled left the sled factory but which was too minute to be discovered by reasonable inspection.",
        q: "If the plaintiff brings an action against the sled company, should the court find in the plaintiff's favor?",
        opts: [
            "Yes, because the cracked bolt was a defect.",
            "Yes, because the boy did not use the sled before selling it to the plaintiff.",
            "No, because the sale by the boy was outside the regular course of business.",
            "No, because the crack was too minute to be discovered upon reasonable inspection."
        ],
        ans: 0,
        exp: "Strict liability is imposed on the seller of a product that is in a defective condition when sold. Since the bolt was cracked when the sled left the sled factory, the sled company would be held liable if the crack constituted a defect.\n\nB and C are incorrect because the use or sale by the boy would not prevent the imposition of strict liability if the sled was defective when it left the sled factory, so long as such use or sale did not substantially change its condition. D is incorrect because strict liability in tort does not depend on unreasonable conduct by the defendant."
    },
    {
        id: 4,
        topic: "Negligence / Duty of Care",
        fp: "The landlord was the owner of a four-story office building. The entire second floor of the building was leased to an attorney, and the other floors were divided into offices and leased to various other tenants. The attorney was riding in the building elevator when it suddenly and without warning plunged swiftly downward, shaking the attorney up severely. The lease required the landlord to keep the elevator in good repair. Minutes later, the attorney led one of his clients to the elevator. When they were riding in the elevator to the attorney's office the elevator suddenly plunged swiftly downward, stopping short when it reached the bottom of the elevator shaft. The client was severely injured in the fall.",
        q: "The client asserted a negligence claim against the attorney for damages resulting from the elevator accident. Should the court find in the client's favor?",
        opts: [
            "Yes, because the attorney knew or should have known that the elevator might not be working properly.",
            "Yes, because the entire second floor had been leased to the attorney.",
            "No, because the lease required the landlord to keep the elevator in good repair.",
            "No, because the attorney was only a tenant in the building."
        ],
        ans: 0,
        exp: "Negligence is the failure to act as a reasonable person would act in the face of risks that are foreseeable or known to exist. Since a reasonable person would not ordinarily subject others to unnecessary risks, it would probably have been unreasonable (i.e., negligent) for the attorney to subject the client to the danger of a defective elevator if the attorney knew or should have known of the danger. Here, leading the client to the elevator minutes after it plunged downward was likely unreasonable.\n\nHowever, if the attorney did not act unreasonably, he would not be negligent even though he occupied the entire second floor. Thus, B is incorrect. Ordinarily, obligations in a lease flow only between parties to that lease. Some jurisdictions hold that a landlord's lease obligation to keep premises in good repair may impose on the landlord a duty to invitees of tenants. C is incorrect, however, because the attorney continues to be liable for the proximate results of his own negligence even though the landlord might also be liable. While a tenant might not have an obligation to repair the leased premises, D is incorrect because the attorney might be liable for his negligence in allowing the client to use the elevator."
    },
    {
        id: 5,
        topic: "Trespass to Land / Defenses",
        fp: "A trucker was driving a truckload of gravel over a highway in a rural part of the state when, through no fault of her own, one of the tires on her truck blew out, causing the truck to go out of control. The truck overturned, spilling the gravel onto the land of the landowner, which was adjacent to the road. The trucker, who was unhurt, returned later with another truck and a tractor equipped with a power shovel. Using the power shovel, the trucker scooped up the spilled gravel and loaded it onto the other truck.",
        q: "If the landowner asserts a claim against the trucker for trespass to land, what should the court award the landowner?",
        opts: [
            "Nominal damages only.",
            "All damages resulting from the spilling of gravel onto the landowner's land.",
            "Only the damages caused by the trucker's removal of the gravel from the landowner's land.",
            "No damages."
        ],
        ans: 2,
        exp: "One who enters the realty of another to retrieve a chattel that got there through no fault of his or her own has a qualified privilege to do so, but he or she must compensate the landholder for any actual damage that results.\n\nA and D are therefore incorrect. Unless damage to the realty of another results from participation in an abnormally dangerous activity, liability for it is imposed only if the entry resulted from fault (i.e., was intentional or negligent). Since transporting gravel is not an abnormally dangerous activity, and since the gravel was spilled without any fault on the part of the trucker, the trucker is not liable for damage resulting from spilling the gravel. B is therefore incorrect."
    },
    {
        id: 6,
        topic: "Trespass to Land",
        fp: "A woman with an open backyard got a new puppy. To keep the puppy on her property, she built a fence around the backyard. A year later, a storm knocked down the fence. This time, the woman hired a local contractor to rebuild the fence. The contractor built the fence in the same place as the old fence. The next year, the woman's neighbor had some surveying done and discovered the fence extended an inch into her property. At the time of the fence's construction, neither the woman nor the neighbor knew that the fence was actually on the neighbor's property.",
        q: "If the neighbor asserts a claim for trespass, should the court find in the neighbor's favor?",
        opts: [
            "No, because the contractor built the fence.",
            "No, because the woman did not know that her fence was on the neighbor's property.",
            "Yes, because the woman's fence resulted in a taking of property.",
            "Yes, because the woman's fence is in the neighbor's yard."
        ],
        ans: 3,
        exp: "A claim of trespass requires physical invasion by the defendant, the intent to bring about the physical invasion, and causation. Importantly, the intent required is the intent to enter someone else's land, not the intent to commit a trespass. Here, since the woman intentionally built the fence on the neighbor's land, she committed a trespass.\n\nA is incorrect because the woman did not personally have to enter the neighbor's land. For trespass, it is enough if the defendant does something that causes the invasion of another's land. Here, the woman directed the contractor to build a fence for her. B is incorrect because the woman still intended to enter the neighbor's land, even if she didn't know that doing so was a trespass. C is incorrect because a taking refers to an action by the government, not a private individual."
    },
    {
        id: 7,
        topic: "Products Liability / Breach of Warranty",
        fp: "A man bought a used car from the car dealer. Although the car dealer assured the man that he believed the car to be in good condition, the contract of sale signed by both the man and the car dealer contained the phrase \"This Vehicle Sold AS IS\" in large black letters. The man was driving the car the following day when the steering jammed, causing the car to collide with a power pole. The man's wife, who was sitting beside him in the car, was injured in the crash.",
        q: "If the wife asserts a claim for damages against the car dealer on the grounds that the car dealer breached the implied warranty of merchantability, should the court find in the wife's favor?",
        opts: [
            "No, because the contract of sale contained the phrase, \"This Vehicle Sold AS IS.\"",
            "No, because the car dealer did not enter into any contractual relationship with the wife.",
            "Yes, because the vehicle was unfit for ordinary use.",
            "Yes, because the car dealer said that he believed the car to be in good condition."
        ],
        ans: 0,
        exp: "The phrase \"AS IS\" disclaims the implied warranty of merchantability. In addition, it may be argued that it modifies any express warranties or representations that resulted from the car dealer's assurance that he believed the car to be in good condition, and that it would have placed the reasonable consumer on notice that the car might not be in good condition. In any event, A contains the only combination of conclusion and reason that are reasonably related to each other.\n\nB is incorrect because all jurisdictions permit an action for breach of the implied warranty of merchantability to be brought by any member of the purchaser's household. C and D are incorrect because the phrase \"AS IS\" disclaimed the implied warranty that the car was fit for ordinary use."
    },
    {
        id: 8,
        topic: "Conversion / Damages",
        fp: "The plaintiff brought her car to the defendant, a used car dealer, asking him to sell it for her. The defendant said that he would attempt to do so on consignment, at a commission consisting of 20 percent of the sale price. The plaintiff said that the terms were acceptable to her, but that because she had recently spent $800 for a custom two-tone, black-and-silver paint job, she wanted the car kept out of the sun. The defendant agreed, and the plaintiff left the car with him. The defendant left the car in the sun, which caused its paint to fade. Believing that a new paint job would make the car easier to sell, the defendant had it painted red without consulting the plaintiff. Before it was repainted, the defendant drove the plaintiff's car 4,000 miles on his own personal business. After it was painted, the defendant's customers drove it an additional 1,000 miles while deciding whether to purchase it. Although the value of the plaintiff's car did not change while it was in the defendant's possession, the defendant was unable to sell the car. The plaintiff subsequently asserted a conversion claim against the defendant.",
        q: "If the plaintiff is successful in her conversion action, what is the most she will be entitled to recover?",
        opts: [
            "The value that the car had at the time the plaintiff delivered it to the defendant.",
            "The cost of restoring its paint to the condition that existed at the time she delivered it to the defendant.",
            "The reasonable value of the car's use for 4,000 miles.",
            "Nothing."
        ],
        ans: 0,
        exp: "In an action for conversion, the defendant is liable for the full value of the chattel at the time of conversion. Consequently, the plaintiff can recover the value of the car at the time she delivered it to the defendant. B, C, and D are therefore incorrect."
    },
    {
        id: 9,
        topic: "Negligence / Intervening Causes",
        fp: "A company made a strong insecticide. The container bore a label that read: \"For killing termites. Caution: This product is intended for use by professional exterminators only. Unauthorized use by any other persons may be dangerous.\" The shop owner placed the container on a shelf in his shop, where it was discovered by an independent contractor who the shop owner periodically hired to clean his shop. Since the cleaner thought there were termites in his house, he opened the container and poured some of it into a plastic bag that he then brought home. The next day, the cleaner's three-year-old daughter found the plastic bag and ate some of the insecticide, becoming seriously ill as a result. A statute in the jurisdiction adopted the all-or-nothing rule of contributory negligence.",
        q: "In a negligence action by the girl against the company, what is the company's most effective argument in defense?",
        opts: [
            "The cleaner was contributorily negligent.",
            "The shop owner's conduct was an intervening cause of harm.",
            "The cleaner's conduct was an intervening cause of harm.",
            "The company did not act unreasonably."
        ],
        ans: 3,
        exp: "Negligence is unreasonable conduct. If the company did not act unreasonably, it could not have been negligent. Although a court might not come to this conclusion, the argument in D is the only one listed that could possibly support the company's defense.\n\nA is incorrect because contributory negligence is unreasonable conduct by a plaintiff. In this case, the plaintiff is the girl, not the cleaner. B and C are incorrect because an intervening cause of harm does not cut off a wrongdoer's liability unless that intervening cause was unforeseeable."
    },
    {
        id: 10,
        topic: "Defense of Property",
        fp: "A warehouse owner was the owner of a warehouse that was usually unattended at night. As a result, burglars had broken in on several occasions and had stolen valuable merchandise from the warehouse. The warehouse owner looked into the possibility of hiring a security guard but decided that it would be too expensive. Instead, he installed an explosive device in the doorway, rigging it to explode if anyone opened the door without first inserting a key in a specially constructed slot. A burglar was attempting to break into the warehouse owner's warehouse for the purpose of stealing when the explosive device detonated while he was trying to open the door. The burglar was seriously injured in the explosion.",
        q: "If the burglar is successful in an action against the warehouse owner, what is the most likely reason?",
        opts: [
            "It was negligent for the warehouse owner to install the explosive device, since it was foreseeable that a person entering on legitimate business might be injured by it.",
            "The warehouse owner used excessive force to defend his property, since the explosive device was liable to inflict serious or deadly injury.",
            "The use of a mechanical device is not permitted in defense of property.",
            "The explosive device was just as likely to injure an innocent bystander as a thief."
        ],
        ans: 1,
        exp: "A landholder is entitled to use reasonable force to prevent a trespass. Serious or deadly force is not regarded as reasonable, however, since human life is much more valuable than mere property. The use of such force is therefore a battery.\n\nNegligence is the breach of a duty of reasonable care owed by the defendant to the plaintiff. Ordinarily, a defendant owes a plaintiff a duty of reasonable care if the defendant's conduct creates a foreseeable risk to the plaintiff. Thus, if the risk to persons entering on legitimate business was foreseeable, the warehouse owner owed a duty of reasonable care to such persons. This does not mean that he owed such a duty to everyone, however, or that he owed it to the burglar. A is incorrect for this reason and because of a rule applied by most jurisdictions that a landholder owes no duty of reasonable care to trespassers. C is incorrect because no rule of law prohibits the use of mechanical devices unless they inflict excessive force. Although courts have made statements like that in D, it is irrelevant here since the device did not injure an innocent bystander. D is therefore incorrect."
    },
    {
        id: 11,
        topic: "Conversion / Intent",
        fp: "After living together for several months, a man and his girlfriend began to argue frequently. The following Saturday, the girlfriend took all the man's possessions, including his television set, which was valued at $600, to a swap meet in hopes of selling them. At the swap meet, she put up a sign that said, \"Moving. Everything Must Be Sold Today.\"\n\nA neighbor was browsing at the swap meet when she saw the television set at the girlfriend's booth. She asked whether it was in good condition, and when the girlfriend said that it was, she asked the price. The girlfriend said, \"$50.\" The neighbor immediately handed the girlfriend the cash, placed the television in her station wagon, and hurried home.",
        q: "In an action by the man against the neighbor for conversion, should the court find in the man's favor?",
        opts: [
            "Yes, because the neighbor desired to make the television her own, and did so.",
            "Yes, because the price of $50 should have made the neighbor aware that there was something suspicious about the sale.",
            "No, since it was reasonable for the neighbor to believe that the girlfriend owned the television set and that the price was low because the girlfriend needed to sell it in a hurry.",
            "No, since the television was not in the man's possession when the neighbor acquired it."
        ],
        ans: 0,
        exp: "An intentional exercise of dominion and control over a chattel by a defendant is a conversion if the plaintiff was lawfully entitled to possession of the chattel, and if he or she was thereby damaged. In a conversion case, \"intent\" means a desire (or knowledge with certainty) that the defendant's act will affect the particular chattel involved. In this case, the neighbor's desire to make the television hers and to carry it off satisfies the intent requirement, even though it was reasonable for her to believe that the sale was legitimate.\n\nB and C are therefore incorrect. D is incorrect since the plaintiff need not be in possession of the chattel at the time of conversion, so long as he or she had a right to possess it."
    },
    {
        id: 12,
        topic: "Negligence / Guest Statutes",
        fp: "The plaintiff and the defendant lived on the same street and worked in the same office, so they formed a car pool, each driving his own car on alternate days. One day while the defendant was driving, the car in front of his stopped suddenly and without warning. Since the defendant had taken his eyes off the road for a moment to look at the plaintiff, he was unable to stop in time and collided with the rear of the stopped car. The plaintiff was injured as a result of the collision.\n\nA statute in the jurisdiction provides as follows: \"No person shall maintain an action for damages resulting from negligence in the operation or ownership of an automobile if said person was a guest in said automobile at the time said damages allegedly occurred.\"",
        q: "In an action by the plaintiff against the defendant for damages resulting from his injuries, which of the following arguments is most likely to result in a judgment for the plaintiff?",
        opts: [
            "The fact that most drivers have insurance makes the statute obsolete.",
            "The plaintiff was not a guest, since his driving on alternate days was consideration for the ride.",
            "The defendant's conduct was reckless and therefore constituted aggravated negligence, a lawsuit that is not prohibited by the statute.",
            "Enforcement of the statute will leave the plaintiff without a remedy."
        ],
        ans: 1,
        exp: "A guest rides free. If something of value-like rides on alternate days-is given in return for passage, courts will conclude that the passenger was not a guest for purposes of the automobile guest statute.\n\nIn a negligence claim, the existence of insurance coverage is not relevant in determining liability. A is incorrect for this reason and because the \"guest\" statute was originally created to protect insurance companies against collusive claims. Recklessness or aggravated negligence is usually held to be actionable in the face of a statute that prohibits actions for negligence. C is incorrect, however, because the facts do not indicate the conscious disregard of an obvious and serious risk that aggravated negligence requires. D is probably an accurate statement. It is incorrect, however, because it does not justify non-enforcement of the statute."
    },
    {
        id: 13,
        topic: "Strict Products Liability / Substantial Change",
        fp: "The company is the manufacturer of a device that was designed for use by professional rescuers in removing accident victims who have become pinned in automobiles. A fire department purchased the device from a firefighter supply store. Subsequently, the fire department was called to the scene of an accident in which a woman was trapped in her car. The fire chief directed a volunteer firefighter to use the device to free the woman from her car, although he knew that the volunteer firefighter had not been trained in its use and had never heard of it before. Due to a crack caused by a manufacturing defect, the device operated improperly, injuring the volunteer firefighter.",
        q: "If the volunteer firefighter institutes an action against the company, what is the company's most effective argument in defense?",
        opts: [
            "It had acted reasonably in its marketing and sale of the device.",
            "The firefighter supply store substantially changed the device before selling it to the fire department.",
            "The volunteer firefighter assumed the risk, since he attempted to use the device without proper training.",
            "The volunteer firefighter's attempt to use the machine without training was an independent intervening cause of harm that broke the chain of proximate causation."
        ],
        ans: 1,
        exp: "A defendant manufacturer can be relieved of strict products liability if an intermediate handler of the product substantially changes the product before sending it on through the stream of commerce.\n\nStrict liability may be imposed regardless of whether the defendant was negligent. Since the basis of the volunteer firefighter's action is a claim that the product was defective (i.e., strict liability in tort), the fact that the company acted reasonably would not furnish it with an effective defense. A is therefore incorrect. A plaintiff assumes the risk when he or she knows of it and voluntarily encounters it. Since the volunteer firefighter had never heard of the device before, he could not have known of the risk or assumed it. C is therefore incorrect. An intervening cause of harm is one that came between the defendant's conduct and the plaintiff. It is \"independent\" if it is not related to the risk created by the defendant. D is incorrect because a plaintiff's own conduct is not usually regarded as an intervening cause of harm."
    },
    {
        id: 14,
        topic: "Negligence / Causation",
        fp: "As a result of her neighbor's negligence, a baker's shoulder and eye were both injured. The baker went immediately to her eye doctor. The eye doctor treated the injury to the baker's eye but suggested that she see an orthopedist for treatment of her shoulder. The following day, the baker visited an orthopedist, who treated the baker's shoulder. Because of negligent treatment by the eye doctor, the baker's nose became infected, and because of negligent treatment by the orthopedist, she lost the use of her elbow.",
        q: "In an action by the baker against the eye doctor, what is the court most likely to hold the eye doctor liable for?",
        opts: [
            "Nothing, since all the injuries were caused by the negligence of the neighbor.",
            "The injury to the baker's nose, since it is the only one of her injuries that was caused by his negligence.",
            "The injury to the baker's nose and the injury to the baker's elbow, since both were caused by his negligence.",
            "The injuries to the baker's nose, shoulder, and elbow, since all were caused by his negligence."
        ],
        ans: 1,
        exp: "Since it is given that the injury to the baker's nose resulted from the eye doctor's negligence, the eye doctor is liable for it.\n\nIt is, of course, possible for harm to have more than one proximate cause. Thus, even if the neighbor's conduct was a proximate cause of the injury, the eye doctor's conduct may also be a cause of it, making the eye doctor liable as a joint tortfeasor. (In most jurisdictions, joint tortfeasors are jointly and severally liable.) A is therefore incorrect. Conduct is a factual cause of harm if the harm would not have occurred without it. Since the injuries to the baker's elbow and shoulder would have occurred even without the negligence of the eye doctor, his conduct was not a factual cause of those injuries, and the eye doctor could not be held liable for them. C and D are therefore incorrect."
    },
    {
        id: 15,
        topic: "Negligence / Elements",
        fp: "A commercial airline pilot was taking off from a large city airport when her plane hit a bird. The bird got sucked into the engine and damaged it. Because the plane could no longer fly, and because the pilot did not think she could make it back to the airport, she decided to make an emergency landing in a nearby river. When the pilot landed the plane in the river, the plane caused a huge wave that capsized a couple in a canoe. The couple, who weren't very good swimmers, were injured when they almost drowned. All 300 passengers on the plane were uninjured. The jurisdiction followed comparative negligence rules.\n\nThe couple sued the pilot for their injuries.",
        q: "What does a jury need to find in order to rule in the couple's favor?",
        opts: [
            "The pilot's decision to land in the river was unreasonable under the circumstances.",
            "The couple were in the zone of danger caused by the landing plane.",
            "The couple were not negligent in canoeing while not being very good swimmers.",
            "That the pilot was negligent when she hit the bird."
        ],
        ans: 0,
        exp: "A negligence claim requires the plaintiff to show that the defendant failed to use reasonable care under the circumstances. Here, if the couple can show that the pilot's decision to land the plane in the river was unreasonable, the couple can recover for their damages.\n\nB is incorrect because the zone of danger rule is part of a claim for negligent infliction of emotional distress. C is incorrect because a court can still find in the couple's favor even if they were also negligent. In a comparative negligence jurisdiction, the couple's negligence would simply reduce their award. D is incorrect because the jury could still find that the pilot was negligent in choosing to land in the river, even if she was not negligent in hitting the bird."
    },
    {
        id: 16,
        topic: "Intentional Torts / Fraud Vitiating Consent",
        fp: "The plaintiff was attending a nightclub at which a hypnotist was performing. Before the show began, a request was made for a volunteer to assist the hypnotist with his act, and the plaintiff volunteered. She was taken backstage to the hypnotist's dressing room, where she and the hypnotist had a conversation. Following their conversation, the plaintiff agreed to participate in the hypnotist's show. During the course of the performance, the hypnotist attempted to hypnotize the plaintiff on stage. He then touched her skin with an electric cattle prod (a device that produces an electric shock and is used for handling stubborn cattle), causing her great pain and discomfort.\n\nThe plaintiff subsequently instituted an action against the hypnotist. In it, she alleged that he committed various intentional torts against her by touching her with the cattle prod.",
        q: "If one of the following facts were established at the trial, which one would be most helpful to the plaintiff in responding to the hypnotist's defense of consent?",
        opts: [
            "During the conversation in the hypnotist's dressing room, the hypnotist stated that he was going to attempt to hypnotize the plaintiff on stage, he was usually successful in hypnotizing volunteers, and if he was successful, the cattle prod would cause her no discomfort.",
            "During the conversation in the hypnotist's dressing room, the hypnotist promised to pay her $100 for participating in the show; he never did pay her; and, in fact, when he promised that he would pay her, he did not intend to do so.",
            "During the conversation in the hypnotist's dressing room, the hypnotist stated that the electric cattle prod produced a mild electric shock that would cause no real discomfort, when he knew that this was not true.",
            "When the plaintiff consented to participating in the hypnotist's act, she did not know that contact with the electric cattle prod would result in great pain and discomfort."
        ],
        ans: 2,
        exp: "Consent means willingness, and the affirmative defense of consent is effective because of the rule that a plaintiff who is willing for a particular thing to happen to him or her has no right to complain when it does. For this reason, a defendant does not commit a tort when he or she does something to which the plaintiff has consented. If the defendant induces his or her consent by fraud, however, the consent does not have this effect and does not privilege the defendant's conduct. A defendant induces consent by fraud when he or she knowingly misrepresents the nature of the act to which the plaintiff is consenting. Thus, if the hypnotist told the plaintiff that the cattle prod would produce no real discomfort when he knew that this was false, he fraudulently induced her consent to contact with it and was not privileged by her consent.\n\nIn A, the plaintiff consented to the contact even though she was aware that the hypnotist was not always successful in hypnotizing volunteers, and that if he was not successful in hypnotizing her, the cattle prod might cause discomfort. Since she knew the nature of the act to which she was consenting, her consent would furnish the hypnotist with a privilege. A is therefore incorrect. In B, although the hypnotist defrauded the plaintiff by promising money that he did not intend to pay, the fraud did not relate to the nature of the act to which she was consenting. He would, therefore, be privileged by her consent, and B is therefore incorrect. A mistake that induces consent does not destroy the effect of that consent unless the defendant is aware of the mistake. Since there is no indication in D that the hypnotist was aware of the plaintiff's mistake regarding the effect of a cattle prod, her consent privileged him, and D is therefore incorrect."
    },
    {
        id: 17,
        topic: "Defamation / Statement of Fact",
        fp: "A professor publicly stated her opposition to the consumption of alcohol. As a result, she is much in demand as a lecturer on the evils of intoxication. One of her slogans is, \"When you drink, make it fruit juice.\" The company, a producer of packaged apple juice, invited the professor to participate in a promotional apple-juice-drinking contest that it was holding. The professor, who succeeded in drinking one and one-half quarts of chilled apple juice without stopping for a breath, was declared the winner.\n\nThe student newspaper ran a photo of the professor holding the winner's trophy over a caption that read, \"Prof. drinks them all under the table, winning first prize at the company's drinking contest.\" A story that described the fruit-juice drinking contest in detail appeared on the same page as the photo but some distance from it. The day after the photo and story appeared, an organization that had hired the professor to lecture on the evils of alcohol canceled its contract with the professor because, after seeing the photo and caption in the newspaper, some members believed that the professor was a drinker of alcohol.",
        q: "If the professor sues the newspaper for defamation, the court should instruct the jury that the statements made by the newspaper in the photo and caption were not defamatory if what else was true?",
        opts: [
            "The organization members who saw the photo and caption did not read the story.",
            "The reasonable person would have read the story.",
            "A substantial group of respectable persons would have read the story.",
            "The reasonable person would not have read the story."
        ],
        ans: 0,
        exp: "A statement is defamatory if it is likely to cause a substantial group of respectable people to lose respect for the person about whom it is made. A statement that the professor drank a large quantity of alcohol might be defamatory because many people regard such conduct as disreputable, and because it implies that the professor's public statements were dishonest. A statement that she drank a large quantity of fruit juice clearly would not be defamatory. If an allegedly defamatory statement is ambiguous (i.e., has two possible meanings), it is held to mean what the reasonable person would think it means. Thus, the statements made in the photo and caption would not have been defamatory if the reasonable person would have believed them to mean that the professor drank fruit juice. If the reasonable person would have read the story, he or she would have known that this was what the statements in the photo and caption meant.\n\nB and C are incorrect because the standard used to determine the meaning of an ambiguous statement is objective and does not depend on what any particular group of persons thought. D is incorrect because if the reasonable person would not have read the story, the photo and caption might mean that the professor had drunk a large quantity of alcohol, and thus it might be a defamatory statement."
    },
    {
        id: 18,
        topic: "Misrepresentation / Reliance",
        fp: "An athlete appeared in a television commercial. While films of his medal-winning performances showed in the background, the athlete ate a candy bar. He said that he had been eating candy bars for energy ever since he was a child. He ended the commercial by smiling and saying, \"Who knows? Maybe candy bars gave me the power to win.\"\n\nThe plaintiff purchased a case of 24 candy bars after seeing the commercial several times on television. After tasting one, however, he found he did not like the flavor.",
        q: "If the plaintiff brings an action against the athlete for misrepresentation, which of the following arguments will be most helpful in the athlete's defense?",
        opts: [
            "The athlete is not in the business of selling candy bars.",
            "The script for the commercial was not written by the athlete.",
            "The plaintiff was not in privity with the athlete.",
            "The plaintiff has not sustained damage as the result of a false assertion by the athlete."
        ],
        ans: 3,
        exp: "Liability for misrepresentation may be imposed upon a defendant who makes an intentionally (or, in some jurisdictions, negligently) false assertion of fact upon which the plaintiff justifiably relies to his or her detriment. The athlete's only assertion of fact was that he ate candy bars for energy. There is no indication, however, that this assertion was false. The athlete made no assertion about the flavor of the candy bar, so even if the plaintiff's dislike of the flavor can be regarded as damage, it is not damage that proximately resulted from his reliance on an assertion by the athlete.\n\nA is incorrect because misrepresentation liability can be imposed on anyone who makes a misrepresentation, and also because the facts indicate that the athlete is in the business of selling candy. If the athlete's statements were misrepresentations, the fact that he said them could result in liability even though they were written by someone else. B is therefore incorrect. C is incorrect because liability for intentional misrepresentation may be imposed to benefit anyone who was damaged by his or her justified reliance on the misrepresentation, regardless of privity."
    },
    {
        id: 19,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "A demolition contractor was hired by a builder to demolish a building located a half-mile from a horse breeder's farm. The demolition contractor was using dynamite for that purpose. The breeder called the contractor and warned him that sounds from the explosions were scaring his horses. The day after the breeder called, sounds of the explosions so frightened one of the breeder's horses that the horse tried to jump over a fence, injuring herself in the process.",
        q: "If the breeder institutes an action against the demolition contractor on a strict liability theory, which of the following would be the demolition contractor's most effective argument in defense?",
        opts: [
            "The breeder's farm was not within the foreseeable zone of danger.",
            "The possibility that noise will frighten animals is not one of the risks that makes blasting an ultra-hazardous activity.",
            "The demolition contractor used reasonable care in setting off the blast.",
            "The demolition contractor was working under contract to the builder."
        ],
        ans: 1,
        exp: "Although blasting is generally recognized to be an ultra-hazardous activity, strict liability applies only to harm that resulted from the risks that made the activity ultra-hazardous. The possibility of noise frightening animals accompanies a great many activities that are not ultra-hazardous, so it is probably not one of the risks that makes blasting ultra-hazardous.\n\nA is incorrect because the breeder's phone call announcing that harm was occurring on his farm made it foreseeable that harm would continue to occur there if the activity was continued. C is incorrect because strict liability may be imposed even though the defendant acted reasonably. While the demolition contractor's relationship with the builder might impose liability on the builder as well, it would not relieve the demolition contractor from liability for his acts. D is therefore incorrect."
    },
    {
        id: 20,
        topic: "Landowner Duty / Invitees",
        fp: "The landlord was the owner of a small office building. Her own office was located on the ground floor of the building, the second floor was leased to a company, and the third and fourth floors were divided into smaller offices that were rented to various tenants on a month-to-month basis. Although the building was equipped with an elevator, occupants of the building frequently used a stairway over which the landlord retained control. One day, while one of the company's employees was walking down the stairs from the second floor, she cut her hand on a jagged part of the handrail that ran alongside the stairs. She commenced an action against the landlord, alleging that the handrail was jagged because of negligence by the landlord.",
        q: "Which of the following is an accurate statement about the case of the injured employee vs. the landlord?",
        opts: [
            "The company's employee was an invitee since she was an employee of one of the landlord's tenants.",
            "The company's employee was contributorily (or comparatively) negligent if the reasonable person in her situation would have noticed the jagged condition of the handrail and would have avoided being injured by it.",
            "The company's employee was an invitee, and she was contributorily (or comparatively) negligent if the reasonable person in her situation would have noticed the jagged condition of the handrail and would have avoided being injured by it.",
            "The company's employee was neither an invitee nor was she contributorily (or comparatively) negligent."
        ],
        ans: 2,
        exp: "An invitee is one whose presence confers an economic benefit on the landholder. That which enables a tenant to do business on the premises confers economic benefit on the landholder by making the premises attractive to the tenant. This applies to the presence of a tenant's employees, and makes them invitees of the landlord. Contributory (comparative) negligence is unreasonable conduct by the plaintiff. If the reasonable person in the employee's shoes would have seen and avoided the dangerous condition, then the employee's failure to do so was negligent."
    },
    {
        id: 21,
        topic: "Vicarious Liability / Respondeat Superior",
        fp: "A building inspector was employed by the city to conduct periodic inspections of business premises located in a territory to which she was assigned. The instruction manual that the city furnished to its inspectors contained instructions on testing draperies for fire-retardant properties. In large boldface letters, the manual stated, \"NEVER EXPOSE DRAPERIES TO FLAME WHILE THEY ARE HANGING IN PLACE.\"\n\nOne of the businesses in the building inspector's territory was a nightclub. On one of her inspections of the nightclub, the building inspector asked the manager of the business whether the window draperies were fire-retardant as required by the city's building code. The manager responded that they were. Although the building inspector was familiar with the instructions in the manual, she was in a hurry. Taking a cigarette lighter from her pocket, she held its flame under one of the draperies where it was hanging. The drapery caught fire, which spread, completely destroying the building. A passerby was injured in the fire.",
        q: "If the passerby brings an action for damages against the city on a theory of respondeat superior, will the court rule in the passerby's favor?",
        opts: [
            "No, because the building inspector was acting in violation of specific instructions from her employer.",
            "No, because the building inspector's duties involve the exercise of unsupervised discretion.",
            "Yes, because the building inspector was negligent.",
            "Yes, whether or not the building inspector was negligent."
        ],
        ans: 2,
        exp: "Under the doctrine of respondeat superior, an employer is vicariously liable for the negligence of an employee committed within the scope of employment. An employee is acting within the scope of employment if his or her conduct is intended to further the interests of his or her employer and if his or her employer has a right to control his or her conduct. Since the building inspector was attempting to find out whether the drapes were fire-retardant, which was part of what the city hired her to do, and since the city had the right to tell her how to test drapes, she was acting within the scope of her employment even if she was violating specific instructions that she received from the city.\n\nA is therefore incorrect. B is a fabrication with no basis in law, since even when an employee's conduct is unsupervised, respondeat superior may result in the imposition of vicarious liability on his or her employer. D is incorrect because under respondeat superior; an employer is vicariously liable only for that for which the employee is liable."
    },
    {
        id: 22,
        topic: "Negligence / Proximate Cause",
        fp: "A statute provides that every motor vehicle must be equipped with an ignition lock, and that it shall be a misdemeanor for any person to park a motor vehicle without locking it and removing the ignition key. The statute was enacted after many accidents involving stolen cars. The defendant left his car parked on a public street with the ignition key in it, in violation of the statute. A small monkey that had escaped from a nearby circus got in the car, managed to turn the key, and drove the car down the street before hitting the plaintiff.",
        q: "If the plaintiff sues the defendant, will the plaintiff's claim succeed?",
        opts: [
            "Yes, because it was unreasonable for the defendant to leave his keys in the ignition.",
            "Yes, because the statute was designed to prevent accidents involving stolen cars.",
            "No, because the intervention of the monkey was likely unforeseeable.",
            "No, because the intervention of the monkey was likely foreseeable."
        ],
        ans: 2,
        exp: "It may have been unreasonable for the defendant to leave his keys in the ignition. If so, he was negligent. Even if his conduct was not unreasonable, his violation of the ignition key statute may result in a presumption of negligence if the statute was designed to prevent accidents involving stolen cars. Negligence does not result in liability, however, unless it is a proximate (i.e., factual and legal) cause of harm. Conduct is a factual cause of harm if the harm would not have occurred without it. Since the monkey probably would not have moved the defendant's car and struck the plaintiff with it had the defendant not left his key in the ignition, the defendant's conduct was a factual cause of the plaintiff's injury. A factual cause of harm is a legal cause if the harm was foreseeable and not brought about by an unforeseeable intervening cause (i.e., a superseding cause). Since the accident would not have occurred without the monkey's conduct, and since the monkey's conduct came between the defendant's conduct and the plaintiff's injury, it was an intervening cause. If it was unforeseeable, it was a superseding cause of the plaintiff's harm, and the defendant's conduct was not a proximate cause of it. Thus, the plaintiff will lose his case against the defendant unless it is found that the monkey's intervention was foreseeable. This is unlikely.\n\nEven if the defendant's conduct was reasonable, his violation of the statute might result in a presumption of negligence. A is therefore incorrect. Even if the violation of the statute does not result in a presumption of negligence, the defendant's conduct might have been unreasonable and therefore negligent. B is therefore incorrect. D is incorrect because an intervening cause of harm is not superseding unless it was unforeseeable."
    },
    {
        id: 23,
        topic: "Invasion of Privacy / Appropriation",
        fp: "The state governor was attending a major league baseball game when a member of the home team hit a home run. The governor jumped to his feet and cheered loudly, along with the rest of the crowd. A freelance photographer took his picture while he was cheering. When the photograph was developed, the photographer had it imprinted on targets. With toy plastic darts, the photographer marketed and sold several thousand. The governor sued the photographer for invasion of privacy.",
        q: "On which of the following theories is the governor most likely to be successful in his action against the photographer?",
        opts: [
            "Appropriation of identity.",
            "Public disclosure.",
            "Intrusion.",
            "False light."
        ],
        ans: 0,
        exp: "Appropriation of identity is committed when the defendant, without the plaintiff's permission, uses the plaintiff's identity for a commercial purpose. Since the photographer sold games that were imprinted with the governor's likeness, a court could conclude that he is liable for appropriation.\n\nPublic disclosure is committed when the defendant publicly discloses a private fact about the plaintiff, the disclosure of which would offend the reasonable person in the plaintiff's position. Since a photo of the governor's face as it appeared in a public place is obviously not a private fact, B is incorrect. Intrusion is committed by intentionally invading the plaintiff's private space in a manner that would offend the reasonable person in the plaintiff's position. Since the photographer snapped the photo in a public place, he did not invade the governor's private space, and C is incorrect. False light is committed by publishing false statements about the plaintiff that, although not defamatory, are in some way embarrassing or damaging. Since the photographer did not publish any statements about the governor, D is incorrect."
    },
    {
        id: 24,
        topic: "False Imprisonment / Intent",
        fp: "A professor was disturbed by the fact that students frequently left the room during her lectures, so she instructed her teaching assistant to lock the door of her classroom 10 minutes after the class began and not to unlock it again until 10 minutes before the class was scheduled to end. On Thursday, a student attended the professor's four o'clock class. By five minutes past four, the student was sound asleep in his seat. At ten minutes past four, the teaching assistant locked the classroom door as instructed by the professor, unlocking it at ten minutes to five. When the class ended at five, the student, who had slept through the class, was awakened by a classmate and left the room. The classroom had been painted the previous day with a paint to which the student was allergic, although neither the professor, the teaching assistant, nor the student knew about it. As a result of his exposure to the paint in the room, the student developed allergic symptoms later that day that required hospitalization.",
        q: "If the student institutes an action for false imprisonment against the professor, who will win?",
        opts: [
            "The student, because his illness resulted from the professor's intentional confinement of him.",
            "The student, since a professor owes her students a duty to refrain from exposing them to unreasonable risks of foreseeable harm.",
            "The professor, since she did not know with substantial certainty that harm would result from locking the door.",
            "The professor, since she did not confine the student against his will."
        ],
        ans: 3,
        exp: "False imprisonment requires intentional confinement, which is an overcoming of the plaintiff's will to leave. Since a sleeping person has no will to leave, the student was not confined by the locked door.\n\nA is therefore incorrect. B is based on an inaccurate statement since the risk probably was not a foreseeable one, but it is incorrect in any event because false imprisonment requires intent. If the professor intentionally confined the student, she would be held liable for all the harm that foreseeably resulted. C is incorrect, however, because she did not confine him."
    },
    {
        id: 25,
        topic: "Defamation / Fault",
        fp: "The Lovers of God is a small religious sect. During the 19th century, they were prosecuted for engaging in religious rituals that involved public nudity and group sex. Some non-members of the sect continue to associate it with illicit sex and continue to call its members \"Makers,\" a term coined by 19th-century journalists who campaigned against the sect.\n\nA minister ordained in the Church of Love, a religious organization that is not associated in any way with the Lovers, spoke at a local meeting. The following day, a local daily newspaper printed an article about the meeting. The article referred to the minister as \"a minister of the Church of Love, better known as the Makers (Lovers of God).\" The minister sued the newspaper, alleging that the reference to him as a minister of \"the Makers (Lovers of God)\" was defamatory.",
        q: "In his lawsuit, what does the minister need to prove?",
        opts: [
            "That the newspaper knew, or that the reasonable publisher would have known, that the minister was not affiliated with the Lovers of God.",
            "That the newspaper entertained serious doubts about whether or not the minister was affiliated with the Lovers of God.",
            "That the newspaper knew that \"the Makers (Lovers of God)\" were associated with shame or disgrace in the minds of some readers.",
            "That the newspaper made the statement, but the minister is not required to prove fault since the minister is not a public person."
        ],
        ans: 0,
        exp: "In a defamation action by a private person against a professional publisher (media defendant), the plaintiff must prove either actual malice or negligence. If the newspaper knew the statement to be false, it had actual malice. If the reasonable publisher would have known the statement to be false, the newspaper acted negligently.\n\nB describes actual malice and is incorrect because a plaintiff who is not a public person is not required to prove actual malice. C is incorrect because no liability can be imposed unless the newspaper knew, or reasonably should have known, that the statement was false. D is incorrect since liability without fault cannot be imposed in an action for defamation against a professional (media defendant) publisher."
    }
];