const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "The defendant kept a pet cougar in a yard that was surrounded by a wire chain-link fence. The plaintiff, who lived in the vicinity, frequently walked on the public sidewalk adjacent to the defendant's yard. One day, while the plaintiff was standing on the public sidewalk looking at the cougar through the defendant's fence, the cougar sprang toward the plaintiff. Because the fence was badly deteriorated, it collapsed under the cougar's weight and fell on the plaintiff, inflicting serious injuries. The defendant knew the fence was in need of repair.",
        q: "If the plaintiff asserts a negligence claim against the defendant as a result of her injuries, should the court find for the plaintiff?",
        opts: [
            "Yes, because the keeping of a wild animal is prima facie negligent.",
            "Yes, because a reasonable person in the defendant's position would have repaired the fence.",
            "Yes, because the defendant knew that the fence was in need of repair.",
            "No, because the plaintiff assumed the risk by standing by the fence and looking at the cougar."
        ],
        ans: 1,
        exp: "Rule: Under general negligence principles, a plaintiff must establish that the defendant owed a duty of care, that the defendant breached that duty by failing to act as a reasonably prudent person would under similar circumstances, and that this breach caused the plaintiff's damages. Here, the plaintiff asserted a claim based strictly on negligence rather than strict liability for wild animals. The standard for breach in negligence is objective: whether a reasonable person in the defendant's position would have repaired the deteriorated fence to prevent it from collapsing onto pedestrians on a public sidewalk (Option B). Option A is incorrect because keeping a wild animal gives rise to strict liability, but does not make the act prima facie negligent as a matter of law. Option C is incorrect because subjective knowledge alone is mere evidence; negligence requires showing that the failure to repair fell below the objective reasonable person standard. Option D is incorrect because standing on a public sidewalk observing an animal behind a fence is not a voluntary assumption of the risk of a collapsing fence."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "On March 1, a farmer entered into a written contract with the worker. By its terms, the worker agreed to plow the farmer's fields by April 1, using the worker's own tractor. In return, the farmer promised to pay $2,000 upon completion of the work. On March 25, while the worker was plowing the farmer's field, her tractor broke down. The worker informed the farmer that because the tractor needed extensive repairs, it would be impossible to finish the job by April 1 unless she rented another tractor. The worker said that she could rent one for $600, but she would not do so unless the farmer agreed to add the rental charge to the worker's fee for preparing the field. The farmer agreed without complaint, afraid that the value of his crop would be reduced if the field was not plowed in time. The worker returned to work after renting a tractor for $600. After the worker finished plowing the farmer's field, however, the farmer refused to pay her any more than $2,000.",
        q: "If the worker asserts a claim against the farmer on account of the farmer's promise to pay an additional $600 for the rental of a tractor, which of the following would be the farmer's most effective argument in defense?",
        opts: [
            "The farmer's promise to pay for the tractor rental was not in writing.",
            "The farmer's promise to pay for the tractor rental was unsupported by consideration.",
            "The farmer's promise to pay for the tractor rental was induced by economic duress.",
            "The farmer detrimentally relied on the worker's original promise to complete plowing of the field by April 1 at a price of $2,000."
        ],
        ans: 1,
        exp: "Rule: Under the common law pre-existing duty rule, doing or promising to do what one is already legally bound to do does not constitute valid consideration to support a modification. The contract was for services (governed by the common law, not the UCC). The worker was already obligated under the March 1 agreement to plow the field by April 1 for $2,000. Renting a substitute tractor when her own machine broke down was simply a means of fulfilling her pre-existing duty. Therefore, the farmer's promise to pay an extra $600 lacked new, independent consideration (Option B). Option A is incorrect because service contracts that can be performed within one year are not within the Statute of Frauds. Option C is incorrect because economic duress requires wrongful or unlawful coercive conduct that leaves the victim with no reasonable alternative; ordinary contract disputes or equipment breakdowns rarely rise to actionable duress, making lack of consideration far stronger. Option D is incorrect because promissory estoppel / reliance is used by a promisee seeking to enforce a promise, not as a defense by a promisor refusing to pay."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "A man went to a car dealer. The dealer showed him a car that he said was 'brand new.' The man checked the odometer, which showed it had been driven 10 miles, and checked the interior and engine, which looked new. After the man bought the car for $2,000 less than the suggested list price, he discovered the car was actually a used car that had been completely submerged in a flood. On further investigation, he learned the car dealer had rolled back the odometer from 10,000 miles and had covered up the flood damage with paint.",
        q: "What crime, if any, can the car dealer be charged with?",
        opts: [
            "Larceny by trick.",
            "False pretenses.",
            "Embezzlement.",
            "No crime."
        ],
        ans: 1,
        exp: "Rule: The crime of obtaining property by false pretenses requires: (1) obtaining title to the property of another, (2) by an intentional or knowing false statement of past or existing material fact, (3) with the intent to defraud. Here, the dealer knowingly misrepresented an existing material fact (that the car was brand new, concealing flood damage and rolling back the odometer) to induce the buyer to part with title to the purchase money. Because title to the money passed to the dealer, the crime is false pretenses (Option B). Option A is incorrect because larceny by trick occurs when the defendant obtains mere possession/custody rather than title through fraud. Option C is incorrect because embezzlement requires conversion of property by someone who is already in lawful possession. Option D is incorrect because the fraudulent misrepresentation used to acquire title to the buyer's money is a criminal theft offense."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "A lumber supplier entered into a contract with a new home builder. The contract stated that the builder would purchase all the wood required by the builder for new homes he was building in 2019, but that in no event would the amount be less than 20,000 board-feet of wood. In making the agreement, neither party contemplated a decline in new home starts. After the agreement, new home starts fell dramatically. As a result, the builder informed the supplier he would not be ordering any wood in 2019. The supplier sued the builder for damages. At trial, the builder tried to testify that in the home-building industry it was generally understood that minimum requirements set forth in contracts for the supply of wood were of no effect when new home starts fell dramatically. The supplier objected.",
        q: "Should the builder's testimony be admitted?",
        opts: [
            "Yes, because evidence of a regularly observed business practice may be offered to explain the terms of a written agreement.",
            "No, because the written agreement was intended by the parties to be a final expression of their agreement.",
            "No, because the parties did not contemplate a decline in new home starts.",
            "No, because the fact that the parties specified a minimum requirement of 20,000 board-feet shows that they did not intend to be bound by any preexisting industry standards."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 1-303 (and former § 1-205) and § 2-202, written contractual terms may be explained or supplemented by course of dealing, usage of trade, or course of performance, even if the writing is a fully integrated agreement. Usage of trade encompasses any practice or method of dealing having such regularity of observance in a place, vocation, or trade as to justify an expectation that it will be observed with respect to the transaction in question. The builder is offering testimony of an established trade usage to explain the application of minimum requirement terms during economic downturns (Option A). Option B is incorrect because trade usage is admissible even against a final integrated writing under the UCC parol evidence rule. Option C is incorrect because lack of contemplation does not preclude the application of customary trade background understandings. Option D is incorrect because trade usage can explain or qualify express terms unless utterly impossible to reconcile."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A local newspaper published an editorial claiming that the majority of firefighters at the local fire department were dangerously out of shape and had recently failed their physicals. Following publication, several firefighters sued the newspaper for defamation. All parties agree that the newspaper lacked actual malice in making the statement and that this is the only defense raised by the newspaper.",
        q: "Which of the following arguments would be most likely to result in a judgment for the newspaper?",
        opts: [
            "There is no such thing as a false idea.",
            "The plaintiffs were in a position of apparent control over public affairs.",
            "The editorial and resulting lawsuit made the public familiar with the plaintiffs.",
            "The plaintiffs were public employees."
        ],
        ans: 1,
        exp: "Rule: Under the First Amendment (New York Times Co. v. Sullivan; Rosenblatt v. Baer), a public official cannot recover for defamation without proving by clear and convincing evidence that the statement was made with 'actual malice' (knowledge of falsity or reckless disregard of the truth). The Supreme Court has defined a 'public official' as a government employee whose position in government has such apparent importance that the public has an independent interest in the qualifications and performance of the person who holds it, beyond the general public interest in the qualifications and performance of all government employees—namely, someone who appears to have substantial responsibility for or control over the conduct of governmental affairs. If the firefighters can be classified as public officials on the basis that they exercise apparent control/responsibility over public safety affairs, the newspaper's admitted lack of actual malice shields it from liability (Option B). Option A is incorrect because claiming that firefighters 'failed their physicals' is an assertion of fact, not an idea or pure opinion. Option C is incorrect because a defendant cannot bootstrap a plaintiff into public figure status through its own defamatory publication. Option D is incorrect because mere public employment alone does not automatically make an employee a public official under First Amendment defamation rules."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "The plaintiff, a manufacturer of police equipment, obtained a patent for a bulletproof vest made entirely of recycled aluminum cans. On April 1, a police department entered into a written contract with the plaintiff providing for the purchase and sale of 30 of the plaintiff's bulletproof vests per month for the next year at a specified price. For the following three months, both parties performed as required by the agreement. On July 5, soon after the third delivery, the plaintiff's only factory burned completely to the ground without any fault on the part of the plaintiff. On July 10, officials of the police department wrote to the plaintiff, asking whether the plaintiff would continue to deliver as agreed. When the plaintiff failed to respond within a reasonable time, the police department entered into an agreement with another company for the purchase of 30 bulletproof vests per month. After the police department contracted with another company for the purchase of bulletproof vests, the plaintiff delivered 30 bulletproof vests to the police department, but the police department refused to accept them.",
        q: "If the plaintiff asserts a claim against the police department for breach of contract, which of the following would be the police department's most effective argument in defense against that claim?",
        opts: [
            "The destruction of the plaintiff's factory reasonably appeared to frustrate the purpose of the contract between the police department and the plaintiff.",
            "The plaintiff's failure to respond to the police department's letter of July 10 resulted in a prospective inability to perform.",
            "The plaintiff's contract with the police department was divisible.",
            "The police department's contract to purchase bulletproof vests from another company was a repudiation of its contract with the plaintiff."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-609, when reasonable grounds for insecurity arise with respect to the performance of either party, the other party may in writing demand adequate assurance of due performance. A failure to provide such assurance within a reasonable time not exceeding 30 days operates as a repudiation of the contract. The destruction of the manufacturer's sole production facility gave the police department reasonable grounds for insecurity. The manufacturer's failure to respond to the written demand within a reasonable time amounted to a repudiation / prospective inability to perform, discharging the department and entitling it to secure cover elsewhere (Option B). Option A is incorrect because frustration of purpose applies when the buyer's principal purpose in contracting is destroyed, not when the seller experiences a supply/manufacturing disruption. Option C is incorrect because whether an installment contract is divisible does not excuse a failure to provide adequate assurances following catastrophic disruption. Option D is incorrect because the police department's cover agreement occurred after the plaintiff's statutory repudiation, meaning the department was exercising a valid remedy rather than committing a wrongful repudiation."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "A group of teenagers hired a stretch limousine for their prom. While driving to the prom, the limousine driver saw a dog crossing the road in front of the vehicle. He swerved to avoid it and ended up crashing into a tree. Several of the teenagers were injured. A state statute required that all limousine drivers carry at least a $100,000 minimum accident liability policy. The limousine driver was uninsured.",
        q: "If the limousine driver is found liable for the teenagers' injuries, what is the likely reason?",
        opts: [
            "Under the doctrine of res ipsa loquitur, because an accident like this would not normally occur without negligence.",
            "Under the doctrine of negligence per se, because the driver violated the state insurance statute.",
            "Because his conduct in swerving to avoid the dog was unreasonable.",
            "Because he owed a special duty to the teenagers in his care."
        ],
        ans: 2,
        exp: "Rule: The fundamental basis of liability in negligence is that the defendant breached the duty of care by acting unreasonably under the circumstances. If the limousine driver is held liable, it must be because swerving violently into a fixed object (a tree) to avoid a small animal rather than braking or maintaining course constituted unreasonable conduct under the emergency doctrine (Option C). Option A is incorrect because res ipsa loquitur applies when the exact cause of the accident is unknown; here, the driver's affirmative act of swerving to avoid the dog was fully known and witnessed. Option B is incorrect because negligence per se requires that the statutory violation be the cause-in-fact of the accident; operating without insurance does not cause a vehicle to crash. Option D is incorrect because, while common carriers historically owed a higher duty of care to passengers, liability still requires unreasonable or negligent conduct under the circumstances."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "At the defendant's trial on criminal charges, undisputed evidence established that the defendant and his friend had planned to take a certain coat from the victim's shop by threatening the victim with a pistol carried by the friend; that when they did so, the victim began shooting at them; and that the friend shot back with his pistol, intentionally killing the victim.\n\nTestifying on behalf of the prosecution, the friend stated that the defendant knew that the friend's pistol would be loaded. He also stated that the victim had handed the defendant the coat; that the friend had returned his own gun to his pocket; and that he and the defendant were on their way out of the victim's shop when the victim began shooting at them.\n\nThe defendant testified that the coat in question had previously been stolen from her by the victim, and that she and the friend were trying to retrieve it.\n\nStatutes in the jurisdiction define first-degree murder as the intentional unlawful killing of a human being, and second-degree murder as the unintentional killing of a human being by the defendant or an accomplice during the course of a burglary, robbery, rape, kidnapping, or arson committed by the defendant.\n\nThe jury believes the testimony of the defendant but does not believe the testimony of the friend.",
        q: "Which of the following would be the defendant's most effective argument in defense against a charge of second-degree murder?",
        opts: [
            "It was unforeseeable that the victim would begin shooting.",
            "The defendant did not know that the friend's pistol would be loaded.",
            "The victim's death did not occur during the course of one of the crimes specified in the applicable statute.",
            "The statute was not intended to impose criminal liability on one person for the acts of another."
        ],
        ans: 2,
        exp: "Rule: Under the statutory felony-murder rule specified, second-degree murder requires an unintentional killing committed during the course of an enumerated felony: burglary, robbery, rape, kidnapping, or arson. Robbery requires the trespassory taking of personal property belonging to another. Because the jury believed the defendant's testimony, the coat had previously been stolen from her, giving her a bona fide claim of right to her own property. A person who recaptures their own property lacks the intent to steal necessary for larceny, thereby defeating the underlying robbery charge. Because no robbery or other enumerated felony was committed, the killing did not occur during the course of an enumerated felony under the statute (Option C). Options A and B are incorrect because felony murder is a strict liability homicide doctrine that does not depend on foreseeability of lethal resistance or knowledge of loaded firearms. Option D is incorrect because the statute expressly encompasses killings committed by an accomplice."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "One night, the defendant looked out his window and saw a robber taking something from his garage. The defendant went outside with a pistol and saw that the robber was already backing down the defendant's driveway in his getaway car. The defendant yelled, 'Stop or I'll shoot you right through the windshield!' The robber stopped and started to get out of the car with a large axe in his hand. Before the robber could get to his feet, the defendant shot the robber in the head, killing him instantly. The defendant was charged with manslaughter. At trial, the defendant claimed he acted in self-defense.",
        q: "If the defendant is found guilty of manslaughter, what is the likely reason?",
        opts: [
            "The harm being defended against was not reasonably imminent.",
            "The defendant used more force than necessary.",
            "The robber had already withdrawn.",
            "The defendant provoked the robber."
        ],
        ans: 3,
        exp: "Rule: An initial aggressor or provoker forfeits the right to use deadly force in self-defense. One who threatens unlawful deadly force ('Stop or I'll shoot you right through the windshield!') without privilege becomes the initial aggressor in the confrontation. Because the defendant used a lethal threat to prevent the robber's escape after the theft had concluded (deadly force is never privileged solely to defend property or prevent the retreat of a non-violent thief), the defendant unlawfully provoked the confrontation, forfeiting the privilege of self-defense (Option D). Option A is incorrect because an assailant emerging with a large axe poses an imminent threat of deadly harm. Option B is incorrect because a firearm is proportional to an axe attack if the right to self-defense were available. Option C is incorrect because the robber stopped and emerged with an axe rather than continuing to withdraw."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "A boy decided to play a prank on his babysitter. He took one of his play swords and swung it at his babysitter's head, acting like he was going to hit her (although he had no intention of doing so). The babysitter raised her arms in defense. At the same moment, the boy's little sister walked out of the bathroom, saw her brother swinging the sword, and ducked, thinking she was about to be hit by the sword. Due to a manufacturing defect in the sword, the blade flew off and struck the babysitter in the head.",
        q: "Which statement is most correct?",
        opts: [
            "The boy could not be held liable for battery of the babysitter because he did not have the necessary intent.",
            "The boy's sister could claim assault under the doctrine of transferred intent.",
            "Since the boy only intended to frighten the babysitter, he did not have the necessary intent for assault.",
            "Because the boy did not bear malice or hostility toward the babysitter, he could not be held liable for battery."
        ],
        ans: 1,
        exp: "Rule: The doctrine of transferred intent applies across the intentional torts of assault, battery, false imprisonment, trespass to land, and trespass to chattels, as well as between different victims. Where an actor intends to commit an assault (intend to cause apprehension of imminent harmful contact in the babysitter) and an unintended third party (the sister) is placed in reasonable apprehension of imminent harmful contact, the intent transfers to the sister, supporting an assault claim by the sister (Option B). Option A is incorrect because intending an assault satisfies the intent requirement for battery when bodily contact ensues through transferred intent between torts. Option C is incorrect because the intent to cause apprehension of contact is the definition of assault intent. Option D is incorrect because hostile motive or malice is not an element of battery."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "On March 1, the buyer, a well-known collector of antique automobiles, mailed to a newspaper an advertisement that read, in part: 'I will pay $100 for information leading to purchase of an antique car.' On March 2, before the advertisement appeared in the newspaper and without knowing about it, the seller phoned the buyer collect and offered to sell him an antique car. The advertisement was published on March 3. On March 3, a man saw the advertisement and remembered meeting someone who owned an antique car. After calling a few friends, the man obtained the owner's name and address and mailed it to the buyer with a request for the $100 reward. On March 4, the buyer looked at the seller's antique car and purchased it. Later that day, the buyer mailed to the newspaper for publication a second advertisement that in part read: 'No reward for antique car. I hereby withdraw my previous request for information about an antique car.' The second advertisement did not appear in the newspaper until March 6. On March 5, the buyer received the man's letter, but discarded it because he had purchased the seller's antique car.",
        q: "If the man asserts a claim against the buyer for $100, should the court find in the man's favor?",
        opts: [
            "No, because the buyer mailed the second advertisement before receiving the man's letter.",
            "No, because the man's letter did not lead to the purchase of an antique car.",
            "Yes, because he mailed the letter to the buyer before the buyer purchased an antique car.",
            "Yes, because the buyer received the man's letter before the second advertisement was published."
        ],
        ans: 1,
        exp: "Rule: A unilateral contract offer requesting a specific act or result can be accepted only by full performance of the requested terms. The offer explicitly promised to pay $100 for information 'leading to purchase of an antique car.' Because the buyer had already been contacted by the seller on March 2 and purchased that seller's vehicle based on the seller's independent call, the man's letter received on March 5 did not lead to the purchase of the vehicle. Performance of the bargained-for condition was not satisfied (Option B). Option A is incorrect because revocation of a public offer by publication requires comparable publicity, which was not accomplished until March 6. Options C and D are incorrect because neither dispatch nor receipt of the letter constitutes acceptance when the substantive condition (furnishing information that actually leads to a purchase) never materialized."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A man who suffered from severe skin allergies purchased a topical cream online. A statute required the drug manufacturer to insert into the cream's packaging a warning of its potential adverse side effects. The manufacturer failed to insert an appropriate warning of a particular side effect, skin discoloration, into the cream's packaging. The man used the cream for several months until his skin began to turn a dark blue color. Even though the man continued to use the cream, the man sued. At trial, the man testified that neither he nor anyone in his household ever read warnings that accompanied drugs.",
        q: "How should the court rule?",
        opts: [
            "In favor of the manufacturer, because no one in the man's household read drug warnings.",
            "In favor of the manufacturer, because the man continued to use the cream.",
            "In favor of the man, because the manufacturer violated the statute by failing to include the warning.",
            "In favor of the man, because the type of harm caused could have been avoided by an adequate warning."
        ],
        ans: 0,
        exp: "Rule: In a products liability action based on failure to warn (under both negligence and strict liability), the plaintiff must establish causation: that the absence of the warning was the cause-in-fact of the injury. While courts typically apply a rebuttable presumption that an adequate warning would have been read and heeded, this presumption is rebutted where the plaintiff affirmatively admits that he never reads warnings on medications. Because the plaintiff would not have read the warning even if properly included, the omission was not a cause-in-fact of his injury (Option A). Option B is incorrect because continuing to use the cream after the injury occurred speaks to mitigation of damages rather than initial liability. Option C is incorrect because negligence per se establishes breach of duty, but does not dispense with the requirement of proving causation-in-fact. Option D is incorrect because a warning cannot avoid harm if the consumer admits he never reads package warnings."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A man was at the beach when he saw a small dog being washed out to sea. He jumped into the ocean and rescued the dog. As soon as the man and the dog were back on the beach, the dog's owner ran up to the man and said, 'That's my prize show dog! I promise to pay you $1,000 for rescuing him!' The man accepted. In celebration, the man bought himself a new motorcycle on credit based on his expected reward money. Several months passed, and the man called the dog's owner to ask when he might be paid so he could pay off the motorcycle. The dog owner refused to pay the $1,000 he had promised, claiming it was unsupported by any consideration.",
        q: "Which of the following would be the man's most effective argument in support of his claim?",
        opts: [
            "The dog owner's promise was given in exchange for the man's rescue of his dog.",
            "The dog owner was morally obligated to compensate the man for rescuing his dog.",
            "Allowing the dog owner to avoid compensating the man for rescuing the dog would unjustly enrich the dog owner.",
            "The man detrimentally relied on the dog owner's promise by buying the motorcycle."
        ],
        ans: 1,
        exp: "Rule: Under the traditional common law rule, past consideration is no consideration because the detriment was not bargained for in exchange for the promise. However, under the material benefit rule / moral obligation doctrine (Restatement (Second) of Contracts § 86; Webb v. McGowin), a promise made in recognition of a substantial benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice. Asserting that the owner incurred a moral obligation based on the receipt of a material benefit is the plaintiff's strongest available legal argument (Option B). Option A is incorrect because the rescue was completed before the promise was made, precluding a bargained-for exchange. Option C is incorrect because the man acted as a volunteer without an expectation of payment at the time of rescue, making quasi-contract restitution difficult to establish independently. Option D is incorrect because buying a motorcycle on credit was not an act that the dog owner should reasonably have expected to induce by promising a rescue reward."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "At the defendant's trial for murder, the prosecution proved that the defendant was driving while intoxicated when his car struck another car, killing all its occupants. The defendant appealed his conviction for voluntary manslaughter.",
        q: "Which of the cases below is most applicable as precedent?",
        opts: [
            "Believing that the victim was attacking her, the defendant swung a tennis racket at the victim, hoping to frighten the victim away but not meaning to strike the victim with it. The tennis racket struck the victim in the head, causing his death. At the defendant's trial, over the defendant's objection, the judge instructed the jury to find the defendant guilty of involuntary manslaughter if the force used by the defendant was excessive. The defendant's conviction for involuntary manslaughter was affirmed.",
            "The defendant's wife was admitted to the intensive care unit of a hospital following an automobile accident. While visiting her, the defendant overheard doctors saying that there was no hope of saving the life of a certain patient who would be in intense pain and paralyzed for as long as she lived. Mistakenly believing that they were talking about his wife, the defendant subsequently smothered her to death with a pillow while she was asleep in the hospital bed. The defendant was convicted of murder after the court refused to charge the jury that if the defendant believed that his wife was hopelessly ill and in intense pain, they could find him guilty of voluntary manslaughter. The defendant's conviction for murder was reversed.",
            "While the defendant was robbing a tavern, the bartender attempted to grab the defendant's gun. During the struggle, the gun accidentally went off, seriously injuring the bartender. At the defendant's trial for attempted murder, the court instructed the jury to return a verdict of not guilty if they found that the defendant did not intend to cause the bartender's death. The defendant's acquittal was affirmed.",
            "After the defendant quarreled with her lover, she fired a gun at him while he was with his wife. The bullet missed the defendant's lover but struck and killed his wife. At the defendant's trial, it was established that she fired with the intention of frightening both her lover and his wife, but that she did not mean to strike either of them. The defendant was convicted of murder after the court refused to charge the jury on involuntary manslaughter. The conviction was affirmed."
        ],
        ans: 3,
        exp: "Rule: Voluntary manslaughter requires an intentional homicide committed in the sudden heat of passion resulting from adequate provocation, or imperfect self-defense. Reckless homicides committed without intent to kill—such as drunk driving collisions—fall under involuntary manslaughter or depraved-heart second-degree murder. In Case D, the defendant acted with extreme recklessness without intending to kill; the court's refusal to instruct on voluntary manslaughter and the affirmance of murder established that an absence of intent to kill precludes voluntary manslaughter, making it the most directly applicable precedent on the mens rea boundaries of voluntary manslaughter (Option D). Option A addresses imperfect self-defense and involuntary manslaughter. Option B addresses mercy killings and adequate provocation. Option C addresses specific intent in attempted murder."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "A buyer signed a sales contract to buy a new house from the seller. The contract stated that it was 'subject to and conditional upon the buyer obtaining a 30-year mortgage from a bank or other lending institution in the amount of $200,000 at an interest rate of less than 2 percent.' The buyer went to several banks in the area, but no bank would lend him the money at an interest rate of less than 2 percent. The seller offered to set up a private financing plan between the two parties that would bring the interest rate down to less than 2 percent for the buyer over the course of the loan. The buyer refused to close the deal. The seller argued that with the private financing in place, the net result of the loan was the same and the contract should be enforced.",
        q: "What is the result of the buyer's failure to obtain an interest rate of less than 2 percent?",
        opts: [
            "The buyer is discharged from his duty to close the sale.",
            "Since the net result of the private financing is the same, the buyer is required to close the sale.",
            "The seller can sue the buyer for specific performance to complete the sale.",
            "The seller can sue the buyer for any damages he suffered under the contract due to the buyer's failure to obtain a loan at less than 2 percent interest."
        ],
        ans: 0,
        exp: "Rule: Express conditions in a contract must be strictly complied with. Where a purchase contract contains a financing contingency specifying that the buyer's obligation to close is conditional upon obtaining a mortgage from a bank or lending institution at a specified rate, the failure of that condition precedent—despite the buyer's good-faith efforts—excuses the buyer's duty to perform and discharges the contract. The buyer is not required to accept private seller financing or an alternative arrangement not specified in the contract (Option A). Option B is incorrect because strict compliance applies to express conditions; substantial equivalence cannot force a party to accept an unbargained-for financing source. Options C and D are incorrect because the non-occurrence of an express condition precedent is not a breach and creates no liability for damages or specific performance."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "The company was a major corporation with shares of stock traded on several stock exchanges. When rumors began to circulate that the company was experiencing financial difficulties, the price of the company stock fell drastically. The reporter was a journalist who wrote a financial news column for a daily newspaper. One day, while the reporter was discussing the company rumor with her friend, the friend said, 'I wouldn't be surprised if the whole thing was some kind of stunt to manipulate the price of stock.' The reporter was aware that the friend knew nothing about the stock market or about the company. The following day, based solely upon what she had heard from the friend, the reporter made the following statement in her column: 'Don't be fooled by rumors that the company is in trouble. Insiders say that the whole thing is a stunt to manipulate the price of the stock. I say the company is still a good investment.' After reading the column, the plaintiff invested in the company's stock in reliance on the reporter's statement. Two days later, the company filed a petition in bankruptcy, and its stock became worthless.",
        q: "If the plaintiff asserts a claim against the reporter for misrepresentation, which one of the following facts or inferences, if it were the only one true, would be most likely to result in a judgment for the reporter?",
        opts: [
            "At the time the plaintiff purchased the company's stock, the company's financial condition was a matter of public record.",
            "The reporter's statement 'I think the company is a good investment' was an expression of opinion.",
            "The plaintiff did not purchase the edition of the newspaper that contained the reporter's statement, but read it after finding it on a bus.",
            "The reporter did not know that any person would rely on her statement."
        ],
        ans: 3,
        exp: "Rule: An action for intentional misrepresentation (fraud/deceit) requires: (1) a misrepresentation of a material fact, (2) scienter, (3) intent to induce reliance by the plaintiff or a class of persons to which the plaintiff belongs, (4) justifiable reliance, and (5) damages. If the reporter did not know or intend that anyone would rely on her statement in making stock investments, the essential element of intent to induce reliance is negated, defeating the fraud claim (Option D). Option A is incorrect because a plaintiff's failure to investigate public records is not a defense to intentional fraudulent misrepresentation. Option B is incorrect because stating that 'Insiders say' is a provable representation of existing fact, not mere opinion. Option C is incorrect because secondary acquisition of a public newspaper does not defeat the intended audience reach if the publication was intended to induce investor reliance generally."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "The defendant and the victim, who resided in the city, purchased rifles. Because neither of them had ever fired a rifle before, they decided to take them to the municipal dump to try them out. Although both believed that the dump was outside city limits, it was actually within city limits. At the dump, the defendant shot his rifle in the victim's direction, aiming slightly to the right to miss the victim. The bullet struck a rock and ricocheted, hitting the victim in the back and causing his death. A city ordinance provides that '[a]ny person who shall discharge a firearm knowing that he or she is within the municipal limits shall be guilty of a misdemeanor punishable by a maximum fine of $100.'",
        q: "Which of the following is the most serious crime of which the defendant may properly be convicted?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Attempted murder.",
            "Discharging a firearm within the municipal limits."
        ],
        ans: 0,
        exp: "Rule: Common law murder is the unlawful killing of a human being with malice aforethought. Malice is established by depraved-heart murder: conduct that exhibits a reckless and wanton indifference to an unjustifiably high risk to human life. Firing a high-powered rifle directly in the immediate direction of another person while having no prior experience handling firearms constitutes depraved-heart recklessness, supporting a conviction for second-degree murder (Option A). Option B is incorrect because voluntary manslaughter requires an intentional killing in the heat of passion or under imperfect self-defense, neither of which applies. Option C is incorrect because attempt requires a specific intent to kill, which the defendant lacked. Option D is incorrect because the defendant honestly believed they were outside city limits, negating the ordinance's express knowledge requirement."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "An author sent a text to her friend that said, 'Because you helped me get a $1 million advance for my new book, I'm going to give you my favorite Picasso drawing from my collection! I couldn't have done it without you!' The friend replied, 'Thank you so much! I'm going to give you one of my paintings of flowers that I did. I hope you like it!' The next day, the friend showed up with her painting at the author's house. The author thought the friend's painting was terrible and said, 'On second thought, I'm keeping the Picasso.' The friend sued the author for the Picasso.",
        q: "Should the court rule in the friend's favor?",
        opts: [
            "Yes, because the friend delivered her painting to the author.",
            "Yes, because the author received a $1 million advance due to the friend's help.",
            "No, because the author did not like the friend's painting.",
            "No, because there was no consideration."
        ],
        ans: 3,
        exp: "Rule: Enforceability of a contract requires bargained-for consideration. A promise made in recognition of past assistance is past consideration, which does not satisfy the requirement of an exchange. Furthermore, mutual gratuitous promises to make gifts (an exchange of gifts without bargaining) do not constitute consideration. The author promised the drawing out of gratitude for past help, and the friend offered a painting as a reciprocal gift; neither promise was bargained for as the price of the other. The promise was unenforceable for lack of consideration (Option D). Option A is incorrect because delivering an unbargained-for gift does not convert a gratuitous promise into a binding contract. Option B is incorrect because past services do not supply consideration for a subsequent promise. Option C is incorrect because subjective artistic approval is irrelevant where no underlying contract was formed."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "A woman sold her financial services business to a larger company for $50 million in cash. Pursuant to the sales contract, the company agreed to employ the woman for one year at $1 million per year. Three months after the sale, the company fired the woman without justification. The woman was angry. Although there were comparable jobs in her field available in the area, the woman decided to work as a bartender for a year to blow off some steam and then get back into financial services. At the end of the year, the woman had made $45,000 as a bartender. She then sued the company for the $750,000 it owed her from the original company sales contract.",
        q: "Should the court rule in the woman's favor?",
        opts: [
            "No, because the woman did not seek comparable employment.",
            "No, because the woman's employment was only a minor breach of the sales contract.",
            "Yes, because the woman was fired without justification.",
            "Yes, because the woman's bartending job paid much less than the salary promised by the company."
        ],
        ans: 0,
        exp: "Rule: In an action for breach of an employment contract, the employee is entitled to the agreed salary minus amounts earned or amounts that could have been earned with reasonable diligence in comparable or substantially similar employment. The doctrine of avoidable consequences (duty to mitigate damages) bars recovery for salary losses that the employee could have avoided by accepting available comparable employment in the same field and locality. Because the employee made no effort to obtain comparable financial services positions that were readily available, her recovery for the remaining salary is barred by failure to mitigate (Option A). Option B is incorrect because wrongful termination of an employment provision is an actionable material breach of that employment promise. Options C and D are incorrect because unjustified firing does not eliminate the affirmative requirement to mitigate damages through available comparable employment."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "A restaurant contracted to buy 20 kegs of beer at the beer distributor's listed price of $50. Due to a mistake in the beer distributor's warehouse, the distributor sent the restaurant only 12 kegs of beer. Because the restaurant knew it would be busy for football weekend, it accepted the 12 kegs and notified the distributor of the error. The distributor looked for more beer in its warehouse, but it realized it was sold out. Consequently, the distributor did not ship any more beer to the restaurant. The restaurant ended up running out of beer on football weekend, which caused a riot in the restaurant. The restaurant owner was so angry that he did not send payment to the distributor.",
        q: "May the restaurant owner refuse to pay the distributor?",
        opts: [
            "Yes, because the distributor failed to deliver 20 kegs of beer as contracted.",
            "Yes, because the distributor's mistake led to a riot in the restaurant.",
            "No, because the restaurant accepted 12 kegs of beer.",
            "No, because the distributor could not fulfill the original order."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-607(1), a buyer must pay at the contract rate for any goods accepted. While a buyer facing a non-conforming tender may reject the whole under UCC § 2-601, the buyer may also accept any commercial unit and reject the rest. Once goods are accepted, the buyer is legally obligated to pay the contract price for the units accepted, though the buyer retains a right to seek an offset or damages under UCC § 2-714 for the breach (Option C). Options A and B are incorrect because the restaurant owner cannot refuse to pay for accepted goods entirely; acceptance requires payment of the purchase price for the 12 kegs, subject to a counterclaim/deduction for breach damages. Option D is incorrect because the distributor's inventory shortage does not determine the buyer's statutory obligation to pay for accepted units."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "A man was at a crowded rock concert when he saw a $20 bill fall out of a woman's pocket. The man grabbed the $20 and put it in his pocket. The woman reached into her pocket, turned around, and asked the man if he had seen any money on the floor. The man said no and walked to the bar to buy himself beer with the $20.",
        q: "Of what crime is the man guilty?",
        opts: [
            "False pretenses.",
            "Larceny.",
            "Conversion.",
            "No crime because the woman dropped the $20."
        ],
        ans: 1,
        exp: "Rule: Common law larceny is the trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. With respect to lost or mislaid property, a finder commits larceny if, at the time of taking, the finder knows the true owner or has immediate clues to the owner's identity, yet takes possession with the contemporaneous intent to permanently deprive. The man saw the bill fall directly from the woman's pocket, immediately knew its true owner, and took it intending to keep it for himself (Option B). Option A is incorrect because false pretenses requires that the victim be induced by false representations to transfer title; the woman did not pass title to the man in reliance on a lie. Option C is incorrect because conversion is a civil tort, not a common law crime. Option D is incorrect because dropped property whose owner is immediately identifiable remains the subject of larceny."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A music store sent a famous musician a letter offering to sell a rare guitar to the musician for $20,000 so long as he accepted the offer within one week. Three days later, the musician sent a letter back accepting the offer so long as the guitar carried a warranty of merchantability. The musician liked the guitar so much that he planned to base his new record cover on it. Before the music store received the musician's letter, the music store sold the guitar to another man. The music store received the musician's letter six days later. Two days after that, the musician called the music store, which told him the guitar had been sold to someone else. The musician sued the music store for breach of contract.",
        q: "Should the court rule in the musician's favor?",
        opts: [
            "Yes, because the musician accepted the offer.",
            "Yes, based on promissory estoppel.",
            "No, because the store did not receive the musician's letter until nine days after the offer was made.",
            "No, because the musician added an additional term to his acceptance."
        ],
        ans: 0,
        exp: "Rule: Under the mailbox rule, an acceptance of an offer is effective upon dispatch. Under UCC § 2-207(1), a definite and seasonable expression of acceptance operates as an acceptance even though it states terms additional to or different from those offered. Furthermore, an express condition requiring an implied warranty of merchantability is not an additional or inconsistent term because the implied warranty of merchantability is automatically incorporated into every contract for the sale of goods by a merchant seller under UCC § 2-314. The musician dispatched his acceptance within the one-week window, forming a binding contract on the date of mailing before the store sold the instrument to another (Option A). Option B is incorrect because promissory estoppel is inapplicable where an actual contract was formed. Option C is incorrect because dispatch (mailing within 3 days) controls over receipt under the mailbox rule. Option D is incorrect because the UCC abolished the mirror-image rule, and the warranty of merchantability is implied by law."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "A man had embezzled $1 million from his company due to his crippling gambling addiction. To cover up the crime, he decided to kill his boss. One morning, the man took his boss's sandwich from the company refrigerator and laced it with poison. The man then went to his office and waited. By 12:30, the man felt so guilty that he ran to the boss's office and offered to take him out for pizza for lunch so he wouldn't eat the poisoned sandwich. While the man and his boss were away enjoying pizza, another worker took the sandwich from the refrigerator and ate it. The worker died instantly. The jurisdiction followed the common law.",
        q: "Out of the following, which crimes could the man be found guilty of?",
        opts: [
            "No crime because the worker's death was an accident.",
            "Manslaughter of the worker.",
            "Attempted murder of the boss.",
            "Attempted murder of the boss and murder or manslaughter of the worker."
        ],
        ans: 3,
        exp: "Rule: Attempt requires a specific intent to commit the target offense and an overt act in furtherance beyond mere preparation. Lacing the sandwich with poison and leaving it in the refrigerator for the boss constituted an attempt; at common law, subsequent voluntary abandonment is not a defense once the attempt is complete. For the co-worker's death, the doctrine of transferred intent transfers the man's intent to kill from the boss to the deceased co-worker, establishing murder. Alternatively, leaving a lethal, poisoned sandwich in a shared office refrigerator exhibits depraved-heart malice or criminal negligence, supporting murder or involuntary manslaughter. The man is liable for attempted murder of the boss and murder or manslaughter of the worker (Option D). Options A, B, and C are incorrect because they fail to account for the completed attempted murder and the homicide liability arising from transferred intent and depraved recklessness."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "The plaintiff showed his silver coins to the defendant and asked whether the defendant would be interested in trading them for chickens. After inspecting the coins, the defendant and the plaintiff placed them in a bag that they sealed together and left with a banker whom they both knew. Then, in a writing signed by both of them, they agreed to the trade. Pursuant to the terms of their agreement, the defendant was to deliver 6,000 fryer chickens to the plaintiff on July 1, at which time the bag of coins would be turned over to the defendant as payment in full. In May, weather conditions were such that the price of fryer chickens increased to three times what it had been when the agreement was signed. Although it was foreseeable that the market price for fryer chickens would change dramatically, neither party knew that the market price of fryer chickens would change. On July 1, the defendant refused to deliver 6,000 fryer chickens to the plaintiff.",
        q: "If the plaintiff asserts a claim against the defendant for breach of contract, should the court find in the plaintiff's favor?",
        opts: [
            "No, because neither party knew that the market price of fryer chickens would change.",
            "No, because the likelihood of fluctuation in the value of money makes this contract aleatory.",
            "Yes, because it was foreseeable that the market price of fryer chickens would change dramatically.",
            "Yes, because the transaction was not a sale as defined by the UCC."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-615, commercial impracticability excuses performance only where a supervening event occurs, the non-occurrence of which was a basic assumption on which the contract was made. Fluctuations in market price are normal, foreseeable business risks assumed by contracting parties. Where dramatic price changes are foreseeable, the party bearing the market risk is not excused by commercial impracticability or mutual mistake of fact. Because the price surge was foreseeable, the defendant remained obligated to deliver the chickens (Option C). Option A is incorrect because subjective lack of foresight regarding market shifts does not excuse performance when market fluctuations are objectively foreseeable. Option B is incorrect because contracts for future delivery at a fixed price are not aleatory contracts. Option D is incorrect because a barter/exchange of goods for consideration is governed by UCC Article 2 under § 2-304."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "The defendant was out walking when she saw the plaintiff, a seven-year-old child, suddenly chase a ball into the street in the path of a car driven by a driver. Afraid that the plaintiff would be hit by the car, the defendant ran into the roadway and pushed the plaintiff out of the way. The driver's car struck the defendant. The plaintiff was not hit by the driver's car, but he hurt his knees when he fell to the ground as a result of being pushed by the defendant. The jurisdiction applies the all-or-nothing rule of contributory negligence.",
        q: "If the plaintiff asserts a negligence claim against the defendant for the injuries to his knees, which one of the following additional facts or inferences, if it was the only one true, would be most likely to result in a judgment for the defendant?",
        opts: [
            "The plaintiff's injury was proximately caused by the negligence of the driver.",
            "If the defendant had not pushed him out of the way, the plaintiff would have been struck by the driver's car and killed.",
            "The defendant was severely injured as a result of being struck by the driver's car.",
            "The situation confronted the defendant with an emergency."
        ],
        ans: 3,
        exp: "Rule: Under the emergency doctrine in negligence, an actor confronted with a sudden, unexpected emergency not created by the actor's own misconduct is not held to the standard of calm contemplation applied in non-emergency settings, but rather to the standard of care of a reasonably prudent person facing that same sudden emergency. Rushing into the street to push a child out of the direct path of an oncoming automobile was an emergency response; showing that the situation was an emergency establishes that pushing the child out of harm's way was reasonable under the circumstances (Option D). Option A is incorrect because multiple tortfeasors can both be proximate causes of an injury. Option B is incorrect because necessity/lesser harm goes to justification, but the primary defense to negligence is that the defendant acted reasonably under emergency conditions. Option C is incorrect because injuries suffered by the defendant do not negate breach of duty toward the plaintiff."
    }
];