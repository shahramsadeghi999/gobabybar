// BabyBar-Contracts-42.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2)
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Formation / UCC 2-205 Firm Offer Duration",
        fp: "On February 1, an industrial lathe distributor sent a signed, written letter to a manufacturing machine shop stating: 'I offer to sell you up to five precision CNC turret lathes for $30,000 each. I promise this offer will remain open for five months from today.' The shop owner read the letter on February 3. On June 10, having received no communications from the shop owner, the distributor received an offer from an aerospace supplier to purchase all five lathes for $38,000 each. The distributor sold the lathes to the aerospace supplier. On June 15, the distributor sent a fax to the shop owner stating: 'I hereby revoke my offer of February 1.' The shop owner immediately phoned the distributor and stated: 'Your letter gave me five months; I accept your offer for two lathes.' The shop owner sued for breach of contract.",
        q: "Did the shop owner effectively accept the distributor's offer?",
        opts: [
            "Yes, because the distributor explicitly promised in a signed writing that the offer would remain open for five months.",
            "No, because under UCC § 2-205, the period of irrevocability for a firm offer cannot exceed three months, after which the unaccepted offer was revocable.",
            "Yes, because the distributor's attempt to revoke was ineffective without an affirmative refund of consideration.",
            "No, because firm offers without consideration are void ab initio under the common law pre-existing duty rule."
        ],
        ans: 1,
        exp: "(B) is the best response, because the statutory period of irrevocability under UCC § 2-205 cannot exceed three months. Under UCC § 2-205, an offer by a merchant to buy or sell goods in a signed writing giving assurance that it will be held open is irrevocable without consideration, but the period of irrevocability 'in no event may exceed three months'. If a firm offer states a duration longer than three months (such as five months), it becomes irrevocable only for the first three months (through May 1). Thereafter, the offer does not automatically terminate, but it ceases to be irrevocable and becomes an ordinary revocable offer 4]. Because the distributor effectively revoked the offer on June 15 before the shop owner attempted to accept, no contract was formed 4]. (A) is incorrect because the statutory three-month ceiling overrides the express five-month contractual term. (C) is incorrect because a firm offer requires no consideration to be held open initially, and after three months it is revocable at will. (D) is incorrect because UCC § 2-205 expressly validates firm offers without consideration."
    },
    {
        id: 2,
        topic: "Consideration / Illusory Promise & Mutuality",
        fp: "A retail department store entered into a signed written agreement with a shoe manufacturer. The agreement stated: 'Manufacturer agrees to sell to Store, and Store agrees to purchase from Manufacturer, all the athletic running shoes that Store's purchasing committee may, in its sole and absolute discretion, decide to order from Manufacturer during the upcoming calendar year, at a wholesale price of $40 per pair.' Three months later, running shoe wholesale market prices increased to $65 per pair. The store sent an order for 2,000 pairs of shoes at the $40 contract price. The manufacturer refused to fill the order, stating that it had elected to terminate the arrangement. The store sued the manufacturer for breach of contract.",
        q: "Is the manufacturer liable to the store for breach of contract?",
        opts: [
            "No, because the store's promise to buy only what it might decide in its sole discretion to order was illusory, leaving the agreement void for lack of mutuality 2].",
            "Yes, because the agreement was embodied in a signed writing with a fixed price term 2].",
            "Yes, because requirements contracts are expressly enforceable under UCC § 2-306.",
            "No, because commercial agreements for the sale of goods over $500 require consideration in cash."
        ],
        ans: 0,
        exp: "(A) is the best response, because the store made an illusory promise that provided no consideration to support the manufacturer's commitment 2]. Under Restatement (Second) of Contracts § 77, words of promise which by their terms make performance entirely optional with the 'promisor' do not constitute a promise 2]. An illusory promise reserves complete, unfettered discretion to perform or not perform (e.g., 'I will buy if my committee decides to order in its sole discretion') 2]. Unlike a valid requirements contract under UCC § 2-306 (where the buyer commits to buying all its actual good-faith needs), the store did not bind itself to buy anything at all. Because the store provided no consideration, the agreement lacked mutuality of obligation and operated merely as a revocable continuing offer, which the manufacturer lawfully revoked by refusing the order 2, 3]. (B) is incorrect because a writing and a price term cannot cure an absence of consideration 2]. (C) is incorrect because a requirements contract requires promising to buy all actual requirements in good faith, not merely what the buyer 'decides' to buy in its sole discretion 2, 3]. (D) is incorrect because consideration need not be in cash."
    },
    {
        id: 3,
        topic: "Parol Evidence / Condition Precedent to Legal Effectiveness",
        fp: "A commercial real estate investor entered into a detailed, signed written contract to purchase an office building from an owner for $2,000,000. The contract contained a standard merger clause stating: 'This writing contains the complete and exclusive agreement of the parties.' Before signing, the investor orally stated: 'Our company has an application pending for a municipal commercial parking variance; our agreement to buy this building is effective only on the condition that the city council grants that parking variance by June 1.' The owner orally replied: 'That is agreed; if the city denies the variance, the deal is completely off.' The written contract omitted any mention of the variance. On May 20, the city council denied the variance. The investor immediately notified the owner that the contract was off. The owner tendered the deed on June 1 and sued the investor for breach of contract, moving to exclude evidence of the oral agreement under the Parol Evidence Rule.",
        q: "Is evidence of the oral understanding regarding the parking variance admissible under the Parol Evidence Rule?",
        opts: [
            "No, because the written contract contained an express merger clause establishing a total integration.",
            "No, because the oral condition directly contradicts the express unconditional closing covenant in the writing.",
            "Yes, because parol evidence is admissible to prove an oral condition precedent to the legal effectiveness or existence of the entire written contract 2, 3].",
            "Yes, because commercial real estate contracts are exempt from the Parol Evidence Rule under modern equity jurisprudence 3]."
        ],
        ans: 2,
        exp: "(C) is the best response, because parol evidence is universally admissible to show that a written agreement was subject to an oral condition precedent to its legal effectiveness under Restatement (Second) of Contracts § 217 2, 3]. Under the Parol Evidence Rule, while extrinsic evidence of prior oral agreements is inadmissible to contradict or vary a completely integrated writing, an established exception applies to conditions precedent to legal effectiveness: oral testimony is admissible to demonstrate that the parties agreed that the writing would not become operative as a binding contract unless a specified condition occurred (such as obtaining financing or a zoning variance) 2, 3]. Such evidence does not vary the terms of the writing; it proves that the contract itself never came into legal existence because the condition failed 2, 3]. (A) is incorrect because a merger clause does not preclude evidence showing that the document never became legally operative 2, 3]. (B) is incorrect because the condition precedent exception bypasses the contradiction bar 2, 3]. (D) is incorrect because real estate contracts are fully subject to the Parol Evidence Rule."
    },
    {
        id: 4,
        topic: "Statute of Frauds / Suretyship Main Purpose Doctrine",
        fp: "A masonry subcontractor was performing brickwork on an apartment complex for a general contractor. The subcontractor bought its mortar and brick supplies on credit from a building supply merchant. When the subcontractor fell $8,000 behind on payments, the merchant refused to deliver additional materials to the job site. Halting masonry deliveries would have delayed the general contractor's construction schedule, subjecting the general contractor to a $50,000 delay penalty from the building owner. The general contractor orally phoned the merchant and said: 'Deliver the mortar and bricks to the job site; if the subcontractor fails to pay your $8,000 balance and the cost of new deliveries, I will personally pay the debt.' Relying on this oral promise, the merchant delivered the supplies. The subcontractor completed the work and defaulted. The general contractor refused to pay the merchant, asserting the suretyship provision of the Statute of Frauds.",
        q: "Is the general contractor's oral promise enforceable by the merchant?",
        opts: [
            "No, because a collateral promise to answer for the debt of another must be in a signed writing.",
            "No, because oral suretyship agreements are void per se under UCC § 2-201.",
            "Yes, but only to the extent of the new deliveries, excluding the pre-existing $8,000 balance 3].",
            "Yes, under the main purpose rule, because the general contractor's primary purpose in promising to pay was to protect its own pecuniary and business interests."
        ],
        ans: 3,
        exp: "(D) is the best response, because the general contractor's promise falls within the 'main purpose' (or leading object) exception to the Statute of Frauds under Restatement (Second) of Contracts § 116. Under the suretyship provision of the Statute of Frauds, a collateral promise to answer for the debt of another generally requires a signed writing. However, under the universally recognized main purpose exception, if the promisor's chief purpose in making the promise is to advance a substantial pecuniary or business interest of his own (rather than to serve as a mere benevolent accommodation), the promise is treated as an original undertaking outside the Statute of Frauds. Here, the general contractor promised to pay the supplier primarily to prevent a job shutdown that would trigger a $50,000 delay penalty against the general contractor 3]. Because the promise was motivated by advancing its own direct economic interest, it is enforceable without a writing. (A) is incorrect because it ignores the main purpose exception. (B) is incorrect because suretyship contracts are governed by common law, not UCC § 2-201. (C) is incorrect because the main purpose doctrine encompasses both pre-existing and future debts if securing performance advances the promisor's economic interest 3]."
    },
    {
        id: 5,
        topic: "Defenses / Duress & Improper Threats",
        fp: "A shipping corporation contracted in writing with a municipal port authority to dredge a harbor slip for $400,000 by October 1. The shipping corporation leased an industrial dredging vessel from an equipment company for $30,000 per month. On September 15, when the dredging was 80% complete, the equipment company's manager boarded the vessel and told the shipping corporation's superintendent: 'Unless you agree in writing right now to increase our monthly lease rate to $60,000 retroactively and pay an immediate $50,000 bonus, we will take our vessel back today.' The shipping corporation inquired of all other marine leasing firms in the region, but no substitute dredge was available within 30 days. Failure to complete dredging by October 1 would have caused the shipping corporation to forfeit a $200,000 performance bond and lose its maritime license. The shipping corporation signed the modification under protest. After completing the work, the shipping corporation refused to pay the additional sums, asserting economic duress.",
        q: "Is the lease modification enforceable against the shipping corporation?",
        opts: [
            "No, because the modification was induced by an improper threat that left the shipping corporation with no reasonable alternative 1].",
            "Yes, because commercial parties possess unrestricted freedom of contract to modify rental rates 1, 3].",
            "Yes, because the shipping corporation signed the writing after consulting its internal business interests 1].",
            "No, because lease modifications exceeding $500 are void without fresh consideration under UCC Article 2 1]."
        ],
        ans: 0,
        exp: "(A) is the best response, because the modification was procured through actionable economic duress under Restatement (Second) of Contracts §§ 175 and 176 and Austin Instrument, Inc. v. Loral Corp. 1]. A contract or modification is voidable for economic duress if a party's assent is induced by an improper threat that leaves the victim no reasonable alternative 1]. Threatening to breach an existing contract without legitimate commercial justification constitutes an improper threat 1]. Because no substitute dredge was obtainable in the market, and the shipping corporation faced forfeiture of a $200,000 bond and revocation of its license, it had no reasonable alternative but to capitulate 1]. Assent was coerced, rendering the modification unenforceable 1]. (B) is incorrect because freedom of contract is bounded by the defense of duress 1]. (C) is incorrect because signing under severe coercive pressure without practical alternatives is not legally voluntary 1]. (D) is incorrect because equipment vessel leasing is governed by common law / UCC Article 2A, but non-enforceability turns on duress rather than the pre-existing duty rule 1]."
    },
    {
        id: 6,
        topic: "Performance / Right to Cure within Contract Time (UCC 2-508(1))",
        fp: "An industrial fabricator entered into a written contract with an agricultural chemical distributor to supply 200 high-pressure forged steel hose couplings for $10,000, with delivery scheduled on or before October 1. On September 15, the fabricator delivered 200 couplings to the distributor. The distributor inspected the couplings on September 16 and discovered that the threads were machined to a metric pitch rather than the American standard pitch specified in the blueprints. The distributor immediately rejected the shipment and notified the fabricator in writing. On September 17, the fabricator sent a certified letter to the distributor stating: 'We have 200 conforming American standard threaded couplings in stock and will deliver them to your warehouse by September 30.' The distributor replied: 'You failed to make perfect tender; your breach allows us to cancel the contract, and we will purchase couplings elsewhere.' Conforming couplings were tendered on September 30, but the distributor refused delivery.",
        q: "Did the distributor have the legal right to cancel the contract on September 17?",
        opts: [
            "Yes, because under the UCC perfect tender rule, any nonconformity entitles the buyer to cancel the agreement immediately.",
            "Yes, because the tender of metric couplings constituted an anticipatory repudiation that discharged the buyer.",
            "No, because under UCC § 2-508(1), the seller had an absolute right to cure within the agreed contract period upon seasonable notice.",
            "No, because the difference in thread pitch did not constitute a material breach under common law substantial performance."
        ],
        ans: 2,
        exp: "(C) is the best response, because the seller satisfied all statutory requirements to cure within the contract time under UCC § 2-508(1). Under UCC § 2-508(1), where any tender or delivery by the seller is rejected because it is non-conforming and the agreed time for performance has not yet expired, the seller may seasonably notify the buyer of his intention to cure and may then within the contract time make a conforming delivery. The contract performance date was October 1. The initial rejection occurred on September 16. The seller gave prompt, seasonable notice of intention to cure on September 17 and tendered conforming goods on September 30—before the contractual deadline expired. The seller's statutory right to cure within the contract window overrides the buyer's attempt to cancel under the perfect tender rule. (A) is incorrect because the perfect tender rule (UCC § 2-601) is expressly subject to the seller's right to cure under § 2-508. (B) is incorrect because tendering nonconforming goods is not an anticipatory repudiation when the seller seasonably exercises the right to cure. (D) is incorrect because sales of goods are governed by the perfect tender rule, not common law substantial performance, but the right to cure limits cancellation."
    },
    {
        id: 7,
        topic: "Remedies / Buyer's Incidental and Consequential Damages (UCC 2-715)",
        fp: "A commercial dairy farm entered into a written contract with an agricultural machinery dealer to purchase a commercial automated milk pasteurizing system for $80,000, delivery on April 1. At the time of contracting, the farmer explained to the dealer: 'Our state dairy permit requires that raw milk be pasteurized within 24 hours of milking; if the machine is not delivered by April 1, we will have to dump $2,000 of milk daily and pay a mobile pasteurizer $500 per day to preserve our retail bottling line.' The dealer failed to deliver the machine on April 1. The farmer made diligent, reasonable efforts to find a substitute machine, but none was available for four weeks. The farmer paid $14,000 ($500 per day for 28 days) to a mobile pasteurizer service, dumped $6,000 of spoiled milk before the mobile service arrived, and spent $1,000 in long-distance trucking fees to transport bottled milk to a secondary chilling facility. The dealer delivered the machine on April 29. The farmer accepted delivery and sued the dealer for $21,000 in incidental and consequential damages.",
        q: "Is the dairy farmer entitled to recover the $21,000 under UCC Article 2?",
        opts: [
            "No, because acceptance of late goods waives all claims for delay damages under UCC § 2-607.",
            "No, because consequential damages cannot exceed 10% of the total purchase price of the machinery.",
            "Yes, but only under the doctrine of promissory estoppel to prevent unjust enrichment 1, 3].",
            "Yes, because the expenses were reasonable incidental and consequential damages foreseeable to the seller at the time of contracting."
        ],
        ans: 3,
        exp: "(D) is the best response, because the expenditures represent recoverable incidental and consequential damages under UCC §§ 2-714 and 2-715. Under UCC § 2-715(1), incidental damages include expenses reasonably incurred in inspection, receipt, transportation, care, and custody of goods rightfully rejected, and any commercially reasonable charges in connection with effecting cover or delay 4]. Under UCC § 2-715(2)(a), consequential damages include any loss resulting from general or particular requirements and needs of which the seller at the time of contracting had reason to know and which could not reasonably be prevented by cover or otherwise. The farmer informed the dealer at contract formation of the specific dairy permit regulations and the exact daily losses that would occur upon delay 4]. Because the losses were foreseeable and the farmer reasonably mitigated by hiring the mobile pasteurizer, the milk dumping ($6,000), mobile service ($14,000), and extra trucking ($1,000) are fully recoverable. (A) is incorrect because acceptance of late goods does not waive breach damages if seasonable notice is given under UCC § 2-607(3)(a). (B) is incorrect because the UCC places no arbitrary percentage cap on consequential damages. (C) is incorrect because recovery is based on standard statutory contract damages, not promissory estoppel 1, 3]."
    },
    {
        id: 8,
        topic: "Formation / Mailbox Rule & Crossing Communications",
        fp: "On May 1, a cattle rancher mailed a signed, written offer to a meat packer: 'I offer to sell you 100 steers at $1,500 per head, delivery on July 1. This offer remains open until May 15.' The packer received the letter on May 4. On May 8, the packer mailed a letter stating: 'I reject your offer.' On May 9, realizing cattle prices were climbing, the packer sent a telegram stating: 'Disregard my letter of May 8; I hereby accept your offer of May 1 for 100 steers.' The rancher received the telegram at 11:00 AM on May 10. The rancher received the mailed rejection letter at 2:00 PM on May 11. The rancher refused to deliver the cattle, asserting that the rejection letter dispatched on May 8 terminated the offer upon mailing.",
        q: "Was a binding contract formed between the rancher and the meat packer?",
        opts: [
            "Yes, because when a rejection is dispatched before an acceptance, whichever communication is received first controls.",
            "No, because under the mailbox rule, a rejection is effective immediately upon dispatch.",
            "No, because the packer's telegram constituted an invalid revocation of a prior executed rejection.",
            "Yes, because acceptances are effective upon dispatch, overriding any prior written rejections."
        ],
        ans: 0,
        exp: "(A) is the best response, because under Restatement (Second) of Contracts § 40, when an offeree dispatches a rejection and subsequently dispatches an acceptance, the mailbox rule does not apply, and whichever communication is received first governs. Under the general mailbox rule (Restatement § 63(a)), an acceptance is effective upon dispatch. However, under Restatement § 40, where an offeree sends a rejection followed by an acceptance, the mailbox rule is suspended. The acceptance is operative ONLY if the offeror receives the acceptance BEFORE he receives the rejection. If the acceptance is received first, a contract is formed at the moment of receipt. Because the rancher received the acceptance telegram on May 10, a full day before receiving the rejection letter on May 11, a binding contract was formed upon receipt on May 10. (B) is incorrect because rejections are never effective upon dispatch; they are effective only upon actual receipt. (C) is incorrect because a dispatched rejection can be superseded if an acceptance overtakes it and arrives first. (D) is incorrect because dispatch of a prior rejection suspends the mailbox rule."
    },
    {
        id: 9,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A municipal transit authority entered into a written contract with an independent general contractor to construct an underground passenger subway station on a downtown street for $20,000,000. The contract provided that construction would begin on March 1 and be completed within twenty-four months. A private retail bookstore operated directly across the street from the planned station entrance. In anticipation of the massive pedestrian traffic the subway station would generate, the bookstore owner incurred $40,000 in non-refundable expenses to remodel his store and expand inventory. Due to the general contractor's financial insolvency and gross operational mismanagement, the contractor completely abandoned the subway construction project after six months. The transit authority terminated the contract. The bookstore owner sued the general contractor for breach of contract, seeking to recover the $40,000 remodeling expenses and $100,000 in anticipated profits.",
        q: "Can the bookstore owner recover against the general contractor for breach of contract?",
        opts: [
            "Yes, because the bookstore owner was within the foreseeable zone of economic benefit created by the municipal contract.",
            "Yes, because government construction contracts create third-party rights in all local municipal taxpayers.",
            "No, because the bookstore owner was an incidental beneficiary who possessed no enforceable rights under the contract.",
            "No, because private parties cannot maintain breach of contract actions against independent municipal contractors without joining the city 3]."
        ],
        ans: 2,
        exp: "(C) is the best response, because the bookstore owner is merely an incidental beneficiary without legal standing to enforce the government contract under Restatement (Second) of Contracts §§ 302 and 313. Third parties may enforce contracts only if they are INTENDED beneficiaries—that is, if recognition of a right to performance is appropriate to effectuate the intention of the parties and the circumstances indicate that the promisee intended to give the beneficiary the benefit of the promised performance. Under Restatement § 313, members of the public or neighboring commercial property owners who benefit economically from public infrastructure projects are presumed to be INCIDENTAL beneficiaries unless the contract explicitly manifests an intention to create direct liability to them. Because the transit authority and contractor did not intend to confer direct enforceable rights on neighboring shops, the bookstore owner cannot recover. (A) is incorrect because foreseeable economic benefit does not transform an incidental beneficiary into an intended beneficiary. (B) is incorrect because taxpayers are incidental beneficiaries of public contracts. (D) is incorrect because non-recovery is grounded on beneficiary classification, not joinder rules 3]."
    },
    {
        id: 10,
        topic: "Excuse / Impossibility Due to Supervening Destruction",
        fp: "A master cabinetmaker entered into a written contract with a homeowner to construct and install custom built-in walnut bookshelves and wainscoting in the library of the owner's historic residence for $30,000, payable upon completion on September 1. The cabinetmaker spent two months measuring, milling, and assembling the custom walnut paneling at his workshop. On August 20, the cabinetmaker transported the paneling to the residence and installed 75% of the millwork in the library. That evening, a freak lightning storm ignited a fire in the attic of the residence. The fire burned the house to the ground, destroying the residence and all installed walnut millwork without fault of either party. The cabinetmaker had spent $18,000 on labor and materials and had received no payments. The cabinetmaker sued the homeowner's estate for $18,000 in restitution.",
        q: "Is the cabinetmaker entitled to recover the $18,000 from the homeowner's estate?",
        opts: [
            "No, because the total destruction of the house discharged both parties from the contract, leaving accrued losses where they fell 1, 2].",
            "No, because the homeowner derived no ultimate benefit from the millwork since the house was completely destroyed 2, 3].",
            "Yes, because the risk of loss in construction contracts remains with the real property owner at all times as a matter of law 1, 2].",
            "Yes, because under modern contract law, a contractor whose performance is discharged by impossibility is entitled to restitution for the reasonable value of the performance incorporated into the structure prior to destruction 1, 2, 3]."
        ],
        ans: 3,
        exp: "(D) is the best response, because under Restatement (Second) of Contracts § 377, a party whose performance is discharged by impossibility is entitled to restitution for the reasonable value of the benefit conferred prior to the discharging event 1, 2, 3]. When the existing structure that is the subject of a repair or improvement contract is destroyed without fault, both parties are discharged from further executory obligations under the doctrine of impossibility 2, 3]. Under modern contract principles (rejecting the ancient rule of Chandler v. Webster), work and materials that have been physically incorporated into the owner's building prior to destruction are deemed a benefit conferred upon the owner at the time of installation 1, 2, 3]. The cabinetmaker installed 75% of the custom millwork into the library; he is entitled to recover the reasonable value of that partial performance in quantum meruit to prevent unjust forfeiture 1, 2, 3]. (A) is incorrect because modern law grants restitution rather than leaving losses where they fell 1, 2, 3]. (B) is incorrect because benefit is measured at the time performance is rendered, not after subsequent casualty 2, 3]. (C) is incorrect because new construction contracts place the risk on the builder; repair contracts of existing buildings place the risk on the owner, supporting restitution 2, 3]."
    },
    {
        id: 11,
        topic: "Formation / Bilateral vs Unilateral Offer Ambiguity",
        fp: "An elderly homeowner needed his roof cleared of heavy fallen leaves and tree limbs. The homeowner mailed a signed letter to a neighborhood college student: 'I will pay you $300 if you clear the leaves and branches from my roof and gutters. If you agree, you can do the work on Saturday.' The student received the letter on Thursday. On Friday afternoon, the student purchased a roof harness and safety rope for $50. On Friday evening, the student telephoned the homeowner and left a voicemail message on the homeowner's answering machine: 'I received your letter and accept your offer; I will be at your home tomorrow morning at 8:00 AM to clean the roof.' The homeowner did not listen to his messages. At 7:00 AM on Saturday, before the student arrived, the homeowner hired a commercial tree service crew that drove by and posted a sign on his gate: 'Roof already cleared; deal off.' When the student arrived at 8:00 AM with his equipment, the homeowner refused to let him onto the property. The student sued for breach.",
        q: "Did the student effectively accept the homeowner's offer on Friday evening?",
        opts: [
            "Yes, because under Restatement (Second) of Contracts § 32, in case of doubt an offer is interpreted as inviting acceptance either by a promise to perform or by performance 1, 3, 4].",
            "No, because the homeowner's offer invited acceptance exclusively by complete performance 1, 3, 4].",
            "No, because telephonic voicemail acceptances are void under the Statute of Frauds 1, 3].",
            "Yes, but only under promissory estoppel to recover the $50 spent on safety ropes 1, 3]."
        ],
        ans: 0,
        exp: "(A) is the best response, because under Restatement (Second) of Contracts § 32, where an offer is ambiguous regarding the mode of acceptance, the offeree may accept either by promising to perform or by performing 1, 3, 4]. Unless an offer unambiguously states that it can be accepted ONLY by complete performance (a pure unilateral contract), contract law presumes that an offer invites acceptance by any reasonable medium, including a return promise (forming a bilateral contract) 1, 3, 4]. The homeowner's letter stated 'If you agree, you can do the work on Saturday,' which did not explicitly mandate that acceptance could occur only by physical performance. By leaving a voicemail promising to perform, the student accepted the offer and formed a binding bilateral contract before the homeowner attempted to revoke on Saturday morning. (B) is incorrect because the offer did not unambiguously restrict acceptance to performance 1, 3, 4]. (C) is incorrect because service contracts performable within one year are not within the Statute of Frauds 1, 2]. (D) is incorrect because an enforceable contract was formed, entitling the student to expectation damages rather than mere reliance expenses 1, 3]."
    },
    {
        id: 12,
        topic: "Remedies / Specific Performance in Land Contracts",
        fp: "A buyer entered into a signed written contract to purchase a 50-acre tract of undeveloped rural mountain timberland from a seller for $150,000, closing scheduled for July 1. On June 15, the seller sent an email to the buyer: 'I have decided that land prices are rising; I will not convey the property to you on July 1.' The buyer tendered the full $150,000 cash purchase price on July 1, but the seller refused to execute or deliver the deed. The buyer brought an action in equity against the seller seeking a decree of specific performance. The seller moved to dismiss, demonstrating that there were four other 50-acre parcels of comparable timberland with identical topography and road access available for sale on the same mountain for $150,000, arguing that money damages provided an adequate legal remedy.",
        q: "Is the buyer entitled to a decree of specific performance?",
        opts: [
            "No, because the availability of four comparable parcels nearby demonstrates that money damages are an adequate remedy at law.",
            "Yes, because under equity jurisprudence, every parcel of real property is conclusively presumed unique as a matter of law, rendering legal damages inadequate.",
            "No, because specific performance is an extraordinary equitable remedy restricted to improved residential dwellings.",
            "Yes, but only if the buyer establishes that the seller acted with bad-faith malice in repudiating the contract."
        ],
        ans: 1,
        exp: "(B) is the best response, because every parcel of real property is deemed unique as a matter of law, entitling a purchaser to specific performance under Restatement (Second) of Contracts § 360. Specific performance is granted when money damages are inadequate to put the injured party in the position performance would have provided 2, 3, 4]. In land sale contracts, equity conclusively presumes that land is unique because of its fixed geographic coordinates, topography, and individual characteristics; therefore, damages are inadequate as a matter of law. The availability of neighboring comparable tracts does not displace this conclusive presumption. The buyer is entitled to specific performance as a matter of course. (A) is incorrect because the availability of substitute land does not defeat specific performance in real property sales. (C) is incorrect because specific performance applies equally to unimproved land and commercial property. (D) is incorrect because specific performance requires a valid contract and an inadequate legal remedy; malice is not required."
    },
    {
        id: 13,
        topic: "Formation / Revocation Prior to Dispatch of Acceptance",
        fp: "On September 1, a coin dealer mailed a signed, written letter to an antique collector: 'I offer to sell you an uncirculated 1881 Morgan Silver Dollar for $2,000 cash. This offer will remain open until September 15.' The collector received the letter on September 3. On September 8, the dealer learned that wholesale silver prices had surged, telephoned the collector at 10:00 AM, and stated: 'I hereby revoke my offer to sell the Morgan Dollar.' The collector protested, hung up, and immediately placed a signed, written letter of acceptance in a mailbox at 11:00 AM on September 8. The dealer received the collector's letter on September 10, but refused to deliver the coin.",
        q: "Was a binding contract formed between the dealer and the collector?",
        opts: [
            "Yes, because the dealer's letter was an irrevocable firm offer under UCC § 2-205.",
            "No, because the collector paid no consideration to hold the offer open, and the dealer communicated a revocation prior to acceptance.",
            "Yes, because the collector dispatched his acceptance within the September 15 deadline stated in the offer.",
            "No, because revocations by merchants must be delivered in a signed writing."
        ],
        ans: 1,
        exp: "(B) is the best response, because the offer lacked consideration and was effectively revoked before acceptance. While UCC § 2-205 permits a merchant to make an irrevocable firm offer in a signed writing without consideration, the statute requires that the writing 'by its terms gives assurance that it will be held open'. Stating that an offer 'will remain open until September 15' constitutes a firm offer under the UCC. HOWEVER, if we assume this transaction was between non-merchants or that the dealer was an ordinary individual, an option requires consideration. But even between merchants, under common law rules (applicable to private party coin collectors), an offer is revocable at will prior to acceptance unless supported by consideration. When the dealer called at 10:00 AM and revoked, the offer terminated immediately. The mailing of an acceptance an hour later at 11:00 AM was ineffective. (A) is incorrect because an offer lacking consideration can be revoked if not a statutory firm offer. (C) is incorrect because a deadline in an offer does not make it irrevocable without consideration or firm offer status. (D) is incorrect because oral revocations are fully effective."
    },
    {
        id: 14,
        topic: "Performance / Time Is of the Essence & Waiver",
        fp: "An industrial mechanical contractor entered into a written contract with an aerospace manufacturing plant to install a high-pressure pneumatic test cell for $120,000, payable upon completion on October 1. The contract contained the clause: 'Time is of the essence. Completion on or before October 1 is an express condition precedent to Owner's obligation to pay.' On September 15, the contractor notified the plant director that due to delivery delays for specialized pressure valves, installation would not be complete until October 8. The plant director orally replied: 'That will be fine; October 8 fits our engineering schedule.' In reliance on this statement, the contractor did not incur a $6,000 rush-overtime fee for night shifts. The contractor completed the installation on October 8. The plant director accepted the installation, but refused to pay the $120,000 fee, citing the failure of the express October 1 condition.",
        q: "Is the contractor entitled to recover the $120,000 contract price?",
        opts: [
            "No, because express time-of-the-essence conditions cannot be waived orally under the Statute of Frauds 1, 2].",
            "No, because an oral waiver of an express condition is void under the Parol Evidence Rule 1, 3].",
            "Yes, because a seven-day delay in a construction contract can never constitute a material breach 1, 3].",
            "Yes, because the plant director orally waived the timing condition, and the waiver became irrevocable upon the contractor's detrimental reliance 1, 2]."
        ],
        ans: 3,
        exp: "(D) is the best response, because the plant director waived the express timing condition, and the waiver became irrevocable upon the contractor's detrimental reliance under Restatement (Second) of Contracts § 84 1, 2]. A party who is the beneficiary of an express condition precedent (such as a delivery deadline in a time-is-of-the-essence contract) may waive that condition by words or conduct 1, 2]. While an executory waiver made without consideration can ordinarily be retracted before the time for the condition has expired, it cannot be retracted if the other party has materially and detrimentally changed position in reliance on the waiver 1, 2]. The contractor relied on the oral waiver by foregoing a $6,000 rush-overtime expenditure and scheduling completion for October 8 1, 2]. The waiver became irrevocable, and the contractor is entitled to the full $120,000 contract price 1, 2]. (A) is incorrect because an express condition can be waived orally without a signed writing 1, 2]. (B) is incorrect because the Parol Evidence Rule applies only to prior or contemporaneous negotiations, not subsequent waivers 1, 3]. (C) is incorrect because substantial performance cannot override an express condition; recovery rests on waiver 1, 2]."
    },
    {
        id: 15,
        topic: "Defenses / Unconscionability (Procedural & Substantive)",
        fp: "An uneducated, non-English-literate consumer visited a retail furniture store. A salesperson rushed the consumer into signing a pre-printed, standard-form installment contract to purchase an ordinary living room sofa for $4,000 (which had a retail fair market value of $600). The salesperson did not explain the terms. Buried on the back of the contract in microscopic, faint 4-point type was a cross-collateralization clause providing that the store retained a security interest in all household goods previously purchased from the store until all future purchases were paid in full. When the consumer defaulted on a $50 payment on the sofa, the store sought to repossess all the consumer's household furniture, which had been previously paid off. The consumer sued to void the contract.",
        q: "What doctrine affords the consumer the strongest basis to invalidate the contract?",
        opts: [
            "Mutual mistake of fact 1].",
            "Lack of contractual capacity 1].",
            "Unconscionability, because the agreement involved both procedural unfairness in bargaining and substantive oppression in its terms 1, 3].",
            "Frustration of purpose 1]."
        ],
        ans: 2,
        exp: "(C) is the best response, because the contract demonstrates both procedural and substantive unconscionability under UCC § 2-302 and Williams v. Walker-Thomas Furniture Co. 1, 3]. Under UCC § 2-302, a court may refuse to enforce a contract or any clause if it was unconscionable at the time it was made 1, 3]. Unconscionability requires showing procedural unconscionability (unfairness in the bargaining process, including fine print, rushing, language barriers, and gross inequality of bargaining power) and substantive unconscionability (overly harsh, one-sided, oppressive terms, such as excessive price disparities and cross-collateralization clauses) 1, 3]. Charging $4,000 for a $600 sofa with a cross-collateralization clause in 4-point type to an uneducated consumer is classic unconscionability 1, 3]. (A) is incorrect because there was no mistake regarding existing facts 1]. (B) is incorrect because lack of education or financial sophistication does not constitute legal incapacity (such as infancy or mental incompetency) 1]. (D) is incorrect because no supervening event destroyed the purpose of buying a sofa 1]."
    },
    {
        id: 16,
        topic: "Remedies / Expectation Damages in Construction (Owner Breach)",
        fp: "A building contractor entered into a written contract with a landowner to construct a custom vacation cabin for $200,000. The contractor calculated its total anticipated labor and materials costs at $160,000, expecting a net profit of $40,000 upon completion. After the contractor had completed the foundation and framing, incurring $60,000 in actual expenditures on labor and materials, the landowner unjustifiably repudiated the contract and ordered the contractor to stop work immediately. The contractor stopped work. The market value of the partial structure was $50,000. The contractor sued the landowner for breach of contract.",
        q: "What amount of expectation damages is the contractor entitled to recover?",
        opts: [
            "$100,000, representing the expenditures incurred ($60,000) plus the lost profit ($40,000).",
            "$60,000, representing the actual expenditures incurred prior to the breach.",
            "$40,000, representing the lost profit only.",
            "$140,000, representing the contract price minus the value of the partial structure."
        ],
        ans: 0,
        exp: "(A) is the best response, because the standard expectation damage formula for a contractor when the owner breaches mid-performance is expenditures incurred plus lost profit under Restatement (Second) of Contracts § 347. Expectation damages place the injured party in the position he would have occupied had the contract been fully performed 2, 3, 4]. The standard formula for an uncompleted construction contract is: Costs Incurred to Date ($60,000) + Total Expected Profit on the Contract ($40,000) - Payments Received ($0) = $100,000. Awarding $100,000 reimburses the contractor for out-of-pocket expenses while delivering the benefit of the bargain ($40,000 profit). (B) is incorrect because it reflects reliance damages, omitting the $40,000 lost profit. (C) is incorrect because awarding profit alone would force the contractor to absorb $60,000 in uncompensated construction costs. (D) is incorrect because an owner's breach damages are not measured by subtracting partial market value from contract price."
    },
    {
        id: 17,
        topic: "Terms / Battle of the Forms Between Non-Merchants (UCC 2-207)",
        fp: "A college student placed a classified advertisement offering to sell her personal acoustic guitar for $400. An accountant saw the ad and mailed a signed letter: 'I will buy your acoustic guitar for $400 cash, delivery on Saturday.' The student mailed back a signed written reply: 'I accept your offer to buy my guitar for $400 cash, delivery on Saturday. You must provide a hard-shell protective travel case for transport.' Neither party deals in musical instruments, nor does either hold themselves out as having specialized knowledge of guitars. The student delivered the guitar on Saturday without a case. The accountant refused to pay, claiming that the student breached the contract by failing to supply a hard-shell case.",
        q: "Did the hard-shell case term become part of the contract under UCC § 2-207?",
        opts: [
            "Yes, because under UCC § 2-207, additional terms in an acceptance automatically become part of the contract unless objected to 1, 3].",
            "Yes, because the accountant failed to object to the case requirement within ten days 1, 3].",
            "No, because when at least one party is not a merchant, additional terms in an acceptance are treated merely as proposals that require express assent 1, 3, 4].",
            "No, because the student's reply was a counteroffer under the mirror image rule 1, 3]."
        ],
        ans: 2,
        exp: "(C) is the best response, because under UCC § 2-207(2), when at least one party to a sales contract is a non-merchant, additional terms in an acceptance are treated merely as proposals for addition to the contract and do NOT become part of the contract unless the offeror expressly assents 1, 3, 4]. The automatic inclusion rule of UCC § 2-207(2) applies strictly 'between merchants' 1, 3, 4]. Here, both the college student and the accountant are consumers/non-merchants regarding musical instruments. Therefore, the student's hard-shell case requirement was merely a proposal that dropped out when the accountant did not expressly agree to it 1, 3, 4]. A contract was formed on the accountant's original terms ($400, no case). (A) is incorrect because the automatic inclusion rule applies exclusively between merchants 1, 3, 4]. (B) is incorrect because the 10-day failure to object rule applies to confirmatory memos between merchants under UCC § 2-201(2), not acceptance terms involving consumers 1, 2, 3]. (D) is incorrect because UCC § 2-207(1) forms a contract on the writings despite additional terms 1, 3, 4]."
    },
    {
        id: 18,
        topic: "Consideration / Compromise of Disputed or Doubtful Claims",
        fp: "An architect completed architectural blueprints for a homeowner's kitchen addition and submitted an invoice for $10,000. The homeowner erroneously, but in good faith, believed that the architect had miscalculated the square footage and that the plans were defective under local zoning setbacks. The homeowner orally offered to pay $7,000 in full settlement of the claim. The architect orally accepted the offer, and the homeowner immediately paid $7,000 cash. A week later, a municipal zoning inspector verified that the architect's plans were completely flawless and met all setback requirements. The architect sued the homeowner for the remaining $3,000.",
        q: "Will the architect prevail in his action to recover the $3,000?",
        opts: [
            "Yes, because payment of $7,000 cannot furnish consideration for a liquidated debt of $10,000 under the pre-existing duty rule.",
            "Yes, because the oral modification of a written architectural contract is void under the Statute of Frauds 1, 3].",
            "No, because the architect's acceptance of the partial payment constituted a novation 1, 3].",
            "No, because the compromise of an unliquidated claim disputed in good faith furnishes valid consideration, operating as an accord and satisfaction upon payment 1, 2, 3, 4]."
        ],
        ans: 3,
        exp: "(D) is the best response, because compromising a claim disputed in good faith constitutes valid consideration under Restatement (Second) of Contracts § 74 2, 3, 4]. Under the pre-existing duty rule (Foakes v. Beer), partial payment of an undisputed, liquidated debt cannot serve as consideration to discharge the balance. However, an established exception applies where the claim is unliquidated or subject to a bona fide, good-faith dispute 2, 3, 4]. The surrender of a claim or defense that is doubtful because of uncertainty as to the facts or law constitutes consideration if the party asserting it acts in honest good faith 2, 3, 4]. Because the homeowner honestly believed the plans were defective, the surrender of that defense supplied consideration for the architect's agreement to accept $7,000. Payment completed an accord and satisfaction, discharging the debt 1, 3, 4]. (A) is incorrect because the good-faith dispute makes the debt unliquidated, bypassing the pre-existing duty rule. (B) is incorrect because architectural contracts are not within the Statute of Frauds, and full payment executed the agreement 1, 3]. (C) is incorrect because an accord and satisfaction between existing parties is not a novation 1, 3]."
    },
    {
        id: 19,
        topic: "Formation / Firm Offers Without Consideration (UCC 2-205 Non-Merchant)",
        fp: "An accountant inherited an antique collection of rare historical law books from his grandfather. An attorney offered to buy the books. On November 1, the accountant signed and delivered a written letter to the attorney: 'I offer to sell you my grandfather's law book collection for $5,000 cash. I promise to hold this offer open until December 1.' The accountant had never bought or sold rare books previously. On November 15, an antique dealer offered the accountant $7,000 for the books. The accountant telephoned the attorney and stated: 'I revoke my offer of November 1.' On November 20, the attorney tendered $5,000 cash and demanded the books. The attorney sued for breach of contract.",
        q: "Was the accountant's revocation on November 15 legally effective?",
        opts: [
            "Yes, because the accountant was not a merchant with respect to rare books, rendering the promise to hold the offer open revocable without consideration 2, 3].",
            "No, because the accountant signed a written firm offer promising to hold the offer open until December 1 2, 3].",
            "No, because under the common law, written offers cannot be revoked orally 2].",
            "Yes, because under UCC § 2-205, firm offers are restricted to transactions exceeding $10,000 2, 3]."
        ],
        ans: 0,
        exp: "(A) is the best response, because UCC § 2-205 firm offers apply exclusively to offers made by MERCHANTS 2, 3]. Under UCC § 2-205, an offer to buy or sell goods in a signed writing assuring it will be held open is irrevocable without consideration ONLY IF the offer is made by a 'merchant' 2, 3]. Under UCC § 2-104(1), a merchant is a person who deals in goods of the kind or otherwise by his occupation holds himself out as having knowledge or skill peculiar to the practices or goods involved 2]. The accountant was not in the business of selling rare books and possessed no specialized professional expertise in antique volumes 2, 3]. Because the accountant was not a merchant, UCC § 2-205 was inapplicable, and the offer was an ordinary common law offer revocable at will prior to acceptance in the absence of consideration 2, 3]. The revocation on November 15 terminated the offer 2, 3]. (B) is incorrect because firm offer irrevocability requires merchant status 2, 3]. (C) is incorrect because ordinary offers can be revoked orally 2]. (D) is incorrect because UCC § 2-205 contains no dollar floor 2, 3]."
    },
    {
        id: 20,
        topic: "Statute of Frauds / One-Year Provision Impossibility Test",
        fp: "On June 1, an elderly homeowner orally agreed to hire a live-in personal caregiver to provide daily domestic and nursing care for the homeowner 'for the rest of the homeowner's life.' In exchange, the homeowner orally promised to pay the caregiver $3,000 per month and promised that upon the homeowner's death, the homeowner's estate would pay the caregiver an additional lump-sum bonus of $50,000. The caregiver moved into the residence and performed services satisfactorily for nine months, until the homeowner died. When the caregiver demanded the $50,000 bonus, the executor of the estate refused to pay, raising the Statute of Frauds on the ground that a lifetime employment agreement cannot be performed within one year.",
        q: "Is the oral agreement enforceable against the homeowner's estate?",
        opts: [
            "No, because contracts for lifetime personal care fall within the one-year provision of the Statute of Frauds as a matter of law 2].",
            "No, because promises to pay money out of a probate estate must be executed in a formal writing under seal 2, 3].",
            "Yes, because the contract was capable of full performance within one year from the date it was made if the homeowner had died within that period 2, 3].",
            "Yes, but only if the caregiver proves that the homeowner executed a written codicil to his will."
        ],
        ans: 2,
        exp: "(C) is the best response, because an agreement measured by a human life is capable of full performance within one year under Restatement (Second) of Contracts § 130 2, 3]. Under the one-year provision of the Statute of Frauds, an oral agreement is unenforceable ONLY IF it is objectively impossible, by its terms, to be fully performed within one year from the date of formation 2, 3]. If there is any possibility, however remote, that full contractual performance could be completed within one year, the contract falls OUTSIDE the Statute of Frauds 2, 3]. Contracts measured by a person's life (such as 'to care for me for life' or 'employment for life') are not within the Statute of Frauds because the person could die within one year, thereby fully completing the contract according to its express terms 2, 3]. The oral agreement is fully enforceable 2, 3]. (A) is incorrect because lifetime contracts are outside the one-year provision 2, 3]. (B) is incorrect because common law seals are abolished and do not govern probate creditor claims 1, 2]. (D) is incorrect because contract enforcement does not depend on will formalities."
    },
    {
        id: 21,
        topic: "Performance / Express Conditions & Avoidance of Forfeiture",
        fp: "A commercial real estate developer contracted in writing with a general contractor to construct a six-story hotel for $10,000,000. The contract provided that the developer would retain 10% ($1,000,000) until final completion. The agreement contained the following clause: 'It is an express condition precedent to Owner's obligation to release the final retainage that Contractor shall submit all final subcontractor mechanics' lien release waivers by December 1.' The contractor completed the hotel on November 15 in full compliance with plans. The contractor secured lien releases from 49 of its 50 subcontractors. The remaining subcontractor, who was owed $2,000 for electrical trim, was on an overseas climbing expedition and could not be contacted to sign a waiver. The contractor offered to deposit $10,000 in escrow to indemnify the developer against any lien. The developer refused to release any part of the $1,000,000 retainage, citing the express condition.",
        q: "How will a court in modern contract law treat the contractor's claim for the retainage?",
        opts: [
            "The court will strictly enforce the express condition precedent and deny all recovery to the contractor.",
            "The court will hold that the contractor committed an anticipatory repudiation by failing to secure all 50 waivers.",
            "The court will discharge both parties under the doctrine of commercial impracticability.",
            "The court will excuse the non-occurrence of the condition to prevent a disproportionate forfeiture under Restatement (Second) of Contracts § 229."
        ],
        ans: 3,
        exp: "(D) is the best response, because a court will excuse the non-occurrence of an express condition to prevent disproportionate forfeiture under Restatement (Second) of Contracts § 229. Under Restatement § 229, 'To the extent that the non-occurrence of a condition would cause disproportionate forfeiture, a court may excuse the non-occurrence of that condition unless its occurrence was a material part of the agreed exchange'. Forfeiture occurs when a party who has fully performed substantial work loses the right to compensation due to an immaterial technical failure. The contractor built a $10,000,000 hotel and secured 49 of 50 waivers. Withholding $1,000,000 over an absent $2,000 subcontractor waiver where escrow indemnification was tendered creates an extreme, gross forfeiture. Because obtaining the final waiver was not the core material exchange of building the hotel, equity will excuse the condition and award the retainage minus an escrow holdback. (A) is incorrect because equity will not enforce strict compliance where it causes disproportionate forfeiture. (B) is incorrect because an immaterial technical omission is not an anticipatory repudiation. (C) is incorrect because impracticability applies to unexpected performance burdens, not retainage excuses."
    },
    {
        id: 22,
        topic: "Terms / Course of Dealing Supplementing Integration (UCC 1-303)",
        fp: "A wholesale commercial printing company entered into a written contract to purchase 500 rolls of industrial newsprint paper from a paper mill, using the same pre-printed standard form contract the parties had executed on ten previous occasions over the past three years. The written contract provided: 'Payment terms: Net 30 days. This document contains the complete and exclusive agreement of the parties.' On all ten previous transactions, the printer had deducted a 3% prompt-payment discount when paying within ten days of delivery, and the mill had accepted the discounted payments without objection. On this occasion, the printer paid within ten days, deducting the 3% discount. The mill objected and sued the printer for the 3% balance, asserting that the Parol Evidence Rule barred evidence of the prior discounts because the writing was a total integration.",
        q: "Is evidence of the prior prompt-payment discounts admissible under UCC Article 2?",
        opts: [
            "Yes, because evidence of course of dealing is admissible to explain or supplement the terms of an agreement, even if the writing is a complete integration.",
            "No, because the written contract contained an express merger clause stating it was the complete and exclusive agreement.",
            "No, because course of dealing cannot be established without a written trade usage certificate.",
            "Yes, but only if the printer establishes that the mill acted with fraudulent intent in drafting the payment clause."
        ],
        ans: 0,
        exp: "(A) is the best response, because course of dealing is admissible to explain or supplement a writing under UCC §§ 1-303 and 2-202 even if the writing is completely integrated. Under UCC § 1-303(b), a course of dealing is a sequence of conduct concerning previous transactions between the parties that establishes a common basis of understanding for interpreting their expressions. Under UCC § 2-202(a), even where a writing is intended as a complete and exclusive statement of terms, the writing may be EXPLAINED or SUPPLEMENTED by course of dealing, course of performance, or usage of trade. Course of dealing is deemed an integral part of the commercial context of the bargain, not an extrinsic contradiction. Because the parties established an unvarying course of dealing across ten transactions, evidence of the 3% discount is admissible. (B) is incorrect because UCC § 2-202 explicitly allows course of dealing to supplement a completely integrated writing. (C) is incorrect because course of dealing is proven by past conduct between the parties, requiring no trade usage certificate. (D) is incorrect because fraud is not a prerequisite for admitting course of dealing evidence."
    },
    {
        id: 23,
        topic: "Remedies / Restitution in Favor of Breaching Buyer (UCC 2-718)",
        fp: "A consumer entered into a written contract to purchase an antique bedroom furniture set from an antique dealer for $5,000, paying a cash down payment deposit of $1,500. The contract contained no liquidated damages clause. Before the delivery date, the consumer unjustifiably repudiated the contract and refused to accept or pay for the furniture. The dealer incurred no incidental expenses, and two days later resold the identical furniture set to another customer at the full contract price of $5,000. The dealer suffered zero actual damages. When the consumer demanded the return of his $1,500 down payment, the dealer refused, claiming the right to retain the entire deposit.",
        q: "What amount of the down payment is the dealer legally entitled to retain under UCC § 2-718(2)?",
        opts: [
            "$1,500, because a buyer who willfully repudiates a contract of sale forfeits all rights to a down payment 3].",
            "Zero, because the dealer resold the goods at the full contract price and suffered zero actual damages 3].",
            "$500, because in the absence of a liquidated damages clause, the seller's statutory retention is limited to 20% of the contract price or $500, whichever is smaller 3].",
            "$1,000, representing 20% of the total contract price of the furniture 3]."
        ],
        ans: 2,
        exp: "(C) is the best response, because under UCC § 2-718(2)(b), a seller may retain only 20% of the contract price or $500, whichever is smaller, when the buyer breaches in the absence of a liquidated damages clause 3]. Under UCC § 2-718(2), where the seller justifiably withholds delivery because of the buyer's breach, the buyer is entitled to restitution of any amount by which the sum of his payments exceeds: (a) reasonable liquidated damages; or (b) in the absence of such terms, 'twenty per cent of the value of the total performance for which the buyer is obligated under the contract or $500, whichever is smaller' 3]. The contract price was $5,000 3]. Twenty percent of $5,000 is $1,000 3]. Because $500 is smaller than $1,000, the statutory ceiling on the dealer's retention is $500 3]. The dealer must refund the remaining $1,000 to the consumer ($1,500 deposit minus $500 statutory retention) 3]. (A) is incorrect because the UCC rejects common law deposit forfeiture 3]. (B) is incorrect because § 2-718(2)(b) grants the seller a statutory minimum retention even if actual damages are zero 3]. (D) is incorrect because $500 is smaller than $1,000 3]."
    },
    {
        id: 24,
        topic: "Excuse / Impracticability Due to Death of Essential Performer",
        fp: "A world-renowned classical concert pianist entered into a written contract with a symphony orchestra association to perform as the featured solo guest artist at a major gala concert on November 1 for an agreed fee of $50,000. On October 15, two weeks before the concert, the pianist died suddenly of a cerebral hemorrhage. The pianist's personal representative offered to provide an exceptionally talented, award-winning concert pianist who was a former pupil of the deceased artist to perform the identical concerto for the $50,000 fee. The symphony orchestra rejected the substitute pianist, canceled the performance, and sued the deceased pianist's estate for $30,000 in expectation damages (the extra promotional costs incurred in rescheduling a different artist for the gala).",
        q: "Is the deceased pianist's estate liable for damages for breach of contract?",
        opts: [
            "Yes, because the pianist's contractual duty survived his death and became an enforceable obligation of his probate estate 3].",
            "Yes, because the estate was legally obligated to accept the substitute pianist under the UCC right to cure.",
            "No, but only if the pianist's estate reimburses the symphony for all ticket sales refunds in quantum meruit 1, 3].",
            "No, because under Restatement (Second) of Contracts § 262, the death of a person necessary for the performance of a personal duty discharges the duty under the doctrine of impossibility 1, 3]."
        ],
        ans: 3,
        exp: "(D) is the best response, because the death of an essential performer whose personal skill was contracted for discharges the obligation under Restatement (Second) of Contracts § 262 1, 3]. Under Restatement § 262, 'If the existence of a particular person is necessary for the performance of a duty, his death or such incapacity as makes performance impracticable is an event the non-occurrence of which was a basic assumption on which the contract was made' 1, 3]. In contracts for personal artistic performances, professional services, or unique personal skill, performance is non-delegable and strictly personal 2, 3]. The pianist's unexpected death objectively discharged both parties from further executory duties 1, 3]. The nonperformance was not an actionable breach, and the estate has zero liability for expectation damages 1, 3]. (A) is incorrect because personal services contracts do not survive death 2, 3]. (B) is incorrect because personal artistic performances cannot be delegated or cured by substitute performers 2, 3]. (C) is incorrect because discharge for impossibility does not require paying expectation damages or lost revenues 1, 3]."
    },
    {
        id: 25,
        topic: "Remedies / Specific Performance in Output/Requirements Contracts",
        fp: "An electric power utility entered into a long-term, ten-year written output contract with a coal mining company. The contract provided: 'Utility agrees to purchase, and Mining Company agrees to sell, all low-sulfur metallurgical compliance coal produced by Mining Company at its Blue Mountain Mine, estimated at 1,000,000 tons per year, at a fixed price of $40 per ton.' Five years into the contract, an international energy crisis caused spot market coal prices to surge to $120 per ton. The mining company repudiated the contract, refusing to deliver any more coal to the utility, and began selling its output on the spot market. Because global supplies were committed under existing long-term contracts, low-sulfur coal of that specific chemical purity was unobtainable on the open market from any other producer in the country. The utility brought an action against the mining company seeking a decree of specific performance.",
        q: "Is the utility entitled to a decree of specific performance under UCC § 2-716?",
        opts: [
            "Yes, because under UCC § 2-716(1), specific performance may be decreed where the goods are unique or in other proper circumstances, such as an inability to effect cover 1, 2, 3, 4].",
            "No, because specific performance is an equitable remedy restricted to contracts for unique real property.",
            "No, because output contracts lack a definite quantity term and cannot be enforced by injunction 2, 3].",
            "Yes, but only if the utility deposits the full ten-year purchase price in escrow 3]."
        ],
        ans: 0,
        exp: "(A) is the best response, because UCC § 2-716(1) authorizes specific performance in sales of goods where the buyer is unable to cover under 'other proper circumstances' 1, 2, 3, 4]. Under UCC § 2-716(1), 'Specific performance may be decreed where the goods are unique or in other proper circumstances'. Official Comment 2 expressly clarifies that the inability to cover is strong evidence of 'other proper circumstances'. Where an energy utility holds a long-term requirements or output contract for vital fuel, and market scarcity makes substitute compliance coal impossible to purchase anywhere on the open market, monetary damages are inadequate, and specific performance is appropriate 1, 2, 4]. (B) is incorrect because UCC § 2-716 expressly expands specific performance to sales of goods. (C) is incorrect because output contracts are valid and enforceable under UCC § 2-306 2, 3]. (D) is incorrect because specific performance does not require advance escrow of future decade-long installments."
    }
];