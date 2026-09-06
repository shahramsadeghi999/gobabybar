const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "A home improvement store telegraphed an appliances manufacturer on June 1, 'At what price will you sell 100 of your QT-Model garbage-disposal units for delivery around June 10?' Thereafter, the following communications were exchanged:\n1. Telegram from the manufacturer received by the store on June 2: 'You're in luck. We have only 100 QT's, all on clearance at 50 percent off usual wholesale of $120 per unit, for delivery at our shipping platform on June 12.'\n2. Letter from the store received in U.S. mail by the manufacturer on June 5: 'I accept. Would prefer to pay in full 30 days after invoice.'\n3. Telegram from the manufacturer received by the store on June 6: 'You must pick up at our platform and pay C.O.D.'\n4. Letter from the store received in U.S. mail by the manufacturer on June 9: 'I don't deal with people who can't accommodate our simple requests.'\n5. Telegram from the store received by the manufacturer on June 10, after the manufacturer had sold and delivered all 100 of the QT's to another buyer earlier that day: 'Okay. I'm over a barrel and will pick up the goods on your terms June 12.'\n\nThe store now sues the manufacturer for breach of contract.",
        q: "Which of the following arguments will best serve the manufacturer's defense?",
        opts: [
            "The manufacturer's telegram received on June 2 was merely a price quotation, not an offer.",
            "The store's letter received on June 5 was not an acceptance because it varied the terms of the manufacturer's initial telegram.",
            "The store's use of the mails in response to the manufacturer's initial telegram was an ineffective method of acceptance.",
            "The store's letter received on June 9 was an unequivocal refusal to perform that excused the manufacturer even if the parties had previously formed a contract."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-610, an anticipatory repudiation occurs when a party clearly and unequivocally indicates that they will not perform their contractual obligations. Even assuming a contract was formed by the June 5 letter ('I accept' with a mere non-conditional payment request under UCC § 2-207), the store's June 9 letter ('I don't deal with people who can't accommodate our simple requests') constituted an unequivocal repudiation of the contract. The repudiation excused the manufacturer from performance and entitled it to treat the contract as broken and sell the clearance units to another buyer (Option D). Option A is incorrect because the June 2 telegram was an immediate clearance offer specifying exact price, quantity, and delivery terms. Option B is incorrect because under UCC § 2-207(1), expressing a preference for credit terms without conditioning acceptance does not prevent valid acceptance. Option C is incorrect because UCC § 2-206 permits acceptance by any reasonable medium."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "A homeowner hired a building contractor to rebuild her front porch. The contractor told her that he planned to first rip out the old floorboards and pile them in the front yard. Because she thought that would look unsightly, the homeowner insisted that the contractor loosen each board individually and leave them all in place until he was ready to start replacing them with new boards.\n\nThe contractor loosened the boards and left them in place while he went out for lunch. While the contractor was away, a friend of the homeowner's stepped onto the porch to return a borrowed rake. As the friend crossed the porch, the loosened boards shifted and the friend fell, breaking her leg.",
        q: "If the friend sues to recover for her injury, who is likely to be found liable to her?",
        opts: [
            "Both the contractor and the homeowner, because neither posted a warning that the porch boards had been loosened.",
            "Neither the homeowner nor the contractor, because the friend was a licensee.",
            "The contractor only, because he was an independent contractor and he loosened the boards in a dangerously deceptive fashion without posting a warning.",
            "The homeowner only, because she insisted on having the old boards removed in a dangerously deceptive fashion and posted no warning."
        ],
        ans: 0,
        exp: "Rule: A possessor of land owes licensees a duty to warn of or make safe known dangerous artificial conditions that the licensee is unlikely to discover through reasonable care. Leaving loosened, unattached floorboards in place on an entryway creates a deceptive, concealed trap that shifts underfoot. The homeowner is liable because she affirmatively directed the contractor to leave the boards in that dangerous condition and failed to warn her social guest. Concurrently, an independent contractor owes a general duty of reasonable care to foreseeable entrants on the work site, and creating an active concealed hazard without barricading or posting a warning constitutes active operational negligence. Both are liable (Option A). Option B is incorrect because possessors must warn licensees of hidden dangerous traps. Options C and D are incorrect because an employer's detailed control over an unsafe method does not eliminate the contractor's independent duty to warn of physical hazards he created."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "In exchange for a valid and sufficient consideration, a man orally promised his neighbor, who had no car and wanted a minivan, 'to pay to anyone from whom you buy a minivan within the next six months the full purchase-price thereof.' Two months later, the neighbor bought a used minivan on credit from a dealership for $8,000. At the time, the dealership was unaware of the man's earlier promise to the neighbor, but learned of it shortly after the sale.",
        q: "Can the dealership enforce the man's promise to the neighbor?",
        opts: [
            "Yes, under the doctrine of promissory estoppel.",
            "Yes, because the dealership is an intended beneficiary of the man-neighbor contract.",
            "No, because the man's promise to the neighbor is unenforceable under the suretyship clause of the Statute of Frauds.",
            "No, because the dealership was neither identified when the man's promise was made nor aware of it when the minivan sale was made."
        ],
        ans: 1,
        exp: "Rule: Under the Restatement (Second) of Contracts § 302, a third party is an intended beneficiary if recognition of a right to performance in the beneficiary is appropriate to effectuate the intention of the parties and the performance satisfies an obligation of the promisee or confers a gift/benefit. An intended third-party beneficiary need not be identified or in existence at the time the contract is executed, so long as the beneficiary is identifiable at the time performance is due. The man promised to pay 'anyone from whom you buy a minivan,' making the dealership an intended creditor/third-party beneficiary once the purchase occurred (Option B). Option A is incorrect because the dealership did not sell the vehicle in reliance on the man's promise (it was unaware at the time of sale). Option C is incorrect because the suretyship provision applies only to collateral promises made directly to a creditor to answer for another's debt; a direct primary promise made to the debtor to pay a future obligation falls outside the Statute of Frauds. Option D is incorrect because intended beneficiaries do not need to be identified at formation."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "One evening, a woman was driving above the speed limit on a country road. As she rounded a sharp curve, she lost control of the car and crossed over to the shoulder on the other side of the road. Her car hit a truck that was parked on the shoulder with its hood up while its driver waited for a tow truck. The force of the collision threw the driver out of the truck and down an embankment. The driver died from his injuries.\n\nDriving above the speed limit and causing an accident can be charged as reckless driving, a misdemeanor in the jurisdiction.",
        q: "What is the most serious homicide offense, if any, of which the woman can properly be convicted?",
        opts: [
            "Murder, based on malice aforethought.",
            "Voluntary manslaughter, based on reckless operation of a vehicle.",
            "Involuntary manslaughter, based on the misdemeanor of reckless driving.",
            "No homicide offense."
        ],
        ans: 2,
        exp: "Rule: Involuntary manslaughter at common law consists of an unintentional killing caused by criminal negligence (gross deviation from reasonable care) or committed during the commission of an unlawful misdemeanor (misdemeanor-manslaughter rule). Driving at an excessive speed around a sharp curve resulting in a fatal collision constitutes criminal negligence, and the statutory misdemeanor of reckless driving directly proximately caused the victim's death, establishing involuntary manslaughter (Option C). Option A is incorrect because speeding around a rural curve does not exhibit depraved-heart malice (wanton indifference to human life equivalent to murder). Option B is incorrect because voluntary manslaughter requires adequate provocation / heat of passion or imperfect self-defense. Option D is incorrect because the vehicular death was caused by criminal negligence and an unlawful misdemeanor."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "The owner of a home in a rural area had for many years enjoyed unspoiled views of the surrounding countryside from her back deck. Several months ago, a neighboring farmer placed unsightly items, including an old, rusted tractor and some machine parts, entirely on his own property, but in a location visible from the homeowner's deck.\n\nThe homeowner asked the farmer to move the items to a different area of the farm, out of the homeowner's line of sight. The farmer acknowledged that it was not common for farmers in the area to keep old equipment on their land in locations visible to neighbors, but nonetheless refused to move the items. Concerned that the farmer's placement of the items might adversely affect the resale value of the property, the homeowner paid for an appraisal of her own property. The appraisal determined that the market value of the property had not been diminished by the farmer's actions.",
        q: "If the homeowner were to sue the farmer for private nuisance, which of the following would be the farmer's best argument against liability?",
        opts: [
            "The unsightly items have not caused a decrease in the market value of the homeowner's property.",
            "The unsightly items do not physically encroach on the homeowner's property.",
            "It is not common for farmers in the area to keep old equipment on their land in places that are visible to neighbors.",
            "Unsightly conditions ordinarily do not of themselves amount to an unreasonable interference with the use and enjoyment of a neighboring property."
        ],
        ans: 3,
        exp: "Rule: A private nuisance requires a substantial and unreasonable interference with the use and enjoyment of land. Under traditional and prevailing common law principles, mere aesthetic unpleasantness or unsightly conditions (such as rusted machinery or visual clutter on adjacent land) do not, by themselves, constitute an actionable private nuisance absent physical emissions (smoke, odor, noise, vibrations) or a spite fence (Option D). Option A is incorrect because property depreciation is a measure of damages, not the substantive test for liability. Option B is incorrect because nuisance redresses non-encroaching, intangible invasions. Option C is incorrect because departure from local custom tends to support, rather than defend against, an unreasonable interference claim."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "A buyer sent a seller an offer to buy 50 tons of cotton of a specified quality. The offer contained no terms except those specifying the amount and quality of the cotton. The seller then sent an acknowledgment by fax. The acknowledgment repeated the terms of the buyer's offer and stated that shipment would occur within five days. Among 12 printed terms on the acknowledgment was a statement that any dispute about the cotton's quality would be submitted to arbitration. Neither the buyer nor the seller said anything further about arbitration. The seller shipped the cotton, and it was accepted by the buyer. A dispute arose between the buyer and the seller as to the quality of the cotton, and the seller asserted that the dispute had to be submitted to arbitration. The buyer instead sued the seller in court.",
        q: "In that suit, which of the following arguments best supports the seller's position that the buyer must submit the dispute to arbitration?",
        opts: [
            "Arbitration is a more efficient method of resolving disputes than resolving them in court.",
            "The provision for arbitration did not contradict any term in the buyer's offer.",
            "The provision for arbitration did not materially alter the parties' contract.",
            "The seller's acknowledgment containing a provision for arbitration constituted a counteroffer that was accepted by the buyer when it accepted delivery of the cotton."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-207(2), between merchants, additional terms contained in an acceptance automatically become part of the contract UNLESS: (a) the offer expressly limits acceptance to the terms of the offer, (b) they materially alter the contract, or (c) objection is given within a reasonable time. While arbitration clauses are frequently held to be material alterations in many jurisdictions, arguing that the arbitration clause did not materially alter the agreement (e.g., that arbitration is customary in the textile/cotton trade without unreasonable surprise) is the seller's only viable legal argument to incorporate the clause into the contract (Option C). Option A is incorrect because procedural efficiency does not govern contract incorporation under § 2-207. Option B is incorrect because additional non-contradictory terms drop out if they are material alterations. Option D is incorrect because UCC § 2-207 abolished the common law counteroffer/last-shot rule for non-conditional acknowledgments."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "In the application for a life insurance policy, a woman answered in the negative the question, 'Have you ever had any heart disease?' Both the application and the insurance policy that was issued provided: 'Applicant warrants the truthfulness of the statements made in the application and they are made conditions to the contract of insurance.' Unknown to the woman, she had had a heart disease at a very early age.",
        q: "If the question is raised in an action against the insurance company, how is the court likely to construe the clause dealing with the truthfulness of statements in the application?",
        opts: [
            "The clause is a condition, and because the condition was not met, the company will not be liable.",
            "The clause is a condition, but it will be interpreted to mean, 'truthfulness to the best of my knowledge.'",
            "The clause is not a condition, and therefore the company may be liable even though the woman's statement was not true.",
            "The clause is not a condition but is a promise, and therefore the company will have a cause of action against the woman's estate for any losses it suffered because of her misstatement."
        ],
        ans: 1,
        exp: "Rule: Under general contract interpretation and insurance law, courts strictly construe forfeiture provisions and warranties against the insurer (contra proferentem) to avoid harsh forfeitures. Statements regarding medical history and past diseases are construed as representations of honest belief rather than strict warranties; thus, a clause requiring truthful statements is interpreted to require 'truthfulness to the best of the applicant's knowledge and belief'. Because the woman had no subjective knowledge of the childhood illness, she did not breach the condition (Option B). Option A is incorrect because courts refuse to enforce literal strict warranty forfeitures for unknowable medical facts. Options C and D are incorrect because the clause is phrased as an express condition, but its substantive scope is modified by the knowledge-and-belief standard."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "A factory requires the use of very high voltage electricity. A scientist owns property adjacent to the factory, where the scientist has attempted to carry on a research activity that requires the use of sensitive electronic equipment. The effectiveness of the scientist's electronic equipment is impaired by electrical interference arising from the high voltage currents used in the factory. The scientist has complained to the factory several times, with no result. There is no way that the factory, by taking reasonable precautions, can avoid the interference with the scientist's operation that arises from the high voltage currents necessary to the factory's operation.",
        q: "In the scientist's action against the factory to recover damages for the economic loss caused to him by the electrical interference, will the scientist prevail?",
        opts: [
            "Yes, because the factory's activity is abnormally dangerous.",
            "Yes, for loss suffered by the scientist after the factory was made aware of the harm its activity was causing to Paul.",
            "No, unless the factory caused a substantial and unreasonable interference with the scientist's research.",
            "No, because the scientist's harm was purely economic and did not arise from physical harm to his person or property."
        ],
        ans: 2,
        exp: "Rule: In an action for private nuisance, the plaintiff must prove that the defendant caused a substantial and unreasonable interference with the use and enjoyment of real property. When an interference affects an unusually sensitive or delicate commercial or scientific activity (hypersensitive use), the interference is not an actionable nuisance unless it would substantially interfere with an ordinary, standard use of land in the locality (Amphitheaters, Inc. v. Portland Meadows). The scientist can prevail only if the interference is found to be substantial and unreasonable under standard nuisance balancing (Option C). Option A is incorrect because industrial electricity transmission is a common utility activity, not an abnormally dangerous activity imposing strict liability. Option B is incorrect because notice does not make a non-nuisance into a nuisance if the use is abnormally sensitive. Option D is incorrect because nuisance protects against non-physical interference with use and enjoyment without requiring structural damage."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A drug dealer agreed with another individual to purchase heroin from the individual in order to sell it on a city street corner. Unknown to the drug dealer, the other individual was an undercover police officer whose only purpose was to arrest distributors of drugs. The drug dealer made a down payment for the heroin and agreed to pay the remainder after he sold it on the street. As soon as the undercover officer handed over the heroin, other officers moved in and arrested the dealer.\n\nThe jurisdiction follows the common-law approach to conspiracy.",
        q: "Could the dealer properly be convicted of conspiring to distribute drugs?",
        opts: [
            "No, because there was no overt act.",
            "No, because there was no plurality of agreement.",
            "Yes, because neither an overt act nor plurality of agreement is required under common law.",
            "Yes, because the dealer believed all the elements of conspiracy were present and cannot take advantage of a mistake of fact or law."
        ],
        ans: 1,
        exp: "Rule: Under the traditional common law bilateral approach to conspiracy, the crime requires a genuine mutual agreement between two or more persons (plurality of agreement) with the specific intent to achieve an unlawful objective. A feigned agreement with an undercover government agent who does not intend to commit the crime does not satisfy the common law bilateral requirement; there is no conspiracy because there is only one genuine guilty mind. (Note: Under the Model Penal Code unilateral approach, an individual can be guilty of conspiracy for agreeing with an undercover officer, but this jurisdiction explicitly adheres to the common law rule) (Option B). Option A is incorrect because paying for and taking delivery is an overt act. Option C is incorrect because plurality of agreement is fundamental to common law conspiracy. Option D is incorrect because subjective belief cannot satisfy the bilateral requirement at common law."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "A photographer lent 200 of his photographic prints to a museum to be featured in an upcoming exhibit. The museum agreed to return all prints in the same condition as it received them. Due to staff error, the museum instead sent the prints to a recycling bin, where they were compressed beyond recognition. The photographer sued the museum in federal court for breach of contract, alleging diversity jurisdiction, and sought to recover the market value of the 200 prints. The evidence presented to the jury showed that none of the photographer's photo prints throughout his career had ever sold for more than $500 a print. No motions were made by either side before the case went to the jury. The jury returned a verdict of $1 million. The judge mentally agreed with the jury that the museum ought to be held liable but believed that the jury's award reflected an arithmetic error and that the jurors had intended to issue a verdict of $100,000 in damages rather than $1 million.\n\nAfter judgment was entered on the jury's verdict for the photographer, the museum made a motion for judgment as a matter of law, by which it asked the judge to set the judgment at $100,000 rather than $1 million.",
        q: "What action can the judge take, if any, that is procedurally proper, is not wasteful of judicial resources, and will correct the judgment to or near the $100,000 that the judge believes the jury intended?",
        opts: [
            "The judge should grant the museum's motion and enter judgment for $100,000.",
            "The judge on her own initiative should conditionally order a new trial unless the photographer agrees to a reduction of the damages to $100,000, an amount set by the court.",
            "The judge on her own initiative should order a new jury trial solely on the issue of damages.",
            "The judge must deny the museum's motion because the Seventh Amendment requires that the judge accept the jury's damage award without adjustment."
        ],
        ans: 1,
        exp: "Rule: When a jury returns an excessive damage verdict unsupported by the evidence, the trial judge in federal court may not unilaterally reduce the award without violating the Seventh Amendment right to a jury trial; however, the judge may order a remittitur. Under remittitur, the judge conditionally grants a new trial on damages unless the plaintiff accepts a reduced damage amount determined by the court (Option B). Option A is incorrect because a renewed judgment as a matter of law under Rule 50(b) cannot be granted if no Rule 50(a) motion was made before submission, and a judge cannot unilaterally rewrite a jury verdict. Option C is incorrect because ordering an unconditional new trial wastes judicial resources when remittitur provides a viable remedy. Option D is incorrect because remittitur is fully constitutional under the Seventh Amendment."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "By the terms of a written contract signed by both parties on January 15, a computer retailer agreed to sell a specific ICB personal computer to a buyer for $3,000, and the buyer agreed to pick up and pay for the computer at the retailer's store on February 1. The buyer unjustifiably repudiated on February 1. Without notifying the buyer, the retailer subsequently sold at private sale the same specific computer to another buyer, who paid the same price ($3,000) in cash. The ICB is a popular product; the retailer can buy from the manufacturer more units than it can sell at retail.",
        q: "If the retailer sues the buyer for breach of contract, the retailer will probably recover",
        opts: [
            "nothing, because it received a price on resale equal to the contract price that the buyer had agreed to pay.",
            "nothing, because the retailer failed to give the buyer proper notice of the retailer's intention to resell.",
            "the retailer's anticipated profit on the sale to the buyer plus incidental damages, if any, because the retailer lost that sale.",
            "$3,000 (the contract price), because the buyer intentionally breached the contract by repudiation."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-708(2), if the standard resale measure of damages (contract price minus resale price) is inadequate to put the seller in as good a position as performance would have done, the seller is a 'lost volume seller' and is entitled to recover the profit (including reasonable overhead) that the seller would have made from full performance by the buyer. A retailer who can obtain more units from the manufacturer than it can sell would have made two sales instead of one but for the buyer's breach; therefore, reselling at the same price does not mitigate the lost sale (Option C). Option A is incorrect because the lost volume seller doctrine overrides standard resale offsets. Option B is incorrect because lack of resale notice under § 2-706 bars resale damages, but does not bar lost profit recovery under § 2-708(2). Option D is incorrect because an action for the price under § 2-709 is unavailable where goods were resold."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A lumber supplier agreed to sell and a furniture manufacturer agreed to buy all of the lumber that the manufacturer required over a two-year period. The sales contract provided that payment was due 60 days after delivery, but that a 3 percent discount would be allowed if the manufacturer paid within ten days of delivery. During the first year of the contract, the manufacturer regularly paid within the ten-day period and received the 3 percent discount. Fifteen days after the supplier made its most recent lumber delivery to the manufacturer, the supplier had received no payment from the manufacturer. At this time, the supplier became aware of rumors from a credible source that the manufacturer's financial condition was precarious. The supplier wrote the manufacturer, demanding assurances regarding the manufacturer's financial status. The manufacturer immediately mailed its latest audited financial statements to the supplier, as well as a satisfactory credit report prepared by the manufacturer's banker. The rumors proved to be false. Nevertheless, the supplier refused to resume deliveries. The manufacturer sued the lumber supplier for breach of contract.",
        q: "Will the manufacturer prevail?",
        opts: [
            "No, because the contract was unenforceable, since the manufacturer had not committed to purchase a definite quantity of lumber.",
            "No, because the supplier had reasonable grounds for insecurity and was therefore entitled to cancel the contract and refuse to make any future deliveries.",
            "Yes, because the credit report and audited financial statements provided adequate assurance of due performance under the contract.",
            "Yes, because the supplier was not entitled to condition resumption of deliveries on the receipt of financial status information."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-609, when reasonable grounds for insecurity arise, a party may demand adequate assurance of due performance and suspend performance until received. However, once the other party provides adequate assurance of performance according to commercial standards (promptly sending audited financial statements and a bank credit report), the demanding party must resume performance. Continued refusal to deliver after receiving adequate assurance constitutes a total breach of contract by the supplier (Option C). Option A is incorrect because requirements contracts are valid under UCC § 2-306. Option B is incorrect because grounds for insecurity entitle a party to demand assurances, not cancel unilaterally after adequate assurances are provided. Option D is incorrect because insecurity permitted demanding assurances, but the breach occurred by refusing delivery after satisfaction."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A landowner who owned a large tract of land in the mountains sought to protect a herd of wild deer that frequented the area. Although the landowner had posted signs that said, 'No Hunting - No Trespassing,' hunters frequently intruded to kill the deer. Recently, the landowner built an eight-foot chain-link fence, topped by three strands of barbed wire, across a gully on her land that provided the only access to the area frequented by the deer.\n\nA wildlife photographer asked the landowner for permission to enter the property to photograph the deer. Because the landowner feared that any publicity would encourage further intrusions, she denied the photographer's request. Frustrated, the photographer attempted to climb the fence. He became entangled in the barbed wire and suffered extensive lacerations. The wounds became infected and ultimately caused his death. The photographer's personal representative brought an action against the landowner.",
        q: "Will the plaintiff prevail?",
        opts: [
            "Yes, because the landowner may not use deadly force to protect her land from intrusion.",
            "Yes, because the landowner had no property interest in the deer that entitled her to use force to protect them.",
            "No, because the photographer entered the landowner's land after the landowner had refused him permission to do so.",
            "No, because the potential for harm created by the presence of the barbed wire was apparent."
        ],
        ans: 3,
        exp: "Rule: A landowner is privileged to use reasonable, non-deadly force to defend land against trespassers, which includes erecting visible fences and standard barbed-wire barriers. While landowners may not use hidden mechanical devices designed to inflict deadly force (spring guns as in Katko v. Briney), an ordinary barbed-wire fence is a standard boundary barrier where the danger is open, apparent, and easily observed by any adult climbing it. Because the hazard was open and apparent and standard boundary fencing does not constitute excessive or deadly force, the landowner is not liable (Option D). Option A is incorrect because installing standard barbed wire on top of a boundary fence is not categorized as using deadly mechanical force. Option B is incorrect because landowners may fence their boundaries regardless of wild game presence. Option C is incorrect because trespasser status alone does not resolve the issue if a spring gun or trap were used."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A driver, returning from a long shift at a factory, fell asleep at the wheel and lost control of his car. As a result, his car collided with a police car driven by an officer who was returning to the station after having responded to an emergency. The police officer was injured in the accident. The police officer sued the driver in negligence for her injuries. The driver moved for summary judgment, arguing that the common-law firefighters' rule barred the suit.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because the firefighters' rule does not apply to police officers.",
            "No, because the police officer's injuries were not related to any special dangers of her job.",
            "Yes, because the accident would not have occurred but for the emergency.",
            "Yes, because the police officer was injured on the job."
        ],
        ans: 1,
        exp: "Rule: The common-law firefighters' rule (professional rescuers doctrine) bars firefighters and police officers from recovering against a tortfeasor whose negligence created the emergency that required the officer's presence at the scene. The rule applies strictly to risks inherent in responding to the specific crisis; it does NOT bar recovery for independent acts of negligence committed by third parties that injure an officer while engaged in normal travel or unrelated duties. Because the fatigued factory worker's collision was an independent traffic accident unrelated to the emergency the officer had handled, the firefighters' rule does not bar the suit (Option B). Option A is incorrect because the firefighters' rule applies to police officers. Option C is incorrect because 'but-for' timing does not connect the factory worker's negligence to the emergency scene. Option D is incorrect because on-the-job injuries are not barred unless arising from the specific hazard being confronted."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "In financial straits and needing $4,000 immediately, a nephew orally asked his uncle for a $4,000 loan. The uncle replied that he would lend the money to the nephew only if the nephew's mother 'guaranteed' the loan. At the nephew's suggestion, the uncle then telephoned the nephew's mother, told her about the loan, and asked if she would 'guarantee' it. She replied, 'Surely. Lend my son the $4,000 and I'll repay it if he doesn't.' The uncle then lent $4,000 to the nephew, an amount the nephew orally agreed to repay in six weeks. The next day, the nephew's mother wrote to him and concluded her letter with the words, 'Son, I was happy to do you a favor by promising your uncle I would repay your six-week $4,000 loan if you don't. /s/ Mother.' Neither the nephew nor his mother repaid the loan when it came due and the uncle sued the mother for breach of contract. In that action, the mother raised the Statute of Frauds as her only defense.",
        q: "Will the mother's Statute Frauds defense be successful?",
        opts: [
            "No, because the amount of the loan was less than $5,000.",
            "No, because the mother's letter satisfies the Statute-of-Frauds requirement.",
            "Yes, because the mother's promise to the uncle was oral.",
            "Yes, because the nephew's promise to the uncle was oral."
        ],
        ans: 1,
        exp: "Rule: Under the suretyship provision of the Statute of Frauds, a collateral promise to answer for the debt of another must be evidenced by a writing signed by the party to be charged. The writing does not need to be delivered to the creditor or executed at the time of agreement; an informal written letter or memorandum addressed to a third party (such as the son) satisfies the Statute of Frauds if it describes the essential terms and is signed by the promisor. Because the mother wrote and signed a letter identifying the loan, debt amount, maturity, and guaranty promise, the Statute of Frauds is satisfied (Option B). Option A is incorrect because the suretyship provision applies to any dollar amount, unlike UCC § 2-201. Option C is incorrect because a subsequent signed memorandum satisfies the writing requirement for prior oral promises. Option D is incorrect because the primary loan performable within six weeks is not barred by the one-year Statute of Frauds."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "A golfer was annoyed that his caddie was joking about the golfer's bad last shot. The golfer swung his newly-purchased golf club in the direction of the caddie's head, intending to frighten the caddie but not to hit him. The caddie started to duck to avoid the blow. The golfer stopped his swing so that the club would not have hit the caddie, except that due to the club manufacturer's negligence the club head flew off and hit the caddie in the top of the head, seriously injuring him.",
        q: "The caddie will be able to recover for:",
        opts: [
            "assault but not battery.",
            "battery but not assault.",
            "assault and battery.",
            "neither battery nor assault."
        ],
        ans: 2,
        exp: "Rule: Assault requires an intentional act causing reasonable apprehension of immediate harmful or offensive bodily contact. The golfer swung at the caddie's head intending to frighten him, causing the caddie to duck in reasonable apprehension, establishing completed assault. Battery requires an intentional harmful or offensive bodily contact. Under the doctrine of transferred intent (which applies between intentional torts), the intent to commit an assault transfers to satisfy the intent requirement for battery when the physical contact actually ensues, even if the golfer did not intend the contact or the club head broke. The caddie recovers for both assault and battery (Option C). Options A, B, and D are incorrect because the elements and transferred intent satisfy both torts."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A plaintiff is being treated by a physician for asbestosis, an abnormal chest condition that was caused by his on-the-job handling of materials containing asbestos. His physician has told him that the asbestosis is not presently cancerous, but that it considerably increases the risk that he will ultimately develop lung cancer.\n\nThe plaintiff has brought an action for damages, based on strict product liability, against the supplier of the materials that contained asbestos. The court in this jurisdiction has ruled against recovery of damages for negligently inflicted emotional distress in the absence of physical harm.",
        q: "If the supplier is subject to liability to the plaintiff for damages, should the award include damage for emotional distress he has suffered arising from his knowledge of the increased risk that he will develop lung cancer?",
        opts: [
            "No, because the plaintiff's emotional distress did not cause his physical condition.",
            "No, unless the court in this jurisdiction recognizes a cause of action for an increased risk of cancer.",
            "Yes, because the supplier of a dangerous product is strictly liable for the harm it causes.",
            "Yes, because the plaintiff's emotional distress arises from bodily harm caused by his exposure to asbestos."
        ],
        ans: 3,
        exp: "Rule: In tort actions involving physical injury or bodily harm, a plaintiff is entitled to recover 'parasitic' damages for emotional distress (pain and suffering, fear of future disease) that naturally flows from or is accompanied by the actual physical harm caused by the tortious product. The rule barring stand-alone emotional distress without physical impact does not apply because the plaintiff has already suffered demonstrable physical bodily injury (asbestosis) caused by asbestos exposure (Option D). Option A is incorrect because emotional distress need not cause physical injury when it results from an existing physical injury. Option B is incorrect because parasitic fear-of-cancer damages are recoverable in connection with an existing disease without pleading an independent cause of action for increased risk. Option C is incorrect because strict liability still requires parasitic connection to physical bodily harm."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "A man owned and occupied Blackacre, which was a tract of land improved with a one-family house. The owner's friend orally offered the owner $200,000 for Blackacre, the fair market value, and the owner accepted. Because they were friends, the two saw no need for attorneys or written contracts and shook hands on the deal. The friend paid the owner $10,000 down in cash and agreed to pay the balance of $190,000 at an agreed closing time and place.\n\nBefore the closing, the friend inherited another home and asked the owner to return his $10,000. The owner refused, and, at the time set for the closing, tendered a good deed to the friend and declared his intention to vacate Blackacre the next day. The owner demanded that the friend complete the purchase. The friend refused. The fair market value of Blackacre has remained $200,000.",
        q: "In an appropriate action brought by the owner against the friend for specific performance, if the owner loses, the most likely reason will be that",
        opts: [
            "the agreement was oral.",
            "keeping the $10,000 is the owner's exclusive remedy.",
            "the friend had a valid reason for not closing.",
            "The owner remained in possession on the day set for the closing."
        ],
        ans: 0,
        exp: "Rule: Under the Statute of Frauds, a contract for the sale of an interest in real property is unenforceable unless evidenced by a signed writing. Under the part performance doctrine, an oral land contract is enforced in equity only if the buyer does at least two of the following: takes physical possession, pays all or part of the purchase price, and makes valuable improvements. Here, the buyer merely paid a $10,000 down payment; paying money alone without taking possession or making improvements does not take an oral land contract out of the Statute of Frauds (Option A). Option B is incorrect because retention of earnest money is not an exclusive remedy absent an express liquidated damages agreement. Option C is incorrect because inheriting a home does not excuse a contractual duty. Option D is incorrect because a seller occupies until closing."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "A seller and a buyer entered into a written agreement providing that the seller was to deliver 1,000 cases of candy bars to the buyer during the months of May and June. Under the agreement, the buyer was obligated to make a selection by March 1 of the quantities of the various candy bars to be delivered under the contract. The buyer did not make the selection by March 1, and on March 2 the seller notified the buyer that because of the buyer's failure to select, the seller would not deliver the candy bars. The seller had all of the necessary candy bars on hand on March 1 and made no additional sales or purchases on March 1 or March 2. On March 2, after receiving the seller's notice that it would not perform, the buyer notified the seller of its selection and insisted that the seller perform. The seller refused.",
        q: "If the buyer sues the seller for breach of contract, is the buyer likely to prevail?",
        opts: [
            "No, because a contract did not exist until selection of the specific candy bars, and the seller withdrew its offer before selection.",
            "No, because selection of the candy bars by March 1 was an express condition to the seller's duty to perform.",
            "Yes, because a delay of one day in making the selection did not have a material effect on the seller.",
            "Yes, because upon the buyer's failure to make a selection by March 1, the seller had a duty to make a reasonable selection."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-311(1) and general contract rules, an agreement for sale that leaves particulars of performance (such as assortment) to be specified by one of the parties is valid and binding. Under UCC § 2-311(3), where a specification would materially affect the other party's performance but is not seasonably made, the other party is excused for any resulting delay and may proceed to perform or treat the failure as a breach. However, a non-material delay of a single day (March 2 instead of March 1) where delivery was not due until May/June and the seller suffered zero prejudice or material change of position does not justify cancellation under the doctrine of substantial performance / non-material delay (Option C). Option A is incorrect because a binding contract was formed upon agreement. Option B is incorrect because timing of assortment specification in installment delivery contracts is construed as a promise/covenant rather than a strict express condition of forfeiture. Option D is incorrect because UCC § 2-311(3)(b) permits, but does not impose an affirmative duty on, the seller to make the selection."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "A consumer became physically ill after drinking part of a bottle of soda that contained a large decomposed snail. The consumer sued the store from which she bought the soda to recover damages for her injuries. The parties agreed that the snail was put into the bottle during the bottling process, over which the store had no control. The parties also agreed that the snail would have been visible in the bottle before the consumer opened it.",
        q: "Will the consumer prevail in her action against the store?",
        opts: [
            "No, because the consumer could have seen the snail in the bottle.",
            "No, because the store was not responsible for the bottling process.",
            "Yes, because the consumer was injured by a defective product sold to her by the store.",
            "Yes, because the store had exclusive control over the bottle before selling it to the consumer."
        ],
        ans: 2,
        exp: "Rule: Under strict products liability (Restatement (Second) of Torts § 402A), a commercial retailer in the distribution chain is strictly liable for selling a defective, unreasonably dangerous product that causes physical injury, regardless of whether the retailer was at fault or could have discovered the defect. A beverage containing a decomposed snail is defective and unreasonably dangerous. Furthermore, a consumer's failure to discover a defect (failing to inspect the bottle) is ordinary contributory negligence, which is not a defense to strict products liability (Option C). Option A is incorrect because failure to inspect does not bar strict products liability. Option B is incorrect because retailers are strictly liable even if the defect was caused entirely by the upstream bottler. Option D is incorrect because exclusive control pertains to res ipsa loquitur in negligence, not strict products liability."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "A manufacturer of large computers contracted in writing with a bank to sell and deliver to the bank a mainframe computer using a new type of magnetic memory, then under development but not perfected by the manufacturer, at a price substantially lower than that of a similar computer using current technology. The contract's delivery term was 'F.O.B. [the bank], on or before July 31.' The manufacturer tendered the computer to the bank on August 15, and the bank rejected it because of the delay.",
        q: "If the manufacturer sues the bank for breach of contract, which of the following facts, if proved, will best support a recovery by the manufacturer?",
        opts: [
            "The delay did not materially harm the bank.",
            "The manufacturer believed, on the assumption that the bank was getting a 'super deal' for its money, that the bank would not reject because of the late tender of delivery.",
            "The manufacturer's delay in tender was caused by a truckers' strike.",
            "A usage in the relevant trade allows computer sellers a 30-day leeway in a specified time of delivery, unless the usage is expressly negated by the contract."
        ],
        ans: 3,
        exp: "Rule: Under the UCC § 2-601 perfect tender rule, a buyer may reject goods if the tender fails in any respect to conform to the contract, including timeliness of delivery. However, under UCC § 1-303 and § 2-202, trade usage supplements and explains agreement terms. If an established trade usage permits computer manufacturers a 30-day delivery leeway unless expressly negated, the August 15 delivery was conforming under the contract as interpreted through trade usage, meaning the bank wrongfully rejected the tender (Option D). Option A is incorrect because the perfect tender rule applies regardless of whether the breach was material. Option B is incorrect because subjective belief regarding a good bargain does not modify delivery terms. Option C is incorrect because a transportation strike does not excuse delay under an F.O.B. destination term unless an explicit force majeure clause applies."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A mother purchased over-the-counter pain medication for her daughter, who suffered from headaches. The packaging indicated that the pills were 'coated' but did not list the ingredients in the coating. A few days after she bought the medication, because the daughter was in extreme pain, the mother gave the daughter three times the recommended dose of the medication. Thirty minutes later, because the daughter had a very rare allergy to an ingredient in the coating, she had a severe allergic reaction, for which she was hospitalized. The mother was aware of the daughter's allergy, but she did not know that the medication contained the ingredient to which the daughter was allergic.",
        q: "In a failure-to-warn action brought against the manufacturer of the medication, which of the arguments below would be the LEAST promising as a defense?",
        opts: [
            "The daughter's allergy to the ingredient in the coating was very rare.",
            "The manufacturer's duty was to warn learned intermediaries, not consumers of the medication.",
            "The mother should not have given her daughter a triple dose of the medication.",
            "The mother, knowing of her daughter's very rare allergy, should not have purchased the medication without knowing what ingredients were in the coating."
        ],
        ans: 1,
        exp: "Rule: Under the learned intermediary doctrine, a pharmaceutical manufacturer satisfies its duty to warn by warning the prescribing physician rather than the patient. However, the learned intermediary doctrine applies strictly to prescription medications; it does NOT apply to over-the-counter (OTC) drugs sold directly to consumers without a physician's prescription. Because this was an over-the-counter drug, the manufacturer owed a direct duty to warn the purchasing public on the package label, making the learned intermediary argument completely unviable and the LEAST promising defense (Option B). Options A, C, and D are standard, viable defenses addressing idiosyncratic allergic reactions, unforeseeable product misuse (triple dosing), and comparative fault."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "On March 1, a homeowner contacted a builder about constructing an addition to the homeowner's house. The builder orally offered to perform the work for $200,000 if his pending bid on another project was rejected. The homeowner accepted the builder's terms and the builder then prepared a written contract that both parties signed. The contract did not refer to the builder's pending bid. One week later, upon learning that his pending bid on the other project had been accepted, the builder refused to perform any work for the homeowner.",
        q: "Can the homeowner recover for the builder's non-performance?",
        opts: [
            "No, because efficiency principles justify the builder's services being directed to a higher-valued use.",
            "No, because the builder's duty to perform was subject to a condition.",
            "Yes, because the builder's attempt to condition his duty to perform rendered the contract illusory.",
            "Yes, because the parol evidence rule would bar the builder from presenting evidence of oral understandings not included in the final writing."
        ],
        ans: 1,
        exp: "Rule: Under the parol evidence rule (Restatement (Second) of Contracts § 217), extrinsic oral evidence is admissible to establish that the written agreement was subject to an oral condition precedent to legal effectiveness (a condition that must occur before contractual obligations become binding). Because the parties mutually understood that the contract was conditional on the rejection of the other bid, and that condition precedent failed to occur (the other bid was accepted), the contract never became effective, discharging the builder from any duty to perform (Option B). Option A is incorrect because economic efficiency theories do not excuse contract breach. Option C is incorrect because conditioning a commitment on an external event outside the party's sole control is not illusory. Option D is incorrect because oral conditions precedent to contract effectiveness are not barred by the parol evidence rule."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Defendant suffered from severe chronic insomnia. After trying various non-prescription remedies without success, Defendant obtained a prescription sleeping medication from a doctor. The doctor warned Defendant that the medication would induce severe drowsiness and impaired reflexes within 20 minutes, and instructed Defendant to take it only when ready to sleep in bed. Defendant took a double dose of the medication at a friend's house across town, intending to drive home before the pills took effect. Five minutes into the drive, Defendant fell asleep at the wheel. The car swerved onto a sidewalk and struck and killed a pedestrian. The jurisdiction defines involuntary manslaughter at common law.",
        q: "Is Defendant guilty of involuntary manslaughter?",
        opts: [
            "No, because Defendant was unconscious at the time of the fatal collision.",
            "No, because Defendant was acting pursuant to a valid prescription from a licensed physician.",
            "Yes, because taking a double dose of a potent sedative and driving across town constitutes criminal negligence that proximately caused the victim's death.",
            "Yes, because driving under the influence of any sedative is a strict liability felony."
        ],
        ans: 2,
        exp: "Rule: Involuntary manslaughter requires an unintentional killing resulting from criminal negligence (gross negligence involving a substantial and unjustifiable risk of death or serious bodily injury, representing a gross deviation from the standard of care). While unconscious conduct is normally involuntary, an actor who knowingly creates the risk by voluntarily taking a double dose of an intoxicating sedative immediately before driving an automobile is criminally negligent, establishing proximate cause and mens rea at the time the dangerous conduct was initiated. Defendant is guilty of involuntary manslaughter (Option C). Option A is incorrect because antecedent criminal negligence in driving while ingesting sedatives supplies the required culpability. Option B is incorrect because abusing a prescription in violation of physician warnings is not shielded by medical authorization. Option D is incorrect because vehicular manslaughter is not a strict liability offense; criminal negligence must be established."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "Defendant broke into a residential home at night intending to steal jewelry. Once inside, Defendant discovered that the home was completely empty and undergoing total interior renovation, with all furnishings and valuables removed. Frustrated, Defendant grabbed a crowbar left by the construction crew and smashed two newly installed bathroom sinks before leaving through a back window. Defendant was arrested nearby.",
        q: "What is the most serious crime of which Defendant can be convicted?",
        opts: [
            "Common law burglary.",
            "Attempted burglary only.",
            "Larceny.",
            "Trespass to land."
        ],
        ans: 0,
        exp: "Rule: Common law burglary requires: (1) breaking, (2) entering, (3) the dwelling house of another, (4) in the nighttime, (5) with the intent to commit a felony therein[cite: 1, 3, 4]. The crime of burglary is fully complete at the moment of entry with the requisite felonious intent; whether the intended felony (larceny) is actually completed or proves factually impossible because there are no valuables inside is completely irrelevant[cite: 1, 3, 4]. Because Defendant broke and entered an occupied dwelling structure at night with the contemporaneous intent to steal jewelry, burglary was fully completed upon entry (Option A)[cite: 1, 3, 4]. Option B is incorrect because the burglary was completed, not merely attempted[cite: 1, 3, 4]. Option C is incorrect because Defendant did not commit a completed asportation/theft of property[cite: 1, 3, 4]. Option D is incorrect because burglary is a felony ranking above civil or criminal trespass[cite: 1, 3, 4]."
    }
];