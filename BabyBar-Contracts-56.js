// BabyBar-Contracts-56.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Remedies / Specific Performance (Unique Goods)",
        fp: "A collector entered into a signed written contract with an antique dealer to purchase a one-of-a-kind 18th-century grandfather clock for $15,000. The closing was scheduled for the following week. Two days before the closing, the dealer contacted the collector and stated that he had received a better offer and would not sell the clock. The collector sued for specific performance.",
        q: "Is the collector entitled to specific performance?",
        opts: [
            "No, because the contract was for the sale of goods, restricting the collector exclusively to monetary damages.",
            "No, because the collector could effectuate commercial cover by purchasing a similar clock on the open market.",
            "Yes, because under UCC § 2-716, specific performance may be decreed where the goods are unique.",
            "Yes, but only if the dealer acted with fraudulent intent when breaching the agreement."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-716(1), specific performance may be decreed where the goods are unique or in other proper circumstances. Original antiques, heirlooms, and one-of-a-kind artworks are inherently unique, meaning monetary damages are inadequate to put the buyer in the position of having that exact item. Therefore, the collector is entitled to a decree of specific performance ordering the dealer to hand over the clock. (A) is incorrect because the UCC expressly expands specific performance to unique goods. (B) is incorrect because one-of-a-kind antiques cannot, by definition, be reasonably covered on the open market. (D) is incorrect because specific performance is an equitable remedy based on the inadequacy of legal damages, not the bad faith of the breaching party."
    },
    {
        id: 2,
        topic: "Performance / Adequate Assurances (UCC 2-609) in Requirements Contracts",
        fp: "A regional bakery contracted to purchase all of its flour requirements from a local mill for one year. Three months later, the mill sold its business to a massive conglomerate, assigning the contract. The bakery, reading news reports that the conglomerate was liquidating local assets and halting deliveries, sent a written demand for adequate assurance of due performance to the conglomerate. The conglomerate received the demand but ignored it for 40 days. The bakery then canceled the contract and sued.",
        q: "Was the bakery legally justified in canceling the contract?",
        opts: [
            "No, because requirements contracts are purely personal and voidable upon assignment.",
            "Yes, because the conglomerate's failure to provide adequate assurance within 30 days operated as an anticipatory repudiation.",
            "No, because the bakery had no right to suspend performance until a delivery was actually missed.",
            "Yes, because the bakery's agreement was with the local mill, not the conglomerate."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-609, when a party has reasonable grounds for insecurity regarding the other party's performance, they may demand adequate assurance of due performance in writing. A delegation of performance by the seller to a new entity, combined with reports of asset liquidation, provides reasonable grounds for insecurity. The delegatee's failure to provide assurances within a reasonable time (not exceeding 30 days) constitutes a repudiation of the contract under UCC § 2-609(4), giving the buyer the right to cancel and sue for breach. (A) is incorrect because requirements contracts are generally assignable. (C) is incorrect because the repudiation relieves the buyer of the duty to wait for an actual breach. (D) is incorrect because commercial contracts are generally assignable unless they explicitly state otherwise."
    },
    {
        id: 3,
        topic: "Excuse / Accord and Satisfaction with Disputed Check (UCC 3-311)",
        fp: "A mechanic billed a customer $2,000 for repairing a classic car. The customer disputed the bill in good faith, claiming the engine was still making noises. The customer sent a check for $1,500 marked conspicuously: 'Payment in full for all repairs.' The mechanic crossed out the words, wrote 'Accepted under protest for partial payment,' and deposited the check. The mechanic then sued for the remaining $500.",
        q: "What is the legal effect of the mechanic cashing the check?",
        opts: [
            "The debt was fully discharged by accord and satisfaction because the mechanic cashed a check conspicuously tendered in full settlement of a bona fide disputed claim.",
            "The mechanic preserved his right to sue because he explicitly crossed out the full-payment language.",
            "The accord was invalid because compromising a liquidated debt requires independent consideration.",
            "The mechanic is entitled to recover the balance because the customer acted in bad faith."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 3-311, if a debtor tenders a negotiable instrument in good faith as full satisfaction of a bona fide disputed claim, and the creditor obtains payment of the instrument containing a conspicuous statement to that effect, the claim is discharged. A creditor cannot avoid an accord and satisfaction by scratching out the full-payment phrase or writing 'under protest'. If the creditor cashes the check, he is legally bound by the settlement. (B) is incorrect because UCC § 1-308(b) explicitly provides that reservation-of-rights notations do not apply to an accord and satisfaction. (C) is incorrect because the debt was unliquidated/disputed, providing valid consideration. (D) is incorrect because the facts state the customer disputed the bill in good faith."
    },
    {
        id: 4,
        topic: "Remedies / Buyer's Remedies for Accepted Nonconforming Goods (UCC 2-714)",
        fp: "A corporate farm purchased 10 heavy-duty tractors from a dealer for $50,000 each. The tractors were delivered, and the farm accepted them. Two weeks later, the farm discovered the tractors had a defective transmission cooling system that breached the implied warranty of merchantability. Because harvest had begun, the farm kept and used the tractors, but seasonably notified the dealer of the breach. The actual value of the tractors as delivered was $30,000 each. The farm sued the dealer.",
        q: "What damages is the farm entitled to recover?",
        opts: [
            "Nothing, because the farm accepted and used the tractors.",
            "$500,000, representing the full purchase price of the tractors.",
            "$200,000, representing the difference between the value of the goods as warranted and the value of the goods as accepted.",
            "The cost of renting replacement tractors for the entire harvest season."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-714(2), the measure of damages for breach of warranty for accepted goods is the difference at the time and place of acceptance between the value of the goods accepted and the value they would have had if they had been as warranted. The value of the 10 tractors as warranted was $500,000. The value as accepted was $300,000. The difference is $200,000. The buyer is entitled to this amount to protect its expectation interest. (A) is incorrect because a buyer who gives seasonable notice preserves the right to sue for breach of warranty despite accepting the goods. (B) is incorrect because the buyer kept the goods and cannot recover the full purchase price unless revoking acceptance. (D) is incorrect because it reflects consequential cover damages, which are not the primary direct warranty measure when the buyer keeps the defective goods."
    },
    {
        id: 5,
        topic: "Remedies / Expectation Damages in Construction (Owner Breach)",
        fp: "A contractor agreed to build a commercial warehouse for $400,000. The contractor's estimated cost to build was $350,000, leaving a $50,000 expected profit. After the contractor spent $100,000 on labor and materials, the owner unjustifiably repudiated the contract and ordered the contractor off the site. The contractor sued for expectation damages.",
        q: "What amount is the contractor entitled to recover?",
        opts: [
            "$50,000, representing the lost profit.",
            "$100,000, representing the actual expenditures.",
            "$400,000, representing the full contract price.",
            "$150,000, representing the expenditures incurred plus the lost profit."
        ],
        ans: 3,
        exp: "(D) is the correct response. The standard expectation damage formula for a contractor when the owner breaches mid-performance is expenditures incurred plus lost profit (Restatement § 347). Expectation damages place the injured party in the position he would have occupied had the contract been fully performed. The formula is: Costs Incurred to Date ($100,000) + Total Expected Profit on the Contract ($50,000) - Payments Received ($0) = $150,000. This reimburses the contractor for out-of-pocket expenses while delivering the benefit of the bargain. (A) is incorrect because awarding profit alone would force the contractor to absorb $100,000 in uncompensated costs. (B) is incorrect because it reflects reliance damages, omitting the $50,000 lost profit. (C) is incorrect because the contractor saved the remaining $250,000 in construction costs, which must be deducted from the gross price."
    },
    {
        id: 6,
        topic: "Formation / Solicitations vs Offers",
        fp: "A buyer texted a seller: 'Would you consider taking $500 for your vintage watch?' The seller immediately texted back: 'Yes, I accept. I will bring it over tonight.' The seller arrived with the watch, but the buyer refused to buy it.",
        q: "Was a contract formed between the buyer and seller?",
        opts: [
            "Yes, because the seller's text constituted an acceptance.",
            "No, because the buyer's text was merely a preliminary inquiry, not an offer.",
            "Yes, because the buyer's text demonstrated a willingness to be bound.",
            "No, because contracts for the sale of goods must be in a signed writing."
        ],
        ans: 1,
        exp: "(B) is the correct response. An offer requires a manifestation of present intent to be bound, leaving nothing further for negotiation. Statements of future intention or preliminary inquiries (e.g., 'Would you consider?', 'Are you interested?') are solicitations, not binding offers. Because the buyer asked if the seller 'would consider' $500, he did not make a definitive offer. Consequently, the seller's 'acceptance' was legally merely an offer to sell for $500, which the buyer was free to reject. (A) and (C) are incorrect because there was no valid offer for the seller to accept. (D) is incorrect because a $500 contract requires a writing under the Statute of Frauds, but the primary failure here is at the fundamental formation (offer) stage."
    },
    {
        id: 7,
        topic: "Performance / Rejection of Nonconforming Tender",
        fp: "A homeowner contracted to buy 10,000 red bricks from a supplier for a patio. The supplier delivered 10,000 blue bricks. The homeowner noticed the color immediately, but because a party was scheduled for that weekend, he used the blue bricks to build the patio anyway. A week later, he sued the supplier for breach of contract, seeking damages.",
        q: "What is the legal effect of the homeowner using the blue bricks?",
        opts: [
            "He waived his right to sue for any damages because he accepted the nonconforming goods.",
            "He breached the contract by using goods he knew were defective.",
            "He accepted the goods by using them, but he may still sue for breach of warranty damages if he gives seasonable notice.",
            "He rightfully rejected the goods, and the supplier is liable for the full cost of replacing the patio."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-606(1)(c), a buyer accepts goods when he does any act inconsistent with the seller's ownership (such as using the bricks to build a permanent patio). Once goods are accepted, the buyer must pay the contract price. However, under UCC § 2-607(3)(a), a buyer who accepts nonconforming goods does NOT waive the right to sue for damages resulting from the nonconformity, provided the buyer notifies the seller of the breach within a reasonable time. (A) is incorrect because acceptance does not waive the right to sue for damages. (B) is incorrect because using nonconforming goods is an acceptance, not a breach by the buyer. (D) is incorrect because using the goods constitutes acceptance, making rejection impossible."
    },
    {
        id: 8,
        topic: "Remedies / Specific Performance in Land Contracts",
        fp: "A commercial entity signed a contract to purchase an empty, undeveloped dirt lot from an owner for $100,000. The owner repudiated the contract. The buyer sued for specific performance. The owner argued that there were dozens of identical dirt lots for sale in the immediate vicinity for $100,000.",
        q: "Is the buyer entitled to a decree of specific performance?",
        opts: [
            "No, because the availability of identical substitute lots makes money damages an adequate remedy.",
            "Yes, because under equity jurisprudence, every parcel of real property is conclusively presumed unique as a matter of law.",
            "No, because specific performance is restricted to improved residential dwellings.",
            "Yes, but only if the buyer can prove the seller acted in bad faith."
        ],
        ans: 1,
        exp: "(B) is the correct response. Specific performance is granted when money damages are inadequate to put the injured party in the position performance would have provided. In land sale contracts, equity conclusively presumes that land is unique because of its fixed geographic coordinates; therefore, damages are inadequate as a matter of law. The availability of neighboring comparable tracts does not displace this conclusive presumption. The buyer is entitled to specific performance as a matter of course. (A) is incorrect because the availability of substitute land does not defeat specific performance in real property sales. (C) is incorrect because specific performance applies equally to unimproved land and commercial property. (D) is incorrect because specific performance requires a valid contract and an inadequate legal remedy; bad faith is not required."
    },
    {
        id: 9,
        topic: "Third-Party Beneficiaries / Intended vs Incidental",
        fp: "An aunt entered into a written contract with an auto dealership to purchase a car. The contract stated: 'This car is to be delivered to my niece as a graduation present.' The aunt paid the $25,000 purchase price in full. The dealership failed to deliver the car. The niece sued the dealership for breach of contract.",
        q: "Does the niece have legal standing to sue the dealership?",
        opts: [
            "No, because she did not provide consideration to the dealership.",
            "No, because she is merely an incidental beneficiary.",
            "Yes, because she is an intended donee beneficiary of the contract.",
            "Yes, but only if she had already sold her old car in reliance on the gift."
        ],
        ans: 2,
        exp: "(C) is the correct response. A third party can enforce a contract if they are an intended beneficiary. An intended beneficiary exists if recognition of a right to performance is appropriate to effectuate the intention of the parties, and the circumstances indicate that the promisee intended to give the beneficiary the benefit of the promised performance. Because the contract explicitly stated the car was a gift for the niece, the aunt's clear intent was to confer the benefit on her. The niece is an intended donee beneficiary and has full standing to sue the promisor (the dealership) for breach. (A) is incorrect because a third-party beneficiary is not required to provide consideration; the promisee (aunt) provided it. (B) is incorrect because she was expressly named as the intended recipient. (D) is incorrect because an intended beneficiary can sue upon breach; reliance is only required to vest rights against *modification* by the original parties."
    },
    {
        id: 10,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A city contracted with a developer to build a large public park. A homeowner whose property bordered the planned park was thrilled, as the park would increase his property value by $50,000. Due to budget cuts, the city and the developer mutually agreed to cancel the contract. The homeowner sued the developer for breach of contract, demanding construction of the park.",
        q: "Will the homeowner prevail?",
        opts: [
            "Yes, because the homeowner detrimentally relied on the anticipated increase in property value.",
            "No, because the homeowner is an incidental beneficiary who possesses no enforceable rights under the contract.",
            "Yes, because citizens are intended beneficiaries of all municipal contracts.",
            "No, because the city is immune from breach of contract suits."
        ],
        ans: 1,
        exp: "(B) is the correct response. Third parties may enforce contracts only if they are intended beneficiaries. Neighbors who benefit economically from nearby construction or public infrastructure projects are presumed to be incidental beneficiaries unless the contract explicitly manifests an intention to create direct liability to them (Restatement § 313). Because the city and the developer did not intend to confer direct enforceable rights on the neighboring homeowner, the homeowner is merely an incidental beneficiary and cannot recover. (A) is incorrect because detrimental reliance does not transform an incidental beneficiary into an intended beneficiary. (C) is incorrect because members of the public are generally incidental beneficiaries of government contracts. (D) is incorrect because municipalities can be sued for breach of contract, but the plaintiff here lacks standing."
    },
    {
        id: 11,
        topic: "Formation / Rejection & Objective Assent",
        fp: "A buyer received a signed offer from a seller to sell a tractor for $5,000, held open until May 10. On May 5, the buyer wrote a letter rejecting the offer and put it in his desk drawer, but never mailed it. On May 8, the seller arrived at the buyer's farm with the tractor and said, 'I'm here to deliver the tractor if you still want it.' The buyer said, 'I'll take it,' and handed over $5,000. Later, the buyer claimed no contract was formed because he had written a rejection.",
        q: "Was a valid contract formed?",
        opts: [
            "No, because the written rejection terminated the power of acceptance.",
            "No, because the buyer subjectively intended to reject the offer.",
            "Yes, because the written rejection was never communicated to the seller, and the buyer objectively assented upon delivery.",
            "Yes, but only because the seller made a new firm offer upon arriving at the farm."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the objective theory of contracts, assent is determined by outward manifestations, not secret subjective intentions. A rejection is effective only when communicated (received) by the offeror. Because the buyer never mailed or communicated the rejection letter, it had no legal effect on the outstanding offer. When the buyer verbally agreed and tendered payment on May 8, he objectively manifested assent, forming a binding contract. (A) is incorrect because an uncommunicated rejection is legally null. (B) is incorrect because subjective intent does not govern contract formation. (D) is incorrect because the original offer was still open and capable of being accepted; a new offer was not necessary."
    },
    {
        id: 12,
        topic: "Remedies / Quasi-Contract (Officious Intermeddler)",
        fp: "A painter was hired to paint the house at 100 Main Street. By mistake, the painter went to 102 Main Street, which was owned by a family away on a month-long European vacation. The painter spent a week painting the house. Upon returning, the family was surprised to see their newly painted home. The painter realized his mistake and demanded the family pay the reasonable value of the paint job ($3,000). The family refused.",
        q: "Is the family obligated to pay the painter in quasi-contract?",
        opts: [
            "Yes, because the family received a material benefit that unjustly enriched them.",
            "Yes, because the painter acted in good faith.",
            "No, because the painter acted as an officious intermeddler and the family had no opportunity to reject the services.",
            "No, because the value of the paint job was not established by a written estimate."
        ],
        ans: 2,
        exp: "(C) is the correct response. Quasi-contract (restitution) is an equitable remedy designed to prevent unjust enrichment. However, a person who confers a benefit upon another without being requested to do so is an 'officious intermeddler' and cannot recover restitution, UNLESS the recipient knew the services were being rendered and had a reasonable opportunity to reject them but failed to do so. Because the family was on vacation and unaware of the painting, they had no opportunity to reject the unrequested services. Therefore, the painter cannot force them to pay for the mistake. (A) and (B) are incorrect because even if a material benefit was conferred in good faith, forcing payment upon an unaware recipient violates the core principles of restitution. (D) is incorrect because the lack of a written estimate is irrelevant to the quasi-contract analysis."
    },
    {
        id: 13,
        topic: "Defenses / Economic Duress",
        fp: "A caterer contracted to provide food for a couple's wedding for $10,000. The day before the wedding, the caterer called the couple and said, 'Ingredient costs have skyrocketed. Unless you agree to pay $15,000, I won't show up tomorrow.' Knowing no other caterer could be hired on 24 hours' notice, the desperate couple signed an agreement to pay $15,000. After the wedding, they paid $10,000 and refused to pay the extra $5,000.",
        q: "Can the caterer enforce the agreement for the extra $5,000?",
        opts: [
            "Yes, because the couple signed the agreement voluntarily.",
            "No, because the modification was induced by an improper threat that left the couple with no reasonable alternative.",
            "Yes, because commercial parties may freely modify contracts under the UCC.",
            "No, because the modification was not supported by consideration."
        ],
        ans: 1,
        exp: "(B) is the correct response. A contract or modification is voidable for economic duress if a party's assent is induced by an improper threat that leaves the victim no reasonable alternative (Restatement § 175). Threatening to breach an existing contract on the eve of a major event without commercial justification constitutes an improper threat. Because no substitute caterers were available, the couple had no reasonable alternative but to capitulate. Assent was coerced, rendering the modification unenforceable. (A) is incorrect because signing under severe coercive pressure without practical alternatives is not legally voluntary. (C) is incorrect because even under the UCC, modifications must be made in good faith; extorting money under threat of breach violates good faith. (D) is incorrect because while lack of consideration might also be a defense under common law, duress is the most direct and specific defense to extortionate threats."
    },
    {
        id: 14,
        topic: "Remedies / Seller's Damages for Buyer's Breach",
        fp: "A buyer contracted to purchase a commercial building for $500,000. Prior to closing, the buyer unjustifiably repudiated the contract. The seller immediately put the building back on the market and resold it to another buyer for $450,000 in a commercially reasonable transaction. The seller sued the original buyer for breach of contract.",
        q: "What amount of damages is the seller entitled to recover?",
        opts: [
            "$500,000 (the full contract price).",
            "Nothing, because the seller successfully resold the property.",
            "$50,000 (the difference between the contract price and the resale price).",
            "$450,000 (the resale price)."
        ],
        ans: 2,
        exp: "(C) is the correct response. When a buyer breaches a contract to purchase real estate, the standard measure of the seller's expectation damages is the difference between the contract price and the fair market value of the property at the time of the breach. A prompt, commercially reasonable resale is highly probative evidence of the fair market value. Therefore, the seller is entitled to recover $50,000 ($500,000 contract price minus $450,000 resale value) to put him in the position he would have occupied had the contract been performed. (A) is incorrect because an action for the full price is generally unavailable when the property can be resold. (B) is incorrect because the resale resulted in a $50,000 shortfall. (D) is incorrect because $450,000 is what the seller successfully recovered, not what he lost."
    },
    {
        id: 15,
        topic: "Formation / Unilateral Contract Acceptance by Performance",
        fp: "A woman lost her dog and put up posters offering a $500 reward for its safe return. A teenager saw the poster, found the dog wandering in a park, and returned it to the woman. The woman thanked him but refused to pay the reward.",
        q: "Is the woman legally obligated to pay the teenager?",
        opts: [
            "No, because the teenager had a pre-existing legal duty to return lost property.",
            "Yes, because a unilateral contract was formed when the teenager returned the dog.",
            "No, because the teenager did not notify the woman of his acceptance prior to finding the dog.",
            "Yes, because the poster was a firm offer under the UCC."
        ],
        ans: 1,
        exp: "(B) is the correct response. An offer of a reward is an offer for a unilateral contract, which invites acceptance by full performance of the requested act (finding and returning the dog). By finding the dog and returning it to the woman with knowledge of the reward, the teenager fully performed the requested act, thereby accepting the offer and creating a binding contract. The woman is obligated to pay the $500. (A) is incorrect because an ordinary citizen generally has no pre-existing legal duty to actively search for and capture a lost animal. (C) is incorrect because unilateral contracts do not require advance notice of acceptance; performance is sufficient. (D) is incorrect because the UCC firm offer rule applies to the sale of goods by merchants, not public rewards for lost pets."
    },
    {
        id: 16,
        topic: "Formation / UCC 2-209 Modification Without Consideration",
        fp: "A school ordered 100 laptops from a manufacturer for $1,000 each. Upon delivery, the school discovered the laptops had shorter battery lives than specified. The school called the manufacturer to complain. The manufacturer offered to reduce the price to $800 each if the school kept them. The school agreed. Later, the manufacturer sued the school for the remaining $200 per laptop.",
        q: "Is the agreement to reduce the price enforceable?",
        opts: [
            "No, because the modification was unsupported by fresh consideration.",
            "Yes, because under UCC § 2-209, a good-faith modification of a contract for the sale of goods needs no consideration to be binding.",
            "No, because the laptops still functioned, making the price reduction an unconscionable penalty.",
            "Yes, but only under the doctrine of promissory estoppel."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-209(1), an agreement modifying a contract for the sale of goods needs no consideration to be binding, provided it is made in good faith. Resolving a legitimate dispute over nonconforming goods (shorter battery life) by reducing the price is a classic good-faith modification. The school is bound only to pay the modified price of $800. (A) is incorrect because the UCC explicitly abolished the pre-existing duty rule for the sale of goods. (C) is incorrect because the parties freely negotiated the reduction to cure a defect; it is not an unconscionable penalty. (D) is incorrect because UCC § 2-209 makes the modification directly enforceable as a contract, without relying on the equitable doctrine of promissory estoppel."
    },
    {
        id: 17,
        topic: "Third-Party Beneficiaries / Creditor Beneficiary",
        fp: "A young man owed a bank $5,000. His wealthy grandmother signed a written contract with him: 'I promise to pay your $5,000 debt to the bank next week.' The grandmother failed to pay the bank. The bank discovered the contract and sued the grandmother.",
        q: "Can the bank enforce the grandmother's promise?",
        opts: [
            "Yes, because the bank is an intended creditor beneficiary of the contract.",
            "Yes, because the bank was an assignee of the grandson's rights.",
            "No, because the bank provided no consideration to the grandmother.",
            "No, because the bank was merely an incidental beneficiary of a family agreement."
        ],
        ans: 0,
        exp: "(A) is the correct response. An intended beneficiary may enforce a contract if the recognition of a right to performance is appropriate to effectuate the intention of the parties, and the performance will satisfy an obligation of the promisee to pay money to the beneficiary (a creditor beneficiary). The grandmother explicitly promised to pay the bank to satisfy her grandson's existing debt. Therefore, the bank is an intended creditor beneficiary and has full standing to sue the promisor (the grandmother) directly for breach. (B) is incorrect because this was a third-party beneficiary contract formed at the outset, not an assignment of an existing right. (C) is incorrect because a third-party beneficiary is not required to provide consideration; the grandson's agreement with the grandmother provides it. (D) is incorrect because the explicit promise to pay the bank's debt makes the bank an intended, not incidental, beneficiary."
    },
    {
        id: 18,
        topic: "Formation / Counteroffer vs Inquiry",
        fp: "A seller offered to sell his boat to a buyer for $15,000. The buyer replied in writing: 'I will only buy it if you include the GPS navigation system and lower the price to $14,000.' The seller declined. The next day, the buyer told the seller: 'Okay, I accept your original offer of $15,000.' The seller refused to sell.",
        q: "Was a binding contract formed when the buyer accepted the original offer?",
        opts: [
            "Yes, because the original offer had not explicitly expired.",
            "No, because the seller's initial offer was not in writing.",
            "Yes, because the buyer's first reply was merely an inquiry.",
            "No, because the buyer's first reply was a counteroffer that terminated the original offer."
        ],
        ans: 3,
        exp: "(D) is the correct response. An offeree's power of acceptance is terminated by their making of a counteroffer (Restatement § 39). A counteroffer proposes a substituted bargain differing from that proposed by the original offer. By responding 'I will *only* buy it if you include the GPS... and lower the price to $14,000,' the buyer made a definitive counteroffer, not a mere inquiry or request for better terms. This counteroffer instantly terminated the seller's original $15,000 offer. Consequently, the buyer's subsequent attempt to 'accept' the original offer was legally ineffective. (A) is incorrect because a counteroffer terminates an offer even if it hasn't expired by time. (B) is incorrect because the lack of a writing is a Statute of Frauds issue, but the failure here is at the fundamental formation stage (no valid acceptance). (C) is incorrect because the definitive language 'I will only buy it if...' is a counteroffer, not a mere inquiry ('Would you consider...?')."
    },
    {
        id: 19,
        topic: "Assignment & Delegation / Liability of Delegator",
        fp: "A landscaping company contracted to maintain a corporate campus for $2,000 a month for two years. After one year, the landscaping company delegated its duties and assigned its rights to a reliable competitor. The corporate client consented to the arrangement. The competitor performed poorly and eventually abandoned the job. The corporate client sued the original landscaping company for breach of contract.",
        q: "Is the original landscaping company liable for the breach?",
        opts: [
            "Yes, because a delegating obligor remains secondarily liable for performance unless released by a novation.",
            "Yes, because the assignment of a service contract is void against public policy.",
            "No, because the corporate client consented to the delegation.",
            "No, because the competitor assumed all duties under the contract."
        ],
        ans: 0,
        exp: "(A) is the correct response. When a party delegates their contractual duties to a third party, the delegator remains secondarily liable (as a surety) for the performance of the contract unless the obligee expressly releases them through a novation. Merely consenting to a delegation does not constitute a novation. Because the corporate client never expressly released the original landscaping company, the original company remains liable for the competitor's breach. (B) is incorrect because routine commercial services like landscaping are freely delegable. (C) is incorrect because consent alone does not release the delegator. (D) is incorrect because although the competitor (delegatee) is primarily liable after assuming the duties, the delegator remains secondarily liable."
    },
    {
        id: 20,
        topic: "Assignment & Delegation / Personal Services",
        fp: "A world-famous portrait painter was hired by a mayor to paint his official portrait. The painter fell behind schedule and delegated the painting duties to her highly skilled apprentice, who had a degree in fine arts. The mayor refused to sit for the apprentice.",
        q: "Is the delegation to the apprentice legally valid?",
        opts: [
            "Yes, because the apprentice was a highly skilled and trained professional.",
            "Yes, because all service contracts are freely delegable under the common law.",
            "No, because contracts calling for the unique personal skills or artistic abilities of the promisor are non-delegable.",
            "No, because delegations require written consent from the obligee."
        ],
        ans: 2,
        exp: "(C) is the correct response. A duty is generally delegable unless the obligee has a substantial interest in having the original promisor perform the acts. Contracts involving unique personal skills, artistic performances, or special professional expertise (like a famous portrait painter) are strictly non-delegable without the obligee's consent. The mayor contracted specifically for the unique artistic skill of the famous painter, so the painter cannot unilaterally force the mayor to accept the apprentice. (A) is incorrect because the skill of the delegatee does not cure the breach of a unique personal services contract. (B) is incorrect because personal service contracts are a major exception to free delegability. (D) is incorrect because routine delegations do not strictly require written consent unless specified in the contract."
    },
    {
        id: 21,
        topic: "Statute of Frauds / Merchants' Confirmatory Memo",
        fp: "A wholesale hardware dealer telephoned a manufacturer and orally ordered 1,000 hammers at $5 each ($5,000). The manufacturer orally agreed. The next day, the dealer mailed a signed written confirmation stating the quantity and price. The manufacturer received the memo, read it, and threw it away. Thirty days later, the manufacturer refused to deliver the hammers, asserting the Statute of Frauds.",
        q: "Is the oral contract enforceable against the manufacturer?",
        opts: [
            "No, because contracts for the sale of goods for $500 or more must be in a signed writing.",
            "No, because the manufacturer never expressly assented to the confirmatory memo.",
            "Yes, because under UCC § 2-201(2), a merchant who receives a signed confirmation and fails to object within 10 days loses the Statute of Frauds defense.",
            "Yes, because oral contracts between merchants are exempt from the Statute of Frauds."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-201(2), the merchant's confirmatory memo rule, if between merchants one party sends a written confirmation sufficient against the sender, and the recipient has reason to know its contents, it satisfies the Statute of Frauds against the recipient unless written notice of objection is given within 10 days of receipt. Both parties are merchants. The dealer sent a signed written confirmation. The manufacturer received it, read it, and failed to object. Therefore, the oral contract is fully enforceable against the manufacturer despite the lack of the manufacturer's signature. (A) is incorrect because the confirmatory memo is a statutory exception to the signature requirement. (B) is incorrect because the rule specifically operates via the recipient's silent failure to object. (D) is incorrect because merchants are fully subject to the Statute of Frauds absent a specific exception."
    },
    {
        id: 22,
        topic: "Consideration / Gratuitous Promises",
        fp: "A wealthy musician told his struggling neighbor: 'You've been having a hard time. Come to my house tomorrow, and I will give you my spare acoustic guitar.' The neighbor drove to the musician's house the next day, but the musician had changed his mind and refused to give him the guitar.",
        q: "Is the musician's promise enforceable?",
        opts: [
            "Yes, because the neighbor relied on the promise by driving to the house.",
            "No, because the promise lacked a bargained-for exchange and was a mere gratuitous gift.",
            "Yes, because oral promises to transfer personal property are fully binding.",
            "No, because the value of the guitar likely exceeded $500."
        ],
        ans: 1,
        exp: "(B) is the correct response. A promise to make a gift is generally unenforceable for lack of consideration. Consideration requires a bargained-for exchange. The musician did not request the neighbor to drive to his house as the 'price' for the guitar; the driving was merely a condition of accepting the gift, not a bargained-for detriment. Therefore, the promise was gratuitous and unenforceable. (A) is incorrect because merely taking the necessary steps to collect a gift (driving over) does not constitute substantial detrimental reliance sufficient to trigger promissory estoppel. (C) is incorrect because a promise requires consideration, whether written or oral. (D) is incorrect because the Statute of Frauds applies to the *sale* of goods, not gifts, and the primary failure here is lack of consideration."
    },
    {
        id: 23,
        topic: "Excuse / Frustration of Purpose",
        fp: "A fan rented a balcony apartment overlooking a specific street for $2,000 for one day to watch a royal coronation parade. The landlord knew the purpose of the rental. A week before the parade, the king fell ill and the coronation parade was permanently canceled. The fan refused to pay the rent.",
        q: "Is the fan legally excused from paying the rent?",
        opts: [
            "Yes, under the doctrine of frustration of purpose, because the principal purpose of the contract was substantially frustrated by an unforeseeable event.",
            "No, because the apartment was still physically available for occupancy.",
            "Yes, under the doctrine of mutual mistake, because both parties believed the parade would happen.",
            "No, because the fan assumed the risk of cancellation by not including a force majeure clause."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under the doctrine of frustration of purpose (Krell v. Henry and Restatement § 265), where a party's principal purpose is substantially frustrated without his fault by the occurrence of an event the non-occurrence of which was a basic assumption on which the contract was made, his remaining duties to render performance are discharged. Both parties explicitly understood that the sole purpose of renting the balcony for one day at an inflated rate was to view the parade. When it was canceled, the mutually recognized foundational purpose of the lease was totally destroyed. The tenant is excused. (B) is incorrect because frustration applies precisely when physical performance (occupancy) is possible but the mutually understood underlying value is destroyed. (C) is incorrect because the cancellation was a supervening event, not a mistake about an existing fact at formation. (D) is incorrect because frustration of purpose is a default equitable doctrine that does not strictly require a force majeure clause."
    },
    {
        id: 24,
        topic: "Formation / Option Contracts",
        fp: "On May 1, a landowner signed a written document offering to sell her land to a buyer for $100,000. In exchange for the buyer paying $500, the landowner promised to keep the offer open until June 1. On May 15, the landowner called the buyer and revoked the offer. On May 20, the buyer mailed a letter accepting the offer, which the landowner received.",
        q: "Was the landowner's revocation effective?",
        opts: [
            "No, because the $500 payment created a binding option contract, making the offer irrevocable until June 1.",
            "Yes, because under the common law, an offeror may revoke an offer at any time prior to acceptance.",
            "No, because the landowner was a merchant bound by the UCC firm offer rule.",
            "Yes, because real estate options must be recorded to be binding."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under the common law, an offer is revocable at any time before acceptance unless it is supported by consideration, thereby creating an option contract. Because the buyer paid $500 consideration specifically to hold the offer open until June 1, a binding option contract was formed. The landowner surrendered the legal power to revoke the offer during that period. Her attempted revocation on May 15 was legally void, and the buyer's acceptance on May 20 created a binding contract of sale. (B) is incorrect because the option contract (supported by consideration) is the specific exception to the general rule of revocability. (C) is incorrect because the UCC firm offer rule applies to goods, not land. (D) is incorrect because recording is for property title protection, not contract validity."
    },
    {
        id: 25,
        topic: "Consideration / Promissory Estoppel",
        fp: "An uncle promised to pay his niece's college tuition for four years if she enrolled full-time. The niece, who was planning to work instead, enrolled in a private college, quit her part-time job, and took out living expense loans. After one year, the uncle refused to pay the tuition, arguing his promise was a gift and lacked consideration.",
        q: "Is the uncle's promise enforceable?",
        opts: [
            "Yes, under the doctrine of promissory estoppel, because the niece foreseeably relied on the promise to her detriment.",
            "No, because the promise was a gratuitous familial gift unsupported by a bargained-for exchange.",
            "Yes, because the uncle received the material benefit of family prestige.",
            "No, because the niece had a pre-existing duty to further her education."
        ],
        ans: 0,
        exp: "(A) is the correct response. Even if a promise lacks traditional bargained-for consideration, it may be enforceable under the equitable doctrine of promissory estoppel (Restatement § 90). Promissory estoppel requires a promise that the promisor should reasonably expect to induce action or forbearance, and which does induce justifiable detrimental reliance by the promisee. The uncle reasonably should have expected his promise to induce the niece to enroll in college. The niece justifiably relied to her detriment by quitting her job and incurring debt. The promise is enforceable to prevent injustice. (B) is incorrect because promissory estoppel operates precisely to enforce promises that lack traditional consideration. (C) is incorrect because 'family prestige' is not a direct material benefit sufficient to bypass consideration (the material benefit rule applies to things like emergency rescues). (D) is incorrect because an adult has no legal pre-existing duty to attend college."
    }
];