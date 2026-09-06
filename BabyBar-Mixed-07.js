const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "The state published an advertisement calling for bids 'for a contract to be the exclusive supplier of fuel for state vehicles.' The plaintiff submitted a bid and, after negotiation, entered into a written contract to supply at a specified price per gallon for a period of one year 'all fuel ordered by the state.' Several months after executing the contract, the plaintiff learned that the state was purchasing substantial amounts of fuel from other suppliers. The plaintiff asserted a claim against the state for breach of contract. At the trial, state attorneys offered the written contract into evidence and pointed out that its language did not specifically state that the plaintiff was to be the exclusive supplier. When the plaintiff attempted to offer a copy of the advertisement calling for bids into evidence, state attorneys objected on the ground that the advertisement was inadmissible under the parol evidence rule.",
        q: "What is the plaintiff's most effective argument in response to the state's objections?",
        opts: [
            "The advertisement tends to show that the written contract was ambiguous.",
            "The advertisement was in writing.",
            "The advertisement was a communication that led to a written contract.",
            "The advertisement was an invitation to negotiate."
        ],
        ans: 0,
        exp: "Rule: The parol evidence rule does not bar extrinsic evidence (including prior writings, solicitations, or negotiations) offered to interpret or clarify an ambiguity in the written terms of an agreement. The phrase 'all fuel ordered by the state' is ambiguous as to whether it means all fuel the state chooses to order from the plaintiff or all fuel required/used by the state (an exclusive requirements commitment). Offering the bid advertisement is admissible to demonstrate this latent ambiguity and prove the parties intended an exclusive requirements contract (Option A). Option B is incorrect because written prior communications are equally subject to the parol evidence rule if offered to contradict an integrated term. Option C is incorrect because prior preliminary negotiations leading up to a contract are generally merged and superseded under the rule unless an ambiguity or defense is shown. Option D is incorrect because characterizing the document as an invitation to negotiate tends to weaken its evidentiary weight as an interpretation of the final agreement."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "The plaintiff bought from the defendant, a car dealer, a new car manufactured by the manufacturer. The vehicle was equipped with a seat belt warning indicator, although the law did not require such a device. The indicator was designed to cause a bright red light on the dashboard to begin glowing when the engine was started and to remain lit until the driver's seat belt was fastened. When the car was delivered to the plaintiff, an employee of the defendant explained to the plaintiff that the seat belt warning indicator was not working, but that the defendant would repair it without charge as soon as the necessary parts were received. The following day, the plaintiff was involved in an accident while driving the new car. As a result of the impact, she was thrown from the vehicle and sustained an injury when her head struck the pavement. If she had been wearing a seat belt at the time, she would not have been injured. The plaintiff subsequently asserted a claim against the defendant for her injuries on the ground that the failure of the seat belt warning indicator made the vehicle defective.",
        q: "Which of the following would be the defendant's most effective argument in response to that allegation?",
        opts: [
            "When the plaintiff drove the vehicle, she was aware that the seat belt warning indicator was not working.",
            "The law did not require the vehicle to be equipped with a seat belt warning indicator.",
            "It is impossible to prove with certainty that the plaintiff would have worn a seat belt if the seat belt warning indicator had been working.",
            "The failure of the seat belt warning indicator was the result of the negligence of the manufacturer."
        ],
        ans: 0,
        exp: "Rule: In products liability, a plaintiff who voluntarily encounters a known product condition or defect with full subjective appreciation of the risk may be barred from recovery under assumption of risk, or cannot establish reasonable reliance on a safety indicator. Because the dealer explicitly informed the plaintiff prior to driving that the warning light was inoperable, the plaintiff drove with full knowledge and subjective awareness that no warning reminder would appear, negating reliance and proving assumption of the risk regarding the absent light (Option A). Option B is incorrect because a voluntary safety feature that is defective can still create product liability even if not mandated by statute. Option C is incorrect because causation in tort requires proof by a preponderance of the evidence, not certainty. Option D is incorrect because commercial auto dealers in the distribution chain are strictly liable for manufacturing defects regardless of whether the manufacturer was the negligent party."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "During his trial for murder, a man entered a plea of not guilty by reason of insanity. The man's defense experts testified that the man knew killing another person was illegal and wrong, but that he suffered from a serious mental illness that irresistibly compelled him to kill the victim because he believed the victim was possessed by the devil. The jury believed the expert witnesses and the jurisdiction followed the M'Naghten test for insanity.",
        q: "Should the jury acquit the man of murder?",
        opts: [
            "Yes, because the man suffered from an irresistible compulsion caused by a serious mental illness.",
            "Yes, because the man believed the victim was possessed.",
            "No, because the man knew the difference between right and wrong.",
            "No, because the man intended to kill the victim."
        ],
        ans: 2,
        exp: "Rule: Under the traditional M'Naghten rule for insanity, a defendant is legally insane only if, at the time of the criminal act, a defect of reason or mental disease caused the defendant either (1) not to know the nature and quality of the act, or (2) not to know that what they were doing was wrong. Inability to control one's conduct ('irresistible impulse') is recognized as an insanity defense under the separate Irresistible Impulse test or the MPC Model Penal Code test, but is strictly NOT a defense under the M'Naghten rule. Because the man knew that killing the victim was both illegal and wrong, he fails the M'Naghten standard (Option C). Option A is incorrect because irresistible compulsion is not recognized under M'Naghten. Option B is incorrect because a delusion does not excuse if the defendant still understood the act was legally and morally wrong. Option D is incorrect because an insane person may intend an act while lacking the capacity to appreciate wrongfulness under M'Naghten."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "The Department of Highway Transportation is the agency of state government responsible for maintaining state highways. While driving on a state highway, the defendant attempted to pass the plaintiff's vehicle on the right. As she did so, one of the defendant's wheels struck a pothole, causing her car to go out of control and strike the plaintiff's car. The pothole existed because the Department of Highway Transportation was negligent in maintaining the road surface, and there were many potholes in the area. The defendant would not have lost control of her car if she had not hit the pothole while driving at an unreasonably fast rate of speed. A statute in the jurisdiction prohibits passing on the right. The jurisdiction has also abolished the concept of governmental immunity. The plaintiff subsequently asserted a negligence claim against the defendant for injuries sustained in the accident.",
        q: "If the defendant's only argument in defense is that the pothole was a superseding cause of harm, should the court find for the plaintiff?",
        opts: [
            "Yes, because the defendant's attempt to pass the plaintiff on the right was a violation of an automobile safety statute.",
            "Yes, because potholes are often found on the road surfaces where the accident occurred.",
            "Yes, because the concept of governmental immunity has been abolished in the jurisdiction.",
            "No, because the accident would not have happened but for the existence of the pothole."
        ],
        ans: 1,
        exp: "Rule: An intervening force is superseding (relieving an initial negligent actor of liability) only if it is extraordinary and unforeseeable. Where an intervening hazard—such as a common road defect or pothole—is ordinary, foreseeable, and prevalent on the roadway, it is a concurring dependent intervening force, not a superseding cause. Because potholes were frequently found in that area and encountering a road imperfection while speeding is a foreseeable risk, the pothole does not break the chain of proximate cause (Option B). Option A is incorrect because statutory violation establishes breach of duty, but does not address the defendant's specific proximate cause / superseding cause defense. Option C is incorrect because municipal immunity abolition addresses the state's liability, not whether an intervening force is superseding. Option D is incorrect because concurring 'but-for' causes do not insulate a negligent driver whose unreasonable speed contributed to the loss of control."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A man was negligently flying his new drone when it hit a woman walking on the sidewalk nearby. According to Federal Aviation Authority law, drones were aircraft that needed to be registered. The man's drone was not. The drone did not hit the woman very hard, but it did cause her to fall on the ground. Although an ordinary person would have suffered at most slight scrapes or bruises, the woman had a rare brain condition that made any fall extremely dangerous to her optic nerves. Because of the fall, the woman's optic nerves disconnected and she became blind. The woman sued the man for damages related to loss of her sight.",
        q: "May the woman recover?",
        opts: [
            "Yes, because the man failed to register his drone.",
            "Yes, because the man negligently hit her with the drone.",
            "No, because the blindness was caused by the woman's rare medical condition.",
            "No, because an ordinary person would only have suffered slight scrapes or bruises."
        ],
        ans: 1,
        exp: "Rule: Under the 'eggshell skull' (thin skull) rule, a tortfeasor takes the plaintiff as they find them. If a defendant's negligence causes physical impact and injury to the plaintiff, the defendant is liable for the full extent of the resulting physical damages, even if an unexpected, pre-existing physical condition causes the damages to be far greater than would normally be anticipated. Because the man's negligent drone flight caused the woman to fall, he is liable for the full extent of her injuries, including the resulting blindness (Option B). Option A is incorrect because failure to register the drone with the FAA was not the cause-in-fact of the collision. Options C and D are incorrect because pre-existing idiosyncrasies or extraordinary fragility never bar or cap recovery under the eggshell skull doctrine."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "A defendant knew that he often became intoxicated upon drinking small quantities of alcoholic beverages. He frequently visited the neighborhood tavern because he liked the atmosphere, but he usually ordered orange juice or some other non-alcoholic beverage. While at the tavern one night, the defendant drank half of a friend's glass of beer. Soon afterward, he began shouting and throwing objects about the tavern. A chair that he hurled across the room struck the bartender, injuring her severely. As a result, the defendant was subsequently arrested and prosecuted. At the defendant's trial, the defense attorney called a psychiatrist to the witness stand to testify that the defendant suffered from a mental illness that made him extremely susceptible to the effects of alcohol. The psychiatrist offered to testify further that even a small quantity of beer was likely to make the defendant become physically violent, and that when this happened to him, he was not aware that his conduct would result in injury to others. The defendant's prosecution was for criminal battery.",
        q: "If the prosecutor moves to exclude the psychiatrist's testimony, should the motion be granted?",
        opts: [
            "Yes, because the defendant knew that he often became intoxicated upon drinking small quantities of alcoholic beverages.",
            "Yes, because the sanity of a defendant is a question of fact to be determined by a jury.",
            "No, because a jury might find that the defendant's intoxication prevented him from forming the intent to injure the bartender.",
            "No, because that testimony could establish that the defendant's intoxication was involuntary."
        ],
        ans: 0,
        exp: "Rule: Criminal battery is a general intent crime (the unlawful application of force to the person of another). Voluntary intoxication is a defense only to specific intent crimes; it is never a defense to general intent crimes. Furthermore, intoxication is deemed voluntary where the defendant knowingly ingests an intoxicant, especially where the defendant possesses prior subjective knowledge of their idiosyncratic susceptibility to alcohol. Because the defendant knew of his extreme reaction and voluntarily drank the beer, his intoxication was voluntary, making psychiatric testimony on alcohol-induced lack of awareness inadmissible to defend against a general intent battery charge (Option A). Option B is incorrect because legal relevance and threshold admissibility of expert defense testimony are questions of law for the judge. Option C is incorrect because voluntary intoxication does not negate general intent. Option D is incorrect because knowing ingestion with awareness of one's own susceptibility is voluntary, not involuntary."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "The buyer and the seller signed a written document agreeing to the sale of the seller's realty to the buyer. The document adequately described the realty, required the seller to deliver marketable title by a general warranty deed, and set the date for closing. It also stated that the price would be determined by agreement of the parties prior to the date of closing. The value of real estate in the area could be objectively determined rather easily. Three weeks before the date set for closing, the buyer telephoned the seller to discuss the price of the realty. At that time, the seller told the buyer that she had changed her mind and would not sell the realty to the buyer at any price.",
        q: "If the buyer asserts a claim against the seller for breach of contract, should the court find for the buyer?",
        opts: [
            "No, because the Statute of Frauds requires a contract for the sale of realty to be in writing and to state the price.",
            "No, because the parties did not agree on a method for determining the price.",
            "Yes, because the value of real estate in the area can be objectively determined.",
            "Yes, because where a written contract omits the price term, the price is to be a reasonable price."
        ],
        ans: 0,
        exp: "Rule: Under the common law Statute of Frauds governing real estate transactions, an enforceable contract for the sale of land must be memorialized in a writing that identifies the parties, adequately describes the land, and states the essential terms—including the price (or an agreed-upon objective formula to fix the price). Unlike UCC Article 2 (which permits courts to supply a reasonable open price term under § 2-305 for sales of goods), common law land contracts cannot omit an agreed price term or leave it entirely to future negotiation ('an agreement to agree'). The memorandum failed the Statute of Frauds (Option A). Option B is a secondary observation, but the fundamental legal bar is the Statute of Frauds writing requirement for essential real estate terms. Options C and D are incorrect because the UCC's 'reasonable price' gap-filler does not apply to real estate contracts under the common law."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "The defendant was a college student preparing to take an important exam. Before the exam, she sneaked into the professor's office, hoping to steal a copy of the exam answer. The exam answer was locked securely in the dean's safe, however, and the defendant was therefore unable to find it. While she was looking, the professor discovered her in his office, and the defendant told him her reason for being there. A state statute prohibits the theft of certain specifically defined 'information,' which specifically included 'exam answers.' The defendant did not believe an exam answer was 'information' under the statute.",
        q: "If the defendant is charged with attempting to violate the statute, should she be found guilty?",
        opts: [
            "No, because the exam answers were, in fact, securely locked in the dean's safe and the defendant could not possibly have stolen them.",
            "No, because an exam answer is 'information' as defined by the statute, but the defendant believed that it was not.",
            "Yes, because the theft of an exam answer by one preparing to take the exam is 'inherently immoral.'",
            "Yes, because an exam answer is 'information' as defined by the statute, even though the defendant believed that it was not."
        ],
        ans: 3,
        exp: "Rule: Criminal attempt requires (1) a specific intent to commit the target crime, and (2) an overt act in furtherance beyond mere preparation. Under the doctrine of factual impossibility, the fact that an extraneous physical obstacle (e.g., the target property being locked elsewhere) makes the completion of the crime impossible is no defense. Furthermore, mistake of law (ignorance of the law or misunderstanding statutory definitions) is no defense to criminal prosecution. Because the statute explicitly defined exam answers as protected information and the defendant took overt steps intending to steal the answers, she is guilty of attempt (Option D). Option A is incorrect because factual impossibility does not excuse an attempt. Option B is incorrect because mistake of criminal law is not an excuse. Option C is incorrect because criminal liability is based on statutory elements and intent, not subjective moral characterizations."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A group of friends were playing a pickup soccer game. The plaintiff was dribbling the ball down the field when the defendant kicked the ball away, tripping the plaintiff and injuring him.",
        q: "If the plaintiff sues the defendant for battery, what is the defendant's best defense?",
        opts: [
            "By playing in the game, the plaintiff assumed the risk of the contact.",
            "By playing in the game, the plaintiff consented to the contact.",
            "The defendant did not intend to injure the plaintiff.",
            "Being tripped in a soccer game is not offensive to a reasonable sense of dignity."
        ],
        ans: 1,
        exp: "Rule: Consent is an absolute defense to intentional torts, including battery. Voluntary participation in a contact sport or game implies consent to physical contacts that are customary, foreseeable, and within the ordinary rules and play of the game. Stripping or tackling for a soccer ball often involves incidental body contact and tripping; because the contact occurred within the normal scope of soccer play, the plaintiff consented to the physical touching (Option B). Option A is incorrect because assumption of risk is a defense to negligence, whereas consent is the primary defense to intentional torts like battery. Option C is incorrect because battery requires the intent to cause contact, not necessarily the specific intent to inflict injury. Option D is incorrect because battery encompasses harmful bodily contact as well as offensive contact."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "A breeder agreed to sell a farmer a cow, which both parties believed to be barren. The contract price was $200. Prior to delivery of the cow, the breeder realized the cow was pregnant and refused to deliver her because her value as a breeding cow was at least $1,000.",
        q: "May the breeder rescind the contract?",
        opts: [
            "Yes, because the characteristic on which the parties were mistaken was a basic assumption of the contract.",
            "Yes, because the cow is worth much more as a breeding cow.",
            "No, because the mistake merely went to the adequacy of price.",
            "No, because the farmer merely received an unexpected benefit in the deal."
        ],
        ans: 0,
        exp: "Rule: Under the doctrine of mutual mistake (Sherwood v. Walker; Restatement (Second) of Contracts § 152), a contract is voidable by the adversely affected party if both parties were mistaken about a basic assumption of fact at the time of contract formation that has a material effect on the agreed exchange of performances. Both the breeder and the farmer contracted under the mutual belief that the animal was a barren beef cow ($200) rather than a fertile breeding cow ($1,000+). Because the mutual mistake went to the very nature and essential character of the subject matter, the seller may rescind (Option A). Option B is incorrect because price disparity alone without a mutual mistake as to a basic assumption does not warrant rescission. Options C and D are incorrect because the mistake was not an error in market valuation, but an essential mutual mistake regarding the animal's biological identity and capacity."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "A man was snowmobiling with his friend as a passenger. The man negligently cut across a road and an oncoming car struck the snowmobile. The friend was severely injured. The driver of the car called an ambulance, and the ambulance picked up the friend. Because of the serious nature of the friend's injuries, the ambulance drove in excess of the speed limit and crashed into a pole. The friend was killed in the crash. The friend's estate sued the man. Assuming the estate may recover for the injuries sustained during the initial car crash,",
        q: "Can it recover for the friend's death?",
        opts: [
            "No, because the ambulance broke the chain of liability.",
            "No, because the ambulance was negligent by speeding.",
            "Yes, because the ambulance's rescue attempt was foreseeable.",
            "Yes, because the death was preceded by the friend's serious injuries."
        ],
        ans: 2,
        exp: "Rule: Under proximate cause principles, an original tortfeasor is legally liable for foreseeable intervening forces that are a normal consequence of the situation created by the defendant's negligence. Normal rescue efforts, emergency transit by ambulance, and subsequent medical treatment are foreseeable consequences of negligently injuring another. An automobile collision involving an emergency transport vehicle is deemed a foreseeable intervening risk, not a superseding cause, unless the ambulance driver's conduct was wanton and extraordinary (Option C). Options A and B are incorrect because ordinary negligence or foreseeable hazards encountered during rescue do not break the chain of proximate cause. Option D is incorrect because chronological sequence alone does not establish proximate cause."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "The security guard of a warehouse was making his rounds after closing time one night when he found the defendant walking around inside the warehouse. When the guard asked him what he was doing there, the defendant replied that he had been driving past the warehouse when he noticed that its door was open, and that he had entered to report this to the guard. The guard called the police, and the defendant was arrested and charged with violating a statute providing that 'any person entering the building of another for the purpose of committing a crime therein is guilty of burglary.' At the defendant's trial, the prosecutor tried to prove that the defendant's van, parked outside the warehouse at the time of the defendant's arrest, had license plates on it that had been stolen from an out-of-state vehicle the day before the defendant's arrest.",
        q: "Over objection by the defendant's attorney, is evidence that the license plates had been stolen admissible?",
        opts: [
            "No, because the defendant was not on trial for stealing license plates.",
            "No, because the defendant was not convicted of stealing license plates.",
            "Yes, because it tends to establish that the defendant was likely to engage in criminal behavior.",
            "Yes, because it tends to establish that the defendant made special preparations for the commission of a crime."
        ],
        ans: 3,
        exp: "Rule: Under the rules governing prior bad acts in criminal trials (MIMIC exception), evidence of uncharged crimes or bad acts is admissible to establish motive, opportunity, intent, preparation, plan, knowledge, identity, or absence of mistake. Attaching stolen, untraceable out-of-state license plates to a getaway vehicle immediately prior to entering a commercial facility after hours is highly probative of advance preparation, intent to commit a crime, and stealth, directly rebutting the defendant's claim of an innocent visit (Option D). Options A and B are incorrect because prior bad acts need not be charged or result in a formal conviction to be admissible for a non-character purpose such as preparation. Option C is incorrect because using prior acts to prove general criminal propensity is explicitly barred."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "The farmer was the owner of a peach orchard. On May 15, the seller contracted in writing to sell the land to the buyer for $200,000 under terms specified. The agreement called for the delivery of marketable title and set July 15 as the date for closing. The seller did not own the land on May 15 but planned to acquire title to it prior to the closing. On June 1, the buyer assigned his rights under the contract to an attorney. On June 15, the seller acquired title to the land by purchasing it from the farmer for $150,000. On July 15, the seller tendered a general warranty deed, but the buyer and the attorney both refused to go through with the transaction.",
        q: "If the seller asserts a breach of contract claim for damages against the buyer, should the court find for the seller?",
        opts: [
            "Yes, because at the time of closing, the seller held marketable title to the realty.",
            "Yes, under the doctrine of estoppel by deed.",
            "No, because at the time of contracting, the seller did not hold title to the land.",
            "No, because at the time of closing, the seller's interest was outside the chain of title."
        ],
        ans: 0,
        exp: "Rule: In contracts for the sale of real estate, the seller is not required to hold marketable title at the time of contract formation; the implied covenant of marketable title requires only that the seller tender marketable title at the time set for closing. Because the seller successfully purchased the fee title on June 15 and was ready, willing, and able to convey marketable title on the July 15 closing date, the buyer had no right to repudiate (Option A). Option B is incorrect because estoppel by deed applies when a grantor purports to convey title by deed without owning it and subsequently acquires title, validating the grantee's deed; here, the dispute concerns an executory purchase contract. Option C is incorrect because holding present title at execution is not required. Option D is incorrect because acquiring title by deed before the closing date places the grantor fully within the chain of title."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A man told his friend, a druggist, that he was planning to kill his wife and asked the druggist to help him by furnishing a poison. Although the druggist did not actually intend to help the man kill his wife, he said that he would because he did not want his friend to be angry at him. The druggist gave the man a commonly used antibiotic, telling him that it was a deadly and undetectable poison. The druggist knew that the antibiotic was not supposed to be dispensed without a prescription and that about 2 percent of the people who received it developed an allergic reaction to it, but he did not believe that it would hurt the wife. That night while the wife was asleep, the man injected her with the antibiotic that the druggist had given him. Because she was allergic to the drug, the wife became seriously ill and nearly died.",
        q: "If the druggist is prosecuted for attempted murder, should he be found guilty?",
        opts: [
            "Yes, because giving the man the antibiotic without a prescription with knowledge that the man would give it to his wife shows a reckless disregard for human life.",
            "Yes, because he did not attempt to stop the man from killing his wife.",
            "Yes, because he furnished the drug knowing that the man would use it to attempt to kill his wife.",
            "No, because he did not believe that the wife would die."
        ],
        ans: 3,
        exp: "Rule: Attempted murder requires the specific intent to kill. Recklessness, depraved-heart malice, or intent to inflict serious bodily injury—while sufficient for completed murder—is legally insufficient for an attempt. An accomplice or direct actor cannot be convicted of attempted murder without proof of a specific subjective purpose or design to bring about death. Because the druggist deliberately furnished a harmless common antibiotic and subjectively believed it would not kill or hurt the wife, he lacked the specific intent to kill essential for attempted murder (Option D). Option A is incorrect because reckless disregard for human life cannot satisfy the specific intent requirement of attempt. Option B is incorrect because an ordinary citizen owes no legal duty to prevent a crime. Option C is incorrect because furnishing a substance believed to be benign negates the specific intent to cause death."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "The homeowner, who owned a home in a residential development, decided to have his driveway paved. He called the plaintiff, a licensed contractor who specialized in residential driveways, and asked for an estimate on the job. Although the standard market price to pave a driveway the size of the homeowner's was $2,750, the plaintiff was willing to do the job for $2,500 since business was slow. The homeowner agreed to hire him to do the job at that price and filled out and signed a detailed work order for the plaintiff's work crew. Since the homeowner was planning to go on vacation for two weeks, he and the plaintiff agreed that the job would be finished by the time the homeowner returned. Three days later, the plaintiff's work crew went out to do the job described in the homeowner's work order. By mistake, they paved the neighbor's driveway, which was identical to the homeowner's except that it was on a different street. The neighbor was out of town at the time. The job cost the plaintiff $2,600 in labor and materials and increased the value of the neighbor's realty by $2,100. The homeowner did not communicate with the plaintiff while away on vacation. When he returned and discovered that his driveway had not yet been paved, he demanded that the plaintiff perform as agreed, but the plaintiff refused. After the driveway was paved, the neighbor promised to pay the plaintiff $2,000 for the job. In a jurisdiction that adopts the view of the Restatement (Second) of Contracts, if the neighbor then refused to pay and the plaintiff sued him for breaching his promise,",
        q: "Which of the following additional facts or inferences, if it was the only one true, would be most likely to result in a judgment for the plaintiff?",
        opts: [
            "When the neighbor promised to pay, the neighbor knew that the plaintiff had already paved his driveway.",
            "When the neighbor promised to pay, the neighbor did not know that the plaintiff had already paved his driveway.",
            "The neighbor decided to have his driveway paved before speaking with the plaintiff.",
            "The neighbor did not decide to have his driveway paved until speaking with the plaintiff."
        ],
        ans: 0,
        exp: "Rule: Under Restatement (Second) of Contracts § 86 (the material benefit rule), a promise made in recognition of a benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice. To enforce a promise under § 86, the promisor must have knowledge of the material benefit previously conferred at the time they make the promise, and the benefit must not have been conferred as a gift. Establishing that the neighbor knew the driveway had already been paved when he promised the $2,000 satisfies the Restatement § 86 criteria (Option A). Option B is incorrect because promising without knowledge of the received benefit defeats the material benefit framework. Options C and D are incorrect because subjective unexpressed intent prior to contact does not establish the required receipt of an acknowledged material benefit."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "The landlord leased an apartment to a new tenant. The lease provided that the tenant could not assign or sublease without the landlord's consent. Soon thereafter, the tenant assigned the lease to his friend. The landlord accepted the friend's first rent payment without any protest. The landlord then realized he didn't like the idea of having the friend as a tenant, so he declared the lease terminated.",
        q: "May he do so?",
        opts: [
            "Yes, because assignments were prohibited by the lease.",
            "Yes, because the landlord protested within a reasonable time.",
            "Yes, because the landlord had a superior property interest to the tenant and the friend.",
            "No, because the landlord waived his right to terminate the lease."
        ],
        ans: 3,
        exp: "Rule: Under the rule in Dumpor's Case and general landlord-tenant law, a covenant against assignment is for the landlord's personal protection and can be waived. A landlord who knows of an unauthorized assignment and accepts rent directly from the assignee without objection or reservation of rights waives the breach of the non-assignment covenant. Once waived, the landlord cannot retroactively declare a forfeiture or terminate the lease based on that assignment (Option D). Option A is incorrect because express prohibitions in a lease are subject to waiver by subsequent conduct. Option B is incorrect because accepting rent without reservation constitutes an immediate waiver. Option C is incorrect because the landlord's reversionary interest does not override an active waiver of a lease condition."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "The defendant suffered from severe anxiety. One day, he had a job interview at a new company. Because he was so nervous about the interview, he took three times the amount of anxiety pills that were prescribed for him and drank a bottle of beer. The pills and the beer made him severely intoxicated. On the way to the interview, the defendant was driving his car when a man in another car ran a red light. The resulting collision ended up killing the man. A police investigation showed the defendant was driving at the correct speed and obeyed all other traffic regulations. The defendant was charged with involuntary manslaughter.",
        q: "How should the court rule on the involuntary manslaughter charge?",
        opts: [
            "Guilty, because the defendant was grossly negligent in taking three times the drugs prescribed for him and drinking a beer before driving.",
            "Guilty, because the defendant was negligent under the totality of the circumstances.",
            "Guilty, because driving while intoxicated is malum in se.",
            "Not guilty."
        ],
        ans: 3,
        exp: "Rule: Involuntary manslaughter requires criminal negligence (or an unlawful misdemeanor act) that is both the cause-in-fact and the proximate cause of the victim's death. Even if an actor engages in gross negligence by driving while intoxicated, criminal homicide liability attaches only if the defendant's negligent driving was a legal and factual cause of the collision. Because the victim ran a red light, and the investigation confirmed the defendant drove at lawful speed and obeyed all traffic regulations, the collision would have occurred regardless of the defendant's sobriety. The defendant's intoxication was not the proximate cause of the death, requiring a verdict of not guilty (Option D). Options A, B, and C are incorrect because criminal culpability without causation cannot sustain an involuntary manslaughter conviction."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "The defendant's husband owed money to the plaintiff. This was evidenced by a promissory note. When the note became due, the defendant signed the back of it and promised to pay the note if her husband did not. In return, the plaintiff promised he would not put the note in his bank for immediate collection. Instead, he agreed to 'hold it until the time I want my money.' The plaintiff did not collect on the note for two years. The plaintiff then sued the defendant based on her endorsement.",
        q: "If the court does not enforce the agreement, what is the likely reason?",
        opts: [
            "There was no consideration for the promise.",
            "The plaintiff did not detrimentally rely upon the promise.",
            "The defendant's husband was the primary debtor.",
            "The agreement was unconscionable."
        ],
        ans: 0,
        exp: "Rule: A promise that reserves to the promisor complete discretion to perform or not perform—such as promising to hold a note only 'until the time I want my money'—is an illusory promise because the promisor has committed to no real forbearance or legal detriment. An illusory promise cannot serve as consideration for a return promise. Because the plaintiff made an illusory commitment to forbear, there was no valid consideration to support the wife's endorsement guaranty (Option A). Option B is incorrect because actual forbearance in fact cannot cure an illusory promise lacking bargained-for mutuality. Option C is incorrect because guaranteeing the debt of a primary obligor is standard suretyship practice. Option D is incorrect because an ordinary debt extension is not procedurally or substantively unconscionable."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "On March 1, the seller entered into a written agreement with a licensed real estate broker. By its terms, the seller agreed to pay the broker a commission equal to 6 percent of the price if, prior to April 15, the broker procured a buyer ready, willing, and able to pay $50,000 for the seller's realty. In return, the broker agreed to make reasonable efforts to sell it. After the agreement was executed, the broker advertised the seller's property and showed it to several prospective buyers. On April 10, the buyer signed a document agreeing to purchase the seller's realty for $50,000 but stating that her agreement was contingent upon her success in obtaining the necessary financing. The same day, the broker presented to the seller the document that the buyer had signed. The seller read it, thought for a moment, and handed it back to the broker, saying, 'I won't even consider a deal built around a contingency.' Although the broker protested that the agreement between him and the seller did not specify a sale without contingencies, the seller refused to discuss the matter any further. On April 11, the broker informed the buyer of the seller's response. The buyer then obtained a cashier's check for $50,000 payable to the seller. She delivered the check to the broker, together with a signed document in which she agreed to purchase the seller's realty for that sum. On April 14, the broker presented the second document to the seller with the cashier's check. The seller said, 'I've changed my mind. I'm not interested in selling.'",
        q: "If the buyer institutes a proceeding against the seller for an order directing the seller to sell her the realty for $50,000, should the court find for the buyer?",
        opts: [
            "No, because the seller did not agree to sell the realty to the buyer.",
            "No, because the seller's attempt to orally modify his written agreement with the broker was invalid.",
            "Yes, because she can show that the realty is unique.",
            "Yes, because her written agreement to purchase was delivered with the cashier's check prior to April 15."
        ],
        ans: 0,
        exp: "Rule: A brokerage listing contract is an agreement between an owner and a broker regarding a commission; it is not an operative offer to third-party prospective buyers to sell the property, nor does it give the broker apparent or actual authority to execute a contract of sale on the seller's behalf. A prospective buyer who submits an offer to buy has merely submitted an offer that the owner is free to accept or reject. While the broker may have a valid claim against the seller for a commission for procuring a ready, willing, and able buyer, no contract ever existed between the seller and the buyer (Option A). Option B is incorrect because broker agreements do not govern the creation of a purchase agreement with the buyer. Option C is incorrect because uniqueness of real estate supports specific performance only if an underlying binding sales contract was formed. Option D is incorrect because tendering an offer and a check does not create a binding contract without the seller's assent."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "The defendant showed his silver coins to the plaintiff and asked whether the plaintiff would be interested in trading them for chickens. After inspecting the coins, the defendant and the plaintiff placed them in a bag that they sealed together and left with a banker whom they both knew. Then, in a writing signed by both of them, they agreed to the trade. Pursuant to the terms of their agreement, the plaintiff was to deliver 6,000 fryer chickens to the defendant on July 1, at which time the bag of coins would be turned over to the plaintiff as payment in full. In May, weather conditions were such that the price of fryer chickens increased to three times what it had been when the agreement was signed. In May, the plaintiff notified the defendant that because of the increase in the price of chickens, the plaintiff would not be able to accept the bag of coins as payment for 6,000 fryer chickens in July. The defendant immediately sold the coins to a third person. On July 1, the plaintiff attempted to deliver 6,000 fryer chickens to the defendant, but the defendant refused to accept delivery.",
        q: "If the plaintiff asserts a claim against the defendant for breach of contract, should the court find for the plaintiff?",
        opts: [
            "No, because the plaintiff said that she would not accept the coins as payment for the chickens.",
            "No, because the defendant's sale of the coins has resulted in the defendant's prospective inability to perform.",
            "Yes, because the sale of the coins by the defendant has made performance by the defendant impossible.",
            "Yes, because the plaintiff tendered the chickens as required by the contract."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 2-610, an anticipatory repudiation occurs when a party unequivocally communicates that they will not perform their contractual obligations. Under UCC § 2-611, the repudiating party may retract their repudiation before the next performance is due UNLESS the aggrieved party has canceled the contract, materially changed their position in reliance on the repudiation, or otherwise indicated that they consider the repudiation final. Because the plaintiff repudiated in May and the defendant immediately acted in reliance by selling the coins to a third party, the plaintiff's power to retract was extinguished, discharging the defendant from all obligations (Option A). Option B is incorrect because prospective inability is irrelevant after a party relies on an express repudiation. Option C is incorrect because a non-repudiating party who sells goods after the other's repudiation is rightfully mitigating damages. Option D is incorrect because tender on the performance date is ineffective after the contract has been discharged by reliance on a repudiation."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "While out hunting for wolves, the defendants saw a large furry animal that they believed was a wolf running through the trees. The defendants opened fire, killing the creature. When they got closer, they realized they had just shot a dog that was owned by a local farmer. The dog did in fact look exactly like a wolf. The farmer sued the defendants for damages, and the defendants countered that they shot the dog by mistake and were acting in good faith.",
        q: "What result?",
        opts: [
            "The defendants are not liable for the farmer's damages because their mistake was made in good faith.",
            "The defendants are not liable for the farmer's damages because their mistake was reasonable.",
            "The defendants are liable for the farmer's damages because it is unreasonable to mistake a dog for a wolf.",
            "The defendants are liable for the farmer's damages even though they may have been acting in good faith."
        ],
        ans: 3,
        exp: "Rule: In the intentional torts of trespass to chattels and conversion, mistake of fact—even an honest, good-faith, or reasonable mistake—is not a defense. The intent required is simply the intent to exercise dominion or physical control over the chattel (shooting the animal). The tortfeasor bears the risk of mistake as to the ownership or nature of the property. Because the defendants intentionally fired at and destroyed the animal, they are liable for conversion/trespass to chattels regardless of their good-faith belief (Option D). Options A and B are incorrect because good faith or reasonable mistake of fact does not shield an intentional tortfeasor. Option C is incorrect because liability does not depend on whether the mistake was unreasonable."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "After executing a contract with the defendant, the plaintiff advertised that he would be showing the defendant's world-famous hog at the state fair. All his advertising emphasized that the hog, the American champion, would be exhibited at the fair. On June 20, the hog contracted a highly contagious and frequently fatal disease of hogs. The defendant notified the plaintiff on June 22 that, because of the disease, he could not exhibit the hog as agreed. When the plaintiff advised the public that the hog would not be appearing, many people who had planned to purchase tickets changed their minds and did not do so. The plaintiff subsequently asserted a claim against the defendant for damages resulting from the defendant's refusal to exhibit the hog as agreed.",
        q: "Which of the following additional facts, if it were the only one true, would be most likely to result in a judgment in favor of the plaintiff?",
        opts: [
            "On May 1, the defendant was aware that many hogs in the area had contracted the hog disease.",
            "On June 21, the state learned that the hog had contracted the hog disease and issued an order prohibiting the exhibition of the hog.",
            "On June 22, the defendant owned a hog with qualities equivalent to the other hogs.",
            "On the day of the trial, the plaintiff could prove exactly how much revenue the plaintiff lost as a result of the defendant's failure to exhibit the hog."
        ],
        ans: 0,
        exp: "Rule: Under the doctrine of impossibility / impracticability (Restatement (Second) of Contracts § 261), performance is excused only if the non-occurrence of the contingency was a basic assumption on which the contract was made, and the party seeking excuse did not assume the risk or have reason to know of the impending condition. If the defendant was aware on May 1 that an epidemic was spreading in the area and failed to take precautions or notify the plaintiff, the disease was foreseeable and the defendant assumed the risk, defeating the defense of impossibility (Option A). Option B is incorrect because an official state quarantine order would bolster the defense of legal impossibility. Option C is incorrect because the contract specifically concerned a unique, world-famous champion hog, meaning a substitute animal could not satisfy the contract. Option D is incorrect because certainty of damages is irrelevant if performance is legally excused."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "The company is the manufacturer of an agricultural insecticide. Since the county in which the company is located is primarily devoted to farming, the company has manufactured the agricultural insecticide at its factory there for the past 50 years. Although the insecticide is an important product commonly used by farmers for the control of an insect highly destructive to food crops, only three other companies have a similar product. Due to the manufacture of the insecticide, fumes that issue from the company factory frequently have an unpleasant odor. These fumes cause no physical harm to persons, property, or crops, but residents of the county frequently complain about the foul smell. All the factories that manufacture a product similar to the insecticide produce the same odor. The farmer began growing crops on a field near the company factory less than a year ago. The farmer leases the field from its owner in return for a percentage of his crop. When he telephoned the company to complain about the bad smell emanating from its factory, a company official told him that nothing could be done about it. The farmer asserts a claim against the company based on private nuisance, seeking damages for discomfort that he experiences as a result of the bad smell produced by the company's factory.",
        q: "Which one of the following additional facts or inferences, if it was the only one true, would be most likely to result in a judgment for the company?",
        opts: [
            "There is no other factory within 1,000 miles that manufactures a product similar to the insecticide.",
            "The farmer does not own realty in or reside in the county.",
            "It is impossible to manufacture a product similar to the insecticide without producing a bad smell.",
            "The farmer's discomfort does not differ substantially from the discomfort experienced by other residents of the county."
        ],
        ans: 3,
        exp: "Rule: A private nuisance requires proof of an unreasonable interference with the private use and enjoyment of a possessory interest in land. When an activity produces a generalized environmental condition (such as air pollution or odors) that impacts an entire locality or community equally, it constitutes a public nuisance rather than a purely private nuisance. A private plaintiff cannot maintain an action based on a public nuisance unless they prove 'special injury'—harm different in kind from that suffered by the general public in the community. If the farmer's discomfort does not differ from that experienced by all other county residents, the claim is a public nuisance without special damages, barring private recovery (Option D). Option A is incorrect because commercial uniqueness does not justify creating a nuisance. Option B is incorrect because a tenant in lawful possession has standing to bring a private nuisance action. Option C is incorrect because technological impossibility of abatement does not preclude nuisance damages."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Three men all agreed to carry loaded fully automatic machine guns for a robbery of a pharmacy. The men entered the pharmacy, and to scare everyone, one of the men fired about 30 bullets into the ceiling. The pharmacy was in an antique building with a tin ceiling. A bullet ricocheted off the metal and killed a customer. All three men were arrested and charged with murder. The jurisdiction does not apply the felony-murder rule.",
        q: "What is the most severe crime committed by the two men who did not shoot into the ceiling?",
        opts: [
            "Conspiracy.",
            "Involuntary manslaughter.",
            "Voluntary manslaughter.",
            "Depraved indifference murder."
        ],
        ans: 3,
        exp: "Rule: Under the Pinkerton doctrine and principles of accomplice liability, co-conspirators are criminally liable for all foreseeable crimes committed by any co-conspirator in furtherance of the unlawful conspiracy. Where three robbers agree to enter a public store carrying loaded automatic machine guns, spraying bullets inside an enclosed commercial building constitutes depraved-indifference / depraved-heart murder (reckless indifference to an unjustifiably high risk to human life). Because this reckless killing was committed in furtherance of the armed robbery and was a natural and foreseeable consequence of storming a store with automatic weapons, the non-shooting accomplices are guilty of depraved-indifference murder (Option D). Option A is incorrect because the accomplices are liable for the completed homicide under Pinkerton, not merely conspiracy. Options B and C are incorrect because the lethal act rose to the level of depraved-heart murder, precluding mitigation to manslaughter."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "The defendant and the victim are adults. During an argument, the defendant slammed a glass door against the victim, causing the victim to sustain serious cuts on her hand. After the victim received medical treatment for her injuries, she spoke to the defendant's mother about it. The victim told the mother that she was thinking of suing the defendant for her medical expenses, but that if the mother would agree to pay the victim $250, the victim would make no claim against the defendant for medical expenses. The mother agreed in writing that she would do so. Two weeks later, the defendant was prosecuted criminally as a result of the injuries that he had inflicted on the victim. The victim told the defendant's mother that the prosecutor had asked the victim to testify against the defendant at the proceeding. The mother begged her not to. Finally, the victim said that if the mother gave her an additional $1,000 for her pain and suffering, she would not testify against the defendant. The defendant's mother orally agreed to do so. The defendant's mother paid $250 to the victim, but refused to pay an additional $1,000.",
        q: "If the victim asserts a claim against the defendant's mother on account of the mother's failure to pay the additional $1,000, which of the following would be the mother's most effective argument in defense?",
        opts: [
            "The defendant's mother was not legally obligated to pay for damage done by her adult son.",
            "The defendant's mother's promise to pay an additional $1,000 to the victim was not supported by consideration.",
            "The defendant's mother's payment of $250 to the victim was an accord and satisfaction.",
            "The defendant's mother's promise to pay the debt of the defendant was not in writing."
        ],
        ans: 1,
        exp: "Rule: A promise to perform or refrain from performing an act that violates public policy or constitutes an illegal obstruction of justice cannot serve as valid legal consideration. An agreement to suppress evidence, conceal a crime, or refuse to testify as a witness in a criminal prosecution is illegal and void as against public policy; therefore, a promise given in exchange for an agreement not to testify in a criminal trial is unsupported by lawful consideration (Option B). Option A is incorrect because moral interest in protecting a child can motivate a valid contract if lawful consideration exists. Option C is incorrect because the $250 payment was a settlement of medical bills, not a satisfaction of the separate $1,000 claim. Option D is incorrect because the $1,000 was an original promise made directly to stifle criminal testimony, not a guaranty of the son's civil liability."
    }
];