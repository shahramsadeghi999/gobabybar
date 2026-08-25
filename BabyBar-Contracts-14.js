const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC Firm Offer Limit vs. Oral Assurances",
        fp: "Merchant A calls Farmer B (a non-merchant) and says: 'I offer to buy your antique tractor for $5,000. I guarantee this offer will be held open for 30 days.' Farmer B does not pay any consideration. On day 15, Merchant A formally revokes the offer over the phone. On day 20, Farmer B attempts to accept.",
        q: "Was Merchant A's revocation on day 15 legally effective?",
        opts: [
            "Yes, because under the UCC firm offer rule, the assurance that an offer will remain open must be embodied in a signed writing; an oral promise is revocable.",
            "No, because merchants are strictly bound by their verbal commercial assurances for a maximum of ninety days.",
            "No, because the thirty-day timeframe was an explicit, bargained-for material condition of the preliminary negotiations.",
            "Yes, but the farmer is entitled to recover nominal damages for breach of the implied covenant of good faith."
        ],
        ans: 0,
        exp: "Under UCC § 2-205 (Firm Offer), a merchant's offer is only irrevocable without consideration if it is in a SIGNED WRITING. An oral promise to keep an offer open is treated as a standard offer under the common law, meaning it can be revoked at any time prior to acceptance unless supported by consideration."
    },
    {
        id: 2,
        topic: "Formation / Option Contracts & Consideration",
        fp: "Merchant A calls Farmer B (a non-merchant) and says: 'I offer to buy your antique tractor for $5,000. I guarantee this offer will be held open for 30 days.' Farmer B does not pay any consideration. On day 15, Merchant A formally revokes the offer over the phone. On day 20, Farmer B attempts to accept.\n\nAssume instead that on day 1, Farmer B handed Merchant A a crisp $10 bill in exchange for the promise to keep the offer open for 30 days. Merchant A still attempted to revoke on day 15.",
        q: "Did the $10 create a binding, irrevocable option contract?",
        opts: [
            "No, because the ten-dollar sum is entirely disproportionate to the actual market value of a thirty-day commercial holding period.",
            "Yes, because under the common law, nominal consideration is generally sufficient to support a short-term option contract if it is actually paid.",
            "Yes, because the UCC firm offer rule requires independent consideration from non-merchants.",
            "No, because option contracts strictly require formalized written documentation to be enforceable."
        ],
        ans: 1,
        exp: "An option contract requires consideration to hold an offer open. Under common law (and the Restatement), courts typically do not inquire into the adequacy of consideration. Nominal consideration (like $10) is generally sufficient to support a short-term option contract if it is actually paid and bargained for, rendering the revocation ineffective."
    },
    {
        id: 3,
        topic: "Formation / Mailbox Rule Exception for Options",
        fp: "Merchant A calls Farmer B (a non-merchant) and says: 'I offer to buy your antique tractor for $5,000. I guarantee this offer will be held open for 30 days.' Farmer B does not pay any consideration. On day 15, Merchant A formally revokes the offer over the phone. On day 20, Farmer B attempts to accept.\n\nAssume Farmer B validly created a 30-day option contract. On day 29, Farmer B deposits a letter of acceptance into the mail. Merchant A receives the letter on day 31.",
        q: "Is the acceptance legally effective?",
        opts: [
            "Yes, because the mailbox rule applies uniformly to all dispatched acceptances.",
            "Yes, because the letter was postmarked prior to the expiration of the binding contractual option period.",
            "No, because the mailbox rule generally does NOT apply to option contracts; acceptance of an option is only effective upon actual receipt by the offeror.",
            "No, because all acceptances of option contracts must be delivered via certified courier."
        ],
        ans: 2,
        exp: "This is a highly tested exception: The 'mailbox rule' (which makes an acceptance effective upon dispatch) generally does NOT apply to option contracts. To effectively exercise an option, the acceptance must be RECEIVED by the offeror before the option period expires. Because it was received on day 31, the acceptance was too late."
    },
    // FACT PATTERN 2 (Q4-Q6)
    {
        id: 4,
        topic: "Formation / UCC 2-207 (Subject To vs Expressly Conditional)",
        fp: "Retailer (a merchant) sends an offer to Manufacturer (a merchant) to buy 5,000 shirts. Manufacturer responds with an acknowledgment form that states: 'We accept your order. This acceptance is subject to the terms and conditions printed on the reverse side.' The reverse side includes a binding arbitration clause. Retailer receives the form, says nothing, and accepts the shipped shirts.",
        q: "Did Manufacturer's acknowledgment form operate as an acceptance or a counteroffer?",
        opts: [
            "It constitutes a strict counteroffer because the additional terms were explicitly printed on the reverse side of the document.",
            "It acts as a rejection under the rigid application of the mirror image rule.",
            "It is merely an invitation to negotiate further terms.",
            "It operates as a valid acceptance; the phrase 'subject to' is generally insufficient to make the acceptance expressly conditional on assent to the new terms under UCC § 2-207(1)."
        ],
        ans: 3,
        exp: "Under UCC § 2-207(1), an acceptance containing new terms is still a valid acceptance UNLESS it is 'expressly made conditional on assent to the additional or different terms.' Courts typically hold that vague language like 'subject to our terms' is insufficient. It must use the magic words 'expressly conditional' to be deemed a counteroffer."
    },
    {
        id: 5,
        topic: "Formation / UCC 2-207 (Material Alteration)",
        fp: "Retailer (a merchant) sends an offer to Manufacturer (a merchant) to buy 5,000 shirts. Manufacturer responds with an acknowledgment form that states: 'We accept your order. This acceptance is subject to the terms and conditions printed on the reverse side.' The reverse side includes a binding arbitration clause. Retailer receives the form, says nothing, and accepts the shipped shirts.",
        q: "Given that the form operated as a valid acceptance between merchants, does the arbitration clause become part of the contract?",
        opts: [
            "No, because an arbitration clause is almost universally considered a material alteration that does not automatically become part of the contract under UCC § 2-207(2).",
            "Yes, because the retailer's physical acceptance of the shirts constitutes absolute ratification of all enclosed terms.",
            "No, because the terms were printed on the reverse side of the document.",
            "Yes, because the retailer failed to object to the additional terms within a reasonable ten-day period."
        ],
        ans: 0,
        exp: "Under UCC § 2-207(2), between merchants, additional terms in the acceptance become part of the contract UNLESS: they materially alter it, the offer expressly limits acceptance, or the offeror objects. Adding a binding arbitration clause is widely considered a material alteration. Thus, it drops out of the contract."
    },
    {
        id: 6,
        topic: "Formation / UCC 2-207 (Merchant vs Non-Merchant)",
        fp: "Retailer (a merchant) sends an offer to Manufacturer (a merchant) to buy 5,000 shirts. Manufacturer responds with an acknowledgment form that states: 'We accept your order. This acceptance is subject to the terms and conditions printed on the reverse side.' The reverse side includes a binding arbitration clause. Retailer receives the form, says nothing, and accepts the shipped shirts.\n\nAssume instead that Retailer was just a private consumer buying 5 shirts for personal use. Manufacturer's acceptance form included a minor, non-material additional term regarding standard shipping logistics.",
        q: "Does the minor additional term become part of the contract in this consumer scenario?",
        opts: [
            "Yes, because the term was objectively non-material and the consumer failed to promptly object.",
            "No, because when at least one party is not a merchant, additional terms are construed merely as proposals for addition to the contract and do not automatically become part of it.",
            "Yes, because the UCC gap-fillers inherently favor shipping logistics drafted by the seller.",
            "No, because any modification to a consumer transaction strictly requires a formal signature."
        ],
        ans: 1,
        exp: "Under UCC § 2-207(2), the rule that additional terms automatically enter the contract applies ONLY 'between merchants.' If either party is not a merchant (e.g., a private consumer), the additional terms are treated merely as proposals for addition and do not become part of the contract unless expressly agreed to."
    },
    // FACT PATTERN 3 (Q7-Q9)
    {
        id: 7,
        topic: "Terms / Implied Warranty of Fitness for a Particular Purpose",
        fp: "Buyer goes to a hardware store seeking paint specifically formulated to withstand continuous saltwater submersion for his wooden boat. Seller (the store owner) is a merchant of house paint but has never sold marine supplies. Buyer explains his specific need and says, 'I trust your judgment, pick a can for me.' Seller hands him a can of standard exterior house paint. The paint washes off immediately.",
        q: "Did Seller breach the implied warranty of fitness for a particular purpose?",
        opts: [
            "No, because Seller is not a merchant specifically dealing in marine or boat-related goods.",
            "No, because the buyer failed to independently verify the chemical composition of the product.",
            "Yes, because the seller had reason to know of the buyer's particular purpose and that the buyer was relying on the seller's skill or judgment to select suitable goods.",
            "Yes, but only if the seller acted with malicious intent to defraud the consumer."
        ],
        ans: 2,
        exp: "Under UCC § 2-315, the implied warranty of fitness for a particular purpose arises when the seller (merchant or not) has reason to know of any particular purpose for which the goods are required AND that the buyer is relying on the seller's skill to select them. Since Buyer stated his purpose and reliance, and Seller picked the wrong paint, the warranty was breached."
    },
    {
        id: 8,
        topic: "Terms / Disclaiming Implied Warranties",
        fp: "Buyer goes to a hardware store seeking paint specifically formulated to withstand continuous saltwater submersion for his wooden boat. Seller (the store owner) is a merchant of house paint but has never sold marine supplies. Buyer explains his specific need and says, 'I trust your judgment, pick a can for me.' Seller hands him a can of standard exterior house paint. The paint washes off immediately.\n\nAssume Seller wanted to legally disclaim the implied warranty of fitness for a particular purpose before the sale.",
        q: "What are the strict UCC requirements for effectively disclaiming the implied warranty of fitness for a particular purpose?",
        opts: [
            "It can be done orally, but must explicitly use the exact phrase 'fitness for a particular purpose.'",
            "It requires a formally executed liability waiver endorsed by independent legal counsel.",
            "It can be done verbally, provided the buyer is given an adequate opportunity to physically inspect the goods.",
            "The disclaimer must be executed in a physical writing and the exclusionary language must be conspicuous."
        ],
        ans: 3,
        exp: "Under UCC § 2-316(2), to exclude or modify any implied warranty of fitness for a particular purpose, the exclusion must be by a writing and must be conspicuous. (Unlike the implied warranty of merchantability, which can sometimes be oral if it mentions 'merchantability')."
    },
    {
        id: 9,
        topic: "Terms / 'As Is' Disclaimers",
        fp: "Buyer goes to a hardware store seeking paint specifically formulated to withstand continuous saltwater submersion for his wooden boat. Seller (the store owner) is a merchant of house paint but has never sold marine supplies. Buyer explains his specific need and says, 'I trust your judgment, pick a can for me.' Seller hands him a can of standard exterior house paint. The paint washes off immediately.\n\nAssume instead that the can of paint had a highly conspicuous, bold sticker on the lid that simply said: 'SOLD AS IS WITH ALL FAULTS.'",
        q: "Does this sticker effectively disclaim the implied warranty of fitness for a particular purpose?",
        opts: [
            "Yes, because under the UCC, expressions like 'as is' or 'with all faults' effectively exclude all implied warranties, including fitness and merchantability.",
            "No, because it failed to explicitly mention the word 'fitness' in the exclusionary language.",
            "No, because the sticker was attached to the product rather than embedded in a separate written contract.",
            "Yes, but only if the buyer explicitly initialed the sticker prior to leaving the premises."
        ],
        ans: 0,
        exp: "Under UCC § 2-316(3)(a), unless the circumstances indicate otherwise, ALL implied warranties (both merchantability and fitness for a particular purpose) are completely excluded by expressions like 'as is', 'with all faults', or other language which in common understanding calls the buyer's attention to the exclusion of warranties."
    },
    // FACT PATTERN 4 (Q10-Q12)
    {
        id: 10,
        topic: "Discharge / Accord & Satisfaction (Good Faith Dispute)",
        fp: "Landlord hires Roofer to fix a roof for $10,000. Roofer finishes, but Landlord complains the shingles are uneven and refuses to pay the full amount, claiming in good faith that the work is only worth $7,000. Roofer insists he is owed $10,000. Landlord sends a check for $8,500 marked 'payment in full.'",
        q: "If Roofer cashes the check, does the preexisting duty rule allow him to sue for the remaining $1,500?",
        opts: [
            "Yes, because a debt cannot be discharged by partial payment unless supported by completely distinct, independent consideration.",
            "No, because the good faith dispute over the quality of the work renders the entire debt unliquidated, meaning the compromise provides valid consideration for an accord and satisfaction.",
            "Yes, because the memo line notation on a personal check lacks the formal legal weight required to alter a primary service contract.",
            "No, because the roofer's physical endorsement of the banking instrument universally waives all subsequent appellate rights."
        ],
        ans: 1,
        exp: "If a debt is liquidated (undisputed), partial payment lacks consideration under the preexisting duty rule. HOWEVER, if there is a good-faith dispute over the amount owed (unliquidated debt), an agreement to accept a lesser amount in full settlement IS supported by consideration. Cashing the 'payment in full' check forms a binding accord and satisfaction."
    },
    {
        id: 11,
        topic: "Discharge / UCC 3-311 'Under Protest'",
        fp: "Landlord hires Roofer to fix a roof for $10,000. Roofer finishes, but Landlord complains the shingles are uneven and refuses to pay the full amount, claiming in good faith that the work is only worth $7,000. Roofer insists he is owed $10,000. Landlord sends a check for $8,500 marked 'payment in full.'\n\nAssume Roofer receives the $8,500 check. Furious, Roofer crosses out 'payment in full' and writes 'Cashed UNDER PROTEST, reserving all rights to the remaining $1,500' on the back before cashing it. Roofer then sues Landlord.",
        q: "Under the UCC, what is the legal effect of Roofer writing 'under protest' before cashing the check?",
        opts: [
            "It successfully preserves his right to sue for the remaining balance under UCC § 1-308.",
            "It converts the transaction into an implied-in-law contract for the remainder.",
            "It still completely discharges the debt; under UCC § 3-311, cashing a full-payment check for an unliquidated debt discharges the obligation regardless of any restrictive endorsements or words of protest added by the creditor.",
            "It renders the check entirely void, requiring the landlord to issue a replacement draft."
        ],
        ans: 2,
        exp: "This is a highly tested, advanced nuance. While UCC § 1-308 generally allows parties to perform 'under protest' and reserve rights, UCC § 3-311 explicitly overrides this for 'payment in full' checks on disputed debts. If a creditor cashes a full-payment check on a disputed debt, the debt is discharged, PERIOD. Words of protest written on the check are entirely ineffective."
    },
    {
        id: 12,
        topic: "Consideration / Preexisting Duty (Third Party Exception)",
        fp: "Landlord hires Roofer to fix a roof for $10,000. Roofer finishes, but Landlord complains the shingles are uneven and refuses to pay the full amount, claiming in good faith that the work is only worth $7,000. Roofer insists he is owed $10,000. Landlord sends a check for $8,500 marked 'payment in full.'\n\nAssume instead there was no dispute, but Roofer simply refused to finish the roof halfway through unless he got more money. Landlord's neighbor, wanting the neighborhood to look nice, orally promised to pay Roofer $2,000 if Roofer finished the roof. Roofer finished the roof.",
        q: "Is the Neighbor's promise to pay Roofer $2,000 supported by valid consideration?",
        opts: [
            "No, because the roofer was already legally bound to complete the exact same task under his primary contract with the landlord.",
            "No, because the neighbor did not receive a direct, tangible financial benefit from the completion of the roofing project.",
            "Yes, but only under the equitable doctrine of promissory estoppel.",
            "Yes, because a promise made to a third party to perform a preexisting contractual duty owed to another person generally constitutes valid and sufficient consideration."
        ],
        ans: 3,
        exp: "A major exception to the preexisting duty rule occurs when the preexisting duty is owed to a different person. Promising a THIRD PARTY (Neighbor) to perform a duty already owed to a second party (Landlord) constitutes valid consideration to support the third party's new promise to pay."
    },
    // FACT PATTERN 5 (Q13-Q15)
    {
        id: 13,
        topic: "Third Parties / Promisor Asserting Promisee's Personal Defense",
        fp: "Ann (a 16-year-old minor) buys a car from Dealer. Instead of paying Dealer, Ann contracts with Bob. Ann gives Bob her rare baseball card collection, and in exchange, Bob promises to pay the $5,000 car debt directly to Dealer. Before Bob pays, Ann decides to disaffirm the car contract with Dealer due to her minority. Dealer sues Bob for the $5,000.",
        q: "Can Bob (the promisor) refuse to pay Dealer (the beneficiary) by asserting Ann's defense of infancy?",
        opts: [
            "No, because the promisor cannot assert defenses that are strictly personal to the promisee, such as infancy or mental incapacity.",
            "Yes, because third-party beneficiaries take their rights completely subject to all defects in the underlying transactional formation.",
            "No, because automotive debt operates as a strict necessity.",
            "Yes, because the disaffirmance completely invalidates the foundational contract ab initio."
        ],
        ans: 0,
        exp: "This is a super-advanced third-party beneficiary nuance. While a promisor (Bob) can generally raise defenses arising from the contract (like fraud or failure of consideration), the promisor CANNOT raise defenses that are strictly PERSONAL to the promisee (Ann). Infancy is a personal defense belonging only to the minor. Bob cannot use Ann's infancy to avoid his own promise to pay Dealer."
    },
    {
        id: 14,
        topic: "Terms / Parol Evidence (Condition to Performance vs Formation)",
        fp: "Ann (a 16-year-old minor) buys a car from Dealer. Instead of paying Dealer, Ann contracts with Bob. Ann gives Bob her rare baseball card collection, and in exchange, Bob promises to pay the $5,000 car debt directly to Dealer. Before Bob pays, Ann decides to disaffirm the car contract with Dealer due to her minority. Dealer sues Bob for the $5,000.\n\nAssume Ann was an adult. Ann and Bob signed a fully integrated contract stating 'Bob will pay Dealer $5,000 on Tuesday.' Prior to signing, Bob orally stated, 'I'll only pay on Tuesday if the stock market goes up on Monday.' It did not go up.",
        q: "Can Bob introduce evidence of the oral statement to avoid paying on Tuesday?",
        opts: [
            "Yes, because it is a condition precedent to formation.",
            "No, because evidence of a condition to a specific performance duty that contradicts the absolute obligation in the integrated writing is strictly barred by the Parol Evidence Rule.",
            "Yes, because financial contingencies are exempt from the four corners rule.",
            "No, unless the dealer formally assented to the modification."
        ],
        ans: 1,
        exp: "Extrinsic evidence is admissible to show an oral condition precedent to the FORMATION of the entire contract. However, evidence of an oral condition precedent to a specific PERFORMANCE duty (e.g., 'I won't pay unless X happens') contradicts an absolute duty written in the contract ('Bob will pay on Tuesday') and is barred by the Parol Evidence Rule."
    },
    {
        id: 15,
        topic: "Third Parties / Beneficiary Rights Vesting (Assent vs Knowledge)",
        fp: "Ann (a 16-year-old minor) buys a car from Dealer. Instead of paying Dealer, Ann contracts with Bob. Ann gives Bob her rare baseball card collection, and in exchange, Bob promises to pay the $5,000 car debt directly to Dealer. Before Bob pays, Ann decides to disaffirm the car contract with Dealer due to her minority. Dealer sues Bob for the $5,000.\n\nAssume Ann and Bob legally canceled their contract on Wednesday. On Monday, Dealer had received an anonymous email informing him of the arrangement, but Dealer did nothing. Dealer claims his rights had vested on Monday.",
        q: "Had Dealer's rights legally vested prior to the Wednesday cancellation?",
        opts: [
            "Yes, because the transmission of electronic correspondence conclusively establishes the vesting of commercial obligations.",
            "Yes, because a creditor beneficiary's rights vest instantly upon the creation of the underlying third-party agreement.",
            "No, because rights only vest when the beneficiary materially relies on the promise, brings suit, or explicitly assents to it at the request of the parties; mere knowledge is completely insufficient.",
            "No, because the cancellation was executed within the standard five-day rescission window."
        ],
        ans: 2,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest only when the beneficiary (1) materially relies on the promise, (2) brings suit upon it, or (3) assents to it at the request of the promisor or promisee. Mere knowledge of the contract does not vest the rights."
    },
    // FACT PATTERN 6 (Q16-Q18)
    {
        id: 16,
        topic: "Performance / Risk of Loss (Non-Merchant Seller)",
        fp: "Neighbor (a non-merchant) sells his used couch to Buyer for $100. They agree Buyer will pick it up on Saturday. On Saturday morning, Neighbor moves the couch to his driveway, texts Buyer 'It's ready for pickup,' and goes inside. An hour later, a freak lightning strike destroys the couch. Buyer refuses to pay.",
        q: "Who bears the risk of loss for the destroyed couch?",
        opts: [
            "The seller, because he failed to physically load the item into the buyer's transport vehicle.",
            "The seller, because the risk of loss never passes until the buyer actually takes physical possession of the goods.",
            "The risk is split evenly because the destruction resulted from an unforeseeable act of God.",
            "The buyer, because for a non-merchant seller, the risk of loss passes to the buyer strictly upon the tender of delivery, which occurred when the seller made the goods available and provided notice."
        ],
        ans: 3,
        exp: "This is a highly tested UCC nuance. Under UCC § 2-509(3), if the seller is a MERCHANT, the risk of loss passes to the buyer only on the buyer's actual receipt of the goods. But if the seller is NOT a merchant (like Neighbor), the risk passes to the buyer upon TENDER of delivery. Putting it in the driveway and texting 'it's ready' constitutes tender, so the Buyer bears the risk and must pay."
    },
    {
        id: 17,
        topic: "Performance / Risk of Loss (Merchant Seller)",
        fp: "Neighbor (a non-merchant) sells his used couch to Buyer for $100. They agree Buyer will pick it up on Saturday. On Saturday morning, Neighbor moves the couch to his driveway, texts Buyer 'It's ready for pickup,' and goes inside. An hour later, a freak lightning strike destroys the couch. Buyer refuses to pay.\n\nAssume instead the seller was a commercial Furniture Store. The store called Buyer to say the mower was ready for pickup. Before Buyer arrives, a meteor hits the store.",
        q: "Who bears the risk of loss in this scenario?",
        opts: [
            "The buyer, because the store successfully completed the tender of delivery by notifying the customer.",
            "The seller, because for a merchant seller, the risk of loss does not pass to the buyer until the buyer takes actual physical receipt of the goods.",
            "The buyer, because driving to the location establishes constructive possession.",
            "The seller, but only if they failed to maintain adequate commercial property insurance."
        ],
        ans: 1,
        exp: "Under UCC § 2-509(3), if the seller IS a merchant (like the Furniture Store), the risk of loss passes to the buyer ONLY on the buyer's actual physical receipt of the goods. Tender is not enough. Because the Buyer had not yet received the couch, the merchant Seller bears the risk."
    },
    {
        id: 18,
        topic: "Performance / Frustration of Purpose vs Impracticability",
        fp: "Neighbor (a non-merchant) sells his used couch to Buyer for $100. They agree Buyer will pick it up on Saturday. On Saturday morning, Neighbor moves the couch to his driveway, texts Buyer 'It's ready for pickup,' and goes inside. An hour later, a freak lightning strike destroys the couch. Buyer refuses to pay.\n\nAssume Buyer was renting the couch specifically to use as a prop in a play that night. The theater burned down that morning, so the play was canceled. The couch itself was perfectly fine.",
        q: "What doctrine provides Buyer the best argument to escape paying the rental fee?",
        opts: [
            "Frustration of purpose, because a supervening event fundamentally destroyed the mutually understood core purpose of the contract, even though the physical item remains perfectly intact.",
            "Objective impossibility, because the play cannot occur.",
            "Mutual mistake of fact.",
            "Anticipatory repudiation."
        ],
        ans: 0,
        exp: "Frustration of purpose applies when a supervening, unforeseeable event completely destroys the mutually understood, core purpose of the contract. The couch is still perfectly fine and accessible (so it's not 'impossible' to rent it), but the theater burning down completely destroyed the sole purpose of renting it as a prop."
    },
    // FACT PATTERN 7 (Q19-Q21)
    {
        id: 19,
        topic: "Performance / Retraction of Anticipatory Repudiation (Filing Suit)",
        fp: "Supplier agrees to deliver lumber to Builder on June 1. On May 1, Supplier clearly and unequivocally repudiates the contract. On May 15, Builder files a formal lawsuit against Supplier for total breach of contract. On May 20, Supplier emails Builder: 'I retract my repudiation; I will deliver on June 1.' Builder had not hired a replacement supplier yet.",
        q: "Was Supplier's May 20 retraction legally effective?",
        opts: [
            "Yes, because the retraction occurred prior to the established June 1 deadline.",
            "No, because filing a lawsuit constitutes an objective manifestation of treating the repudiation as final, immediately terminating the repudiating party's power to retract.",
            "Yes, because the builder had not yet materially changed his position by securing a substitute commercial vendor.",
            "No, because written communications cannot override formal judicial filings."
        ],
        ans: 1,
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has canceled the contract, materially changed their position, OR indicated they consider the repudiation final. Filing a lawsuit is the ultimate indication of treating the repudiation as final, cutting off the right to retract."
    },
    {
        id: 20,
        topic: "Performance / Demanding Assurances (Improper Suspension)",
        fp: "Supplier agrees to deliver lumber to Builder on June 1. On May 1, Supplier clearly and unequivocally repudiates the contract. On May 15, Builder files a formal lawsuit against Supplier for total breach of contract. On May 20, Supplier emails Builder: 'I retract my repudiation; I will deliver on June 1.' Builder had not hired a replacement supplier yet.\n\nAssume Supplier never repudiated. On May 1, Builder felt anxious because of a vague news article about industry shortages. Builder emailed Supplier demanding assurances and instantly suspended his own advance payments.",
        q: "What is the legal effect of Builder immediately suspending payments?",
        opts: [
            "It is legally protected under the UCC gap-fillers.",
            "It constitutes a mutual rescission.",
            "It constitutes a breach of contract by the builder, because a party must have objectively reasonable grounds for insecurity and must grant the other party a reasonable time to respond before treating the contract as breached.",
            "It forces the supplier to immediately accelerate all pending shipments."
        ],
        ans: 2,
        exp: "Under UCC § 2-609, a party may demand adequate assurances ONLY IF they have 'reasonable grounds for insecurity' (vague anxiety isn't enough). Even if justified, they must give the other party a reasonable time (up to 30 days) to respond. Suspending performance immediately without giving a reasonable time to respond is a breach by the demanding party."
    },
    {
        id: 21,
        topic: "Performance / Anticipatory Repudiation by Conduct",
        fp: "Supplier agrees to deliver lumber to Builder on June 1. On May 1, Supplier clearly and unequivocally repudiates the contract. On May 15, Builder files a formal lawsuit against Supplier for total breach of contract. On May 20, Supplier emails Builder: 'I retract my repudiation; I will deliver on June 1.' Builder had not hired a replacement supplier yet.\n\nAssume instead that Supplier never said anything to Builder. The contract was for a specific, unique antique saw. On May 10, Builder saw Supplier sell and deliver that exact antique saw to a different customer.",
        q: "Did Supplier's action constitute an anticipatory repudiation?",
        opts: [
            "No, because the supplier did not issue a formal, written declaration of intent.",
            "Yes, but only if the secondary buyer was a recognized merchant.",
            "No, because the June 1 deadline had not yet elapsed.",
            "Yes, because voluntarily committing an affirmative act that renders actual performance objectively impossible constitutes an immediate anticipatory repudiation by conduct."
        ],
        ans: 3,
        exp: "Anticipatory repudiation can occur by words OR by conduct. If a promisor voluntarily commits an affirmative act that makes it actually or apparently impossible for them to perform their contractual duties (such as selling unique, specific goods to a third party), it operates as an immediate anticipatory repudiation."
    },
    // FACT PATTERN 8 (Q22-Q25)
    {
        id: 22,
        topic: "Remedies / Peevyhouse Doctrine (Diminution in Value)",
        fp: "Contractor builds a house for Owner. The contract requires all interior plumbing pipes to be 'Brand A'. Contractor accidentally uses 'Brand B', which are absolutely identical in quality and lifespan. Replacing the pipes would require tearing down the entire house, costing $200,000. The use of Brand B instead of Brand A reduces the total market value of the house by exactly $0. Owner sues Contractor for the $200,000 cost of completion.",
        q: "What damages will the court likely award to the Owner?",
        opts: [
            "The full $200,000 cost of completion to strictly enforce the explicit terms of the contract.",
            "Zero dollars (or nominal damages), because when a breach is incidental and the cost of completion is grossly disproportionate to the economic benefit, damages are strictly limited to the diminution in market value.",
            "A mandatory specific performance injunction.",
            "$100,000, splitting the difference under comparative fault principles."
        ],
        ans: 1, // B
        exp: "This is the classic rule from Jacob & Youngs v. Kent (and Peevyhouse). While expectation damages normally award the 'cost of completion,' if the breach is incidental/unintentional and the cost to fix it is grossly disproportionate to the actual economic benefit it would provide, courts limit damages to the 'diminution in market value' (which is $0 here) to prevent extreme economic waste."
    },
    {
        id: 23,
        topic: "Remedies / Lost Volume Seller",
        fp: "Contractor builds a house for Owner. The contract requires all interior plumbing pipes to be 'Brand A'. Contractor accidentally uses 'Brand B', which are absolutely identical in quality and lifespan. Replacing the pipes would require tearing down the entire house, costing $200,000. The use of Brand B instead of Brand A reduces the total market value of the house by exactly $0. Owner sues Contractor for the $200,000 cost of completion.\n\nAssume instead the dispute involved a major electronics Retailer with an infinite supply of standard televisions. Buyer breaches a contract to buy one for $1,000. Retailer resells it to someone else for $1,000.",
        q: "Can the Retailer recover damages from the breaching Buyer?",
        opts: [
            "No, because the successful mitigation completely erased any expectation damages.",
            "Yes, but only incidental storage fees.",
            "Yes, as a lost volume seller, the retailer is entitled to the lost profit from the breached sale because they would have made two separate sales and two profits if the buyer had not breached.",
            "No, because double recovery is strictly prohibited."
        ],
        ans: 2, // C
        exp: "Under UCC § 2-708(2), if the standard measure of damages is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Buyer not breached, Retailer would have sold TWO TVs and made TWO profits, not one."
    },
    {
        id: 24,
        topic: "Remedies / Buyer's Damages for Accepted Defective Goods (UCC 2-714)",
        fp: "Contractor builds a house for Owner. The contract requires all interior plumbing pipes to be 'Brand A'. Contractor accidentally uses 'Brand B', which are absolutely identical in quality and lifespan. Replacing the pipes would require tearing down the entire house, costing $200,000. The use of Brand B instead of Brand A reduces the total market value of the house by exactly $0. Owner sues Contractor for the $200,000 cost of completion.\n\nAssume a commercial Baker bought an oven for $10,000. It arrived defective. Baker decided to keep it anyway but notified the Seller of the defect. A flawless oven is worth $10,000. The defective oven is only worth $6,000.",
        q: "What is Baker's primary measure of damages under the UCC?",
        opts: [
            "The difference between the value of the goods as warranted and the value of the goods as accepted ($4,000), provided the buyer gave notice of the breach within a reasonable time.",
            "The full $10,000 contract price.",
            "Zero, because accepting defective goods absolutely waives all subsequent claims for financial damages.",
            "The cost to completely replace the commercial oven with a brand new unit."
        ],
        ans: 0, // A
        exp: "Under UCC § 2-714, a buyer who accepts non-conforming goods and gives timely notice of the breach may recover damages for breach of warranty. The standard measure is the difference at the time and place of acceptance between the value of the goods accepted ($6k) and the value they would have had if they had been as warranted ($10k), which is $4,000."
    },
    {
        id: 25,
        topic: "Performance / Substantial Performance vs Willful Breach",
        fp: "Contractor builds a house for Owner. The contract requires all interior plumbing pipes to be 'Brand A'. Contractor accidentally uses 'Brand B', which are absolutely identical in quality and lifespan. Replacing the pipes would require tearing down the entire house, costing $200,000. The use of Brand B instead of Brand A reduces the total market value of the house by exactly $0. Owner sues Contractor for the $200,000 cost of completion.\n\nAssume instead that the Contractor realized Brand B pipes were cheaper, and intentionally, willfully, and maliciously installed them to spite the Owner and save money.",
        q: "Is Contractor entitled to payment under the doctrine of substantial performance?",
        opts: [
            "Yes, because the pipes were identical in quality, resulting in zero diminution in value.",
            "Yes, but only after replacing the pipes at his own expense.",
            "No, because the perfect tender rule explicitly applies to all residential construction agreements.",
            "No, because a deliberate, willful, and malicious deviation from the contractual specifications generally precludes the application of substantial performance, acting as a material breach."
        ],
        ans: 3, // D
        exp: "The doctrine of substantial performance (which prevents forfeiture for minor, immaterial defects) generally requires that the breach be INNOCENT or trivial. A deliberate, willful, and malicious breach of the contract specifications is typically deemed a 'material breach,' precluding the builder from recovering under the contract's substantial performance doctrine."
    }
];