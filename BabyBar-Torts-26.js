const examData = [
    {
        id: 1,
        topic: "Res Ipsa Loquitur / Medical Malpractice",
        fp: "Six months after a doctor performed surgery on her, a patient was X-rayed by another doctor. The X-ray disclosed a surgical instrument inside the patient's chest. The first doctor was the only person who had ever performed surgery on the patient. The patient subsequently asserted a medical malpractice claim against the doctor, alleging that the doctor had negligently left the surgical instrument inside her while operating on her.",
        q: "If an expert testifies that surgeons do not usually leave instruments inside a patient's body unless they are acting unreasonably, may the patient rely on res ipsa loquitur in her claim against the doctor?",
        opts: [
            "No, because the doctrine of res ipsa loquitur is not applicable to a claim for professional malpractice.",
            "No, because a jury of laypersons is not competent to infer that a physician was negligent.",
            "Yes, because a surgeon is under an absolute duty not to leave instruments inside a patient's body.",
            "Yes, because the doctor was the only person who had ever performed surgery on the patient."
        ],
        ans: 3,
        exp: "Under the doctrine of res ipsa loquitur, an inference that the defendant acted unreasonably can be drawn if the injury involved was one that does not usually occur without unreasonable conduct and the defendant was the only person whose conduct could have caused the injury (i.e., the defendant had exclusive control of the circumstances). If an expert witness testifies that surgeons do not usually leave instruments inside a patient unless they are acting unreasonably, the patient can rely on the inference established by res ipsa loquitur if she can show that the doctor was the only person who could have left the instrument inside her. Since the doctor was the only person who had ever performed surgery on the patient, the doctor is the only person who could have left the instrument inside her.\n\nA is incorrect because it is based on an inaccurate statement of law; there are many medical malpractice cases in which the plaintiff was permitted to rely on res ipsa loquitur. (Note: These frequently involve foreign objects that were left in the plaintiff's body during surgery). Ordinarily, in drawing an inference of negligence under the doctrine of res ipsa loquitur, a jury relies on what it knows about human experience to determine whether a particular accident is of a kind that does not usually occur without negligence. Because of its lack of specialized knowledge, a jury is not competent to decide whether the particular result of a professional's conduct is one that would not usually occur without negligence. Once a jury has heard testimony to that effect from an expert witness, however, it may base an inference of negligence on its decision about whether or not it believes that witness. This is a decision that a jury is uniquely competent to make. For this reason, B is incorrect. C is incorrect because res ipsa loquitur is not dependent on the existence of any \"absolute duty,\" but rather on circumstantial evidence that justifies the inference that a particular defendant acted unreasonably."
    },
    {
        id: 2,
        topic: "Joint and Several Liability / Comparative Negligence",
        fp: "The defendants were driving their vehicles in an unreasonable manner when they collided. The collision caused the first driver's vehicle to strike and injure a pedestrian who was crossing the street in the middle of the block. The pedestrian was hospitalized as a result of the accident, but he had hospitalization insurance that paid $10,000 toward his hospital bill.\n\nThe pedestrian subsequently asserted a claim against both defendants. At the trial, in response to the judge's instructions, the jury found that the pedestrian sustained damages of $100,000, and that the accident resulted 40 percent from the negligence of the first driver, 40 percent from the negligence of the second driver, and 20 percent from the negligence of the pedestrian. The judge ruled that the defendants were jointly and severally liable to the pedestrian and entered judgment in accordance with the jury's verdict.",
        q: "Which of the following statements correctly describes the amount that the pedestrian is entitled to collect from the first driver in a jurisdiction that has a pure comparative negligence statute?",
        opts: [
            "$100,000 reduced by 20 percent.",
            "$100,000 reduced by $10,000 and further reduced by 20 percent.",
            "40 percent of $100,000.",
            "40 percent of the amount derived by subtracting $10,000 from $100,000."
        ],
        ans: 0,
        exp: "In an all-or-nothing contributory negligence jurisdiction, a plaintiff whose own negligence contributed to the accident cannot recover any damages for injuries that he or she sustained. Under pure comparative negligence statutes, a plaintiff's negligence does not bar his or her recovery, but results in a reduction of damages in proportion to his or her own fault. Since the jury found the pedestrian's damage to be $100,000 and found the pedestrian to be 20 percent at fault, the pedestrian is entitled to collect $100,000 reduced by 20 percent. When two defendants are \"jointly and severally\" liable to the plaintiff, the plaintiff may collect the entire amount of his or her judgment from either of them (several liability), or may collect it from both of them in any combination whatsoever (joint liability). Since the court found both defendants to be jointly and severally liable to the pedestrian, the pedestrian can collect the full amount of his judgment from the first driver alone.\n\nB is incorrect because of the \"collateral source rule,\" which provides that money that a plaintiff receives from parties other than tortfeasors or their representatives is irrelevant in determining his or her damages. For this reason, the sum of $10,000 that the pedestrian received from his own hospitalization insurer plays no part in determining the amount that he can collect from the defendants. C is incorrect because the court found the defendants to be jointly and severally liable to the pedestrian as explained above. D is incorrect under the collateral source rule as explained above."
    },
    {
        id: 3,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "The defendant, a power company, built a large nuclear power plant. It did so with utmost care, and the plant went far beyond the safety measures required by federal guidelines. The plant sat on the edge of a small harbor that had a beach that was extremely popular for fishing. The plaintiff went to the harbor every day to fish. Because the plaintiff was also extremely proud of his dark tan, he fished with his shirt off, surrounded by mirrors he placed in the sand so the sun reached all sides of his body evenly. After three years, the plaintiff developed an extremely rare form of cancer that was linked to radiation escaping from the plant. The radiation leak was so small that it could not be detected, and in fact was only discovered because the plaintiff became sick. If the plaintiff had not fished surrounded by mirrors, it was unlikely he would have gotten sick or that the leak would have been discovered at all. The plaintiff sued the defendant for his injuries. During trial, the defendant proved that it was not negligent in any way. The jurisdiction used common law contributory negligence principles.",
        q: "Should the court find for the defendant?",
        opts: [
            "Yes, because the defendant was not negligent.",
            "Yes, because the plaintiff's use of the mirrors was contributory negligence.",
            "Yes, because the leak was impossible to discover before the plaintiff was injured.",
            "No."
        ],
        ans: 3,
        exp: "A person is strictly liable for any damages that occur while he or she is conducting an abnormally dangerous activity. An activity is abnormally dangerous if there is a high degree of risk of some harm to others, the harm that results is likely to be serious, the risk cannot be eliminated by the exercise of reasonable care, the activity is not common, the activity is not appropriate for the place where it is carried on, and the danger outweighs the activity's value to the community. There are some types of activities that are generally held to be abnormally dangerous, such as the use or storage of explosives, crop-dusting or spraying with pesticides, and the operation of a nuclear reactor. Here, since the defendant is operating a nuclear reactor, it is strictly liable for the harm done to the plaintiff. A and C are therefore incorrect. Ordinary contributory fault will not usually bar a plaintiff from recovery under strict liability. B is therefore incorrect."
    },
    {
        id: 4,
        topic: "Negligence / Causation",
        fp: "One evening in a tavern, a 17-year-old girl drank alcoholic beverages. The girl then left and went to the tavern next door, where she drank alcoholic beverages. The girl attempted to ride home on her motorcycle. Because the girl was intoxicated, she struck and injured a pedestrian. The pedestrian subsequently asserted claims against both taverns under a state law that provides as follows: \"If a minor under the age of 20 years injures another while intoxicated, any person who sold said minor the alcohol that resulted in said minor's intoxication shall be liable to the injured person.\"\n\nThe first tavern did not sell the girl enough alcohol to make the girl intoxicated, and the alcohol that the second tavern sold the girl would have made the girl intoxicated even if the first tavern had sold the girl no alcohol at all.",
        q: "In determining the pedestrian's claim against the second tavern, what should the court find?",
        opts: [
            "The second tavern's conduct was not the cause of the girl's intoxication because the first tavern's conduct was a substantial factor in making the girl intoxicated.",
            "The second tavern is liable under the statute even if the second tavern's conduct did not cause the girl to become intoxicated.",
            "The second tavern's conduct was a cause of the pedestrian's injury because the girl would not have become intoxicated if the second tavern did not sell the girl alcoholic beverages.",
            "The second tavern's conduct was a cause of the girl's intoxication but was not a cause of the pedestrian's injury because the girl's driving superseded it."
        ],
        ans: 2,
        exp: "Under the \"but for\" rule of causation, a defendant's conduct is a cause of a plaintiff's injury if the plaintiff's injury would not have occurred without it. Since the pedestrian would not have been injured without the girl's intoxication, and since the girl would not have become intoxicated without the second tavern's conduct, the second tavern's conduct was a cause of the pedestrian's injury.\n\nA is incorrect for two reasons. First, given the facts, it is uncertain whether the first tavern's conduct was a substantial factor in making the girl intoxicated. Second, even if the first tavern's conduct was a cause of the harm (i.e., a substantial factor in producing it), the second tavern's conduct was also a cause of that harm. B is incorrect because the language of the statute (\". . . any person who sold said minor the alcohol which resulted in said minor's intoxication . . .\") indicates that liability depends on a causal relationship between the defendant's conduct and the minor's intoxication. Since the pedestrian's injury would not have occurred without the girl's intoxication, any cause of the girl's intoxication must also have been a cause of the pedestrian's injury. D is therefore incorrect."
    },
    {
        id: 5,
        topic: "Negligence",
        fp: "A contractor told the landowner that she did not think that one pillar would provide sufficient support for the landowner's staircase. When the landowner discussed the contractor's objection with the architect, however, the architect insisted that one pillar would be sufficient. The landowner told this to the contractor and convinced the contractor to rely on the architect's plan. The contractor completed the building as agreed and turned it over to the landowner on April 1. Two weeks later, the landowner hired a mover to move a piano onto the second floor of the house. While the mover was carrying the piano up the staircase, the staircase collapsed, causing the mover to sustain injury. If the staircase had been supported by two columns, it would not have collapsed.",
        q: "If the mover asserts a negligence claim against the contractor, what should the court declare?",
        opts: [
            "The contractor assumed the risk because she supported the stairway with only one pillar even though she was aware of the danger of doing so.",
            "The contractor is not liable because she had turned the building over to the landowner prior to the accident.",
            "The contractor is not liable because it was reasonable for her to rely on the architect's instructions in constructing the stairway.",
            "The contractor absolved herself of the risk by objecting to supporting the stairway with only one pillar."
        ],
        ans: 2,
        exp: "Negligence is unreasonable conduct in the face of a foreseeable risk. If the contractor acted reasonably in relying on the architect's instructions, she could not have been negligent.\n\nA plaintiff may be prevented from recovering for damages resulting from a defendant's negligence if the plaintiff \"assumed the risk\" by voluntarily encountering a risk of which he or she knew. A is incorrect because this concept applies only to the conduct of a plaintiff. B is incorrect because a defendant owes a duty of reasonable care to all persons who are placed at a foreseeable risk as a result of that defendant's conduct. Since it was foreseeable that the landowner would hire a mover to bring furniture into the new house, the contractor thus owed the mover a duty to act reasonably in building the house and could be liable to the mover for breaching it. D is incorrect because a ritualistic protest is not sufficient to absolve a person of liability for the results of his or her conduct if that conduct is unreasonable."
    },
    {
        id: 6,
        topic: "Modified Comparative Negligence / Joint and Several Liability",
        fp: "A woman and a man were driving in a car and late for a movie. The woman was speeding 40 miles per hour over the speed limit. As she turned a corner, she was hit by an accountant speeding in the opposite direction. The accountant was driving 25 miles per hour over the speed limit at the time of the collision. The jurisdiction had a modified comparative negligence statute that awarded damages so long as the plaintiff's negligence was not more than the defendant's negligence. The man sued the accountant for his injuries. The court found that the woman was 65 percent negligent, the accountant was 35 percent negligent, and the man suffered $200,000 in damages.",
        q: "What is the amount of damages the man should recover?",
        opts: [
            "$200,000.",
            "$130,000.",
            "$70,000.",
            "$0."
        ],
        ans: 0,
        exp: "Because the man was not negligent in any way, he is entitled to the full amount of his damages despite the jurisdiction's negligence statute. The woman and the accountant are joint tortfeasors, so they are jointly and severally liable for the full amount of the man's damages. Thus, the man can recover all of his damages from the accountant.\n\nB, C, and D are incorrect."
    },
    {
        id: 7,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "Pursuant to a contract with the federal government, a rocket company manufactured and launched rockets used for placing communications satellites into space. Shortly after the rocket company launched one of its rockets, the rocket exploded in the air. It then crashed into a storage building owned by a medical company that contained antibiotics with a value of $180 million, totally destroying the building and its contents. No one could determine the cause of the explosion. Although the rocket company used reasonable care in all aspects of the manufacturing and launching process, a few of the rocket company's rockets had exploded in the past shortly after launch. Each time this happened, the rocket involved was completely destroyed while in the air and caused no damage on the ground.",
        q: "If the medical company asserts a claim against the rocket company for the loss of its building and contents, should the court find in its favor?",
        opts: [
            "Yes, because the construction and launching of rockets is an abnormally dangerous activity.",
            "Yes, under the doctrine of res ipsa loquitur.",
            "No, because the reasonable person would not expect antibiotics worth $180 million to be stored in one building.",
            "No, because none of the rocket company's rockets caused any damage on the ground in the past."
        ],
        ans: 0,
        exp: "Strict liability (i.e., liability without fault) may be imposed on one who engages in an abnormally dangerous activity. In this connection, an activity is sufficiently dangerous to result in strict liability if it is not a common activity and necessarily involves a serious risk of harm that cannot be eliminated by reasonable care. While it is not certain that a court would come to this conclusion, A is the only option that could possibly be correct.\n\nAlthough the doctrine of res ipsa loquitur may permit an inference of negligence to be drawn from circumstantial evidence, it does not impose negligence liability on a defendant who was not negligent. Since the facts indicate that the rocket company acted reasonably, negligence liability should not be imposed. B is therefore incorrect. Although tort liability is sometimes limited by the concept of foreseeability, the amount of damage need not be specifically foreseeable so long as the type of damage is foreseeable. C is therefore incorrect. D is incorrect because a type of harm may be foreseeable even though it never happened before (e.g., it is foreseeable that a person will die even though he or she has never died before). The fact that no such damage had ever occurred in the past is therefore not sufficient to make that damage unforeseeable."
    },
    {
        id: 8,
        topic: "Strict Products Liability",
        fp: "Due to an error at its factory, a company sold an airline a belt truck that did not have an acceleration suppressor.\n\nTwo months later, the airline went out of business and sold the belt truck to a second airline. An independent contractor hired by the second airline to maintain the second airline's equipment set the belt idle above 15. Doing so can cause the truck to lurch forward unless it is equipped with an acceleration suppressor. The company was aware that people who maintain the trucks often set the idle above 15. Subsequently, an employee of the second airline attempted to activate the belt while standing beside the belt truck. She was injured when the belt truck lurched forward and struck her.",
        q: "The employee asserts a claim against the company on the ground that the absence of an acceleration suppressor made the belt truck defective. Should the court find for the employee?",
        opts: [
            "No, because the first airline was negligent in failing to discover that the belt truck was not equipped with an acceleration suppressor.",
            "No, because if the contractor had acted reasonably in setting the belt idle, the employee would not have been injured.",
            "Yes, because persons who maintain belt trucks frequently set the belt idle above 15.",
            "Yes, because the negligence of the contractor is imputed to the company."
        ],
        ans: 2,
        exp: "A manufacturer is strictly liable for injuries that result from a defect in its product if the defect existed when the manufacturer placed the product in the stream of commerce. The company will thus be strictly liable if the absence of an acceleration suppressor was a defect. A defect is a condition that would defeat the expectations of the reasonable consumer. Unless the belt truck is equipped with an acceleration suppressor, it will lurch forward if the belt idle is adjusted improperly. The reasonable consumer probably does not expect a vehicle to lurch forward when it is being used for its intended purpose. Since persons who maintain belt trucks frequently adjust the belt idle improperly, belt trucks will frequently lurch in the absence of an acceleration suppressor. Its absence, therefore, is probably a defect.\n\nThe absence of an acceleration suppressor was a factual cause of the employee's injury because the employee would not have been injured if the truck had been equipped with one. The fact that the injury would not have occurred without the subsequent acts of others (i.e., intervening causes) would not prevent the company from being liable unless those subsequent acts (i.e., intervening causes) were unforeseeable (i.e., superseding causes). Since humans are frequently negligent, the unreasonable conduct of the first airline and the contractor may have been foreseeable. For this reason, A and B are incorrect. D is incorrect because it is based on an inaccurate statement. Sometimes the relationship between two persons makes one of them responsible for conduct of the other (i.e., conduct of one is imputed to the other). There is no relationship between the contractor and the company that would result in such an imputation, however."
    },
    {
        id: 9,
        topic: "Private Nuisance",
        fp: "A company operated a manufacturing plant just outside the town, making an insecticide that was very important to the state's orange crop. Breezes frequently carried fumes from the company's plant into the town. Although the fumes did not violate state air pollution laws, they caused many buildings in the town to need frequent repainting and led many homeowners to complain about it to the company. The company did nothing about it, however, because the cost of eliminating the fumes was extremely high. A homeowner, who owned a house in the town in which he resided with his son, had to repaint his house several times because of the fumes.",
        q: "The homeowner asserted a private nuisance claim against the company for the damage to his paint, asserting that the company was negligent in failing to eliminate the fumes. Which of the following would be the company's most effective argument in defense against the homeowner's claim?",
        opts: [
            "The operation of the company's plant did not result in a physical invasion of the homeowner's realty.",
            "The fumes affected others in substantially the same way as they affected the homeowner.",
            "The company officials did not know that the fumes would affect the paint of the homeowner's house.",
            "The cost of eliminating the fumes would have driven the company out of business."
        ],
        ans: 3,
        exp: "Private nuisance involves a tortious invasion of the plaintiff's right to use and enjoy realty. Although the fumes invaded the homeowner's right to use and enjoy his realty, their emission was not a nuisance unless it resulted from liability-forming (i.e., tortious) conduct by the company. Since the homeowner has alleged that the company's conduct was liability-forming in that it was negligent, liability will depend on whether the company's conduct was unreasonable (i.e., negligent). Ordinarily, in determining whether conduct is unreasonable, it is necessary to weigh the risks resulting from such conduct against the burdens of eliminating those risks. Additionally, courts will weigh the social value and utility of the defendant's activity against the harm done to the plaintiff. Here, the company is making an insecticide that is very important to the state's orange crop, and the plaintiff is having the paint on his home damaged. If the cost (i.e., the burden) of eliminating the fumes would drive the company out of business, a court might find that the burden was so much heavier than the risk that it would eliminate that it was not unreasonable for the company to continue emitting the fumes, and that the company, therefore, was not negligent. While it is not certain that a court would come to this conclusion, D is the only argument listed that could possibly provide the company with an effective defense.\n\nA is incorrect because nuisance requires an invasion of plaintiff's rights in realty, but it does not require a physical invasion of the realty itself. For an individual to prevail in a claim for public nuisance, he or she must show that the harm that he or she sustained was substantially different from that sustained by the general public. B is incorrect, however, because no such showing is required in a claim for private nuisance. If the homeowner's claim were based on intent, it would be necessary for him to show that the company knew that its activity was interfering with his right. Since his claim is based on negligence, however, it is sufficient for him to show that such interference was foreseeable. C is therefore incorrect."
    },
    {
        id: 10,
        topic: "Vicarious Liability",
        fp: "A bar hired a bouncer to work the door and decide who to let in and out of the bar. The bouncer was also in charge of stopping any fights and dealing with unruly patrons. A student got drunk at the bar and the bouncer threw him out for vomiting on a waitress. The student stood on the street outside of the bar and yelled at the bouncer. After an hour of being yelled at, the bouncer flew into a rage, chased the student down the street, and beat the student severely. The student sued the bar for his injuries.",
        q: "Which of the following is the bar's best defense?",
        opts: [
            "The bouncer was negligent in beating the student.",
            "The bouncer was acting in defense of the bar.",
            "The bouncer was acting outside the scope of his employment.",
            "The student was contributorily negligent in yelling at the bouncer."
        ],
        ans: 2,
        exp: "If an employee acts outside the scope of his or her employment, the employer is not liable for any injuries caused by the employee. Importantly, an employer is generally not liable for an employee's intentional torts. Here, if the bouncer was acting outside the scope of his employment when he beat the student, the bar would not be liable.\n\nA is incorrect because the bouncer committed an intentional tort when he beat the student. B is incorrect because if the bouncer was defending the bar, the bouncer would be acting within the scope of his employment and the bar would be liable. D is incorrect because the student's contributory negligence would not get the bar off the hook."
    },
    {
        id: 11,
        topic: "Negligence / Affirmative Duty",
        fp: "The city sidewalk in front of the defendant's business was often covered with leaves that made the sidewalk slippery. To try to fix matters, the defendant made a deal with the city, giving the defendant possession and control of the trees. The defendant then swept the leaves off the sidewalk every morning. One morning, the defendant failed to sweep, and the plaintiff, who was walking into the business on his way to a meeting, slipped on the leaves and fell, cracking his head open. The plaintiff was texting on his phone when he fell, but he had walked into the building every day for weeks and reasonably believed that the leaves would be swept because of the past conduct of the defendant. The plaintiff sued, and the defendant defended himself by asserting he had no duty to sweep the leaves off the sidewalk under the circumstances.",
        q: "How should the court rule?",
        opts: [
            "In favor of the defendant, because the sidewalk was city property.",
            "In favor of the defendant, because the plaintiff was texting when he fell.",
            "In favor of the plaintiff, because the defendant had possession and control of the trees.",
            "In favor of the plaintiff, because the defendant's past conduct made the plaintiff reasonably believe the leaves would be swept."
        ],
        ans: 3,
        exp: "Negligence can be based on an unreasonable omission, so long as the potentially negligent party had a duty to act. Generally, a person has a duty to act only when his or her conduct causes a need for such action. This can happen when a person's conduct causes a plaintiff to fail to protect himself or herself against already existing risks because he or she reasonably believes that the person would protect him or her. Consequently, since the defendant's past conduct had caused the plaintiff to reasonably believe there would be no leaves on the sidewalk, the defendant could be found negligent under these circumstances. This would be so whether or not the danger was created by the defendant or located on his or her property. Therefore, A and C are incorrect. B is incorrect because the plaintiff's potential negligence would not necessarily insulate the defendant from liability."
    },
    {
        id: 12,
        topic: "Res Ipsa Loquitur",
        fp: "A farmer owned 500 acres of land on which she grew wheat. By a valid written contract, she agreed to deliver all her wheat to a company to be used by that company in the production of bread for sale to the general public. While harvesting the crop, she realized that a blade on her harvesting machine was broken and that fine slivers of metal were becoming mixed with the wheat. She said nothing about this when she delivered the wheat to the company, since she knew that the company ordinarily cleaned its wheat before using it.\n\nThe bread company used the wheat that it purchased from the farmer to manufacture a loaf of bread that it sold to a sandwich shop. The sandwich shop owner used the bread to make a sandwich. Because the bread contained slivers of the blade from the farmer's harvesting machine, the customer who bought the sandwich lacerated the lining of his throat when he tried to eat it.",
        q: "In an action by the customer against the bread company, can the customer successfully rely on the doctrine of res ipsa loquitur?",
        opts: [
            "Yes, because the exercise of reasonable care in the baking process would ordinarily have eliminated all metal slivers from the wheat.",
            "Yes, because the presence of metal slivers made the bread defective.",
            "No, because the presence of the metal slivers in the wheat resulted from the farmer's failure to use reasonable care.",
            "No, because it was unforeseeable that a broken blade on the farmer's harvesting machine would result in the presence of metal slivers in the wheat."
        ],
        ans: 0,
        exp: "Res ipsa loquitur permits an inference of unreasonable conduct to be drawn where the accident is one that would not ordinarily have occurred without negligence, and the defendant was in exclusive control of the circumstances that produced the harm. Since the bread company was in exclusive control of the baking process, res ipsa loquitur would apply if reasonable care in baking would ordinarily have eliminated the slivers (i.e., if the accident would not ordinarily have occurred without negligence).\n\nB is incorrect because liability for negligence (which is the only theory to which res ipsa loquitur applies) does not depend on whether a product is defective. The customer's harm was caused by the presence of the metal slivers in the bread. C is incorrect because even if the farmer's negligence caused the slivers to be in the wheat, the bread company may be liable for the harm if its negligence caused them to be in the bread. If reasonable care would have prevented the slivers from getting in the bread, it does not matter how they got into the wheat. Thus, even if the breaking of the farmer's blade was unforeseeable, the bread company might be liable to the customer for its negligence in failing to keep the slivers out of the bread. D is therefore incorrect."
    },
    {
        id: 13,
        topic: "Vicarious Liability / Indemnity",
        fp: "A homeowner hired a gardener to take down a tree on his property. While the gardener was taking down the tree, he accidentally caused it to fall through a neighbor's house. The neighbor was injured by the falling tree. The neighbor sued the homeowner and recovered from the homeowner based on vicarious liability.",
        q: "Can the homeowner recover from the gardener?",
        opts: [
            "Yes, because the neighbor recovered based on vicarious liability.",
            "Yes, because the homeowner did not actually cause the tree to fall.",
            "No, because the homeowner was responsible for the gardener's action.",
            "No, because the homeowner chose the gardener to take the tree down."
        ],
        ans: 0,
        exp: "If a defendant is found liable based on vicarious liability, the defendant can recover the entire amount of damages from the defendant who actually caused the harm. Here, because the neighbor recovered from the homeowner based on vicarious liability, the homeowner can recover from the gardener.\n\nB is incorrect because the fact that the homeowner did not actually cause the tree to fall would have no effect if there was no vicarious liability. C and D are incorrect because the homeowner can recover from the gardener."
    },
    {
        id: 14,
        topic: "Products Liability / Assumption of Risk",
        fp: "While the plaintiff was visiting her daughter, the two of them decided to go swimming at a nearby public pool. Since she had not brought a bathing suit along on her visit, the plaintiff went to a department store to purchase one. While looking at the suits on the bargain counter, she found one made by a bathing suit company. The package that contained it bore a label that read, \"Disposable Bathing Suit. This garment is made completely from recycled paper. Although it is strong enough to be worn several times and is even washable, it's inexpensive enough to be thrown away after one use.\" The plaintiff bought the suit and then went to the beach. The first time she was hit by a wave, however, the suit completely disintegrated.",
        q: "Which of the following additional facts or inferences, if it was the only one true, would be most helpful to the department store's defense in an action by the plaintiff against the department store?",
        opts: [
            "The department store had sold the bathing suit company's products for several years and had never heard of any problem like the one experienced by the plaintiff.",
            "A sign on the bargain counter where the plaintiff found the suit said, \"Sale Merchandise. All sales final.\"",
            "The plaintiff knew that paper bathing suits like the one she had purchased sometimes dissolved when they became wet.",
            "The department store could not implead the bathing suit company into the action because the company had gone out of business."
        ],
        ans: 2,
        exp: "Assumption of the risk is a defense in all approaches to products liability (although some jurisdictions have merged it with the concept of comparative fault), and it occurs when the plaintiff voluntarily encounters a known risk. If the plaintiff knew that the paper suit was likely to dissolve when wet and wore it anyway, she voluntarily encountered (and therefore assumed) a known risk.\n\nA is incorrect because the department store may be held liable without fault for selling a defective product. B is incorrect because a sign like the one described is not sufficient to apprise the buyer that the product is being sold without any warranty of merchantability or to prevent the reasonable consumer from expecting the bathing suit to hold together when wet. Although a product retailer who is held liable for selling a defective product has a right to be indemnified by the product's manufacturer, the right of the injured plaintiff to recover does not depend on this right of the retailer. D is therefore incorrect."
    },
    {
        id: 15,
        topic: "Negligence / Standard of Care",
        fp: "A 13-year-old boy and his family lived on a farm in a very remote portion of the state. Because of the lack of automobile traffic, the boy's parents let him ride a motorcycle between the family farm and the local grocery store. There was no statute or ordinance that prohibited the boy's use of the motorcycle. One morning, there was heavy fog on the ground when the boy drove the motorcycle to the store. The speed limit was 35 miles per hour. While a reasonable adult would have known to drive under the speed limit because of the poor visibility, a reasonable 13-year-old would not normally have such knowledge. The boy drove the motorcycle at 35 miles an hour and crashed into a car when he was unable to slow down in time. The boy did not expect a car to be on the road, because cars were so rarely around. The car owner sued the boy for negligence.",
        q: "Should the court rule in the car owner's favor?",
        opts: [
            "Yes, because the boy was driving a motorcycle.",
            "Yes, because a reasonable adult would have known to drive under the speed limit.",
            "No, because a reasonable 13-year-old would not normally know to drive under the speed limit.",
            "No, because the boy was driving at the speed limit."
        ],
        ans: 1,
        exp: "Normally, a minor child is held to the same standard of care as a reasonable child of similar \"age, intelligence, and experience.\" However, if the child engages in an adult activity, the child is held to an adult standard of care. An adult activity is one normally undertaken only by adults and for which adult qualifications are required. Driving a motorcycle is such an activity (usually, it requires a license and has age restrictions). Consequently, the boy would be held to an adult standard of care. According to the question, a reasonable adult would have known to slow down, so the boy is liable for not adhering to that standard.\n\nA is incorrect because the boy is not automatically liable for the simple fact that he is driving a motorcycle. C is incorrect because it states the wrong standard of care. D is incorrect because following the posted speed limit would not necessarily absolve him from liability."
    },
    {
        id: 16,
        topic: "Negligence / Duty of Care",
        fp: "The company manufactured a device for training dogs. A professional dog trainer was working with a dog in her unfenced front yard and was using the company's brand new device. A man was walking past the yard when the dog began to snarl and lunge at him. When the trainer yanked on the leather strap of the device, it suddenly broke, freeing the dog. The dog sprang forward, biting the walker.",
        q: "If the walker asserts a claim against the dog trainer, what is the walker's most effective argument in support of his claim?",
        opts: [
            "The dog trainer is strictly liable for damage resulting from her use of a defective product.",
            "It was unreasonable for the dog trainer to work the dog in her front yard.",
            "The dog trainer's conduct was a concurring cause of harm.",
            "The dog trainer was a professional dog trainer."
        ],
        ans: 1,
        exp: "Negligence is a failure to act reasonably. Thus, if it was unreasonable for the dog trainer to work the dog in her front yard, her conduct was negligent and could result in liability. While it is not certain that a court would come to this conclusion, the argument in B is the only one listed that could possibly support the walker's claim.\n\nStrict liability for damage resulting from a product defect is imposed only against a professional supplier who placed the product in the stream of commerce. Since the dog trainer was a user of the device rather than a supplier of it, A is incorrect. Conduct that causes damage can result in tort liability only if the damage was intended, resulted from negligence, or resulted from an activity for which strict liability is imposed. Without establishing one of these bases of liability, calling the dog trainer's conduct a cause of harm would not be sufficient to result in liability. For this reason, the argument in C is incomplete, making C incorrect. Although some special standard of care might be imposed because of the dog trainer's profession, D is incorrect because there is no indication that the standard was breached."
    },
    {
        id: 17,
        topic: "Landlord-Tenant Liability",
        fp: "A landlord rented an apartment to a student under an \"as is\" lease. The landlord knew that the electric plugs in the apartment were defective, but he didn't tell the student. A week later, the student turned on the lights and was seriously injured when he was electrocuted. The student sued the landlord for negligence.",
        q: "Should the court rule in the student's favor?",
        opts: [
            "No, because the apartment was rented \"as is.\"",
            "No, because the landlord did not breach the implied warranty of habitability.",
            "Yes, because the electric plugs were a patent defect.",
            "Yes, because the electric plugs were a latent defect."
        ],
        ans: 3,
        exp: "A landlord must warn a tenant of latent defects or repair them. While a tenant does not need to be warned of obvious conditions, the landlord has to warn the tenant of dangerous conditions of which the tenant is unaware if those conditions are not readily apparent and the landlord is or should be reasonably aware of them. Here, the landlord knew about the plugs, their defect was not readily apparent, and the student did not know about the plugs before injuring herself. Because the landlord was aware of the latent defect and did not warn the student, the landlord is liable.\n\nA is incorrect because a landlord cannot use a lease to waive duties owed to tenants. B is incorrect because the fact that the plugs likely would not violate the implied warranty of habitability would not change the analysis. C is incorrect because a patent defect is an obvious defect. Here, the plugs would not be obvious."
    },
    {
        id: 18,
        topic: "Negligence / Proximate Cause",
        fp: "A driver was looking for an address as he drove down the street and was not watching the road in front of him. As a result, he did not see a pedestrian crossing the street in front of him and struck her with his car, knocking her down. The driver immediately got out of her car to help the pedestrian. When he saw that she was unconscious, he became afraid to move her and left her in the roadway while he ran to a nearby phone. While the driver was gone, a taxi drove down the same street. The taxi did not see the pedestrian in the roadway, and drove over her, fracturing her leg.",
        q: "In an action by the pedestrian against the driver for damages resulting from her fractured leg, should the court find for the pedestrian?",
        opts: [
            "Yes, because the driver's negligence was a factual and legal cause of the pedestrian's fractured leg.",
            "Yes, since the negligence of the taxi is imputed to the driver.",
            "No, since the driver's conduct was a legal cause but not a factual cause of the pedestrian's fractured leg.",
            "No, because the pedestrian would not have been injured but for the taxi striking her."
        ],
        ans: 0,
        exp: "A person whose conduct is negligent is liable for damage that is proximately caused by that negligence. Conduct is a proximate cause of harm if it is a factual and legal cause of that harm. Thus, because the driver's negligence was a factual and legal cause of the pedestrian's broken leg, the driver is liable for it.\n\nB is incorrect because there was no relationship between the driver and the taxi that would result in such an imputation. C is an impossibility since nothing can be regarded as a legal cause of harm unless it was a factual cause of that harm. The reasoning of D establishes that the taxi's conduct was a cause of harm, but it does not establish that the other driver's conduct was not. D is therefore incorrect."
    },
    {
        id: 19,
        topic: "Defamation",
        fp: "An employee resigned after being told he wouldn't be compensated for extra work hours. At the same time, he told his former employer he would retain a set of tools issued to him until he received payment. The employee applied for a job with another company, and that company wrote to the former employer asking for an evaluation of the employee's honesty and ability. The former employer wrote a letter to the other company that stated, \"When the employee left my company, he stole a valuable set of tools.\" As a result, the other company did not hire the employee.",
        q: "If the employee asserts a claim against his former employer for defamation, should the employee win?",
        opts: [
            "No, because the employee did not return the tools that he took when he left the employer's employ.",
            "No, because the employer's statement was made in response to a specific request by the employee's prospective employer.",
            "Yes, because the employer's statement could not have benefitted the employer's business interests.",
            "Yes, because the employer's statement accused the employee of stealing tools."
        ],
        ans: 3,
        exp: "Since most respectable people believe that theft is disgraceful, an accusation that the plaintiff is a thief is probably defamatory.\n\nBecause the employee did not return the tools, the employer's statement is literally true. However, the literal truth of the statement would not prevent the employer from being liable since there is some dispute as to whether the employee was justified in taking the tools. A is therefore incorrect. A defendant may be privileged to make defamatory statements in a reasonable and good faith attempt to protect a legitimate interest. In deciding whether a former employer was acting in good faith when making a defamatory statement to a plaintiff's prospective employer, courts frequently look to whether the former employer made the statement gratuitously (making it less likely that he or she was acting in good faith) or in response to a request for information (making it more likely that he or she was acting in good faith). B is incorrect, however, because this fact alone is not sufficient to privilege a defendant's publication. C is incorrect because if the defendant was acting reasonably and in good faith, the interest that a former employer has in common with a prospective employer might be sufficiently legitimate to make the privilege apply."
    },
    {
        id: 20,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "The defendant operated a train carrying high explosives used to blow tunnels through mountains. As the train was passing through a city, it hit the plaintiff, who had ducked through the lowered train-crossing bars and was trying to get across the tracks to the other side before he was blocked by the train. The plaintiff was severely injured. The plaintiff sued the defendant for his damages. During trial, the defendant proved that it was not negligent in any way. The jurisdiction followed comparative negligence principles.",
        q: "Should the court find for the plaintiff?",
        opts: [
            "Yes, under the doctrine of strict liability.",
            "No, because the plaintiff assumed the risk of getting hit by the train.",
            "No, because the defendant was not negligent.",
            "No, because the plaintiff was contributorily negligent by trying to cross the tracks."
        ],
        ans: 2,
        exp: "While a defendant can be held strictly liable for carrying on an abnormally dangerous activity such as transporting high explosives, the defendant is only strictly liable for damage that results from the kind of risk that made the activity abnormally dangerous. While transporting high explosives may be abnormally dangerous, the plaintiff's injuries did not result from the kind of risk that made this activity abnormally dangerous (namely explosions). A is therefore incorrect. B is incorrect because assumption of the risk involves situations where the plaintiff has voluntarily consented to take his or her chances that a harm will occur. This usually involves situations where the plaintiff is engaging in some type of activity, such as going to a baseball game, bungee jumping, skiing, etc. Here, the plaintiff's actions were more correctly categorized as contributory negligence. Importantly, in a jurisdiction that follows comparative negligence principles, this negligence will not completely bar the plaintiff's recovery. It will only lessen the amount recovered. D is therefore incorrect."
    },
    {
        id: 21,
        topic: "Negligence / Duty to Disclose",
        fp: "The seller knew that his car's engine was cracked. Because he wanted to sell the car, he filled the crack with putty and painted it so that the crack would not show. He then sold the car to a used car dealer. The next day, the used car dealer was showing the car to a customer when the crack caused the engine to explode, injuring the customer.",
        q: "If the customer asserts a claim against the seller for injuries that he sustained when the engine exploded, which of the following would be the customer's most effective theory?",
        opts: [
            "Battery, because the seller knew that the engine was cracked.",
            "Intentional misrepresentation, because the seller knew that the engine was cracked.",
            "Negligent misrepresentation, because the seller had a duty to disclose that the engine was cracked.",
            "Negligence, because the seller should have anticipated that a customer of the used car dealer would be injured as a result of the cracked engine."
        ],
        ans: 3,
        exp: "Negligence is the failure to act reasonably in the face of a foreseeable risk created by the defendant's conduct. Since it probably was foreseeable that the used car dealer would show a customer the car after buying it for resale, the seller owed such customers a duty of reasonable care that probably was breached by his failure to disclose the crack. Although it is not certain that a court would come to this conclusion, D is the only argument listed that could possibly lead to recovery by the customer.\n\nBattery is committed by intentionally causing a harmful or offensive contact with the plaintiff. In a battery case, intent means a desire or knowledge that there will be harmful or offensive contact with the plaintiff or that the plaintiff will become apprehensive of such contact. Although the seller knew that the engine was cracked, there is no indication that he desired or knew that the crack would result in harmful or offensive contact with any person, or that it would cause apprehension of such contact. Although these risks may have been foreseeable, battery liability cannot be imposed without intent. For this reason, A is incorrect. Misrepresentation liability is imposed only for the benefit of a plaintiff who justifiably relied on the defendant's false representation. Since the customer did not rely on any express or implied statement made by the seller, B and C are incorrect."
    },
    {
        id: 22,
        topic: "Negligence / Pure Economic Loss",
        fp: "The defendant negligently burned down a restaurant when he used a highly flammable cleaner to clean the restaurant's deep fryer. The defendant was an independent contractor hired to clean the restaurant and he owned no interest in the restaurant. The plaintiff, a waiter at the restaurant, was laid off because of the fire damage and could not get a job for six months. The plaintiff sued the defendant for his financial losses from his joblessness.",
        q: "Should the court rule in the plaintiff's favor?",
        opts: [
            "No, because the plaintiff suffered only economic harm.",
            "No, because the defendant owned no interest in the restaurant.",
            "Yes, because the defendant's negligence caused him to be laid off.",
            "Yes, because the defendant's negligence burned down the restaurant."
        ],
        ans: 0,
        exp: "When a defendant negligently causes physical injury or property damage to one party, but only pure economic loss to the plaintiff, the traditional rule is that the plaintiff may not recover anything. This is because a defendant could have open-ended liability (for example, the restaurant's suppliers could sue, other waiters, etc.). Some courts recognize case-by-case exceptions to this rule, but only in cases where the injury to the plaintiff was relatively foreseeable, relatively few plaintiffs would be permitted to sue, and the defendant's conduct was relatively blameworthy. As stated above, if plaintiffs are allowed to sue for pure economic loss in this case, there is a potentially limitless number of plaintiffs. C and D are therefore incorrect. Because the defendant would be liable in certain exceptional cases, B is incorrect."
    },
    {
        id: 23,
        topic: "Negligence / Rescue Doctrine",
        fp: "A construction company was fixing a huge pothole when the crew boss said that the workers would not get paid. The workers left without finishing the job or putting up warning signs. A couple hours later, a car came down the street and crashed into the pothole. The car stopped with half the car sticking into the hole. The car engine caught fire and a man walking his dog rushed to save the car driver. The man dragged the driver from the car, but was burned in the process. The man sued the construction crew for his injuries.",
        q: "Should the court rule in the man's favor?",
        opts: [
            "No, because the man assumed the risk.",
            "No, because the man's actions were unforeseeable.",
            "Yes, because the man's rescue attempt was foreseeable.",
            "Yes, because the construction company is strictly liable."
        ],
        ans: 2,
        exp: "Under the rescue doctrine, it is foreseeable that a person might try to rescue someone who the defendant's negligence has put in danger. Here, the company was negligent by leaving the work area without any warnings and it was foreseeable that if someone was hurt by that negligence that another person would come to his or her rescue. Thus, the company would be liable to the man.\n\nA and B are incorrect under the rescue doctrine. D is incorrect because negligence, not strict liability, is the proper standard."
    },
    {
        id: 24,
        topic: "Negligence / Proximate Cause",
        fp: "A trucker was eating cherry pie in a restaurant when a cherry pit contained in the pie stuck in his throat. Unable to breathe, the trucker began choking. A doctor who was eating in the restaurant ran to the trucker's aid and performed an operation known as an emergency tracheotomy. Then, at the doctor's direction, the trucker walked across the street to a hospital. The hospital's emergency room had famously long waits. Because hospital employees negligently failed to enter the trucker's name in the emergency room register, he sat in the emergency room for six hours without further attention. At that time, an earthquake caused a portion of the hospital's structure to fall, striking the trucker in the head and fracturing his skull. An earthquake had never occurred in the state before.\n\nAssume that the doctor's conduct in performing the emergency tracheotomy was unreasonable, and if the doctor had acted reasonably, the trucker would have coughed up the pit without any injury.",
        q: "In an action by the trucker against the doctor for damages resulting from his fractured skull, will the trucker win?",
        opts: [
            "Yes, since he would not have been in the hospital if the doctor had not performed the tracheotomy.",
            "Yes, because it was foreseeable that the trucker would be required to wait six hours in the hospital's emergency room.",
            "No, since he would not have been injured were it not for the cherry pit contained in the pie.",
            "No, because the earthquake was a superseding cause of the trucker's injury."
        ],
        ans: 3,
        exp: "It is given that the doctor's conduct was negligent. Even if a defendant's conduct was negligent, however, the defendant is not liable for the plaintiff's injuries unless they were proximately caused by that conduct. Conduct is a proximate cause of an injury if it is a factual and legal cause of the injury. Conduct is a factual cause of injury if the injury would not have occurred without it. Since the trucker would not have been in the hospital and injured by the falling of the hospital structure except for the doctor's conduct, the doctor's conduct was a factual cause of the trucker's injury. If conduct was a factual cause of harm, it was a legal cause of that harm if the harm was foreseeable and not brought about by superseding causes. A superseding cause of harm is an intervening cause that is unforeseeable or independent of the risks created by the defendant's conduct. Thus, because the earthquake was a superseding cause of the trucker's fractured skull, it prevented the doctor's negligence from being a legal or proximate cause of the fractured skull.\n\nA establishes that the doctor's conduct was a factual cause of the fractured skull, but it is incorrect because it does not deal with the problem of legal cause. The doctor's conduct was not a legal cause of the fractured skull unless the fractured skull was a foreseeable result of it. The fact that the wait might have been foreseeable does not make the fractured skull foreseeable. B is therefore incorrect. C establishes that the presence of the cherry pit was a factual cause of the trucker's injury, but it does not establish that the doctor's conduct was not also a cause of it. C is therefore incorrect."
    },
    {
        id: 25,
        topic: "Modified Comparative Negligence",
        fp: "In answer to specific questions posed by the court, the jury found that an accident was 60 percent the fault of the plaintiff and 40 percent the fault of the defendant. In addition, the jury found that damage to plaintiff's car amounted to $1,000, and that damage to the defendant's car amounted to $10,000.\n\nThe jurisdiction had a statute that provided as follows: \"In any negligence action, a plaintiff's recovery shall not be barred by that plaintiff's fault, but the recovery of said plaintiff shall be diminished in proportion to such plaintiff's fault, unless that plaintiff's fault shall be greater than that of the defendant, and in such event the plaintiff's recovery shall be barred.\"",
        q: "Which of the following correctly states the sum to which the plaintiff is entitled?",
        opts: [
            "$600 ($1,000 less 40 percent).",
            "$400 ($1,000 less 60 percent).",
            "$1,000.",
            "$0."
        ],
        ans: 3,
        exp: "The statute given is typical of the \"modified\" comparative negligence approach. A deduction is made from the plaintiff's recovery based on the percentage of fault which was the plaintiff's. But if the plaintiff's fault exceeds the defendant's, the plaintiff receives nothing. Since the jury found the plaintiff to be 60 percent at fault, he can recover nothing. A, B, and C are therefore incorrect."
    }
];