const examData = [
    {
        id: 1,
        topic: "Remedies / Lost Profits for New Business",
        fp: "Swatter, a baseball star, contracted with the Municipal Symphony Orchestra. Inc., to perform for $5,000 at a children's concert, as narrator of 'Peter and the Wolf.' Shortly before the concert, Swatter became embroiled in a highly publicized controversy over whether he had cursed and assaulted a baseball fan. The orchestra canceled the contract out of concern that attendance might be adversely affected by Swatter's appearance. Swatter sued the orchestra for breach of contract. His business agent testified without contradiction that the cancellation had resulted in Swatter's not getting other contracts for performances and endorsements. The trial court instructed the jury, in part, as follows: 'If you find for the plaintiff, you may award damages for losses which at the time of contracting could reasonably have been foreseen by the defendant as a probable result of its breach. However, the law does not permit recovery for the loss of prospective profits of a new business caused by breach of contract.'",
        q: "On Swatter's appeal from a jury verdict for Swatter, and judgment thereon, awarding damages only for the $5,000 fee promised by the orchestra, the judgment will probably be",
        opts: [
            "affirmed, because the trial court stated the law correctly.",
            "affirmed, because the issue of damages for breach of contract was solely a jury question.",
            "reversed, because the test for limiting damages is what the breaching party could reasonably have foreseen at the time of the breach.",
            "reversed, because under the prevailing modern view, lost profits of a new business are recoverable if they are established with reasonable certainty."
        ],
        ans: 3,
        exp: "While it is true that any item of damages must be proved with reasonable certainty in order to be recovered, the modern trend rejects any strict, absolute rule that prospective profits from a new business or venture may never be recovered in a breach of contract action[cite: 33]. Because the judge's instructions prevented the jury from even considering whether Swatter's lost performance and endorsement income might have been proven with reasonable certainty, the instruction was a prejudicial error of law requiring reversal[cite: 33]."
    },
    {
        id: 2,
        topic: "Remedies / Expectation Damages in Real Estate",
        fp: "On April 1, Owner and Buyer signed a writing in which Owner, 'in consideration of $100 to be paid to Owner by Buyer,' offered Buyer the right to purchase Greenacre for $100,000 within 30 days. The writing further provided, 'This offer will become effective as an option only if and when the $100 consideration is in fact paid.' On April 20, Owner, having received no payment or other communication from Buyer, sold and conveyed Greenacre to Citizen for $120,000. On April 21, Owner received a letter from Buyer enclosing a cashier's check for $100 payable to Owner and stating, 'I am hereby exercising my option to purchase Greenacre and am prepared to close whenever you're ready.' Owner explained that he had already sold the property to Citizen. Buyer brought suit against Owner for breach of contract.",
        q: "Assume that Buyer prevails in the breach of contract suit against Owner. Which of the following is Buyer entitled to recover?",
        opts: [
            "Nominal damages only, because the remedy of specific performance was not available to Buyer.",
            "The fair market value, if any, of an assignable option to purchase Greenacre for $100,000.",
            "$20,000, plus the amount, if any, by which the fair market value of Greenacre on the date of Owner's breach exceeded $120,000.",
            "The amount, if any, by which the fair market value of Greenacre on the date of Owner's breach exceeded $100,000."
        ],
        ans: 3,
        exp: "In awarding expectation damages, the court attempts to put the non-breaching party in the position they would have been in had the contract been performed[cite: 33]. Normally, this means the plaintiff is awarded the 'benefit of the bargain,' which in a real estate contract is the difference between the contract price and the fair market value of the property on the date of breach[cite: 33]. Giving the buyer the amount by which the fair market value exceeded $100,000 correctly measures the profit the buyer was denied[cite: 33]."
    },
    {
        id: 3,
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
        exp: "Where a defaulting plaintiff has rendered some performance of value to the defendant, but has materially breached and not substantially performed, they may not recover 'on the contract.'[cite: 33] However, to prevent unjust enrichment, the breaching plaintiff may recover under a quasi-contract (quantum meruit) theory for the reasonable value of the services rendered[cite: 33]. This recovery is strictly subject to an offset for any damages the non-breaching party (the farmer) suffered as a result of the breach[cite: 33]."
    },
    {
        id: 4,
        topic: "Remedies / Liquidated Damages Validity",
        fp: "A sea captain owns an exceptionally seaworthy boat that she charters for sport fishing at a $500 daily rate. The fee includes the use of the boat with the sea captain as the captain, and one other crew member, as well as fishing tackle and bait. On May 1, a customer agreed with the captain that the customer would have the full-day use of the boat on May 15 for himself and his family for $500. The customer paid an advance deposit of $200 and signed an agreement that the deposit could be retained by the captain as liquidated damages in the event the customer canceled or failed to appear. At the time of contracting, the captain told the customer to be at the dock at 5 a.m. on May 15. The customer and his family, however, did not show up on May 15 until noon. Meantime, the captain agreed at 10 a.m. to take a replacement customer and her family out fishing for the rest of the day. The replacement had happened to come by and inquire about the possibility of such an outing. In view of the late hour, the captain charged the replacement $400 and stayed out two hours beyond the customary return time. The original customer's failure to appear until noon was due to the fact that he had been trying to charter another boat across the bay at a lower rate and had gotten lost after he was unsuccessful in getting such a charter.",
        q: "Which of the following is an accurate statement concerning the rights of the parties?",
        opts: [
            "The captain can retain the $200 paid by the customer, because it would be difficult for the captain to establish her actual damages and the sum appears to have been a reasonable forecast in light of anticipated loss of profit from the charter.",
            "The captain is entitled to retain only $50 (10% of the contract price) and must return $150 to the customer.",
            "The captain must return $100 to the customer in order to avoid her own unjust enrichment at the customer's expense.",
            "The captain must return $100 to the customer, because the liquidated-damage clause under the circumstances would operate as a penalty."
        ],
        ans: 0,
        exp: "A liquidated damages clause is enforceable if, at the time of contracting, actual damages would be difficult to estimate and the forecast was reasonable[cite: 33]. At the time the contract was made, the captain faced a real risk of last-minute cancellation and an inability to find a replacement charter, meaning her fixed costs would result in a near-total loss of the $500 fee[cite: 33]. Thus, a $200 retention was highly reasonable[cite: 33]. Even if the captain mitigated the loss with a $400 replacement, the clause is evaluated from the perspective of contract formation, making it fully enforceable and not a penalty[cite: 33]."
    },
    {
        id: 5,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "By the terms of a written contract signed by both parties on January 15, a computer retailer agreed to sell from its inventory a particular ICB personal computer to a law firm for $3,000, and the law firm agreed to pick up and pay for the computer at the company's store on February 1. The law firm unjustifiably repudiated on February 1. Without notifying the law firm, the retailer subsequently sold at private sale that same ICB computer to a bank, who paid the same price ($3,000) in cash. The ICB computer model in question is a popular product. The retailer can buy from the manufacturer more ICB units than the retailer can sell.",
        q: "If the retailer sues the law firm for breach of contract, the retailer will probably recover",
        opts: [
            "nothing, because it received a price on resale equal to the contract price that the buyer had agreed to pay.",
            "nothing, because the retailer failed to give the buyer proper notice of the retailer's intention to resell.",
            "the retailer's anticipated profit on the sale to the buyer plus incidental damages, if any, because the retailer lost that sale.",
            "$3,000 (the contract price), because the buyer intentionally breached the contract by repudiation."
        ],
        ans: 2,
        exp: "UCC § 2-708(2) is designed to protect 'lost volume' sellers—merchants who possess an essentially unlimited supply of standard goods[cite: 33]. Because the retailer could have easily sold a unit to both the law firm and the bank, the breach objectively cost the retailer one net sale[cite: 33]. The resale of the specific physical unit does not mitigate this lost volume[cite: 33]. Thus, the retailer is legally entitled to recover the expected profit it would have made on the breached contract, plus any incidental damages[cite: 33]."
    },
    {
        id: 6,
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
        exp: "An assignee generally 'stands in the shoes' of the assignor, taking the assigned rights subject to any defenses, set-offs, or counterclaims that the obligor (the homeowner) could have asserted against the assignor (the contractor)[cite: 33]. Because the contractor materially breached the contract by abandoning the job, the homeowner can use the damages resulting from that breach as a direct set-off against any payment owed[cite: 33]. This defense is fully available against the banker as the assignee[cite: 33]."
    },
    {
        id: 7,
        topic: "Third Parties / Successive Assignments for Value",
        fp: "A tortfeasor tortiously injured a victim in an auto accident. While the victim was consequently hospitalized, the tortfeasor's liability insurer settled with the victim for $5,000. The victim gave the insurer a signed release and received a signed memorandum wherein the insurer promised to pay the victim $5,000 by check within 30 days. When the victim left the hospital two days later, the hospital demanded payment of his $4,000 stated bill. The victim thereupon gave the hospital his own negotiable promissory note for $4,000 payable to the hospital's order in 30 days, and also, as security, assigned to the hospital the insurer's settlement memorandum. The hospital promptly assigned for value the settlement memorandum and negotiated the note to a bank, which took the note as a holder in due course. Subsequently, the victim misrepresented to the insurer that he had lost the settlement memorandum and needed another. The insurer issued another memorandum identical to the first, and the victim assigned it to a furniture company to secure a $5,000 credit sale contract. The furniture company immediately notified the insurer of this assignment. Later it was discovered that the hospital had mistakenly overbilled the victim by an amount of $1,000 and that the tortfeasor was an irresponsible minor.",
        q: "In view of the tortfeasor's age and irresponsibility when the insurer issued his liability policy, can the bank and the furniture company recover on their assignments?",
        opts: [
            "Neither can recover because the victim, the assignor, is a third-party beneficiary of the liability policy whose rights thereon can be no better than the tortfeasor's.",
            "Neither can recover unless the insurer knowingly waived the defense of the tortfeasor's minority and irresponsibility.",
            "Neither can recover because the liability policy and settlement thereunder are unenforceable on account of the tortfeasor's minority.",
            "Either the bank or the furniture company, depending on priority, can recover as an assignee (or subassignee) on the victim's claim, because the victim's claim arose from the insurer's settlement agreement, and that settlement was valid."
        ],
        ans: 3,
        exp: "The rights of the assignees stem entirely from the victim-insurer settlement agreement[cite: 33]. Because the victim possessed a good-faith belief in the validity of his tort claim against the insured tortfeasor, his surrender of that claim constituted valid consideration for the insurer's promise to pay $5,000[cite: 33]. This made the settlement agreement independently valid and binding on the insurer, regardless of whether the insurer could have later voided the underlying policy due to the tortfeasor's minority[cite: 33]. Because the settlement was valid, the victim's assignments for value are legally enforceable by the assignees (depending on the rules of priority)[cite: 33]."
    },
    {
        id: 8,
        topic: "Third Parties / Delegation vs. Novation",
        fp: "Gyro, an expert in lifting and emplacing equipment atop tall buildings, contracted in a signed writing to lift and emplace certain air-conditioning equipment atop Tower's building. The contract contained a clause providing for per diem damages if Gyro did not complete performance by a specified date, and a clause providing that 'time is of the essence.' Another clause provided that any subsequent agreement for extra work under the contract must be in writing and signed by both parties. With ample time remaining under the contract for commencement and completion of his performance, Gyro notified Tower that he was selling his business to Copter, who was equally expert in lifting and emplacing equipment atop tall buildings, and that Copter had agreed to 'take over the Gyro-Tower contract.' Tower orally agreed with Gyro to accept Copter's services. Copter performed on time but negligently installed the wrong air-conditioning equipment.",
        q: "Will Tower succeed in an action against Gyro for damages for breach of contract?",
        opts: [
            "Yes, because Tower did not agree to release Gyro from liability under the Gyro-Tower contract.",
            "Yes, because Tower received no consideration for the substitution of Copter for Gyro.",
            "No, because by accepting the substitution of Copter for Gyro, Tower effected a novation, and Gyro was thereby discharged of his duties under the Gyro-Tower contract.",
            "No, because the liquidated-damage clause in the Gyro-Tower contract provided only for damages caused by delay in performance."
        ],
        ans: 0,
        exp: "A delegation of duties occurs when a party transfers their obligations to another, but this does not relieve the original delegator of liability unless the obligee explicitly agrees to a novation[cite: 33]. A novation requires the obligee (Tower) to expressly release the original obligor (Gyro) and agree to look solely to the delegatee (Copter)[cite: 33]. Merely assenting to the delegation or accepting performance from the delegatee does not constitute a novation[cite: 33]. Thus, Gyro remains secondarily liable for Copter's defective performance[cite: 33]."
    },
    {
        id: 9,
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
        exp: "Generally, contractual duties are freely delegable unless the obligee possesses a substantial interest in having the original promisor perform[cite: 33]. Contracts calling for highly specialized personal skills, artistic judgment, or unique professional reputation are deemed non-delegable[cite: 33]. The chef specifically contracted with the well-known interior decorator for his unique design aesthetics; therefore, the decorator's duties were of a personal nature and legally non-delegable without the chef's express consent, regardless of the son's competence[cite: 33]."
    },
    {
        id: 10,
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
        exp: "A third party may sue to enforce a contract if they are an intended beneficiary, meaning the contracting parties specifically designed the agreement to confer a benefit upon them[cite: 33]. Here, Alice and Barry's mutual promises to each other were explicitly made for the primary purpose of providing financial support directly to their mother, Elda[cite: 33]. Consequently, Elda qualifies as an intended third-party donee beneficiary, giving her direct legal standing to sue Barry for breaching his promise[cite: 33]."
    },
    {
        id: 11,
        topic: "Third Parties / Defenses Against Beneficiary",
        fp: "A carpenter owed a bank $22,000 on an outstanding personal loan. The carpenter and a homeowner entered into a contract under which the carpenter agreed to perform work for the homeowner and the homeowner agreed to pay $22,000 to the bank within 30 days of completion of the work. The carpenter completed the work, but the homeowner incurred costs of $2,000 to correct minor deficiencies in the work.",
        q: "What amount, if any, is the homeowner obligated to pay the bank?",
        opts: [
            "$20,000, because the bank, as an intended beneficiary of the homeowner's contract with the carpenter, stands in the position of the carpenter.",
            "$22,000, and the homeowner can seek damages from the carpenter for the deficiencies in the work.",
            "Nothing, because the bank is an incidental beneficiary of the homeowner's contract with the carpenter.",
            "Nothing, because the carpenter's breach discharged the homeowner's obligation to pay the bank."
        ],
        ans: 0,
        exp: "An intended third-party beneficiary (the bank) has the right to enforce a contract against the promisor (the homeowner)[cite: 33]. However, the promisor may assert against the beneficiary any defenses or set-offs arising out of the contract that the promisor could have asserted against the original promisee (the carpenter)[cite: 33]. Because the carpenter committed a minor breach costing $2,000 to repair, the homeowner is entitled to offset this damage amount against the $22,000 owed, leaving $20,000 payable to the bank[cite: 33]."
    },
    {
        id: 12,
        topic: "Third Parties / Incidental Beneficiaries",
        fp: "A landowner was land-rich by inheritance but money-poor, having suffered severe losses on bad investments, but still owned several thousand acres of unencumbered timberland. He had a large family, and his normal, fixed personal expenses were high. Pressed for cash, he advertised a proposed sale of standing timber on a choice 2,000-acre tract. The only response was from a logging company, which operated a large, integrated construction enterprise. The logging company, after inspection of the advertised tract, offered a fair price for the timber rights in question, and the landowner accepted the offer. The 2,000-acre tract was an abundant wild-game habitat and had been used for many years, with the landowner's permission, by area hunters. The logging company's performance of the timber contract would destroy this habitat. Without legal excuse and over the landowner's strong objection, the logging company repudiated the contract before commencing performance. The landowner could not afford to hire a lawyer and take legal action, and made no attempt to assign any cause of action he might have had against the logging company.",
        q: "If the logging company is sued for breach of the contract by the landowner's next-door neighbor, whose view of a nearby lake is obscured by the standing timber, the neighbor will probably",
        opts: [
            "lose, as only an incidental beneficiary, if any, of the logging company-landowner contract.",
            "lose, as a maintainer of nuisance litigation.",
            "prevail, as a third-party intended beneficiary of the logging company-landowner contract.",
            "prevail, as a surrogate for the landowner in view of his inability to enforce the contract."
        ],
        ans: 0,
        exp: "To possess legal standing to enforce a contract, a third party must be an 'intended' beneficiary, meaning the contracting parties actively intended to confer a benefit upon them[cite: 33]. A party who simply happens to benefit indirectly from the performance of a contract is an 'incidental' beneficiary[cite: 33]. The contract between the landowner and logging company was strictly commercial; neither party negotiated the timber removal specifically to improve the neighbor's view[cite: 33]. Thus, the neighbor is a mere incidental beneficiary with absolutely no enforcement rights[cite: 33]."
    },
    {
        id: 13,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "On May 4, Mater and Nirvana Motors both signed a single document evidencing a contract for the sale by Nirvana to Mater, 'as a wedding gift for Mater's son Gilbert,' a new Mark XX Rolls-Royce sedan, for $180,000 cash on delivery. On May 5, Mater handed Gilbert a photocopy of this document. In reliance on the prospective gift, Gilbert on May 20 sold his nearly new Cheetah (an expensive sports car) to a dealer at a 'bargain' price of $50,000 and immediately informed Mater and Nirvana that he had done so. On May 25, however, Mater and Nirvana Motors by mutual agreement rescinded in a signed writing 'any and all agreements heretofore made between the undersigned parties for the sale-and-purchase of a new Mark XX Rolls-Royce sedan.' Later that day, Nirvana sold for $190,000 cash to another buyer the only new Mark XX Rolls-Royce that it had in stock or could readily obtain elsewhere. On June 1, Gilbert tendered $180,000 in cash to Nirvana Motors and demanded delivery to him 'within a reasonable time' of a new Mark XX Rolls-Royce sedan with all available equipment. Nirvana rejected the tender and denied any obligation.",
        q: "If Gilbert sues Nirvana for breach of contract, which of the following will the court probably decide?",
        opts: [
            "Gilbert wins, because his rights as an assignee for value of the May 4 Mater-Nirvana contract cannot be cut off by agreement between the original parties.",
            "Gilbert wins, because his rights as a third-party intended beneficiary became vested by his prejudicial reliance in selling his Cheetah on May 20.",
            "Nirvana wins, because Gilbert, if an intended beneficiary at all of the Mater-Nirvana contract, was only a donee beneficiary.",
            "Nirvana wins, because it reasonably and prejudicially relied on its contract of mutual rescission with Mater by selling the only readily available new Mark XX Rolls-Royce sedan to another buyer."
        ],
        ans: 1,
        exp: "Gilbert is an intended donee beneficiary of the contract between Mater and Nirvana[cite: 33]. The original contracting parties retain the right to modify or mutually rescind the contract without the beneficiary's consent until the beneficiary's rights have 'vested.'[cite: 33] Vesting occurs when the beneficiary learns of the contract and materially relies upon it[cite: 33]. Because Gilbert detrimentally relied on the contract by selling his current sports car at a discount, his rights fully vested on May 20, rendering the subsequent May 25 mutual rescission legally ineffective against his claim[cite: 33]."
    },
    {
        id: 14,
        topic: "Performance / Constructive Conditions",
        fp: "Kabb, the owner of a fleet of taxis, contracted with Petrol, a dealer in petroleum products, for the purchase and sale of Kabb's total requirements of gasoline and oil for one year. As part of that agreement, Petrol also agreed with Kabb that for one year Petrol would place all his advertising with Ada Artiste, Kabb's wife, who owned her own small advertising agency. When Artiste was informed of the Kabb-Petrol contract, she declined to accept an advertising account from the Deturgid Soap Company because she could not handle both the Petrol and Deturgid accounts during the same year. For this question only, assume the following facts. During the first month of the contract, Kabb purchased substantial amounts of his gasoline from a supplier other than Petrol, and Petrol thereupon notified Artiste that he would no longer place his advertising with her agency.",
        q: "In an action against Petrol for breach of contract, Artiste probably will",
        opts: [
            "succeed, because she is a third-party beneficiary of the Kabb-Petrol contract.",
            "succeed, because Kabb was acting as Artiste's agent when he contracted with Petrol.",
            "not succeed, because the failure of a constructive condition precedent excused Petrol's duty to place his advertising with Artiste.",
            "not succeed, because Artiste did not provide any consideration to support Petrol's promise to place his advertising with her."
        ],
        ans: 2,
        exp: "Artiste is indeed an intended third-party beneficiary of the contract. However, in a bilateral contract, the substantial performance of one party's promises acts as a constructive condition precedent to the other party's obligation to perform subsequent duties[cite: 33]. Kabb materially breached the contract by failing to purchase his gasoline exclusively from Petrol[cite: 33]. Because Kabb's performance was a constructive condition to Petrol's duty, Kabb's breach excused Petrol from his corresponding obligation to place advertising with Artiste[cite: 33]."
    },
    {
        id: 15,
        topic: "Excuses / Impossibility",
        fp: "On June 1, a seller agreed, in a writing signed by both the seller and the buyer, to sell an antique car to a buyer for $20,000. The car was at the time on display in a museum in a different city and was to be delivered to the buyer on August 1. On July 15, before the risk of loss had passed to the buyer, the car was destroyed by fire without fault of either party. Subsequent to the contract but before the fire, the car had increased in value to $30,000. The seller sued the buyer for the contract price of $20,000, and the buyer counterclaimed for $30,000.",
        q: "Which of the following will the court conclude?",
        opts: [
            "Both claims fail.",
            "Only the seller's claim prevails.",
            "Only the buyer's claim prevails.",
            "Both claims prevail."
        ],
        ans: 0,
        exp: "Under UCC § 2-613, if a contract requires for its performance goods that were identified when the contract was made, and those goods suffer total destruction without fault of either party before the risk of loss passes to the buyer, the contract is entirely avoided[cite: 33]. The specific antique car was identified to the contract upon formation. Because it was totally destroyed by fire before the risk of loss passed, performance by both sides is completely excused under the doctrine of impossibility, causing both claims to fail[cite: 33]."
    },
    {
        id: 16,
        topic: "Excuses / Supervening Illegality",
        fp: "Mermaid owns an exceptionally seaworthy boat that she charters for sport fishing at a $500 daily rate. The fee includes the use of the boat with Mermaid as the captain, and one other crew member, as well as fishing tackle and bait. On May 1, Phinney agreed with Mermaid that Phinney would have the full-day use of the boat on May 15 for himself and his family for $500. Phinney paid an advance deposit of $200 and signed an agreement that the deposit could be retained by Mermaid as liquidated damages in the event Phinney canceled or failed to appear. On May 15 at 1 a.m., the Coast Guard had issued offshore 'heavy weather' warnings and prohibited all small vessels the size of Mermaid's from leaving the harbor. This prohibition remained in effect throughout the day. Phinney did not appear at all on May 15, because he had heard the weather warnings on his radio.",
        q: "Which of the following is an accurate statement?",
        opts: [
            "The contract is discharged because of impossibility, and Phinney is entitled to return of his deposit.",
            "The contract is discharged because of mutual mistake concerning an essential fact, and Phinney is entitled to return of his deposit.",
            "The contract is not discharged, because its performance was possible in view of the exceptional seaworthiness of Mermaid's boat, and Phinney is not entitled to return of his deposit.",
            "The contract is not discharged, and Phinney is not entitled to return of his deposit, because the liquidated-damage clause in effect allocated the risk of bad weather to Phinney."
        ],
        ans: 0,
        exp: "Supervening illegality is a classic form of objective impossibility that completely discharges contractual duties[cite: 33]. Because the Coast Guard's prohibition had the force of law, it legally prevented Mermaid from sailing her small vessel, rendering the primary purpose of the charter physically and legally impossible to perform[cite: 33]. When a contract is discharged by impossibility, the parties are restored to their pre-contractual positions, entitling Phinney to a full return of his deposit[cite: 33]."
    },
    {
        id: 17,
        topic: "Excuses / Commercial Impracticability (Assumption of Risk)",
        fp: "A computer company contracted in writing with a bank to sell and deliver to the bank a mainframe computer using a new type of magnetic memory, then under development but not perfected by the computer company, at a price substantially lower than that of a similar computer using current technology. The contract's delivery term was 'F.O.B. the bank, on or before July 31.' After making the contract with the bank, the computer company discovered that the new technology it intended to use was unreliable and that no computer manufacturer could yet build a reliable computer using that technology. The company thereupon notified the bank that it was impossible for the company or anyone else to build the contracted-for computer 'in the present state of the art.'",
        q: "If the bank sues the computer company for failure to perform its contract, the court will probably decide the case in favor of",
        opts: [
            "the computer company, because its performance of the contract was objectively impossible.",
            "the computer company, because a contract to build a machine using technology under development imposes only a duty on the builder to use its best efforts to achieve the result contracted for.",
            "the bank, because the law of impossibility does not apply to merchants under the applicable law.",
            "the bank, because the computer company assumed the risk, in the given circumstances, that the projected new technology would not work reliably."
        ],
        ans: 3,
        exp: "The doctrine of commercial impracticability (UCC § 2-615) will not excuse a party's performance if that party expressly or impliedly assumed the risk of the occurrence causing the impracticability[cite: 33]. When a seller explicitly contracts to build and deliver a machine based on unperfected, experimental technology under active development, courts routinely hold that the manufacturing seller inherently assumes the business risk that the anticipated technological breakthrough will fail to materialize[cite: 33]. Thus, the computer company is not excused[cite: 33]."
    },
    {
        id: 18,
        topic: "Excuses / Impracticability (Construction Risks)",
        fp: "For an agreed price of $20 million, a builder contracted with a developer to design and build on the developer's commercial plot a 15-story office building. In excavating for the foundation and underground utilities, the contractor encountered a massive layer of granite at a depth of 15 feet. By reasonable safety criteria, the building's foundation required a minimum excavation of 25 feet. When the contract was made, neither the developer nor the contractor was aware of the subsurface granite, for the presence of which neither party had hired a qualified expert to test. Claiming accurately that removal of enough granite to permit the construction as planned would cost him an additional $3 million and a probable net loss on the contract of $2 million, the contractor refused to proceed with the work unless the developer would promise to pay an additional $2.5 million for the completed building.",
        q: "If the developer refuses and sues the contractor for breach of contract, which of the following will the court probably decide?",
        opts: [
            "The contractor is excused under the modern doctrine of supervening impossibility, which includes severe impracticability.",
            "The contractor is excused, because the contract is voidable on account of the parties' mutual mistake concerning an essential underlying fact.",
            "The developer prevails, because the contractor assumed the risk of encountering subsurface granite that was unknown to the developer.",
            "The developer prevails, unless subsurface granite was previously unknown anywhere in the vicinity of the developer's construction site."
        ],
        ans: 2,
        exp: "While commercial impracticability and mutual mistake are valid doctrines, they do not apply when a party has assumed the risk of the unexpected event[cite: 33]. In major excavation and construction contracts, custom dictates that the professional builder typically bears the inherent commercial risk of encountering adverse or difficult sub-surface soil conditions (like unexpected bedrock) unless the contract expressly allocates the risk otherwise[cite: 33]. Therefore, the contractor is not excused and is fully liable for breach[cite: 33]."
    },
    {
        id: 19,
        topic: "Remedies / Restitution Upon Frustration",
        fp: "A property owner hired an arborist to cut down all the trees on her property and to transport the trees to a lumber company. The owner agreed to pay the arborist $10,000 when the work was complete. The arborist said that the work would take him three days. On the first day, the arborist cut down all the trees. That evening, a fire caused by vandals completely destroyed the trees, making them unfit for use by the lumber company.",
        q: "What, if anything, must the owner pay the arborist?",
        opts: [
            "The arborist's expectation interest, $10,000 less any costs the arborist avoided by not completing his performance.",
            "The arborist's restitutionary interest, which would be the reasonable value of the services he rendered.",
            "Nothing, because the contract was discharged by frustration of purpose.",
            "Nothing, because the arborist did not complete the work."
        ],
        ans: 1,
        exp: "When an unforeseeable supervening event substantially destroys the core purpose of a contract or renders performance objectively impossible, the contract is discharged, relieving both parties of further duties[cite: 33]. However, if one party has already rendered partial performance that conferred a tangible benefit prior to the discharge, they are entitled to recover in quasi-contract (restitution) for the reasonable value of those services to prevent unjust enrichment[cite: 33]. Thus, the arborist recovers his restitutionary interest[cite: 33]."
    },
    {
        id: 20,
        topic: "Remedies / Quasi-Contract (Quantum Meruit) Following Impossibility",
        fp: "A lawyer entered into a contract with a painter by the terms of which the painter was to paint the lawyer's office for $1,000 and was required to do all of the work over the following weekend so as to avoid disruption of the lawyer's business. The painter commenced work on Saturday morning, and had finished half the painting by the time he quit work for the day. That night, without the fault of either party, the office building was destroyed by fire.",
        q: "Which of the following is an accurate statement?",
        opts: [
            "Both parties' contractual duties are discharged, and the painter can recover nothing from the lawyer.",
            "Both parties' contractual duties are discharged, but the painter can recover in quasi-contract from the lawyer.",
            "Only the painter's contractual duty is discharged, because the lawyer's performance (payment of the agreed price) is not impossible.",
            "Only the painter's contractual duty is discharged, and the painter can recover his reliance damages from the lawyer."
        ],
        ans: 1,
        exp: "The continued physical existence of the office building was a fundamental assumption on which the contract was based[cite: 33]. Its total destruction by fire makes the painter's performance objectively impossible, completely discharging the contractual duties of both parties[cite: 33]. However, because the painter completed half of the work prior to the fire, conferring a partial benefit upon the lawyer's property, the painter is entitled to recover the reasonable value of that work in quasi-contract (quantum meruit) to prevent unjust enrichment[cite: 33]."
    },
    {
        id: 21,
        topic: "Performance / Condition Precedent Failure",
        fp: "A fugitive was wanted for murder. The authorities offered the following reward: '$20,000 to anyone who provides information leading to the arrest and conviction of this fugitive.' A private detective knew of the reward, located the fugitive, and brought him to the authorities, who arrested him. The authorities then determined that while the fugitive had, in fact, committed the crime, he had been directed to commit the crime by his boss. The authorities and the fugitive then agreed that in exchange for the fugitive's testimony against his boss, all charges against the fugitive would be dropped. The fugitive testified and was released. The authorities refused to pay the reward to the private detective on the ground that the fugitive was never convicted.",
        q: "Would the private detective be likely to prevail in a breach of contract action against the authorities?",
        opts: [
            "No, because the private detective failed to notify the authorities that he had accepted the reward offer.",
            "No, because the express conditions set out in the reward were not met.",
            "Yes, because the authorities' agreement with the fugitive was against public policy.",
            "Yes, because the authorities themselves prevented the conviction of the fugitive."
        ],
        ans: 3,
        exp: "A performance subject to an express condition cannot become due unless the condition occurs or its non-occurrence is legally excused[cite: 34]. Under the doctrine of prevention, a party must refrain from conduct that wrongfully prevents or hinders the occurrence of a condition to their own performance[cite: 34]. Here, the authorities' decision to drop the charges in exchange for a plea deal actively prevented the conviction from occurring[cite: 34]. Because they themselves hindered the condition, its non-occurrence is excused, rendering the reward fully payable[cite: 34]."
    },
    {
        id: 22,
        topic: "Formation / UCC 2-207 (Acceptance by Shipment)",
        fp: "A retailer sent a purchase order to a computer manufacturer requesting the shipment of a specified quantity of laptops. The purchase order stated: 'In the event of a breach, the retailer may pursue all remedies available to it under the UCC.' The manufacturer received the purchase order and promptly shipped the laptops to the retailer. The manufacturer sent an acknowledgment form to the retailer four days later. Two days after accepting delivery of the laptops, the retailer received the manufacturer's acknowledgment form, which excluded consequential damages. The same day, the retailer discovered that the laptops were defective.",
        q: "If the retailer sues the manufacturer for breach of contract, will the retailer be entitled to pursue a claim for consequential damages?",
        opts: [
            "No, because the retailer and the manufacturer did not enter into a contract.",
            "No, because a contract was created that included the manufacturer's term excluding consequential damages.",
            "Yes, because the manufacturer's shipment of the laptops constituted an acceptance of the retailer's offer.",
            "Yes, because terms supplied by the UCC will govern the contract formed by the conduct of the parties."
        ],
        ans: 2,
        exp: "Under UCC § 2-206, an offer made by an order of goods may be accepted either by a prompt promise to ship or by the prompt shipment of the goods[cite: 34]. The manufacturer's shipment constituted a direct acceptance of the retailer's original offer, forming a binding contract entirely on the terms of that offer (which included full UCC remedies)[cite: 34]. The manufacturer's subsequent acknowledgment form containing the liability limitation arrived after the contract was already formed and merely operated as an unaccepted proposal for modification[cite: 34]."
    },
    {
        id: 23,
        topic: "Acceptance / Accommodation Shipment",
        fp: "A retailer faxed the following signed message to his long-time widget supplier: 'Urgently need blue widgets. Ship immediately three gross at your current list price of $600.' Upon receipt of the fax, the supplier shipped three gross of red widgets to the retailer, and faxed to the retailer the following message: 'Temporarily out of blue. In case red will help, am shipping three gross at the same price. Hope you can use them.'",
        q: "Upon the retailer's timely receipt of both the shipment and the supplier's fax, which of the following best describes the rights and duties of the retailer and the wholesaler?",
        opts: [
            "The retailer may accept the shipment, in which case he must pay the wholesaler the list price, or he must reject the shipment and recover from the wholesaler for total breach of contract.",
            "The retailer may accept the shipment, in which case he must pay the wholesaler the list price, or he may reject the shipment, in which case he has no further rights against the wholesaler.",
            "The retailer may accept the shipment, in which case he must pay the wholesaler the list price, less any damages sustained because of the nonconforming shipment, or he may reject the shipment and recover from the wholesaler for total breach of contract, subject to the wholesaler's right to cure.",
            "The retailer may accept the shipment, in which case he must pay the wholesaler the list price, less any damages sustained because of the nonconforming shipment, or he may reject the shipment provided that he promptly covers by obtaining conforming widgets from another supplier."
        ],
        ans: 1,
        exp: "Under UCC § 2-206(1)(b), a shipment of nonconforming goods serves as a counteroffer rather than an acceptance and breach if the seller seasonably notifies the buyer that the shipment is offered only as an accommodation[cite: 34]. Because the supplier included an explicit accommodation notice, the shipment was merely a counteroffer[cite: 34]. The retailer can accept the counteroffer (paying the list price) or reject it entirely, meaning no contract is ever formed, leaving the retailer with absolutely no cause of action for breach[cite: 34]."
    },
    {
        id: 24,
        topic: "Formation / Unilateral Contract Notice Requirement",
        fp: "A hardware distributor located on the West Coast gave its customer, a hardware retailer who was relocating to the East Coast, the following signed 'letter of introduction' to a hardware manufacturer based on the East coast: 'This will introduce you to my good friend and former customer, who is a retailer and will be seeking to arrange the purchase of hardware inventory from you on credit. If you will let him have the goods, I will make good any loss up to $25,000 in the event of his default.' The retailer presented the letter to the manufacturer, who then sold and delivered $20,000 worth of hardware to the retailer on credit. The manufacturer promptly notified the distributor of this sale.",
        q: "Which of the following is NOT an accurate statement concerning the arrangement between the distributor and the manufacturer?",
        opts: [
            "It was important to enforceability of the distributor's promise to the manufacturer that it be embodied in a signed writing.",
            "By extending the credit to the retailer, the manufacturer effectively accepted the distributor's offer for a unilateral contract.",
            "Although the distributor received no consideration from the retailer, the distributor's promise is enforceable by the manufacturer.",
            "The distributor's promise is enforceable by the manufacturer whether or not the manufacturer gave the distributor seasonable notice of the extension of credit to the retailer."
        ],
        ans: 3,
        exp: "In an offer for a unilateral contract, an offeree who accepts by rendering performance must generally give prompt notice of that acceptance to the offeror if they have reason to know the offeror would not otherwise learn of the performance[cite: 34]. Because the distributor was on the West Coast while the transaction occurred on the East Coast, the distributor would not naturally know the credit was extended[cite: 34]. Therefore, providing seasonable notice was legally required to preserve the manufacturer's rights under the guarantee, making the fourth statement legally inaccurate[cite: 34]."
    },
    {
        id: 25,
        topic: "Formation / UCC 2-207 Material Alteration",
        fp: "On June 1, a wholesaler received a purchase-order form from a retailer and new customer, in which the latter ordered 1,000 anti-recoil widgets for delivery no later than August 30 at a delivered total price of $10,000, as quoted in the wholesaler's current catalog. Both parties are merchants with respect to widgets of all types. On June 2, the wholesaler mailed to the retailer its own form, across the top of which the wholesaler's president had written, 'We are pleased to accept your order.' This form contained the same terms as the retailer's form except for an additional printed clause in the wholesaler's form that provided for a maximum liability of $100 for any breach of contract by the retailer.",
        q: "As of June 5, when the retailer received the wholesaler's acceptance form, which of the following is an accurate statement concerning the legal relationship between the wholesaler and the retailer?",
        opts: [
            "There is no contract, because the liability-limitation clause in the wholesaler's form is a material alteration of the retailer's offer.",
            "There is no contract, because the retailer did not consent to the liability-limitation clause in the wholesaler's form.",
            "There is an enforceable contract whose terms include the liability-limitation clause in the wholesaler's form, because liquidation of damages is expressly authorized by the Uniform Commercial Code.",
            "There is an enforceable contract whose terms do not include the liability-limitation clause in the wholesaler's form."
        ],
        ans: 3,
        exp: "Under UCC § 2-207(1), a definite expression of acceptance operates as an acceptance even if it states additional terms, so a valid contract is immediately formed[cite: 34]. Between merchants, these additional terms become part of the contract unless they 'materially alter' the agreement[cite: 34]. A clause severely limiting liability to an arbitrary maximum amount is universally considered a material alteration[cite: 34]. Therefore, while the core contract is legally enforceable, the material liability-limitation clause drops out entirely and is not included[cite: 34]."
    }
];