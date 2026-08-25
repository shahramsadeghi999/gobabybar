const examData = [
    {
        id: 1,
        topic: "Performance / Divisible Contracts",
        fp: "A landscaper agreed to maintain the yard of a homeowner for six months for a fee of $300 per month, payable at the end of the six-month period. This amount was the fair market value of the work to be performed. The landscaper performed the work for four months but was then offered another job for $500 per month and, after notifying the homeowner, stopped doing the promised work and took the other job. The homeowner refused to pay the landscaper anything. The homeowner could have hired a comparable landscaper to complete the work for $300 per month.",
        q: "In a lawsuit between the landscaper and the homeowner, what is the likely result?",
        opts: [
            "The homeowner will recover $600, which is the cost of completing the work at prevailing market rates.",
            "The homeowner will recover $400, which constitutes the unjust enrichment of the landscaper.",
            "The landscaper will recover $1,200 for the work done before the breach.",
            "Neither the landscaper nor the homeowner will recover, because neither has suffered any loss."
        ],
        ans: 2,
        exp: "A contract is considered 'divisible' when the performances can be apportioned into corresponding pairs of part performances that are agreed equivalents. Here, each month of landscaping services ($300 per month) forms a distinct, divisible unit. Under the rules of divisible contracts, a party who has fully performed one of the divisible units is entitled to receive the contracted payment for that unit, even if they subsequently breach the remainder of the contract. Therefore, the landscaper can recover $1,200 for the four completed months of work."
    },
    {
        id: 2,
        topic: "Terms / Waiver and Modification (No-Oral-Modification Clause)",
        fp: "Bitz, an amateur computer whiz, agreed in writing to design for the Presskey Corporation, a distributor of TV game systems, three new games a year for a five-year period. The writing provided, in a clause separately signed by Bitz, that 'No modification shall be binding on Presskey unless made in writing and signed by Presskey's authorized representative.' Because of family problems, Bitz delivered and Presskey accepted only two game designs a year for the first three years; but the games were a commercial success and Presskey made no objection. Accordingly, Bitz spent substantial sums on new computer equipment that would aid in speeding up future design work. In the first quarter of the fourth year, however, Presskey terminated the contract on the ground that Bitz had breached the annual-quantity term. In Bitz's suit against Presskey for damages, the jury found that the contract had been modified by conduct and the trial court awarded Bitz compensatory damages.",
        q: "Is this result likely to be reversed on appeal?",
        opts: [
            "Yes, because the contract's no-oral-modification clause was not expressly waived by Presskey.",
            "Yes, because the contract's no-oral-modification clause was a material part of the agreed exchange and could not be avoided without new consideration.",
            "No, because the contract's no-oral-modification clause was unconscionable as against an amateur designer.",
            "No, because Presskey by its conduct waived the annual-quantity term and Bitz materially changed his position in reasonable reliance on that waiver."
        ],
        ans: 3,
        exp: "Even when a written contract contains a strict 'no-oral-modification' clause, a party's conduct (accepting fewer designs over three years without objection) can operate as a waiver of that term. Once the other party materially changes their position in reasonable reliance on that waiver (by spending substantial sums on equipment), the waiving party is legally precluded from enforcing the strict term to terminate the contract."
    },
    {
        id: 3,
        topic: "Performance / Perfect Tender Rule & Trade Usage",
        fp: "Computers, Inc., contracted in writing with Bank to sell and deliver to Bank a mainframe computer using a new type of magnetic memory, then under development but not perfected by Computers, at a price substantially lower than that of a similar computer using current technology. The contract's delivery term was 'F.O.B. Bank, on or before July 31.' Computers tendered the computer to Bank on August 15, and Bank rejected it because of the delay.",
        q: "If Computers sues Bank for breach of contract, which of the following facts, if proved, will best support a recovery by Computers?",
        opts: [
            "The delay did not materially harm Bank.",
            "Computers believed, on the assumption that Bank was getting a 'super deal' for its money, that Bank would not reject because of the late tender of delivery.",
            "Computers' delay in tender was caused by a truckers' strike.",
            "A usage in the relevant trade allows computer sellers a 30-day leeway in a specified time of delivery, unless the usage is expressly negated by the contract."
        ],
        ans: 3,
        exp: "Under UCC § 1-303 (formerly § 1-205), trade usage is admissible to explain or supplement the terms of a written agreement. Unless expressly negated by the contract text, relevant trade usage becomes part of the agreement. If a trade usage allows a 30-day leeway on delivery dates, the delivery on August 15 (15 days late) would be considered timely under the contract, defeating the buyer's right to reject."
    },
    {
        id: 4,
        topic: "Performance / Right to Cure",
        fp: "In a signed writing, a buyer contracted to purchase a 25-foot travel trailer from an RV dealer for $15,000, cash on delivery no later than June 1. The buyer arrived at the dealer's sales lot on Sunday, May 31, to pay for and take delivery of the trailer, but refused to do so when he discovered that the spare tire was missing. The dealer offered to install a spare tire on Monday when its service department would open, but the buyer replied that he did not want the trailer and would purchase another one elsewhere.",
        q: "Which of the following is accurate?",
        opts: [
            "The buyer had a right to reject the trailer, but the dealer was entitled to a reasonable opportunity to cure the defect.",
            "The buyer had a right to reject the trailer and terminate the contract under the perfect tender rule.",
            "The buyer was required to accept the trailer, because the defect could be readily cured.",
            "The buyer was required to accept the trailer, because the defect did not substantially impair its value."
        ],
        ans: 0,
        exp: "Under UCC § 2-601, a buyer may reject goods if they fail in any respect to conform to the contract (the perfect tender rule). However, under UCC § 2-508(1), if the time for performance has not yet expired, the seller may seasonably notify the buyer of their intention to cure and may then make a conforming delivery within the contract period. Because the contract allowed delivery through June 1, the dealer's offer to install the spare tire on Monday, June 1, was a valid exercise of the right to cure."
    },
    {
        id: 5,
        topic: "Excuses / Prevention of Condition",
        fp: "A fugitive was wanted for murder. The authorities offered the following reward: '$20,000 to anyone who provides information leading to the arrest and conviction of this fugitive.' A private detective knew of the reward, located the fugitive, and brought him to the authorities, who arrested him. The authorities then determined that while the fugitive had, in fact, committed the crime, he had been directed to commit the crime by his boss. The authorities and the fugitive then agreed that in exchange for the fugitive's testimony against his boss, all charges against the fugitive would be dropped. The fugitive testified and was released. The authorities refused to pay the reward to the private detective on the ground that the fugitive was never convicted.",
        q: "Would the private detective be likely to prevail in a breach of contract action against the authorities?",
        opts: [
            "No, because the private detective failed to notify the authorities that he had accepted the reward offer.",
            "No, because the express conditions set out in the reward were not met.",
            "Yes, because the authorities' agreement with the fugitive was against public policy.",
            "Yes, because the authorities themselves prevented the conviction of the fugitive."
        ],
        ans: 3,
        exp: "An express condition must generally be satisfied before a duty to perform arises. However, under the prevention doctrine, if a party wrongfully hinders or prevents the occurrence of a condition to their own performance, that condition is legally excused. Because the authorities themselves dropped the charges against the fugitive as part of a plea deal, they actively prevented the conviction condition from occurring, excusing the condition and entitling the detective to the reward."
    },
    {
        id: 6,
        topic: "Performance / Anticipatory Repudiation & Retraction",
        fp: "Broker needed a certain rare coin to complete a set that he had contracted to assemble and sell to Collecta. On February 1, Broker obtained such a coin from Hoarda in exchange for $1,000 and Broker's signed, written promise to re-deliver to Hoarda 'not later than December 31 this year' a comparable specimen of the same kind of coin without charge to Hoarda. On February 2, Broker consummated sale of the complete set to Collecta. On October 1, the market price of rare coins suddenly began a rapid, sustained rise; and on October 15 Hoarda wrote Broker for assurance that the latter would timely meet his coin-replacement commitment. Broker replied, 'In view of the surprising market, it seems unfair that I should have to replace your coin within the next few weeks.' Having received Broker's message on October 17, Hoarda sued Broker on November 15 for the market value of a comparable replacement-coin as promised by Broker in February. The trial began on December 1.",
        q: "If Broker moves to dismiss Hoarda's complaint, which of the following is Broker's best argument in support of the motion?",
        opts: [
            "Broker did not repudiate the contract on October 17, and may still perform no later than the contract deadline of December 31.",
            "Even if Broker repudiated on October 17, Hoarda's only action would be for specific performance because the coin is a unique chattel.",
            "Under the doctrine of impossibility, which includes unusually burdensome and unforeseen impracticability, Broker is temporarily excused by the market conditions from timely performance of his coin-replacement obligation.",
            "Even if Broker repudiated on October 17, Hoarda's no remedy without first demanding in writing that Broker retract his repudiation."
        ],
        ans: 0,
        exp: "An anticipatory repudiation requires a clear, unequivocal statement indicating an absolute refusal or inability to perform prior to the performance deadline. Broker's ambiguous statement that it 'seems unfair' merely expresses dissatisfaction or doubts, falling short of a clear anticipatory repudiation. Because no repudiation occurred and the performance deadline was December 31, the lawsuit filed on November 15 was premature."
    },
    {
        id: 7,
        topic: "Excuses / Anticipatory Repudiation (Timing)",
        fp: "On June 1, a seller and a buyer contracted in writing for the sale and purchase of the seller's cattle ranch (a large single tract), and to close the transaction on December 1. On October 1, the buyer told the seller, 'I'm increasingly unhappy about our June 1 contract because of the current cattle market, and do not intend to buy your ranch unless I'm legally obligated to do so.'",
        q: "If the seller sues the buyer on October 15 for breach of contract, the seller will probably",
        opts: [
            "win, because the buyer committed a total breach by anticipatory repudiation on October 1.",
            "win, because the buyer's October 1 statement created reasonable grounds for the seller's insecurity with respect to the buyer's performance.",
            "lose, because the parties contracted for the sale and conveyance of a single tract, and the seller cannot bring suit for breach of such a contract prior to the agreed closing date.",
            "lose, because the buyer's October 1 statement to the seller was neither a repudiation nor a present breach of the June 1 contract."
        ],
        ans: 3,
        exp: "A statement does not constitute an anticipatory repudiation unless it is a clear, distinct, and unequivocal manifestation of an intent not to perform. Telling the seller 'I do not intend to buy your ranch unless I'm legally obligated to do so' simply acknowledges that the buyer recognizes and intends to abide by their legal obligations under the contract, even if unhappy. Because this is not a repudiation, and the closing date has not arrived, the lawsuit is premature."
    },
    {
        id: 8,
        topic: "Excuses / Retraction of Anticipatory Repudiation",
        fp: "On June 1, a seller and a buyer contracted in writing for the sale and purchase of the seller's cattle ranch, and to close the transaction on December 1. The buyer unequivocally repudiated the contract on August 1. On August 15, the seller urged the buyer to change her mind and proceed with the scheduled closing on December 1. On October 1, having heard nothing further from the buyer, the seller sold and conveyed his ranch to a third party—a rancher—without notice to the buyer. On December 1, the buyer attempted to close under the June 1 contract by tendering the full purchase price to the seller. The seller rejected the tender.",
        q: "If the buyer sues the seller for breach of contract, the buyer will probably",
        opts: [
            "win, because the seller failed seasonably to notify the buyer of any pending sale to the rancher.",
            "win, because the seller waived the buyer's August 1 repudiation by urging her to retract it on August 15.",
            "lose, because the buyer did not retract her repudiation before the seller materially changed his position in reliance thereon by selling the ranch to the rancher.",
            "lose, because acceptance of the purchase price by the seller was a concurrent condition to the seller's obligation to convey the ranch to the December 1."
        ],
        ans: 2,
        exp: "A party who has anticipatorily repudiated a contract may retract their repudiation until the aggrieved party has cancelled, treated the repudiation as final, or materially changed their position in reliance on it. Here, the seller materially changed his position by selling the ranch to a third party on October 1. Because the buyer failed to retract her repudiation prior to that material change, her subsequent tender on December 1 was ineffective."
    },
    {
        id: 9,
        topic: "Remedies / Anticipatory Repudiation (UCC vs. Common Law)",
        fp: "Broker needed a certain rare coin to complete a set that he had contracted to assemble and sell to Collecta. On February 1, Broker obtained such a coin from Hoarda in exchange for $1,000 and Broker's signed, written promise to re-deliver to Hoarda 'not later than December 31 this year' a comparable specimen of the same kind of coin without charge to Hoarda. On February 2, Broker consummated sale of the complete set to Collecta. On October 1, the market price of rare coins suddenly began a rapid, sustained rise; and on October 15 Hoarda wrote Broker for assurance that the latter would timely meet his coin-replacement commitment. Broker replied, 'In view of the surprising market, it seems unfair that I should have to replace your coin within the next few weeks.' After receiving Broker's message on October 17, Hoarda telephoned Broker, who said, 'I absolutely will not replace your coin until the market drops far below its present level.' Hoarda then sued Broker on November 15 for the market value of a comparable replacement-coin as promised by Broker in February. The trial began on December 1.",
        q: "If Broker moves to dismiss Hoarda's complaint, which of the following is Hoarda's best argument in opposing the motion?",
        opts: [
            "Hoarda's implied duty of good faith and fair dealing in enforcement of the contract required her to mitigate her losses on the rising market by suing promptly, as she did, after becoming reasonably apprehensive of a prospective breach by Broker.",
            "Although the doctrine of anticipatory breach is not applicable under the prevailing view if, at the time of repudiation, the repudiatee owes the repudiator no remaining duty of performance, the doctrine applies in this case because Hoarda, the repudiatee, remains potentially liable under an implied warranty that the coin advanced to Broker was genuine.",
            "When either party to a sale-of-goods contract repudiates with respect to a performance not yet due, the loss of which will substantially impair the value of the contract to the other, the aggrieved party may in good faith resort to any appropriate remedy for breach.",
            "Anticipatory repudiation, as a deliberate disruption without legal excuse of an ongoing contractual relationship between the parties, may be treated by the repudiatee at her election as a present tort, actionable at once."
        ],
        ans: 2,
        exp: "This transaction is governed by UCC Article 2 because it involves goods (rare coins). Under UCC § 2-610, when either party repudiates a contract with respect to a performance not yet due, the loss of which will substantially impair the value of the contract, the aggrieved party may resort to any remedy for breach immediately. This statutory provision provides Hoarda with her strongest argument to defeat a motion to dismiss."
    },
    {
        id: 10,
        topic: "Defenses / Statute of Frauds (Suretyship Memorandum)",
        fp: "In financial straits and needing $4,000 immediately, a nephew asked his uncle for a $4,000 loan. The uncle replied that he would lend the money to the nephew only if the nephew's mother 'guaranteed' the loan. At the nephew's suggestion, the uncle then telephoned the nephew's mother, told her about the loan, and asked if she would 'guarantee' it. She replied, 'Surely. Lend my son the $4,000 and I'll repay it if he doesn't.' The uncle then lent $4,000 to the nephew, an amount the nephew orally agreed to repay in six weeks. The next day, the nephew's mother wrote to him and concluded her letter with the words, 'Son, I was happy to do you a favor by promising your uncle I would repay your six-week $4,000 loan if you don't. /s/Mother.' Neither the nephew nor his mother repaid the loan when it came due and the uncle sued the mother for breach of contract. In that action, the mother raised the Statute of Frauds as her only defense.",
        q: "Will the mother's Statute Frauds defense be successful?",
        opts: [
            "No, because the amount of the loan was less than $5,000.",
            "No, because the mother's letter satisfies the Statute-of-Frauds requirement.",
            "Yes, because the mother's promise to the uncle was oral.",
            "Yes, because the nephew's promise to the uncle was oral."
        ],
        ans: 1,
        exp: "A promise to answer for the debt of another (suretyship) falls within the Statute of Frauds and must be in writing. However, the writing requirement is satisfied by a memorandum if it reasonably identifies the subject matter, indicates that a contract has been made, states the essential terms, and is signed by the party to be charged. The mother's signed letter to her son confirming the guaranty fulfills all these criteria, making her Statute of Frauds defense fail."
    },
    {
        id: 11,
        topic: "Formation / UCC Confirmatory Memo Exception",
        fp: "A skiing retailer, in a telephone conversation with a glove manufacturer, ordered 12 pairs of vortex-lined ski gloves at the manufacturer's list price of $600 per dozen 'for delivery in 30 days.' The manufacturer orally accepted the offer, and immediately faxed to the ski shop this signed memo: 'Confirming our agreement today for your purchase of a dozen pairs of vortex-lined ski gloves for $600, the shipment will be delivered in 30 days.' Although the retailer received and read the manufacturer's message within minutes after its dispatch, she changed her mind three weeks later about the purchase and rejected the conforming shipment when it timely arrived.",
        q: "On learning of the rejection, does the manufacturer have a cause of action against the retailer for breach of contract?",
        opts: [
            "Yes, because the gloves were identified to the contract and tendered to the retailer.",
            "Yes, because the manufacturer's faxed memo to the retailer was sufficient to make the agreement enforceable.",
            "No, because the agreed price was $600 and the retailer never signed a writing evidencing a contract with the manufacturer.",
            "No, because the retailer neither paid for nor accepted any of the goods tendered."
        ],
        ans: 1,
        exp: "Under UCC § 2-201(2) (the merchant's confirmatory memo rule), between merchants, if a written confirmation of the contract sufficient against the sender is received within a reasonable time, and the recipient has reason to know of its contents, it satisfies the Statute of Frauds against the recipient unless they object in writing within 10 days. Because both parties are merchants and the retailer failed to object, the signed faxed memo makes the contract fully enforceable."
    },
    {
        id: 12,
        topic: "Remedies / Specific Performance (Inadequacy of Legal Remedy)",
        fp: "Elda, the aged mother of Alice and Barry, both adults, wished to employ a live-in companion so that she might continue to live in her own home. Elda, however, had only enough income to pay one-half of the companion's $2,000 monthly salary. Learning of their mother's plight, Alice and Barry agreed with each other in a signed writing that on the last day of January and each succeeding month during their mother's lifetime, each would give Elda $500. Elda then hired the companion. Alice and Barry made the agreed payments in January, February, and March. In April, however, Barry refused to make any payment and notified Alice and Elda that he would make no further payments. Assume that there is a valid contract between Alice and Barry and that Elda has declined to sue Barry.",
        q: "Will Alice succeed in an action against Barry in which she asks the court to order Barry to continue to make his payments to Elda under the terms of the Alice-Barry contract?",
        opts: [
            "Yes, because Alice's remedy at law is inadequate.",
            "Yes, because her burden of supporting her mother will be increased if Barry does not contribute his share.",
            "No, because a court will not grant specific performance of a promise to pay money.",
            "No, because Barry's breach of contract has caused no economic harm to Alice."
        ],
        ans: 2,
        exp: "A decree of specific performance is an equitable remedy that is granted only when legal remedies (money damages) are inadequate. The primary rule regarding the payment of money is that a court will not grant specific performance of a promise to pay money, because an action at law for damages is considered entirely adequate to compensate the non-breaching party for unpaid financial sums."
    },
    {
        id: 13,
        topic: "Remedies / Specific Performance (Personal Services)",
        fp: "On November 15, a carpenter in a signed writing contracted with a homeowner for an agreed price to personally remodel the homeowner's kitchen according to specifications provided by the homeowner, and to start work on December 1. The carpenter agreed to provide all materials for the job in addition to all of the labor required. On November 26 the carpenter without legal excuse repudiated the contract, and the homeowner, after a reasonable and prolonged effort, could not find anyone to remodel his kitchen for a price approximating the price agreed to by the carpenter. If one year later the homeowner brings an action for specific performance against the carpenter...",
        q: "Which of the following will provide the carpenter with the best defense?",
        opts: [
            "An action for equitable relief not brought within a reasonable time is barred by laches.",
            "Specific performance is generally not available as a remedy to enforce a contractual duty to perform personal services.",
            "Specific performance is generally not available as a remedy in the case of an anticipatory repudiation.",
            "Specific performance is not available as a remedy where even nominal damages could have been recovered as a remedy at law."
        ],
        ans: 1,
        exp: "Courts universally refuse to grant specific performance to enforce a contract for personal services or personal labor. Ordering a person to perform personal services amounts to involuntary servitude and creates severe enforcement difficulties for the judiciary. Therefore, the carpenter's best defense against a specific performance decree is that personal service contracts are non-specifically enforceable."
    },
    {
        id: 14,
        topic: "Remedies / Expectation Damages (Construction Contract)",
        fp: "A homeowner and a contractor entered into a contract for the construction of a home for the price of $300,000. The contractor was to earn a profit of $10,000 for the job. After the contractor had spent $45,000 on labor and materials, including $5,000 on oak flooring not yet installed, the homeowner informed the contractor that the homeowner had lost his job and could not pay for any services. The homeowner told the contractor to stop working immediately. The reasonable market value of the labor and materials provided by the contractor at that point, including the oak flooring, was $40,000. The contractor used the $5,000 worth of oak flooring on another job.",
        q: "In an action by the contractor against the homeowner for damages, which of the following would be the largest amount of damages recoverable by the contractor?",
        opts: [
            "$40,000, the reasonable value of the services the contractor had provided.",
            "$40,000, the contractor's construction costs.",
            "$50,000, the contractor's construction costs of $45,000 plus the $10,000 profit minus the $5,000 saved by reusing the oak flooring on another job.",
            "$55,000, the contractor's construction costs of $45,000 plus the $10,000 profit."
        ],
        ans: 2,
        exp: "Expectation damages place the non-breaching contractor in the position they would have been in had the contract been fully performed. The formula is: Expenses incurred ($45,000) + Expected Profit ($10,000) - Loss Avoided/Saved ($5,000 of oak flooring reused on another job) = $50,000."
    },
    {
        id: 15,
        topic: "Remedies / Restitution and Breach Offsets",
        fp: "A contractor agreed to build a power plant for a public utility. A subcontractor agreed with the contractor to lay the foundation for $200,000. The subcontractor supplied goods and services worth $150,000, for which the contractor made progress payments aggregating $100,000 as required by the subcontract. The subcontractor then breached by refusing unjustifiably to perform further. The contractor reasonably spent $120,000 to have the work completed by a third party. The subcontractor now sues the contractor for the reasonable value of benefits conferred, and the contractor counterclaims for breach of contract.",
        q: "Which of the following should be the court's decision?",
        opts: [
            "The subcontractor recovers $50,000, the benefit conferred on the contractor for which subcontractor has not been paid.",
            "The subcontractor recovers $30,000, the benefit the subcontractor conferred on the contractor minus the $20,000 in damages incurred by the contractor.",
            "The contractor recovers $20,000, the excess over the contract price that was paid by the contractor for the performance it had bargained to receive from the subcontractor.",
            "Neither party recovers anything, because the subcontractor committed a material, unexcused breach and the contractor received a $50,000 benefit from the subcontractor for which the subcontractor has not been paid."
        ],
        ans: 2,
        exp: "Even a breaching plaintiff can recover in restitution for the benefit conferred ($50,000 unpaid value), but that recovery is offset by the non-breaching party's damages. The subcontractor conferred $150,000 in value, received $100,000 (net $50,000 benefit). However, completion cost the contractor $120,000 for work valued at $100,000 (a $20,000 overage). Subtracting the contractor's $20,000 damages from the subcontractor's $50,000 restitution leaves a net recovery of $30,000 for the subcontractor."
    },
    {
        id: 16,
        topic: "Remedies / Foreseeability of Lost Profits (New Business)",
        fp: "Swatter, a baseball star, contracted with the Municipal Symphony Orchestra. Inc., to perform for $5,000 at a children's concert, as narrator of 'Peter and the Wolf.' Shortly before the concert, Swatter became embroiled in a highly publicized controversy over whether he had cursed and assaulted a baseball fan. The orchestra canceled the contract out of concern that attendance might be adversely affected by Swatter's appearance. Swatter sued the orchestra for breach of contract. His business agent testified without contradiction that the cancellation had resulted in Swatter's not getting other contracts for performances and endorsements. The trial court instructed the jury, in part, as follows: 'If you find for the plaintiff, you may award damages for losses which at the time of contracting could reasonably have been foreseen by the defendant as a probable result of its breach. However, the law does not permit recovery for the loss of prospective profits of a new business caused by breach of contract.'",
        q: "On Swatter's appeal from a jury verdict for Swatter, and judgment thereon, awarding damages only for the $5,000 fee promised by the orchestra, the judgment will probably be",
        opts: [
            "affirmed, because the trial court stated the law correctly.",
            "affirmed, because the issue of damages for breach of contract was solely a jury question.",
            "reversed, because the test for limiting damages is what the breaching party could reasonably have foreseen at the time of the breach.",
            "reversed, because under the prevailing modern view, lost profits of a new business are recoverable if they are established with reasonable certainty."
        ],
        ans: 3,
        exp: "The trial court's flat instruction that the law never permits recovery for prospective profits of a new business is incorrect. Under the modern view, lost profits of a new business are recoverable if they can be proved with reasonable certainty. Because the instruction improperly barred the jury from considering such damages, the judgment must be reversed."
    },
    {
        id: 17,
        topic: "Remedies / Expectation Damages (Real Estate Breach)",
        fp: "On April 1, Owner and Buyer signed a writing in which Owner, 'in consideration of $100 to be paid to Owner by Buyer,' offered Buyer the right to purchase Greenacre for $100,000 within 30 days. The writing further provided, 'This offer will become effective as an option only if and when the $100 consideration is in fact paid.' On April 20, Owner, having received no payment or other communication from Buyer, sold and conveyed Greenacre to Citizen for $120,000. On April 21, Owner received a letter from Buyer enclosing a cashier's check for $100 payable to Owner and stating, 'I am hereby exercising my option to purchase Greenacre and am prepared to close whenever you're ready.' Owner explained that he had already sold the property to Citizen. Buyer brought suit against Owner for breach of contract. Assume that Buyer prevails in the breach of contract suit against Owner.",
        q: "Which of the following is Buyer entitled to recover?",
        opts: [
            "Nominal damages only, because the remedy of specific performance was not available to Buyer.",
            "The fair market value, if any, of an assignable option to purchase Greenacre for $100,000.",
            "$20,000, plus the amount, if any, by which the fair market value of Greenacre on the date of Owner's breach exceeded $120,000.",
            "The amount, if any, by which the fair market value of Greenacre on the date of Owner's breach exceeded $100,000."
        ],
        ans: 3,
        exp: "The standard measure of expectation damages for a seller's breach of a real estate contract is the difference between the contract price and the fair market value of the property at the time of the breach. This gives the buyer the benefit of the bargain."
    },
    {
        id: 18,
        topic: "Remedies / Restitution for Breaching Plaintiff",
        fp: "In a single writing, a painter contracted with a farmer to paint three identical barns on her rural estate for $2,000 each. The contract provided for the farmer's payment of $6,000 upon the painter's completion of the work on all three barns. The painter did not ask for any payment when the first barn was completely painted, but she demanded $4,000 after painting the second barn. The farmer rightfully refused the painter's demand for payment. The painter then immediately terminated the contract without painting the third barn.",
        q: "What is the painter entitled to recover from the farmer?",
        opts: [
            "Nothing, because payment was expressly conditioned on completion of all three barns.",
            "The painter's expenditures plus anticipated 'profit' in painting the first two barns, up to a maximum recovery of $4,000.",
            "The reasonable value of the painter's services in painting the two barns, less the farmer's damages, if any, for the painter's failure to paint the third barn.",
            "The amount that the combined value of the two painted barns has been increased by the painter's work."
        ],
        ans: 2,
        exp: "A breaching plaintiff who has rendered partial performance conferring a benefit may recover in restitution (quantum meruit) for the reasonable value of the services rendered, less any damages caused by the breach."
    },
    {
        id: 19,
        topic: "Remedies / Liquidated Damages Validity",
        fp: "A sea captain owns an exceptionally seaworthy boat that she charters for sport fishing at a $500 daily rate. The fee includes the use of the boat with the sea captain as the captain, and one other crew member, as well as fishing tackle and bait. On May 1, a customer agreed with the captain that the customer would have the full-day use of the boat on May 15 for himself and his family for $500. The customer paid an advance deposit of $200 and signed an agreement that the deposit could be retained by the captain as liquidated damages in the event the customer canceled or failed to appear.",
        q: "Which of the following is an accurate statement concerning the rights of the parties?",
        opts: [
            "The captain can retain the $200 paid by the customer, because it would be difficult for the captain to establish her actual damages and the sum appears to have been a reasonable forecast in light of anticipated loss of profit from the charter.",
            "The captain is entitled to retain only $50 (10% of the contract price) and must return $150 to the customer.",
            "The captain must return $100 to the customer in order to avoid her own unjust enrichment at the customer's expense.",
            "The captain must return $100 to the customer, because the liquidated-damage clause under the circumstances would operate as a penalty."
        ],
        ans: 0,
        exp: "A liquidated damages clause is enforceable if damages were difficult to estimate at contracting and the amount is a reasonable forecast of just compensation. A $200 deposit on a $500 charter is reasonable."
    },
    {
        id: 20,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "By the terms of a written contract signed by both parties on January 15, a computer retailer agreed to sell from its inventory a particular ICB personal computer to a buyer for $3,000, and the buyer agreed to pick up and pay for the computer at the retailer's store on February 1. The buyer unjustifiably repudiated on February 1. Without notifying the buyer, the retailer subsequently sold at private sale that same specific computer to another buyer, who paid the same price ($3,000) in cash. The ICB is a popular product; the retailer can buy from the manufacturer more ICB units than the retailer can sell.",
        q: "If the retailer sues the buyer for breach of contract, the retailer will probably recover",
        opts: [
            "nothing, because it received a price on resale equal to the contract price that the buyer had agreed to pay.",
            "nothing, because the retailer failed to give the buyer proper notice of the retailer's intention to resell.",
            "the retailer's anticipated profit on the sale to the buyer plus incidental damages, if any, because the retailer lost that sale.",
            "$3,000 (the contract price), because the buyer intentionally breached the contract by repudiation."
        ],
        ans: 2,
        exp: "A lost volume seller can recover its lost profit on the sale, plus incidental damages, because the buyer's breach cost them a net sale."
    },
    {
        id: 21,
        topic: "Third Parties / Assignee Subject to Defenses",
        fp: "Under the terms of a written contract, a contractor agreed to construct for a homeowner a garage for $10,000. Nothing was said in the parties' negotiations or in the contract about progress payments during the course of the work. After completing 25% of the garage strictly according to the homeowner's specifications, the contractor assigned his rights under the contract to a banker as security for an $8,000 loan. The banker immediately notified the homeowner of the assignment. The contractor thereafter, without legal excuse, abandoned the job before it was half-complete. The contractor subsequently defaulted on the loan from the banker. The contractor has no assets. It will cost the homeowner at least $8,000 to get the garage finished by another builder.",
        q: "If the banker sues the homeowner for $8,000, which of the following will the court decide?",
        opts: [
            "The banker wins, because the contractor-homeowner contract was in existence and the contractor was not in breach when the banker gave the homeowner notice of the assignment.",
            "The banker wins, because the banker as a secured creditor over the contractor is entitled to priority over the homeowner's unsecured claim against the contractor.",
            "The homeowner wins, because his right to recoupment on account of the contractor's breach is available against the banker as the contractor's assignee.",
            "The homeowner wins, because his claim against the contractor arose prior to the contractor's default on his loan from the banker."
        ],
        ans: 2,
        exp: "An assignee stands in the shoes of the assignor and takes the assigned rights subject to any claims or defenses the obligor has against the assignor."
    },
    {
        id: 22,
        topic: "Third Parties / Successive Assignments",
        fp: "A tortfeasor tortiously injured a victim in an auto accident. While the victim was consequently hospitalized, the tortfeasor's liability insurer settled with the victim for $5,000. The victim gave the insurer a signed release and received a signed memorandum wherein the insurer promised to pay the victim $5,000 by check within 30 days. When the victim left the hospital two days later, the hospital demanded payment of his $4,000 stated bill. The victim thereupon gave the hospital his own negotiable promissory note for $4,000 payable to the hospital's order in 30 days, and also, as security, assigned to the hospital the insurer's settlement memorandum. The hospital promptly assigned for value the settlement memorandum and negotiated the note to a bank, which took the note as a holder in due course. Subsequently, the victim misrepresented to the insurer that he had lost the settlement memorandum and needed another. The insurer issued another memorandum identical to the first, and the victim assigned it to a furniture company to secure a $5,000 credit sale contract. The furniture company immediately notified the insurer of this assignment. Later it was discovered that the hospital had mistakenly overbilled the victim by an amount of $1,000 and that the tortfeasor was an irresponsible minor.",
        q: "In view of the tortfeasor's age and irresponsibility when the insurer issued his liability policy, can the bank and the furniture company recover on their assignments?",
        opts: [
            "Neither can recover because the victim, the assignor, is a third-party beneficiary of the liability policy whose rights thereon can be no better than the tortfeasor's.",
            "Neither can recover unless the insurer knowingly waived the defense of the tortfeasor's minority and irresponsibility.",
            "Neither can recover because the liability policy and settlement thereunder are unenforceable on account of the tortfeasor's minority.",
            "Either the bank or the furniture company, depending on priority, can recover as an assignee (or subassignee) on the victim's claim, because the victim's claim arose from the insurer's settlement agreement, and that settlement was valid."
        ],
        ans: 3,
        exp: "The settlement agreement between the victim and the insurer was supported by consideration (surrender of a tort claim), making it independently binding regardless of the tortfeasor's policy status."
    },
    {
        id: 23,
        topic: "Third Parties / Delegation and Novation",
        fp: "Gyro, an expert in lifting and emplacing equipment atop tall buildings, contracted in a signed writing to lift and emplace certain air-conditioning equipment atop Tower's building. The contract contained a clause providing for per diem damages if Gyro did not complete performance by a specified date, and a clause providing that 'time is of the essence.' Another clause provided that any subsequent agreement for extra work under the contract must be in writing and signed by both parties. With ample time remaining under the contract for commencement and completion of his performance, Gyro notified Tower that he was selling his business to Copter, who was equally expert in lifting and emplacing equipment atop tall buildings, and that Copter had agreed to 'take over the Gyro-Tower contract.' Tower orally agreed with Gyro to accept Copter's services. Copter performed on time but negligently installed the wrong air-conditioning equipment.",
        q: "Will Tower succeed in an action against Gyro for damages for breach of contract?",
        opts: [
            "Yes, because Tower did not agree to release Gyro from liability under the Gyro-Tower contract.",
            "Yes, because Tower received no consideration for the substitution of Copter for Gyro.",
            "No, because by accepting the substitution of Copter for Gyro, Tower effected a novation, and Gyro was thereby discharged of his duties under the Gyro-Tower contract.",
            "No, because the liquidated-damage clause in the Gyro-Tower contract provided only for damages caused by delay in performance."
        ],
        ans: 0,
        exp: "A delegation of duties does not release the delegator from secondary liability unless there is an express novation releasing them."
    },
    {
        id: 24,
        topic: "Third Parties / Delegation Limitations (Personal Services)",
        fp: "A famous chef entered into a written agreement with a well-known interior decorator, who was respected for his unique designs. In that agreement, the decorator agreed, for a fixed fee, to design the interior of the chef's new restaurant and, upon the chef's approval of the design plan, to decorate and furnish the restaurant accordingly. The agreement was silent as to assignment or delegation by either party. Before beginning work, the decorator sold his business to his son under an agreement in which the decorator assigned to his son. The son agreed to complete the chef-decorator contract. The son was also an experienced decorator of excellent repute, advised the chef of the assignment, and supplied the chef with information confirming both the son's financial responsibility and past commercial success.",
        q: "Is the chef obligated to permit the decorator's son to perform the chef-decorator agreement?",
        opts: [
            "Yes, because the agreement contained no prohibition against assignment or delegation.",
            "Yes, because the chef received adequate assurances of the decorator's son's ability to complete the job.",
            "No, because the decorator's duties were of a personal nature, involving his reputation, taste, and skill.",
            "No, because the decorator's purported delegation to his son of his obligations to the chef effected a novation."
        ],
        ans: 2,
        exp: "Contracts calling for personal judgment, skill, or artistic taste are non-delegable without express consent."
    },
    {
        id: 25,
        topic: "Third Parties / Intended Beneficiaries",
        fp: "Elda, the aged mother of Alice and Barry, both adults, wished to employ a live-in companion so that she might continue to live in her own home. Elda, however, had only enough income to pay one-half of the companion's $2,000 monthly salary. Learning of their mother's plight, Alice and Barry agreed with each other in a signed writing that on the last day of January and each succeeding month during their mother's lifetime, each would give Elda $500. Elda then hired the companion. Alice and Barry made the agreed payments in January, February, and March. In April, however, Barry refused to make any payment and notified Alice and Elda that he would make no further payments.",
        q: "Will Elda succeed in an action for $500 brought against Barry after April 30?",
        opts: [
            "Yes, because by making his first three payments, Barry confirmed his intent to contract.",
            "Yes, because Elda is an intended beneficiary of a contract between Alice and Barry.",
            "No, because a parent cannot sue her child for breach of a promise for support.",
            "No, because Alice and Barry intended their payments to Elda to be gifts."
        ],
        ans: 1,
        exp: "Elda is an intended third-party donee beneficiary of the contract between Alice and Barry and can enforce the agreement."
    }
];